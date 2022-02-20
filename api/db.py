import json
from google.cloud import bigquery
import csv
import os
import pandas
from os import listdir
# from dotenv import load_dotenv


client = bigquery.Client()

# load_dotenv()  

# os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 

def getStockHistory(ticker):
    query = """
    select time, close_price, ticker from `ugahacks7-341806.data.stock_history`
    where ticker="%s"
    """ %(ticker.upper())

    query_job = client.query(query)

    df = query_job.to_dataframe()

    return df.to_numpy()

def getCryptoHistory(ticker):
    query = """
    select * from `ugahacks7-341806.data.crypto_history`
    where ticker="%s"
    """ %(ticker.upper())

    query_job = client.query(query)

    df = query_job.to_dataframe()

    return df.to_json(orient="records", lines=True)

# getStockHistory("GOOG")
# for file in listdir('./history'):
#     if file.endswith(".csv") == False:
#         continue
#     f = "./history/" + file
#     print(f)
#     with open(f, newline='') as csvfile:
#         spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')
#         next(spamreader, None)
#         for row in spamreader:
#             query = ""s"
#             insert into `ugahacks7-341806.data.history` (
#                 volume,
#                 volume_weighted_avg,
#                 open_price,
#                 close_price,
#                 high_price,
#                 low_price,
#                 time,
#                 num_transactions,
#                 ticker)
#             VALUES (
#                 %i,
#                 %d,
#                 %d,
#                 %d,
#                 %d,
#                 %d,
#                 "%s",
#                 %i,
#                 "%s");
#                 """ % (int(row[0]), float(row[1]), float(row[2]), float(row[3]), float(row[4]), float(row[5]), str(row[6]), int(row[7]), str(row[8]))
#             query_job = client.query(query)
