# playlists/validators.py

from django.core.exceptions import ValidationError


def validate_music_length(value):
    # if 1 > value or value > 3600:
    if not 1 <= value <= 3600:
        # if not value <= 1 and not value >= 3600: Mesma do course
        # if value < 1 or value > 3600: condicional correta
        raise ValidationError(
            "A duração da música deve ser um número"
            " inteiro entre 1 e 3600 segundos. O valor "
            f"{value} não é válido."
        )


# exercício 2
def validate_name(value):
    value_without_spaces = value.replace(" ", "")  # remove espaços
    if not value_without_spaces.isalpha():
        raise ValidationError("O nome do cantor deve conter apenas letras.")
