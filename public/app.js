
window.onload = main;
 
 var quotes = [ {author: "Jay", text: "Frogs are cool!" }, {author: "Keith", text:"Yeeehaa!"}]

  function main() {

    for (quote in quotes){
   
      var li = document.createElement('li');
      li.innerText = quotes[quote].text + " - " + quotes[quote].author;

      var ul = document.getElementById('quote-list');
      ul.appendChild(li)
    }
  

    var form = document.getElementById('quote-form');
    form.onsubmit = function( event ){
      event.preventDefault();
      handleClick();
    }
    
    function handleClick(){

      var quote = document.getElementById("quote-text-input");
      var author = document.getElementById("author-text-input");
      var userInput = quote.value + " - " + author.value;
      console.log(userInput);

      
      appendQuote( userInput);
      quote.value = ""
    }

    var deleteQuote 

    function appendQuote(userInput){

      var li = document.createElement('li');
      li.innerText = userInput;


      var ul = document.getElementById('quote-list');
      ul.appendChild(li)
      li.onclick = deleteQuote;
    }
  }