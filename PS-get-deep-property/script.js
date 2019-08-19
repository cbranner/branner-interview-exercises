
function getDeepProperty() {

    this.obj = dataObject;
    this.path = dataObject.person.name.lastName;
    return this.path

}

const dataObject = { person: { name: { first: 'FirstName', middleInitial: 'I', lastName: 'LastName' } } }

const lastName = getDeepProperty();

console.log(lastName);