import bcrypt from 'bcrypt';
// eslint-disable-next-line import/no-extraneous-dependencies
import jwt from 'jsonwebtoken';
import Controller from './Controller';
import Actor from '../models/ActorModel';
import ActorService from '../services/ActorService';
//import Stripe from '../helpers/Stripe';

const actorService = new ActorService(new Actor().getInstance());

class ActorController extends Controller {
    constructor(service) {
        super(service);
    }

}

export default new ActorController(actorService);