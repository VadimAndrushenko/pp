import type { MenuData } from "./menu-data"

export const nonAlcoholMenuData: MenuData = {
  id: "non-alcohol",
  title: "Безалкогольное меню",
  subtitle: "Кофе, чаи, соки, смузи, лимонады и моктейли",
  image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=1200&h=700&fit=crop",
  sections: [
    {
      id: "coffee",
      title: "Кофе",
      dishes: [
        {
          name: "Espresso",
          weight: "30 мл",
          price: "59 000",
        },
        {
          name: "Double Espresso",
          weight: "60 мл",
          price: "69 000",
        },
        {
          name: "Americano",
          weight: "200 мл",
          price: "69 000",
        },
        {
          name: "Cappuccino",
          weight: "200 мл",
          price: "79 000",
        },
        {
          name: "Latte",
          weight: "250 мл",
          price: "89 000",
        },
      ],
    },
    {
      id: "vietnamese-coffee",
      title: "Вьетнамский кофе",
      dishes: [
        {
          name: "Vietnamese Coffee with Hot Milk",
          description: "Кофе с горячим молоком",
          weight: "120 мл",
          price: "59 000",
        },
        {
          name: "Vietnamese Coffee with Condensed Milk",
          description: "Кофе со сгущённым молоком",
          weight: "120 мл",
          price: "59 000",
        },
        {
          name: "Black Vietnamese Coffee — Hot",
          description: "Чёрный вьетнамский кофе",
          weight: "120 мл",
          price: "49 000",
        },
        {
          name: "Black Vietnamese Coffee — Iced",
          description: "Чёрный вьетнамский кофе со льдом",
          weight: "250 мл",
          price: "49 000",
        },
      ],
    },
    {
      id: "tea",
      title: "Чай",
      dishes: [
        {
          name: "English Breakfast",
          price: "79 000",
        },
        {
          name: "Earl Grey",
          price: "79 000",
        },
        {
          name: "Green Tea",
          price: "79 000",
        },
        {
          name: "Jasmine Green Tea",
          price: "79 000",
        },
        {
          name: "Peppermint Tea",
          price: "79 000",
        },
        {
          name: "Chamomile Tea",
          price: "79 000",
        },
      ],
    },
    {
      id: "fruit-tea",
      title: "Авторский фруктовый чай",
      subtitle: "Подаётся в кувшине 800 мл",
      dishes: [
        {
          name: "Ginger & Lemongrass",
          description: "Имбирь · лемонграсс · мёд · зелёный чай",
          weight: "800 мл",
          price: "99 000",
        },
        {
          name: "Mint Apple",
          description: "Мята · яблоко · лимон · мёд · зелёный чай",
          weight: "800 мл",
          price: "99 000",
        },
        {
          name: "Tropical Mix — Чай",
          description: "Манго · маракуйя · зелёный чай",
          weight: "800 мл",
          price: "99 000",
        },
        {
          name: "Mango Sunrise",
          description: "Манго · апельсин · зелёный чай",
          weight: "800 мл",
          price: "99 000",
        },
        {
          name: "Passion Fruit Citrus",
          description: "Маракуйя · апельсин · лайм · зелёный чай",
          weight: "800 мл",
          price: "99 000",
        },
      ],
    },
    {
      id: "juices",
      title: "Свежевыжатые соки",
      subtitle: "Порция 200 мл",
      dishes: [
        {
          name: "Orange",
          weight: "200 мл",
          price: "79 000",
        },
        {
          name: "Pineapple",
          weight: "200 мл",
          price: "79 000",
        },
        {
          name: "Passion Fruit",
          weight: "200 мл",
          price: "79 000",
        },
        {
          name: "Watermelon",
          weight: "200 мл",
          price: "79 000",
        },
        {
          name: "Pineapple & Orange",
          weight: "200 мл",
          price: "79 000",
        },
        {
          name: "Orange & Passion Fruit",
          weight: "200 мл",
          price: "79 000",
        },
        {
          name: "Pineapple & Passion Fruit",
          weight: "200 мл",
          price: "79 000",
        },
        {
          name: "Tomato Juice",
          description: "Томатный сок",
          weight: "200 мл",
          price: "49 000",
        },
      ],
    },
    {
      id: "smoothies",
      title: "Смузи",
      subtitle: "Порция 200 мл",
      dishes: [
        {
          name: "Mango",
          weight: "200 мл",
          price: "79 000",
        },
        {
          name: "Banana",
          weight: "200 мл",
          price: "79 000",
        },
        {
          name: "Pineapple",
          weight: "200 мл",
          price: "79 000",
        },
        {
          name: "Mango & Passion Fruit",
          weight: "200 мл",
          price: "79 000",
        },
        {
          name: "Mango & Banana",
          weight: "200 мл",
          price: "79 000",
        },
        {
          name: "Mango & Orange",
          weight: "200 мл",
          price: "79 000",
        },
        {
          name: "Banana & Orange",
          weight: "200 мл",
          price: "79 000",
        },
        {
          name: "Pineapple & Banana",
          weight: "200 мл",
          price: "79 000",
        },
        {
          name: "Tropical Mix",
          description: "Манго · ананас · маракуйя",
          weight: "200 мл",
          price: "89 000",
        },
      ],
    },
    {
      id: "soft-drinks",
      title: "Газированные напитки",
      dishes: [
        {
          name: "Pepsi",
          price: "39 000",
        },
        {
          name: "Coca-Cola",
          price: "39 000",
        },
        {
          name: "Coca-Cola Zero",
          price: "39 000",
        },
        {
          name: "Fanta",
          price: "39 000",
        },
        {
          name: "Sprite",
          price: "39 000",
        },
        {
          name: "Schweppes",
          price: "39 000",
        },
      ],
    },
    {
      id: "water",
      title: "Вода",
      dishes: [
        {
          name: "Aquafina",
          price: "29 000",
        },
        {
          name: "Perrier",
          price: "99 000",
        },
      ],
    },
    {
      id: "lemonades",
      title: "Авторские лимонады",
      subtitle: "Кувшин 1,6 л",
      dishes: [
        {
          name: "Virgin Mojito — Кувшин 1,6 л",
          description: "Лайм · мята · сахарный сироп · сода",
          weight: "1,6 л",
          price: "169 000",
        },
        {
          name: "Piña Colada Lemonade",
          description: "Ананас · кокос · лайм · сода",
          weight: "1,6 л",
          price: "169 000",
        },
        {
          name: "Mango & Passion Fruit",
          description: "Манго · маракуйя · лайм · сода",
          weight: "1,6 л",
          price: "169 000",
        },
        {
          name: "Bubble Gum",
          description: "Bubble Gum сироп · лимон · сода",
          weight: "1,6 л",
          price: "169 000",
        },
      ],
    },
    {
      id: "mocktails",
      title: "Моктейли / 0%",
      dishes: [
        {
          name: "Virgin Mojito",
          description: "Лайм · мята · сахарный сироп · сода",
          weight: "300 мл",
          price: "129 000",
        },
        {
          name: "Passion Mango Fizz",
          description: "Маракуйя · манго · лайм · сода",
          weight: "300 мл",
          price: "149 000",
        },
        {
          name: "Tropical Sunrise",
          description: "Апельсин · ананас · маракуйя · гренадин",
          weight: "300 мл",
          price: "129 000",
        },
      ],
    },
  ],
}

export const nonAlcoholMenus: MenuData[] = nonAlcoholMenuData.sections.map((section) => ({
  id: section.id,
  title: section.title,
  subtitle: section.subtitle ?? "",
  image: nonAlcoholMenuData.image,
  group: "non-alcohol",
  sections: [section],
}))