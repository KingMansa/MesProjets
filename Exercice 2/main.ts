import { Formation } from "./formation.js";
import { Stagiaire } from "./stagiaire.js";
console.log("OK");
console.log("OK");

var maStagiaire = new Stagiaire("Mansa", [12, 17, 15, 18, 19]);
var maStagiaire1 = new Stagiaire("Mansa1", [14, 15, 12, 18, 17]);
var maStagiaire2 = new Stagiaire("Mansa2", [7, 19, 19, 19, 19]);

console.log(maStagiaire);
console.log(maStagiaire.trouverMax());
console.log(maStagiaire.trouverMin());
console.log(maStagiaire.CalculerMoyenne());
console.log(maStagiaire1.CalculerMoyenne());
console.log(maStagiaire2.CalculerMoyenne());

var maFormation = new Formation("Data Science", 5, [
  maStagiaire,
  maStagiaire1,
  maStagiaire2,
]);

console.log(maFormation);
console.log(maFormation.calculerMoyenneFormation());
console.log(maFormation.getIndexMax());
console.log(maFormation.afficherNomMax());
console.log(maFormation.afficherMinMax());
console.log(maFormation.trouverMoyenneParNom('Mansa'));