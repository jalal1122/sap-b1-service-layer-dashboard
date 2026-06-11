"use client";

import { useEffect, useState } from "react";
import { ProtectedLayout } from "@/components/layout/protected-layout";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, DollarSign, Users, Package } from "lucide-react";

export default function DashboardPage() {
  const [data, setData] = useState<{
    salesTotal: number;
    bpCount: number;
    itemCount: number;
    chartData: any[];
  } | null>(null);

  useEffect(() => {
    async function fetchData() {
      // Fetch Orders
      const ordersRes = await fetch("/api/sap/Orders?$select=DocNum,DocTotal,CardName");
      const ordersData = await ordersRes.json();
      const orders = ordersData.value || [];

      // Fetch Business Partners
      const bpRes = await fetch("/api/sap/BusinessPartners");
      const bpData = await bpRes.json();
      const bps = bpData.value || [];

      // Fetch Items
      const itemsRes = await fetch("/api/sap/Items");
      const itemsData = await itemsRes.json();
      const items = itemsData.value || [];

      const salesTotal = orders.reduce((sum: number, order: any) => sum + (order.DocTotal || 0), 0);
      
      const chartData = orders.map((o: any) => ({
        name: o.CardName,
        total: o.DocTotal,
      }));

      setData({
        salesTotal,
        bpCount: bps.length,
        itemCount: items.length,
        chartData,
      });
    }

    fetchData();
  }, []);

  if (!data) {
    return (
      <ProtectedLayout>
        <div className="flex items-center justify-center h-full">
          <div className="w-8 h-8 border-4 border-slate-800 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      </ProtectedLayout>
    );
  }

  return (
    <ProtectedLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-100 tracking-tight">Executive Dashboard</h1>
          <p className="text-slate-400 mt-1">Overview of key SAP Service Layer metrics.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg flex items-center space-x-4">
            <div className="p-3 bg-blue-500/20 rounded-full">
              <DollarSign className="w-8 h-8 text-blue-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-400">Total Pipeline</p>
              <h2 className="text-2xl font-bold text-slate-100 font-mono">
                ${data.salesTotal.toLocaleString()}
              </h2>
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg flex items-center space-x-4">
            <div className="p-3 bg-emerald-500/20 rounded-full">
              <Users className="w-8 h-8 text-emerald-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-400">Business Partners</p>
              <h2 className="text-2xl font-bold text-slate-100 font-mono">
                {data.bpCount}
              </h2>
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg flex items-center space-x-4">
            <div className="p-3 bg-purple-500/20 rounded-full">
              <Package className="w-8 h-8 text-purple-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-400">Items Catalog</p>
              <h2 className="text-2xl font-bold text-slate-100 font-mono">
                {data.itemCount}
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg h-96">
          <h3 className="text-lg font-medium text-slate-100 mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-500" />
            Sales by Customer
          </h3>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart data={data.chartData}>
              <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
              <Tooltip 
                cursor={{ fill: '#1e293b' }}
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc' }}
                itemStyle={{ color: '#3b82f6' }}
              />
              <Bar dataKey="total" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </ProtectedLayout>
  );
}
