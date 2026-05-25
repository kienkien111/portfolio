import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart3, 
  TrendingUp, 
  Calendar, 
  Sparkles, 
  Layers, 
  Activity, 
  Clock, 
  Briefcase, 
  ArrowUpRight, 
  Sliders, 
  CheckCircle,
  Database,
  Cpu,
  Bookmark
} from 'lucide-react';

export default function CampaignSnapshots() {
  const [activeTab, setActiveTab] = useState<'all' | 'ads' | 'ai' | 'cases'>('all');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Define campaign snapshot nodes representing the premium bento modules
  const snapshots = [
    {
      id: "meta-ads-dashboard",
      type: "ads",
      title: "Real-time Meta Ads Dashboard",
      tag: "PERFORMANCE HUB",
      size: "col-span-12 md:col-span-7",
      bgClass: "bg-[#111111]/80 border-white/5 text-[#D7E2EA] h-auto p-6 md:p-8",
      content: (
        <div className="flex flex-col gap-5 w-full">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-white/[0.06] pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[10px] uppercase text-white/40 tracking-wider">LIVE REVENUE CAMPAIGN: ACTIVE</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/10">ROAS: 4.85x</span>
              <span className="text-[10px] font-mono text-[#B600A8] font-bold bg-[#B600A8]/10 px-2.5 py-1 rounded-full border border-[#B600A8]/10">Budget: $1,250/Day</span>
            </div>
          </div>

          {/* Grid of Key Performance Indicators (KPIs) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white/[0.02] border border-white/[0.04] p-3.5 rounded-2xl">
              <span className="text-white/40 text-[9px] font-mono tracking-wider block uppercase mb-1">CTR (Hook)</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-white text-xl font-bold">3.82%</span>
                <span className="text-emerald-400 text-[9px] font-medium">+14%</span>
              </div>
            </div>
            <div className="bg-white/[0.02] border border-white/[0.04] p-3.5 rounded-2xl">
              <span className="text-white/40 text-[9px] font-mono tracking-wider block uppercase mb-1">CPC (Avg)</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-white text-xl font-bold">$0.24</span>
                <span className="text-emerald-400 text-[9px] font-medium">-18%</span>
              </div>
            </div>
            <div className="bg-white/[0.02] border border-white/[0.04] p-3.5 rounded-2xl">
              <span className="text-white/40 text-[9px] font-mono tracking-wider block uppercase mb-1">CPM</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-white text-xl font-bold">$8.20</span>
                <span className="text-neutral-400 text-[9px] font-medium">Optimal</span>
              </div>
            </div>
            <div className="bg-white/[0.02] border border-white/[0.04] p-3.5 rounded-2xl bg-[#B600A8]/5 border-[#B600A8]/20">
              <span className="text-[#B600A8] text-[9px] font-mono tracking-wider block uppercase mb-1 font-bold">Conversions</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-white text-xl font-black">1,480+</span>
                <span className="text-[#B600A8] text-[9px] font-black">+42.5%</span>
              </div>
            </div>
          </div>

          {/* Graphical Growth Chart Representation */}
          <div className="mt-2 bg-black/40 border border-white/[0.03] p-4 rounded-2xl flex flex-col gap-3">
            <div className="flex justify-between items-center text-[10px] font-mono text-white/50">
              <span>Conversion Velocity Log (May 2026)</span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <TrendingUp size={11} />
                Exponential Growth Curve
              </span>
            </div>
            {/* Visual SVG Path */}
            <div className="w-full h-16 flex items-end">
              <svg className="w-full h-full" viewBox="0 0 350 60" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#B600A8" stopOpacity="0.32"/>
                    <stop offset="100%" stopColor="#B600A8" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path 
                  d="M0,55 Q35,50 70,38 T140,42 T210,24 T280,12 T350,5" 
                  fill="none" 
                  stroke="#B600A8" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                />
                <path 
                  d="M0,55 Q35,50 70,38 T140,42 T210,24 T280,12 T350,5 L350,60 L0,60 Z" 
                  fill="url(#chartGradient)"
                />
              </svg>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "content-calendar",
      type: "ads",
      title: "Content Planner Dashboard",
      tag: "STRATEGY ENGINE",
      size: "col-span-12 md:col-span-5",
      bgClass: "bg-white border-none text-[#0C0C0C] h-full p-6 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden",
      content: (
        <div className="flex flex-col gap-5 w-full h-full justify-between">
          <div className="absolute top-0 right-0 w-24 h-24 bg-neutral-100 rounded-bl-3xl flex items-center justify-center border-l border-b border-neutral-200/50">
            <Calendar size={24} className="text-zinc-600 animate-pulse" />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] px-2.5 py-1 bg-neutral-100 text-[#0C0C0C] font-black rounded-md tracking-wider border border-neutral-200 uppercase">CALENDAR OUTLINE</span>
            </div>
            <h4 className="text-[#0C0C0C] text-xl font-black uppercase leading-tight tracking-wide">
              Social Media Core Planning Grid
            </h4>
          </div>

          <div className="flex flex-col gap-3.5 my-4">
            <div className="flex items-center justify-between p-3.5 bg-neutral-50 rounded-xl border border-neutral-200/50">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B600A8]" />
                <span className="font-mono text-xs font-bold uppercase tracking-wide">FB / TIKTOK REELS</span>
              </div>
              <span className="text-[10px] font-mono text-neutral-400 uppercase font-black">HOOK // HIGH RETENTION</span>
            </div>

            <div className="flex items-center justify-between p-3.5 bg-neutral-50 rounded-xl border border-neutral-100">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7621B0]" />
                <span className="font-mono text-xs font-bold uppercase tracking-wide">AI CHAT SYSTEMS</span>
              </div>
              <span className="text-[10px] font-mono text-neutral-400 uppercase font-black">PROVOKED DIALOGUE</span>
            </div>

            <div className="flex items-center justify-between p-3.5 bg-neutral-50 rounded-xl border border-neutral-100">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="font-mono text-xs font-bold uppercase tracking-wide">DAILY INSIGHT REPORT</span>
              </div>
              <span className="text-[10px] font-mono text-neutral-400 uppercase font-black">AUTOMATION PIPELINE</span>
            </div>
          </div>

          <p className="text-neutral-500 text-[11px] font-mono">
            // STATUS: NEXT DEPLOY SCHEDULED (09:00 UTC+7)
          </p>
        </div>
      )
    },
    {
      id: "brand-growth",
      type: "ads",
      title: "Growth Matrix Snapshot",
      tag: "AUDIENCE METRICS",
      size: "col-span-12 md:col-span-5",
      bgClass: "bg-[#111111]/80 border-white/5 text-[#D7E2EA] h-auto p-6 md:p-8",
      content: (
        <div className="flex flex-col gap-6 w-full">
          <div>
            <span className="font-mono text-[9px] tracking-widest text-[#00A8E8] uppercase block mb-1">CAMPAIGN REACH LOGS</span>
            <h4 className="text-white text-lg font-extrabold uppercase tracking-wide">Brand Penetration Velocity</h4>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-1">
                <span className="text-white/40">Organic Reach Potential</span>
                <span className="font-bold text-white">+1,248K</span>
              </div>
              <div className="w-full bg-white/[0.05] h-1.5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "88%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="bg-[#00A8E8] h-full rounded-full"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-1">
                <span className="text-white/40">Audience Engagement Index</span>
                <span className="font-bold text-white">4.8% (Benchmark: 2%)</span>
              </div>
              <div className="w-full bg-white/[0.05] h-1.5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "94%" }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                  className="bg-[#B600A8] h-full rounded-full"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-1">
                <span className="text-white/40">Loyalty Conversion Factor</span>
                <span className="font-bold text-white">72%</span>
              </div>
              <div className="w-full bg-white/[0.05] h-1.5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "72%" }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                  className="bg-emerald-500 h-full rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "ai-workflow-diagram",
      type: "ai",
      title: "AI Integration Workflow Diagram",
      tag: "DIGITAL ACCELERATION",
      size: "col-span-12 md:col-span-7",
      bgClass: "bg-[#111111]/80 border-white/5 text-[#D7E2EA] h-auto p-6 md:p-8",
      content: (
        <div className="flex flex-col gap-6 w-full">
          <div className="flex justify-between items-start border-b border-white/[0.05] pb-4">
            <div>
              <span className="font-mono text-[9px] tracking-widest text-emerald-400 uppercase block mb-1">AI WORKFLOW CONDUIT</span>
              <h4 className="text-white text-lg font-black uppercase tracking-wide">Research to Report Pipeline</h4>
            </div>
            <span className="text-[10px] font-mono text-emerald-300 bg-emerald-300/10 px-2.5 py-1 rounded-full text-right">3x Speed Acceleration</span>
          </div>

          {/* Sequence of dynamic horizontal steps */}
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-2.5 relative items-center">
            {[
              { num: '01', title: 'Research', col: 'text-[#B600A8]' },
              { num: '02', title: 'Insight', col: 'text-[#7621B0]' },
              { num: '03', title: 'Angle', col: 'text-[#00A8E8]' },
              { num: '04', title: 'Ad Copy', col: 'text-[#FF4F00]' },
              { num: '05', title: 'Brief', col: 'text-amber-400' },
              { num: '06', title: 'Report', col: 'text-emerald-400' }
            ].map((step, idx) => (
              <div key={idx} className="bg-white/[0.02] border border-white/[0.04] p-3 rounded-xl flex flex-col justify-between h-20 hover:scale-105 transition-transform duration-300">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-[9px] text-white/30 font-extrabold">{step.num}</span>
                  <Cpu size={10} className={`${step.col}`} />
                </div>
                <span className="text-[10px] font-mono tracking-wider font-extrabold text-white uppercase leading-none block">
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "cases-stack",
      type: "cases",
      title: "Core Campaign Snapshots Overview",
      tag: "HIGHLIGHT STORIES",
      size: "col-span-12 md:col-span-12",
      bgClass: "bg-[#111111]/80 border-white/5 text-[#D7E2EA] h-auto p-6 md:p-8",
      content: (
        <div className="flex flex-col gap-6 w-full">
          <div className="border-b border-white/[0.05] pb-4">
            <span className="font-mono text-[9px] tracking-widest text-[#B600A8] uppercase block mb-1">INTEGRATED SUCCESS STORY</span>
            <h4 className="text-white text-lg font-black uppercase tracking-wide">Key Campaign Brief Previews</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                num: "01",
                campaign: "TakaGrow Brand Scaling",
                desc: "Triển khai Facebook Ads và AI Content trong ngành F&B (Sữa), đạt kết quả doanh thu hơn 100M VNĐ trong 30 ngày.",
                roi: "+100M VND",
                color: "#B600A8"
              },
              {
                num: "02",
                campaign: "Anh ngữ Cô Hoàng Anh",
                desc: "Định vị lại giải pháp thương hiệu, tạo dựng nội dung storytelling chạm cảm xúc cho hệ thống 11 cơ sở Anh ngữ tại Hà Nội.",
                roi: "11 Branches System",
                color: "#7621B0"
              },
              {
                num: "03",
                campaign: "AI Educator Program",
                desc: "Đào tạo tích hợp workflow AI giúp nâng cao hiệu suất hoạt động content và tối ưu hóa thời gian vận hành lên 3 lần.",
                roi: "3x Operational Speed",
                color: "#10B981"
              }
            ].map((card, idx) => (
              <div 
                key={idx} 
                className="group relative bg-[#181818]/60 border border-white/[0.05] hover:border-white/[0.12] p-5 rounded-3xl transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-[#B600A8]/2 h-auto cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-[11px] font-black text-white/30" style={{ color: card.color }}>
                    PROJ // {card.num}
                  </span>
                  <div className="w-7 h-7 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-[#B600A8]/20 group-hover:border-[#B600A8]/20 transition-all duration-300">
                    <ArrowUpRight size={13} className="text-white" />
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <h5 className="font-extrabold text-white text-base uppercase leading-tight">{card.campaign}</h5>
                  <p className="text-white/50 text-[12px] leading-relaxed">{card.desc}</p>
                </div>

                <div className="pt-3 border-t border-white/[0.05] flex justify-between items-center">
                  <span className="font-mono text-[8px] text-white/30 uppercase tracking-widest font-black">Velocity Metric</span>
                  <span className="text-[11px] font-mono font-black text-right" style={{ color: card.color }}>{card.roi}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  // Filter components locally
  const filteredSnapshots = activeTab === 'all' 
    ? snapshots 
    : snapshots.filter(s => s.type === activeTab);

  return (
    <section 
      id="campaign-snapshots" 
      className="relative w-full bg-[#0C0C0C] py-28 sm:py-36 px-6 sm:px-10 overflow-hidden select-none z-10 border-t border-white/5"
    >
      {/* Background radial overlays */}
      <div className="absolute top-[-10%] right-[10%] w-[550px] h-[550px] rounded-full bg-[#B600A8]/3 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[5%] w-[550px] h-[550px] rounded-full bg-[#7621B0]/3 blur-[140px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Core Header Title element */}
        <div className="text-center max-w-3xl mb-12 sm:mb-16">
          <span className="font-mono text-[#B600A8] text-[9.5px] sm:text-[11px] font-extrabold tracking-[0.28em] uppercase block mb-3 animate-pulse">
            // MARKETER INSIGHT WALL
          </span>
          <h2 className="text-white font-black uppercase leading-tight tracking-tight mb-4" style={{ fontSize: "clamp(2rem, 5.5vw, 68px)" }}>
            CAMPAIGN SNAPSHOTS
          </h2>
          <p className="text-[#D7E2EA]/65 text-xs sm:text-sm md:text-base leading-relaxed tracking-wide font-medium">
            A quick look into the way I build, test, analyze, and optimize marketing ideas across ads, content, branding, and AI workflows.
          </p>
        </div>

        {/* Tab Filter switcher inside dark command style bar */}
        <div className="mb-10 flex gap-1.5 p-1 bg-[#151515] border border-white/[0.05] rounded-full overflow-x-auto max-w-full no-scrollbar">
          {[
            { id: 'all', title: 'All Modules' },
            { id: 'ads', title: 'Metrics & Ads' },
            { id: 'ai', title: 'AI Automation' },
            { id: 'cases', title: 'Case Previews' }
          ].map((tab) => {
            const isTabActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-2 px-4 rounded-full font-mono text-[9px] sm:text-[10px] font-black uppercase tracking-wider transition-all duration-300 pointer-events-auto whitespace-nowrap ${
                  isTabActive 
                    ? 'bg-[#B600A8] text-white shadow-lg shadow-[#B600A8]/20' 
                    : 'text-white/45 hover:text-white/80'
                }`}
              >
                {tab.title}
              </button>
            );
          })}
        </div>

        {/* Dynamic Bento Grid Wall layout with custom border triggers and subtle stagger */}
        <div className="grid grid-cols-12 gap-5 w-full">
          <AnimatePresence mode="popLayout">
            {filteredSnapshots.map((item, index) => {
              const isCellHovered = hoveredIndex === index;
              return (
                <motion.div
                  key={item.id}
                  layoutId={`snapshot-cell-${item.id}`}
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative ${item.size} border rounded-[32px] overflow-hidden transition-all duration-500 hover:-translate-y-1.5 ${item.bgClass}`}
                  style={{
                    boxShadow: isCellHovered ? '0 30px 60px -15px rgba(0,0,0,0.5)' : 'none'
                  }}
                >
                  {/* Subtle highlight glare details relative to layout context */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.015] to-white/[0.025] pointer-events-none transition-opacity duration-500"
                    style={{ opacity: isCellHovered ? 1 : 0 }}
                  />
                  
                  {/* Item Content rendered dynamically */}
                  <div className="relative z-10 w-full h-full flex flex-col justify-between">
                    <div>
                      {/* Inner block tag */}
                      <div className="flex items-center justify-between mb-4 mt-0.5">
                        <span className="font-mono text-[8px] font-black tracking-widest text-white/40 uppercase">
                          {item.tag}
                        </span>
                        <div className="flex gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                          <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                          <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                        </div>
                      </div>
                    </div>

                    <div className="w-full flex-grow flex items-center">
                      {item.content}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
