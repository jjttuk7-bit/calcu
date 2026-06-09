/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import { HomePage } from './routes/HomePage';
import { ToolPage } from './routes/ToolPage';
import { PrivacyPage } from './routes/PrivacyPage';
import { GuidePage } from './routes/GuidePage';

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          {/* Main home dashboard */}
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />

          {/* Individual business calculator pages routed to ToolPage unified wrapper */}
          <Route path="/vat-calculator" element={<ToolPage />} />
          <Route path="/supply-price" element={<ToolPage />} />
          <Route path="/freelancer-tax" element={<ToolPage />} />
          <Route path="/quote-split" element={<ToolPage />} />
          <Route path="/margin-calculator" element={<ToolPage />} />

          {/* Guidelines and Policy documents */}
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/guide" element={<GuidePage />} />

          {/* Redirect any stray subroutes to Home for robust fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
