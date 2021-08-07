

let haut = [
    {
    nom:"t-shirt",
    description:"une belle t-shirt",
    prix:200,
    img : "img/tshirt.jpg"
    },
    {
        nom:"t-shirt",
        description:"un beau t-shirt",
        prix:400,
        img : "img/tshirt2.jpg"
        }, {
        nom:"t-shirt",
        description:"un beau t-shirt",
        prix:900,
        img : "img/tshirt3.jpg"
        }, {
            nom:"t-shirt",
            description:"un beau t-shirt",
            prix:900,
            img : "img/tshirt4.jpg"
            }, {
                nom:"t-shirt",
                description:"un beau t-shirt",
                prix:900,
                img : "img/tshirt5.jpg"
                }, {
                    nom:"t-shirt",
                    description:"un beau t-shirt",
                    prix:900,
                    img : "img/thsirt6.jpg"
                    }, {
                        nom:"t-shirt",
                        description:"un beau t-shirt",
                        prix:900,
                        img : "img/tshirt7.jpg"
                        }
];




let bat = [
    {
    nom:"jean",
    description:"un jean",
    prix:200,
    img : "img/jean.jpg"
    },
    {
        nom:"jean",
        description:"un beau jean",
        prix:400,
        img : "img/ptn1.jpg"
        }, {
        nom:"jean",
        description:"un beau jean",
        prix:900,
        img : "img/ptn2.jpg"
        },{
            nom:"jean",
            description:"un beau jean",
            prix:900,
            img : "img/ptn3.jpg"
            },{
                nom:"jean",
                description:"un beau jean",
                prix:900,
                img : "img/ptn4.jpg"
                },{
                    nom:"jean",
                    description:"un beau jean",
                    prix:900,
                    img : "img/ptn5.jpg"
                    },{
                        nom:"jean",
                        description:"un beau jean",
                        prix:900,
                        img : "img/tn6.jpg"
                        }

        
];


let chaussure = [
    {
    nom:"chaussure",
    description:"une paire de chaussure",
    prix:200,
    img : "img/chaussure.jpg"
    },
    {
        nom:"chaussure",
        description:"une paire de chaussure",
        prix:400,
        img : "img/ch1.jpg"
        }, {
        nom:"chaussure",
        description:"une paire de chaussure",
        prix:900,
        img : "img/ch7.jpg"
        }, {
            nom:"chaussure",
            description:"une paire de chaussure",
            prix:900,
            img : "img/ch3.jpg"
            }, {
                nom:"chaussure",
                description:"une paire de chaussure",
                prix:900,
                img : "img/ch4.jpg"
                }, {
                    nom:"chaussure",
                    description:"une paire de chaussure",
                    prix:900,
                    img : "img/ch5.jpg"
                    }, {
                        nom:"chaussure",
                        description:"une paire de chaussure",
                        prix:900,
                        img : "img/ch6.jpg"
                        }
];






let sup =  document.getElementById('haut');
let bats =  document.getElementById('bas');
let chaussures = document.getElementById('chaussure');

for (var i = 0; i < bat.length; i++) {

    bats.innerHTML += '<div class="objet"><img src="'+ bat[i].img +'" alt="imageproduit"/><span>'+ bat[i].prix + '€</span><a href="panier.html?name='+ bat[i].nom +'&prix='+bat[i].prix + '&descrition='+bat[i].description + '&image=' + bat[i].img +'">ADD</a></div>';
   
    
   }

for (var i = 0; i < haut.length; i++) {

 sup.innerHTML += '<div class="objet"><img src="'+ haut[i].img +'" alt="imageproduit"/><span>'+ haut[i].prix + '€</span><a href="panier.html?name='+ haut[i].nom +'&prix='+haut[i].prix + '&descrition='+haut[i].description + '&image=' + haut[i].img +'">ADD</a></div>';

 
}



for (var i = 0; i < chaussure.length; i++) {

    chaussures.innerHTML += '<div class="objet"><img src="'+ chaussure[i].img +'" alt="imageproduit"/><span>'+ chaussure[i].prix + '€</span><a href="panier.html?name='+ chaussure[i].nom +'&prix='+chaussure[i].prix + '&descrition='+chaussure[i].description + '&image=' + chaussure[i].img +'">ADD</a></div>';
   
    
   }








  
