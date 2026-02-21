export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] py-4">
      <div className="mx-auto flex w-full max-w-[1170px] items-center justify-between px-6">
        <a href="/" aria-label="Alchemy home">
          <img src="/blueLogo.svg" alt="Alchemy" height={30} />
        </a>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center px-3 py-2 text-base font-medium leading-6 text-[#6b7280] transition-colors duration-150 hover:text-[#212121] focus-visible:shadow-[0_0_4px_rgba(36,0,255,0.7)] focus-visible:outline-none"
          >
            Contact Sales
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-[6px] rounded-lg bg-[#363ff9] px-4 py-2 text-base font-semibold leading-6 text-white transition-[background,box-shadow] duration-150 hover:bg-[#5167ff] hover:shadow-[0_1px_2px_rgba(55,65,81,0.05),0_12px_16px_rgba(55,65,81,0.08),0_4px_6px_rgba(55,65,81,0.05)] active:bg-[#242c8b] focus-visible:shadow-[0_0_4px_rgba(36,0,255,0.7)] focus-visible:outline-none"
          >
            Start building
          </a>
        </div>
      </div>
    </header>
  );
}
