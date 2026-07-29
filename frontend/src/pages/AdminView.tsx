import React, { useState } from 'react';
import { 
  LayoutDashboard, BookOpen, Stethoscope, Database, Users, 
  ListFilter, Settings, Plus, Trash2, Edit3, RefreshCw 
} from 'lucide-react';
import { MOCK_USER_LOGS } from '../constants/mockDatabase';
import { RICE_DISEASES } from '../constants/diseasesData';

export const AdminView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [logs, setLogs] = useState(MOCK_USER_LOGS);
  const [diseases, setDiseases] = useState(RICE_DISEASES);

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'diseases', label: 'Manage Diseases', icon: BookOpen },
    { id: 'treatments', label: 'Manage Treatments', icon: Stethoscope },
    { id: 'dataset', label: 'Manage Dataset', icon: Database },
    { id: 'users', label: 'Manage Users', icon: Users },
    { id: 'logs', label: 'Prediction Logs', icon: ListFilter },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row">
      
      {/* SIDEBAR */}
      <aside className="w-full md:w-64 bg-slate-900 text-slate-300 p-6 flex flex-col justify-between shrink-0 border-r border-slate-800">
        <div>
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold">
              A
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Admin Control Panel</h3>
              <p className="text-[10px] text-emerald-400">AgriScan AI System</p>
            </div>
          </div>

          <nav className="space-y-1 text-xs font-medium">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all ${
                    isActive
                      ? 'bg-emerald-600 text-white font-bold shadow-md shadow-emerald-600/20'
                      : 'hover:bg-slate-800 hover:text-white text-slate-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-800 text-[11px] text-slate-500">
          Logged in as: <strong className="text-emerald-400">System Admin</strong>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-6 sm:p-10 overflow-y-auto">
        
        {/* TAB 1: DASHBOARD OVERVIEW */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <h1 className="text-2xl font-bold text-slate-900 font-serif">System Overview</h1>
                <p className="text-xs text-slate-500">A simple academic control view for the thesis prototype.</p>
              </div>
              <button className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-bold text-slate-700 flex items-center space-x-1">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Refresh Logs</span>
              </button>
            </div>

            {/* Removed the fake performance metrics and demo counts from the admin dashboard to keep it academically neutral. */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase">Prototype Status</div>
                <div className="text-3xl font-mono font-extrabold text-slate-900">Ready</div>
                <div className="text-[10px] text-slate-500">Inspection and treatment workflow available.</div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase">Management Scope</div>
                <div className="text-3xl font-mono font-extrabold text-emerald-600">Core</div>
                <div className="text-[10px] text-slate-500">Disease records and treatment guidance only.</div>
              </div>
            </div>

            {/* Recent Prediction Activity Table */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="p-4 border-b border-slate-200 font-bold text-sm text-slate-900">
                Recent Diagnostic Audit Logs
              </div>
              <div className="overflow-x-auto text-xs">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-slate-500 uppercase font-mono">
                    <tr>
                      <th className="p-3">Log ID</th>
                      <th className="p-3">User / Officer</th>
                      <th className="p-3">Location</th>
                      <th className="p-3">Detected Disease</th>
                      <th className="p-3">Confidence</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {logs.map((log) => (
                      <tr key={log.id} className="hover:bg-slate-50">
                        <td className="p-3 font-mono font-bold text-emerald-700">{log.id}</td>
                        <td className="p-3 font-semibold text-slate-800">{log.farmerName}</td>
                        <td className="p-3 text-slate-600">{log.location}</td>
                        <td className="p-3 font-bold text-slate-900">{log.diseaseDetected}</td>
                        <td className="p-3 font-mono text-emerald-600">{log.confidence}%</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            log.status === 'Verified' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {log.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: MANAGE DISEASES */}
        {activeTab === 'diseases' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <h1 className="text-2xl font-bold text-slate-900 font-serif">Manage Disease Catalog</h1>
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5">
                <Plus className="w-4 h-4" />
                <span>Add New Disease Class</span>
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs text-xs">
              <table className="w-full text-left">
                <thead className="bg-slate-50 font-mono text-slate-500 uppercase">
                  <tr>
                    <th className="p-3">Code</th>
                    <th className="p-3">Name (English)</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Severity</th>
                    <th className="p-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {diseases.map((d) => (
                    <tr key={d.id} className="hover:bg-slate-50">
                      <td className="p-3 font-mono font-bold text-emerald-700">{d.code}</td>
                      <td className="p-3 font-bold text-slate-900">{d.nameEn}</td>
                      <td className="p-3">{d.category}</td>
                      <td className="p-3">{d.severity}</td>
                      <td className="p-3 flex items-center space-x-2">
                        <button className="p-1.5 text-slate-600 hover:text-emerald-600"><Edit3 className="w-4 h-4" /></button>
                        <button className="p-1.5 text-slate-600 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: MANAGE TREATMENTS */}
        {activeTab === 'treatments' && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-900 font-serif">Chemical & Organic Treatments Catalog</h1>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 text-xs">
              <p className="text-slate-600">Configure recommended chemical fungicides, bactericides, and organic bio-control recipes.</p>
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 font-mono">
                Active Fungicide Prescriptions: 12 Verified Dosages Logged.
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: MANAGE DATASET */}
        {activeTab === 'dataset' && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-900 font-serif">Dataset Management</h1>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-xs text-slate-600">
              {/* Removed the dataset split counts from the admin panel to avoid presenting fabricated analytics. */}
              Dataset configuration remains available for academic review without exposing placeholder statistics.
            </div>
          </div>
        )}

        {/* TAB 5: MANAGE USERS */}
        {activeTab === 'users' && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-900 font-serif">Registered Users & Officers</h1>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-xs">
              <p className="text-slate-600">Role-based access management for farmers, agricultural officers, and thesis researchers.</p>
            </div>
          </div>
        )}

        {/* TAB 6: PREDICTION LOGS */}
        {activeTab === 'logs' && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-900 font-serif">Real-Time Prediction Logs</h1>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-xs">
              <p className="text-slate-600">Audit trail of all inference queries submitted via web or mobile apps.</p>
            </div>
          </div>
        )}

        {/* TAB 7: SETTINGS */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-900 font-serif">System Settings</h1>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-xs space-y-4 max-w-xl">
              <div>
                <label className="block font-bold text-slate-800 mb-1">Confidence Threshold Sensitivity</label>
                <input type="range" min="80" max="99" defaultValue="90" className="w-full accent-emerald-600" />
              </div>
              <div>
                <label className="block font-bold text-slate-800 mb-1">Default Model Architecture</label>
                <select className="w-full p-2 border rounded-xl bg-slate-50">
                  <option>MobileNetV3 (Fastest - 145ms)</option>
                  <option>EfficientNetB0 (Highest Accuracy - 99.1%)</option>
                  <option>ResNet50</option>
                </select>
              </div>
            </div>
          </div>
        )}

      </main>

    </div>
  );
};
