
const input = document.querySelector("input");

let firstThreeNumbers = "";
let previouValue  = "";

input.addEventListener("input" , (e) => {

    const inputValue = e.target.value;

    if(inputValue.length === 4 & previouValue.length < inputValue.length){

        firstThreeNumbers = inputValue.substring(0,3);

        input.value = `+(${firstThreeNumbers}) - ${inputValue[inputValue.length - 1]}`;
    
    }

    previouValue = inputValue;


});
