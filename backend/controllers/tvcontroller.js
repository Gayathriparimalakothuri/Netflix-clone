const fetchFromTMDB = require("../services/tmdbservice")

const getTrendingTv = async(req,res)=>{
    try {
		const data = await fetchFromTMDB("https://api.themoviedb.org/3/trending/tv/day?language=en-US");
		const randomMovie = data.results[Math.floor(Math.random() * data.results?.length)];

		res.json({ success: true, content: randomMovie });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}


const getTvTrailers = async(req,res) =>{
    const {id} =req.params;
    try{
        const  data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`);
        res.status(200).json({success:true,trailers:data.results})
    }catch(error){
        if(error.message.includes("404")){
            return res.status(404).send(null)
        }
       return  res.status(500).json({success:false,message:"Internal server error"});
    }
}

const getTvDetails = async(req,res) =>{
    try{
        const {id} = req.params;
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}?language=en-US`);
        res.status(200).json({success:true,details:data})
    }catch(error){
        if(error.message.includes("404")){
            return res.status(404).send(null);
        }
        return res.status(500).json({success:false,message:"Internal server error"});
    }
}

const getSimilarTv = async(req,res) =>{
    try{
        const {id} = req.params;
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`);
    return res.status(200).json({success:false,details:data.results})

    }catch(error){
        if(error.message.includes("404")){
            return res.status(404).send(null)
        }
        return res.status(500).json({success:false,message:"Internal server error"});
    }
   
}

const getTvByCategory = async(req,res)=>{
    const {category}=req.params;
    try{
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`);
        return res.status(200).json({success:true,category:data});
    }catch(error){
        if(error.message.includes("404")){
            return res.status(404).send(null);
        }
        return res.status(500).json({message:"Internal server error"});
    }
}

module.exports ={ getTrendingTv,getTvTrailers,getSimilarTv,getTvByCategory,getTvDetails}