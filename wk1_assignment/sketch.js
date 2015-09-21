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

  
  // text size on floor
  textSize(64);
  // fill style for "loading" text
  fill(100);
  text("Go", 600,100);
}


function mousePressed(){
  renderWords();
}

function getWords(){
  console.log(json); 
  words = json;  
  renderWords();
}

function renderWords(){
  background(0);
  // don't draw until there are words in the array
  if (Go.length > 0){  
    console.log('got results');
    // resilts is an array of strings
    var y = 0;
    for (var i=0; i<Go.length; i++){
      fill(random(0,85), random(85,170), random(100,255), random(80,100));
      text(Go[i],random(width), y);//random(height));
      y += 30;
    }    
  } 
}
