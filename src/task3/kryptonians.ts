import {CanFly, CanRun, CanSwim} from "./interfaces";

export class Kryptonians implements CanFly, CanRun, CanSwim {
    fly(): void {
        console.log('fly')
    }
    run(): void {
        console.log('run')
    }
    swim(): void {
        console.log('swim')
    }
}
