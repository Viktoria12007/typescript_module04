import {CanFly, CanRun, CanSwim} from "./interfaces";

export abstract class Human implements CanRun, CanFly, CanSwim {
    abstract fly(): void
    abstract run(): void
    abstract swim(): void
}
