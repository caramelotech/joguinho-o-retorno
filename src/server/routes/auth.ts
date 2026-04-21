/**
 * Placeholder para rotas de autenticação
 * Será implementado na Fase 6
 */

import { Router } from 'express';

const router = Router();

// Placeholder routes
router.post('/login', (req, res) => {
  res.json({ message: 'Login route placeholder' });
});

router.post('/register', (req, res) => {
  res.json({ message: 'Register route placeholder' });
});

router.get('/profile', (req, res) => {
  res.json({ message: 'Profile route placeholder' });
});

export default router;
