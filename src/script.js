
 function myAct(){
    setTimeout(function(){
      const detail = document.getElementsByClassName("all-info");
      const divActive = document.getElementsByClassName("active");
      const showBtn = function() {
        this.classList.toggle('active');
      }
      Array.from(detail).forEach(function(element){
        element.addEventListener("click", showBtn);
      });
      const totalNew = document.getElementsByClassName('new').length;
      document.getElementsByClassName('new-user')[0].innerHTML = totalNew;
      
     
      const hideShowItem = function(){
        document.getElementsByClassName("all-item")[0].classList.toggle('hide');
      }
      const btnDown = document.getElementsByClassName("btn-down")[0];
      btnDown.addEventListener("click", hideShowItem);
     
     
     const ShowPopUp = function(){
       alert('Function activated!');
     }
     const btnCloud = document.getElementsByClassName("btn-cloud");
     Array.from(btnCloud).forEach(function(del){
       del.addEventListener("click", ShowPopUp);
     });
     const btnDelete = document.getElementsByClassName("btn-delete");
     Array.from(btnDelete).forEach(function(clo){
       clo.addEventListener("click", ShowPopUp);
     });

    },1000);
 }

