//   Mostrar form Produtos
  document.getElementById("mostrar-form-produto").addEventListener("click", function () {
    document.getElementById("form-clientes").style.display = 'none'
    let displayFormProduto = document.getElementById("form-produtos").style.display;
    displayFormProduto == 'none' ? document.getElementById("form-produtos").style.display = '' : document.getElementById("form-produtos").style.display = 'none'
  });
//   Mostrar form Clientes
  document.getElementById("mostrar-form-cliente").addEventListener("click", function () {
    document.getElementById("form-produtos").style.display = 'none'
    let displayFormCliente = document.getElementById("form-clientes").style.display;
    displayFormCliente == "none" ? document.getElementById("form-clientes").style.display = '' : document.getElementById("form-clientes").style.display = 'none'
  });
// Submeter dados produto
document.getElementById("produto-submit").addEventListener("click", function () {

    let infoNome = document.getElementById("info-nome")
    let infoCategoria = document.getElementById("info-categoria")
    let infoValor = document.getElementById("info-valor")
    let infoCores = document.getElementById("info-cores")
    let infoTamanho = document.getElementById("info-tamanho")
    let infoDescricao = document.getElementById("info-descricao")
    let infoSucessoProd = document.getElementById("info-sucesso-produto")
 
    infoNome.innerHTML = ""
    infoCategoria.innerHTML = ""
    infoValor.innerHTML = ""
    infoCores.innerHTML = ""
    infoTamanho.innerHTML = ""
    infoDescricao.innerHTML = ""
 
    let nome = document.querySelector("#nome").value;
    let categoria = document.querySelector("#categoria").value;
    let valor = document.querySelector("#valor").value;
    let cores = document.querySelector("#cores").value;
    let tamanho = document.querySelector("#tamanho").value;
    let descricao = document.querySelector("#descricao").value;

      if (nome == "")  {
        infoNome.innerHTML = "Informe o nome do produto!"  
      } else  if (categoria == "")  {
        infoCategoria.innerHTML = "Selecione uma categoria!"  
      } else  if (valor == "")  {
        infoValor.innerHTML = "Informe o valor do produto!"   
      } else  if (cores == "")  {
        infoCores.innerHTML = "Informe as cores do produto!"  
      } else  if (tamanho == "")  {
        infoTamanho.innerHTML = "Informe o tamanho do produto!"  
      }  else  if (descricao == "")  {
        infoDescricao.innerHTML = "Informe o descrição do produto!"  
      }else {

        let dadosProduto = {nome: nome, categoria: categoria,valor: valor, cores: cores, tamanho: tamanho, descricao:descricao }
        localStorage.setItem('dados-produto', JSON.stringify(dadosProduto));
        infoSucessoProd.innerHTML = "O produto "+nome+ " foi cadastrado com sucesso"
      }    
  });
  
// Submeter dados cliente
  document.getElementById("cliente-submit").addEventListener("click", function () {

    let infoNomeCliente = document.getElementById("info-nome-cliente")
    let infoEmail = document.getElementById("info-email")
    let infoCidade = document.getElementById("info-cidade")
    let infoEndereco = document.getElementById("info-endereco")

    let infoSucessoCliente = document.getElementById("info-sucesso-cliente")
 
    infoNomeCliente.innerHTML = ""
    infoEmail.innerHTML = ""
    infoCidade.innerHTML = ""
    infoEndereco.innerHTML = ""
 
    let nome = document.querySelector("#nome-cliente").value;
    let email = document.querySelector("#email").value;
    let cidade = document.querySelector("#cidade").value;
    let endereco = document.querySelector("#endereco").value;

      if (nome == "")  {
        infoNomeCliente.innerHTML = "Informe o nome do cliente!"  
      } else  if (email == "")  {
        infoEmail.innerHTML = "Informe um email!"  
      } else  if (cidade == "")  {
        infoCidade.innerHTML = "Informe uma cidade!"   
      } else  if (endereco == "")  {
        infoEndereco.innerHTML = "Informe um endereço!"  
      } else {
        let dadosCliente = {nome: nome, email: email,cidade: cidade, endereco: endereco }
        localStorage.setItem('dados-cliente', JSON.stringify(dadosCliente));
        infoSucessoCliente.innerHTML = "O cliente "+nome+ " foi cadastrado com sucesso"
      }    
  });
  