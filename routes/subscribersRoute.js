import express from 'express';
import * as subscriberController from '../controllers/subscriberController.js'
import getSubscriberMiddleware  from '../middlewares/getSubscriberMiddleware.js';

const router = express.Router();

router.get('/', subscriberController.getAllSubscribers);
router.post('/', subscriberController.createNewSubscriber);
router.get('/:id', getSubscriberMiddleware, subscriberController.getOneSubscriber );
router.delete('/:id', getSubscriberMiddleware, subscriberController.deleteSubscriber);
router.patch('/:id', getSubscriberMiddleware, subscriberController.updateSubscriber);

export default router;
