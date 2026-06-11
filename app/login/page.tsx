"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/sap/Login", {
        method: "POST",
      });

      if (!res.ok) {
        throw new Error("Failed to connect to Service Layer");
      }

      router.push("/dashboard");
      router.refresh();
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-lg shadow-xl overflow-hidden">
        <div className="p-8 space-y-6">
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-2">
              <Lock className="w-6 h-6 text-blue-500" />
            </div>
            <h1 className="text-2xl font-bold text-slate-100">Service Layer Gateway</h1>
            <p className="text-sm text-slate-400 text-center">
              Authenticate with your SAP Business One credentials to access the IT Portal.
            </p>
          </div>

          {error && (
            <div className="p-3 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Company DB</label>
              <input
                type="text"
                defaultValue="SBODEMOUS"
                className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                disabled
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Username</label>
              <input
                type="text"
                defaultValue="manager"
                className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Password</label>
              <input
                type="password"
                defaultValue="1234"
                className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            >
              {loading ? "Authenticating..." : "Login to SAP B1"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
