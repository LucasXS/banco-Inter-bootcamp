//
// OBJETOS  OBJECT DESTRUCTURING //
//

const USER = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userId({id}){
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;    
}

//console.log(userId(USER));
//console.log(getFullName(USER));

