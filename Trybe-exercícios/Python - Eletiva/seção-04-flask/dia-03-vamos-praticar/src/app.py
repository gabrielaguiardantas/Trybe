from flask import Flask
from controllers import student_controller


app = Flask(__name__)

app.template_folder = "views/templates"
app.static_folder = "views/static"

app.register_blueprint(student_controller.bp, url_prefix="/")


if __name__ == "__main__":
    app.run(port=8000, debug=True)
