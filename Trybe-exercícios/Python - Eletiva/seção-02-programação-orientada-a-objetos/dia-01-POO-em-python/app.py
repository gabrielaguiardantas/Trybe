from exercise_course import Database


# exercício 7 e 8
class db(Database):
    def __init__(
        self,
        dialect: str,
        user: str,
        host: str,
        password: str,
        database: str,
        port: str | int = "",
    ):
        """Creates a db instance
        Parameters
        ----------
        dialect : str
        user : str
        host : str
        password : str
        database : str
        port : str | int, optional, by default ""

        >>> database = db(
        ...     dialect = "",
        ...     user = "",
        ...     host = "",
        ...     password = "",
        ...     database = "",
        ...     port = 3.3,
        ... )

        Traceback (most recent call last):
        ...
        ValueError: `port` must have a numeric value
        """
        if not port:
            if dialect == "mysql":
                port = 3306
            elif dialect == "postgres":
                port = 5432
            else:
                raise ValueError(
                    "invalid default `port` for unrecognized `dialect`"
                )
        if type(port) == str and not port.isnumeric():
            raise ValueError("`port` must have a numeric value")

        self.connection_url = (
            f"{dialect}://{user}:{password}@{host}:{port}/{database}"
        )
