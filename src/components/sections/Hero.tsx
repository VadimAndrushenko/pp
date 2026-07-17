export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, #ff6a00 0%, transparent 50%), radial-gradient(circle at 70% 30%, #ff2d55 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 w-full">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight uppercase font-heading">
              РЕСТОРАН НА ФУКУОКЕ,
              <br />
              ГДЕ КАЖДЫЙ ДЕНЬ
              <br />
              <span className="text-[#ff6a00]">ЧТО-ТО ПРОИСХОДИТ!</span>
            </h1>

            <div className="mt-4 flex flex-wrap gap-x-2 text-sm sm:text-base font-semibold text-white/80">
              <span className="text-[#ff6a00]">●</span> РУССКАЯ
              <span className="text-[#ff6a00]"> ●</span> КАВКАЗСКАЯ
              <span className="text-[#ff6a00]"> ●</span> ВОСТОЧНАЯ
              <br className="sm:hidden" />
              ЕВРОПЕЙСКАЯ
              <span className="text-[#ff6a00]"> ●</span> АЗИАТСКАЯ КУХНЯ
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative aspect-[3/4] max-w-sm mx-auto w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#2a1414] to-[#1a1a1a] border border-white/10">
              <div className="absolute inset-0 flex items-end justify-center pb-4">
                <div className="text-center">
                  <div className="text-6xl mb-2">👤</div>
                  <div className="text-xs text-gray-400">
                    Фото пары (заглушка)
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-2 -right-2 md:-right-4 md:-top-4 bg-white rounded-2xl px-4 py-2 shadow-lg max-w-[200px]">
              <p className="text-xs font-bold text-black leading-tight">
                В ЭТОМ РЕСТОРАНЕ РЕАЛЬНО ЖИЗНЬ СТАНОВИТСЯ{" "}
                <span className="text-[#ff6a00]">ВКУСНОЙ</span>!
              </p>
              <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
