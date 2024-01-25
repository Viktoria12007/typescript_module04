import {Human} from "./human";

export class Athletes extends Human {
    fly(): void {
        console.log('I can`t fly')
    }
    run(): void {
        console.log('I can run')
    }
    swim(): void {
        console.log('I can`t swim')
    }
}
