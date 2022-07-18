document.getElementById("switch-view").onclick = () => {
    if(!menu.classList.contains("section_active")) {
        carrosselContainer = document.querySelector(".section_active").querySelector(".carrossel");
        cardCollection = document.getElementsByClassName("section_active")[0].getElementsByClassName("card");
        quantidade = cardCollection.length;
        
        if(carrosselContainer.classList.contains("grid") && document.body.clientWidth >= 992) {
            slide = true;
            carrosselContainer.classList.replace("grid", "slide");
            document.getElementById("switch-view").innerHTML = `<svg data-name="Layer 1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 4 21.67 21.86 4 32l17.86 10.33L32 60l10.33-17.86L60 32 42.14 21.67ZM22 22h5v5h-5Zm20 20h-5v-5h5Zm2-17 12 7-12 6.89V35h-9v9h4l-7 12-6.89-12H29v-9h-9v4L8 32l12-6.93V29h9v-9h-4l7-12 6.93 12H35v9h9ZM22 42v-5h5v5Zm20-20v5h-5v-5Z" fill="#606dfd" class="fill-000000"></path></svg>`;
            document.getElementById("slide-panel").classList.add("slide-panel_activated");
            
            DisplayMode("none");
            
            for(let index  = 0; index < quantidade; index++) {
                if(cardCollection[index].classList.contains("card_active")) {
                    cardCollection[index - 1].style.display = '';
                    cardCollection[index].style.display = '';
                    cardCollection[index + 1].style.display = '';
                    
                    break;
                }
            }
        }
        else {
            slide = false;
            carrosselContainer.classList.replace("slide", "grid");
            document.getElementById("switch-view").innerHTML = `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M12 4H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 8H6V6h6ZM26 4h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 8h-6V6h6ZM12 18H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2Zm0 8H6v-6h6ZM26 18h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2Zm0 8h-6v-6h6Z" fill="#606dfd" class="fill-000000"></path></svg>`;
            document.getElementById("slide-panel").classList.remove("slide-panel_activated");
            
            DisplayMode("block");
        }
    }
}