import { Router } from 'express';
import { watchtowerController } from '../controllers/watchtowerController';
import { authenticate } from '../middleware/auth';

const router = Router();

router.post('/', authenticate, watchtowerController.create);
router.get('/', authenticate, watchtowerController.getAll);
router.get('/:id', authenticate, watchtowerController.getById);
router.put('/:id', authenticate, watchtowerController.update);
router.delete('/:id', authenticate, watchtowerController.delete);

export default router; 