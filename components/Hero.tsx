"use client";

import { useState } from "react";
import { Claude } from "@lobehub/icons";
import { Cursor } from "@lobehub/icons";
import { OpenAI } from "@lobehub/icons";
import { OpenClaw } from "@lobehub/icons";


export default function Hero() {
  const [copied, setCopied] = useState(false);

  const command =
    "npx skills add https://github.com/alchemyplatform/skills";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden bg-white px-6 pt-20 pb-16 md:pt-24 md:pb-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/bg-10.png')] bg-cover bg-center bg-no-repeat opacity-70"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="animate-fade-up text-[48px] leading-[56px] font-semibold tracking-[-0.48px] text-text-primary md:text-[56px] md:leading-[64px] md:tracking-[-0.56px]">
          Crypto APIs for agents
        </h1>

        <p className="animate-fade-up delay-1 mx-auto mt-6 max-w-xl text-[18px] leading-[28px] tracking-[0.18px] text-text-secondary">
          LLM-optimized skills for building crypto applications using Alchemy
          APIs.
        </p>

        <div className="animate-fade-up delay-2 mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl border border-white/40 bg-white/50 backdrop-blur-sm">

          {/* Command bar */}
          <div className="px-4 py-4 sm:px-6">
            <div className="flex items-center gap-3 rounded-xl border border-border bg-[#f7f8fc] px-4 py-3">
              <code className="flex-1 text-left font-mono text-[14px] leading-[1.5] text-text-primary sm:text-[15px]">
                <span className="text-text-tertiary">$ </span>
                {command}
              </code>
              <button
                onClick={handleCopy}
                className="shrink-0 cursor-pointer rounded-md p-1.5 text-text-tertiary transition-colors hover:text-text-primary active:scale-95"
                aria-label="Copy command"
              >
                {copied ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="animate-fade-up delay-3 mt-8 flex flex-col items-center gap-4">
          <p className="text-[13px] leading-[18px] font-mono text-black">
            Works on
          </p>
          <div className="flex items-center justify-center gap-6">
            <Cursor.Text size={18} />
            <Claude.Text size={18} />
            <OpenAI.Text size={18} />
            <OpenClaw.Text size={18} />
          </div>
        </div>
      </div>
    </section>
  );
}
