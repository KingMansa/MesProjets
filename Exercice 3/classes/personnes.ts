
import { Adresse } from "./adresses.js";

export class Personnes {
    constructor(private _nom: string, private _sexe: string, private _adresses: Adresse[]) {
        
    }

    
    public get nom() : string {
        return this._nom
    }
    
    public get sexe() : string {
        return this._sexe
    }
    
    public get adresses() : Adresse[] {
        return this._adresses
    }
    
    
    public set nom(v : string) {
        this._nom = v;
    }
    
    public set sexe(v : string) {
        this._sexe = v;
    }
    
    public set adresses(v : Adresse[]) {
        this._adresses = v;
    }
    
    
    
    
}