const express = require('express');
const db = require('./../dataVideo/dataVideo');
var cors = require('cors');
var bodyParser = require('body-parser')
// db.db();
/////to save it in db //////
let videoModel = db.videoModel;
let app =express();
/////////bodyparser  to be able to read the “body” of an incoming JSON object.
/////////SO we dont need to use that bcause  body-parser implementation is now included in the default Express package 
app.use(cors());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());
app.use(express.json());
//connect front and back
app.use(express.static(__dirname + './../../public'));

 app.post("/save" , (req,res)=>{
    const {linkVideo ,titleVedio ,descriptionVideo,photoUrl,date} = req.body;
//    console.log(linkVideo ,titleVedio ,descriptionVideo,photoUrl,date);
    ////first date in schema second date from req.body all prop same
    let videoDoc = new videoModel({
        linkVideo:linkVideo,
        titleVedio :titleVedio,
        descriptionVideo :descriptionVideo,
        photoUrl :photoUrl,
        date:new Date ()
    });

 videoDoc.save((err)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send("Savd Input");
        }
     }); 
});//test

//display fav list
    app.get('/favList',(req,res) => {

        videoModel.find({})
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        
        })
        })
    
// Edit in fav list link
    app.put('/update/:linkVideo',(req,res) => {
        videoModel.findOneAndUpdate({linkVideo:req.params.linkVideo},req.body)
       .then(() => {
         res.send('Update it');
       })
       .catch((err) => {
         res.send(err);
         console.log("Cont Get this sarch")
       })
     });
//Delete one from fav list
    app.delete('/removeOne',function(req,res){
        const number = req.params.number;
        videoModel.find({})
        .deleteOne({}).then((result)=>{
        res.send("DeleteOne");
        })
        .catch((err)=>{
        res.send(err)
        })
    });


var port = 5000;
app.listen(port,()=>{
    console.log("Port",port)
}); 
