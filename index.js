// Write your solution in this file!

/* declare customerName to be bob in global scope */
var customerName = 'bob'

function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase();
}
// var bestCustomer
const leastFavoriteCustomer = 'michelle'


//setBestCustomer
function setBestCustomer(){
    bestCustomer = 'not bob'
}

//overwrites the best customer
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

//unsuccessfully tries to reassign the least favorite customer
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Michael'
}