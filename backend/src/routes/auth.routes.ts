import { Router } from 'express';
import type { Response,Request } from 'express';

const router=Router();

router.get('/',(req:Request,res:Response) =>{
    res.send("hello from auth");
});

export default router;