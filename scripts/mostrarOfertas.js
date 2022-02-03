const mostrarOfertas = async (listado) => {
    const productos = await listado
    const contenedor = document.querySelector(".populares")
    
    console.log('Entra a funcion ofertas')
    if(productos){
    productos.forEach(element => {
        if(element.oferta !== ""){
        const { nombre, precio, unidad, imagen, oferta, id } = element
        let precioOferta = parseInt(oferta) / 100
        let ofer = (precioOferta + 1) * precio
        contenedor.innerHTML += `
        
            <li class="card productos">
            <div class="classOferta"><p class="precioOferta">${oferta + " dto."}</p></div>
                <div class="card-body">
                    <img src="${imagen}" class="imagen-fruta" alt="...">
                    <div class="valores">
                           <div class="d-flex"> <h1 class="card-title">$${precio +"/"+ unidad}</h1><h1 class="precioconOferta ms-2">$${ofer.toFixed(0)}/kg<del></del></h1></div>
                            <p class="card-subtitle">${nombre}</p>
                    </div>
                </div>
            
            <a data-bs-toggle="modal" data-bs-target="#modalProductos" id=${id} class="btn btnclassAct">Agregar</button>
            </li>
        
        `}
    });

}}
export default mostrarOfertas