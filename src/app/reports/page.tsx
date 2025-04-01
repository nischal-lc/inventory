"use client";

import "./reports.css";

export default function ReportsPage() {
  return (
    <main className="reports-container">
      <h1 className="reports-title">Reports</h1>
      <div className="reports-card">
        <p className="reports-text">No reports generated yet.</p>
        <p className="reports-subtext">
          Come back later to view system insights, statistics, and analytics.
        </p>
      </div>
    </main>
  );
}
