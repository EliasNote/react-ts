let isActive: boolean;

isActive = true

let total: number = 150;

let myName: string = "Matheus";

let numbers: number[] = [1, 2, 3];

let user: { name: string; age: number } = {
    name: "Matheus",
    age: 50
}

let rgb: [number, number, number] = [255, 0, 0]


// Funções
function greet(nome: string) {
    return `Olá, ${nome}`;
}

// Enum
enum Direction {
    Up,
    Down,
    Left,
    Right
}

function getDirectionMessage(direction: Direction): string {
    switch(direction) {
        case Direction.Up:
            return "Movendo para cima";
        case Direction.Down:
            return "Movendo para baixo";
        case Direction.Left:
            return "Movendo para esquerda";
        case Direction.Right:
            return "Movendo para direita";
        default:
            return "Ficou parado"
    }
}