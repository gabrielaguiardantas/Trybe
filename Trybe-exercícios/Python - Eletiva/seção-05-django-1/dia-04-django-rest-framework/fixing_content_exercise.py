"""Exercício 1 - Resposta
Para criar artistas basta fazer uma requisição POST para a url:
http://localhost:8000/singers/ com o seguinte body:
{
    "name": "Nome do artista"
}
Para criar músicas basta fazer uma requisição POST para a url:
http://localhost:8000/musics/ com o seguinte body:
{
    "name": "Nome da música",
    "recorded_at": "data de gravação - Padrão americano AAAA-MM-DD",
    "length_in_seconds": segundos de duração,
    "singer": "http://localhost:8000/singers/<int:id>/"
}

Exercício 2 - Resposta
Para criar uma playlist basta fazer uma requisição POST para a url
(ou acessar o /admin e inserir a playlist por lá):
http://localhost:8000/playlists/ com o seguinte body:
  {
    "name": "Nome da playlist",
    "is_active": Booleano (opcional),
    "musics": [
      "http://localhost:8000/musics/1/", (url da música criada no exercício 1)
      "http://localhost:8000/musics/2/",
      "http://localhost:8000/musics/3/"
    ]
  }

Exercício 3 - Resposta
Para editar um artista basta um PUT ou PATCH para a url:
http://localhost:8000/singers/<int:id do artista>/ com o seguinte body:
{
    "name": "Nome do artista"
}

Exercício 4 - Resposta
Para excluir uma música basta um DELETE para a url:
http://localhost:8000/musics/<int:id da música>/
"""
