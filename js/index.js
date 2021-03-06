var input_encoder =  document.querySelector("#encriptar");

var btn_encriptar = document.querySelector("#btn-encriptar");

var btn_desencriptar = document.querySelector("#btn-desencriptar");

var msg = document.querySelector('#enc-dec');

var btn_copiar =  document.querySelector('#btn-copiar');

const keys = {"e":"enter", "i":"imes", "a":"ai","o":"ober","u":"ufat"}


//Funciones

//Capturar valor enc-input
btn_encriptar.addEventListener("click", function() {

    if (input_encoder.value.length > 0 ) {
        msg.innerHTML = removerDiacriticos(input_encoder,keys)
    
        input_encoder.value = ""
    }else{
        alert("Debes ingresar un texto valido")
        return false
    }
})

//Integracion funcional del boton desencriptar 
btn_desencriptar.addEventListener("click", function(){
    if (input_encoder.value.length > 0) {
        msg.innerHTML = desencriptar(input_encoder,keys);
        console.trace(msg.innerHTML)

        input_encoder.value = ""
    }
    else
    {
        alert("Debes ingresar el texto a desencriptar!")
        return false
    }
})

//Eliminar acentos y limpiar caracteres especiales 
//Normalizer Form Descompressor aka NFD
const removerDiacriticos = (input,keys) => {

    var regex = "!@#$^&%*()+=-[]\/{}|:<>?,.";

    var str = input.value;
    

    //Eliminar accentos de las vocales por medio Normalize Form Descompressor
     str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
     console.trace(str)

     //Recorrer RE
     for (let c = 0; c < regex.length; c++) {
        //console.trace(regex[c])

        //Eliminar caracteres especiales
        str = str.replace(new RegExp("\\" + regex[c], 'gi'), '')
        
     }
     //Enc private Keys
     str = str.replace(/e/gi, keys.e)
     str = str.replace(/i/gi, keys.i)
     str = str.replace(/a/gi, keys.a)
     str = str.replace(/o/gi, keys.o)
     str = str.replace(/u/gi, keys.u)
     console.trace(str)

    return str
}

const desencriptar = (input,keys) => {


    let str = input.value;

    str = str.replace(new RegExp(keys.e, "g"), "e")
    str = str.replace(new RegExp(keys.i, "g"), "i")
    str = str.replace(new RegExp(keys.a, "g"), "a")
    str = str.replace(new RegExp(keys.o, "g"), "o")
    str = str.replace(new RegExp(keys.u, "g"), "u")
    console.trace(str)

    return str
    
}

//Clipboard
const copiarTexto = () => {
    if (msg.value.length > 0) {
    msg.select();

    //copy text inside the text field
    navigator.clipboard.writeText(msg.value);

    //Alert pops-up when text has been selected
    alert(`El cifrado "${msg.value}" ha sido copiado`)

    //msg.value = '';
    }else {
        alert("No existe mensaje!");
        return false;
    }

}




/*
Bienvenidos y Bienvenidas a nuestro primer desaf??o!

Durante estas dos semanas, vamos a trabajar en una aplicaci??n que encripta textos, as?? podr??s intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptaci??n utilizada.

Las "llaves" de encriptaci??n que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:
- Debe funcionar solo con letras min??sculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versi??n encriptada tambi??n devolver una palabra encriptada para su versi??n original.

Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

    La p??gina debe tener campos para
    inserci??n del texto que ser?? encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
    El resultado debe ser mostrado en la pantalla.

 */