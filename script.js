console.log("hello");

function executeThisCodeAfterFileLoaded(){
  console.log("It Worked!");
}

function executeThisCodeAfterFileFails(){
  console.log("It failed...");
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "dinosaurs.json");
myRequest.send();
console.log("myRequest", myRequest);

// HTTP VERBS
// GET - get information
// POST - post exisiting information
// PUT
// DELETE
