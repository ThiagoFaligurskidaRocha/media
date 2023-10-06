btn.addEventListener("click", function(){
    
var nota1 = parseInt(av1.value);
var nota2 = parseInt(r1.value);
var nota3 = parseInt(av1.value);
var nota4 = parseInt(r1.value);
var nota5 = parseInt(av1.value);
var nota6 = parseInt(r1.value);

var maior = 0;

if(nota1>=nota2){
 media1 = nota1;
}if(nota2>nota1){
    media1 = nota2;
}

if(nota3>=nota4){
    media2 = nota3;  
}if(nota4>nota3){
    media2 = nota4;
}

if(nota5>=nota6){
    media3 = nota3;
}if(nota6>nota5){
    media3 = nota6;
}

var soma=(media1+media2+media3/3);
mediaFinal=(soma/3)

result.innerHTML = "A sua média é: " + mediaFinal;
   



});