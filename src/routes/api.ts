import express from 'express';
import { watchtowerController } from '../controllers/watchtowerController';
import { authenticate } from '../middleware/auth';

const router = express.Router();

// Scam Reports
router.post('/reports', authenticate, watchtowerController.createReport);
router.get('/reports', authenticate, watchtowerController.getReports);
router.get('/reports/:id', authenticate, watchtowerController.getReportById);
router.put('/reports/:id/verify', authenticate, watchtowerController.verifyReport);
router.put('/reports/:id/dispute', authenticate, watchtowerController.disputeReport);

// Risk Indicators
router.get('/risks', authenticate, watchtowerController.getRiskIndicators);
router.post('/risks', authenticate, watchtowerController.createRiskIndicator);
router.put('/risks/:id/toggle', authenticate, watchtowerController.toggleRiskIndicator);

// Live Updates
router.get('/updates', authenticate, watchtowerController.getLiveUpdates);
router.post('/updates', authenticate, watchtowerController.createUpdate);

// Verified Scams
router.get('/verified-scams', authenticate, watchtowerController.getVerifiedScams);

export default router; 