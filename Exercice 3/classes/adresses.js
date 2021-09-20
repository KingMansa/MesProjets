export class Adresse {
    constructor(_rue, _ville, _codePostal) {
        this._rue = _rue;
        this._ville = _ville;
        this._codePostal = _codePostal;
    }
    get rue() {
        return this._rue;
    }
    get ville() {
        return this._ville;
    }
    get codePostal() {
        return this._codePostal;
    }
    set rue(v) {
        this._rue = v;
    }
    set vile(v) {
        this._ville = v;
    }
    set codePostal(v) {
        this._codePostal = v;
    }
}
