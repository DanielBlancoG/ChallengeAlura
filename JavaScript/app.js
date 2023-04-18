'use stric'

//Funciones:

let encrypted = function(i){
    
    i.preventDefault();
    
    let inputText = boardInput.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    inputText = inputText
    .replaceAll(/e/img, "enter")
    .replaceAll(/o/img, "ober")
    .replaceAll(/i/img, "imes")
    .replaceAll(/a/img, "ai")
    .replaceAll(/u/img, "ufat");
    
    boardOuput.value = inputText;
    hideElement1.style.display = 'none';
    hideElement2.style.display = 'none';
    hideElement3.style.display = 'none';
    btnCopyShow.style.display = 'block';
    ShowElement.style.display = 'block';
};

let decrypted = function(i){
    
    i.preventDefault();
    
    let inputText = boardInput.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    inputText = inputText
    .replaceAll(/enter/img, "e")
    .replaceAll(/ober/img, "o")
    .replaceAll(/imes/img, "i")
    .replaceAll(/ai/img, "a")
    .replaceAll(/ufat/img, "u");
    
    boardOuput.value = inputText;
};

function copyText(){

    let contenido = document.getElementById('ouput-text');

    contenido.select();
    document.execCommand("copy");

}

  
//Variables:
    
const btnEncrypted = document.getElementById('button-encrypted').addEventListener('click', encrypted);
const btnDecrypted = document.getElementById('button-decrypted').addEventListener('click', decrypted);
const btnCopy = document.getElementById('button-coppy').addEventListener('click', copyText);
const btnCopyShow = document.getElementById('button-coppy');
const boardInput = document.getElementById('input-text');
const boardOuput = document.getElementById('ouput-text');
const hideElement1 = document.getElementById('hide-text1'); 
const hideElement2 = document.getElementById('hide-text2'); 
const hideElement3 = document.getElementById('hide-img'); 
const ShowElement = document.getElementById('hide-imgAfter'); 
    
