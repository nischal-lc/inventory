"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Trash2, BadgeCheck, Clock, Ban } from "lucide-react";
import { useState } from "react";

type Supplier = {
  id: string;
  name: string;
  contact: string;
  location: string;
  status: string;
};

export default function SuppliersPage() {
  const [suppliers, setSuppliers] = useState<Supplier[]>([
    {
      id: "SUP-001",
      name: "Global Tech Ltd.",
      contact: "globaltech@email.com",
      location: "Tokyo, Japan",
      status: "Active",
    },
    {
      id: "SUP-002",
      name: "Fresh Supplies Inc.",
      contact: "contact@freshsupplies.com",
      location: "Berlin, Germany",
      status: "Pending",
    },
    {
      id: "SUP-003",
      name: "Delta Distributors",
      contact: "delta@distribution.net",
      location: "Texas, USA",
      status: "Inactive",
    },
  ]);

  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    location: "",
    status: "Pending",
  });

  const handleAddSupplier = (e: React.FormEvent) => {
    e.preventDefault();
    const newSupplier: Supplier = {
      id: `SUP-${String(suppliers.length + 1).padStart(3, "0")}`,
      ...formData,
    };
    setSuppliers([newSupplier, ...suppliers]);
    setFormData({ name: "", contact: "", location: "", status: "Pending" });
  };

  const filtered = suppliers.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const statusBadge = (status: string) => {
    const styles =
      status === "Active"
        ? "bg-green-200/80 text-green-800 dark:bg-green-800/20"
        : status === "Pending"
        ? "bg-yellow-200/80 text-yellow-800 dark:bg-yellow-800/20"
        : "bg-red-200/80 text-red-800 dark:bg-red-800/20";

    const icon =
      status === "Active" ? (
        <BadgeCheck className="w-4 h-4 mr-1 text-green-600" />
      ) : status === "Pending" ? (
        <Clock className="w-4 h-4 mr-1 text-yellow-600" />
      ) : (
        <Ban className="w-4 h-4 mr-1 text-red-600" />
      );

    return (
      <span
        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${styles}`}
      >
        {icon}
        {status}
      </span>
    );
  };

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Suppliers</h1>

      {/* Add Supplier Form */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Add New Supplier</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            className="grid md:grid-cols-4 gap-4 items-end"
            onSubmit={handleAddSupplier}
          >
            <div>
              <Label>Name</Label>
              <Input
                value={formData.name}
                onChange={(e) =>
                  setFormData((f) => ({ ...f, name: e.target.value }))
                }
                required
              />
            </div>
            <div>
              <Label>Contact</Label>
              <Input
                value={formData.contact}
                onChange={(e) =>
                  setFormData((f) => ({ ...f, contact: e.target.value }))
                }
                required
              />
            </div>
            <div>
              <Label>Location</Label>
              <Input
                value={formData.location}
                onChange={(e) =>
                  setFormData((f) => ({ ...f, location: e.target.value }))
                }
                required
              />
            </div>
            <div>
              <Button type="submit" className="w-full">
                Add Supplier
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Search */}
      <Input
        placeholder="Search suppliers..."
        className="mb-4 max-w-md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Supplier Table */}
      <Card>
        <CardHeader className="bg-muted">
          <CardTitle className="text-lg">Supplier List</CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-900 text-muted-foreground">
              <tr>
                <th className="py-3 px-5 text-left font-medium">ID</th>
                <th className="py-3 px-5 text-left font-medium">Company Name</th>
                <th className="py-3 px-5 text-left font-medium">Email</th>
                <th className="py-3 px-5 text-left font-medium">Location</th>
                <th className="py-3 px-5 text-left font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((supplier) => (
                <tr
                  key={supplier.id}
                  className="hover:bg-muted border-b transition-all duration-300"
                >
                  <td className="py-3 px-5">{supplier.id}</td>
                  <td className="py-3 px-5">{supplier.name}</td>
                  <td className="py-3 px-5">{supplier.contact}</td>
                  <td className="py-3 px-5">{supplier.location}</td>
                  <td className="py-3 px-5 flex items-center gap-2">
                    {statusBadge(supplier.status)}
                    <Select
                      value={supplier.status}
                      onValueChange={(value) =>
                        setSuppliers((prev) =>
                          prev.map((s) =>
                            s.id === supplier.id ? { ...s, status: value } : s
                          )
                        )
                      }
                    >
                      <SelectTrigger className="h-8 w-[110px] text-xs border-muted bg-muted/20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Pending">Pending</SelectItem>
                        <SelectItem value="Inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>

                    <button
                      onClick={() =>
                        setSuppliers((prev) =>
                          prev.filter((s) => s.id !== supplier.id)
                        )
                      }
                      className="ml-2 text-red-500 hover:text-red-700 transition"
                      title="Delete supplier"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </main>
  );
}
