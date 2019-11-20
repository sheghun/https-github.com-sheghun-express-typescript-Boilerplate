/**
 * Handles all the user based requests
 */
import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.json({message: 'You requested a user resource'});
});

router.get('/name', (req, res) => {
  return res.json({message: 'You requested users name'});
});

export default router;
