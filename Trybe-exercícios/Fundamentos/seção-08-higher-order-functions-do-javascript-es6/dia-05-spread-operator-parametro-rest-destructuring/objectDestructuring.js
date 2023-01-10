
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
};

const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
};

const completeJobInfo = {...user, ...jobInfos};

const { name, age, nationality, profession, squad, squadInitials } = completeJobInfo;

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a Software enginner and my squad is ${squad}`);

