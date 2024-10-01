import HeaderComponent from "../components/header.component.js";
import PizzaFormComponent from "../components/pizza-form.component.js";
import IPizza, { Ingrediente } from "../models/pizza.js";

const header = new HeaderComponent();

const pizzaFormComp = new PizzaFormComponent();

const url: URL = new URL(window.location.href);
const params: URLSearchParams = new URLSearchParams(url.search);
const id: string = params.get("id") || "";

pizzaFormComp.configureFormListener((pizzaArray: IPizza[], target: any): IPizza[] => {

    const ingredientes: Ingrediente[] = target?.elements["ingredientes"].value.split(", ");

    const index = pizzaArray.findIndex((pizza: IPizza) => pizza.id === id);

    if (index != -1) {
        pizzaArray[index] = {
            id: id,
            ilustracao: target?.elements["ilustracao"].value,
            preco: target?.elements["preco"].value,
            sabor: target?.elements["sabor"].value,
            listaIngredientes: ingredientes
        };
    }

    return pizzaArray;
});