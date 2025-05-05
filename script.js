function exoA() {
    let score = 100;
    let energy = 80;
    let hasPotion = false;
    let inventory = "épée en bois";
    let isAlive = true;
    hasPotion = true;

    console.log("Étape 1");
    energy += 20;
    console.log(energy);
    console.log("Étape 2");
    energy -= 40;
    score -= 25;
    console.log(energy);
    console.log(score);
    console.log("Étape 3");
    console.log(inventory);
    inventory = " ";
    console.log("Étape 4");
    energy -= 40;
    score -= 30;
    console.log(energy);
    console.log(score);
    console.log("Étape 5");
    inventory = "arc";
    console.log(inventory);
    console.log("Étape 6");
    energy = 0;
    console.log(energy);
    console.log("Étape 7");
    isAlive = false;
    console.log(isAlive);
    console.log("FIN");
    let results = document.createElement("h2");
    results.innerHTML = "Score : " + score + " | Énergie : " + energy + " | Potions : " + hasPotion + " | Inventaire : " + inventory + " | Vivant : " + isAlive;
    'Score : 45 | Énergie : 0 | Potions : true | Inventaire : arc | Vivant : false';
    document.body.prepend(results);
}

function exoB() {
    let age = 20;
    const motDePasse = "afec";
    let motDePasseParLeJoueur = prompt("Enrez le mot de passe du donjon");
    let aUnBadgeMagique = true;
    let niveauForce = 8;

    if (motDePasse === motDePasseParLeJoueur) {
        if (age >= 18 && aUnBadgeMagique == true && niveauForce >= 7) {
            alert("🟢 Bienvenue dans le donjon, aventurier !");
        } else {
            alert("🔴 Accès refusé. Tu ne remplis pas toutes les conditions…");
        }
    } else
        alert("Mot de passe incorrect.");
}


function exoC() {
    let grade;
    let nom = prompt("Entrez vôtre nom").trim();
    while (nom == "") {
        nom = prompt("Merci d'entrer un nom valide");
    }
    let age = prompt("Entrez vôtre age").trim();
    while (isNaN(age) || age == "") {
        age = prompt("Merci d'entrer un age valide");
    }

    let poids = prompt("Entrez vôtre poids").trim();
    while (isNaN(poids) || poids == "") {
        poids = prompt("Merci d'entrer un poids valide");
    }

    if (age > 15 || poids > 10) {
        grade = "Membre Légendaire";
    } else if (age >= 10 && poids >= 6) {
        grade = "Membre d'Honneur";
    } else if (age >= 3 || poids >= 3) {
        grade = "Membre Approuvé";
    } else {
        grade = "refusé";
    }
    alert(grade);
}


function draw(a) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    wFactor = c.clientWidth / a.length;
    let previousX = -1;
    for (let i = 0; i < a.length; i++) {
        if (Math.round(previousX) != Math.round(i * wFactor)) {
            ctx.moveTo(i * wFactor, a[i]);
            ctx.lineTo(i + 1 * wFactor, a[i + 1]);
            ctx.stroke();
            console.log("x = " + i * wFactor + " y = " + a[i]);
            previousX = i * wFactor;
        }
        if (i > a.length)
            break;
    }
    console.log("fini");
}




function exoD() {
    let prenom = "alan";
    let nom = "pinat";

    let message = "bonjour, je m'appelle [prenom] [nom]";
    console.log(message);

    let simpleQuote = 'Bonjour tout le monde';
    let doubleQuote = "Javascript est génial";
    // let templateLiteral `Il fait ${2 + 2} degrés`;
    console.log(simpleQuote, doubleQuote);

}

function capitalize(txt) {
    return txt[0].toUpperCase() + txt.slice(1);
}



function countOccurences(txt, word) {
    return txt.split(word).length - 1;
}

function truncateString(txt, len) {
    if (txt.length >= len)
        return txt.slice(0, len) + "...";
    return txt;
}

function regCountOccurences(txt, word) {
    result = txt.match(new RegExp(word));
    return result ? result.length : 0;
}


function phrase() {
    let phrase = "Le javascript est super";
    let mot = phrase.slice(phrase.search("javascript"), "javascript".length + phrase.search("javascript"));
    console.log(mot);
}

function phraseLength() {
    let phrase = "je suis développeur web";
    return phrase.length;
}

