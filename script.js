function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img") // pegar a tag img

   if(html.classList.contains("light")) { //substituir a imagem

   //se tiver light mode, adicionar a imagem light

    img.setAttribute("src", "./assets/brendow-de-oculos.png")
    img.setAttribute("alt", "Foto do Brendow com óculos escuro")

 } else { //se tiver sem light mode, manter a imagem normal

    img.setAttribute("src", "./assets/brendow-de-lado.png")
    img.setAttribute("alt","Foto do Brendow, olhando de lado, escorado numa moto")
    
 }



   

}

   

 