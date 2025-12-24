import express from 'express'
import { valid } from '../middleware/middlewareUser.js'
import { getReports , getById ,createReport , updateReports , deleteReport } from '../ctrls/reportsC.js'

const router = express.Router();

router.get('/',  getReports)
router.get('/:id', getById)
router.post('/', valid , createReport)
router.put('/:id', valid ,updateReports)
router.delete('/:id', valid ,deleteReport)

export default router;
