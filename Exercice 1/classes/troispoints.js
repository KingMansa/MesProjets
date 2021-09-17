export class TroisPoints {
    constructor(_premier, _deuxieme, _troisieme) {
        this._premier = _premier;
        this._deuxieme = _deuxieme;
        this._troisieme = _troisieme;
    }
    get premier() {
        return this._premier;
    }
    get deuxieme() {
        return this._deuxieme;
    }
    get troisieme() {
        return this._troisieme;
    }
    set premier(v) {
        this._premier = v;
    }
    set deuxieme(v) {
        this._deuxieme = v;
    }
    set troisieme(v) {
        this._troisieme = v;
    }
    /**
     * TesterAlignement
     */
    TesterAlignement() {
        let un = this._premier;
        let deux = this._deuxieme;
        let trois = this._troisieme;
        var A = un.calculerDistance(deux) == (un.calculerDistance(trois) + deux.calculerDistance(trois));
        var B = deux.calculerDistance(trois) == deux.calculerDistance(un) + trois.calculerDistance(un);
        var C = trois.calculerDistance(un) == trois.calculerDistance(deux) + un.calculerDistance(deux);
        return ((A == B) && (B == C));
    }
    /**
     * EstIsolcele
     */
    EstIsocele() {
        let un = this._premier;
        let deux = this._deuxieme;
        let trois = this._troisieme;
        var A = un.calculerDistance(deux);
        var B = deux.calculerDistance(trois);
        var C = trois.calculerDistance(un);
        return ((A == B) || (A == C) || (B == C));
    }
}
