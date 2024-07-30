
function showMessageContent(message) {

    const messageContent = document.querySelector(".message-content");
    messageContent.innerHTML = `${message} , Your Message is Delivered`;

    messageContent.style.display = "block";
    setTimeout(() => {
        messageContent.style.display = "none";
    }, 2000);

}

function showInvalidMessage(){

    const invalidMessage = document.querySelector(".invalid-message");

    invalidMessage.style.display = "block";

    setTimeout(() => {
        invalidMessage.style.display = "none";
    }, 1500);
}

function onSubmitForm(e){
    e.preventDefault();
    const messageInput = document.querySelector(".message");
    const message = messageInput.value.trim();

    if(message === ""){
        showInvalidMessage();
    }else{
        showMessageContent(message);
        messageInput.value = "";
    }
}

(function () {
    const form = document.querySelector("#form");

    form.addEventListener("submit" , onSubmitForm);

})();