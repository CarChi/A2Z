function process(txt) {
  clearText();
  var concordance = new Concordance();
  concordance.process(txt);
  concordance.sortByCount();
  console.log(concordance);

  var p = createP('');
  p.class('text');
  paragraphs.push(p);

  var ul = createElement('ul', '');
  ul.parent(p);
  var keys = concordance.getKeys();
  for (var i = 0; i < keys.length; i++) {
    var li = createElement('li', keys[i] + ': ' + concordance.getCount(keys[i]));
    li.parent(ul);
  }
}


var dropZone, input, button, sample, clearButton;

// To keep track of all the new DOM elements being added
var paragraphs = [];

var inputText = '';

function setup() {

  noCanvas();

  // Selecting the text field and button
  input = select('#textinput');
  button = select('#submit');
  // When button pressed, handle user input
  button.mousePressed(handleInput);

  //"drop zone" for dragging and dropping files
  dropZone = select('#drop_zone');
  //Events for dropzone to handle
  dropZone.dragOver(highlight);
  dropZone.drop(gotFile, unHighlight);

  // This sample allows quick testing with a file that's ready to load instantly
  sample = select('#sample');
  sample.mousePressed(loadFile);
}

// Load a file for quick sample testing
function loadFile() {
  loadStrings('50shades.txt', fileLoaded);
}
// When the file is loaded
function fileLoaded(data) {
  var txt = data.join('\n');

  input.html(txt);
  // Note the use of a function that will "process" the text
  // This is b/c the text might come in a number of different ways
  // process(txt);
}

// Handle dropzone events
function highlight() {
  dropZone.style('background', '#AAA');
}

function unHighlight() {
  dropZone.style('background','');
}

function gotFile(file) {
  if (file.type === 'text') {
    // process(file.data);
    inputText += file.data + '\n\n';
    input.html(inputText);
  } else {
    // alert if some weird other kind of file is drpped
    alert('this is not a text file.');
  }
}

// Handle the text input field
function handleInput() {
  process(input.value());
}

// Clear all the divs with remove()
function clearText() {
  
  //input.html('');
  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].remove();
  }
  paragraphs = [];
}


