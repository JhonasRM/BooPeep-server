import { Router, Request, Response } from 'express';
import PostController from '../controllers/PostController';

const router: Router= Router();

router
    .route("/post")
    .post((req: Request ,res: Response) => PostController.create(req, res))

router
    .route("/posts")
    .get((req: Request ,res: Response) => PostController.getAll(req, res))
    
router
    .route("/post")
    .get((req: Request ,res: Response) => PostController.get(req, res))

 router
    .route("/post")
    .delete((req: Request ,res: Response) => PostController.delete(req, res))
router
    .route("/post")
    .put((req: Request ,res: Response) => PostController.update(req, res))
module.exports = router;

