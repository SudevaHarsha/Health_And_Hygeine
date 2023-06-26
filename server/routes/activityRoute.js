import express from 'express';
import { requireSignin, isAdmin } from '../middlewares/authMiddleware.js';
import { ActivityController, CreateActivityController, deleteActivityController, updateActivityController} from '../controllers/activityController.js';
import { GetActivityRegisterController, activityRegisterController, deleteActivityRegisterUserController, getAllRegisteredUsers } from '../controllers/activityRegistrationController.js';
import formidable from 'express-formidable';

const router=express.Router();

router.get('/activity',requireSignin,ActivityController);
router.get('/all-activity',requireSignin,isAdmin,getAllRegisteredUsers);
router.post('/create-activity',requireSignin,isAdmin,CreateActivityController);
router.put('/update-activity/:id',requireSignin,isAdmin,updateActivityController);
router.delete('/delete-activity',requireSignin,isAdmin,deleteActivityController);

router.post('/activity-register',formidable(),requireSignin,activityRegisterController);
router.delete('/activity-register/delete/:rid',requireSignin,isAdmin,deleteActivityRegisterUserController);
router.get('/activity-register/activity',requireSignin,GetActivityRegisterController);

export default router;