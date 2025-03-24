// Definindo interface
interface User {
    id: number;
    name: string;
    isActive: boolean;
}

// Utilizando interface
const myUser: User = {
    id: 1,
    name: "Elias",
    isActive: false
}

// Classes
class Person implements User {
    id: number;
    name: string;
    isActive: boolean;

    constructor(id: number, name: string, isActive: boolean) {
        this.id = id
        this.name = name;
        this.isActive = isActive;
    }

    imprimir(): void {
        console.log(`Olá, meu nome é: ${this.name}`)
    }
}

const personData = new Person(1, "Elias", true);
personData.imprimir()