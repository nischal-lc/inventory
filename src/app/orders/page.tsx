import { Card, CardContent } from "@/components/ui/card";

const orders = [
  { id: "ORD-1001", customer: "Srian", status: "Delayed", total: "$120.50" },
  { id: "ORD-1002", customer: "Angel", status: "Shipped", total: "$89.99" },
  { id: "ORD-1003", customer: "Nischal", status: "Delivered", total: "$249.00" },
];

export default function OrdersPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Orders</h1>
      <div className="grid gap-4">
        {orders.map((order) => (
          <Card key={order.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-medium">{order.id}</h2>
                  <p className="text-sm text-muted-foreground">{order.customer}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">{order.status}</p>
                  <p className="font-semibold">{order.total}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
