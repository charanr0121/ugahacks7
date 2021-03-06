from google.cloud import bigquery
import csv
from os import listdir

client = bigquery.Client()

for file in listdir('./history'):
    if file.endswith(".csv") == False:
        continue
    f = "./history/" + file
    print(f)
    with open(f, newline='') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')
        next(spamreader, None)
        for row in spamreader:
            query = """
            insert into `ugahacks7-341806.data.history` (
                volume,
                volume_weighted_avg,
                open_price,
                close_price,
                high_price,
                low_price,
                time,
                num_transactions,
                ticker)
            VALUES (
                %i,
                %d,
                %d,
                %d,
                %d,
                %d,
                "%s",
                %i,
                "%s");
                """ % (int(row[0]), float(row[1]), float(row[2]), float(row[3]), float(row[4]), float(row[5]), str(row[6]), int(row[7]), str(row[8]))
            query_job = client.query(query)
 