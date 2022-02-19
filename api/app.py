from flask import Flask
import db

app = Flask(__name__)
app.config['SECRET_KEY'] = "/Users/charan/Downloads/ugahacks7-341806-57e3395e0bc8.json"

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/stock/<ticker>")
def stock_history(ticker):
    return db.getStockHistory(ticker)

@app.route("/crypto/<ticker>")
def crypto_history(ticker):
    return db.getCryptoHistory(ticker)

@app.route("/signup")
def signup():
    return "<p>On sign up!</p>"