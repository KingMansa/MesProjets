export class Point {
    constructor(private _abs: number, private _ord: number,){

    }

    /**
     * get _abs
     */
    public get abs() {
      return this._abs  
    }
    public get ord() {
        return this._ord  
      }

    /**
     * set _abs
     */
    public set abs(v: number) {
        this._abs = v
    }
    public set ord(v: number) {
        this._ord = v
    }

    public calculerDistance(p: Point):number {
        let x1 = this._abs
        let y1 = this._ord

        let x2 = p.abs
        let y2 = p.ord
        let dist = Math.pow((x1-x2),2)+Math.pow((y1-y2),2)

        return Math.sqrt(dist)
    }

    public calculerMilieu(p: Point):Point {
        let x1 = this._abs
        let y1 = this._ord

        let x2 = p.abs
        let y2 = p.ord

        let xM = (x1+x2)/2
        let yM = (y1+y2)/2
        
        let M = new Point (xM, yM)
        return M
    }



}

