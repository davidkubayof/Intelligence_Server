import express from 'express'
import { valid } from '../middleware/middlewareUser.js'
import { getOk , getUsers , createUser , updateUser , deleteUser } from '../ctrls/userC.js';

const router = express.Router();

router.get('/health', getOk)
router.get('/', valid , getUsers )
router.post('/', valid, createUser)
router.put('/:username', valid , updateUser)
router.delete('/:username', valid , deleteUser)

export default router;