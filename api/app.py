from flask import Flask
from flask import jsonify
import pandas as pd 
import numpy as np
import flask.request
from datawrapper import Datawrapper

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route("/signup")
def signup():
    return "<p>On sign up!</p>"


@app.route("/match_stocks/")
def match_stocks():
    values = flask.request.args.get("values")
    esg = pd.read_csv("D:/ugahacks7/api/yahoo_scraper/esg.csv", index_col = 0)
    df = pd.read_csv("all_stocks.csv")
    tickers = esg["symbols"].to_list()

    def avg_returns(ticker): 
        stock = df[df.ticker == ticker]
        price = stock.close_price
        return_1 =
        (price.iloc[len(price) - 1] - price.iloc[len(price)//2]) / price.iloc[len(price)//2]
        return_2 = (price.iloc[len(price)//2] - price.iloc[0]) / price.iloc[0]
        return np.mean([return_1, return_2])

    esg["avg_returns"] = esg.apply(lambda row: avg_returns(row.symbols), axis = 1)

    customer_values = [value1, value2, value3] 

    def match_score(row, customer_values): 
        value_to_risk_map = {
            "Ethical Business": "Business Ethics",
            "Education": "Human Capital",
            "Data Privacy": "Data Privacy & Security",
            "Following Regulation": "Product Governance",
            "Anti-pollution": "Emissions, Effluent, and Waste",
            "Equity": "Access to Basic Services",
            "Sustainability": "ESG Integration",
            "Transparency": "Financials",
            "Carbon Footprint": "Carbon",
            "Worker Rights & Protection": "Occupational Health & Safety",
            "Anti-corruption": "Bribery & Corruption",
            "Environmental Impact": "E&S Impact of Products & Services", 
            "Human Rights": "Human Rights",
            "Supplier Sustainability": "Supply Chain",
            "Land Preservation": "L& Use & Biodiversity",
            "Sustainable Products": "Products & Services"
        } #value to risk map

        business_risk = [row.issue1, row.issue2, row.issue3] 
        risk_score = 0
        for value in customer_values:
            if value_to_risk_map[value] in business_risk: 
                risk_score += 1

        return 3 - risk_score

    esg["match_score"] = esg.apply(lambda row: match_score(row, customer_values), axis = 1)
    esg["weighted_rec"] = esg["avg_returns"]/esg["avg_returns"].max()*10 + esg["match_score"] + esg["score"]
    return jsonify(esg.sort_values(by="weighted_rec", ascending = False)[:10].symbols)

@app.route("/create_chart/<ticker>")
def create_chart(ticker):
    key = "z4iOaNPllSXzAlNwbiCL9zJsFP8fZWTtTZFoJiIBHHGOqOtoXyuePqgKA6SAnuLT"
    data_wrapper_url = "https://api.datawrapper.de/v3/data-wrapper"
    #get Apple data 
    df = pd.read_csv("../data/all_stocks.csv")
    df = df[df.ticker == ticker]
    df = df[["time", "close_price"]]

    
    dw = Datawrapper(access_token = key)
    stock_chart = dw.create_chart(title = f"{ticker} Stock Closing Price", chart_type="d3-lines", data=df)

    dw.publish_chart(stock_chart['id'])
    return dw.get_iframe_code(stock_chart['id'])





