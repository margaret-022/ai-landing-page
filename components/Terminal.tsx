"use client";

import { useState } from "react";

const files: Record<string, { name: string; type: "file" | "folder"; content?: string }> = {
  "SKILL.md": {
    name: "SKILL.md",
    type: "file",
    content: `---
name: alchemy
description: Quick-start guide and root index for integrating Alchemy APIs.
metadata:
  author: alchemyplatform
  version: "1.0"
---

# AI × Alchemy Integration Guide

## Summary
A self-contained guide for AI agents integrating Alchemy APIs. This
skill gives your agent everything it needs to interact with blockchain
networks through Alchemy's infrastructure.

## Do This First
1. Create a free Alchemy API key at https://dashboard.alchemy.com
2. Choose the right product using the Endpoint Selector below
3. Use the Base URLs + Auth table for the correct endpoint and headers
4. Copy a Quickstart example and test against a testnet first

## Base URLs + Auth (Cheat Sheet)

| Product        | Base URL                                      |
|----------------|-----------------------------------------------|
| Ethereum RPC   | https://eth-mainnet.g.alchemy.com/v2/$KEY     |
| Base RPC       | https://base-mainnet.g.alchemy.com/v2/$KEY    |
| Arbitrum RPC   | https://arb-mainnet.g.alchemy.com/v2/$KEY     |
| Solana RPC     | https://solana-mainnet.g.alchemy.com/v2/$KEY  |
| Polygon RPC    | https://polygon-mainnet.g.alchemy.com/v2/$KEY |
| BNB RPC        | https://bnb-mainnet.g.alchemy.com/v2/$KEY     |

## Endpoint Selector
Choose the right API for your use case:

- Token balances     → Token API
- NFT data           → NFT API
- Transaction history→ Transfers API
- Real-time events   → Webhooks
- DeFi prices        → Token API
- Wallet activity    → Notify API`,
  },
  "README.md": {
    name: "README.md",
    type: "file",
    content: `# Alchemy Skills

LLM-optimized skills for building crypto applications using
Alchemy APIs.

## Quick Start
Paste this prompt into your AI coding tool:

  Install the alchemy skill from
  https://github.com/alchemyplatform/skills

## What's Inside
- SKILL.md       — Root integration guide & endpoint reference
- references/    — Detailed API reference for each product
- spec/          — OpenAPI specifications
- template/      — Starter templates for common use cases

## Supported Products
- Node APIs (100+ chains)
- Token API
- NFT API
- Transfers API
- Webhooks
- Notify API

## License
MIT`,
  },
  "references/": {
    name: "references/",
    type: "folder",
    content: `references/
├── token-api.md
├── nft-api.md
├── transfers-api.md
├── webhooks.md
├── notify-api.md
└── node-rpc.md`,
  },
  "spec/": {
    name: "spec/",
    type: "folder",
    content: `spec/
├── openapi-token.yaml
├── openapi-nft.yaml
├── openapi-transfers.yaml
└── openapi-webhooks.yaml`,
  },
  "template/": {
    name: "template/",
    type: "folder",
    content: `template/
├── SKILL.md          — Template skill file
├── quickstart.py     — Python quickstart
├── quickstart.ts     — TypeScript quickstart
└── quickstart.rs     — Rust quickstart`,
  },
};

const fileOrder = ["references/", "spec/", "template/", "README.md", "SKILL.md"];

