import pandas as pd 
import numpy as np 
import re
import glob

from time import sleep
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import Select
from selenium.common.exceptions import NoSuchElementException

def main(): 
    stocks = pd.read_csv("nasdaq.csv")

    symbols = glob.glob("stocks/*.csv")
    symbols = [item[7: item.find(".csv")] for item in symbols]

    df = pd.DataFrame({"symbols": symbols})
    df["link"] = df.apply(lambda row: f"https://www.morningstar.com/stocks/xnas/{row.symbols}/sustainability", axis = 1)
    
    ser = Service("D:/ugahacks7/api/yahoo_scraper/chromedriver_win32/chromedriver.exe")
    driver = webdriver.Chrome(service = ser)

    done = pd.read_csv("sustainability_backup.csv")["symbols"].to_list()
    df = df[~df.symbols.isin(done)]

    df["data"] = ""
    for i, row in df.iterrows(): 
        driver.get(row.link)
        sleep(2)
        issues = []
        for item in driver.find_elements(By.CLASS_NAME, "issues-content"): 
            if item.text != 'Overall':
                issues.append(item.text)
            
        rating = driver.find_element(By.CLASS_NAME, "sal-eqsv-sustainability-rating")
        score = len(rating.find_element(By.CLASS_NAME, "rating-content").find_elements(By.CLASS_NAME, "rating"))
        

        incidents = driver.find_element(By.CLASS_NAME, "incidents").text
        print(row.symbols, "Issue: ", issues, "Score: ", score, "Incidents", incidents)
        df.loc[i, "data"] = (issues, score, incidents)

        if i % 5 == 0:
            df.to_csv("sustainability_backup.csv", index = False, mode = 'a')

    df.to_csv("sustainability.csv", index = False, mode = "a")


if __name__ == "__main__": 
    main()
    