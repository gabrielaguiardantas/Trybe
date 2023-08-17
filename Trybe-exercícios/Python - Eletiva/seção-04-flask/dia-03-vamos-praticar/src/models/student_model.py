from .database import Config


class StudentModel:
    _collection = Config.db.students

    @classmethod
    def find_one(cls, query: dict) -> dict:
        return cls._collection.find_one(query)

    @classmethod
    def find_all(cls) -> list:
        return [
            {
                "name": student["name"],
                "registration_number": student["registration_number"],
            }
            for student in cls._collection.find({})
        ]

    @classmethod
    def add_student(cls, name: str, registration_number: int) -> None:
        cls._collection.insert_one(
            {"name": name, "registration_number": registration_number}
        )

    @classmethod
    def student_update(cls, name: str, registration_number: int) -> None:
        cls._collection.find_one_and_update(
            {"registration_number": int(registration_number)},
            {"$set": {"name": name}},
        )

    @classmethod
    # no gabarito ele atribuiu somente os finds a métodos de classe
    def delete_student(cls, registration_number: int) -> None:
        cls._collection.delete_one(
            {"registration_number": int(registration_number)}
        )
