function crearParrafo(){
    let elemento = document.createElement('p')
    let texto = document.createTextNode('Este es el primer parrafo')
    elemento.appendChild(texto)
    let puntero = document.getElementById('p2')
    let parrafos = document.getElementById('parrafos')
    parrafos.insertBefore(elemento, p2)
}