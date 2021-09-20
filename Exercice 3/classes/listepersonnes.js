export class ListePersonnes {
    constructor(_personnes) {
        this._personnes = _personnes;
    }
    get listePersonnes() {
        return this._personnes;
    }
    set listePersonnes(v) {
        this._personnes = v;
    }
    findByNom(n) {
        var myName = null;
        for (let x of this._personnes) {
            if (n == x.nom) {
                myName = n;
            }
        }
        return myName;
    }
}
