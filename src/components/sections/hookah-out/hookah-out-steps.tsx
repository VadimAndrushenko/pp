import { ArrowRight } from "lucide-react"

const steps = [
  "Напишите нам в Telegram или WhatsApp",
  "Выберите вкус и крепость кальяна",
  "Сообщите адрес и удобное время",
  "Мы привезём и всё подготовим для вас",
  "Наслаждайтесь отдыхом!",
]

export function HookahOutSteps({ className }: { className?: string }) {
  return (
    <div className={`section-heading ${className}`}>
      <h2 className="text-center font-display font-bold uppercase tracking-wide text-text-primary mb-8">
        Как заказать
      </h2>

      <div className="flex items-start justify-between max-xl:flex-wrap max-xl:justify-center max-xl:gap-x-4 max-xl:gap-y-8">
        {steps.map((label, i) => (
          <div key={label} className="flex items-start">
            <div className="section-heading flex flex-col items-center gap-4 w-48 max-xl:w-40 max-sm:w-32 text-center">
              <span className="flex items-center justify-center w-20 h-20 max-xl:w-16 max-xl:h-16 max-sm:w-14 max-sm:h-14 rounded-xl bg-accent text-white font-display font-bold text-3xl max-xl:text-2xl max-sm:text-xl">
                {i + 1}
              </span>
              <p className="text-text-primary font-medium leading-tight">
                {label}
              </p>
            </div>
            {i < steps.length - 1 && (
              <ArrowRight className="w-10 h-10 max-xl:w-8 max-xl:h-8 max-sm:w-6 max-sm:h-6 text-accent-dim mt-7 max-xl:mt-6 max-sm:mt-5 shrink-0 max-sm:hidden" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}