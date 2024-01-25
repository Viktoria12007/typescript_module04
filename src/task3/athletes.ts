import {CanRun} from "./interfaces";

export class Athletes implements CanRun {
    run(): void {
        console.log('run')
    }
}
