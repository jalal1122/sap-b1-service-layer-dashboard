import Link from "next/link";
import { Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-6">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 p-8 rounded-lg shadow-lg text-center space-y-6">
        <div className="flex justify-center">
          <div className="p-4 bg-slate-800 rounded-full">
            <Search className="h-10 w-10 text-slate-400" />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-100">404 - Endpoint Not Found</h2>
          <p className="text-slate-400 text-sm">
            The requested Service Layer endpoint or dashboard view does not exist.
          </p>
        </div>
        <Link 
          href="/dashboard"
          className="inline-flex items-center justify-center w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
        >
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
}
