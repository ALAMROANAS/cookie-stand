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
      dailysales : [],
      total : 0,

  calcrandomnumcust:function(){
    for(let i= 0 ; i < hourlycustomers.length; i++){
        this.hoursals.push(randomvalue(this.min,this.max));

       }
  },

  calcrandomnumcookies:function(){
      for(let i=0 ; i< hourlycustomers; i++){
          this.dailysales.push(this.hoursals[i] * Math.ceil(this.avacookies));
          this.total = this.total + this.dailysales[i];

      }
  },

  render:function(){
    let location = document.createElement('h2');
    cont.appendChild(location);
    location.textContent = this.location;

    let unOrderedList = document.createElement('ul');   
    cont.appendChild(unOrderedList);

    for(let i = 0 ; i < hourlycustomers.length; i++){
        let listItems = document.createElement('li');
        unOrderedList.appendChild(listItems);
        listItems.textContent = `${hourlycustomers[i]} : ${this.dailysales[i]} cookies`;
    }

    let dailyTotal = document.createElement('li');
    unOrderedList.appendChild(dailyTotal);
    dailyTotal.textContent = `Total : ${this.total} cookies`;
    }
  };

  seattle.calcrandomnumcust();
  seattle.calcrandomnumcookies();
  seattle.render();



  const tokyo = {
    location:'tokyo',
    min : 23,
    max : 65,
    avacookies : 6.3,
    hoursals : [],
    dailysales : [],
    total:0,

calcrandomnumcust:function(){
  for(let i= 0 ; i < hourlycustomers.length; i++){
      this.hoursals.push(randomvalue(this.min,this.max));

     }
},

calcrandomnumcookies:function(){
    for(let i=0 ; i< hourlycustomers; i++){
        this.dailysales.push(this.hoursals[i] * Math.ceil(this.avacookies));
        this.total = this.total + this.dailysales[i];

    }
},

render:function(){
  let location = document.createElement('h2');
  cont.appendChild(locationName);
  location.textContent = this.location;

  let unOrderedList = document.createElement('ul');   
  cont.appendChild(unOrderedList);

  for(let i = 0 ; i < hourlycustomers.length; i++){
      let listItems = document.createElement('li');
      unOrderedList.appendChild(listItems);
      listItems.textContent = `${hourlycustomers[i]} : ${this.dailysales[i]} cookies`;
  }

  let dailyTotal = document.createElement('li');
  unOrderedList.appendChild(dailyTotal);
  dailyTotal.textContent = `Total : ${this.total} cookies`;
  }
};

tokyo.calcrandomnumcust();
tokyo.calcrandomnumcookies();
tokyo.render();



const dubai = {
    location:'dubai',
    min : 23,
    max : 65,
    avacookies : 6.3,
    hoursals : [],
    dailysales : [],
    total:0,

calcrandomnumcust:function(){
  for(let i= 0 ; i < hourlycustomers.length; i++){
      this.hoursals.push(randomvalue(this.min,this.max));

     }
},

calcrandomnumcookies:function(){
    for(let i=0 ; i< hourlycustomers; i++){
        this.dailysales.push(this.hoursals[i] * Math.ceil(this.avacookies));
        this.total = this.total + this.dailysales[i];

    }
},

render:function(){
  let location = document.createElement('h2');
  cont.appendChild(locationName);
  location.textContent = this.location;

  let unOrderedList = document.createElement('ul');   
  cont.appendChild(unOrderedList);

  for(let i = 0 ; i < hourlycustomers.length; i++){
      let listItems = document.createElement('li');
      unOrderedList.appendChild(listItems);
      listItems.textContent = `${hourlycustomers[i]} : ${this.dailysales[i]} cookies`;
  }

  let dailyTotal = document.createElement('li');
  unOrderedList.appendChild(dailyTotal);
  dailyTotal.textContent = `Total : ${this.total} cookies`;
  }
};

dubai.calcrandomnumcust();
dubai.calcrandomnumcookies();
dubai.render();



const Paris = {
    location:'Paris',
    min : 23,
    max : 65,
    avacookies : 6.3,
    hoursals : [],
    dailysales : [],
    total:0,

calcrandomnumcust:function(){
  for(let i= 0 ; i < hourlycustomers.length; i++){
      this.hoursals.push(randomvalue(this.min,this.max));

     }
},

calcrandomnumcookies:function(){
    for(let i=0 ; i< hourlycustomers; i++){
        this.dailysales.push(this.hoursals[i] * Math.ceil(this.avacookies));
        this.total = this.total + this.dailysales[i];

    }
},

render:function(){
  let location = document.createElement('h2');
  cont.appendChild(locationName);
  location.textContent = this.location;

  let unOrderedList = document.createElement('ul');   
  cont.appendChild(unOrderedList);

  for(let i = 0 ; i < hourlycustomers.length; i++){
      let listItems = document.createElement('li');
      unOrderedList.appendChild(listItems);
      listItems.textContent = `${hourlycustomers[i]} : ${this.dailysales[i]} cookies`;
  }

  let dailyTotal = document.createElement('li');
  unOrderedList.appendChild(dailyTotal);
  dailyTotal.textContent = `Total : ${this.total} cookies`;
  }
};

Paris.calcrandomnumcust();
Paris.calcrandomnumcookies();
Paris.render();




const lima = {
    location:'lima',
    min : 23,
    max : 65,
    avacookies : 6.3,
    hoursals : [],
    dailysales : [],
    total:0,

calcrandomnumcust:function(){
  for(let i= 0 ; i < hourlycustomers.length; i++){
      this.hoursals.push(randomvalue(this.min,this.max));

     }
},

calcrandomnumcookies:function(){
    for(let i=0 ; i< hourlycustomers; i++){
        this.dailysales.push(this.hoursals[i] * Math.ceil(this.avacookies));
        this.total = this.total + this.dailysales[i];

    }
},

render:function(){
  let location = document.createElement('h2');
  cont.appendChild(locationName);
  location.textContent = this.location;

  let unOrderedList = document.createElement('ul');   
  cont.appendChild(unOrderedList);

  for(let i = 0 ; i < hourlycustomers.length; i++){
      let listItems = document.createElement('li');
      unOrderedList.appendChild(listItems);
      listItems.textContent = `${hourlycustomers[i]} : ${this.dailysales[i]} cookies`;
  }

  let dailyTotal = document.createElement('li');
  unOrderedList.appendChild(dailyTotal);
  dailyTotal.textContent = `Total : ${this.total} cookies`;
  }
};

lima.calcrandomnumcust();
lima.calcrandomnumcookies();
lima.render();