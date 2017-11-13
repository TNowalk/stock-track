import { Router } from 'express'
import { middleware as query } from 'querymen'
import { index } from './controller'

const router = new Router()

/**
 * @api {get} /heartbeat Retrieve heartbeats
 * @apiName RetrieveHeartbeats
 * @apiGroup Heartbeat
 * @apiUse listParams
 * @apiSuccess {Object[]} heartbeats List of heartbeats.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', index)

export default router
