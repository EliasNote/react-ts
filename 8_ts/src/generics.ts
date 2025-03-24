// Generics
function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

let numberArray = getArray([1, 2, 3, 4])
let stringArray = getArray(["Elias", "Thays"])