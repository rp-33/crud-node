'use strict';

import UserRouter from './userRouter';

const router  =  (app)=> {
	app.use('/api/v1',UserRouter);
}

export default router;