import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

class ActorModel {
    // eslint-disable-next-line class-methods-use-this
    initSchema() {
        const schema = new Schema({
            name: {
                type: String,
                default: null,
            },
            movies: {
                type: String,
                required: true,
                unique: false,
            },
            award: {
                type: String,
                required: true,
                unique: true,
            }
        }, {
            timestamps: true,
        }, );
        schema.plugin(uniqueValidator);
        mongoose.model('actor', schema);
    }

    getInstance() {
        this.initSchema();
        return mongoose.model('actor');
    }

    // eslint-disable-next-line class-methods-use-this
    getModel() {
        return mongoose.model('actor');
    }
}

export default ActorModel;