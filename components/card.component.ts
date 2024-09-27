import IPizza from "../models/pizza";

export default class CardComponent {
  constructor(novaPizza: IPizza){
    const cardsList = document.getElementById("cards-list");

    if (cardsList) cardsList.innerHTML += this.render(novaPizza);
  }

  render(novaPizza: IPizza){
    const ingredientes = novaPizza.listaIngredientes.join(", ");
    return `
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="${novaPizza.ilustracao}" class="card-img-top" alt="pizza margherita">
          <div class="card-body">
            <h5 class="card-title">${novaPizza.sabor}</h5>
            <p class="card-text">${novaPizza.preco}</p>
            <p class="card-text">Ingredientes: ${ingredientes}</p>
            <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Adicionar ao carrinho">
              <i class="fa fa-cart-plus" aria-hidden="true"></i>
            </button>
            <button type="button" class="btn btn-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Editar item">
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            </button>
            <button type="button" class="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Remover item" data-bs-toggle="modal" data-bs-target="#deleteModal">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }
}