import { Router, Request, Response } from 'express';
import serviceController from '../controllers/serviceController';

const router: Router= Router();

router
    .route("/services")
    .post((req: Request ,res: Response)=> serviceController.create(req, res))

module.exports = router;

