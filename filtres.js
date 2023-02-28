
/////// Récupération de l'élément du DOM qui accueillera les filtres ///////		
			
const filtres = document.querySelector(".filtres");   
const filtresTous = document.querySelector("#tous"); 
const filtresObjets = document.querySelector("#objets");    
const filtresAppartement = document.querySelector("#appartements");
const filtresHotelsetrestaurants = document.querySelector("#hotelsetrestaurants");

// Importer les données du fichier JSON 
//dans notre fichier JS pour pouvoir les manipuler

fetch("http://localhost:5678/api/works")
.then( function (data) { 
    if (data.ok) 
        return data.json();
    
})
.then( function (projets) {
    // console.log(projets);
    
    filtresTous.addEventListener("click", function(){
        
        // supprimer tous les projets de la page ici
        while (gallery.hasChildNodes()) 
        gallery.removeChild(gallery.firstChild);
        
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

    filtresObjets.addEventListener("click", function(){
        // supprimer tous les projets de la page ici
        while (gallery.hasChildNodes()) 
        gallery.removeChild(gallery.firstChild);   

        for (let projet of projets){
            if(projet.category.name == "Objets"){
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
        };
    });
    
    filtresAppartement.addEventListener("click", function(){
        // supprimer tous les projets de la page ici
        while (gallery.hasChildNodes()) 
        gallery.removeChild(gallery.firstChild);   

        for (let projet of projets){
            if(projet.category.name == "Appartements"){
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
        };
    });

    filtresHotelsetrestaurants.addEventListener("click", function(){
        // supprimer tous les projets de la page ici
        while (gallery.hasChildNodes()) 
        gallery.removeChild(gallery.firstChild);   

        for (let projet of projets){
            if(projet.category.name == "Hotels & restaurants"){
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
        };
    });
}); 