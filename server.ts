import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { db } from './server/db.js';
import { authRouter } from './server/routes/authRoutes.js';
import { roomRouter } from './server/routes/roomRoutes.js';
import { bookingRouter } from './server/routes/bookingRoutes.js';
import { diningRouter } from './server/routes/diningRoutes.js';
import { reviewRouter } from './server/routes/reviewRoutes.js';
import { contactRouter } from './server/routes/contactRoutes.js';
import { adminRouter } from './server/routes/adminRoutes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Initialize persistent hotel database and sample records
  await db.init();

  // Basic middleware
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  // API Routes
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      hotel: 'The Grand Aurelia Hotel & Resort',
      version: '2.4.0',
      timestamp: new Date().toISOString(),
    });
  });

  // Mount API modules
  app.use('/api/auth', authRouter);
  app.use('/api/rooms', roomRouter);
  app.use('/api/bookings', bookingRouter);
  app.use('/api/dining', diningRouter);
  app.use('/api/reviews', reviewRouter);
  app.use('/api/contact', contactRouter);
  app.use('/api/admin', adminRouter);

  // Vite development middleware vs production static bundle
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // In Express v4, wildcard is app.get('*')
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[The Grand Aurelia] Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch(err => {
  console.error('Fatal server startup failure:', err);
});