export default function Terminal() {
  const [activeFile, setActiveFile] = useState("SKILL.md");
  const [copied, setCopied] = useState(false);

  const content = files[activeFile]?.content || "";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="px-6 pt-20 pb-16 md:pt-20 md:pb-20">
      <div className="mx-auto max-w-4xl">
        <div className="animate-fade-up delay-3 mb-10 text-center">
          <h2 className="text-[32px] leading-[40px] font-semibold tracking-[-0.32px] text-text-primary md:text-[40px] md:leading-[48px] md:tracking-[-0.4px]">
            One skill. Every API.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[18px] leading-[28px] tracking-[0.18px] text-text-secondary">
            Everything your agent needs to build onchain — endpoints,
            references, and starter templates.
          </p>
        </div>

        <div className="animate-fade-up delay-4 overflow-hidden rounded-2xl border border-terminal-border bg-terminal-bg shadow-2xl">
          {/* Title bar */}
          <div className="flex items-center justify-between border-b border-terminal-border bg-terminal-sidebar px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>

            <div className="flex items-center gap-4 text-[12px] leading-[18px] text-terminal-text/60">
              <span className="font-mono">Explore files</span>
            </div>

            <a
              href="https://github.com/alchemyplatform/skills"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-text/40 transition-colors hover:text-terminal-text"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>

          {/* Body */}
          <div className="flex h-[420px]">
            {/* Sidebar */}
            <div className="w-44 shrink-0 overflow-y-auto border-r border-terminal-border bg-black p-3">
              <div className="space-y-0.5">
                {fileOrder.map((key) => {
                  const file = files[key];
                  const isActive = activeFile === key;
                  const isFolder = file.type === "folder";

                  return (
                    <button
                      key={key}
                      onClick={() => setActiveFile(key)}
                      className={`flex w-full cursor-pointer items-center gap-2 rounded-md px-2.5 py-1.5 text-left font-mono text-[12px] leading-[18px] transition-colors ${
                        isActive
                          ? "bg-terminal-text/10 text-terminal-text"
                          : "text-terminal-text/50 hover:bg-terminal-text/5 hover:text-terminal-text/80"
                      }`}
                    >
                      {isFolder ? (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                        </svg>
                      ) : (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                        </svg>
                      )}
                      {file.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content */}
            <div className="relative flex-1 overflow-y-auto bg-black p-5">
              <button
                onClick={handleCopy}
                className="absolute top-3 right-3 cursor-pointer rounded-md p-1.5 text-terminal-text/30 transition-colors hover:text-terminal-text"
                aria-label="Copy file contents"
              >
                {copied ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                )}
              </button>
              <pre className="font-mono text-[14px] leading-[1.5] whitespace-pre-wrap text-terminal-text select-text">
                {content.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    <HighlightLine line={line} />
                  </span>
                ))}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightLine({ line }: { line: string }) {
  if (line.startsWith("# ") || line.startsWith("## "))
    return <span className="font-bold text-terminal-accent">{line}</span>;

  if (line.startsWith("---"))
    return <span className="text-terminal-text/30">{line}</span>;

  if (line.startsWith("- "))
    return (
      <span>
        <span className="text-terminal-orange">- </span>
        <span className="text-terminal-text">{line.slice(2)}</span>
      </span>
    );

  if (/^\d+\./.test(line))
    return (
      <span>
        <span className="text-terminal-orange">{line.slice(0, line.indexOf(".") + 1)} </span>
        <span className="text-terminal-text">{line.slice(line.indexOf(".") + 2)}</span>
      </span>
    );

  if (line.startsWith("|"))
    return <span className="text-terminal-purple">{line}</span>;

  if (line.includes("https://"))
    return (
      <span>
        {line.split(/(https?:\/\/[^\s|)]+)/g).map((part, i) =>
          part.startsWith("http") ? (
            <span key={i} className="text-terminal-accent underline">
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </span>
    );

  if (line.startsWith("name:") || line.startsWith("description:") || line.startsWith("  "))
    if (line.includes(":")) {
      const [key, ...rest] = line.split(":");
      return (
        <span>
          <span className="text-terminal-green">{key}</span>
          <span className="text-terminal-text/60">:</span>
          <span className="text-terminal-text">{rest.join(":")}</span>
        </span>
      );
    }

  if (line.startsWith("├") || line.startsWith("└") || line.startsWith("│"))
    return <span className="text-terminal-text/40">{line}</span>;

  return <span>{line}</span>;
}
