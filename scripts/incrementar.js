/*INCREMENTAR BOTONES*/
const incrementar =()=>{
    const incre = document.querySelector('.btnincre')
    const cantProduc = document.querySelector('.txtcantidad')
    const undidadProduc = document.querySelector('.txtunidad').textContent
    console.log('incrementar')
    if (undidadProduc == 'kg') {
        const cantidad = document.querySelector('.txtcantidad').value = ++cantidad*250;
        cantProduc.innerHTML = cantidad
        console.log(cantProduc)
        }else if(undidadProduc == 'und') {
            const cantidad = document.querySelector('.txtcantidad').value = ++cantidad;
            cantProduc.innerHTML = cantidad
            console.log(cantProduc)
}}
export default incrementar



      

      
       
