window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___-__-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});

function addEvent(elem, event, fn){
if(elem.addEventListener){
  elem.addEventListener(event, fn, false);
}else{
  elem.attachEvent("on" + event,
  function(){ return(fn.call(elem, window.event)); });
}}
var element = document.getElementById('tel');

addEvent(element,'focus',function(){
  var that = this;
  setTimeout(function(){ that.selectionStart = that.selectionEnd = 10000; }, 0);
});

var nameInput = document.querySelector('input[name="name"]');
var surnameInput = document.querySelector('input[name="surname"]');

nameInput.addEventListener('input', function () {
            this.value = this.value.replace(/[^a-zA-Zа-яА-Я\s]/g, '').replace(/^(.)(.*)$/, function (_, firstChar, rest) {
                return firstChar.toUpperCase() + rest.toLowerCase();
            });
        });
    
        surnameInput.addEventListener('input', function () {
            this.value = this.value.replace(/[^a-zA-Zа-яА-Я\s]/g, '').replace(/^(.)(.*)$/, function (_, firstChar, rest) {
                return firstChar.toUpperCase() + rest.toLowerCase();
            });
        });
    
        nameInput.addEventListener('focus', function () {
            phoneInput.placeholder = originalPlaceholder;
        });
    
        surnameInput.addEventListener('focus', function () {
            phoneInput.placeholder = originalPlaceholder;
        });
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }

console.log('without problems');