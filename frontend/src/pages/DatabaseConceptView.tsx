import React, { useState } from 'react';
import { DATABASE_SCHEMAS } from '../constants/mockDatabase';
import { DatabaseTableSchema } from '../types';
import { Database, Key, Table, ArrowRight, Layers, FileCode } from 'lucide-react';

export const DatabaseConceptView: React.FC = () => {
  const [selectedTable, setSelectedTable] = useState<DatabaseTableSchema>(DATABASE_SCHEMAS[0]);

  return (
    <div className="min-h-screen bg-slate-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title */}
        <div className="max-w-3xl space-y-3">
          <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30 text-xs font-bold font-mono">
            Database Architecture Design
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-white">
            MySQL Relational Database Schema (ERD)
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            Normalized relational database structure designed for MySQL (Railway) to track diseases, chemical/organic treatment protocols, diagnostic logs, and user profiles.
          </p>
        </div>

        {/* VISUAL ERD RELATIONSHIP FLOW */}
        <div className="bg-slate-800/80 p-6 sm:p-8 rounded-3xl border border-slate-700 space-y-4">
          <h3 className="text-lg font-bold text-white font-serif flex items-center space-x-2">
            <Layers className="w-5 h-5 text-emerald-400" />
            <span>Entity Relationship Diagram (ERD) Overview</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 bg-slate-900 rounded-2xl border border-emerald-500/40 space-y-2">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold">
                <Table className="w-4 h-4" />
                <span>users</span>
              </div>
              <p className="text-[11px] text-slate-400 font-sans">1 : N relationship with prediction_history</p>
              <div className="text-[10px] text-slate-500">PK: user_id</div>
            </div>

            <div className="p-4 bg-slate-900 rounded-2xl border border-emerald-500/40 space-y-2">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold">
                <Table className="w-4 h-4" />
                <span>prediction_history</span>
              </div>
              <p className="text-[11px] text-slate-400 font-sans">FK: user_id, predicted_disease_id</p>
              <div className="text-[10px] text-slate-500">PK: prediction_id</div>
            </div>

            <div className="p-4 bg-slate-900 rounded-2xl border border-emerald-500/40 space-y-2">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold">
                <Table className="w-4 h-4" />
                <span>diseases</span>
              </div>
              <p className="text-[11px] text-slate-400 font-sans">1 : N relationship with treatments</p>
              <div className="text-[10px] text-slate-500">PK: disease_id</div>
            </div>

            <div className="p-4 bg-slate-900 rounded-2xl border border-emerald-500/40 space-y-2">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold">
                <Table className="w-4 h-4" />
                <span>treatments</span>
              </div>
              <p className="text-[11px] text-slate-400 font-sans">FK: disease_id</p>
              <div className="text-[10px] text-slate-500">PK: treatment_id</div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE TABLE SELECTOR & COLUMN SCHEMA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Table List (Col 4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Select Relational Table:
            </h4>
            {DATABASE_SCHEMAS.map((tbl) => (
              <button
                key={tbl.tableName}
                onClick={() => setSelectedTable(tbl)}
                className={`w-full p-4 rounded-2xl border text-left transition-all ${
                  selectedTable.tableName === tbl.tableName
                    ? 'bg-emerald-950 border-emerald-500 text-white font-bold ring-1 ring-emerald-500/40'
                    : 'bg-slate-800/80 border-slate-700/80 hover:bg-slate-800 text-slate-300'
                }`}
              >
                <div className="flex items-center space-x-2 font-mono text-sm text-emerald-400">
                  <Database className="w-4 h-4" />
                  <span>{tbl.tableName}</span>
                </div>
                <p className="text-xs text-slate-400 font-sans mt-1 line-clamp-2">
                  {tbl.description}
                </p>
              </button>
            ))}
          </div>

          {/* Table Schema Details (Col 8) */}
          <div className="lg:col-span-8 bg-slate-800/80 p-6 rounded-3xl border border-slate-700 space-y-4">
            
            <div className="flex items-center justify-between border-b border-slate-700 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400">TABLE SCHEMA</span>
                <h3 className="text-2xl font-mono font-bold text-white">{selectedTable.tableName}</h3>
              </div>
              <div className="px-3 py-1 rounded-lg bg-slate-900 text-xs font-mono text-slate-400 border border-slate-700">
                Engine: InnoDB (MySQL)
              </div>
            </div>

            <p className="text-xs text-slate-300">{selectedTable.description}</p>

            <div className="overflow-x-auto text-xs font-mono">
              <table className="w-full text-left">
                <thead className="bg-slate-900 text-slate-400 uppercase">
                  <tr>
                    <th className="p-3">Column Name</th>
                    <th className="p-3">Data Type</th>
                    <th className="p-3">Constraint</th>
                    <th className="p-3">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/60">
                  {selectedTable.columns.map((col, i) => (
                    <tr key={i} className="hover:bg-slate-700/40">
                      <td className="p-3 font-bold text-emerald-300">{col.name}</td>
                      <td className="p-3 text-amber-300">{col.type}</td>
                      <td className="p-3">
                        {col.key && (
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                            col.key === 'PK' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30' : 'bg-purple-950 text-purple-300 border border-purple-500/30'
                          }`}>
                            {col.key}
                          </span>
                        )}
                      </td>
                      <td className="p-3 text-slate-300 font-sans">{col.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
