const { query, response } = require("express");
const User = require("../models/usermodel");
const fetchFromTMDB = require("../services/tmdbservice");

const searchPerson = async(req,res)=>{
    const {query} =req.params;
    try{
        const response = await fetchFromTMDB(`https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`);
        if(response.results.length === 0){
            return res.status(404).send(null);
        }
        
        await User.findByIdAndUpdate(req.user._id,{
            $push:{
                searchHistory:{
                    id:response.results[0].id,
                    image:response.results[0].profile_path,
                    title:response.results[0].name,
                    searchType:"person",
                    createdAt:new Date(),
                },
            },
        })
        res.status(200).json({success:true,content:response.results})
    }catch(error){
        console.log("error while search by person",error.message);
        return res.status(500).json({success:false,message:"Internal server error"});
    }
}

const searchMovie = async(req,res)=>{
    const {query} = req.params;
    try{
        const response = await fetchFromTMDB(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`);
        if(response.results.length === 0){
            return res.status(400).send(null);
        }
        await User.findByIdAndUpdate(req.user._id,{
            $push:{
                searchHistory:{
                    id:response.results[0].id,
                    image:response.results[0].poster_path,
                    title:response.results[0].title,
                    searchType:"movie",
                    createdAt:new Date(),
                }
            }
        })
        return res.status(200).json({success:true,content:response.results});
    }catch(error){
        console.log("error while search by movie",error.message);
        return res.status(500).json({success:false,message:"Internal server error"});
    }
}

const searchTv = async(req,res)=>{
    const {query} = req.params;
    try{
        const response = await fetchFromTMDB(`https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`);
        if(response.results.length === 0){
            return res.status(400).send(null);
        }
        await User.findByIdAndUpdate(req.user._id,{
            $push:{
                searchHistory:{
                    id:response.results[0].id,
                    image:response.results[0].poster_path,
                    title:response.results[0].name,
                    searchType:"tv",
                    createdAt:new Date(),
                }
            }
        })
        return res.status(200).json({success:true, content:response.results});
    }catch(error){
        console.log("error while search by tv",error.message);
        return res.status(500).json({success:false,message:"Internal server error"});
    
    }
}

const getSearchHistory = async(req,res) =>{
    try{
        res.status(200).json({success:true,content:req.user.searchHistory});
    }catch(error){
        res.status(500).json({success:false,message:"Internal server error"});
    }
}

const removeHistoryById = async(req,res)=>{
    let {id} = req.params;
    id = parseInt(id);
    try{
        await User.findByIdAndUpdate(req.user._id,{
            $pull:{
                searchHistory:{
                    id:id
                },
            },
        });
        return res.status(200).json({success:true,message:"Deleted successfully"});
    }catch(error){
        console.log("Error while deleting history",error.message);
        return res.status(500).json({success:false,message:"Internal server error"});
    }
}

module.exports = {searchMovie,searchPerson,searchTv,getSearchHistory,removeHistoryById}