//VARIABLES

let Word1 = ['H','A','M','B','U','R','G'];
let Word2 = ['P','A','R','I','S'];
let Word3 = ['B','A','R','C','E','L','O','N','A'];
let Word4 = ['B','E','R','L','I','N'];
let Word5 = ['I','S','T','A','N','B','U','L'];
let Word6 = ['S','E','O','U','L'];
let Word7 = ['M','I','A','M','I'];
let Word8 = ['T','O','K','Y','O'];
let Word9 = ['D','U','B','A','I'];
let Word10 = ['L','O','N','D','O','N'];
let Chances;
let Word;
let ingame = false;


//START FUNCTIONS

function StartWord(){

        Chances = 10;
        let palavra = "";
        let contador;
        RandomizeCity();

        for(contador = 0; contador < Word.length; contador++){

            palavra += '_';

        }

        document.getElementById("Palavra").innerHTML = palavra;
        ingame = true;
        document.getElementById("chances").innerHTML = "Chances remaining: " + Chances.toString();

}

//FIND THE LETTER IN THE HANGMAN

function LetterSearch(letra){
    if(ingame == true){
    let palavra = document.getElementById("Palavra").innerHTML.toString();
    let contador;
    let newword = NewArray(palavra);
    let acerto = 0;

    for(contador = 0; contador < palavra.length; contador++){

        if(newword[contador] == '_'){

            if(letra == Word[contador]){

                newword[contador] = letra;
                console.log(newword);
                acerto += 1;

            }
            
        }
    }

    if(acerto == 0){

        Chances -= 1;

    }

    document.getElementById("chances").innerHTML = "Chances remaining: " + Chances.toString();
    document.getElementById("Palavra").innerHTML = NewString(newword);

    if(Chances == 0){

        document.getElementById("chances").innerHTML = "QUE PENA, VOCÊ PERDEU!";
        ingame = false;

    }

    if(WinVerify()){

        document.getElementById("chances").innerHTML = "PARABÉNS, VOCÊ GANHOU!";
        ingame = false;

    }
}

}



//CRIAR ARRAY

function NewArray(palavra){

    let retorno = ["","","","","","","","","","","","","","",""];
    let contador;

    for(contador = 0; contador < palavra.length; contador++){

        retorno[contador] += palavra[contador]; 

    }

    return retorno;

}

//CRIAR STRING

function NewString(palavra){

    let retorno = "";
    let contador;

    for(contador = 0; contador < palavra.length; contador++){


        retorno += palavra[contador];


    }

    return retorno;

}

// RANDOM CITY

function RandomizeCity(){

    let escolha = Math.floor((Math.random() * 10) + 1);
    switch(escolha){

        case 1:

        Word = Word1;
        break;

        case 2:

        Word = Word2;
        break;

        case 3:

        Word = Word3;
        break;

        case 4:

        Word = Word4;
        break;

        case 5:

        Word = Word5;
        break;
        
        case 6:

        Word = Word6;
        break;

        case 7:

        Word = Word7;
        break;

        case 8:

        Word = Word8;
        break;

        case 9:

        Word = Word9;
        break;

        case 10:

        Word = Word10;
        break;

    }

}

// WIN VERIFY

function WinVerify(){

    let palavra = document.getElementById("Palavra").innerHTML;
    let contador = palavra.length;
    let win = true;

    for(contador = 0; contador < palavra.length; contador++){

        if(palavra[contador] == '_'){

            win = false;

        }

    }

    return win;


}
