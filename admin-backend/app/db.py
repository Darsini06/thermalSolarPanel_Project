from pymongo import MongoClient
import os
import certifi
from dotenv import load_dotenv

load_dotenv()  # This loads variables from .env

MONGO_URI = os.getenv("MONGO_URI")
DATABASE_NAME = os.getenv("DATABASE_NAME")

print("MONGO_URI:", MONGO_URI)
print("DATABASE_NAME:", DATABASE_NAME)

# Use certifi to handle SSL certificate verification
client = MongoClient(MONGO_URI, tlsCAFile=certifi.where())
db = client[DATABASE_NAME]

print("MongoDB connected:", db.name)
