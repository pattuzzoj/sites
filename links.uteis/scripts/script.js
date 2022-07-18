const menu1 = document.getElementById("menu");
const back_menu = document.getElementById("back-menu");
const choice = document.querySelectorAll("[data-choice]");
const option = document.querySelectorAll("[data-option]");
const footer = document.querySelector("footer");
let carrosselContainer = document.querySelector(".section_active").querySelector(".carrossel");
let cardCollection = document.getElementsByClassName("section_active")[0].getElementsByClassName("card");
let quantidade = cardCollection.length;
let num = 1;
let slide = false;

for(let index = 0; index < document.querySelectorAll("[data-option]").length; index++) {
    document.querySelectorAll("[data-option]")[index].style.display = "none";
}

for (let i = 0; i < choice.length; i++) {
    choice[i].addEventListener("click", displayOption);
    back_menu.addEventListener("click", displayMenu);

    function displayOption() {
        menu1.style.display = "none";
        back_menu.style.display = "initial";

        if(menu1.classList.contains("section_active")) {
            menu1.classList.toggle("section_active");
        }

        if(option[i].style.display == 'none') {
            option[i].style.display = "initial";
            option[i].classList.toggle("section_active");

            if(slide) {
                cardCollection = document.getElementsByClassName("section_active")[0].getElementsByClassName("card");
                quantidade = cardCollection.length;
                carrosselContainer = document.querySelector(".section_active").querySelector(".carrossel");

                DisplayMode("none");
            
                for(let index  = 0; index < quantidade; index++) {
                    if(cardCollection[index].classList == "card card_active") {
                        cardCollection[index - 1].style.display = "block";
                        cardCollection[index].style.display = "block";
                        cardCollection[index + 1].style.display = "block";
                    }
                }
        }
        }

        if (screen.width < 540) {
            footer.style.marginBottom = "6vh";
        }
    }

    function displayMenu() {
        back_menu.style.display = '';
        menu1.style.display = "initial";
        
        if(menu1.classList.contains("section_active") != true) {
            menu1.classList.toggle("section_active");
        }
        
        if(option[i].style.display == "initial") {
            option[i].style.display = "none";
            option[i].classList.toggle("section_active");
        }

        if (screen.width < 540) {
            footer.style.marginBottom = "initial";
        }
    }
}

if(document.body.scrollWidth >= 992 || document.body.clientWidth >= 992) {
    document.getElementById("previous").onclick = () => {		
        let carrossel = carrosselContainer.removeChild(cardCollection[quantidade - 1]);
        carrosselContainer.insertBefore(carrossel, carrosselContainer.children[0]);
        
        DisplayMode("none");
        
        for(let index  = 0; index < quantidade; index++) {
            if(cardCollection[index].classList == "card card_active") {
                cardCollection[index + num - 1].classList.remove("card_active");
                cardCollection[index - 1].classList.add("card_active");
                
                break;
            }
        }
        
        for(let index  = 0; index < quantidade; index++) {
            if(cardCollection[index].classList == "card card_active") {
                cardCollection[index - 1].style.display = "block";
                cardCollection[index].style.display = "block";
                cardCollection[index + 1].style.display = "block";
            }
        }
    }
    
    document.getElementById("next").onclick = () => {
        DisplayMode("none");
        
        for(let index  = 0; index < quantidade; index++) {
            if(cardCollection[index].classList == "card card_active") {
                cardCollection[index].classList.remove("card_active");
                cardCollection[index + num].classList.add("card_active");
                
                break;
            }
        }
        
        for(let index  = 0; index < quantidade; index++) {
            if(cardCollection[index].classList == "card card_active") {
                cardCollection[index - 1].style.display = "block";
                cardCollection[index].style.display = "block";
                cardCollection[index + 1].style.display = "block";
            }
        }
        
        let carrossel = carrosselContainer.removeChild(cardCollection[0]);
        carrosselContainer.appendChild(carrossel);
    }
}


function DisplayMode(mode) {
    for(let index  = 0; index < quantidade; index++) {
        cardCollection[index].style.display = mode;
    }
}