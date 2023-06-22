import express from 'express';
import { requireSignin, isAdmin } from '../middlewares/authMiddleware.js';
import { ActivityController, CreateActivityController, deleteActivityController, updateActivityController} from '../controllers/activityController.js';

const router=express.Router();

router.get('/activity',ActivityController);
router.post('/create-activity',CreateActivityController);
router.put('/update-activity/:id',updateActivityController);
router.delete('/delete-activity',deleteActivityController);

export default router;