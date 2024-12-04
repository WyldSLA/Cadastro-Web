function mostrarTela(tela) {
    document.querySelectorAll('.tela').forEach(section => section.style.display = 'none');
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

function adicionarFuncionario() {
    const nome_funcionario = document.getElementById("nomeFuncionario").value.trim();
    const cargo_funcionario = document.getElementById("cargoFuncionario").value.trim();
    const email_funcionario = document.getElementById("emailFuncionario").value.trim();
    const tel_funcionario = document.getElementById("telefoneFuncionario").value.trim();

    if (!nome_funcionario || !cargo_funcionario || !email_funcionario || !tel_funcionario) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const listaFuncionarios = document.getElementById("listaFuncionarios");
    const item = document.createElement("li");
    item.textContent = `Nome: ${nome_funcionario}, Cargo: ${cargo_funcionario}, E-mail: ${email_funcionario} Telefone: ${tel_funcionario}`;
    listaFuncionarios.appendChild(item);

    document.getElementById("formFuncionarios").reset();
}

function adicionarFornecedor() {
    const nome_razao_social = document.getElementById("nomeRazaoSocial").value.trim();
    const CNPJ_fornecedor = document.getElementById("CNPJFornecedores").value.trim();
    const nome_Dono = document.getElementById("nomeDono").value.trim();
    const tel_fornecedor = document.getElementById("telefoneFornecedor").value.trim();

    if (!nome_razao_social || !CNPJ_fornecedor || !nome_Dono || !tel_fornecedor) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const listaFornecedores = document.getElementById("listaFornecedores");
    const item = document.createElement("li");
    item.textContent = `Razão Social: ${nome_razao_social}, CPNJ: ${CNPJ_fornecedor}, Nome do dono: ${nome_Dono} Telefone: ${tel_fornecedor}`;
    listaFornecedores.appendChild(item);

    document.getElementById("formFornecedores").reset();
}

function adicionarBanco() {
    const nome_Banco = document.getElementById("nomeBanco").value.trim();
    const razao_social_banco = document.getElementById("razaoSocialBanco").value.trim();
    const CNPJ_Banco = document.getElementById("CNPJBanco").value.trim();
    const cod_Banco = document.getElementById("codigoBanco").value.trim();

    if (!nome_Banco || !razao_social_banco || !CNPJ_Banco || !cod_Banco) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const listaBancos = document.getElementById("listaBancos");
    const item = document.createElement("li");
    item.textContent = `Nome Fantasia: ${nome_Banco}, Razão Social: ${razao_social_banco}, CNPJ: ${CNPJ_Banco} Código do Banco: ${cod_Banco}`;
    listaBancos.appendChild(item);

    document.getElementById("formBancos").reset();
}