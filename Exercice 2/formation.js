export class Formation {
    constructor(_intitule, _nbrJours, _stagiaires) {
        this._intitule = _intitule;
        this._nbrJours = _nbrJours;
        this._stagiaires = _stagiaires;
    }
    get intitule() {
        return this._intitule;
    }
    get nbrJours() {
        return this._nbrJours;
    }
    get stagiaires() {
        return this._stagiaires;
    }
    set intitule(v) {
        this._intitule = v;
    }
    set nbrJours(v) {
        this._nbrJours = v;
    }
    set stagiaires(v) {
        this._stagiaires = v;
    }
    /**
     * calculerMoyenneFormation
     */
    calculerMoyenneFormation() {
        var somme = 0;
        for (let x of this._stagiaires) {
            somme += x.CalculerMoyenne();
        }
        return somme / this._stagiaires.length;
    }
    /**
     * getIndexMax
     */
    getIndexMax() {
        var max = 0;
        var myIndex = 0;
        for (let x of this._stagiaires) {
            if (x.CalculerMoyenne() > max) {
                max = x.CalculerMoyenne();
                myIndex = this._stagiaires.indexOf(x);
            }
        }
        return myIndex;
    }
    afficherNomMax() {
        var max = 0;
        var myName = "No";
        for (let x of this._stagiaires) {
            if (x.CalculerMoyenne() > max) {
                max = x.CalculerMoyenne();
                myName = x.nom;
            }
        }
        return myName;
    }
    afficherMinMax() {
        var max = 0;
        var myMin = 0;
        for (let x of this._stagiaires) {
            if (x.CalculerMoyenne() > max) {
                max = x.CalculerMoyenne();
                myMin = x.trouverMin();
            }
        }
        return myMin;
    }
    trouverMoyenneParNom(n) {
        var moy = 0;
        for (let x of this._stagiaires) {
            if (n == x.nom) {
                moy = x.CalculerMoyenne();
            }
        }
        return moy;
    }
}
