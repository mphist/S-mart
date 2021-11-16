import { Router } from 'express'
import { loadDb } from '../../../utils/loadDb'

export default function loadDbRoute(router: Router) {
  router.get('/', (req, res) => {
    loadDb()
    res.send('all good')
  })

  return router
}
