/**
 * Placeholder para rotas de games
 * Será implementado na Fase 1+
 */

import { Router } from 'express';

const router = Router();

// Placeholder routes
router.get('/active', (req, res) => {
  res.json({ games: [] });
});

router.post('/create', (req, res) => {
  res.json({ message: 'Game creation placeholder' });
});

router.get('/:gameId', (req, res) => {
  res.json({ message: 'Game details placeholder' });
});

export default router;
