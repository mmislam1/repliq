
import mongoose from 'mongoose';


const productsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    count: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const Products = mongoose.model('Products', productsSchema);

export default Products;
