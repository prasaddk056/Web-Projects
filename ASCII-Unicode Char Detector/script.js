function detectChar(){

    const charInput = document.getElementById("charInput");
    const result = document.getElementById("result");

    const char = charInput.value;
    
    if (isASCII(char)) {
        result.innerText = "ASCII Character";
    } else {
        result.innerText = "Unicode Character";
    }

}

function isASCII(char){

    return char.charCodeAt(0) <= 127;

}
