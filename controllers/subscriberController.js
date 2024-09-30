import Subscriber from '../models/subscriberModel.js';

export const getAllSubscribers = async (req, res) => {
    try {
        const subscriber = await Subscriber.find();
        res.json(subscriber);
    } catch (error) {
        console.log(
            res.status(500).json({
                message: error.message,
            })
        );
    }
};

export const createNewSubscriber = async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel,
    });

    try {
        const newSubscriber = await subscriber.save();
        res.status(201).json(newSubscriber);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getOneSubscriber = (req, res) => {
    res.send(res.subscriber);
};

export const deleteSubscriber = async (req, res) => {
    try {
        await res.subscriber.deleteOne();
        res.json({ message: 'subscriber deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateSubscriber = async (req, res) => {
    if (req.body.name != null) {
        res.subscriber.name = req.body.name;
    }
    if (req.body.subscribedToChannel != null) {
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel;
    }

    try {
        const updatedSubscriber = await res.subscriber.save();
        res.json(updatedSubscriber);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// middleware
// export const getSubscriber = async (req, res, next) => {
//     let subscriber;

//     try {
//         subscriber = await Subscriber.findById(req.params.id);
//         if (subscriber == null) {
//             return res.status(404).json({ message: 'user not found' });
//         }
//     } catch (error) {
//         return res.status(500).json({ message: error.message });
//     }

//     res.subscriber = subscriber;
//     next();
// };
