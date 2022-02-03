const decrementar =()=>{
    const decre = document.querySelector('.btndecre')
    const cantProduc = document.querySelector('.txtcantidad')
    const undidadProduc = document.querySelector('.txtunidad').textContent
    console.log('decrementar')
    const cantidad = document.querySelector('.txtcantidad').value           
        if (undidadProduc == 'kg') {
            if(cantidad >= 250){
                const cantidad = document.querySelector('.txtcantidad').value = --cantidad*250;
                cantProduc.innerHTML = cantidad
                console.log(cantProduc)}
        }else if(undidadProduc == 'und') {
                if(cantidad >= 1){
                    const cantidad = document.querySelector('.txtcantidad').value = --cantidad;
                    cantProduc.innerHTML = cantidad
                    console.log(cantProduc)
    }}}
    export default decrementar