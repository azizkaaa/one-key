export type Locale = "ru" | "uz" | "en";

export const defaultLocale: Locale = "ru";

export const locales: Locale[] = ["ru", "uz", "en"];

export const localeNames: Record<Locale, string> = {
  ru: "РУС",
  uz: "UZB",
  en: "ENG",
};

export type TranslationKeys = typeof translations.ru;

export const translations = {
  ru: {
    nav: {
      services: "Услуги",
      portfolio: "Портфолио",
      about: "О компании",
      contacts: "Контакты",
      discuss: "Обсудить проект",
    },
    home: {
      hero: {
        title1: "End-to-End",
        title2: "разработка",
        title3: "цифровых решений",
        subtitle:
          "Проектируем, разрабатываем и масштабируем технологические продукты для лидеров рынка. От архитектуры до внедрения.",
        btnDiscuss: "Обсудить проект",
        btnCases: "Наши кейсы",
      },
      expertise: {
        tag: "Глубокая экспертиза",
        tagBlue: "в ключевых индустриях",
        description:
          "Мы не просто пишем код, мы понимаем бизнес-процессы в каждой вертикали.",
        fintech: {
          title: "FinTech",
          desc: "Платёжные шлюзы, необанки и системы автоматизации трейдинга с высочайшим уровнем безопасности.",
        },
        govtech: {
          title: "GovTech",
          desc: "Цифровизация государственных услуг, реестров и систем взаимодействия с гражданами в масштабе страны.",
        },
        medtech: {
          title: "MedTech",
          desc: "Телемедицина, системы анализа медицинских данных и интеграционные платформы для клиник.",
        },
      },
      cycle: {
        title1: "Полный цикл",
        title2: "создания IT-",
        title3: "продукта",
        subtitle:
          "Превращаем сырые идеи в работающий бизнес-инструмент с помощью проверенных инженерных практик.",
        step1title: "Аналитика и стратегия",
        step1desc: "Проектируем архитектуру, которая выдержит миллионы пользователей.",
        step2title: "UI/UX Проектирование",
        step2desc: "Создаём интерфейсы, в которых не нужно объяснять, как всё работает.",
        step3title: "High-load Разработка",
        step3desc: "Пишем чистый, поддерживаемый код на современном стеке технологий.",
      },
      cta: {
        title1: "Начнём цифровую",
        title2: "трансформацию",
        title3: "вашего бизнеса",
        subtitle:
          "Оставьте заявку и наши технические специалисты свяжутся с вами для проведения бесплатного аудита ваших текущих решений.",
        email: "hello@onekey.tech",
      },
    },
    services: {
      hero: {
        title1: "Архитектура",
        title2: "цифрового",
        title3: "превосходства",
        subtitle:
          "Мы создаём сложные технологические решения, которые трансформируют бизнес-процессы в конкурентные преимущества. От идеи до масштабируемой инфраструктуры.",
      },
      s1: {
        num: "01",
        title: "Разработка (End-to-End)",
        desc: "Полный цикл создания программного обеспечения: от проектирования архитектуры и UI/UX до запуска и поддержки высоконагруженных систем.",
        features: [
          "Enterprise-решения",
          "Мобильные приложения iOS/Android",
          "High-load Web-платформы",
        ],
      },
      s2: {
        num: "02",
        title: "IT-Консалтинг",
        desc: "Технологический аудит, разработка стратегии цифровизации и оптимизация текущего стека технологий.",
        keyExpertise: "Ключевая экспертиза:",
        tags: ["Digital Transformation", "Stack Audit"],
      },
      s3: {
        num: "03",
        title: "Аутстаффинг",
        desc: "Усиление вашей команды экспертами One Key. Senior-разработчики, архитекторы и QA, готовые включиться в процесс в кратчайшие сроки.",
        available: "Доступных специалистов",
      },
      s4: {
        num: "04",
        title: "DevOps & Инфраструктура",
        desc: "Построение отказоустойчивых облачных систем, автоматизация CI/CD и обеспечение безопасности.",
        monitoring: "МОНИТОРИНГ",
      },
      cta: {
        title: "Готовы спроектировать ваше будущее?",
        subtitle:
          "Оставьте заявку на бесплатную консультацию. Наши эксперты проанализируют ваши задачи и предложат оптимальную архитектуру решения.",
        btn: "Начать проект",
      },
    },
    portfolio: {
        hero: {
          title1: "Цифровые",
          titleAccent: "активы",
          title2: "бизнеса.",
          subtitle: "Мы проектируем и разрабатываем высокотехнологичные решения, которые становятся фундаментом для роста и масштабирования вашего бизнеса.",
        },
      filters: {
        all: "Все проекты",
        fintech: "FinTech",
        ecommerce: "E-Commerce",
        scoring: "Scoring",
        vending: "Vending",
      },
      projects: {
        allgood: {
          category: "FINTECH / BNPL",
          title: "Allgood Nasiya",
          desc: "Экосистема рассрочки нового поколения. Интеграция с банковскими API, скоринг в реальном времени и интуитивный клиентский путь для миллионов пользователей.",
        },
        credit: {
          category: "FINTECH / BANKING",
          title: "Кредитный конвейер",
          desc: "Автоматизация выдачи кредитов. Снижение времени принятия решения с 24 часов до 3 минут через ML-модели.",
        },
        marketplace: {
          category: "E-COMMERCE",
          title: "Маркетплейс",
          desc: "Национальная платформа для B2B закупок с прозрачной системой рейтинга поставщиков.",
        },
        aniq: {
          category: "SCORING / AI",
          title: "Aniq Score",
          desc: "Интеллектуальная система помогающая мерчантам быстро и точно оценивать финансовую состоятельность клиентов и давать скоринговый балл.",
        },
        coffee: {
          category: "VENDING / DRINKS",
          title: "Point Coffee",
          desc: "Экосистема рассрочки нового поколения. Интеграция с банковскими API, скоринг в реальном времени и интуитивный клиентский путь для миллионов пользователей.",
        },
      },
      cta: {
        title1: "Готовы создать следующий",
        title2: "прорывной",
        title3: "продукт?",
        subtitle:
          "Давайте обсудим, как наш опыт в архитектуре сложных систем поможет вашему бизнесу масштабироваться.",
        btn: "Начать проект",
      },
    },
    about: {
      hero: {
        title1: "Проектируем",
        title2: "цифровое",
        title3: "будущее",
        subtitle:
          "One Key Technologies — это команда инженеров и дизайнеров, создающих масштабируемые решения для лидеров рынка. Мы верим, что технологии должны быть прозрачными, надёжными и эффективными.",
      },
      team: {
  title: "Наша команда",
  backend: {
    title: "Backend Разработка",
    roles: [
      { 
        name: "Middle / Senior", 
        experience: "5-10 лет опыта", 
        desc: "Инженеры с глубокой экспертизой в построении масштабируемых и отказоустойчивых систем." 
      },
      { 
        name: "Principal Architect", 
        experience: "20+ лет опыта", 
        desc: "Архитекторы, проектирующие фундамент для высоконагруженных Enterprise-решений." 
      }
    ]
  },
  frontend: {
    title: "Frontend & Mobile Разработка",
    roles: [
      { 
        name: "Frontend Developers", 
        experience: "от 3 до 8 лет опыта", 
        desc: "Разработка pixel-perfect интерфейсов и сложных клиентских логик для современных веб-экосистем." 
      },
      { 
        name: "Mobile (iOS, Android, Flutter)", 
        experience: "от 4 лет опыта", 
        desc: "Нативная и кроссплатформенная разработка (Dart, Swift, Kotlin) для безупречного мобильного опыта." 
      }
    ]
  },
  management: {
    title: "Управление и Инфраструктура",
    roles: [
      { 
        name: "Analysts & Project Managers", 
        experience: "5-15 лет опыта", 
        desc: "Проектирование архитектуры, сбор требований, контроль сроков и прозрачность коммуникаций." 
      },
      { 
        name: "QA & DevOps Engineers", 
        experience: "от 10-15 лет опыта", 
        desc: "Автоматизация CI/CD пайплайнов и строгий многоуровневый контроль качества (Manual & Auto)." 
      }
    ]
  }
},
      values: {
        title: "Наши ценности",
        mission: {
          title: "Миссия",
          desc: "Мы трансформируем сложные бизнес-процессы в элегантные цифровые экосистемы, обеспечивая нашим партнёрам технологическое превосходство и устойчивый рост в условиях неопределённости.",
        },
        precision: {
          title: "Точность",
          desc: "Каждый бит кода и каждый пиксель интерфейса проходят многоуровневую проверку качества.",
        },
        transparency: {
          title: "Прозрачность",
          desc: "Мы строим открытые отношения с клиентами, предоставляя полный доступ к процессам разработки.",
        },
        innovation: {
          title: "Инновации через опыт",
          desc: "Мы не просто следим за трендами, мы внедряем только те технологии, которые приносят реальную бизнес-ценность. Наш стек всегда актуален и надёжен.",
        },
      },
      architecture: {
        title: "Архитектура доверия",
        culture: {
          title: "Культура инженерии",
          desc: "Внутри компании мы поддерживаем культуру непрерывного обучения и обмена знаниями.",
        },
        security: {
          title: "Стандарты безопасности",
          desc: "Безопасность данных — наш приоритет на каждом этапе жизненного цикла проекта.",
        },
        scalability: {
          title: "Масштабируемость",
          desc: "Мы создаём решения, которые растут вместе с вашим бизнесом, от MVP до Enterprise.",
        },
      },
      cta: {
        title: "Готовы открыть новую главу?",
        subtitle:
          "Давайте обсудим ваши технологические планы и найдём оптимальное решение вместе.",
        btn1: "Связаться с нами",
        btn2: "Наши работы",
      },
    },
    contacts: {
      hero: {
        title1: "Спроектируем",
        title2: "ваше будущее",
        title3: "вместе.",
        subtitle:
          "Мы всегда открыты для новых идей и сложных технологических вызовов. Свяжитесь с нами любым удобным способом или посетите наш офис в Ташкенте.",
      },
      info: {
        email: "ЭЛЕКТРОННАЯ ПОЧТА",
        phone: "ТЕЛЕФОН",
        office: "НАШ ОФИС",
        address: "Ташкент, ул. Абдулла Кадыри, 39",
        hours: "Пн — Пт: 10:00 - 19:00",
      },
      form: {
        title: "Напишите нам",
        name: "ВАШЕ ИМЯ",
        namePlaceholder: "Иван Иванов",
        phone: "НОМЕР ТЕЛЕФОНА",
        phonePlaceholder: "+998",
        message: "СООБЩЕНИЕ",
        messagePlaceholder: "Расскажите о вашем проекте...",
        submit: "ОТПРАВИТЬ ЗАПРОС",
        sending: "Отправка...",
        success: "Заявка отправлена! Свяжемся с вами в ближайшее время.",
        error: "Ошибка отправки. Попробуйте снова.",
      },
    },
    form: {
      name: "ВАШЕ ИМЯ",
      namePlaceholder: "Александр",
      phone: "ВАШ НОМЕР ТЕЛЕФОНА",
      phonePlaceholder: "+998",
      project: "О ПРОЕКТЕ",
      projectPlaceholder: "Расскажите вкратце о вашей задаче...",
      submit: "Отправить запрос",
      sending: "Отправка...",
      success: "Заявка отправлена! Свяжемся с вами скоро.",
      error: "Ошибка. Попробуйте снова.",
    },
    footer: {
      tagline: "Проектируем будущее технологий для амбициозного бизнеса.",
      services: "УСЛУГИ",
      company: "КОМПАНИЯ",
      contacts: "КОНТАКТЫ",
      serviceLinks: ["Разработка ПО", "Аналитика", "UX/UI Дизайн", "QA & Testing"],
      companyLinks: ["О нас", "Кейсы", "Карьера", "Блог"],
      rights: "© 2026 One Key Technologies. Все права защищены.",
      privacy: "Политика конфиденциальности",
    },
    validation: {
      nameRequired: "Введите ваше имя",
      nameMin: "Имя не менее 2 символов",
      phoneRequired: "Введите номер телефона",
      phoneInvalid: "Неверный формат телефона",
      messageRequired: "Введите сообщение",
      messageMin: "Сообщение не менее 10 символов",
    },
  },

  uz: {
    nav: {
      services: "Xizmatlar",
      portfolio: "Portfolio",
      about: "Kompaniya haqida",
      contacts: "Kontaktlar",
      discuss: "Loyihani muhokama qilish",
    },
    home: {
      hero: {
        title1: "End-to-End",
        title2: "raqamli yechimlar",
        title3: "ishlab chiqish",
        subtitle:
          "Bozor yetakchilari uchun texnologik mahsulotlarni loyihalaymiz, ishlab chiqamiz va kengaytiramiz. Arxitekturadan joriy etishgacha.",
        btnDiscuss: "Loyihani muhokama qilish",
        btnCases: "Bizning keyslar",
      },
      expertise: {
        tag: "Asosiy sohalar bo'yicha",
        tagBlue: "chuqur ekspertiza",
        description:
          "Biz shunchaki kod yozmaymiz, har bir vertikaldagi biznes-jarayonlarni tushunamiz.",
        fintech: {
          title: "FinTech",
          desc: "To'lov shlyuzlari, neobank va treydingni avtomatlashtirish tizimlari, yuqori xavfsizlik darajasida.",
        },
        govtech: {
          title: "GovTech",
          desc: "Davlat xizmatlari, reyestrlar va fuqarolar bilan o'zaro aloqa tizimlarini raqamlashtirish.",
        },
        medtech: {
          title: "MedTech",
          desc: "Teletibbiyot, tibbiy ma'lumotlarni tahlil qilish tizimlari va klinikalar uchun integratsion platformalar.",
        },
      },
      cycle: {
        title1: "IT-mahsulot",
        title2: "yaratishning",
        title3: "to'liq sikli",
        subtitle:
          "Xom g'oyalarni ishchi biznes-instrumentga aylantirаmiz, sinab ko'rilgan muhandislik amaliyotlari yordamida.",
        step1title: "Tahlil va strategiya",
        step1desc: "Millionlab foydalanuvchilarni ko'tara oladigan arxitektura quramiz.",
        step2title: "UI/UX Loyihalash",
        step2desc: "Qanday ishlashini tushuntirish kerak bo'lmagan interfeyslar yaratаmiz.",
        step3title: "High-load Ishlab chiqish",
        step3desc: "Zamonaviy texnologiyalar stekida toza, qo'llab-quvvatlanadigan kod yozаmiz.",
      },
      cta: {
        title1: "Biznesingizning",
        title2: "raqamli transformatsiyasini",
        title3: "boshlaymiz",
        subtitle:
          "Ariza qoldiring va texnik mutaxassislarimiz sizning joriy yechimlaringizni bepul audit o'tkazish uchun siz bilan bog'lanadi.",
        email: "hello@onekey.tech",
      },
    },
    services: {
      hero: {
        title1: "Raqamli",
        title2: "ustunlik",
        title3: "arxitekturasi",
        subtitle:
          "Biz biznes-jarayonlarni raqobat afzalliklariga aylantiruvchi murakkab texnologik yechimlar yaratаmiz. G'oyadan kengaytiriladigan infratuzilmagacha.",
      },
      s1: {
        num: "01",
        title: "Ishlab chiqish (End-to-End)",
        desc: "Dasturiy ta'minotni yaratishning to'liq sikli: arxitektura va UI/UX loyihalashdan yuqori yuklamali tizimlarni ishga tushirish va qo'llab-quvvatlashgacha.",
        features: [
          "Enterprise-yechimlar",
          "iOS/Android mobil ilovalar",
          "High-load Web-platformalar",
        ],
      },
      s2: {
        num: "02",
        title: "IT-Konsalting",
        desc: "Texnologik audit, raqamlashtirish strategiyasini ishlab chiqish va joriy texnologiyalar stekini optimallashtirish.",
        keyExpertise: "Asosiy ekspertiza:",
        tags: ["Digital Transformation", "Stack Audit"],
      },
      s3: {
        num: "03",
        title: "Autstaffing",
        desc: "One Key mutaxassislari bilan jamoangizni kuchaytirish. Senior ishlab chiquvchilar, arxitektorlar va QA, eng qisqa muddatda jarayonga qo'shilishga tayyor.",
        available: "Mavjud mutaxassislar",
      },
      s4: {
        num: "04",
        title: "DevOps va Infratuzilma",
        desc: "Xatolarga chidamli bulut tizimlarini qurish, CI/CD avtomatlashtirish va xavfsizlikni ta'minlash.",
        monitoring: "MONITORING",
      },
      cta: {
        title: "Kelajagingizni loyihalashga tayyormisiz?",
        subtitle:
          "Bepul maslahat uchun ariza qoldiring. Mutaxassislarimiz vazifalaringizni tahlil qilib, optimal arxitektura yechimini taklif qiladi.",
        btn: "Loyihani boshlash",
      },
    },
    portfolio: {
      hero: {
        title1: "Raqamli",
        titleAccent: "biznes",
        title2: "aktivlari.",
        subtitle:
          "Biz moliyaviy tizimlardan davlat xizmatlarigacha sohalar qiyofasini o'zgartiradigan texnologik yechimlarni loyihalaymiz va ishlab chiqаmiz.",
      },
      filters: {
        all: "Barcha loyihalar",
        fintech: "FinTech",
        ecommerce: "E-Commerce",
        scoring: "Scoring",
        vending: "Vending",
      },
      projects: {
        allgood: {
          category: "FINTECH / BNPL",
          title: "Allgood Nasiya",
          desc: "Yangi avlod muddatli to'lov ekotizimi. Bank API-lari bilan integratsiya, real vaqtda skoring va millionlab foydalanuvchilar uchun intuitiv mijoz yo'li.",
        },
        credit: {
          category: "FINTECH / BANKING",
          title: "Kredit konveyer",
          desc: "Kredit berish jarayonini avtomatlashtirish. ML-modellar orqali qaror qabul qilish vaqtini 24 soatdan 3 minutgacha qisqartirish.",
        },
        marketplace: {
          category: "E-COMMERCE",
          title: "Marketplace",
          desc: "Yetkazib beruvchilarning shaffof reytingi tizimi bilan B2B xaridlar uchun milliy platforma.",
        },
        aniq: {
          category: "SCORING / AI",
          title: "Aniq Score",
          desc: "Merchantlarga mijozlarning moliyaviy holatini tezda va aniq baholashda va skoring bali berishda yordam beradigan intellektual tizim.",
        },
        coffee: {
          category: "VENDING / DRINKS",
          title: "Point Coffee",
          desc: "Yangi avlod muddatli to'lov ekotizimi. Bank API-lari bilan integratsiya, real vaqtda skoring va intuitiv mijoz yo'li.",
        },
      },
      cta: {
        title1: "Keyingi inqilobiy",
    title2: "mahsulotni",
    title3: "yaratishga tayyormisiz?",
        subtitle:
          "Murakkab tizimlar arxitekturasidagi tajribamiz biznesingizni kengaytirishga qanday yordam berishi mumkinligini muhokama qilaylik.",
        btn: "Loyihani boshlash",
      },
    },
    about: {
      hero: {
        title1: "Raqamli",
        title2: "kelajakni",
        title3: "loyihalaymiz",
        subtitle:
          "One Key Technologies — bozor yetakchilari uchun kengaytiriladigan yechimlar yaratuvchi muhandislar va dizaynerlar jamoasi. Biz texnologiyalar shaffof, ishonchli va samarali bo'lishi kerak deb ishonаmiz.",
      },
      team: {
        title: "Bizning jamoa",
        backend: {
          title: "Backend Dasturlash",
          roles: [
            { 
              name: "Middle / Senior", 
              experience: "5-10 yillik tajriba", 
              desc: "Masshtablanadigan va xatolarga chidamli tizimlarni yaratishda chuqur tajribaga ega muhandislar." 
            },
            { 
              name: "Principal Architect", 
              experience: "20+ yillik tajriba", 
              desc: "Yuqori yuklamali Enterprise yechimlari uchun poydevor loyihalashtiruvchi arxitektorlar." 
            }
          ]
        },
        frontend: {
          title: "Frontend va Mobile",
          roles: [
            { 
              name: "Frontend Developers", 
              experience: "3 dan 8 yilgacha tajriba", 
              desc: "Zamonaviy veb-ekotizimlar uchun pixel-perfect interfeyslar va murakkab mijoz mantiqlarini ishlab chiqish." 
            },
            { 
              name: "Mobile (iOS, Android, Flutter)", 
              experience: "4+ yillik tajriba", 
              desc: "Mukammal mobil tajriba uchun nativ va kross-platforma dasturlash (Dart, Swift, Kotlin)." 
            }
          ]
        },
        management: {
          title: "Boshqaruv va QA / DevOps",
          roles: [
            { 
              name: "Analysts & Project Managers", 
              experience: "5-15 yillik tajriba", 
              desc: "Arxitekturani loyihalashtirish, talablarni yig'ish, muddatlarni nazorat qilish va shaffof aloqa." 
            },
            { 
              name: "QA & DevOps Engineers", 
              experience: "5-10 yillik tajriba", 
              desc: "CI/CD quvurlarini avtomatlashtirish va qat'iy ko'p darajali sifat nazorati (Manual & Auto)." 
            }
          ]
        }
      },
      values: {
        title: "Bizning qadriyatlar",
        mission: {
          title: "Missiya",
          desc: "Biz murakkab biznes-jarayonlarni elegantli raqamli ekotizimlariga aylantiramiz, hamkorlarimizga texnologik ustunlik va noaniqlik sharoitida barqaror o'sishni ta'minlaymiz.",
        },
        precision: {
          title: "Aniqlik",
          desc: "Kodning har bir biti va interfeysning har bir pikseli ko'p bosqichli sifat tekshiruvidan o'tadi.",
        },
        transparency: {
          title: "Shaffoflik",
          desc: "Biz mijozlar bilan ochiq munosabatlar quramiz, ishlab chiqish jarayonlariga to'liq kirish imkonini beramiz.",
        },
        innovation: {
          title: "Tajriba orqali innovatsiya",
          desc: "Biz shunchaki trendlarni kuzatmaymiz, faqat haqiqiy biznes qiymatini keltiradigan texnologiyalarni joriy etаmiz. Stekimiz doimo dolzarb va ishonchli.",
        },
      },
      architecture: {
        title: "Ishonch arxitekturasi",
        culture: {
          title: "Muhandislik madaniyati",
          desc: "Kompaniya ichida biz uzluksiz o'rganish va bilim almashish madaniyatini qo'llab-quvvatlaymiz.",
        },
        security: {
          title: "Xavfsizlik standartlari",
          desc: "Ma'lumotlar xavfsizligi — loyiha hayot siklining har bir bosqichida bizning ustuvorligimiz.",
        },
        scalability: {
          title: "Kengaytiriluvchanlik",
          desc: "Biz biznesingiz bilan birga o'sadigan yechimlar yaratаmiz, MVP-dan Enterprise-gacha.",
        },
      },
      cta: {
        title: "Yangi bobni ochishga tayyormisiz?",
        subtitle:
          "Texnologik rejalaringizni muhokama qilaylik va birga optimal yechim topaylik.",
        btn1: "Biz bilan bog'laning",
        btn2: "Ishlarimiz",
      },
    },
    contacts: {
      hero: {
        title1: "Kelajagingizni",
        title2: "birga",
        title3: "loyihalaymiz.",
        subtitle:
          "Biz doim yangi g'oyalar va murakkab texnologik muammolarga ochiqmiz. Har qanday qulay usulda biz bilan bog'laning yoki Toshkentdagi ofisimizga tashrif buyuring.",
      },
      info: {
        email: "ELEKTRON POCHTA",
        phone: "TELEFON",
        office: "BIZNING OFIS",
        address: "Toshkent, Abdulla Qodiriy ko'chasi, 39",
        hours: "Du — Ju: 10:00 - 19:00",
      },
      form: {
        title: "Bizga yozing",
        name: "ISMINGIZ",
        namePlaceholder: "Ivan Ivanov",
        phone: "TELEFON RAQAMI",
        phonePlaceholder: "+998",
        message: "XABAR",
        messagePlaceholder: "Loyihangiz haqida gapirib bering...",
        submit: "SO'ROV YUBORISH",
        sending: "Yuborilmoqda...",
        success: "Ariza yuborildi! Tez orada siz bilan bog'lanamiz.",
        error: "Yuborishda xatolik. Qayta urinib ko'ring.",
      },
    },
    form: {
      name: "ISMINGIZ",
      namePlaceholder: "Aleksander",
      phone: "TELEFON RAQAMINGIZ",
      phonePlaceholder: "+998",
      project: "LOYIHA HAQIDA",
      projectPlaceholder: "Vazifangiz haqida qisqacha gapirib bering...",
      submit: "So'rov yuborish",
      sending: "Yuborilmoqda...",
      success: "Ariza yuborildi! Tez orada bog'lanamiz.",
      error: "Xatolik. Qayta urinib ko'ring.",
    },
    footer: {
      tagline: "Ambiitsiyali biznes uchun texnologiyalar kelajagini loyihalaymiz.",
      services: "XIZMATLAR",
      company: "KOMPANIYA",
      contacts: "KONTAKTLAR",
      serviceLinks: ["Dasturiy ta'minot ishlab chiqish", "Tahlil", "UX/UI Dizayn", "QA & Testing"],
      companyLinks: ["Biz haqimizda", "Keyslar", "Karyera", "Blog"],
      rights: "© 2026 One Key Technologies. Barcha huquqlar himoyalangan.",
      privacy: "Maxfiylik siyosati",
    },
    validation: {
      nameRequired: "Ismingizni kiriting",
      nameMin: "Ism kamida 2 ta belgi",
      phoneRequired: "Telefon raqamini kiriting",
      phoneInvalid: "Noto'g'ri telefon formati",
      messageRequired: "Xabar kiriting",
      messageMin: "Xabar kamida 10 ta belgi",
    },
  },

  en: {
    nav: {
      services: "Services",
      portfolio: "Portfolio",
      about: "About",
      contacts: "Contacts",
      discuss: "Discuss Project",
    },
    home: {
      hero: {
        title1: "End-to-End",
        title2: "Digital Solutions",
        title3: "Development",
        subtitle:
          "We design, build and scale technology products for market leaders. From architecture to deployment.",
        btnDiscuss: "Discuss Project",
        btnCases: "Our Cases",
      },
      expertise: {
        tag: "Deep Expertise",
        tagBlue: "in Key Industries",
        description:
          "We don't just write code — we understand business processes in every vertical.",
        fintech: {
          title: "FinTech",
          desc: "Payment gateways, neobanks and trading automation systems with the highest level of security.",
        },
        govtech: {
          title: "GovTech",
          desc: "Digitalization of government services, registries and citizen interaction systems at national scale.",
        },
        medtech: {
          title: "MedTech",
          desc: "Telemedicine, medical data analysis systems and integration platforms for clinics.",
        },
      },
      cycle: {
        title1: "Full IT Product",
        title2: "Creation",
        title3: "Cycle",
        subtitle:
          "We turn raw ideas into working business tools using proven engineering practices.",
        step1title: "Analytics & Strategy",
        step1desc: "We design architecture that handles millions of users.",
        step2title: "UI/UX Design",
        step2desc: "We create interfaces that don't need explaining.",
        step3title: "High-load Development",
        step3desc: "We write clean, maintainable code on a modern technology stack.",
      },
      cta: {
        title1: "Let's Start Your",
        title2: "Digital",
        title3: "Transformation",
        subtitle:
          "Leave a request and our technical specialists will contact you for a free audit of your current solutions.",
        email: "hello@onekey.tech",
      },
    },
    services: {
      hero: {
        title1: "Architecture of",
        title2: "Digital",
        title3: "Excellence",
        subtitle:
          "We create complex technological solutions that transform business processes into competitive advantages. From idea to scalable infrastructure.",
      },
      s1: {
        num: "01",
        title: "Development (End-to-End)",
        desc: "Full software development lifecycle: from architecture design and UI/UX to launch and support of high-load systems.",
        features: ["Enterprise solutions", "iOS/Android mobile apps", "High-load Web platforms"],
      },
      s2: {
        num: "02",
        title: "IT Consulting",
        desc: "Technology audit, digital transformation strategy development and current technology stack optimization.",
        keyExpertise: "Key expertise:",
        tags: ["Digital Transformation", "Stack Audit"],
      },
      s3: {
        num: "03",
        title: "Outstaffing",
        desc: "Strengthen your team with One Key experts. Senior developers, architects and QA, ready to join the process in the shortest time.",
        available: "Available specialists",
      },
      s4: {
        num: "04",
        title: "DevOps & Infrastructure",
        desc: "Building fault-tolerant cloud systems, CI/CD automation and security assurance.",
        monitoring: "MONITORING",
      },
      cta: {
        title: "Ready to design your future?",
        subtitle:
          "Leave a request for a free consultation. Our experts will analyze your tasks and propose the optimal solution architecture.",
        btn: "Start a Project",
      },
    },
    portfolio: {
      hero: {
        title1: "Digital",
        titleAccent: "business",
        title2: "assets.",
        subtitle:
          "We design and develop technological solutions that transform industries: from financial systems to government services.",
      },
      filters: {
        all: "All Projects",
        fintech: "FinTech",
        ecommerce: "E-Commerce",
        scoring: "Scoring",
        vending: "Vending",
      },
      projects: {
        allgood: {
          category: "FINTECH / BNPL",
          title: "Allgood Nasiya",
          desc: "Next-generation installment ecosystem. Integration with banking APIs, real-time scoring and intuitive customer journey for millions of users.",
        },
        credit: {
          category: "FINTECH / BANKING",
          title: "Credit Conveyor",
          desc: "Automated loan issuance. Reducing decision time from 24 hours to 3 minutes via ML models.",
        },
        marketplace: {
          category: "E-COMMERCE",
          title: "Marketplace",
          desc: "National B2B procurement platform with a transparent supplier rating system.",
        },
        aniq: {
          category: "SCORING / AI",
          title: "Aniq Score",
          desc: "An intelligent system helping merchants quickly and accurately assess the financial status of clients and provide a scoring grade.",
        },
        coffee: {
          category: "VENDING / DRINKS",
          title: "Point Coffee",
          desc: "Next-generation installment ecosystem. Integration with banking APIs, real-time scoring and intuitive customer journey.",
        },
      },
      cta: {
        title1: "Ready to create your next",
      title2: "breakthrough",
      title3: "product?",
        subtitle:
          "Let's discuss how our experience in complex systems architecture can help your business scale.",
        btn: "Start a Project",
      },
    },
    about: {
      hero: {
        title1: "Designing the",
        title2: "Digital",
        title3: "Future",
        subtitle:
          "One Key Technologies is a team of engineers and designers creating scalable solutions for market leaders. We believe technology should be transparent, reliable and effective.",
      },
      team: {
        title: "Our Team",
        backend: {
          title: "Backend Development",
          roles: [
            { 
              name: "Middle / Senior", 
              experience: "5-10 years of experience", 
              desc: "Engineers with deep expertise in building scalable and fault-tolerant systems." 
            },
            { 
              name: "Principal Architect", 
              experience: "20+ years of experience", 
              desc: "Architects designing the foundation for high-load Enterprise solutions." 
            }
          ]
        },
        frontend: {
          title: "Frontend & Mobile",
          roles: [
            { 
              name: "Frontend Developers", 
              experience: "3 to 8 years of experience", 
              desc: "Development of pixel-perfect interfaces and complex client logic for modern web ecosystems." 
            },
            { 
              name: "Mobile (iOS, Android, Flutter)", 
              experience: "4+ years of experience", 
              desc: "Native and cross-platform development (Dart, Swift, Kotlin) for a flawless mobile experience." 
            }
          ]
        },
        management: {
          title: "Management & Infrastructure",
          roles: [
            { 
              name: "Analysts & Project Managers", 
              experience: "10-15 years of experience", 
              desc: "Architecture design, requirements gathering, deadline control, and transparent communication." 
            },
            { 
              name: "QA & DevOps Engineers", 
              experience: "5+ years of experience", 
              desc: "CI/CD pipeline automation and strict multi-level quality control (Manual & Auto)." 
            }
          ]
        }
      },
      values: {
        title: "Our Values",
        mission: {
          title: "Mission",
          desc: "We transform complex business processes into elegant digital ecosystems, providing our partners with technological superiority and sustainable growth in uncertainty.",
        },
        precision: {
          title: "Precision",
          desc: "Every bit of code and every pixel of the interface undergoes multilevel quality checks.",
        },
        transparency: {
          title: "Transparency",
          desc: "We build open relationships with clients, providing full access to development processes.",
        },
        innovation: {
          title: "Innovation Through Experience",
          desc: "We don't just follow trends, we only implement technologies that bring real business value. Our stack is always current and reliable.",
        },
      },
      architecture: {
        title: "Architecture of Trust",
        culture: {
          title: "Engineering Culture",
          desc: "Within the company, we support a culture of continuous learning and knowledge sharing.",
        },
        security: {
          title: "Security Standards",
          desc: "Data security is our priority at every stage of the project lifecycle.",
        },
        scalability: {
          title: "Scalability",
          desc: "We create solutions that grow with your business, from MVP to Enterprise.",
        },
      },
      cta: {
        title: "Ready to open a new chapter?",
        subtitle:
          "Let's discuss your technology plans and find the optimal solution together.",
        btn1: "Contact Us",
        btn2: "Our Work",
      },
    },
    contacts: {
      hero: {
        title1: "Let's Design",
        title2: "Your Future",
        title3: "Together.",
        subtitle:
          "We are always open to new ideas and complex technological challenges. Contact us in any convenient way or visit our office in Tashkent.",
      },
      info: {
        email: "EMAIL",
        phone: "PHONE",
        office: "OUR OFFICE",
        address: "Tashkent, Abdulla Qodiriy St., 39",
        hours: "Mon — Fri: 10:00 - 19:00",
      },
      form: {
        title: "Write to Us",
        name: "YOUR NAME",
        namePlaceholder: "John Smith",
        phone: "PHONE NUMBER",
        phonePlaceholder: "+998",
        message: "MESSAGE",
        messagePlaceholder: "Tell us about your project...",
        submit: "SEND REQUEST",
        sending: "Sending...",
        success: "Request sent! We'll get back to you shortly.",
        error: "Error sending. Please try again.",
      },
    },
    form: {
      name: "YOUR NAME",
      namePlaceholder: "Alexander",
      phone: "YOUR PHONE NUMBER",
      phonePlaceholder: "+998",
      project: "ABOUT THE PROJECT",
      projectPlaceholder: "Tell us briefly about your task...",
      submit: "Send Request",
      sending: "Sending...",
      success: "Request sent! We'll be in touch soon.",
      error: "Error. Please try again.",
    },
    footer: {
      tagline: "Designing the future of technology for ambitious business.",
      services: "SERVICES",
      company: "COMPANY",
      contacts: "CONTACTS",
      serviceLinks: ["Software Development", "Analytics", "UX/UI Design", "QA & Testing"],
      companyLinks: ["About Us", "Cases", "Career", "Blog"],
      rights: "© 2026 One Key Technologies. All rights reserved.",
      privacy: "Privacy Policy",
    },
    validation: {
      nameRequired: "Please enter your name",
      nameMin: "Name must be at least 2 characters",
      phoneRequired: "Please enter your phone number",
      phoneInvalid: "Invalid phone format",
      messageRequired: "Please enter a message",
      messageMin: "Message must be at least 10 characters",
    },
  },
} as const;
