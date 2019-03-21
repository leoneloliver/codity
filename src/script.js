
 function myAct(){
    setTimeout(function(){
      var detail = document.getElementsByClassName("all-info");
      var divActive = document.getElementsByClassName("active");
      var showBtn = function() {

        // for(let i = 0; i < detail.length; i++){
        //   detail[i].classList.remove('active');
        // }

        this.classList.toggle('active');

      }
      Array.from(detail).forEach(function(element){
        element.addEventListener("click", showBtn);
      });
      const totalNew = document.getElementsByClassName('new').length;
      document.getElementsByClassName('new-user')[0].innerHTML = totalNew;
      

    },1000);
  

 }



