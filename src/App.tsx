import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gauge, Layers, Terminal as TerminalIcon, RefreshCw } from 'lucide-react';
import { Logo } from './components/Logo';
import { GlassCard } from './components/GlassCard';
import { CopyButton } from './components/CopyButton';
import { GithubIcon } from './components/GithubIcon';

// Animation variants for fading up on scroll
const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  }
};

export default function App() {
  const fullCommand = 'solgate anchor init my-program';
  const [typedCommand, setTypedCommand] = useState('');
  const [terminalOutputStep, setTerminalOutputStep] = useState(0);
  const [isReplaying, setIsReplaying] = useState(false);

  // Terminal animation logic (smooth character-by-character typing followed by output lines)
  useEffect(() => {
    let active = true;
    let timers: number[] = [];
    let typingInterval: number;

    if (isReplaying) {
      setTypedCommand('');
      setTerminalOutputStep(0);
      setIsReplaying(false);
      return;
    }

    let charIndex = 0;
    setTypedCommand('');
    setTerminalOutputStep(0);

    typingInterval = window.setInterval(() => {
      if (!active) return;
      if (charIndex < fullCommand.length) {
        setTypedCommand(fullCommand.slice(0, charIndex + 1));
        charIndex++;
      } else {
        window.clearInterval(typingInterval);
        
        const t1 = window.setTimeout(() => { if (active) setTerminalOutputStep(1); }, 600);
        const t2 = window.setTimeout(() => { if (active) setTerminalOutputStep(2); }, 1600);
        const t3 = window.setTimeout(() => { if (active) setTerminalOutputStep(3); }, 2600);
        const t4 = window.setTimeout(() => { if (active) setTerminalOutputStep(4); }, 3400);
        const t5 = window.setTimeout(() => { if (active) setTerminalOutputStep(5); }, 4000);
        const t6 = window.setTimeout(() => { if (active) setTerminalOutputStep(6); }, 4600);
        
        timers.push(t1, t2, t3, t4, t5, t6);
      }
    }, 50);

    return () => {
      active = false;
      window.clearInterval(typingInterval);
      timers.forEach(t => window.clearTimeout(t));
    };
  }, [isReplaying]);

  const triggerReplay = () => {
    setIsReplaying(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E2E8F0] font-body selection:bg-accentPurple/30 selection:text-white">
      
      {/* GitHub Star Banner */}
      <div className="w-full bg-[#0D0D0D] border-b border-white/5 py-2.5 px-4 text-center text-xs sm:text-sm font-body relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accentPurple/15 via-transparent to-accentGreen/15 pointer-events-none" />
        <div className="relative flex items-center justify-center gap-2 flex-wrap">
          <span>💡</span>
          <span className="text-primaryText/90 font-medium animate-pulse">
            If this helped you, please star the{' '}
            <a 
              href="https://github.com/mannshah24/solgate-cli.git" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-accentGreen hover:text-accentGreen/80 underline font-semibold transition-colors duration-200"
            >
              GitHub repository
            </a>!
          </span>
          <span>⭐🚀</span>
        </div>
      </div>

      {/* 1. Navbar (Sticky) */}
      <header className="sticky top-0 z-50 w-full bg-[#0A0A0A]/85 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <Logo size={28} className="text-white group-hover:rotate-6 transition-transform duration-300" />
            <span className="font-logo font-bold text-xl uppercase tracking-[0.04em] text-white">
              SolGate
            </span>
          </a>
          
          <div className="flex items-center gap-4">

            <a 
              href="https://github.com/mannshah24/solgate-cli.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#9945FF] text-[#0A0A0A] text-sm font-semibold hover:bg-[#8033E6] hover:shadow-[0_0_20px_rgba(153,69,255,0.4)] active:scale-95 transition-all duration-200"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center px-4 sm:px-6 overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32">
        {/* Glow effect background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[1000px] h-[600px] rounded-full bg-radial-gradient opacity-80 filter blur-[120px]" 
               style={{ background: 'radial-gradient(ellipse at center, rgba(153,69,255,0.18) 0%, transparent 70%)' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
          {/* Eyebrow Pill */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#14F195] animate-pulse" />
            <span className="text-xs font-semibold tracking-wider text-[#9945FF] font-code uppercase">
              Solana CLI Tool for Windows
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="font-headline text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1] md:leading-[1.05]"
          >
            Solana Development on <span className="text-gradient-purple-green">Windows</span>, Simplified.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-mutedText max-w-2xl mb-8 leading-relaxed font-body"
          >
            The transparent CLI proxy that brings native Linux compilation speed to your Windows workflow, bypassing WSL filesystem boundaries.
          </motion.p>

          {/* NPM Install Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-lg mb-10"
          >
            <CopyButton text="$ npm install -g @mannshah24/solgate" />
          </motion.div>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 items-center mb-6"
          >
            <a 
              href="#setup"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#9945FF] text-[#0A0A0A] font-semibold text-base hover:bg-[#8033E6] hover:shadow-[0_0_30px_rgba(153,69,255,0.45)] active:scale-98 transition-all duration-200 text-center"
            >
              Get Started
            </a>
            <a 
              href="https://github.com/mannshah24/solgate-cli.git"
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/12 text-[#E2E8F0] font-semibold text-base hover:bg-white/5 hover:border-white/20 active:scale-98 transition-all duration-200"
            >
              <GithubIcon size={18} />
              <span>View on GitHub</span>
            </a>
          </motion.div>

          {/* Requirement Banner */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center gap-2 text-xs md:text-sm text-yellow-500/80 bg-yellow-500/5 border border-yellow-500/10 px-5 py-2.5 rounded-full"
          >
            <span>⚠️</span>
            <span className="font-medium">Requires Docker Desktop to be installed and running in the background.</span>
          </motion.div>
        </div>
      </section>

      {/* 3. The Problem Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 relative border-t border-white/5 bg-black/20 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] rounded-full bg-[#3B82F6]/5 filter blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUpVariants}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#9945FF] uppercase font-code">
              The Problem
            </span>
            <h2 className="font-headline text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-3 mb-4">
              Why Windows Solana Dev is Painful
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-mutedText max-w-2xl mx-auto">
              Developing on Solana with Windows has historically meant choosing between terrible filesystem performance or configuration nightmare.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard delay={0.1}>
              <div className="w-12 h-12 rounded-2xl bg-[#9945FF]/10 border border-[#9945FF]/20 flex items-center justify-center text-[#9945FF] mb-6">
                <Gauge size={24} />
              </div>
              <h3 className="font-headline text-xl sm:text-2xl font-bold text-white mb-3">
                WSL File-System Bottleneck
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-mutedText leading-relaxed">
                Accessing files across the WSL boundary is notoriously slow. Anchor builds and Rust compiles crawl because every file operation crosses the virtual filesystem bridge — often <span className="text-[#9945FF] font-semibold">10–20x slower</span> than native compilation.
              </p>
            </GlassCard>

            <GlassCard delay={0.2}>
              <div className="w-12 h-12 rounded-2xl bg-[#14F195]/10 border border-[#14F195]/20 flex items-center justify-center text-[#14F195] mb-6">
                <Layers size={24} />
              </div>
              <h3 className="font-headline text-xl sm:text-2xl font-bold text-white mb-3">
                Environment Complexity
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-mutedText leading-relaxed">
                Maintaining parallel Solana toolchains — one inside WSL, one outside — means duplicated configs, conflicting versions, and debugging that drains hours. <span className="text-[#14F195] font-semibold">solgate</span> collapses this into a single, transparent proxy.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 4. Terminal Action Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] rounded-full bg-[#14F195]/5 filter blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUpVariants}
            className="text-center mb-10 md:mb-12"
          >
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#14F195] uppercase font-code">
              In Action
            </span>
            <h2 className="font-headline text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-3 mb-4">
              Your Terminal, Transformed
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-mutedText max-w-2xl mx-auto">
              Execute commands normally. SolGate intercepts them under the hood and compiles inside Linux Docker, utilizing native write speeds.
            </p>
          </motion.div>

          {/* Terminal Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="w-full bg-[#030303] rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-[#9945FF]/15"
          >
            {/* Terminal Header (Windows Terminal Style) */}
            <div className="flex items-center justify-between bg-[#151515] border-b border-white/5 h-11 select-none">
              
              {/* Tab Row (Left) */}
              <div className="flex items-end h-full pl-2">
                <div className="flex items-center gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 bg-[#030303] border-t-2 border-accentPurple rounded-t-md text-[10px] sm:text-xs font-semibold text-white h-[90%] mt-[10%]">
                  <TerminalIcon size={11} className="text-accentPurple" />
                  <span>PowerShell</span>
                  <span className="text-[9px] sm:text-[10px] text-mutedText hover:text-white ml-1.5 cursor-pointer font-sans">×</span>
                </div>
                {/* Add Tab and Options */}
                <div className="hidden sm:flex items-center justify-center w-7 h-7 hover:bg-white/5 rounded text-mutedText hover:text-white cursor-pointer ml-1 mb-1 text-xs">
                  <span>+</span>
                </div>
                <div className="hidden sm:flex items-center justify-center w-7 h-7 hover:bg-white/5 rounded text-mutedText hover:text-white cursor-pointer mb-1 text-[9px]">
                  <span>▼</span>
                </div>
              </div>

              {/* Actions / Replay (Center/Right-ish) */}
              <div className="flex items-center gap-1 h-full pr-1">
                {/* Custom Replay Action */}
                <button 
                  onClick={triggerReplay}
                  className="flex items-center gap-1 px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs text-mutedText hover:text-white hover:bg-white/5 rounded transition-all duration-150 mr-1 sm:mr-2"
                  title="Restart terminal typing animation"
                >
                  <RefreshCw size={10} className={isReplaying ? 'animate-spin' : ''} />
                  <span>Replay</span>
                </button>

                {/* Windows Window Controls */}
                {/* Minimize */}
                <div className="flex items-center justify-center w-8 sm:w-11 h-full hover:bg-white/5 text-mutedText hover:text-white cursor-pointer transition-colors duration-150">
                  <svg width="8" height="1" viewBox="0 0 10 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="10" y2="0.5" stroke="currentColor" />
                  </svg>
                </div>
                {/* Maximize */}
                <div className="flex items-center justify-center w-8 sm:w-11 h-full hover:bg-white/5 text-mutedText hover:text-white cursor-pointer transition-colors duration-150">
                  <svg width="8" height="8" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="8" height="8" stroke="currentColor" fill="none" />
                  </svg>
                </div>
                {/* Close (Red Hover) */}
                <div className="flex items-center justify-center w-8 sm:w-11 h-full hover:bg-[#E81123] text-mutedText hover:text-white cursor-pointer transition-colors duration-150">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7M7 1L1 7" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-4 sm:p-6 md:p-8 font-code text-xs sm:text-sm md:text-base leading-relaxed text-[#D1D5DB] min-h-[280px] sm:min-h-[340px] overflow-x-auto w-full">
              {/* Command Line */}
              <div className="flex items-center flex-wrap gap-x-2">
                <span className="text-accentBlue select-none">PS C:\dev&gt;</span>
                <span className="text-white whitespace-pre-wrap flex items-center">
                  {typedCommand}
                  {typedCommand.length < fullCommand.length ? (
                    <span className="inline-block w-2 h-4 bg-white ml-0.5 animate-pulse" />
                  ) : (
                    terminalOutputStep < 6 && <span className="inline-block w-2 h-4 bg-white ml-0.5 animate-pulse" />
                  )}
                </span>
              </div>

              {/* Steps reveal with staggered animation */}
              <div className="mt-4 space-y-2 select-text">
                {terminalOutputStep >= 1 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#9945FF]"
                  >
                    [solgate] Detected Docker runtime. Routing via container...
                  </motion.div>
                )}

                {terminalOutputStep >= 2 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#9945FF]"
                  >
                    [solgate] Mounting project at native Windows path... <span className="text-[#14F195] font-semibold">done</span>
                  </motion.div>
                )}

                {terminalOutputStep >= 3 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-400"
                  >
                    [anchor] Generating new workspace...
                  </motion.div>
                )}

                {terminalOutputStep >= 4 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#14F195]"
                  >
                    ✓ Created my-program/Anchor.toml
                  </motion.div>
                )}

                {terminalOutputStep >= 5 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#14F195]"
                  >
                    ✓ Created my-program/programs/my-program/src/lib.rs
                  </motion.div>
                )}

                {terminalOutputStep >= 6 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#14F195] mt-4 flex flex-col gap-2"
                  >
                    <div>✓ Initialized workspace: my-program (native write speed, no WSL)</div>
                    <div className="flex items-center flex-wrap gap-x-2 mt-4 text-[#D1D5DB]">
                      <span className="text-accentBlue select-none">PS C:\dev\my-program&gt;</span>
                      <span className="inline-block w-2 h-4 bg-white animate-pulse" />
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Simple Setup Section */}
      <div id="setup" className="scroll-mt-24" />
      <section className="py-16 md:py-24 px-4 sm:px-6 border-t border-white/5 bg-black/20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-accentBlue/5 filter blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUpVariants}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#14F195] uppercase font-code">
              Simple Setup
            </span>
            <h2 className="font-headline text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-3 mb-4">
              Up and Running in Minutes
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-mutedText max-w-2xl mx-auto">
              Three steps. That’s it. No WSL configuration required. Ensure Docker Desktop is open, and let SolGate do the rest.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <GlassCard delay={0.1}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#9945FF]/10 border border-[#9945FF]/20 flex items-center justify-center text-[#9945FF] font-bold font-code text-sm">
                  01
                </div>
                <h3 className="font-headline text-xl font-bold text-white">Install</h3>
              </div>
              <p className="text-mutedText leading-relaxed text-sm mb-6">
                One npm command installs the solgate CLI globally on your Windows machine.
              </p>
              <div className="bg-black/40 border border-white/5 rounded-lg px-4 py-2 text-xs font-code text-primaryText select-all whitespace-nowrap overflow-x-auto no-scrollbar">
                npm install -g @mannshah24/solgate
              </div>
            </GlassCard>

            {/* Card 2 */}
            <GlassCard delay={0.2}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#14F195]/10 border border-[#14F195]/20 flex items-center justify-center text-[#14F195] font-bold font-code text-sm">
                  02
                </div>
                <h3 className="font-headline text-xl font-bold text-white">Build</h3>
              </div>
              <p className="text-mutedText leading-relaxed text-sm mb-6">
                solgate handles pulling the Solana Docker image and mounting your project path — automatically.
              </p>
              <div className="bg-black/40 border border-white/5 rounded-lg px-4 py-2 text-xs font-code text-primaryText select-all whitespace-nowrap overflow-x-auto no-scrollbar">
                solgate anchor build
              </div>
            </GlassCard>

            {/* Card 3 */}
            <GlassCard delay={0.3}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6] font-bold font-code text-sm">
                  03
                </div>
                <h3 className="font-headline text-xl font-bold text-white">Develop</h3>
              </div>
              <p className="text-mutedText leading-relaxed text-sm mb-6">
                Run any Anchor or Solana CLI command with native write speeds, directly from PowerShell or Windows Terminal.
              </p>
              <div className="bg-black/40 border border-white/5 rounded-lg px-4 py-2 text-xs font-code text-primaryText select-all whitespace-nowrap overflow-x-auto no-scrollbar">
                solgate anchor test
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="border-t border-white/5 bg-[#080808] py-12 md:py-16 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <Logo size={24} className="text-white" />
              <span className="font-logo font-bold text-lg uppercase tracking-[0.04em] text-white">
                SolGate
              </span>
            </div>
            <p className="text-xs text-mutedText text-center md:text-left">
              &copy; 2026 SolGate. Open source under MIT.
            </p>
          </div>

          <div className="flex items-center gap-4">

            <a 
              href="https://github.com/mannshah24/solgate-cli.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-white/5 border border-white/8 text-[#E2E8F0] text-xs font-semibold hover:bg-white/10 hover:border-white/15 transition-all duration-200"
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