function clearText() {
    let hello = " Bonjour le monde ! ";
    return hello.trim();
}


function findNextSquare(sq) {
    return Math.sqrt(sq) % 1 != 0 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}

function validatePIN(pin) {
    return /^[0-9]{4}$|^[0-9]{6}$/.test(pin);
}


function accum(s) {
    let result = "";
    s.split('').forEach((item, index) => {
        result += item.toUpperCase();
        for (let i = 0; i < index; i++) {
            result += item.toLowerCase();
        }
        result += "-";
    });
    return result.slice(0, -1);
}


const binaryArrayToNumber = arr => {
    return parseInt(arr.join(""), 2);
}




function cinema() {
    //      ---ETAPE 1 :--- 
    const prixBase = 12;


    let nom = prompt("Entrez vôtre nom").trim();
    while (nom == "") {
        nom = prompt("Merci d'entrer un nom valide");
    }

    age = parseInt(prompt("Merci d'entrer un age valide"));
    console.log(age);

    let student = confirm("êtes vous étudiant ?");

    ammount = parseInt(prompt("Entrez le nombre de tickets"));





    //      ---ETAPE 5 :---
    if (age = "" || isNaN(age)) {
        alert("age invalide");
    }
    if (ammount <= 0) {
        alert("tu dois au moins acheter 1 ticket")
    }
    //    if (student != "oui" && student != "non") {
    //        alert("entrez oui ou non");
    //    }



    //      ---ETAPE 2 :---

    let remiseAge = 1;
    let remiseEtudiant = 1;
    let remiseBillet = 1;

    if (age <= 12) {
        remiseAge = 0.5;
        console.log("remise enfant");
    } else if (age >= 60) {
        remiseAge = 0.7;
        console.log("remise senior");
    } else {
        remiseAge = 1;
    }

    if (student == true) {
        remiseEtudiant = 0.8;
        console.log("remise étudiant");
    }

    if (ammount >= 3) {
        remiseBillet = 0.9;
        console.log("remise groupe");
    }


    // prixBase = prixBase * remise
    // 100€     =  100€    * 0.5 -> 100 - 50%

    // 1 - x/100



    //      ---ETAPE 3 :---
    console.log(remiseAge);

    prixFinal = prixBase * ammount;
    console.log(prixFinal);
    prixFinal *= remiseAge;
    prixFinal *= remiseEtudiant;
    prixFinal *= remiseBillet;
    console.log(prixFinal);
    prixFinal = prixFinal.toFixed(2);
    console.log(prixFinal);

    //      ---ETAPE 4 :---

    nom = nom.split(' ');
    prenom = nom[0];
    nom = nom[1];
    let shortName = nom.slice(0, 3);
    shortName = shortName.toUpperCase();
    console.log(prenom.length);

    alert("Bonjour " + prenom + " " + nom + ", ton nom commence par " + shortName + ", tu as " + age + " ans et tu paie " + prixFinal + " € pour les " + ammount + " tickets.");

}







// exercices fonctions

function bonjourToi(prenom) {
    console.log("bonjour " + prenom);
}

function addition(a, b) {
    return a + b;
}


function estPair(n) {
    return n % 2 == 0;
}

function calculerMoyenne(noteA, noteB, noteC) {
    return (noteA + noteB + noteC) / 3;
}


function plusGrand(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}



function revelerAnimal(magie) {
    magie = parseInt(magie);
    const listeAnimaux = ["licorne", "grenouille", "dragon", "hibou", "escargot"];
    if (magie.isNaN || magie > 5) {
        return "Chiffre inconnu est trop magique pour être interprété";
    }
    return listeAnimaux[magie - 1];
}


function exoFonctionB() {
    console.log(revelerAnimal(prompt("entrer un nombre entre 1 et 5")));
}

function distributeurBonbons() {
    argent = Number(prompt("combien d'argent voulez vous insérez ?"));
    while (argent >= 2) {
        if (argent >= 2)
            console.log("un bonbon pour toi");
        argent -= 2;
        console.log("il reste " + argent);
    }
    console.log("t'as plus une thune");
}

function defiPair() {
    //techniquement ça marche🤓☝
    for (let i = 0; i <= 20; i += 2)
        console.log(i);

    //mais j'imagine que ça marche aussi
    let nbr = 0;
    while (nbr < 20) {
        nbr++;
        if (nbr % 2 == 0)
            console.log(nbr);
    }
}

