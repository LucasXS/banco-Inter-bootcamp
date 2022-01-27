document.getElementById("moreInfo").addEventListener("click", function(){
    let btt=document.getElementById("moreInfo");
    let moreText=document.getElementById("more");

    if(btt.style.display !== "none"){
        document.getElementById("more").innerHTML = "A CURIOSIDADE MATOU O CACHORRO, NÃO LEIA MAIS NADA, VÁ ASSISIR O FILME!"
    }else if (btt.style.display !== "none") {
        document.getElementById("more").innerHTML = "";
    }    
});

/* CODIGO ACIMA AINDA EM DESENVOLVIMENTO*/

