export default class HeaderComponent {
    constructor() {
        // renderiza este pedaço de HTML dentro do header (elemento com o id=header)
        const header = document.getElementById("header");

        // Essa ? permite que a propriedade innerHTML só seja acessada quando header for diferente de nulo
        // console.log(header?.innerHTML);

        if (header) header.innerHTML = this.render();
    }

    render() {
        return `
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" href="cadastro.html">Cadastrar Novo Item</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="sobre.html">Sobre nós</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        `;
    }
}