import { Request, Response } from 'express';
import { ScamReport, RiskIndicator, LiveUpdate, VerifiedScam } from '../models/Watchtower';

export const watchtowerController = {
  // Scam Reports
  async createReport(req: Request, res: Response) {
    try {
      const report = await ScamReport.create({
        ...req.body,
        status: 'pending',
        created_at: new Date(),
        updated_at: new Date()
      });
      res.status(201).json(report);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async getReports(req: Request, res: Response) {
    try {
      const reports = await ScamReport.find().sort({ created_at: -1 });
      res.json(reports);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async getReportById(req: Request, res: Response) {
    try {
      const report = await ScamReport.findById(req.params.id);
      if (!report) return res.status(404).json({ error: 'Report not found' });
      res.json(report);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async verifyReport(req: Request, res: Response) {
    try {
      const report = await ScamReport.findByIdAndUpdate(
        req.params.id,
        { 
          status: 'verified',
          updated_at: new Date()
        },
        { new: true }
      );
      if (!report) return res.status(404).json({ error: 'Report not found' });
      res.json(report);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  // Risk Indicators
  async getRiskIndicators(req: Request, res: Response) {
    try {
      const indicators = await RiskIndicator.find().sort({ created_at: -1 });
      res.json(indicators);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async createRiskIndicator(req: Request, res: Response) {
    try {
      const indicator = await RiskIndicator.create({
        ...req.body,
        is_active: true,
        created_at: new Date()
      });
      res.status(201).json(indicator);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  // Live Updates
  async getLiveUpdates(req: Request, res: Response) {
    try {
      const updates = await LiveUpdate.find().sort({ created_at: -1 });
      res.json(updates);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  // Verified Scams
  async getVerifiedScams(req: Request, res: Response) {
    try {
      const scams = await VerifiedScam.find().sort({ verified_at: -1 });
      res.json(scams);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}; 