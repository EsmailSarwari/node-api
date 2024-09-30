import mongoose from 'mongoose';

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subscribedToChannel: {
        type: String,
        required: true,
    },
    subscriberDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

const Subscriber =  mongoose.model('subscriber', subscriberSchema);

export default Subscriber;
