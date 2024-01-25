import {Human} from "./human";

export class Kryptonians extends Human {
    fly(): void {
        console.log('I can fly')
    }
    run(): void {
        console.log('I can run')
    }
    swim(): void {
        console.log('I can swim')
    }
}
