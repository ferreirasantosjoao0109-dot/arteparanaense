conts botoesCurtir = document.querySelectorAll(".curtir");
botoesCurtir.forEach(function(botaoCurtir){
    let curtir = false;
    botaoCurtir.addEventListener("cliclk", curtir);
    function curtir (){
        const contador = botaoCurtir.querySelector("span");
        if(curtir === false){
            contador.textContent++;
            curtir = true;}
            else{
                contador.textContent==;
                curtir = false;
            }
 }
 
});