function defiMultiplication(x, max) {
    for (let i = 1; i <= max; i++)
        console.log(x + " x " + i + " = " + i * x);
}


function fizzbuzz() {
    for (let i = 1; i <= 20; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

function comptageVoyelles(text) {
    const voyelles = "aeiouyéèêôâàîï";
    let ammount = 0;
    text.split('').forEach((element) => ammount += voyelles.includes(element.toLowerCase()) ? 1 : 0);
    console.log(ammount);
}

function pyramide(size) {
    // même pas besoins de faire 2 for ☺
    for (let i = 0; i <= size; i++)
        console.log(" ".repeat(size - i) + "*".repeat(i * 2 + 1));
}

function devinette() {
    rng = Math.round(Math.random() * 99) + 1;
    while (parseInt(prompt("Devine un nombre GL")) != rng)
        console.log(rng);
    console.log("c'est un coup de chance");
}



function spammeur() {
    for (let i = 0; i < 5; i++)
        console.log(5);
}

function monterEscalier() {
    for (let i = 1; i <= 10; i++)
        console.log(i);
}

function armeePairs() {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 == 0)
            console.log(i);
    }
}

function armeePairs() {
    for (let i = 1; i <= 30; i++) {
        if (i % 3 == 0)
            console.log(i);
    }
}

function oracleParity(nbr) {
    return parseInt(nbr) % 2 == 0 ? "pair" : "impair";
}


var maxSequence = function (arr) {
    let results = new Array();
    for (let size = 0; size <= arr.length; size++) {
        for (let position = 0; position <= arr.length - size; position++) {
            values = [];
            for (let i = position; i < position + size; i++) {
                values.push(arr[i]);
            }
            results.push(values);
        }
    }
    let max = [[0], 0];
    results.forEach((item, index) => {
        let ammount = 0;
        item.forEach((element) => {
            ammount += element;
        });
        if (ammount >= max[1]) {
            max[0][0] = item;
            max[1] = ammount;
        }
    });
    console.log(max[0][0]);
    return max[1] > 0 ? max[1] : 0;
}



function tableauDefiA() {
    let animaux = ["chien", "chat", "lapin"];
    let couleurs = ["rouge", "vert", "bleu"];
    console.log(couleurs[1]);
    animaux[0] = "hamster";
    console.log(animaux);
    animaux.push("perroquet");
    animaaux = animaux.slice(1);
    console.log(animaux.includes("chat"));
    console.log(animaux.join(' ') + " " + couleurs.join(' '));
    let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


    let double = [1, 2, 2, 3, 4, 4, 5];
    console.log(double.filter((element, index) => index == double.indexOf(element)));
    console.log(displayArray(['Pomme', 'Banane', 'Abricot', 'Cerise']));
    console.log(displayArray2(['Pomme', 'Banane', 'Abricot', 'Cerise']));
    console.log(displayArray3(['Pomme', 'Banane', 'Abricot', 'Cerise'], true));

    console.log(sortWordsInString("je suis en train d'apprendre le JavaScript", true));

    console.log(filterPair([0, 1, 2, 3, 4, 5, 6, 8, 7, 9, 8, 4, 89, 84, 8, 94, 5]));
    console.log(roundDownArray([3.7, 8.4, 2.1, 5.9]));
    console.log(roundDownArrayAmmount([3.7, 8.4, 2.1, 5.9]));
    console.log(averageOfArray([3.7, 8.4, 2.1, 5.9]));
}

function displayArray(tab) {
    return tab.join(' ');
}

function displayArray2(tab) {
    return tab.slice(0, -1).join(', ') + " et " + tab[tab.length - 1];
}

function displayArray3(tab, useAnd) {
    let message = useAnd ? " et " : ", ";
    return tab.slice(0, -1).join(', ') + message + tab[tab.length - 1];
}

function sortWordsInString(str, desc) {
    arr = str.trim().split(' ');
    arr.sort();
    return desc ? arr.reverse().join(' ') : arr.join(' ');
}


function filterPair(tab) {
    tab = tab.filter((value) => value % 2 == 0);
    return tab.map((x) => x * 2);
}

