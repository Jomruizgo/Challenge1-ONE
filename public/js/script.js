document.querySelector(".out").style.display="none"; //Lo primero que hacemos es ocultar el mensaje de salidad, ya que al abrir la página web, no habrá ningún tenxto ingresado.

const inText=document.querySelector(".textInput") //Variable para almacenar el texto de entrada.
const outText=document.querySelector(".textOut") //Variable para almacenar el texto de salida.

//Variable para almacenar las claves del cifrado.
let key=[
    ["a","ai"],
    ["e","enter"],
    ["i","inter"],
    ["o","ober"],
    ["u","ufat"]
];

//Función para cifrar
function Encryption(text){
    text=text.toLowerCase();   //convierte todo el texto en minusculas
    for(let i=0;i<key.length;i++){
        if(text.includes(key[i][0])){  //Para encontrar las letras cifrables.
            text=text.replaceAll(key[i][0],key[i][1]);  //Cambia las letras encontradas en la lina anterior por su respectivo código.
        }
    }
    return text;
}

//Función para descifrar
function Decrypt(text){
    text=text.toLowerCase();   //convierte todo el texto en minusculas
    for(let i=(key.length-1);i>=0;i--){ //Recorre la matriz de claves en sentido inverso a la función de cifrado.
        if(text.includes(key[i][1])){
            text=text.replaceAll(key[i][1],key[i][0]);
        }
    }
    return text;
}

//Función que se ejecuta al presionar el botón "Encriptar" 
function Encryptor(){
    if(inText.value==""){ //Para verificar si se ha ingresado texto para cifrar
        document.querySelector(".out").style.display="none";  //Oculta contenedor que muestra texto cifrado
        document.querySelector(".Frame5").style.display="";   //con display="" tomo el valor de display que tengo el CSS, y por tanto, se hará visible el contenedor que advierte que no se ha ingresado texto para ser cifrado.
    }else{
        outText.value=Encryption(inText.value); //Cifra el el texto ingresado.
        inText.value="";  //Para limpiar el area de ingreso de texto.
        document.querySelector(".out").style.display="";  //Hace visible el contenedor que muestra el texto cifrado.
        document.querySelector(".Frame5").style.display="none";  //Oculta contenedor que advierte que no se ha ingresado texto para ser cifrado.
    }
    
}

//Función que se ejecuta al presionar el botón "Desencriptar" 
function Decryptor(){
    if(inText.value==""){
        document.querySelector(".out").style.display="none";
        document.querySelector(".Frame5").style.display="";
    }else{
        outText.value=Decrypt(inText.value);
        inText.value="";
        document.querySelector(".out").style.display="";
        document.querySelector(".Frame5").style.display="none";
    }
    
}

//Función que se ejecuta al presionar el botón "Copiar".
function Copy(){
    navigator.clipboard.writeText(outText.value); //Copia el texto de salida.
    outText.value="";
    document.querySelector(".out").style.display="none";
    document.querySelector(".Frame5").style.display="";
    alert("Texto Copiado"); //Anuncio emergente para avisar que el texto de salido ha sido copiado.
}