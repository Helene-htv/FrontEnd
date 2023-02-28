/////// Récupération de l'élément du DOM qui accueillera la Gallery ///////

const gallery = document.querySelector(".gallery");

//création d'un tableau vide pour acceuillir mes projets

var projets = [];

        /////// Appel à l'API avec fetch afin de récupérer dynamiquement///////
                     /////// les travaux de l'architecte :     ///////


// Importer les données du fichier JSON 
//dans notre fichier JS pour pouvoir les manipuler

fetch("http://localhost:5678/api/works")
    .then( function (data){ 
        if (data.ok) 
            return data.json();
    })
    .then( function (projets){
        console.log(projets);
        for (let projet of projets){
            // Création d'une balise dédiée à un projet
            let figure = document.createElement("figure");
            // Création des autres balises
            let img = document.createElement("img");
            img.src = projet.imageUrl;
            img.crossOrigin = "anonymous";
            img.alt = projet.title;
            let figcaption = document.createElement("figcaption");
            figcaption.innerHTML = projet.title;
          
            // On rattache la balise figure à la section Gallery (son parent)
            gallery.appendChild(figure);
            // On rattache les autres balises à chaque projet
            figure.appendChild(img);
            figure.appendChild(figcaption);
        };
    });