function roundDownArray(tab) {
    return tab.map((x) => Math.floor(x));
}

function roundDownArrayAmmount(tab) {
    return tab.map((x) => Math.floor(x)).reduce((ammount, x) => ammount + x);
}

function averageOfArray(tab) {
    return tab.reduce((ammount, x) => ammount + x) / tab.length;
}




let grimoire = ["bave de crapaud", "plume de phénix", "racine de mandragore"];
function ajouterIngredient() {
    ingredient = '';
    while (ingredient == '')
        ingredient = prompt("quel ingrédient souhaitez vous ajouter ?");
    grimoire.push(ingredient);
}

function afficherGrimoire() {
    tab = grimoire;
    let bodyE = document.getElementsByTagName("body");
    let div = document.createElement("div");
    div.id = "liste";
    tab.forEach((element) => {
        let ingr = document.createElement("p");
        ingr.innerHTML = element;
        div.appendChild(ingr);
    });
    bodyE[0].appendChild(div);
}

function analyserPotion() {
    tab = grimoire;
    ammount = 0;
    tab.forEach((x) => {
        ammount += x.length;
    });
    console.log(ammount);
    alert("A. + " + tab.length + "\nB. " + ammount);
}

//You are given an array (which will have a length of at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns this "outlier" N.


function findOutlier(integers) {
    let oddIntruder = 0;
    integers.slice(0, 3).forEach((x) => oddIntruder += Math.abs(x) % 2);
    oddIntruder = oddIntruder > 1 ? 0 : 1;
    returnintegers.filter((x) => x % 2 == oddIntruder)[0];
}



// -objets-

function defi1Objet() {
    let utilisateur = { nom: "alan", age: 21, ville: "Saint Paul Les Dax" };
    console.log(utilisateur);
    utilisateur.ville = "Dax";
    utilisateur.age++;
    utilisateur.estEtudiant = true;
    console.log(utilisateur);
    afficherInfo(utilisateur);
}

function afficherInfo(obj) {
    console.log("je m'appel " + obj.nom + ", j'ai " + obj.age + " et j'habite à " + obj.ville);
}

function tableauObjet() {
    let utilisateur = [
        { nom: "Patrick", age: 41, ville: "Paris" },
        { nom: "Alice", age: 15, ville: "Marseille" },
        { nom: "Stéphane", age: 23, ville: "Dax" }
    ];
    utilisateur.forEach((element) => {
        console.log(element.nom);
    });
}



let bibliotheques = [
    { titre: "Martine à la montagne", auteur: "un génie", anneePublication: 1979, estDisponible: true },
    { titre: "Le seigneur des anneaux", auteur: "JRR Tolkien", anneePublication: 1954, estDisponible: false },
    { titre: "Le mythe de sisyphe", auteur: "Albert Camus", anneePublication: 1942, estDisponible: true }
];

function bibliotheque() {

    bibliotheques.forEach((element) => {
        if (element.estDisponible)
            console.log(Object.values(element).join(' | ').slice(0, -7));
    });
}

function emprunterLivre(titre) {
    bibliotheques.forEach((element) => {
        if (element.titre == titre) {
            console.log(element.estDisponible ? "Livre emprunté avec succés" : "Ce livre n'est pas disponible");
            element.estDisponible = false;
        }
    });
}

function rendreLivre(titre) {
    bibliotheque.forEach((element) => {
        if (element.titre == titre) {
            element.estDisponible = true;
        }
    });
    console.log("Merci pour le retour du livre");
}



function createurFicheFilms() {
    let film = {
        titre: "Inception",
        realisateur: "Christopher Nolan",
        annee: 2010,
        duree: 148,
        vu: false
    };

    film.vu = prompt("as-tu déjà vu ce film ?") == "oui" ? true : false;
    if (film.vu == true) {
        film.note = parseInt(Math.round(prompt("donnez une note de 1 à 5 à ce film")));
        while (isNaN(film.note) == true || film.note > 5 || film.note < 1) {
            film.note = parseInt(Math.round(prompt("donnez une note de 1 à 4 à ce film")));
        }
    }
    afficherFilm(film);
}

function afficherFilm(obj) {
    let target = document.getElementById("containerFilm");
    let film = document.createElement("p");
    film.innerHTML = (Object.values(obj).join("<br>"));
    target.appendChild(film);
}