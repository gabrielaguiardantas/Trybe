function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  //document.getElementsByTagName('body')[0].appendChild(document.createElement('ul'));
  //document.getElementsByTagName('body')[0].lastElementChild.setAttribute('id', 'days');
//já existe uma ul com id correspondente pronta para armazenar os dias (na estrutura).

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let getDaysList = document.querySelector('#days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    
    let day = decemberDaysList[index];
    let dayItem = document.createElement('li');
    dayItem.innerHTML = day;
    
    if (day === 24 || day === 31) {
      // Caso o dia for 24 ou 31
      dayItem.className = 'day holiday'; // Atribua a classe 'day holiday' ao li criado
      getDaysList.appendChild(dayItem); // Anexe o li criado como elemento filho do ul
    } else if (day === 4 || day === 11 || day === 18) {
      // Caso o dia for 4, 11 ou 18
      dayItem.className = 'day friday'; // Atribua a classe 'day friday' ao li criado
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      // Caso o dia for 25
      dayItem.className = 'day holiday friday'; // Atribua a classe 'day holiday friday' ao li criado
      getDaysList.appendChild(dayItem);
    } else {
      // Caso seja qualquer outro dia adicione a classe day ao li criado
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  }
} createDaysOfTheMonth();

//exercício 2
function holidayButton (buttonName) {
 document.getElementsByClassName('buttons-container')[0].appendChild(document.createElement('button')).setAttribute('id', 'btn-holiday');
 document.getElementById('btn-holiday').innerHTML = buttonName;
} holidayButton('Feriados');

//exercício 3

function colorChangeHoliday () {
    let holidayButton = document.getElementById('btn-holiday');
    let holiday = document.getElementsByClassName('day holiday');
    let backgroundColor = 'rgb(238,238,238)';
    let newColor = 'purple';
    holidayButton.addEventListener('click', function() {
   for (i = 0; i <= holiday.length; i +=1) {
    if (holiday[i].style.backgroundColor === newColor) {
      holiday[i].style.backgroundColor = backgroundColor;
   } else {
    holiday[i].style.backgroundColor = newColor;
   }
  }
  })
} colorChangeHoliday ();

//exercício 4
function fridayButton (buttonName2) {
  document.getElementsByClassName('buttons-container')[0].appendChild(document.createElement('button')).setAttribute('id', 'btn-friday');
  document.getElementById('btn-friday').innerHTML = buttonName2;
} fridayButton ('Sexta-feira');

//exercício 5
function fridayChangeText (decemberDaysList) {
  let fridayButton1 =  document.getElementById('btn-friday');
  let fridayDays = document.getElementsByClassName('friday');
  let fridayText = 'Sextouu';
  fridayButton1.addEventListener('click', function () {
    for (let i = 0; i < fridayDays.length; i += 1) {
    if (fridayDays[i].innerHTML !== fridayText) {
      fridayDays[i].innerHTML = fridayText;
    } else {
      fridayDays[i].innerHTML = decemberDaysList[i];
      }
    }
  })
} let decemberFridays = [4, 11, 18, 25]; 
fridayChangeText (decemberFridays);

//exercício 6
function dayMouseOver() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600'; // Ele pega o evento alvo e altera o estilo de fontWeight para 600
  });
} dayMouseOver();

function dayMouseOut() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200'; // Ele pega o evento alvo e altera o estilo de fontWeight para 200
  });
} dayMouseOut();

//exercício 7
function newTaskSpan(task) {
  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName); // Anexando a task como filha de taskContainer
} newTaskSpan('tarefa 1');

//exercício 8
function newTaskDiv(color) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask); // Adiciona newTask como filho de tasksContainer
} newTaskDiv('green');

//exercício 9
function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');
  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
} setTaskClass();

//exercício 10
function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor; // Pega a cor de fundo do primeiro elemento salvo na variável "selectedTask" e salva na variável "color"
      event.target.style.color = color; // atribui a cor salva na variável "color" ao evento alvo
    } else if (eventTargetColor === taskColor) {
      event.target.style.color = 'rgb(119,119,119)';  // Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
    }
  });
} setDayColor();
