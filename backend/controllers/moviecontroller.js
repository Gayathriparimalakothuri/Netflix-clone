const fetchFromTMDB = require("../services/tmdbservice")

const getTrendingMovie = async(req,res)=>{
    try {
		const data = await fetchFromTMDB("https://api.themoviedb.org/3/trending/movie/day?language=en-US");
		const randomMovie = data.results[Math.floor(Math.random() * data.results?.length)];

		res.json({ success: true, content: randomMovie });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}


const getMovieTrailers = async(req,res) =>{
    const {id} =req.params;
    try{
        const  data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`);
        res.status(200).json({success:true,trailers:data.results})
    }catch(error){
        if(error.message.includes("404")){
            return res.status(404).send(null)
        }
       return  res.status(500).json({success:false,message:"Internal server error"});
    }
}

const getMovieDetails = async(req,res) =>{
    try{
        const {id} = req.params;
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}?language=en-US`);
        res.status(200).json({success:true,details:data})
    }catch(error){
        if(error.message.includes("404")){
            return res.status(404).send(null);
        }
        return res.status(500).json({success:false,message:"Internal server error"});
    }
}

const getSimilarMovies = async(req,res) =>{
    try{
        const {id} = req.params;
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`);
    return res.status(200).json({success:false,details:data.results})

    }catch(error){
        if(error.message.includes("404")){
            return res.status(404).send(null)
        }
        return res.status(500).json({success:false,message:"Internal server error"});
    }
   
}

const getMoviesByCategory = async(req,res)=>{
    const {category}=req.params;
    try{
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`);
        return res.status(200).json({success:true,category:data});
    }catch(error){
        if(error.message.includes("404")){
            return res.status(404).send(null);
        }
        return res.status(500).json({message:"Internal server error"});
    }
}

module.exports = {getTrendingMovie, getMovieTrailers,getMovieDetails,getSimilarMovies,getMoviesByCategory};