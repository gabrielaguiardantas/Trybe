const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const modifyLesson2 = (lesson2, key, value) => {
    lesson2[key] = value;
    console.log(lesson2);
  }; modifyLesson2(lesson2, 'turno', 'noite');

  const objectKeysList = (object) => {
    Object.keys(object);
    console.log(Object.keys(object));
  }; objectKeysList(lesson3);

  const objectSize = (object) => {
    Object.keys(object).length;
    console.log(Object.keys(object).length);
  }; objectSize(lesson3);

  const objectValueList = (object) => {
    Object.values(object);
    console.log(Object.values(object));
  }; objectValueList(lesson3);

  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
  console.log(allLessons);

  const allClassesStudents = () => {
    console.log(allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes);
  }; allClassesStudents();

  const verifyPair = (object, key, value) => {
    if (object[key] === value) {
        console.log(true);
    } else {
        console.log(false);
    }
  }; verifyPair(lesson2, 'turno', 'noite');
  
