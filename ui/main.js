//counter code
var button = document.getElementById('counter');
button.onclick = function(){
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
};

//Submit button
var nameInput = document .getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
  var names = ['name1', 'name2', 'name3', 'name4'];
  var list = '';
  for(var i=0;i<names.length;i++){
      list+='<li>'+names[i]+'</li>';
  }
  var ul = document.getElementById('namelist');
  ul.innnerHTML = list;
};

/*var counter = 0;
button.onclick = function(){
  counter = counter + 1;  
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};*/