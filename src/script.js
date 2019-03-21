
 function myAct(){
    setTimeout(function(){
      var detail = document.getElementsByClassName("all-info");
      var divActive = document.getElementsByClassName("active");
      var showBtn = function() {
        this.classList.toggle('active');
      }
      Array.from(detail).forEach(function(element){
        element.addEventListener("click", showBtn);
      });
      const totalNew = document.getElementsByClassName('new').length;
      document.getElementsByClassName('new-user')[0].innerHTML = totalNew;
      
     
      var hideShowItem = function(){
        document.getElementsByClassName("all-item")[0].classList.toggle('hide');
      }
      var btnDown = document.getElementsByClassName("btn-down")[0];
      btnDown.addEventListener("click", hideShowItem);
     
     
     var ShowPopUp = function(){
       alert('Function activated!');
     }
     var btnCloud = document.getElementsByClassName("btn-cloud");
     Array.from(btnCloud).forEach(function(del){
       del.addEventListener("click", ShowPopUp);
     });
     var btnDelete = document.getElementsByClassName("btn-delete");
     Array.from(btnDelete).forEach(function(clo){
       clo.addEventListener("click", ShowPopUp);
     });

    },1000);
 }

