//basic table ingredients
  var tableArray = ["Header1", "Header2", "Header3","Header4"];
  var tr = [];
  var newTable = document.createElement("TABLE");
  var counter = 0;
  var br = document.createElement("br");
  for (var i = 0; i < tableArray.length; i++) {

    tr[i] = document.createElement("tr");
    if (counter <= tableArray.length) {

      for (var p = 0; p < tableArray.length; p++) {
//creating headers pops out using the counter var
        var contents = document.createTextNode('');
        var cell = document.createElement("th");
        contents.textContent = tableArray[p];
        cell.appendChild(contents);
        tr[i].appendChild(cell);
        newTable.appendChild(tr[i]);
        counter += 4;
      }
    }
//creating rest of  the cells starts at one for simplicity of naming cells
    tr[i] = document.createElement("tr");
    for (var p = 1; p < tableArray.length + 1 ; p++) {
      var contents = document.createTextNode('');
      var cell = document.createElement("td");
      cell.style.border = "1px solid";
      contents.textContent = p + "," + (i + 1);
      cell.appendChild(contents);
      tr[i].appendChild(cell);
      newTable.appendChild(tr[i]);
    }
}
//table finally created
newTable.setAttribute("id","tabl");
document.body.appendChild(newTable);

//button creator
for (var i = 0; i < tableArray.length; i++) {
  var buttons = ["left",'up','down','right']
  var newButton = document.createElement("button");
  var content = document.createTextNode('');
  content.textContent = buttons[i];
  newButton.appendChild(content);
  newButton.setAttribute("id","button"+ i);
  document.body.appendChild(newButton);
}
//mark cell button creator
var newButto = document.createElement("button");
var contentt = document.createTextNode('Mark Cell');
newButto.appendChild(contentt);
document.body.appendChild(br);
newButto.setAttribute("id","mark");
document.body.appendChild(newButto);

//some styling
newTable.style.border =  "2px solid";

//background color and selector functions selector array mimics position on table -1 for both x and y
var collection = document.getElementById('tabl').children;
var selectorPos = [0,0];

function bGFill() {
  var cellSelect = collection[selectorPos[1] + 1].children;
  cellSelect[selectorPos[0]].style.border = "3px solid";
}
bGFill(); // highlights the first 0,0 cell
function bGReset() {
  var cellSelect = collection[selectorPos[1] + 1].children;
  cellSelect[selectorPos[0]].style.border = "1px solid";
}

function markCell() {
  var cellSelect = collection[selectorPos[1] + 1].children;
  cellSelect[selectorPos[0]].style.backgroundColor = "yellow";
}
//move functions have bounds checks to prevent mis-navigation
function moveLeft() {
  bGReset();
  if (selectorPos[0] > 0) {
    selectorPos[0] = selectorPos[0] - 1;
  }
  bGFill();
}
function moveRight() {
  bGReset();
  if (selectorPos[0] <= 2) {
    selectorPos[0] = selectorPos[0] + 1;
  }
  bGFill();
}
function moveUp() {
  bGReset();
  if (selectorPos[1] > 0) {
    selectorPos[1] = selectorPos[1] - 1;
  }
  bGFill();
}
function moveDown() {
  bGReset();
  if (selectorPos[1] <= 2) {
    selectorPos[1] = selectorPos[1] + 1;
  }
  bGFill();
}
//and all of the listeners
document.getElementById('button0').addEventListener("click", moveLeft);
document.getElementById('button1').addEventListener("click", moveUp);
document.getElementById('button2').addEventListener("click", moveDown);
document.getElementById('button3').addEventListener("click", moveRight);
document.getElementById('mark').addEventListener("click", markCell);
