//exercício 1
const newEmployeeRegistration  = (nomeCompleto) => {
    email = `${nomeCompleto.replace('ã', "a").replaceAll(' ', '_').toLowerCase()}@trybe.com`;
    return { nomeCompleto, email }}; 

const newEmployeesListNames = ['João Lucas Nascimento', 'Gabriel Aguiar Dantas', 'Bill Motta'];

const newEmployees = () => {
    const employeesList = [];
    for (let i = 0; i < newEmployeesListNames.length; i += 1) {
        employeesList.push(newEmployeeRegistration(newEmployeesListNames[i]));
        const employees = {
            employeeID: i,
            id: employeesList[i],
    }; console.log(employees);
    }   
}; newEmployees();

//exercício 2
const checkIfUWin = (ticketLuckNumber, winingTicket) => { 
    winingTicket = parseInt(Math.random()*5);
    if(ticketLuckNumber === winingTicket) return console.log('Parabéns você ganhou');
else return console.log('Tente novamente');
};

const LotteryLuck = (ticketLuckNumber, checkIfUWin) => {

checkIfUWin(ticketLuckNumber);

}; LotteryLuck(4, checkIfUWin);

//exercício 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkTestResults = () => {
    testResult = 0;
    for (let i = 0; i <= 9; i += 1) {
        if (RIGHT_ANSWERS[i] === STUDENT_ANSWERS[i]) {
            testResult += 1;
        } else if (STUDENT_ANSWERS[i] === 'N.A') {
            testResult += 0;
        } else {
            testResult -= 0.5;
        }
    } return console.log(testResult);
}; 

const examCorrector = (RIGHT_ANSWERS, STUDENT_ANSWERS, checkTestResults) => {
    RIGHT_ANSWERS;
    STUDENT_ANSWERS;
    return checkTestResults;
}; examCorrector(RIGHT_ANSWERS, STUDENT_ANSWERS, checkTestResults());
