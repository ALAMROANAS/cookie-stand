'use strict';

let hourlycustomers= ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
  
  function  randomvalue(min,max) {
      return Math.floor(Math.random() *(max - min+1)) + min;
  }
  let seattlecookies = document.getElementById('seattle');

  const seattle = {
      location:'seattle',
      min : 23,
      max : 65,
      avacookies : 6.3,
      hoursals : [],
      dailysales : []
      total:0,

  updatingsales:function(){
  this.dailysales = randomvalue(23,65);
  console.log(this.dailysales);
  },
  render :function(){
      let listsalse=document.createElement('list salse');
      globvar.appendchild(listsalse);
      
      let h2= document.createElement('h2');
      listsalse.appendChild(h2);
      h2.textContent='seattle';
      listsalse.appendChild(h2);
      let h3=document.createElement('ul');
      listsalse.appendChild(h3);
      let ulel=null;
      for(let i=0 ; i < this.hourlycustomers.lingth ; i++){
          liel=document.createElement('li');
          h3.appendChild(liel);
          liel.textContent=this.hourlycustomers[i];
      }

  }

    };

  seattle.updatingsales();
  seattle.render();
