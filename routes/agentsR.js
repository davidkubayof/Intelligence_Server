import express from 'express'
import { valid } from '../middleware/middlewareUser.js'
import { getAgents , getById ,createAgent , updateAgent , deleteAgent } from '../ctrls/agentsC.js'

const router = express.Router();

router.get('/', valid , getAgents)
router.get('/:id', valid, getById)
router.post('/', valid , createAgent)
router.put('/:id', valid ,updateAgent)
router.delete('/:id', valid ,deleteAgent)

export default router;
