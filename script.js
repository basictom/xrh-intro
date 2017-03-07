console.log("First line in JS file:", Date.now());

var output = document.getElementById("dino-container");

function makeDom(xhrData){
  // output.innerHTML = xhrData;
  var dinoString = "";
  var currentDino = "";
  for(var i=0; i<xhrData.dinosaurs.length; i++){
    currentDino = xhrData.dinosaurs[i];
    dinoString += `<div class="col-sm-6 col-md-4">`;
    dinoString += `<div class="thumbnail">`;
    dinoString += `<img src="${currentDino.url}" alt="${currentDino.name}">`
    dinoString += `<div class="caption">`;
    dinoString += `<h3>${currentDino.name}</h3>`
    dinoString += `<p>${currentDino.type}</p>`
    dinoString += `<p>${currentDino.food}</p></div></div></div>`;
  }
  output.innerHTML = dinoString;
};

function executeThisCodeAfterFileLoaded(){
  console.log("Data returned:", Date.now());
  var data = JSON.parse(this.responseText)
  // console.log("It Worked!", data);
  makeDom(data);
}

function executeThisCodeAfterFileFails(){
  console.log("It failed...");
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "dinosaurs.json");
myRequest.send();
// console.log("myRequest", myRequest);

// HTTP VERBS
// GET - get information
// POST - post exisiting information
// PUT
// DELETE
console.log("Last line in JS file:", Date.now());
