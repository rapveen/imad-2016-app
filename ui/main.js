//counter code
var button = document.getElementById('counter');
/*button.onclick = function(){
    //Create the request object
    var request = new XMLHttpRequest();
    
   //Capture the response
   request.onreadystatechange = function() {
     if(request.readyState == XMLHttpRequest.DONE)  {
         //Take some action
         if(request.status === 200){
             var counter = request.responseText;
             var span = document.getElementById("count");
             span.innerHTML = counter.toString();
         }
     }
   };
   //Make the request
  request.open('GET','http://rapveen.imad.hasura-app.io/counter',true);
  request.send(null);
};*/
var counter = 0;
button.onclick = function(){
  counter = counter + 1;  
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};