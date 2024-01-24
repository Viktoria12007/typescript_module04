type User = {
    name: string;
    age: number;
    occupation: string;
    messagesCount: number,
    registrationDate: Date,
    warningsCount: number,
}

const oneDay = 86400000;

export const users: User[] = [
    {
        name: 'Calvin Klein',
        age: 38,
        occupation: 'Artist',
        messagesCount: 0,
        registrationDate: new Date('12/7/2021'),
        warningsCount: 0,
    },
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
        messagesCount: 16,
        registrationDate: new Date('12/7/2018'),
        warningsCount: 3,
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
        messagesCount: 243,
        registrationDate: new Date('1/7/2020'),
        warningsCount: 12,
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Developer',
        messagesCount: 434,
        registrationDate: new Date('5/11/2021'),
        warningsCount: 14,
    },
    {
        name: 'Chloe Price',
        age: 19,
        occupation: 'Student',
        messagesCount: 167,
        registrationDate: new Date('6/3/2019'),
        warningsCount: 67,
    },
];

export class TrustedUser {
    constructor(public user: User) {}
    getConfidenceRatio(): number {
        return this.user.messagesCount * 2 - this.user.warningsCount * 100 + Math.trunc((Date.now() - this.user.registrationDate.getTime()) / oneDay);
    }
}

export class ConfidenceHelper {
    static checkConfidenceRatio(confidence: number): boolean {
        return confidence >= 0;
    }
}

export function checkUsersConfidence(users: User[]): User[] {
    return users.filter((user) => !ConfidenceHelper.checkConfidenceRatio(new TrustedUser(user).getConfidenceRatio()));
}

console.log(checkUsersConfidence(users));
