function mostrarTela(tela) {
    // Oculta todas as telas
    document.querySelectorAll('.tela').forEach(section => section.style.display = 'none');
    
    // Mostra a tela selecionada
    document.getElementById(tela).style.display = 'block';
}

function adicionarCliente() {
    const nome = document.getElementById("nomeCliente").value.trim();
    const email = document.getElementById("emailCliente").value.trim();
    const telefone = document.getElementById("telefoneCliente").value.trim();

    if (!nome || !email || !telefone) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const listaClientes = document.getElementById("listaClientes");
    const item = document.createElement("li");
    item.textContent = `Nome: ${nome}, E-mail: ${email}, Telefone: ${telefone}`;
    listaClientes.appendChild(item);

    document.getElementById("formClientes").reset();
}

function adicionarProduto() {
    const nome = document.getElementById("nomeProduto").value.trim();
    const categoria = document.getElementById("categoriaProduto").value.trim();
    const preco = document.getElementById("precoProduto").value.trim();

    if (!nome || !categoria || !preco) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const listaProdutos = document.getElementById("listaProdutos");
    const item = document.createElement("li");
    item.textContent = `Produto: ${nome}, Categoria: ${categoria}, Preço: R$ ${parseFloat(preco).toFixed(2)}`;
    listaProdutos.appendChild(item);

    document.getElementById("formProdutos").reset();
}