import {pintarSillas} from '../helper/pintarSillas.js'

let sala=document.getElementById("cinema")


let asientos=JSON.parse(localStorage.getItem("asientos"))
if(asientos ==null){
    asientos=[
        [{id:"a1",estado:0},{id:"b1",estado:0},{id:"c1",estado:0},{id:"d1",estado:0},{id:"e1",estado:0},{id:"f1",estado:0}],
        [{id:"a2",estado:0},{id:"b2",estado:0},{id:"c2",estado:2},{id:"d2",estado:0},{id:"e2",estado:0},{id:"f2",estado:0}],
        [{id:"a3",estado:0},{id:"b3",estado:0},{id:"d2",estado:0},{id:"d3",estado:0},{id:"e3",estado:0},{id:"f3",estado:0}],
        [{id:"a3",estado:0},{id:"b3",estado:0},{id:"e2",estado:0},{id:"d4",estado:0},{id:"e4",estado:0},{id:"f4",estado:0}]
    ]
}


pintarSillas(asientos)


let bandera="negra"
sala.addEventListener("click",function(evento){

    if(evento.target.tagName=="IMG"){

        let idSeleccionado=(evento.target.id);
       
        asientos.forEach(function(hilera){
           
            hilera.forEach(function(asiento){

                if(asiento.id==idSeleccionado){

            

                    if(asiento.estado==0){
                        evento.target.src="../../assets/img/cinema-chairgreen.png"
                        asiento.estado=1
                    }

                    else if(asiento.estado==1){
                        evento.target.src="../../assets/img/cinema-chair.png"
                        asiento.estado=0
                    }
                    
                }
    
                
    
            })
            
        })

        console.log(asientos);


        
    }
    
    

   //localStorage.setItem("asientos",JSON.stringify(asientos))

})
