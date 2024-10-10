require("dotenv").config();


const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.urlencoded({extended:true}));

const API_KEY = process.env.API_KEY;


function fetchData(url,res){
    axios.get(url)
    .then(response=>{
        if(response.data.totalResults > 0){
            res.json({
                status:200,
                success:true,
                message:"Successfully data fetched",
                data:response.data
            });
            
        }else{
            res.json({
                status:200,
                success:true,
                message:"No more result",
            });
        }
    })
    .catch(error=>{
        res.json({
            status:500,
            success:true,
            message:"Successfully data fetched",
            data:response.data
        });
    }
    )
}


app.get("/news",(req,res)=>{
    let pageSize = parseInt(req.query.pageSize) || 40;
    let page = parseInt(req.query.page) || 1;
    let url=`https://newsapi.org/v2/everything?q=page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
    fetchData(url,res);
});

//headlines
app.options("/headlines",cors());
app.get("/headlines",(req,res)=>{
    let pageSize = parseInt(req.query.pageSize) || 80;
    let page = parseInt(req.query.page) || 1;

    let category = req.query.category || "business";
    let url = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`
    fetchData(url,res);
})

const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`listning to port ${PORT}`);
});