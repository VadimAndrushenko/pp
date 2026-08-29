import type { MenuData } from "./menu-data"

export const alcoholMenuData: MenuData = {
  id: "alcohol",
  title: "Алкогольное меню",
  subtitle: "Крепкие напитки, вина и авторские коктейли — по международной классификации",
  image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&h=700&fit=crop",
  sections: [
    {
      id: "vodka",
      title: "Водка",
      dishes: [
        {
          name: "Ta Vodka",
          description: "Вьетнам · Водка",
          weight: "50 мл",
          price: "119 000 VND",
        },
        {
          name: "Smirnoff",
          description: "Международная · Водка",
          weight: "50 мл",
          price: "149 000 VND",
        },
        {
          name: "Absolut",
          description: "Швеция · Водка",
          weight: "50 мл",
          price: "179 000 VND",
        },
        {
          name: "Beluga Noble",
          description: "Премиальная водка",
          weight: "50 мл",
          badges: ["Премиум"],
          price: "349 000 VND",
        },
        {
          name: "Grey Goose",
          description: "Франция · Премиальная водка",
          weight: "50 мл",
          badges: ["Премиум"],
          price: "399 000 VND",
        },
      ],
    },
    {
      id: "gin",
      title: "Джин",
      dishes: [
        {
          name: "Beefeater London Dry",
          description: "Великобритания · London Dry Gin",
          weight: "50 мл",
          price: "139 000 VND",
        },
        {
          name: "Bombay Sapphire",
          description: "Великобритания · London Dry Gin",
          weight: "50 мл",
          price: "189 000 VND",
        },
        {
          name: "Lady Triệu Contemporary",
          description: "Вьетнам · Современный джин",
          weight: "50 мл",
          price: "249 000 VND",
        },
      ],
    },
    {
      id: "tequila",
      title: "Текила (50 мл)",
      dishes: [
        {
          name: "Olmeca Silver",
          description: "Мексика · Серебряная текила",
          weight: "50 мл",
          price: "179 000 VND",
        },
        {
          name: "Don Julio Blanco",
          description: "Мексика · 100% Blue Agave",
          weight: "50 мл",
          badges: ["Премиум"],
          price: "389 000 VND",
        },
      ],
    },
    {
      id: "rum",
      title: "Ром (50 мл)",
      dishes: [
        {
          name: "ISC Mango Rum",
          description: "Вьетнам · Ром со вкусом манго",
          weight: "50 мл",
          price: "99 000 VND",
        },
        {
          name: "Havana Club Añejo 3 Años",
          description: "Куба · Белый выдержанный ром",
          weight: "50 мл",
          price: "149 000 VND",
        },
        {
          name: "Bacardi White Rum",
          description: "Пуэрто-Рико · Белый ром",
          weight: "50 мл",
          price: "149 000 VND",
        },
        {
          name: "Bacardi Gold Rum",
          description: "Пуэрто-Рико · Золотой ром",
          weight: "50 мл",
          price: "159 000 VND",
        },
        {
          name: "Captain Morgan Original Black",
          description: "Карибы · Тёмный ром",
          weight: "50 мл",
          price: "169 000 VND",
        },
        {
          name: "Bacardi Reserva Ocho 8 Años",
          description: "Пуэрто-Рико · Премиальный выдержанный ром",
          weight: "50 мл",
          badges: ["Премиум"],
          price: "249 000 VND",
        },
      ],
    },
    {
      id: "whisky",
      title: "Виски (50 мл)",
      dishes: [
        {
          name: "Johnnie Walker Red Label",
          description: "Шотландия · Купажированный скотч",
          weight: "50 мл",
          price: "149 000 VND",
        },
        {
          name: "Ballantine's Finest",
          description: "Шотландия · Купажированный скотч",
          weight: "50 мл",
          price: "159 000 VND",
        },
        {
          name: "Jameson",
          description: "Ирландия · Ирландский виски",
          weight: "50 мл",
          price: "179 000 VND",
        },
        {
          name: "Johnnie Walker Black Label",
          description: "Шотландия · Купажированный скотч",
          weight: "50 мл",
          price: "269 000 VND",
        },
        {
          name: "Chivas Regal 12 Y.O.",
          description: "Шотландия · Купажированный скотч",
          weight: "50 мл",
          price: "299 000 VND",
        },
        {
          name: "Jack Daniel's No.7",
          description: "США · Теннессийский виски",
          weight: "50 мл",
          price: "329 000 VND",
        },
        {
          name: "Glenfiddich 12 Y.O.",
          description: "Шотландия · Односолодовый скотч",
          weight: "50 мл",
          price: "499 000 VND",
        },
        {
          name: "The Macallan 12 Sherry Oak",
          description: "Шотландия · Односолодовый скотч",
          weight: "50 мл",
          badges: ["Премиум"],
          price: "649 000 VND",
        },
      ],
    },
    {
      id: "cognac",
      title: "Коньяк и бренди",
      subtitle: "Линейка будет добавлена после окончательного утверждения.",
      dishes: [],
    },
    {
      id: "liqueurs",
      title: "Ликёры (50 мл)",
      dishes: [
        {
          name: "Malibu",
          description: "Карибы · Кокосовый ликёр",
          weight: "50 мл",
          price: "149 000 VND",
        },
        {
          name: "Kahlúa",
          description: "Мексика · Кофейный ликёр",
          weight: "50 мл",
          price: "149 000 VND",
        },
        {
          name: "Baileys Original",
          description: "Ирландия · Сливочный ликёр",
          weight: "50 мл",
          price: "149 000 VND",
        },
        {
          name: "Triple Sec",
          description: "Апельсиновый ликёр",
          weight: "50 мл",
          price: "149 000 VND",
        },
        {
          name: "Cointreau",
          description: "Франция · Апельсиновый ликёр",
          weight: "50 мл",
          price: "159 000 VND",
        },
        {
          name: "Jägermeister",
          description: "Германия · Травяной ликёр",
          weight: "50 мл",
          price: "159 000 VND",
        },
        {
          name: "Frangelico",
          description: "Италия · Ореховый ликёр",
          weight: "50 мл",
          badges: ["Премиум"],
          price: "179 000 VND",
        },
      ],
    },
    {
      id: "vermouth",
      title: "Аперитивы и вермуты (100 мл)",
      dishes: [
        {
          name: "Aperol",
          description: "Италия · Аперитив",
          weight: "100 мл",
          price: "189 000 VND",
        },
        {
          name: "Martini Bianco",
          description: "Италия · Вермут",
          weight: "100 мл",
          price: "149 000 VND",
        },
        {
          name: "Martini Extra Dry",
          description: "Италия · Вермут",
          weight: "100 мл",
          price: "149 000 VND",
        },
        {
          name: "Martini Rosso",
          description: "Италия · Вермут",
          weight: "100 мл",
          price: "149 000 VND",
        },
      ],
    },
    {
      id: "sparkling",
      title: "Игристое вино",
      subtitle: "Martini Brut — цена уточняется после проверки закупки.",
      dishes: [
        {
          name: "Château Dalat Sparkling — Sweet (150 мл)",
          description: "Вьетнам · Сладкое · Лёгкое · Фруктовое",
          weight: "150 мл",
          price: "99 000 VND",
        },
        {
          name: "Château Dalat Sparkling — Sweet (750 мл)",
          description: "Вьетнам · Сладкое · Лёгкое · Фруктовое",
          weight: "750 мл",
          price: "499 000 VND",
        },
        {
          name: "Martini Asti (150 мл)",
          description: "Италия · Сладкое · Ароматное · Фруктовое",
          weight: "150 мл",
          price: "249 000 VND",
        },
        {
          name: "Martini Asti (750 мл)",
          description: "Италия · Сладкое · Ароматное · Фруктовое",
          weight: "750 мл",
          price: "1 290 000 VND",
        },
        {
          name: "Mionetto Prosecco Brut (150 мл)",
          description: "Италия · Сухое · Свежий просекко",
          weight: "150 мл",
          price: "279 000 VND",
        },
        {
          name: "Mionetto Prosecco Brut (750 мл)",
          description: "Италия · Сухое · Свежий просекко",
          weight: "750 мл",
          price: "1 390 000 VND",
        },
      ],
    },
    {
      id: "white-wine",
      title: "Белое вино",
      dishes: [
        {
          name: "Château Dalat Special Sauvignon Blanc (150 мл)",
          description: "Вьетнам · Совиньон Блан · Лёгкое и свежее",
          weight: "150 мл",
          price: "129 000 VND",
        },
        {
          name: "Château Dalat Special Sauvignon Blanc (750 мл)",
          description: "Вьетнам · Совиньон Блан · Лёгкое и свежее",
          weight: "750 мл",
          price: "599 000 VND",
        },
        {
          name: "Tavernello Pinot Grigio (150 мл)",
          description: "Италия · Пино Гриджио · Лёгкое и свежее",
          weight: "150 мл",
          price: "149 000 VND",
        },
        {
          name: "Tavernello Pinot Grigio (750 мл)",
          description: "Италия · Пино Гриджио · Лёгкое и свежее",
          weight: "750 мл",
          price: "699 000 VND",
        },
        {
          name: "Jacob's Creek Chardonnay (750 мл)",
          description: "Австралия · Шардоне · Мягкое и фруктовое",
          weight: "750 мл",
          price: "990 000 VND",
        },
        {
          name: "Kim Crawford Sauvignon Blanc (750 мл)",
          description: "Новая Зеландия · Мальборо · Хрустящее и ароматное",
          weight: "750 мл",
          badges: ["Премиум"],
          price: "1 290 000 VND",
        },
      ],
    },
    {
      id: "rose-wine",
      title: "Розовое вино",
      dishes: [
        {
          name: "Fleurs de Prairie Côtes de Provence Rosé (150 мл)",
          description: "Франция · Прованс · Сухое и свежее",
          weight: "150 мл",
          badges: ["Премиум"],
          price: "199 000 VND",
        },
        {
          name: "Fleurs de Prairie Côtes de Provence Rosé (750 мл)",
          description: "Франция · Прованс · Сухое и свежее",
          weight: "750 мл",
          badges: ["Премиум"],
          price: "890 000 VND",
        },
      ],
    },
    {
      id: "red-wine",
      title: "Красное вино",
      dishes: [
        {
          name: "Château Dalat Special Cabernet Sauvignon (150 мл)",
          description: "Вьетнам · Каберне Совиньон · Гладкое и фруктовое",
          weight: "150 мл",
          price: "129 000 VND",
        },
        {
          name: "Château Dalat Special Cabernet Sauvignon (750 мл)",
          description: "Вьетнам · Каберне Совиньон · Гладкое и фруктовое",
          weight: "750 мл",
          price: "599 000 VND",
        },
        {
          name: "Jacob's Creek Cabernet Sauvignon (150 мл)",
          description: "Австралия · Каберне Совиньон · Насыщенное и мягкое",
          weight: "150 мл",
          price: "179 000 VND",
        },
        {
          name: "Jacob's Creek Cabernet Sauvignon (750 мл)",
          description: "Австралия · Каберне Совиньон · Насыщенное и мягкое",
          weight: "750 мл",
          price: "990 000 VND",
        },
        {
          name: "Terrazas de los Andes Reserva Malbec (750 мл)",
          description: "Аргентина · Мендоса · Мальбек · Насыщенное и мягкое",
          weight: "750 мл",
          badges: ["Премиум"],
          price: "1 590 000 VND",
        },
      ],
    },
    {
      id: "beer-local",
      title: "Пиво — Local",
      dishes: [
        {
          name: "Saigon Lager",
          description: "Вьетнамское светлое пиво",
          price: "49 000 VND",
        },
        {
          name: "Saigon Special",
          description: "Вьетнамское светлое пиво",
          price: "69 000 VND",
        },
        {
          name: "Bia Hoi Hanoi",
          description: "Свежее вьетнамское пиво",
          price: "69 000 VND",
        },
        {
          name: "Tiger",
          description: "Вьетнамский светлый лагер",
          price: "79 000 VND",
        },
      ],
    },
    {
      id: "beer-international",
      title: "Пиво — International",
      dishes: [
        {
          name: "Heineken",
          description: "Международный светлый лагер",
          price: "89 000 VND",
        },
      ],
    },
    {
      id: "beer-specialty",
      title: "Пиво — Specialty",
      dishes: [
        {
          name: "Kronenbourg",
          description: "Французский лагер",
          price: "119 000 VND",
        },
        {
          name: "Hoegaarden",
          description: "Бельгийское пшеничное",
          price: "119 000 VND",
        },
        {
          name: "Corona",
          description: "Мексиканский светлый лагер",
          price: "129 000 VND",
        },
        {
          name: "Hoegaarden Rosée",
          description: "Бельгийское пшеничное с малиной",
          price: "129 000 VND",
        },
        {
          name: "Leffe Blonde",
          description: "Бельгийское аббатское",
          price: "159 000 VND",
        },
        {
          name: "Leffe Brown",
          description: "Бельгийское аббатское",
          price: "159 000 VND",
        },
      ],
    },
    {
      id: "beer-draft",
      title: "Разливное пиво — Draft",
      dishes: [
        {
          name: "Sapporo Light (0,33 л)",
          description: "Японский светлый лагер",
          weight: "0,33 л",
          price: "119 000 VND",
        },
        {
          name: "Sapporo Light (0,5 л)",
          description: "Японский светлый лагер",
          weight: "0,5 л",
          price: "159 000 VND",
        },
        {
          name: "Sapporo Dark (0,33 л)",
          description: "Японский тёмный лагер",
          weight: "0,33 л",
          price: "129 000 VND",
        },
        {
          name: "Sapporo Dark (0,5 л)",
          description: "Японский тёмный лагер",
          weight: "0,5 л",
          price: "169 000 VND",
        },
      ],
    },
    {
      id: "beer-zero",
      title: "Пиво — Zero",
      dishes: [
        {
          name: "Heineken 0.0",
          description: "Безалкогольный светлый лагер",
          price: "79 000 VND",
        },
      ],
    },
    {
      id: "cider",
      title: "Сидр — Cider",
      dishes: [
        {
          name: "Somersby Apple",
          description: "Яблочный сидр",
          price: "79 000 VND",
        },
        {
          name: "Somersby Bay",
          description: "Ягодный сидр",
          price: "89 000 VND",
        },
      ],
    },
    {
      id: "classic-cocktails",
      title: "Классические коктейли",
      dishes: [
        {
          name: "Cucumber Gin & Tonic",
          composition: "Beefeater · огурец · лайм · тоник",
          price: "199 000 VND",
        },
        {
          name: "Passion Fruit Gin & Tonic",
          composition: "Beefeater · маракуйя · лайм · тоник",
          price: "219 000 VND",
        },
        {
          name: "Mojito",
          composition: "Havana Club 3 Años · лайм · мята · сода",
          price: "179 000 VND",
        },
        {
          name: "Daiquiri",
          composition: "Havana Club 3 Años · лайм · сахар",
          price: "179 000 VND",
        },
        {
          name: "Banana Daiquiri",
          composition: "Bacardi White · банан · лайм",
          price: "189 000 VND",
        },
        {
          name: "Cuba Libre",
          composition: "Bacardi Gold · кола · лайм",
          price: "179 000 VND",
        },
        {
          name: "Margarita",
          composition: "Olmeca Silver · Cointreau · лайм",
          price: "199 000 VND",
        },
        {
          name: "Passion Fruit Margarita",
          composition: "Olmeca Silver · Cointreau · маракуйя · лайм",
          price: "219 000 VND",
        },
        {
          name: "Tequila Sunrise",
          composition: "Olmeca Silver · апельсин · гренадин",
          price: "189 000 VND",
        },
        {
          name: "Whiskey Sour",
          composition: "Jameson · лимон · сахар · Ангостура",
          price: "219 000 VND",
        },
        {
          name: "Old Fashioned",
          composition: "Johnnie Walker Black Label · сахар · Ангостура",
          price: "249 000 VND",
        },
        {
          name: "Whisky Highball",
          composition: "Jameson · сода · лимон",
          price: "199 000 VND",
        },
        {
          name: "Espresso Martini",
          composition: "Absolut · Kahlúa · эспрессо",
          price: "229 000 VND",
        },
        {
          name: "White Russian",
          composition: "водка · Kahlúa · сливки",
          price: "199 000 VND",
        },
        {
          name: "Long Island Iced Tea",
          composition: "водка · Beefeater · Olmeca Silver · Bacardi White · Triple Sec · лимон · кола",
          price: "249 000 VND",
        },
        {
          name: "Bloody Mary",
          composition: "водка · томатный сок · лимон · специи",
          price: "219 000 VND",
        },
        {
          name: "Aperol Spritz",
          composition: "Aperol · Mionetto Prosecco Brut · сода",
          price: "219 000 VND",
        },
        {
          name: "French 75",
          composition: "Beefeater · лимон · сахар · Mionetto Prosecco Brut",
          price: "229 000 VND",
        },
      ],
    },
    {
      id: "highballs",
      title: "Хайболлы и простые коктейли",
      dishes: [
        {
          name: "Whisky Cola",
          composition: "Ballantine's Finest · кола · лайм",
          price: "169 000 VND",
        },
        {
          name: "Vodka Orange",
          composition: "Absolut · свежевыжатый апельсиновый сок",
          price: "169 000 VND",
        },
        {
          name: "Tequila Boom",
          composition: "Olmeca Silver · лимонно-лаймовая сода",
          price: "179 000 VND",
        },
      ],
    },
    {
      id: "tropical-cocktails",
      title: "Тропические коктейли",
      dishes: [
        {
          name: "Mango Rum Sour",
          composition: "ISC Mango Rum · манго · лайм",
          price: "199 000 VND",
        },
        {
          name: "Pineapple Rum Crush",
          composition: "Bacardi White · ананас · лайм",
          price: "199 000 VND",
        },
        {
          name: "Coconut Colada",
          composition: "Bacardi White · ананас · кокос · сливки",
          price: "229 000 VND",
        },
        {
          name: "Passion Fruit Daiquiri",
          composition: "Havana Club 3 Años · маракуйя · лайм · сахар",
          price: "199 000 VND",
        },
        {
          name: "Tropical Punch",
          composition: "Bacardi White · ананас · апельсин · манго · лайм",
          price: "199 000 VND",
        },
      ],
    },
    {
      id: "signature-cocktails",
      title: "Сигнатурные коктейли",
      dishes: [
        {
          name: "Phu Quoc Sunset",
          composition: "Olmeca Silver · маракуйя · апельсин · лайм · гренадин",
          badges: ["Премиум"],
          price: "229 000 VND",
        },
        {
          name: "Island 5PM",
          composition: "Bacardi Gold · ананас · манго · лайм · ваниль",
          badges: ["Премиум"],
          price: "249 000 VND",
        },
        {
          name: "Black Pearl",
          composition: "Bacardi Reserva Ocho · Kahlúa · эспрессо · кокос · сливки",
          badges: ["Премиум"],
          price: "269 000 VND",
        },
      ],
    },
    {
      id: "shots",
      title: "Шоты (40 мл)",
      dishes: [
        {
          name: "B-52",
          composition: "Kahlúa · Baileys · Triple Sec",
          weight: "40 мл",
          price: "129 000 VND",
        },
        {
          name: "Russian Flag",
          composition: "гренадин · водка · Blue Curaçao",
          weight: "40 мл",
          price: "129 000 VND",
        },
        {
          name: "Rainbow Shot",
          composition: "гренадин · апельсиновый сок · водка · Blue Curaçao",
          weight: "40 мл",
          price: "139 000 VND",
        },
        {
          name: "Blue Kamikaze",
          composition: "водка · Blue Curaçao · лайм",
          weight: "40 мл",
          price: "119 000 VND",
        },
        {
          name: "Margarita Shot",
          description: "Подаётся с солевой кромкой",
          composition: "Olmeca Silver · Cointreau · лайм · соль",
          weight: "40 мл",
          price: "119 000 VND",
        },
        {
          name: "Whisky Sour Shot",
          composition: "Jameson · лимон · сахар",
          weight: "40 мл",
          price: "119 000 VND",
        },
        {
          name: "Tequila Slammer",
          composition: "Olmeca Silver · лимонно-лаймовая сода",
          weight: "40 мл",
          price: "119 000 VND",
        },
        {
          name: "Frangelico Shot",
          composition: "Frangelico · водка",
          weight: "40 мл",
          price: "129 000 VND",
        },
        {
          name: "Blue Motorcycle",
          composition: "водка · Beefeater · Bacardi White · Olmeca Silver · Blue Curaçao",
          weight: "40 мл",
          badges: ["Премиум"],
          price: "149 000 VND",
        },
        {
          name: "Lemon Drop",
          composition: "водка · Triple Sec · лимон · сахар",
          weight: "40 мл",
          price: "119 000 VND",
        },
      ],
    },
    {
      id: "shot-sets",
      title: "Шот-сеты",
      dishes: [
        {
          name: "Six Shots",
          description: "6 разных шотов на компанию",
          composition: "B-52 · Камикадзе · Маргарита шот · Манго Рам шот · Маракуйя шот · Tequila Boom шот",
          badges: ["Премиум"],
          price: "599 000 VND",
        },
      ],
    },
    {
      id: "cocktail-sets",
      title: "Коктейльные сеты",
      dishes: [
        {
          name: "Tropical Trio",
          description: "Набор из трёх тропических коктейлей",
          composition: "Mango Rum Sour · Pineapple Rum Crush · Passion Fruit Daiquiri",
          price: "599 000 VND",
        },
        {
          name: "Sunset Trio",
          description: "Набор из трёх сигнатурных коктейлей",
          composition: "Phu Quoc Sunset · Island 5PM · Black Pearl",
          price: "699 000 VND",
        },
      ],
    },
  ],
}

export const alcoholMenus: MenuData[] = alcoholMenuData.sections.map((section) => ({
  id: section.id,
  title: section.title,
  subtitle: section.subtitle ?? "",
  image: alcoholMenuData.image,
  group: "alcohol",
  sections: [section],
}))