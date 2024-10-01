import IPizza, { Ingrediente } from "../models/pizza";

export default class PizzaFormComponent {
    constructor() {
        const pizzaFormContainer = document.getElementById("pizzaFormContainer");

        if (pizzaFormContainer) pizzaFormContainer.innerHTML = this.render();
    }

    configureFormListener(callback: (pizzaArray: IPizza[], target: any) => IPizza[]) {
        const pizzaForm: HTMLFormElement | null = (document.getElementById("pizzaForm") as HTMLFormElement);
        // const pizzaForm: HTMLElement | null = document.getElementById("pizzaForm");

        pizzaForm?.addEventListener("submit", (event: Event) => {
            event.preventDefault();

            const target = (event.target as any);
            // console.log(target?.elements["ilustracao"].value);
            // console.log(target?.elements["preco"].value);
            // console.log(target?.elements["sabor"].value);
            // console.log(target?.elements["ingredientes"].value);

            let pizzaArray: Array<IPizza> = JSON.parse(localStorage.getItem("pizzaArray")?? "[]");
            // const pizzaArray: Array<IPizza> = JSON.parse(localStorage.getItem("pizzaArray") || "[]");

            //////// bloco executado de acordo com o tipo de ação que eu vou realizar (create ou update)
            pizzaArray = callback(pizzaArray, target);

            localStorage.setItem("pizzaArray", JSON.stringify(pizzaArray));

            pizzaForm.reset();
        });
    }

    render() {
        return `
            <h2 class="mb-4">Formulário de Pizza</h2>
            <form id="pizzaForm" method="post">
            <!-- Campo para a Ilustração -->
            <div class="mb-3">
                <label for="ilustracao" class="form-label">Ilustração (URL):</label>
                <input type="url" class="form-control" id="ilustracao" name="ilustracao" placeholder="Insira a URL da ilustração" />
            </div>
        
            <!-- Campo para o Sabor -->
            <div class="mb-3">
                <label for="sabor" class="form-label">Sabor:</label>
                <select id="sabor" name="sabor" class="form-select">
                <option value="muçarela">Muçarela</option>
                <option value="calabresa">Calabresa</option>
                <option value="portuguesa">Portuguesa</option>
                <!-- Adicione mais opções conforme necessário -->
                </select>
            </div>
        
            <!-- Campo para o Preço -->
            <div class="mb-3">
                <label for="preco" class="form-label">Preço (R$):</label>
                <input type="number" class="form-control" id="preco" name="preco" step="0.01" min="0" placeholder="Ex: 35.50" />
            </div>
        
            <!-- Campo para a Lista de Ingredientes -->
            <div class="mb-3">
                <label for="ingredientes" class="form-label">Lista de Ingredientes:</label>
                <input type="text" class="form-control" id="ingredientes" name="ingredientes" placeholder="Ex: Queijo, Tomate, Manjericão" />
            </div>
        
            <!-- Botão para Submeter o Formulário -->
            <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
        `;
    }
}