import express from 'express';
import {
  getEntries,
  addEntry,
  updateEntry,
  deleteEntry,
} from '../controllers/entryController.js';

import { protect } from '../middleware/authMiddleware.js';
import { checkUUID } from '../middleware/uuidMiddleware.js';

const router = express.Router();

router.get('/', protect, checkUUID, getEntries);
router.post('/', protect, checkUUID, addEntry);
router.patch('/:id', protect, checkUUID, updateEntry);
router.delete('/:id', protect, checkUUID, deleteEntry);

export default router;
