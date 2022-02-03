

export const mostrarTiendas = async (tiendas) =>{
    const tienditas = await tiendas
    const mostrarTiendasDiv = document.getElementById('mostrarTiendasDiv')
    mostrarTiendasDiv.innerHTML = ''
    console.log('tienditas')
    console.log(tienditas)
    tienditas.forEach(tienda => {
        if(tienda.nombre !== ""){
            const { id, nombre} = tienda
            console.log(nombre)
            if (id == 1){
                mostrarTiendasDiv.innerHTML += `
                <option selected value="${nombre}">${nombre}</option>
                `
            }else{
            
            mostrarTiendasDiv.innerHTML += `
            <option value="${nombre}">${nombre}</option>`
        }
}
});
}
export default mostrarTiendas