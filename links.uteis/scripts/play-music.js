let music = document.createElement("audio");
music.src = "";
music.setAttribute("id", "music")
document.body.appendChild(music);

music = document.getElementById("music");

document.getElementById("play-pause").onclick = () => {
    if(document.getElementById("play-pause").getAttribute("data-mode") == "paused") {
        music.play();
        
        document.getElementById("play-pause").innerHTML = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g fill="#ff0000" fill-rule="evenodd" class="fill-000000"><path d="M26.5 17a2.5 2.5 0 0 1 2.5 2.5v25a2.5 2.5 0 1 1-5 0v-25a2.5 2.5 0 0 1 2.5-2.5ZM37.5 17a2.5 2.5 0 0 1 2.5 2.5v25a2.5 2.5 0 1 1-5 0v-25a2.5 2.5 0 0 1 2.5-2.5Z"></path></g></svg>`;

        document.getElementById("play-pause").setAttribute("data-mode", "playing");
    }
    else {
        music.pause();

        document.getElementById("play-pause").innerHTML = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 12a1 1 0 0 1-.55.89l-10 5A1 1 0 0 1 8 18a1 1 0 0 1-.53-.15A1 1 0 0 1 7 17V7a1 1 0 0 1 1.45-.89l10 5A1 1 0 0 1 19 12Z" fill="#564489" class="fill-464646"></path></svg>`;
        
        document.getElementById("play-pause").setAttribute("data-mode", "paused");

    }
}