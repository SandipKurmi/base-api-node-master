import bcrypt from 'bcrypt';
// eslint-disable-next-line import/no-extraneous-dependencies
import jwt from 'jsonwebtoken';
import Controller from './Controller';
import Employee from '../models/EmployeeModel';
import EmployeeService from '../services/EmployeeService';
//import Stripe from '../helpers/Stripe';

const employeeService = new EmployeeService(new Employee().getInstance());

class EmployeeController extends Controller {
    constructor(service) {
        super(service);
    }

}

export default new EmployeeController(employeeService);