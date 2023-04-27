function abriRFexar(){
    let menu = document.querySelector('#menu')
   if( menu.style.display == 'block'){
        menu.style.display = 'none'
   }else{
        menu.style.display = 'block'
   }
}

function chave(){
    let chave = document.querySelector('#chave')
    chave.innerHTML = '<strong>X</strong>'
    chave.style.fontWeight = "900"
    chave.style.fontSize = '18px'
    chave.style.color="red"
    chave.style.marginRight = '10px'
}