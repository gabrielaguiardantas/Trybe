# importação do webdriver, que é o que possibilita a implementação para todos
# os principais navegadores da web
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

# Para usar o chrome ao invés do firefox trocamos FirefoxOptions
# por ChromeOptions
# Todavia, caso esteja utilizando o docker, atente-se ao container
# sendo utilizado.
options = webdriver.ChromeOptions()
options.add_argument("--ignore-certificate-errors")
options.add_argument("--ignore-ssl-errors=yes")
options.add_argument("--start-maximized")
options.add_experimental_option("detach", True)

# criação de uma instância de navegador utilizando o chrome
chrome = webdriver.Chrome(options=options)


# requisições para essa instância criada utilizando o método `get`
response = chrome.get("https://www.python.org/")

# pesquisa na instância aberta do navegador pela primeira ocorrência
# do nome 'q'
search_input = chrome.find_element("name", "q")

# escreve selenium dentro do campo de pesquisa
search_input.send_keys("selenium")

# pressiona enter para realizar a busca
search_input.send_keys(Keys.ENTER)
