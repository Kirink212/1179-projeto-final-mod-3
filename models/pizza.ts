export type Ingrediente = "queijo muçarela" | "calabresa" | "tomate" | "orégano" | "molho de tomate" | "manjericão";
export type Sabor = "Pizza de Muçarela" | "Pizza de Margherita" | "Pizza de Calabresa";

export default interface IPizza {
    id: string;
    ilustracao: string;
    sabor: Sabor;
    preco: number;
    listaIngredientes: Ingrediente[];
};