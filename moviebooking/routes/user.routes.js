const userController = require("../controllers/user.controller");
const userRouter = require("express").Router();


userRouter
    .route('/login')
    .post(userController.login)


userRouter
    .route('/logout')
    .post(userController.logout)


userRouter
    .route('/signup')
    .post(userController.signUp)
// userRouter.path().post()
// userRouter.path().post()
module.exports = userRouter;