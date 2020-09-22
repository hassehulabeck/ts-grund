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

// Ett interface för products-arrayen
interface Products {
    [index: number]: Product;
}

let products: Product[];

let toyCar: Product = {
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

console.log(writeProduct(toyCar));

products = [toyCar];

function addProduct(product: Product): void {
    products.push(product);
}

addProduct(toyCar);

(window as any).products = products;
