
class Proprio {
  constructor(nickname, phone, city) {
    this.nickname = nickname;
    this.phone = phone;
    this.city = city;
  }
}

class Animal {
  constructor(nickname, race) {
    this.nickname = nickname;
    this.race = race;
  }

  getInfo(maitre) {
    let createli = document.createElement('li');
    createli.textContent = 'Je suis ' + this.nickname + ', je suis un ' + this.race + ' et mon maitre est ' + maitre.nickname + ' qui vit à ' + maitre.city;
    document.body.appendChild(createli);
  }

}

let Marc = new Proprio('Marc', '+33965678923', 'Villeurbanne');
let Helene = new Proprio('Helene', '+33665636281', 'Paris');

let Caramel = new Animal('Caramel', 'Chat');
let Rex = new Animal('Rex', 'Chien');

Caramel.getInfo(Marc)

Rex.getInfo(Helene)