from flask import Flask, render_template

# instancia o servidor Flask
app = Flask(__name__)

# Indica para a aplicação onde ficarão nossos arquivos estáticos e templates
app.static_folder = "views/static"
app.template_folder = "views/templates"

# Registra os controllers
# app.register_blueprint(home_controller, url_prefix="/")


class Movie:
    def __init__(self, title, release_year):
        self.title = title
        self.release_year = release_year


movie1 = Movie("The Matrix", 1999)
movie2 = Movie("The Matrix Reloaded", 2003)
movie3 = Movie("The Matrix Revolutions", 2003)
movies = [movie1, movie2, movie3]


@app.route("/")
def index():
    return render_template("index.html", movies=movies)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8000)
