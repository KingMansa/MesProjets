import { TroisPoints } from './classes/troispoints.js';
import { Point } from './classes/point.js'

let monPoint = new Point(12,15)
let monPoint1 = new Point(10,12)


let maDist = monPoint.calculerDistance(monPoint1)
let monMil = monPoint.calculerMilieu(monPoint1)
console.log(maDist);
console.log(monMil);
let trois = new TroisPoints(monPoint1,monPoint1,monPoint)
console.log(trois.TesterAlignement())
console.log(trois.EstIsocele())
alert("Je teste");

alert("Je reteste");