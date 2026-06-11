export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950 text-slate-100">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-slate-800 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="text-sm font-medium text-slate-400">Loading SAP B1 Data...</p>
      </div>
    </div>
  );
}
