'use strict';

import Router from "express-promise-router";
import {validate} from '../middlewares'; 
import {
	createUser,
	getUsers,
	editUser,
	deleteUser
} from '../controllers/CtrlUser';

const router = Router();

/* GET */

router.get('/user/get',getUsers);

/* POST */

router.post('/user/create',validate,createUser);

/* PUT */

router.put('/user/edit/:id',editUser);

/* DELETE */

router.delete('/user/delete',deleteUser);

export default router;
