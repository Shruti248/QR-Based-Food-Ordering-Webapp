const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema({
    name: { type: String, required: true },
    // image: { type: String, required: true },
    image: { type: String },
    price: { type: Number, required: true },
    category: {
        type: String,
        enum: [
          "BestSellers",
          "Hot Drinks",
          "Beverages",
          "Break fast",
          "Ever Green Snacks",
          "Snacks",
          "Pasta",
          "Puff",
          "Fries",
          "Maggi",
          "Mexican",
          "Kathi Roll",
          "Pizza",
          "Sub",
          "Garlic Bread",
          "Sandwich",
          "Burger",
          "ComboOffers",
          "Cakes and Pastries"
        ],
        required: "This is required.",
      },
})




module.exports = mongoose.model('Menu', menuSchema)


