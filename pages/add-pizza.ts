import { Sabor } from './../models/pizza';
import HeaderComponent from "../components/header.component.js";
import PizzaFormComponent from "../components/pizza-form.component.js";
import IPizza, { Ingrediente } from "../models/pizza.js";

const header = new HeaderComponent();

const pizzaFormComp = new PizzaFormComponent();

pizzaFormComp.configureFormListener((pizzaArray: IPizza[], target: any): IPizza[] => {
    const ingredientes: Ingrediente[] = target?.elements["ingredientes"].value.split(", ");

    const saborSemEspaco = (target?.elements["sabor"].value as string).replace(" ", "-")
    const uuid = `${saborSemEspaco}-${Date.now()}`;

    pizzaArray.push({
        id: uuid,
        ilustracao: target?.elements["ilustracao"].value,
        preco: target?.elements["preco"].value,
        sabor: target?.elements["sabor"].value,
        listaIngredientes: ingredientes
    });

    return pizzaArray;
});