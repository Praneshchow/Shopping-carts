console.log("it's working.");

function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    
    const previousCaseNumber = parseInt(caseNumberString);
    
    let newCaseNumber;
    
    if (isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
};

function updateCaseTotalNumber (newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
};

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalNumber (newCaseNumber);
    calculateSubTotal();
});

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);

    updateCaseTotalNumber (newCaseNumber);
    calculateSubTotal();
});

