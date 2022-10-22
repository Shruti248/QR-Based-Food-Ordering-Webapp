const mongoose = require('mongoose');

// Schema
const categorySchema = new mongoose.Schema({

    // Only 1 fied required for category : name
    name : {
        type : String,
        required:"This is required."
    }

});

// Exporting
// Category : Collection name (Model/Schema is named as Category )
module.exports = mongoose.model('Category' , categorySchema);