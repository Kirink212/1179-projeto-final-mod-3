type Ingrediente = "queijo muçarela" | "calabresa" | "tomate" | "orégano" | "molho de tomate" | "manjericão";

export default interface IPizza {
    ilustracao: string;
    sabor: string;
    preco: number;
    listaIngredientes: Ingrediente[];
};