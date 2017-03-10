'use strict';

var mongoose=  require('mongoose');
var Schema= mongoose.Schema;
var BookSchema= new Schema({
    title: {
        type:String,
        required: true,
        unique:true
    },
    published:{
        type: Date,
        default: Date.now
    },
    keywords:Array,
    published: Boolean,
    author:{
        type: Schema.ObjectId,
        ref:'User'
    },
    detail:{
        modelNumber: Number,
        hardCover: Boolean,
        reviews: Number,
        rank: Number
    }
})
module.exports=mongoose.model('Book',BookSchema);
