document.getElementById('Party').addEventListener('submit', function(event) {
  doIt('join');
});

document.getElementById('create-btn').onclick = function() {
  doIt('create');
}

  // Generate a random six-digit number
  let randomNumber = Math.floor(Math.random() * 1000000);

  // Pad the number with leading zeroes if necessary
  let paddedNumber = randomNumber.toString().padStart(6, '0');

function doIt(from) {
  console.log('------------------------------doIt');
  console.log(from);
  event.preventDefault();
  var code = document.getElementById('code-input').value;
  var name = document.getElementById('name-input').value;
  if (name.trim() === '') {
    alert('Please fill in all fields.');
    return;
  }

  var isCreateClicked = from === 'create' ? 'true' : 'false';
  var isCodeGen = from === 'join' ? code : paddedNumber;

  window.location.href = 'lobby.html?create=' + isCreateClicked + '&name=' + name + '&code=' + isCodeGen;
}

console.log(paddedNumber); // Example output: "023456"



