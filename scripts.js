document.getElementById("form-submit").addEventListener("click", function () {
    let infoNome =  document.getElementById("info-nome")
    let infoEmail =  document.getElementById("info-email")
    let infoSucesso = document.getElementById("info-sucesso")
      
      let nome = document.querySelector("#nome").value;
      let email = document.querySelector("#email").value;
  
      if (nome == "") {
          infoNome.innerHTML = ""
          infoEmail.innerHTML = ""
          infoNome.innerHTML = "Por gentileza, informe o seu nome!"
      } else if ((email == '') || (email.indexOf('@')==-1) || (email.indexOf('.')==-1)){
          infoNome.innerHTML = ""
          infoEmail.innerHTML = ""
          infoEmail.innerHTML = "Por gentileza, informe um email válido!"
      } else {
          infoNome.innerHTML = ""
          infoEmail.innerHTML = ""
      let dadosContato = {nome: nome, email: email}
      localStorage.setItem('dados-contato', JSON.stringify(dadosContato));
      infoSucesso.innerHTML = nome+ "! Sua participação está garantida!<br>Muito brigada!"
  }
    
  });
  