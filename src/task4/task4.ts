export class Job {
    constructor(private role: string, private salary: number) {}

    get _salary(): number {
        return this.salary;
    }

    public work(personName: string): void {
        console.debug(`${personName} сейчас работает как ${this.role}`);
    }
}

export class Person {
    private job?: Job
    constructor(private name: string) {}

    set _job(value: Job) {
        this.job = value;
    }
    isJob(job: unknown): job is Job {
        return job instanceof Job;
    }
    getSalary(): number {
        if (this.isJob(this.job)) {
            return this.job._salary;
        }
        return 0;
    }
    work(): void {
        if (this.isJob(this.job)) {
            this.job.work(this.name);
        }
    }
}

const person1 = new Person('Артём');
const person2 = new Person('Таня');
const person3 = new Person('Коля');

const job1 = new Job('artist', 3500);
const job2 = new Job('doctor', 6300);
const job3 = new Job('lawyer', 4700);

person1._job = job1;
person2._job = job2;
person3._job = job3;

person1.work();
person2.work();
person3.work();

person1._job = job3;
person2._job = job2;
person3._job = job1;

person1.work();
person2.work();
person3.work();
