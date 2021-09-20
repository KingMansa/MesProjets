export class Adresse {
  constructor(
    private _rue: string,
    private _ville: string,
    private _codePostal: string
  ) {}

  public get rue(): string {
    return this._rue;
  }
  public get ville(): string {
    return this._ville;
  }
  public get codePostal(): string {
    return this._codePostal;
  }

  public set rue(v: string) {
    this._rue = v;
  }

  public set vile(v: string) {
    this._ville = v;
  }
  public set codePostal(v: string) {
    this._codePostal = v;
  }
}
