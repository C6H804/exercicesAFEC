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
    return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
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
    //techniquement c'est mieux non ?🤓☝
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
    const voyelles = ["a", "e", "i", "o", "u", "y", "é", "è", "ê", "ô", "â", "à", "î", "ï"];
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
    while (parseInt(prompt("Devine un nombre GL"))!= rng) 
        console.log(rng);
    console.log("c'est un coup de chance");
}



function spammeur() {
    for (let i = 0; i < 5; i++)
        console.log(5);
}

function monterEscalier() {
    for (let i = 1; i <=10; i++)
        console.log(i);
}

function armeePairs() {
    for (let i = 1; i <= 20; i++) {
        if (i%2 == 0) 
            console.log(i);
    }
}

function armeePairs() {
    for (let i = 1; i <= 30; i++) {
        if (i%3 == 0)
            console.log(i);
    }
}

function oracleParity(nbr) {
    return parseInt(nbr) % 2 == 0 ? "pair": "impair";
}