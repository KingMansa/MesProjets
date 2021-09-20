import { Adresse } from './adresses';
import { Personnes } from "./personnes";
export class ListePersonnes {
    constructor(private _personnes: Personnes[]) {
        
    }
    
    public get listePersonnes() : Personnes[] {
        return this._personnes
    }
    
    public set listePersonnes(v : Personnes[]) {
        this._personnes = v;
    }

    public findByNom(n: string) {
        var myName = null
        for (let x of this._personnes) {
          if (n==x.nom) {
            myName = n
        }}
    
        return myName
      }

      
}