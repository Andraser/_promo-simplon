class Promo {
    constructor(prenom, nom, avatar, github) {
        this.nom = nom;
        this.prenom = prenom;
        this.github = github;
        this.avatar = avatar;
    }

}

let houssen = new Promo('Houssen', 'ABASBAY', 'img/simplonien/houssen.jpg', 'https://github.com/Makayoshin974');
let benjamin = new Promo('Benjamin', 'ARNOUX', 'img/simplonien/benjamin.jpg', 'https://github.com/arnben12');
let bruno = new Promo('Bruno', 'BÉGUE', 'img/simplonien/bruno.jpg', 'https://github.com/brun974');
let denilson = new Promo('Denilson', 'BIEN-AIMÉ', 'img/simplonien/denilson.jpg', 'https://github.com/Olpee');
let rubens = new Promo('Rubens', 'BOVALO', 'img/simplonien/rubens.jpg', 'https://github.com/Andraser');
let alex = new Promo('Alexandre', 'CALLENS', 'img/simplonien/alex.jpg', 'https://github.com/alekzxander');
let nicolas = new Promo('Nicolas', 'CLAIN', 'img/simplonien/nicolas.jpg');
let alexandre = new Promo('Alexandre', 'CLAIR', 'img/simplonien/alexandre.jpg', 'https://github.com/aclair');
let valerie = new Promo('Valérie', 'DIJOUX', 'img/simplonien/valerie.jpg', 'https://github.com/val974');
let laurent = new Promo('Laurent', 'GRÉGOIRE', 'img/simplonien/laurent.jpg', 'https://github.com/LauGR');
let robin = new Promo('Robin', 'HERMAND', 'img/simplonien/robin.jpg', 'https://github.com/hiromeister');
let joséphine = new Promo('Joséphine', 'LE GLEUT', 'img/simplonien/josephine.jpg', 'https://github.com/oseyphine');
let thomas = new Promo('Thomas', 'MARINIER', 'img/simplonien/thomas.jpg',  'https://github.com/toto9744', );
let remy = new Promo('Rémy', 'MOZELLE', 'img/simplonien/remy2.jpg', 'https://github.com/RemyMozelle');
let vellen = new Promo('Vellen', 'SADAYEN', 'img/simplonien/vellen.jpg', 'https://github.com/tirou1229');

let tabPromo = [
    houssen, benjamin, bruno, denilson,
    rubens, alex, nicolas, alexandre,
    valerie, laurent, robin, joséphine,
    thomas, remy, vellen
];

let prenom = document.querySelectorAll('h3');
let nom = document.querySelectorAll('h4');
let liensGitHub = document.querySelectorAll('.github');
let simplonien = document.querySelectorAll('.avatar img');

for (let i = 0; i < tabPromo.length; i++) {
    prenom[i].innerHTML = tabPromo[i].prenom;
    nom[i].innerHTML = tabPromo[i].nom;
    liensGitHub[i].setAttribute('href', tabPromo[i].github);
    simplonien[i].setAttribute('src', tabPromo[i].avatar);
}