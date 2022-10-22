const order = require("../../../models/order")

const Order = require('../../../models/order')

const menu = require('../../../models/menu')

function orderController() {
    return {
        index(req, res) {
           order.find({ status: { $ne: 'completed' } }, null, { sort: { 'createdAt': -1 }}).populate('customerId', '-password').exec((err, orders) => {
               if(req.xhr) {
                   return res.json(orders)
               } else {
                return res.render('admin/orders')
               }
           })
        }
    }
}


// Inserting Dummy Data
async function insertDummyCategoryData(){
    try{
        await menu.insertMany([
            {
                
                "name":"Tea",
                "image":"tea.jpg",
                "price":15,
                "category":"Hot Drinks"
            },
          
            {
                
                "name":"Coffee",
                "image":"coffee1.jpg",
                "price":20,
                "category":"Hot Drinks"
            },
          
          
          
            {
                
                "name":"Green Tea",
                "image":"greentea.jpg",
                "price":20,
                "category":"Hot Drinks"
            },
          
          
          
            {
                
                "name":"Cold Bournvita",
                "image":"bournvita.jpg",
                "price":40,
                "category":"Beverages"
            },
          
          
            {
                
                "name":"Cold Coffee",
                "image":"coffee1.jpg",
                "price":50,
                "category":"Beverages"
            },
            {
                
                "name":"Cold Coffee with Choco Chips",
                "image":"coffee1.jpg",
                "price":60,
                "category":"Beverages"
            },
          
            {
                
                "name":"Oreo Shake",
                "image":"shake.jpg",
                "price":50,
                "category":"Beverages"
            },
          
            {
                
                "name":"Kitkat Shake",
                "image":"shake.jpg",
                "price":50,
                "category":"Beverages"
            },
          
            {
                
                "name":"Strawberry Shake",
                "image":"strawberryshake.jpg",
                "price":50,
                "category":"Beverages"
            },
          
            {
                
                "name":"Strawberry Shake with Ice-Cream",
                "image":"strawberryshake.jpg",
                "price":70,
                "category":"Beverages"
            },
            
            {
                
                "name":"Oreo Shake with Ice-Cream",
                "image":"shake.jpg",
                "price":70,
                "category":"Beverages"
            },
          
          
            
            {
                
                "name":"Oreo Shake with Choco-Chips" ,
                "image":"shake.jpg",
                "price":80,
                "category":"Beverages"
            },
          
          
            
            {
                
                "name":"Bread Butter",
                "image":"breadbutter.png",
                "price":40,
                "category":"Break fast"
            },
          
          
            
            {
                
                "name":"Bread Butter Jam",
                "image":"breadjam.jpg",
                "price":40,
                "category":"Break fast"
            },
          
          
            
            {
                
                "name":"Chocolate Slice",
                "image":"chocolatebread.jpg",
                "price":40,
                "category":"Break fast"
            },
          
            {
                
                "name":"Cheese Butter Slice",
                "image":"breadbutter.png",
                "price":50,
                "category":"Break fast"
            },
          
            {
                
                "name":"Thepla",
                "image":"thepla.jpg",
                "price":25,
                "category":"Ever Green Snacks"
            },
          
          
            {
                
                "name":"Sev Thepla",
                "image":"thepla.jpg",
                "price":30,
                "category":"Ever Green Snacks"
            },
          
          
            {
                
                "name":"Masala Thepla",
                "image":"thepla.jpg",
                "price":30,
                "category":"Ever Green Snacks"
            },
          
          
            {
                
                "name":"Cheese Thepla",
                "image":"thepla.jpg",
                "price":40,
                "category":"Ever Green Snacks"
            },
          
            {
                
                "name":"Aloo Paratha",
                "image":"alooparatha.jpg",
                "price":30,
                "category":"Ever Green Snacks"
            },
          
          
            {
                
                "name":"Sev Samosa ",
                "image":"samosa.jpg",
                "price":40,
                "category":"Snacks"
            },
          
          
            {
                
                "name":"Bombay Bhel",
                "image":"bhel2.jpg",
                "price":40,
                "category":"Snacks"
            },
          
          
            {
                
                "name":"Cheese Bhel",
                "image":"bhel2.jpg",
                "price":50,
                "category":"Snacks"
            },
          
          
            {
                
                "name":"Cheese Pasta",
                "image":"pasta4.jpg",
                "price":80,
                "category":"Pasta"
            },
          
          
            {
                
                "name":"Red Sause Pasta ",
                "image":"redsaucepasta.jpg",
                "price":80,
                "category":"Pasta"
            },
          
          
            {
                
                "name":"Cheese Corn Pasta ",
                "image":"pasta5.png",
                "price":90,
                "category":"Pasta"
            },
          
            {
                
                "name":"Mix Sauce Pasta ",
                "image":"pasta3.png",
                "price":90,
                "category":"Pasta"
            },
          
          
            {
                
                "name":"Chesse corn Pasta ",
                "image":"pasta4.jpg",
                "price":90,
                "category":"Pasta"
            },
          
          
            {
                
                "name":"Potato Puff",
                "image":"puff.jpg",
                "price":20,
                "category":"Puff"
            },
          
          
            {
                
                "name":"Sev Puff",
                "image":"puff.jpg",
                "price":30,
                "category":"Puff"
            },
          
            {
                
                "name":"Veg Masala Puff",
                "image":"puff.jpg",
                "price":30,
                "category":"Puff"
            },
          
          
            {
                
                "name":"Cheese Puff",
                "image":"puff.jpg",
                "price":40,
                "category":"Puff"
            },
          
            {
                
                "name":"Butter Puff",
                "image":"puff.jpg",
                "price":40,
                "category":"Puff"
            },
          
            {
                
                "name":"Sev Schezwan Puff",
                "image":"puff.jpg",
                "price":40,
                "category":"Puff"
            },
          
          
            {
                
                "name":"Veg Mayo Puff",
                "image":"puff.jpg",
                "price":40,
                "category":"Puff"
            },
          
          
            {
                
                "name":"Butter Cheese Puff",
                "image":"puff.jpg",
                "price":50,
                "category":"Puff"
            },
          
          
            {
                
                "name":"Cheesy Panner Puff",
                "image":"puff.jpg",
                "price":50,
                "category":"Puff"
            },
          
          
            {
                
                "name":"Veg Cheese Blast Puff",
                "image":"puff.jpg",
                "price":60,
                "category":"Puff"
            },
          
          
            {
                
                "name":"Pizza Puff ",
                "image":"puff.jpg",
                "price":60,
                "category":"Puff"
            },
          
          
            {
                
                "name":"Cheese Chilli Puff",
                "image":"puff.jpg",
                "price":60,
                "category":"Puff"
            },
          
          
            {
                
                "name":"Fries Masala",
                "image":"fries.jpg",
                "price":50,
                "category":"Fries"
            },
          
            {
                
                "name":"Cheese Masala Fries",
                "image":"fries.jpg",
                "price":70,
                "category":"Fries"
            },
          
            {
                
                "name":"Maggi",
                "image":"maggi.jpg",
                "price":40,
                "category":"Maggi"
            },
          
          
            {
                
                "name":"Veg Maggi",
                "image":"vegmaggi.jpg",
                "price":50,
                "category":"Maggi"
            },
          
          
            {
                
                "name":"Schezwan Maggi(Spicy)",
                "image":"maggi.jpg",
                "price":50,
                "category":"Maggi"
            },
          
          
            {
                
                "name":"Cheese Maggi",
                "image":"vegmaggi.jpg",
                "price":60,
                "category":"Maggi"
            },
          
          
            {
                
                "name":" Butter Maggi",
                "image":"maggi.jpg",
                "price":50,
                "category":"Maggi"
            },
          
          
            {
                
                "name":"Cheese Corn Maggi",
                "image":"vegmaggi.jpg",
                "price":60,
                "category":"Maggi"
            },
          
          
            {
                
                "name":" Cheese Mayo Maggi",
                "image":"maggi.jpg",
                "price":70,
                "category":"Maggi"
            },
          
          
            {
                
                "name":"Butter Tadka Maggi",
                "image":"vegmaggi.jpg",
                "price":70,
                "category":"Maggi"
            },
          
          
            {
                
                "name":"Nachos Salsa",
                "image":"nachos.jpg",
                "price":60,
                "category":"Mexican"
            },
          
          
            {
                
                "name":"Nachos Cheese",
                "image":"nachos2.png",
                "price":80,
                "category":"Mexican"
            },
          
          
            {
                
                "name":"Fusion Fire",
                "image":"",
                "price":80,
                "category":"Kathi Roll"
            },
          
          
            {
                
                "name":"Hariyali Veg Cheese ",
                "image":"",
                "price":80,
                "category":"Kathi Roll"
            },
          
            {
                
                "name":"Veggi D'lite",
                "image":"",
                "price":90,
                "category":"Kathi Roll"
            },
          
            {
                
                "name":"Schezwan Panner",
                "image":"paneer.jpg",
                "price":90,
                "category":"Kathi Roll"
            },
          
            
            {
                
                "name":"Ultimate Paneer",
                "image":"paneer.jpg",
                "price":90,
                "category":"Kathi Roll"
            },
          
            
            {
                
                "name":" Margarita Pizza",
                "image":"pizza2.jpg",
                "price":80,
                "category":"Pizza"
            },
          
            
            {
                
                "name":" Italiano Pizza",
                "image":"pizza4.jpg",
                "price":80,
                "category":"Pizza"
            },
          
            
            {
                
                "name":"Tandoori Pizza",
                "image":"pizza2.jpg",
                "price":90,
                "category":"Pizza"
            },
          
            
            {
                
                "name":"Corn Continental Pizza",
                "image":"pizza4.jpg",
                "price":80,
                "category":"Pizza"
            },
          
            
            {
                
                "name":"Mexican Pizza",
                "image":"pizza2.jpg",
                "price":90,
                "category":"Pizza"
            },
          
            
            {
                
                "name":"Paneer Paprika Pizza",
                "image":"pizza2.jpg",
                "price":90,
                "category":"Pizza"
            },
          
            
            {
                
                "name":"Double Cheese Margarita Pizza",
                "image":"pizza4.jpg",
                "price":100,
                "category":"Pizza"
            },
          
            
            {
                
                "name":"Veg extra Vegan Pizza",
                "image":"pizza2.jpg",
                "price":100,
                "category":"Pizza"
            },
          
            
            {
                
                "name":"Chef Special Cheese Blast Pizza",
                "image":"pizza2.jpg",
                "price":120,
                "category":"Pizza"
            },
          
            
            {
                
                "name":"Veggie Sub",
                "image":"sub1.jpg",
                "price":70,
                "category":"Sub"
            },
          
            
            {
                
                "name":"Cheesy Sub",
                "image":"sub1.jpg",
                "price":80,
                "category":"Sub"
            },
          
            
            {
                
                "name":"Aloo Patty Sub",
                "image":"sub2.jpg",
                "price":80,
                "category":"Sub"
            },
          
            
            {
                
                "name":"Veg Exotica Sub",
                "image":"sub1.jpg",
                "price":80,
                "category":"Sub"
            },
          
            
            {
                
                "name":"BBQ pannerSub",
                "image":"sub2.jpg",
                "price":90,
                "category":"Sub"
            },
          
            
            {
                
                "name":"Regular Garlic Bread",
                "image":"gb.jpg",
                "price":90,
                "category":"Garlic Bread"
            },
          
            
            {
                
                "name":"American Corn Pepper",
                "image":"gb.jpg",
                "price":90,
                "category":"Garlic Bread"
            },
          
            
            {
                
                "name":"Cheesy Jalapeno",
                "image":"gb.jpg",
                "price":100,
                "category":"Garlic Bread"
            },
          
            
            {
                
                "name":"Veg Cheese Coleslaw",
                "image":"sandwich7.jpg",
                "price":80,
                "category":"Sandwich"
            },
          
            
            {
                
                "name":"Red Club",
                "image":"sandwich8.jpg",
                "price":70,
                "category":"Sandwich"
            },
          
            
            {
                
                "name":"Veg Cheese Roasty Grill",
                "image":"sandwich6.png",
                "price":80,
                "category":"Sandwich"
            },
          
            
            {
                
                "name":"Paneer Masala Grill",
                "image":"sandwich5.png",
                "price":80,
                "category":"Sandwich"
            },
          
            
            {
                
                "name":"Veg. Creamy",
                "image":"sandwich8.jpg",
                "price":80,
                "category":"Sandwich"
            },
          
            
            {
                
                "name":"Chilly Cheese",
                "image":"sandwich7.jpg",
                "price":70,
                "category":"Sandwich"
            },
          
            
            {
                
                "name":"Chilly Garlic Cheese",
                "image":"sandwich5.png",
                "price":90,
                "category":"Sandwich"
            },
          
            
            {
                
                "name":"Spanish Corn",
                "image":"sandwich6.png",
                "price":70,
                "category":"Sandwich"
            },
          
            
            {
                
                "name":"Club grill 3 LAyer",
                "image":"sandwich7.jpg",
                "price":95,
                "category":"Sandwich"
            },
          
            
            {
                
                "name":"Tandoori Paneer Chilla",
                "image":"sandwich8.jpg",
                "price":90,
                "category":"Sandwich"
            },
          
            
            {
                
                "name":"Green Creamy Grill",
                "image":"sandwich6.png",
                "price":85,
                "category":"Sandwich"
            },
          
            
            {
                
                "name":"Tandoori Cheese paneer Chilla",
                "image":"sandwich5.png",
                "price":100,
                "category":"Sandwich"
            },
          
            
            {
                
                "name":"Aloo Tikki Burger",
                "image":"burger2.jpg",
                "price":40,
                "category":"Burger"
            },
          
            
            {
                
                "name":"Schezwan Burger",
                "image":"burger1.jpg",
                "price":50,
                "category":"Burger"
            },
          
            
            {
                
                "name":"Veg Cheese Burger",
                "image":"burger3.jpg",
                "price":50,
                "category":"Burger"
            },
          
            
            {
                
                "name":"Masala Cheese Grill Burger",
                "image":"burger4.jpg",
                "price":60,
                "category":"Burger"
            },
          
            
            {
                
                "name":"BBQ Burger",
                "image":"burger5.png",
                "price":60,
                "category":"Burger"
            },
            {
                
                "name":"Green Chilly Cheese Burger",
                "image":"burger6.png",
                "price":60,
                "category":"Burger"
            },
          
          
            {
                
                "name":"Paneer Chilly Cheese Burger",
                "image":"burger1.jpg",
                "price":70,
                "category":"Burger"
            },
          
          
            {
                
                "name":"Paneer BBQ Cheese Burger",
                "image":"burger2.jpg",
                "price":70,
                "category":"Burger"
            },
          
          
            {
                
                "name":"Maharaja Loaded Cheese Burger",
                "image":"burger3.jpg",
                "price":90,
                "category":"Burger"
            },
          
          
            {
                
                "name":"Black  Forest Cake ",
                "image":"cake2.jpg",
                "price":400,
                "category":"Cakes and Pastries"
            },
          
          
            {
                
                "name":"Chocolate Cake",
                "image":"cake3.jpg",
                "price":400,
                "category":"Cakes and Pastries"
            },
          
          
            {
                
                "name":"Chocolate Chips Cake",
                "image":"cake4.jpg",
                "price":400,
                "category":"Cakes and Pastries"
            },
          
          
            {
                
                "name":"Chocolate Truffle Cake ",
                "image":"cake1.jpg",
                "price":500,
                "category":"Cakes and Pastries"
            },
          
          
            {
                
                "name":"Red velvet Cake",
                "image":"redcake.jpg",
                "price":500,
                "category":"Cakes and Pastries"
            },
          
          
            {
                
                "name":"Black Forest Pastry",
                "image":"pastry1.jpg",
                "price":50,
                "category":"Cakes and Pastries"
            },
          
            
            {
                
                "name":"Chocolate Pastry",
                "image":"pastry6.jpg",
                "price":50,
                "category":"Cakes and Pastries"
            }
          
          
          ]
        )}catch(error){
        console.log(error);
    }
}

// insertDummyCategoryData();


module.exports = orderController