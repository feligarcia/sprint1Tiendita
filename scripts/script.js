import getData from "./obtenerProductos.js"
import mostrarMercado from "./mostrarMercado.js"
import mostrarOfertas from "./mostrarOfertas.js"
import reciboModalProductos from "./modalProductos.js"
import carritodeCompras from "./carritodeCompras.js"
import decrementar from "./decrementar.js"
import incrementar from "./incrementar.js"
import mostrarTiendas from "./mostrarTiendas.js"
export const endpoint = 'https://latienditajfgg.herokuapp.com/productos/'
export const ciudadpoint = 'https://latienditajfgg.herokuapp.com/tiendas/'
let productoslocal = JSON.parse(localStorage.getItem('Productos')) || []





//funcion que llama al carrito de compras
const btnCarrito = document.getElementById("btnCarrito")
btnCarrito.addEventListener('click', e => {
    // const ciudadActual = document.getElementById('h3-ubicacion')
    // ciudadActual.innerHTML = ''
    // ciudadActual.innerHTML = document.getElementById('mostrarTiendasDiv').value //verificar
   carritodeCompras()
   //cantidadCarrito()
   //const cantidadIconoCarrito = document.getElementById('txtcarritos').value
   const cantidadModalCarrito = document.getElementById('cantCarritoModal')
   cantidadModalCarrito.innerText = cantidadCarrito()


  
})

//funcion que llama a las ciudades
const showTiendas = document.getElementById('showTiendas')
showTiendas.addEventListener('click',async () =>{
   
    const tiendas = await getData(ciudadpoint)
    mostrarTiendas(tiendas)
    console.log('se llama funcion de tiendas')
})





document.addEventListener('DOMContentLoaded', async () =>{
    const data = await getData(endpoint)
    mostrarMercado(data)
    mostrarOfertas(data)
    cantidadCarrito()
    mostrarTiendaCarrito()
    carritodeCompras()
    
    
    
})

function cantidadCarrito(){
    const carritobtn = document.querySelector('.cantCarrito')
    let lenghtData = 0
    productoslocal.forEach( e => {
        lenghtData += 1 
    })
    console.log(lenghtData)
    carritobtn.innerText = lenghtData
    return lenghtData
}

    document.body.addEventListener('click', async e=>{
    const btnDetail = e.target.classList.contains('btnclassAct')
    const id = e.target.id
    e.preventDefault()
    if(btnDetail){
        const lista = await getData(endpoint)
        const objeto = lista.find(list => list.id == Number(id)) //se cambia a numero porque lo trae en otro tipo de dato, le puedo quitar un igual pero no son buenas practicas
        reciboModalProductos(objeto)      
    }
})

//crear modal para el carrito y llamarlo

//agregar productos al local storage
document.body.addEventListener('click', async e=>{
    const btnguardar = e.target.classList.contains('guardarProducto')
    const id = e.target.id
    
    if(btnguardar){
        const lista = await getData(endpoint)
        const objeto = lista.find(list => list.id == Number(id))
        localStorage.getItem('Productos',JSON.stringify(productoslocal))
        productoslocal.unshift(objeto)
        localStorage.setItem('Productos',JSON.stringify(productoslocal))
    
        console.log('probando ingreso al localstorage')
        //se lleva al modal   
        const exitoso = document.querySelector('.exitoso')
        //exitoso.style.visibility = "visible"
        exitoso.style.animation = 'fadeIn 6s'
        

        //window.location.href="index.html"    
    }
   // 
})
//guardar la tienda escogida
const guardarTienda = document.getElementById('guardarTienda')
guardarTienda.addEventListener('click', e =>{
const ciudadPedidos = document.getElementById('ciudadPedidos')
const ciudadElegida = document.getElementById('mostrarTiendasDiv').value
ciudadPedidos.innerText = ciudadElegida
})

const iraPagar =document.getElementById('iraPagar')
iraPagar.addEventListener('click', e=>{
    window.location = "pagos.html"
})

//funcion para llamar a los botones incrementar o decrementar
// document.body.addEventListener('click', async e=>{
//     const btnsCantidad = e.target.classList.contains('btnsCantidad')
//     const id = e.target.id
//     if(btnsCantidad){
//     const btnincre = e.target.classList.contains('btnincre')
// }

// })

//mostrar la ubicacion de la tienda en el header del carrito
function mostrarTiendaCarrito(){
    const ciudadActual = document.getElementById('h3-ubicacion')
    ciudadActual.innerHTML = ''
    ciudadActual.innerHTML = document.getElementById('mostrarTiendasDiv').value //verificar
}