import mongoose, { mongo } from "mongoose";

const subject = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    img:{
        type: String,
    },
    topics:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'topic'
    }]
})

const Subject = mongoose.models.subject || mongoose.model('subject', subject)

export default Subject