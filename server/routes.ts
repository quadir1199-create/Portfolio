import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Resume download endpoint
  app.get("/api/download-resume", (req, res) => {
    // In a real implementation, you would serve the actual PDF file
    // For now, we'll create a simple text response indicating the resume download
    const resumePath = path.join(process.cwd(), "attached_assets", "AbdulQuadirLeadMobile_1754662594737.pdf");
    
    try {
      res.download(resumePath, "Abdul_Quadir_Resume.pdf", (err) => {
        if (err) {
          console.error("Error downloading resume:", err);
          res.status(404).json({ error: "Resume not found" });
        }
      });
    } catch (error) {
      console.error("Error serving resume:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
