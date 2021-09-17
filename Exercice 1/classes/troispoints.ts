import { Point } from "./point";

export class TroisPoints{
    constructor(private _premier:Point, private _deuxieme: Point, private _troisieme: Point){

    }
    
    public get premier() : Point {
        return this._premier
    }
    public get deuxieme() : Point {
        return this._deuxieme
    }
    public get troisieme() : Point {
        return this._troisieme
    }
 
    public set premier(v : Point) {
        this._premier = v;
    }
    public set deuxieme(v : Point) {
        this._deuxieme = v;
    }
    public set troisieme(v : Point) {
        this._troisieme = v;
    }
    
    /**
     * TesterAlignement
     */
    public TesterAlignement(): boolean {
        
        let un = this._premier
        let deux = this._deuxieme
        let trois = this._troisieme
        var A = un.calculerDistance(deux) == (un.calculerDistance(trois) + deux.calculerDistance(trois))
        var B = deux.calculerDistance(trois) == deux.calculerDistance(un) + trois.calculerDistance(un)
        var C = trois.calculerDistance(un) == trois.calculerDistance(deux) + un.calculerDistance(deux)
        return ((A == B) && (B == C))
    }

    /**
     * EstIsolcele
     */
    public EstIsocele(): boolean {
        let un = this._premier
        let deux = this._deuxieme
        let trois = this._troisieme
        var A = un.calculerDistance(deux)
        var B = deux.calculerDistance(trois)
        var C = trois.calculerDistance(un)

        return ((A==B)||(A==C)||(B==C))
    }
    
}