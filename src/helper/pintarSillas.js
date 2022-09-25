export function pintarSillas(sillas){

    let cinema=document.getElementById("cinema")

    sillas.forEach(function(hilera){
   
        let fila=document.createElement("div")
        fila.classList.add("row")
    
        hilera.forEach(function(silla){
    
            let columna=document.createElement("div")
            columna.classList.add("col-2")
    
            let imagen=document.createElement("img")
            imagen.classList.add("img-fluid","w-100")
            imagen.setAttribute("id",silla.id)
    
            if(silla.estado==0){
                imagen.src="../../assets/img/cinema-chair.png"
            }else if(silla.estado==2){
                imagen.src="../../assets/img/cinema-chairred.png"
                imagen.classList.add("sillaroja")
            }
    
            columna.appendChild(imagen)
            fila.appendChild(columna)
    
        })

        let botton=document.createElement("button")
        botton.classList.add("btn","btn-primary")
        botton.textContent="Reservar"
    
        
        cinema.appendChild(fila)
    
    })

}