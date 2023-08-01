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
