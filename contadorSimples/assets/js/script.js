let add = document.getElementById('incremento');
let remover =document.getElementById('decremento');
let int = document.getElementById('numero');
let inteiro = 0;

add.addEventListener('click', function(){
    inteiro +=1;
    int.innerHTML = inteiro;
})

remover.addEventListener('click', function(){
    inteiro -= 1;
    int.innerHTML = inteiro;
})