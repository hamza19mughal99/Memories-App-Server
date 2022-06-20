import PostMessage from "../models/postMsg.js"

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).send(postMessages)
    }
    catch (err) {
        res.status(404).send({
            message: err.message
        })
    }
}

export const createPosts = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post)

    try {

        await newPost.save();
        res.status(201).send(newPost)
    }
    catch (err) {
        res.status(409).send({
            message: err.message
        })
    }
}