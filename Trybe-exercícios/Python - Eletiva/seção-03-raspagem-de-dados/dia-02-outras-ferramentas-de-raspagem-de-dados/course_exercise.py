from bs4 import BeautifulSoup
import requests

# exercício 1

from selenium import webdriver

options = webdriver.ChromeOptions()
options.add_argument("--ignore-certificate-errors")
options.add_argument("--ignore-ssl-errors=yes")
options.add_argument("--start-maximized")
# options.add_experimental_option("detach", True)
# (linha 9) impede o navegador automatizado de fechar após a execução do script

# criação de uma instância de navegador utilizando o chrome
chrome = webdriver.Chrome(options=options)


# requisições para essa instância criada utilizando o método `get`
response = chrome.get("https://quotes.toscrape.com/")

# buscando o texto da primeira citação
quote = chrome.find_element("class name", "text")
# print(quote.text) <-- resposta do exercício 1

# exercício 2

response1 = chrome.get(
    "https://www.wikimetal.com.br/"
    + "iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/"
)

all_paragraphs = chrome.find_elements("tag name", "p")

# for p in all_paragraphs:
#     print(p.text) <-- resposta do exercício 2

# exercício 3

response2 = chrome.get("https://diolinux.com.br/")

all_titles = chrome.find_elements("class name", "post-title.entry-title")


def scrape(url):
    chrome.get(url)

    posts = []

    for post in chrome.find_elements("class name", "col-md-4"):
        new_post = {}

        new_post["title"] = (
            post.find_element("class name", "post-title.entry-title")
            .find_element("tag name", "a")
            .get_attribute("innerHTML")
        )
        new_post["link"] = (
            post.find_element("class name", "post-title.entry-title")
            .find_element("tag name", "a")
            .get_attribute("href")
        )
        posts.append(new_post)

    return posts


# print(scrape("https://diolinux.com.br/")) <-- resposta do exercício 3

# exercício 4

response3 = requests.get("https://pt.wikipedia.org/wiki/Rock_in_Rio")

html_content = response3.text

soup = BeautifulSoup(html_content, "html.parser")

all_links = soup.find_all("a")


# função para acertar a formatação das urls retornadas do laço for abaixo
def check_url_format(url: str):
    if url.startswith("http") or url.find("/") != -1:
        if url.startswith("/"):
            print("https://pt.wikipedia.org" + url)
        else:
            print(url)


# laço para iterar sobre cada link encontrado na página
# e fazer a verificação da função
for link in all_links:
    check_url_format(link["href"])
