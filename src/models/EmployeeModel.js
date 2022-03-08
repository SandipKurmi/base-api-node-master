import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

class EmployeeModel {
    // eslint-disable-next-line class-methods-use-this
    initSchema() {
        const schema = new Schema({
            name: {
                type: String,
                default: null,
            },
            address: {
                type: String,
                required: true,
                unique: false,
            },
            number: {
                type: String,
                required: true,
                unique: true,
            }
        }, {
            timestamps: true,
        }, );
        schema.plugin(uniqueValidator);
        mongoose.model('employee', schema);
    }

    getInstance() {
        this.initSchema();
        return mongoose.model('employee');
    }

    // eslint-disable-next-line class-methods-use-this
    getModel() {
        return mongoose.model('employee');
    }
}

export default EmployeeModel;