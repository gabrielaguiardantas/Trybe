from pymongo import MongoClient
from parsel import Selector
import requests

# exercício 1
response1 = requests.get("https://httpbin.org/encoding/utf8")
print(response1.status_code)
print(response1.text)

# exercício 2
response2 = requests.get("https://api.github.com/users")
for user in response2.json():
    print(user["login"], user["url"])

# exercício 3
response3 = requests.get(
    "https://scrapethissite.com/pages/advanced/?gotcha=headers",
    headers={"User-agent": "Mozilla", "Accept": "text/html"},
)
print(response3.status_code)
print(response3.text)
assert "bot detected" not in response3.text

# exercício 4

response4 = requests.get(
    "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"
)
selector = Selector(text=response4.text)
title = selector.css("h1::text").get()
price = selector.css(".price_color::text").get()[2:]
description = selector.css("#product_description ~ p::text").get()[:-7]
url_book_image = selector.css(".item img::attr(src)").get()


# exercício 5

available_quantity = (
    selector.css(".instock.availability::text").getall()[1].strip()
)
for char in available_quantity:
    if char.isnumeric():
        available_quantity = int(char)

print(
    f"{title}, {price}, {description}, {url_book_image}, {available_quantity}."
)

# exercício 6

# implementação do course
category = input("Escolha uma categoria: ")
with MongoClient() as client:
    db = client.library
    for book in db.books.find({"categories": category}, projection=["title"]):
        print(book["title"])

# exercício 7

# implementação do course
with MongoClient() as client:
    db = client.library
    pipelines = [
        {"$match": {"status": "PUBLISH"}},
        {"$unwind": "$categories"},
        {"$group": {"_id": "$categories", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}},
    ]
    for category in db.books.aggregate(pipelines):
        print(category["_id"], category["count"], sep=": ")

# exercício 8

response5 = requests.get(
    "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"
)
selector = Selector(text=response5.text)
for flag in selector.css(".gallerybox img"):
    country_name = flag.css("img::attr(alt)").get()
    url_img = flag.css("img::attr(src)").get()
    print(country_name, f"https:{url_img}")

# exercício 9

# implementação do course
has_next = True
page = 1
counter = 0
while has_next:
    response = requests.get(
        f"http://quotes.toscrape.com/api/quotes?page={page}"
    )
    json_content = response.json()
    for quote in json_content["quotes"]:
        print(quote["text"])
        counter += 1
    has_next = json_content["has_next"]
    page = json_content["page"] + 1
print(counter)
