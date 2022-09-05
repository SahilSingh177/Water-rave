const Post = require('../models/Post');

exports.createPost = (req,res,next) => {
    let { author, description, place, rating } = req.body;
    console.log(req);
    const post = new Post({
        author: author,
        description: description,
        place: place,
        rating: rating
    })
    post.save()
       .then(response => {
           res.status(200).json({
            success: true,
            result: response
           })
       })
       .catch(err => {
        res.status(500).json({
            success: false,
            result: err
        })
       })
}

exports.getPosts = (req,res,next) => {
    let { place } = req.query;
    Post.find({place: place})
      .then(response => {
        res.status(200).json({
            success:true,
            result: response
        })
      })
      .catch(err => {
        res.status(500).json({
            success: false,
            result: err
        })
      })

}