var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
'article-one':{
    title: 'Article One | Praveen Kurapati',
    heading: 'Article One',
    date: 'Sep 26, 2016',
    content:
        <p>
                This is content of article one .
                I never expected to do all this stuff ,but came real with Imad Moocs they are very interative .
               </p>
              <p>
                This is content of article one .
                I never expected to do all this stuff ,but came real with Imad Moocs they are very interative .
              </p>
},
'article-two':{
    title: 'Article Two | Praveen Kurapati',
    heading: 'Article Two',
    date: 'Sep 26, 2016',
    content:
        <p>
                This is content of article two .
                I never expected to do all this stuff ,but came real with Imad Moocs they are very interative .
               </p>
              <p>
                This is content of article two .
                I never expected to do all this stuff ,but came real with Imad Moocs they are very interative .
              </p>
},
'article-three':{
    title: 'Article Three | Praveen Kurapati',
    heading: 'Article Three',
    date: 'Sep 26, 2016',
    content:
        <p>
                This is content of article Three .
                I never expected to do all this stuff ,but came real with Imad Moocs they are very interative .
               </p>
              <p>
                This is content of article Three .
                I never expected to do all this stuff ,but came real with Imad Moocs they are very interative .
              </p>
},
};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
    var htmlTemplate=
       <html>
    <head>
        <title>
           ${title}
        </title>
        <meta name="viewport" content="width=device-width, intial scale=1"/>
    </head>
    <body>
        <div class="container">
           <div>
              <a href='/'>Home</a>
           </div>
           <hr/>
           <h3>
               ${heading}
           </h3>
           <div>
              ${date}
           </div>
           <div>
              ${content}
           </div>
        </div>
    </body>
</html>

return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
