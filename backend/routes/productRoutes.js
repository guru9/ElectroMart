import express from 'express'
import asyncHandler from 'express-async-handler'
import products from '../mockApi/products.js'
const router = express.Router()
import Product from '../models/productModel.js'

// @desc   Fetch all products
// @route  GET /api/products
// @access Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

// @desc   Fetch single product
// @route  GET /api/products/:id
// @access Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id).catch((e) => false)
    product
      ? res.json(product)
      : res.status(404).json({ error: true, message: 'Product no found.' })
  })
)

export default router
