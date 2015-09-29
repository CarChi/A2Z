var words;

function preload() {
  Go = loadStrings("words.txt")
}

function setup(){
  console.log(Go);
  background(250);
  var ind= floor(random(Go.length));
  text(Go[ind],10,10,80,80)

  createCanvas(windowWidth, windowHeight);
  noStroke();

  
  // set up text size on floor
  textSize(64);
  // fill style for "loading" text
  fill(100);
  text("Go", 600,100);
}
/*
// You could also use the draw function to make the words re-render continuously
function draw(){
  renderWords();  
}*/

function mousePressed(){
  renderWords();
}

function getWords(){
  console.log(json); // for debugging, to view the full json result 
  words = json;  
  renderWords();
}

function renderWords(){
  background(0);
  // don't start drawing until there are words in the array
  if (Go.length > 0){  
    console.log('got results');
    // resilts is an array of strings
    var y = 0;
    for (var i=0; i<Go.length; i++){
      fill(random(0,85), random(85,170), random(100,255), random(80,100));
      // the actual word is stored in the ngram property of the word object
      text(Go[i],random(width), y);//random(height));
      y += 30;
    }    
  } 
}