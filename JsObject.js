
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function displayStudentInfo(students){
    for(student of students){
        console.log("Name:" + " " + student.name +","+ " "+ "Cohort:" + " " + student.cohort);
    }
}

displayStudentInfo(students);

/*-------------------------------------------------------------- 2 ------------------------------------------------------------*/

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

function userEmployeesManagers(users){
    for (const key in users) {
        console.log(key.toUpperCase());
        for(let i =0; i< users[key].length; i++){
            let number = i + 1;
            let first_name = users[key][i].first_name.toUpperCase();
            let last_name = users[key][i].last_name.toUpperCase();
            let infoLength = first_name.length + last_name.length;
            console.log(`${number} - ${last_name}, ${first_name} : ${infoLength}`);
        }
    }
}

userEmployeesManagers(users);