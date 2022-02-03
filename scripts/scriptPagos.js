import carritodeCompras from "./carritodeCompras.js";
import confirmacionCompra from "./confirmacionCompra.js";
// import decrementar from "./incredecre.js"
// import incrementar from "./incredecre.js"
let productoslocal = JSON.parse(localStorage.getItem('Productos')) || []

document.addEventListener('DOMContentLoaded', () =>{
    
    carritodeCompras()
    
})

const payForm = document.getElementById('payForm')
payForm.addEventListener('submit', e=>{
    e.preventDefault()
    confirmacionCompra()
    localStorage.clear()
}
)