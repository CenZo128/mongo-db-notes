const { Post, User } = require('../schemas')


class UserController {
    static async getUsers(req, res) {
        console.log("getUsers")
        try {
            const users = await User.find({});
            res.status(200).json(users)

        } catch (err) {
            res.status(500).json({
                message: err
            })

        }
    }
    static async login(req, res) {

    }
    static async register(req, res) {
        const { username,password } = req.body
        try {
            const user = await User.create({
                username, password
            });
            res.status(201).json(user)

        } catch (err) {
            res.status(500).json({
                message: err
            })
        }
    }
}

class PostController {
    static async getPosts(req, res) {
        try {
            const posts = await Post.find();
            res.status(200).json(posts)

        } catch (err) {
            res.status(500).json({
                message: err
            })

        }
    }
    static async createPost(req,res) {
        const { title, description } = req.body
        try {
            const post = await Post.create({
                title,description
            })
            res.status(201).json(post)
        }catch(err) {
            res.status(500).json(err)
        }
    }
}

module.exports = {
    UserRoute: UserController,
    PostRoute: PostController
}
