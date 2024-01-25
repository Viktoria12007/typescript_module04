import {CanRun, CanSwim} from "./interfaces";

export class Earthlings implements CanRun, CanSwim {
    run(): void {
        console.log('run')
    }
    swim(): void {
        console.log('swim')
    }
}
