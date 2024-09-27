import CardComponent from "./components/card.component.js";
import HeaderComponent from "./components/header.component.js";
import IPizza from "./models/pizza";

const header = new HeaderComponent();

const obj1: IPizza = {
    ilustracao: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROgKfg2NKJMDZYcAxgJOOv8QSmR1Y4aH8nFQ&s",
    sabor: "Pizza de Calabresa",
    preco: 75,
    listaIngredientes: ["calabresa", "queijo muçarela", "molho de tomate"],
}
const card1 = new CardComponent(obj1);
const obj2: IPizza = {
    ilustracao: "https://www.estadao.com.br/resizer/v2/YANRMY3TBZGWBCM2UDY6LEZJMA.jpg?quality=80&auth=289089484a40119e75a6c596d047f07ce2c444bd79409f909129e35f85be4d1b&width=720&height=503&smart=true",
    sabor: "Pizza de Muçarela",
    preco: 65,
    listaIngredientes: ["manjericão", "queijo muçarela", "molho de tomate"],
}
const card2 = new CardComponent(obj2);
// const card3 = new CardComponent();
// const card = new CardComponent();
// const card5 = new CardComponent();