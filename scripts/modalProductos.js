import mostrarOfertas from "./mostrarOfertas.js"
import decrementar from "./incrementar.js"
import incrementar from "./incrementar.js"

const reciboModalProductos = (objeto) =>{
    const modalProductos = document.getElementById('listProductos')
    console.log(objeto)
    //modalProductos.innerHTML = ''
    /// if(modalProductos.classList !== null){
      //modalProductos.remove()
   // }
    
    const {nombre, precio, unidad, imagen, oferta, id } = objeto
    modalProductos.innerHTML = `
    
    
    
  <div class="modal-body seleccionProducto d-flex justify-content-between">
    <img src="${imagen}" alt="...">
    <div class="descripcionProducto flex-column justify-content-evenly">
      <h2 class="modal-title" id="exampleModalLabel">${nombre}</h2>
      <h1 class="modal-subbtitle">. ${precio} /Kg</h1>
      <p>Precios con IVA inlcuido</p>
      <p>Peso aproximado por pieza, puede variar de acuerdo al peso real</p> 
      <h1>Selecciona la madurez que deseas</h1>
            <div class="input-group mb-3">
              <select class="custom-select d-flex dropdown-menu-lg-start w-100" id="inputGroupSelect01">
                <option selected>Por elegir</option>
                <option value="maduro">Maduro (Para hoy)</option>
                <option value="normal">Normal (3-5 dias)</option>
                <option value="verde">Verde (7 dias)</option>
              </select>
             </div>
                <div class="d-flex justify-content-between">
                    <div class="btnsCantidad d-flex">
                    <button class="btndecre btn btn-light">-</button>
                    <div class="d-flex align-items-center"><p class="txtcantidad align-self-center">0</p><p class="txtunidad">${unidad}</p></div>
                    <button class="btnincre btn btn-light"">+</button>
                    </div>
                  <button id=${id} class="btnsverdes guardarProducto" data-bs-dismiss="modal" aria-label="Close">Agregar</button>
                </div>
                </div>
         </div>
          
      
 


      
    

    
    
    
    `



mostrarOfertas()
}
export default reciboModalProductos

