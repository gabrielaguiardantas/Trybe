from exercise import fizz_buzz_numeric_list, validate_email


def test_fizz_buzz_numeric_list():
    "Para o número 3 a função deve retornar uma lista [1, 2, Fizz]"
    assert fizz_buzz_numeric_list(3) == [1, 2, "Fizz"]


def test_validate_email():
    "Para o email gabrielaguiardantasgmail.com deve retornar um erro"
    assert validate_email("gabrielaguiardantasgmail.com") is TypeError
