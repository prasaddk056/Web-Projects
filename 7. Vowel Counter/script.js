function checkVowels(){

    let text = document.getElementById("inputText").value;
    // convert to lowercase
    text = text.toLowerCase();

    const vowels = ["a","e","i","o","u"];
    let vowelCount = 0;

    for(let i = 0 ; i < text.length ; i++) {

        let char = text.charAt(i);

        if(vowels.includes(char)) {
            vowelCount++;
        }
    }

    const result = document.getElementById("result");

    result.innerText = `Vowel Count : ${vowelCount}`;

}    
