import express from "express"
import { userData } from "../data/userData.js"
import User from "../model/userModel.js"
import expressAsyncHandler from "express-async-handler"
import bcypt from "bcrypt"
import { generateToken } from "../utils.js"


const userRouter = express.Router()

userRouter.get("/seed", expressAsyncHandler(async (req, res) => {
    await User.remove({})
    const newUsers = await User.insertMany(userData.users)
    res.send({ newUsers })
}))

userRouter.post("/signin", expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (user) {
        if (bcypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user)
            })
            return
        }
     
    } else {
        res.status(401).send({ message: "Invalid email or password" })
    }
}))

export default userRouter