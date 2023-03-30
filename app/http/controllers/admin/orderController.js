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
        await menu.insertMany(       [{    "name":"Aloo Tikki Burger",
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
        "image":"burger2.png",
        "price":60,
        "category":"Burger"
    },
    {

        "name":"Green Chilly Cheese Burger",
        "image":"burger1.jpg.png",
        "price":60,
        "category":"Burger"
    },



    {

            "name":"Veg Cheese Coleslaw",
            "image":"sandwich1.jpg",
            "price":80,
            "category":"Sandwich"
        },


        {

            "name":"Red Club",
            "image":"sandwich2.jpg",
            "price":70,
            "category":"Sandwich"
        },


        {

            "name":"Veg Cheese Roasty Grill",
            "image":"sandwich3.jpeg",
            "price":80,
            "category":"Sandwich"
        },


        {

            "name":"Paneer Masala Grill",
            "image":"sandwich4.jpg",
            "price":80,
            "category":"Sandwich"
        },
        {

                "name":"Veg. Creamy",
                "image":"sandwich5.jpg",
                "price":80,
                "category":"Sandwich"
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
        "image":"cake5.jpg",
        "price":500,
        "category":"Cakes and Pastries"
    }



  ]
        )}catch(error){
        console.log(error);
    }
}

// insertDummyCategoryData();


module.exports = orderController
