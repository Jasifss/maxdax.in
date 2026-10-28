import React, { useState } from 'react';
import { Wifi, Radio, Server, Shield, Laptop, Tv, Camera, Cpu } from 'lucide-react';

interface NetworkNode {
  id: string;
  name: string;
  category: string;
  ip: string;
  status: 'optimal' | 'warning';
  speed: string;
  load: string;
  description: string;
}

const networkNodes: NetworkNode[] = [
  {
    id: 'isp',
    name: 'Dual Gigabit WAN (Fiber + AirFiber)',
    category: 'Carrier Gateway',
    ip: '103.24.89.1',
    status: 'optimal',
    speed: '1,000 Mbps Symmetrical',
    load: '14% Utilization',
    description: 'Redundant primary fiber with automatic seamless failover to wireless AirFiber backhaul.'
  },
  {
    id: 'router',
    name: 'Core Security Gateway & Firewall',
    category: 'Enterprise Routing',
    ip: '192.168.1.1',
    status: 'optimal',
    speed: '10 Gbps SFP+ Bus',
    load: '8% CPU Load',
    description: 'Hardware deep-packet inspection, isolated IoT VLAN, and site-to-site WireGuard VPN.'
  },
  {
    id: 'switch',
    name: '24-Port Managed PoE+ Enterprise Switch',
    category: 'Distribution Layer',
    ip: '192.168.1.2',
    status: 'optimal',
    speed: 'Gigabit PoE (370W Budget)',
    load: '142W Active Load',
    description: 'Powers all ceiling Wi-Fi APs, outdoor CCTV cameras, and touch panels via structured CAT6A.'
  },
  {
    id: 'wifi',
    name: 'UniFi Wi-Fi 6 Mesh Access Points (x4)',
    category: 'Wireless Coverage',
    ip: '192.168.1.10 - 14',
    status: 'optimal',
    speed: '5,378 Mbps Tri-Band',
    load: '48 Connected Devices',
    description: 'Seamless 802.11k/v/r roaming throughout concrete slab floors, terraces, and gardens.'
  },
  {
    id: 'iot',
    name: 'Smart Home Automation Edge Hub',
    category: 'Automation Controller',
    ip: '192.168.20.1 (IoT VLAN)',
    status: 'optimal',
    speed: 'Zigbee 3.0 / Matter / IP',
    load: '92 Smart Nodes Linked',
    description: 'Processes all lighting, gate, and sensor rules locally without external cloud dependency.'
  },
  {
    id: 'nvr',
    name: '4K CCTV AI Network Video Recorder',
    category: 'Surveillance Server',
    ip: '192.168.30.1 (CCTV VLAN)',
    status: 'optimal',
    speed: '128 Mbps Ingest Rate',
    load: '8 TB WD Purple Array',
    description: 'Continuous 30-day recording retention with localized AI AcuSense perimeter tripwires.'
  }
];

export const NetworkDemo: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<NetworkNode>(networkNodes[0]);

  return (
    <div className="bg-brand-surface border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="bg-brand-card/80 border-b border-slate-800 px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <Wifi className="w-4 h-4 text-sky-400" />
          <span className="font-semibold uppercase tracking-wider text-slate-300">
            Enterprise Network Infrastructure & AirFiber Topology
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>NETWORK INTEGRITY: 99.98% UPTIME &bull; ZERO PACKET LOSS</span>
        </div>
      </div>

      {/* Interactive Topology Graph Area */}
      <div className="p-6 bg-slate-950 border-b border-slate-800">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {networkNodes.map(node => (
            <button
              key={node.id}
              type="button"
              onClick={() => setSelectedNode(node)}
              className={`p-3 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
                selectedNode.id === node.id
                  ? 'bg-sky-950/80 border-sky-400 text-white shadow-lg ring-1 ring-sky-400/50'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-sky-400 font-bold uppercase">{node.category}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>
              <div className="text-xs font-bold text-slate-200 line-clamp-2 mb-2">{node.name}</div>
              <div className="text-[10px] font-mono text-slate-500 truncate">{node.ip}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Node Telemetry Detail Card */}
      <div className="p-5 sm:p-6 bg-brand-surface">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400">
              Active Node Inspection:
            </span>
            <h3 className="text-base font-bold text-white">{selectedNode.name}</h3>
          </div>
          <div className="bg-emerald-950/70 border border-emerald-800/80 text-emerald-400 px-3 py-1 rounded-md text-xs font-mono font-semibold">
            STATUS: ACTIVE &bull; {selectedNode.speed}
          </div>
        </div>

        <p className="text-xs text-slate-300 mb-4">{selectedNode.description}</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
          <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase block">IP Assignment</span>
            <span className="text-slate-200 font-semibold">{selectedNode.ip}</span>
          </div>
          <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase block">Throughput Bandwidth</span>
            <span className="text-sky-400 font-semibold">{selectedNode.speed}</span>
          </div>
          <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase block">Telemetry Load</span>
            <span className="text-emerald-400 font-semibold">{selectedNode.load}</span>
          </div>
          <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase block">Security Zone</span>
            <span className="text-slate-200 font-semibold">VLAN Segmentation Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};
