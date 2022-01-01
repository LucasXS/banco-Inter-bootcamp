// ALuno é um objeto que tem três propriedades
const STUDENTS = [
    {
        name: 'Lucas',
        note: 5,
        class: '1C',        
    },
    {
        name: 'Rebeca',
        note: 8,
        class: '3D',        
    },
    {
        name: 'Pedro',
        note: 7,
        class: '1B',        
    },
    {
        name: 'Miguel',
        note: 4,
        class: '3D',        
    },         
];

function studentsApproved(array, average) {
    let approved = [];

    for (let i =0; i < array.length; i++) {
            
        // OBJECT DESTRUCTURING
        const{note, name} = array[i];
    
        if(note >= average) {
            approved.push(name);
        }
    }   
    return approved;
}

console.log(studentsApproved(STUDENTS, 5));