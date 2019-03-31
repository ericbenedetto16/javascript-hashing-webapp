var val;
var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@*!";
var key = [6,3,7,4];
var message = "";
var encrypted = "";

function create() {
  encrypted = "";
  length = getRandomInt(6,15);
  for(var i = 0; i < length; i++) {
    var cur = getRandomInt(0, alphabet.length-1);
    encrypted += alphabet[cur];
  }
  document.getElementById("pass").value = encrypted;
}

function encrypt(str) {
  var newStr = "";
  var encArr = [];
  var final;
  var j = 0;
  for(var i = 0; i < str.length; i++) {
      temp = str.charCodeAt(i);
      temp += key[j];
      if(j < key.length-1) {
        j++;
      }else{
        j = 0;
      }
      newStr += String.fromCharCode(temp);
    }
   makeArray(newStr, encArr);
   encArr = encArr.reverse();
   final = encArr.join('');
   document.getElementById("newMessage").value = final;
}

function decrypt(mes) {
  var decArr = [];
  var decMess = "";
  var field = document.getElementById("cracked");
  var j = 0;
  var result = "";
  makeArray(mes, decArr);
  decArr.reverse();
  decMess = decArr.join("");

  for(var i = 0; i < decArr.length; i++) {
      temp = decMess.charCodeAt(i);
      temp -= key[j];
      if(j < key.length-1) {
        j++;
      }else{
        j = 0;
      }
      result += String.fromCharCode(temp);
    }
    field.value = result;
}

function crack() {
  decrypt(document.getElementById("pass").value);
}

function userEncrypt() {
  encrypt(document.getElementById("user").value);
}

function makeArray(str, arr) {
  for(var i = 0; i < str.length; i++) {
    arr.push(str.charAt(i));
  }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
