const LinksSocialMedia = {
  github: 'vitorjobs',
  linkedin: 'in/vitor-guedes',
  instagram: '_vitor_guedes',
  
}

// MUDAR A URL DO LINK COM OS DADOS DO OBJETO LinkSocialMedia
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    //alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

// BUSCAR INFORMAÇÕES DE UM PERFIL DO GITHUB
function getGitHubProfileInfos(){
  
  //Capturar o valor da URL já com o conteúdo do objeto LinkSocialMedia
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  
  // UTILIZAÇÃO DE PROMISSES E ARROW FUNCTIONS
  fetch(url)                // ARMAZENA A RESPOSTA|RETORNO DA URL 
  .then(response => {       //RECEBE A RESPOSTA
    response.json()         // TRANSFORMA A RESPOSTA EM FORMATO JSON
      .then(data => {       // RECEBE A RESPOSTA EM FORMATO JSON
        userName.textContent = data.name // ACESSO O ELEMENTO DA DOM QUE CONTÉM O ID userName e ALTERA PARA O VALOR DA VARIÁVEL
        userBio.textContent = data.bio // ACESSO O ELEMENTO DA DOM QUE CONTÉM O ID userName e ALTERA PARA O VALOR DA VARIÁVEL
        userLink.href = data.html_url
        userLinkLogin.textContent = data.login
        userImage.src = data.avatar_url
      })           
  }) 
}

getGitHubProfileInfos()