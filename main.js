let bill = 0
let tipPercentage = 0
let numberOfPeople = 0

let billInput = document.querySelector("#bill")
billInput.addEventListener("Input", receiveBillValue)

let NumberOfPeopleInput = document.querySelector("#people")
NumberOfPeopleInput.addEventListener("input", )


function receiveBillValue() {
    bill = billInput.valueAsNumber

    calculate()
}

function receiveNumberOfPeopleValue(){
    numberOfPeople = numberOfPeopleInput.valueAsNumber

    calculate()
}

function calculate() {
    if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0){
        console.log("é possivel calcular")
    } else{
        console.log("Ainda não dá! Preencha tudo.")
    }
}    