var nb=0;
  var jogo=true;

    function Byid(id){
      return document.getElementById(id);
    }

    function valuede(id){
      return Byid(id).value;
    }

    function flam(id,id2,id3){
      var elmtfeu=Byid(id);
      var error1=Byid("error1");
      nb=valuede(id3);
      
      if(nb<=3 || isNaN(nb)){
        error1.innerHTML="Digite um número maior que 3";
        error1.style.color="red";
      }else{
        error1.innerHTML="";
        elmtfeu.innerHTML="";
        for (var i=0; i<nb;i++){
          insereimg(id);
        }
        ElmtJoueur=Byid("jogador");
        jogador.textContent="Vez do jogador 1";
        jogador.style.color="#1354aa";
        jogador.style.fontSize="20px";
        jogo=true;
        insereButton(id2);
        document.getElementById("nb").value="";
      }

    }

    function insereimg(id){
      var elmt=Byid(id);
      var createtd=document.createElement("td");
      var i=document.createElement("IMG");
      i.setAttribute("src", "images/allumette.jpg");
      i.setAttribute("alt","allumette");
      createtd.appendChild(i);
      elmt.appendChild(createtd);
    }

    function insereButton(idb){
      var elmt=Byid(idb);
      elmt.innerHTML="<p> <input type='text' id='nbAllumEnlev' name='nbAllumEnlev' size='5' value=''/><label> palito(s)</label><span id='error2'></span><button type='button' class='button' onclick='enlever(nbAllumEnlev)'>Remover</button></p><p id='reste'></p>"
    }


    function enlever(nb2){
      var elmtfeu=Byid("trfeu");
      var nbAllumEnlev=parseInt(valuede("nbAllumEnlev"));
      var ElmtReste=Byid("reste");
            
      if(nbAllumEnlev>3 || nbAllumEnlev<=0 || isNaN(nbAllumEnlev)){
        error2=Byid("error2");
        error2.textContent=" Insira um número entre 0 e 3 e menor que o número de correspondências restantes : "+nb;
        error2.style.color="red";
      }else if (nbAllumEnlev>nb){
        error2.textContent=" Insira um número menor que o número de correspondências restantes : "+nb;
        error2.style.color="red";
      }else{
        error2.textContent="";
        jogo=!jogo;
          if (jogo==true) {
            jogador.textContent="Vez do jogador 1";
            jogador.style.color="#1354aa";
            jogador.style.fontSize="20px";
          }else{
            jogador.textContent="Vez do jogador 2";
            jogador.style.color="#5eeb00";
            jogador.style.fontSize="20px";
          }
          for (var i=nbAllumEnlev-1; i>=0;i--){
            elmtfeu.removeChild(elmtfeu.childNodes[i]);
          } 
          nb=nb-nbAllumEnlev;
      }

      ElmtReste.textContent="Falta "+nb+" rodadas.";
      document.getElementById("nbAllumEnlev").value="";

      if(nb===0){ 
        jogador.textContent="";
        jogo=!jogo;
        if (jogo==true) {
            jogador.textContent="Jogador 1 vence";
            jogador.style.color="#1354aa";
          }else{
            jogador.textContent="Jogador 2 vence";
            jogador.style.color="#5eeb00";
          }
        var i=document.createElement("IMG");
        i.setAttribute("src", "images/ganhar.jpg");
        i.setAttribute("alt","gagné");
        elmtfeu.appendChild(i);

        error2.textContent=" ***** O jogo acabou. *****";
          error2.style.color="#E3371E";
      }

    }