import {
  Mic2,
  Percent,
  Wind,
  Bike,
  Camera,
  DollarSign,
  HelpCircle,
  Hotel,
  Users,
  Info,
} from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";

const services = [
  {
    icon: Mic2,
    title: "ЗАКАЗАТЬ БАНКЕТ ИЛИ ВЫСТУПИТЬ",
    description: "Аренда зала, выступления, мероприятия",
  },
  {
    icon: Percent,
    title: "АКЦИИ И БОНУСЫ",
    description: "Спецпредложения и бонусная программа",
  },
  {
    icon: Wind,
    title: "КАЛЬЯННОЕ МЕНЮ",
    description: "Премиальные смеси и авторские чаши",
  },
  {
    icon: Bike,
    title: "ДОСТАВКА БЛЮД И КАЛЬЯНОВ",
    description: "Быстрая доставка еды и напитков",
  },
  {
    icon: Camera,
    title: "ФОТО, ВИДЕО УСЛУГИ",
    description: "Профессиональная съёмка мероприятий",
  },
  {
    icon: DollarSign,
    title: "ОБМЕН РУБЛЕЙ",
    description: "Выгодный курс, быстро и безопасно",
  },
  {
    icon: HelpCircle,
    title: "ЗАДАТЬ ВОПРОС",
    description: "Мы на связи 24/7, ответим на всё",
  },
  {
    icon: Hotel,
    title: "ОТЕЛЬ",
    description: "Комфортное проживание на Фукуоке",
  },
  {
    icon: Users,
    title: "СООБЩЕСТВО",
    description: "Люди, знакомства, мероприятия, общение",
  },
  {
    icon: Info,
    title: "ИНФО-ФУКУОК",
    description: "Вся полезная информация об острове",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {services.map((s) => (
            <ServiceCard
              key={s.title}
              icon={<s.icon size={18} />}
              title={s.title}
              description={s.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
