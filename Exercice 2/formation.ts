import { Stagiaire } from "./stagiaire";
export class Formation {
  constructor(
    private _intitule: string,
    private _nbrJours: number,
    private _stagiaires: Array<Stagiaire>
  ) {}

  public get intitule(): string {
    return this._intitule;
  }

  public get nbrJours(): number {
    return this._nbrJours;
  }

  public get stagiaires(): Array<Stagiaire> {
    return this._stagiaires;
  }

  public set intitule(v: string) {
    this._intitule = v;
  }

  public set nbrJours(v: number) {
    this._nbrJours = v;
  }

  public set stagiaires(v: Array<Stagiaire>) {
    this._stagiaires = v;
  }

  /**
   * calculerMoyenneFormation
   */
  public calculerMoyenneFormation(): number {
    var somme = 0;
    for (let x of this._stagiaires) {
      somme += x.CalculerMoyenne();
    }
    return somme / this._stagiaires.length;
  }

  /**
   * getIndexMax
   */
  public getIndexMax() {
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

  public afficherNomMax() {
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

  public afficherMinMax() {
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

  public trouverMoyenneParNom(n: string) {
    var moy = 0;
    for (let x of this._stagiaires) {
      if (n==x.nom) {
        moy = x.CalculerMoyenne();
      }
    }

    return moy;
  }
}
