const { Router } = require('express')
const router = Router()
const { UserRoute, PostRoute } = require('../controllers')

const IndexRoute = (req, res) => res.status(200).json({})

router.get('/users', UserRoute.getUsers)
router.post('/users', UserRoute.register)

router.get('/posts', PostRoute.getPosts)
router.post('/posts', PostRoute.createPost)

router.use('/', IndexRoute)


module.exports = router