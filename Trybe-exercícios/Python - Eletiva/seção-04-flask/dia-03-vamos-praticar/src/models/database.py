from pymongo import MongoClient


class Config:
    db_client = MongoClient("mongodb://localhost:27017/")

    db = db_client.db_student
