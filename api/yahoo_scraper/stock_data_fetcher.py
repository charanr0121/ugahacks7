import pandas as pd 
import numpy as np 
import requests 
import glob
import json

from time import sleep

def main(): 
    stocks = pd.read_csv("nasdaq.csv")
    done = glob.glob("stocks/*.csv")
    done = [item[7: item.find(".csv")] for item in done]
    # symbols = list(stocks.sort_values(by = "Market Cap", ascending = False)["Symbol"][:200])
    rand = list(np.random.choice(stocks[~stocks.Symbol.isin(done)]["Symbol"], 700))
    # symbols += rand
    symbols = rand

    for i, ticker in enumerate(symbols): 
        start_date = "2020-02-17"
        end_date = "2022-02-17"
        key = "JNXjDfnAXrs5h2xWCz3tlw7KBr5_TKaq"
        link = f"https://api.polygon.io/v2/aggs/ticker/{ticker}/range/1/day/{start_date}/{end_date}?apiKey={key}"

        response = requests.get(link)

        df = pd.read_json(json.dumps(response.json()["results"]))
        column_key = {"c": "close_price", 
                    "h": "high_price", 
                    "l": "low_price", 
                    "n": "num_transactions", 
                    "o": "open_price", 
                    "t": "time", 
                    "v": "volume", 
                    "vw": "volume_weighted_avg"}
        df = df.rename(column_key, axis = 1)
        df["time"] = pd.to_datetime(df["time"], unit = "ms")
        df["ticker"] = ticker
        df.to_csv(f"stocks/{ticker}.csv", index = False)

        print(f"Ticker: {ticker} downloaded")

        if (i + 1) % 5 == 0: 
            sleep(65)

if __name__ == "__main__": 
    main()