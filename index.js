// Write your solution here!
const cats =["Milo","Otis","Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyPrependCat(name){
    cats.unshift(name);
  }

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  
  function destructivelyRemoveFirstCat(name){
    cats.shift();
  }

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyRemoveLastCat(name){
    cats.pop();
  }

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function appendCat(name){
    const newCats=[...cats, name];
    return newCats;
  }

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function prependCat(name){
    const newCats=[name, ...cats];
    return newCats;
  }

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function removeLastCat(){
   return cats.slice(0,-1);
  }

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function removeFirstCat(){
   return cats.slice(1);
  }