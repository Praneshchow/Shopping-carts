console.log("it's working.");

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    console.log(caseNumberString);
    const previousCaseNumber = parseInt(caseNumberString);
    
    const newCaseNumber= previousCaseNumber+1;
    console.log(newCaseNumber)
    caseNumberField.value = newCaseNumber;
});

document.getElementById('btn-case-minus').addEventListener('click', function(){
    console.log("effort");
})

