export class Point {
    constructor(_abs, _ord) {
        this._abs = _abs;
        this._ord = _ord;
    }
    /**
     * get _abs
     */
    get abs() {
        return this._abs;
    }
    get ord() {
        return this._ord;
    }
    /**
     * set _abs
     */
    set abs(v) {
        this._abs = v;
    }
    set ord(v) {
        this._ord = v;
    }
    calculerDistance(p) {
        let x1 = this._abs;
        let y1 = this._ord;
        let x2 = p.abs;
        let y2 = p.ord;
        let dist = Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2);
        return Math.sqrt(dist);
    }
    calculerMilieu(p) {
        let x1 = this._abs;
        let y1 = this._ord;
        let x2 = p.abs;
        let y2 = p.ord;
        let xM = (x1 + x2) / 2;
        let yM = (y1 + y2) / 2;
        let M = new Point(xM, yM);
        return M;
    }
}
