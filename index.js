let bot = document.querySelector(".bot");

bot.addEventListener("mouseover", e =>{
    bot.style.background="rgb(45, 26, 153)";
    bot.style.color="white";
})

bot.addEventListener("mouseout", e =>{
    bot.style.background="rgb(203, 241, 229)";
    bot.style.color="black";
})

bot.addEventListener("click",e =>{
    bot.innerHTML="Se você cansar, aprenda a descansar, não a desistir!";
})
