export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-[family-name:var(--font-script)] text-2xl text-white/80">
          oj labs
        </p>
        <p className="text-white/40 text-sm">
          {new Date().getFullYear()} OJ Labs. Crafted with care.
        </p>
      </div>
    </footer>
  )
}
