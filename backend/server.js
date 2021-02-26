import express from "express"
import mongoose from "mongoose"
import { productData } from "./data/ProductData.js"
import productRoute from "./routes/productRoutes.js"
import userRouter from "./routes/userRoutes.js"
import dotenv from "dotenv"

dotenv.config()
const app = express()


// app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/shopify",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})

app.use("/api/users", userRouter)
app.use("/api/products", productRoute)
app.use("/api/product", productRoute)

app.get("/", (req, res)=>{
    res.send("hello developer")
})

app.use((err, req, res, next)=>{
    res.status(500).send({message:err.message})
})
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log("server started at " + port);
})