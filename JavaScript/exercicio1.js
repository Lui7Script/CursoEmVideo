



function carregar() {
    
var msg = window.document.getElementById('msg');
var img = window.document.getElementById('imagem');

var data = new Date()

var hora = data.getHours()
var minutes = data.getMinutes()
var seconds = data.getSeconds()


msg.innerHTML = " Agora são " + hora + " Horas é  " + minutes + " minutos  " 

    

if (hora >= 0 && hora < 12 ){


    
   
      
} else if ( hora >= 12 ){
        //BoaTarde! 

        

    }else{ ( hora >= 18)
 
     //BoaNoite

     
    
    }
 

}

