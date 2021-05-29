const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    title: { type: String, required: true },
    body: {type: String},
    meta: {
        favs: Number,
        default: 0
    },
    location: {
        type: {
            type: String
            
        } 
    }        
});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;