let turno = 1;
let fichas = ["O","X"];
let puestas =0;
let textoGanador = document.getElementById("victoria");
let finPartida = false;
let botones = Array.from(document.getElementsByTagName("button"));

botones.forEach(x => x.addEventListener("click",ponerFicha));

function ponerFicha(event){
    let botonPulsado = event.target;
    if(!finPartida && botonPulsado.innerHTML ==""){
        botonPulsado.innerHTML = fichas[turno];
        puestas +=1;

        let estadoPartida = estado();
        if(estadoPartida == 0){
            cambiarTurno();
            if(puestas < 9){
                ia();
                estadoPartida = estado();
                puestas += 1;
                cambiarTurno();
            }
        }

        if(estadoPartida == 1){
            textoGanador.style.visibility = "visible";
            partidaAcabada = true;
        }
    } 
}

