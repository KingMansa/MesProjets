export class Personnes {
    constructor(_nom, _sexe, _adresses) {
        this._nom = _nom;
        this._sexe = _sexe;
        this._adresses = _adresses;
    }
    get nom() {
        return this._nom;
    }
    get sexe() {
        return this._sexe;
    }
    get adresses() {
        return this._adresses;
    }
    set nom(v) {
        this._nom = v;
    }
    set sexe(v) {
        this._sexe = v;
    }
    set adresses(v) {
        this._adresses = v;
    }
}
