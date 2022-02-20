from flask import Flask
from flask import jsonify

import db
import json

app = Flask(__name__)
app.config['SECRET_KEY'] = "/Users/charan/Downloads/ugahacks7-341806-57e3395e0bc8.json"

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/stock/<ticker>")
def stock_history(ticker):
    newres = []
    response = db.getStockHistory(ticker).tolist()
    for i,val in enumerate(response):
        newres.append({})
        newres[i]["x"]=val[0]
        newres[i]["y"]=val[1]
    # print(newres)
    response = jsonify(newres)
    # response = json.loads("{"+db.getStockHistory(ticker)+"}")
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

@app.route("/crypto/<ticker>")
def crypto_history(ticker):
    return db.getCryptoHistory(ticker)

@app.route("/signup")
def signup():
    return "<p>On sign up!</p>"