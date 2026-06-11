"use client";

import { useEffect, useState } from "react";
import { ProtectedLayout } from "@/components/layout/protected-layout";
import { Boxes, AlertCircle } from "lucide-react";
import { OITM } from "@/lib/b1/types";

export default function InventoryPage() {
  const [items, setItems] = useState<(OITM & { Available: number })[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/sap/Items");
      const data = await res.json();
      
      // Calculate Available stock
      const processedItems = (data.value || []).map((item: OITM) => ({
        ...item,
        Available: item.OnHand - item.IsCommited + item.OnOrder
      }));

      setItems(processedItems);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <ProtectedLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-100 tracking-tight flex items-center gap-2">
            <Boxes className="w-8 h-8 text-purple-500" />
            Inventory Watchdog
          </h1>
          <p className="text-slate-400 mt-1">Real-time stock level monitoring across warehouses.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-lg animate-pulse h-40"></div>
            ))
          ) : (
            items.map((item) => {
              const isLowStock = item.Available < item.MinStock;
              
              return (
                <div 
                  key={item.ItemCode} 
                  className={`bg-slate-900 border ${isLowStock ? 'border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.1)]' : 'border-slate-800'} p-6 rounded-lg transition-all relative overflow-hidden`}
                >
                  {isLowStock && (
                    <div className="absolute top-0 right-0 bg-red-500/10 px-3 py-1 rounded-bl-lg border-b border-l border-red-500/20 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 text-red-500" />
                      <span className="text-xs font-medium text-red-500 uppercase tracking-wider">Low Stock</span>
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <p className="text-xs font-mono text-slate-500 mb-1">{item.ItemCode}</p>
                    <h3 className="text-lg font-bold text-slate-100 leading-tight">{item.ItemName}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-slate-400 mb-1">Available</p>
                      <p className={`text-xl font-mono font-bold ${isLowStock ? 'text-red-500' : 'text-emerald-500'}`}>
                        {item.Available}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 mb-1">Min. Required</p>
                      <p className="text-xl font-mono font-bold text-slate-300">
                        {item.MinStock}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-slate-800/50 flex justify-between text-xs text-slate-500">
                    <span>On Hand: <span className="text-slate-300 font-mono">{item.OnHand}</span></span>
                    <span>Committed: <span className="text-slate-300 font-mono">{item.IsCommited}</span></span>
                    <span>On Order: <span className="text-slate-300 font-mono">{item.OnOrder}</span></span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </ProtectedLayout>
  );
}
