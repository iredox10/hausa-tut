import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    markdown:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    img: String,
    subject:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subjects'
    }
})

const Topic = mongoose.models.topic || mongoose.model('topic', topicSchema)

export default Topic