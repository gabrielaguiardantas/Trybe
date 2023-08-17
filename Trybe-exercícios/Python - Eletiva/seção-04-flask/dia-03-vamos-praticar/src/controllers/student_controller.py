from flask import Blueprint, redirect, render_template, request
from models.student_model import StudentModel

bp = Blueprint("student_controller", __name__)


def _get_student(registration_number: int):
    return StudentModel.find_one({"registration_number": registration_number})


@bp.get("/")
def home():
    return render_template("alunos.html", students=StudentModel.find_all())


@bp.get("/raw")
def raw_data():
    return StudentModel.find_all()


@bp.route("/add_student", methods=["GET", "POST"])
def add_student():
    if request.method == "POST":
        name = request.form["name"]
        registration_number = request.form["registration_number"]
        StudentModel.add_student(name, int(registration_number))
        return redirect("/")
    return render_template("adicionar_aluno.html")


@bp.route("/edit_student/<registration_number>", methods=["GET", "POST"])
def student_update(registration_number: int):
    student = _get_student(int(registration_number))
    if student is None:
        return {"error": "Aluno não encontrado"}, 404
    if request.method == "POST":
        student_name = request.form["name"]
        StudentModel.student_update(student_name, registration_number)
        return redirect("/")
    return render_template(
        "editar_aluno.html",
        student=student,
        student_registration_number=registration_number,
    )


@bp.route("/delete_student/<registration_number>", methods=["GET", "POST"])
def delete_student(registration_number: int):
    student = _get_student(int(registration_number))
    if student is None:
        return {"error": "Aluno não encontrado"}, 404
    if request.method == "GET":
        return render_template("deletar_aluno.html", student=student)
    if request.method == "POST":
        StudentModel.delete_student(registration_number)
    return redirect("/")
