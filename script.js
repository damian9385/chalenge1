
function encriptar(){     
      
    const expBusqueda = new RegExp ("[A-Z]","g");
      const text = document.querySelector("#input-texto").value;    
      const  textoEncriptado = text.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");
      document.querySelector(".texto-msg").value = textoEncriptado;
     // document.querySelector("#input-texto").value;    
}
var botonEncriptar = document.querySelector("#btn-encriptar");
botonEncriptar.onclick = encriptar;


function desencriptar (){
      
    let expBusqueda = new RegExp ("[A-Z]","g");
      const texto = document.querySelector("#input-texto").value;
      const textoCifrado = texto.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");
      document.querySelector(".texto-msg").value = textoCifrado;
     // document.querySelector("#input-texto").value;
}
const botonDesencriptar = document.querySelector("#btn-desencriptar");
botonDesencriptar.onclick = desencriptar;


const botonCopiar = document.querySelector("#btn-copy");
botonCopiar.addEventListener("click", function(boton){
      const copiarTexto = document.querySelector("#msg");
      copiarTexto.select();
      document.execCommand("copy");
      document.querySelector("#msg").value = " ";
})

function validarTexto () {
    
    const mayusculas = /[A-Z]/g;
    const caracteresEspeciales = /[áéíóú]/g;

    if (texto.match(mayusculas)) {
        return true;
    }else if (texto.match(caracteresEspeciales)){
        return true;
    } else {
        return false;
    }

}