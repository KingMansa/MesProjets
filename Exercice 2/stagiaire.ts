export class Stagiaire {
  constructor(private _nom: string, private _notes: Array<number>) {}

  public get nom(): string {
    return this._nom;
  }

  public get notes(): Array<number> {
    return this._notes;
  }

  public set nom(v: string) {
    this._nom = v;
  }

  public set notes(v: Array<number>) {
    this._notes = v;
  }

  /**
   * CalculerMoyenne
   */
  public CalculerMoyenne(): number {
    var somme = 0;
    for (let x of this._notes) {
      somme += x;
    }
    return somme / this._notes.length;
  }

  /**
   * trouverMax
   */
  public trouverMin(): number {
    let long = this._notes.length;
    let mini = this._notes[0];
    for (let j = 1; j < long; j++) {
      if (this._notes[j] < mini) {
        mini = this._notes[j];
      }
    }
    return mini;
  }

  public trouverMax(): number {
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
