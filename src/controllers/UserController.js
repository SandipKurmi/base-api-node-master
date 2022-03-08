import bcrypt from 'bcrypt';
// eslint-disable-next-line import/no-extraneous-dependencies
import jwt from 'jsonwebtoken';
import Controller from './Controller';
import User from '../models/UserModel';
import UserService from '../services/UserService';
//import Stripe from '../helpers/Stripe';

const userService = new UserService(new User().getInstance());

class UserController extends Controller {
  constructor(service) {
    super(service);
  }

}

export default new UserController(userService);
