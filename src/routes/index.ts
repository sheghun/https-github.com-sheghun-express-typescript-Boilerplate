/**
 * Base routes file contains all the sub routes
 */
import {Router} from 'express';
import userRoutes from './user';

// Init router and path
const router = Router();

router.use('/name', (req, res) => {
  return res.send('Working');
});

// Add sub-routes
router.use('/user', userRoutes);

export default router;
