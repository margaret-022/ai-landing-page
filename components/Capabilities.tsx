const capabilities = [
  {
    title: "Agentic Signup",
    description: "API key generation for agents, powered by x402.",
    badge: "Coming Soon",
  },
  {
    title: "Node APIs",
    description:
      "Core RPC APIs for 100+ chains with reliable read/write access for agent workflows.",
    href: "https://github.com/alchemyplatform/skills/blob/main/references/node-overview.md",
  },
  {
    title: "Data APIs",
    description:
      "Get onchain data across assets, including tokens, NFTs, prices, balances, and portfolio views.",
    href: "https://github.com/alchemyplatform/skills/blob/main/references/data-overview.md",
  },
  {
    title: "Solana APIs",
    description:
      "Yellowstone gRPC streams and DAS APIs built for high-throughput Solana applications.",
    href: "https://github.com/alchemyplatform/skills/blob/main/references/solana-overview.md",
  },
  {
    title: "Webhooks",
    description:
      "Push onchain events directly to your backend with managed delivery and signature verification.",
    href: "https://github.com/alchemyplatform/skills/blob/main/references/webhooks-overview.md",
  },
  {
    title: "Recipes & Tutorials",
    description:
      "Practical crypto development recipes and tutorials to ship integrations faster.",
    href: "https://github.com/alchemyplatform/skills/blob/main/references/recipes-overview.md",
  },
];

export default function Capabilities() {
  return (
    <section className="relative overflow-hidden px-6 pt-6 pb-16 md:pt-20 md:pb-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/bg-28.png')] bg-cover bg-center bg-no-repeat opacity-70"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl">
        <h2 className="mb-[30px] text-center text-[36px] leading-[44px] font-semibold tracking-[-0.36px] text-black">
          APIs that fit your project&apos;s needs
        </h2>

        <div className="overflow-hidden rounded-2xl border border-white/40 bg-white/50 backdrop-blur-sm">
          {(() => {
            let num = 0;
            const numbered = capabilities.map((cap) => ({
              ...cap,
              displayNum: cap.badge ? null : ++num,
            }));
            return (
              <>
                <div className="grid grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
                  {numbered.slice(0, 3).map((cap) => (
                    <CapCard key={cap.title} cap={cap} />
                  ))}
                </div>
                <div className="grid grid-cols-1 divide-y divide-border border-t border-border md:grid-cols-3 md:divide-x md:divide-y-0">
                  {numbered.slice(3, 6).map((cap) => (
                    <CapCard key={cap.title} cap={cap} />
                  ))}
                </div>
              </>
            );
          })()}
        </div>
      </div>
    </section>
  );
}

function CapCard({
  cap,
}: {
  cap: { title: string; description: string; badge?: string; href?: string; displayNum?: number | null };
}) {
  const content = (
    <>
      <div className="flex items-center gap-3">
        {cap.badge ? (
          <span className="rounded-full border border-border px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.8px] text-text-tertiary uppercase">
            {cap.badge}
          </span>
        ) : cap.displayNum != null ? (
          <span className="font-mono text-[12px] leading-[18px] font-medium text-text-tertiary">
            {String(cap.displayNum).padStart(2, "0")}
          </span>
        ) : null}
      </div>
      <h3 className="text-[16px] leading-[24px] font-semibold text-text-primary">
        {cap.title}
      </h3>
      <p className="text-[14px] leading-[20px] tracking-[0.14px] text-text-secondary">
        {cap.description}
      </p>
    </>
  );

  if (cap.href) {
    return (
      <a
        href={cap.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col gap-3 p-6 text-left transition-colors duration-150 hover:bg-white/40"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex flex-col gap-3 p-6 text-left">
      {content}
    </div>
  );
}
