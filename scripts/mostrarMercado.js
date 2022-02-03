const mostrarMercado = async (listado) => {
    let contenedor = document.getElementById("container-productos")
    const productos = await listado
    contenedor.innerHTML =''
    productos.forEach(element => {
        const { nombre, precio, unidad, imagen, oferta, id } = element
        contenedor.innerHTML += `
        <li class="card productos">
                <div class="card-body">
                <img src="${imagen}" class="imagen-fruta" alt="...">
                <div class="valores">
                        <h1 class="card-title">$${precio +"/"+ unidad}</h1>
                        <p class="card-subtitle">${nombre}</p>
                </div>
            </div>
        
        <a data-bs-toggle="modal" data-bs-target="#modalProductos" id=${id} class="btn btnclassAct">Agregar</button>
        </li>
        `
    });

}
export default mostrarMercado