export const carritodeCompras =  () => {
    const carrito = JSON.parse(localStorage.getItem("Productos")) || []//cambiar por la clave de los produccots guardados
    const element = document.getElementById('listCarrito')
    
    if(carrito.length !== 0){
    element.innerHTML = ''
    carrito.forEach(e => {
        const {nombre, precio, unidad, imagen, oferta, id } = e
        console.log('Entrando a carrito de compras')
               
        element.innerHTML += `
        
        <li class="card">
            <div class="card-body d-flex justify-content-between">
                <div class="d-flex">
                    <img src=${imagen} class="card-img" alt="">
                    <div class="flex-column">
                        <p class="card-title">${nombre}</p>
                        <h1 class="card-text">$${precio}</h1>
                    </div>
                </div>
                <div class="">
                <div class="btnsCantidad d-flex">
                    <button class="btndecre btn btn-light">-</button>
                    <div class="d-flex align-items-center justify-content-center"><p class="txtcantidad align-self-center">0</p><p class="txtunidad">${unidad}</p></div>
                    <button class="btnincre btn btn-light">+</button>
                </div>
                </div>
            </div>
        </li>
        
        `
        
    })
    
} else {
    console.log('Entrando a carrito VACIO')
    element.innerHTML = ''

    element.innerHTML += `
    
            <div class="modal-body p-4 flex-column justify-content-center align-items-center mx-auto">
            
                <img src="./images/carrito-vacio.svg" alt="">
            
                <h1>Tu canasta esta vacia</h3>
                <a href="" class="btn btn-success btnsverdes" data-bs-dismiss="modal" aria-label="Close">Agregar productos</a>
            
            </div>
        
    
    `
}}


export default carritodeCompras


/*Funcionalidad del boton volver */
//const btnvolver = document.querySelector(".btnvolver")
//btnvolver.addEventListener("click", window.location.href("../index.html"))
