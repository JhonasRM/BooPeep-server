import { Router, Request, Response } from 'express';
import UserController from '../controllers/UserController';

const router: Router= Router();

router
    .route("/user")
    .post((req: Request ,res: Response) => UserController.create(req, res))

router
    .route("/user")
    .get((req: Request ,res: Response) => UserController.getAll(req, res))
    
router
    .route("/user:id")
    .get((req: Request ,res: Response) => UserController.get(req, res))

 router
    .route("/user:id")
    .delete((req: Request ,res: Response) => UserController.delete(req, res))

router
    .route("/user:id")
    .put((req: Request ,res: Response) => UserController.update(req, res))
module.exports = router;

