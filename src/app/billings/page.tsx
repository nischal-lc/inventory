"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { CheckCircle, Clock, XCircle } from "lucide-react";
import { useEffect, useState } from "react";

const billingData = [
  {
    id: "INV-001",
    date: "2024-03-01",
    amount: "$199.00",
    status: "Paid",
    method: "Credit Card",
  },
  {
    id: "INV-002",
    date: "2024-03-15",
    amount: "$79.00",
    status: "Pending",
    method: "PayPal",
  },
  {
    id: "INV-003",
    date: "2024-04-01",
    amount: "$149.00",
    status: "Failed",
    method: "Bank Transfer",
  },
];

export default function BillingsPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Billing History</h1>

      <Card className="overflow-hidden">
        <CardHeader className="bg-muted">
          <CardTitle className="text-lg">Invoices</CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-900 text-muted-foreground">
              <tr>
                <th className="py-3 px-5 text-left font-medium">Invoice ID</th>
                <th className="py-3 px-5 text-left font-medium">Date</th>
                <th className="py-3 px-5 text-left font-medium">Amount</th>
                <th className="py-3 px-5 text-left font-medium">Payment Method</th>
                <th className="py-3 px-5 text-left font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {billingData.map((invoice, index) => {
                const status = invoice.status;
                const transitionStyle = mounted
                  ? "transition-all duration-500 ease-in-out opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2";

                const statusStyle =
                  status === "Paid"
                    ? "bg-green-200/80 text-green-800 dark:bg-green-800/20"
                    : status === "Pending"
                    ? "bg-yellow-200/80 text-yellow-800 dark:bg-yellow-800/20"
                    : "bg-red-200/80 text-red-800 dark:bg-red-800/20";

                const icon =
                  status === "Paid" ? (
                    <CheckCircle className="w-4 h-4 mr-1 text-green-600" />
                  ) : status === "Pending" ? (
                    <Clock className="w-4 h-4 mr-1 text-yellow-600" />
                  ) : (
                    <XCircle className="w-4 h-4 mr-1 text-red-600" />
                  );

                return (
                  <tr
                    key={invoice.id}
                    className={`border-b hover:bg-muted ${transitionStyle}`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <td className="py-3 px-5">{invoice.id}</td>
                    <td className="py-3 px-5">{invoice.date}</td>
                    <td className="py-3 px-5">{invoice.amount}</td>
                    <td className="py-3 px-5">{invoice.method}</td>
                    <td className="py-3 px-5">
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${statusStyle}`}
                      >
                        {icon}
                        {invoice.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </main>
  );
}
