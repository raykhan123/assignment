const blogModel = require("../model/blogModel.js")




const createBlog = async (req,res)=>{
    try {
        let blog = req.body
        if(!blog){
            return res.status(400).send({ status: false, msg: "Please fill the Mandatory Fields." });
        }
    let blogCreated = await blogModel.create(blog);
    return res.status(201).send({ status : true, data: blogCreated });
    } catch (error) {
        { res.status(500).send({message: err.message})}
    }
}

const getBlog = async (req, res) =>{
    try{
        let page = req.query.page;
        let limit = req.query.limit;
        if(page == 0)page =1;

        let blogs = await blogModel.find().limit(limit).skip(limit * (page-1));
        const len = blogs.length;
    
        return res.status(200).send({total : len, blogs})
    }
    catch(err) { res.status(500).send({message: err.message})}
   
}

const getBlogWithId = async(req, res) => {

    try{
        let id = req.params.POSTID;
    let posts = await blogModel.findOne({_id : id})

    let ans = posts.body.split(' ');
    let result = []
    for(let char of ans){
        if(char[0] == 'a' || char[0] == "A") result.push(char)
    }

    return result.length > 0 ? res.status(200).send({words : result}) : res.status(404).send({message : "No Data found "})
    
        
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
}


const updateBlog = async(req,res) =>{
    try{
        let id = req.params.POSTID
        let post = await blogModel.findById(id)
        let words = post.body.split(' ')
        let result = []

        for(let word of words){
            if(word[0] == 'a' || word[0] == 'A'){
                let len = word.length
                let ans =  word.replace( word.slice(len-3), '***' ) 
                result.push(ans)
            }else result.push(word)
        }  
      
         result = result.join(' ')
         post = await blogModel.findOneAndUpdate(
            {_id : id},            
            {body : result},
          {new : true}
          )
     
        return res.status(200).send({words : post.body})
    }catch(err){
        return res.status(500).send({message :err.msg})
    }
}

module.exports = {createBlog , getBlog, getBlogWithId, updateBlog}