const cartas = `{
"tutoriais": {
    "freecodecamp": {
        "title": "Freecodecamp",
        "description": "Nossa missão: ajudar as pessoas a aprender a codificar gratuitamente.",
        "url": "https://www.freecodecamp.org/learn",
        "hreflang": "en"
    },
    "javascript.info": {
        "title": "Javascript.info",
        "description": "Tutorial JavaScript moderno, explicações simples e atualizadas.",
        "url": "https://javascript.info/",
        "hreflang": "en"
    },
    "javatpoint": {
        "title": "Javatpoint",
        "description": "Javatpoint fornece tutoriais e perguntas de entrevistas de todas as tecnologias.",
        "url": "https://www.javatpoint.com/",
        "hreflang": "en"
    },
    "mozzila": {
        "title": "Mozzila",
        "description": "O site MDN Web Docs fornece informações sobre tecnologias da Web Aberta, incluindo HTML CSS e APIs para sites da Web e aplicativos web progressivos.",
        "url": "https://developer.mozilla.org/pt-BR/",
        "hreflang": "pt"
    },
    "tutorialspoint": {
        "title": "Tutorialspoint",
        "description": "Biblioteca de Tutoriais Online - O Melhor Conteúdo sobre tecnologias mais recentes, incluindo C, C++, Java, Python, PHP, Machine Learning, Data Science...",
        "url": "https://www.tutorialspoint.com/index.htm",
        "hreflang": "en"
    },
    "tutsplus": {
        "title": "Tutsplus",
        "description": "Atualizado diariamente, descubra mais de 20750 Tutoriais de como fazer. Encontre vídeos e cursos online para ajudá-lo a aprender habilidades como código, fotografia, web design e muito mais!",
        "url": "https://tutsplus.com/",
        "hreflang": "en"
    },
    "w3school": {
        "title": "W3School",
        "description": "O W3Schools é otimizado para aprendizado, testes e treinamento. Exemplos podem ser simplificados para melhorar a leitura e a compreensão básica.",
        "url": "https://www.w3schools.com/",
        "hreflang": "en"
    }
},
"video tutoriais": {
    "curso em video": {
        "title": "Curso em Vídeo",
        "description": "",
        "url": "https://www.youtube.com/c/CursoemVídeo",
        "hreflang": "pt"
    },
    "chief of design": {
        "title": "Chief of Design",
        "description": "",
        "url": "https://www.youtube.com/c/Chiefofdesign/playlists",
        "hreflang": "pt"
    },
    "cgb cursos": {
        "title": "CGB Cursos",
        "description": "",
        "url": "https://www.youtube.com/c/cfbcursos/videos",
        "hreflang": "pt"
    },
    "escola front-end": {
        "title": "Escola Front-End",
        "description": "",
        "url": "https://www.youtube.com/c/EscolaFrontend/videos",
        "hreflang": "pt"
    },
    "node studio treinamentos": {
        "title": "Node Studio Treinamentos",
        "description": "",
        "url": "https://www.youtube.com/c/NodeStudioTreinamentos/playlists",
        "hreflang": "pt"
    },
    "dev school": {
        "title": "Dev School",
        "description": "",
        "url": "https://www.youtube.com/c/DevSchoolDIEGO",
        "hreflang": "pt"
    },
    "rocketseat": {
        "title": "RocketSeat",
        "description": "",
        "url": "https://www.rocketseat.com.br/",
        "hreflang": "pt"
    }
},
"cursos": {
    "alura": {
        "title": "Alura",
        "description": "Sequências de cursos organizados em Formações · Programação. Arquitetura e Design de Projetos Java · Arquitetura PHP · Front-end. Acessibilidade Web etc.",
        "url": "https://www.alura.com.br/",
        "hreflang": "pt"
    },
    "curso em video": {
        "title": "Curso em Video",
        "description": "",
        "url": "https://www.cursoemvideo.com/",
        "hreflang": "pt"
    },
    "ebac": {
        "title": "EBAC",
        "description": "",
        "url": "https://ebaconline.com.br/",
        "hreflang": "pt"
    },
    " fundação bradesco": {
        "title": "Fundação Bradesco",
        "description": "",
        "url": "https://www.ev.org.br/",
        "hreflang": "pt"
    },
    "udemy": {
        "title": "Udemy",
        "description": "",
        "url": "https://www.udemy.com/",
        "hreflang": "pt"
    }
},
"": {
    "": {
        "title": "",
        "description": "",
        "url": "",
        "hreflang": ""
    }
},
"": {
    "": {
        "title": "",
        "description": "",
        "url": "",
        "hreflang": ""
    }
},
"": {
    "": {
        "title": "",
        "description": "",
        "url": "",
        "hreflang": ""
    }
},
"": {
    "": {
        "title": "",
        "description": "",
        "url": "",
        "hreflang": ""
    }
},
"": {
    "": {
        "title": "",
        "description": "",
        "url": "",
        "hreflang": ""
    }
},
"": {
    "": {
        "title": "",
        "description": "",
        "url": "",
        "hreflang": ""
    }
},
"": {
    "": {
        "title": "",
        "description": "",
        "url": "",
        "hreflang": ""
    }
},
"": {
    "": {
        "title": "",
        "description": "",
        "url": "",
        "hreflang": ""
    }
},
"": {
    "": {
        "title": "",
        "description": "",
        "url": "",
        "hreflang": ""
    }
},
"": {
    "": {
        "title": "",
        "description": "",
        "url": "",
        "hreflang": ""
    }
},
"": {
    "": {
        "title": "",
        "description": "",
        "url": "",
        "hreflang": ""
    }
},
"": {
    "": {
        "title": "",
        "description": "",
        "url": "",
        "hreflang": ""
    }
},
"": {
    "": {
        "title": "",
        "description": "",
        "url": "",
        "hreflang": ""
    }
}
}`;

let sites = JSON.parse(cartas);

let index = 1;
for(const categoria in sites) {
    let template;

    for(const site in sites[categoria]) {
        if(template == undefined) {
            template = 
            `
        <div class="card">
            <div class="card__content">
                <h3 class="card__title">${sites[categoria][site].title}</h3>
                <div class="card__text">
                    <p class="card__description">${sites[categoria][site].description}</p>
                    <a class="card__link button" rel="external" target="_blank" hreflang="${sites[categoria][site].hreflang}" href="${sites[categoria][site].url}">Acessar</a>
                    <div style="margin-top: 10px;">
                        <img title="Front-End" style="height: 30px; width: 30px;" src="../images/front-end.svg">
                        <img title="Back-End" style="height: 30px; width: 30px;" src="../images/back-end.svg">
                    </div>
                </div>
            </div>
        </div>
        `;

        continue;
        }

        template +=
        `
        <div class="card">
            <div class="card__content">
                <h3 class="card__title">${sites[categoria][site].title}</h3>
                <div class="card__text">
                    <p class="card__description">${sites[categoria][site].description}</p>
                    <a class="card__link button" rel="external" target="_blank" hreflang="${sites[categoria][site].hreflang}" href="${sites[categoria][site].url}">Acessar</a>
                </div>
            </div>
        </div>
        `;
    }
    document.getElementsByClassName("section__menu")[index].innerHTML += template;
    document.getElementsByClassName("section__menu")[index].getElementsByClassName("card")[1].classList.add("card_active");
    index++;
    template = undefined;
}