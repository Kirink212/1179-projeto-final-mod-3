import CardComponent from "../components/card.component.js";
import HeaderComponent from "../components/header.component.js";
import IPizza from "../models/pizza.js";

const header = new HeaderComponent();

let pizzaArray: Array<IPizza> = [
    {
        id: "1",
        ilustracao: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROgKfg2NKJMDZYcAxgJOOv8QSmR1Y4aH8nFQ&s",
        sabor: "Pizza de Calabresa",
        preco: 75,
        listaIngredientes: ["calabresa", "queijo muçarela", "molho de tomate"],
    },
    {
        id: "2",
        ilustracao: "https://www.estadao.com.br/resizer/v2/YANRMY3TBZGWBCM2UDY6LEZJMA.jpg?quality=80&auth=289089484a40119e75a6c596d047f07ce2c444bd79409f909129e35f85be4d1b&width=720&height=503&smart=true",
        sabor: "Pizza de Margherita",
        preco: 65,
        listaIngredientes: ["manjericão", "queijo muçarela", "molho de tomate"],
    },
    {
        id: "3",
        ilustracao: "https://www.estadao.com.br/resizer/v2/YANRMY3TBZGWBCM2UDY6LEZJMA.jpg?quality=80&auth=289089484a40119e75a6c596d047f07ce2c444bd79409f909129e35f85be4d1b&width=720&height=503&smart=true",
        sabor: "Pizza de Muçarela",
        preco: 55,
        listaIngredientes: ["queijo muçarela", "molho de tomate"],
    }
];

const pizzaJSON: string | null = localStorage.getItem("pizzaArray");

if (!pizzaJSON) {
    localStorage.setItem("pizzaArray", JSON.stringify(pizzaArray));
} else {
    pizzaArray = JSON.parse(pizzaJSON);
}
console.log(pizzaArray);

for(let pizza of pizzaArray) {
    const card = new CardComponent(pizza);
}
