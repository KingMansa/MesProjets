export class Stagiaire {
    constructor(_nom, _notes) {
        this._nom = _nom;
        this._notes = _notes;
    }
    get nom() {
        return this._nom;
    }
    get notes() {
        return this._notes;
    }
    set nom(v) {
        this._nom = v;
    }
    set notes(v) {
        this._notes = v;
    }
    /**
     * CalculerMoyenne
     */
    CalculerMoyenne() {
        var somme = 0;
        for (let x of this._notes) {
            somme += x;
        }
        return somme / this._notes.length;
    }
    /**
     * trouverMax
     */
    trouverMin() {
        let long = this._notes.length;
        let mini = this._notes[0];
        for (let j = 1; j < long; j++) {
            if (this._notes[j] < mini) {
                mini = this._notes[j];
            }
        }
        return mini;
    }
    trouverMax() {
        let long = this._notes.length;
        let maxi = this._notes[0];
        for (let j = 1; j < long; j++) {
            if (this._notes[j] > maxi) {
                maxi = this._notes[j];
            }
        }
        return maxi;
    }
}
