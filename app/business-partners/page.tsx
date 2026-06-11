"use client";

import { useEffect, useState } from "react";
import { ProtectedLayout } from "@/components/layout/protected-layout";
import { Users, Search } from "lucide-react";
import { OCRD } from "@/lib/b1/types";

export default function BusinessPartnersPage() {
  const [partners, setPartners] = useState<OCRD[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      // OData filter for CardType 'C' (Customer)
      const res = await fetch("/api/sap/BusinessPartners?$filter=CardType eq 'C'");
      const data = await res.json();
      setPartners(data.value || []);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <ProtectedLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-100 tracking-tight flex items-center gap-2">
              <Users className="w-8 h-8 text-blue-500" />
              Business Partners
            </h1>
            <p className="text-slate-400 mt-1">Directory of customers retrieved via Service Layer.</p>
          </div>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search partners..." 
              className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-md text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
          {loading ? (
            <div className="p-8 flex justify-center">
              <div className="w-6 h-6 border-2 border-slate-700 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-slate-300">
                <thead className="text-xs uppercase bg-slate-950/50 text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="px-6 py-4 font-medium">Card Code</th>
                    <th className="px-6 py-4 font-medium">Name</th>
                    <th className="px-6 py-4 font-medium">Balance</th>
                    <th className="px-6 py-4 font-medium">Currency</th>
                    <th className="px-6 py-4 font-medium">Created Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  {partners.map((bp) => (
                    <tr key={bp.CardCode} className="hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4 font-mono font-medium text-blue-400">{bp.CardCode}</td>
                      <td className="px-6 py-4 font-medium text-slate-100">{bp.CardName}</td>
                      <td className={`px-6 py-4 font-mono ${bp.Balance > 0 ? 'text-emerald-500' : bp.Balance < 0 ? 'text-red-500' : 'text-slate-400'}`}>
                        {bp.Balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </td>
                      <td className="px-6 py-4">{bp.Currency}</td>
                      <td className="px-6 py-4 font-mono text-slate-500">{bp.CreateDate}</td>
                    </tr>
                  ))}
                  {partners.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                        No business partners found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </ProtectedLayout>
  );
}
