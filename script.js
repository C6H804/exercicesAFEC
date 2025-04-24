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
    while (isNaN(age)|| age == "") {
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
            ctx.moveTo(i * wFactor,a[i]);
            ctx.lineTo(i+1 * wFactor, a[i+1]);
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
    return txt.split(word).length-1;
}

function truncateString(txt,len) {
    if (txt.length >= len)
        return txt.slice(0,len) + "...";
    return txt;
}

function regCountOccurences(txt,word) {
    result = txt.match(new RegExp(word)); 
    return result ? result.length:0; 
}


function phrase() {
    let phrase = "Le javascript est super";
    let mot = phrase.slice(phrase.search("javascript"),"javascript".length + phrase.search("javascript"));
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
    return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}

function validatePIN (pin) {
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

