import Subscriber from '../models/subscriberModel.js'

const getSubscriberMiddleware = async (req, res, next) => {
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
};


export default getSubscriberMiddleware;