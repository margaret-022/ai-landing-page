export default function Footer() {
  return (
    <footer className="bg-white px-6 pt-4 pb-12">
      <div className="mx-auto max-w-[1170px]">
        <div className="mb-4 border-t border-[#d6e0ed]" />
        <div className="flex items-center gap-8">
          <a href="/" aria-label="Alchemy home">
            <img src="/greylogo.svg" alt="Alchemy" height={24} />
          </a>

          <p className="min-w-0 flex-1 text-right text-[14px] leading-none text-text-secondary">
            2026 Alchemy Insights, Inc. · Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
