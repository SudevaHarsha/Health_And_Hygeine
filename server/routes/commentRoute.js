import express from 'express';
import { requireSignin, isAdmin } from '../middlewares/authMiddleware.js';
import formidable from 'express-formidable';
import { CommentController, CreateCommentController, GetAllCommentController, deleteCommentController } from '../controllers/commentController.js';

const router=express.Router();

router.get('/comment/:id',requireSignin,CommentController);
router.get('/all-comment',requireSignin,GetAllCommentController);
router.post('/create-comment',requireSignin,CreateCommentController);
router.delete('/delete-comment/:cid',requireSignin,deleteCommentController);

/* router.post('/activity-register',formidable(),activityRegisterController);
router.post('/activity-register/delete/:rid',deleteActivityRegisterUserController);
router.get('/activity-register/activity',GetActivityRegisterController); */

export default router;