 const card = document.querySelectorAll(".card");

 window.addEventListener("scroll" , animateCards);

 function animateCards(){

    const checkingBottom = (window.innerHeight / 4)  * 3;

    card.forEach((singleCard) =>{
        const cardTop = singleCard.getBoundingClientRect().top;

        let toSlideIn = cardTop < checkingBottom;

        if(toSlideIn){
            singleCard.classList.add("slidingIn");
        } else {
            singleCard.classList.remove("slidingIn");
        }
    });
 }