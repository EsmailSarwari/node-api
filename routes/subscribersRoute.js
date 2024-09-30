import express from 'express';
import Subscriber from '../models/subscriberModel.js';

const router = express.Router();

// get all subscriber
router.get('/', async (req, res) => {
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
});

// create new subscirber
router.post('/', async (req, res) => {
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
});

// Get on subscriber
router.get('/:id', getSubscriber, (req, res) => {
    res.send(res.subscriber);
});

// Delete a subscriber
router.delete('/:id', getSubscriber, async (req, res) => {
    try {
        await res.subscriber.deleteOne();
        res.json({ message: 'subscriber deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// update a subscriber
router.patch('/:id', getSubscriber, async (req, res) => {
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
});

// middleware
async function getSubscriber(req, res, next) {
    let subscriber;

    try {
        subscriber = await Subscriber.findById(req.params.id);
        if (subscriber == null) {
            return res.status(404).json({ message: 'user not found' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    res.subscriber = subscriber;
    next();
}

export default router;
