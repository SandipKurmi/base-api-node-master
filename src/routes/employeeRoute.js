import Controller from '../controllers/EmployeeController';
import auth from '../middleware/auth.middleware';

export default (router) => {
    router.get(`/api/employee`, Controller.getAll);
    router.post(`/api/employee`, Controller.insert);
    router.get(`/api/employee/:id`, Controller.get);
    router.put(`/api/employee/:id`, Controller.update);
    router.delete(`/api/employee/:id`, Controller.delete);
};