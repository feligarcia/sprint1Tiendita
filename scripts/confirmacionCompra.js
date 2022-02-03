const confirmacionCompra =() => {
    const modalConfirmacion = document.createElement('div')
    
     if(modalConfirmacion !== null){
      
      modalConfirmacion.remove()
    }
    
    modalConfirmacion.innerHTML = `
    <div class="modal fade" id="modalConfirma" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered ml-0 " role="document">
            <div class="modal-content p-4 d-flex flex-column justify-content-center align-items-center mb-24">
            
                <img src="./images/gracias-compra.svg" alt="">
            
                <h1>Gracias por tu compra</h3>
                <a href="index.html" class="btn btn-success btnsverdes" id="seguirComprando">Seguir comprando</a>
            
            </div>
        </div>
    </div>
    
    
    
    `


document.body.append(modalConfirmacion)    
const modal = new bootstrap.Modal(modalConfirmacion.querySelector('.modal'))
modal.show()

}
export default confirmacionCompra