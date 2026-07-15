import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyButtonProps {
  text: string;
  className?: string;
  cliMode?: boolean;
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  text,
  className = '',
  cliMode = true,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    // Remove the leading '$ ' if copy is in CLI mode
    const cleanText = cliMode && text.startsWith('$ ') ? text.substring(2) : text;
    try {
      await navigator.clipboard.writeText(cleanText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard', err);
    }
  };

  return (
    <div
      className={`flex items-center justify-between gap-2 bg-black/60 border border-white/10 rounded-full px-4 py-2.5 sm:px-6 sm:py-3 font-code text-xs sm:text-sm md:text-base group hover:border-accentPurple/40 transition-colors duration-300 ${className}`}
    >
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap select-all text-primaryText">
        {cliMode && text.startsWith('$ ') ? (
          <>
            <span className="text-accentPurple select-none">$</span>
            <span>{text.substring(2)}</span>
          </>
        ) : (
          <span>{text}</span>
        )}
      </div>

      <button
        onClick={handleCopy}
        className="flex items-center justify-center p-1.5 rounded-full hover:bg-white/5 text-mutedText hover:text-primaryText active:scale-95 transition-all duration-200"
        title="Copy to clipboard"
        aria-label="Copy code block"
      >
        {copied ? (
          <Check size={16} className="text-accentGreen animate-scaleIn" />
        ) : (
          <Copy size={16} className="group-hover:scale-105 transition-transform duration-200" />
        )}
      </button>
    </div>
  );
};
