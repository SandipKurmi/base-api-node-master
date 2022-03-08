import Controller from '../controllers/ActorController';
import auth from '../middleware/auth.middleware';

export default (router) => {
    router.get(`/api/actor`, Controller.getAll);
    router.post(`/api/actor`, Controller.insert);
    router.get(`/api/actor/:id`, Controller.get);
    router.put(`/api/actor/:id`, Controller.update);
    router.delete(`/api/actor/:id`, Controller.delete);
};