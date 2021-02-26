import express from "express"
import { productData } from "../data/ProductData.js"
import Product from "../model/productModel.js"
import expressAsyncHandler from "express-async-handler"

const productRoute = express.Router()

productRoute.get("/seed", expressAsyncHandler(async (req, res) => {
    await Product.remove({})
    const newProducts = await Product.insertMany(productData.products)
    res.send(newProducts)
}))

productRoute.get("/", expressAsyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.send(products)
}))

productRoute.get("/:id", expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.send(product)
    } else {
        res.status(404).send({ message: "Product Not Found" })
    }

}))
export default productRoute