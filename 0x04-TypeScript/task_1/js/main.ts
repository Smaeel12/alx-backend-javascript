// Define the Teacher interface
export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
    [propName: string]: any;
}

const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
};

export interface Directors extends Teacher {
    numberOfReports: number;
}

export function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`; // Format: J. Doe
}


export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
    displayName(): string;
    workOnHomework(): string;
}

export class StudentClass implements StudentClassInterface {
    constructor(public firstName: string, public lastName: string) { }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}
