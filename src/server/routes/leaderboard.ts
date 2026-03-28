/**
 * Placeholder para rotas de leaderboard
 * Será implementado na Fase 6
 */

import { Router } from 'express';

const router = Router();

// Placeholder routes
router.get('/global', (req, res) => {
  res.json({ leaderboard: [] });
});

router.get('/local', (req, res) => {
  res.json({ leaderboard: [] });
});

router.get('/player/:playerId', (req, res) => {
  res.json({ message: 'Player stats placeholder' });
});

export default router;
