# musics_controller.py
from bson import ObjectId
from flask import Blueprint, jsonify, request
from models.music_model import MusicModel
from http import HTTPStatus


musics_controller = Blueprint("musics", __name__)
# O primeiro parâmetro determina o nome da blueprint, já o segundo
# parâmetro é o caminho de importação do pacote com a blueprint,
# normalmente utilizamos __name__ referindo-se ao próprio módulo.
#
# Caso você tente registrar outra blueprint com o nome "musics",
# você se irá se deparar com o seguinte erro:
#
# ValueError: The name 'musics' is already registered for a different
# blueprint. Use 'name=' to provide a unique name.
#
# Ou seja: O nome 'musics' já está registrado, mas podemos usar 'name='
# para fornecer um nome diferente para a sua nova Blueprint.
#


# ---------
# Funções protegidas da camada de Controller
def _get_all_musics():
    musics = MusicModel.find()
    return [music.to_dict() for music in musics]


def _get_music(id: str):
    # ObjectId transforma uma string em ID do MongoDb
    return MusicModel.find_one({"_id": ObjectId(id)})


# ---------
# Rotas HTTP para nossa API
@musics_controller.route("/", methods=["GET"])
def music_index():
    musics_list = _get_all_musics()
    return jsonify(musics_list)


@musics_controller.route("/random", methods=["GET"])
def music_random():
    music = MusicModel.get_random()
    # Exemplo de Validação
    if music is None:
        # O Flask entende que o número após o jsonify, representa o Status HTTP
        return (
            jsonify({"error": "No musics available"}),
            HTTPStatus.NOT_FOUND,
        )

    return jsonify(music.to_dict()), HTTPStatus.OK


@musics_controller.route("/", methods=["POST"])
def music_post():
    new_music = MusicModel(request.json)
    new_music.save()
    return jsonify(new_music.to_dict()), HTTPStatus.CREATED


@musics_controller.route("/<id>", methods=["PUT"])
def music_update(id: str):
    music = _get_music(id)
    # Exemplo de Validação
    if music is None:
        return jsonify({"error": "music not found"}), HTTPStatus.NOT_FOUND
    music.update(request.json)
    return jsonify(music.to_dict()), HTTPStatus.OK


@musics_controller.route("/<id>", methods=["GET"])
def music_show(id: str):
    music = _get_music(id)
    if music is None:
        return jsonify({"error": "music not found"}), HTTPStatus.NOT_FOUND
    return jsonify(music.to_dict()), HTTPStatus.OK


@musics_controller.route("/<id>", methods=["DELETE"])
def music_delete(id: str):
    music = _get_music(id)
    if music is None:
        return jsonify({"error": "music not found"}), HTTPStatus.NOT_FOUND

    music.delete()
    return jsonify(music.to_dict()), HTTPStatus.NO_CONTENT
