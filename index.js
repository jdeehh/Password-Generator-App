var p1 = document.getElementById('p1')
var p2 = document.getElementById('p2')
var p3 = document.getElementById('p3')
var p4 = document.getElementById('p4')


function genPassword(){
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var pLength = document.querySelector('select').value
    var p1 = ""
    var p2 = ""
    var p3 = ""
    var p4 = ""
    
    for (var i = 0; i <= pLength; i++) {
   var random1 = Math.floor(Math.random() * chars.length);
   p1 += chars.substring(random1, random1 +1);
   var random2 = Math.floor(Math.random() * chars.length);
   p2 += chars.substring(random2, random2 +1);
   var random3 = Math.floor(Math.random() * chars.length);
   p3 += chars.substring(random3, random3 +1);
   var random4 = Math.floor(Math.random() * chars.length);
   p4 += chars.substring(random4, random4 +1);

  }
  document.getElementById("p1").value = p1
  document.getElementById("p2").value = p2
  document.getElementById("p3").value = p3
  document.getElementById("p4").value = p4
 }


document.getElementById('button').addEventListener('click', genPassword)


function copyP1() {
  var copyText = document.getElementById('p1')
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  var tooltip = document.getElementById('myTooltip1');
  tooltip.innerHTML = `Copied: ${copyText.value}`; 
}

document.getElementById('p1').addEventListener('click', copyP1)

function copyP2() {
  var copyText = document.getElementById('p2')
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  var tooltip = document.getElementById('myTooltip2');
  tooltip.innerHTML = `Copied: ${copyText.value}`; 
}

document.getElementById('p2').addEventListener('click', copyP2)

function copyP3() {
  var copyText = document.getElementById('p3')
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  var tooltip = document.getElementById('myTooltip3');
  tooltip.innerHTML = `Copied: ${copyText.value}`; 
}
document.getElementById('p3').addEventListener('click', copyP3)

function copyP4() {
  var copyText = document.getElementById('p4')
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  var tooltip = document.getElementById('myTooltip4');
  tooltip.innerHTML = `Copied: ${copyText.value}`;  
}

document.getElementById('p4').addEventListener('click', copyP4)
