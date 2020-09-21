// Ett produkt-interface
enum Color {
    Black,
    White,
    Magenta,
    Cyan,
}

interface Product {
    id: number;
    name: string;
    price: number;
    color?: Color;
}

let product = {
    id: 3,
    name: "Toycar AE-12",
    price: 39.39,
};

interface WriteFunction {
    (product: Product): string;
}

let writeProduct: WriteFunction;

writeProduct = function (prod: Product) {
    return prod.name + prod.color;
};

console.log(writeProduct(product));
