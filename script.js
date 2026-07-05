(function() {
  // Данные для галереи, цветов, меню, букетов
  const galleryData = [
    {
      title: 'Утренний кофе в лесу',
      tag: 'Атмосфера',
      description: 'Вас ждёт освежающий прохладный утренний кофе, сваренный на открытом воздухе. Аромат хвои и свежесваренного эспрессо создают идеальный баланс для начала нового дня. Позвольте себе насладиться моментом, когда природа просыпается вместе с вами.',
      quote: 'Согрейся в такой пасмурный день чашкой ароматного кофе — и мир заиграет новыми красками.',
      img: 'https://i.ibb.co/d00vTbm0/photo-5269238184690783757-w.jpg'
    },
    {
      title: 'Букет для вдохновения',
      tag: 'Цветы',
      description: 'Этот букет понравится не только твоей второй половинке, но и всем вокруг. Яркие краски и нежные оттенки созданы, чтобы напоминать о том, что красота — в простых вещах. Каждый цветок в этом букете — маленькое произведение искусства.',
      quote: 'Подари себе немного счастья — окружи себя цветами, которые будут радовать каждый день.',
      img: 'https://i.ibb.co/93tcKWX2/photo-5399918740834554404-y.jpg'
    },
    {
      title: 'Терраса с видом на горы',
      tag: 'Интерьер',
      description: 'Летняя терраса, где можно забыть о времени. Мягкий свет, свежий воздух и аромат цветов создают атмосферу уюта и спокойствия. Идеальное место, чтобы встретить закат с бокалом лимонада или чашкой чая в компании близких.',
      quote: 'Здесь каждый вдох наполняет энергией, а каждый взгляд — вдохновением.',
      img: 'https://i.ibb.co/4Zr2tX2Y/photo-5330282219861383887-w.jpg'
    },
    {
      title: 'Авторский',
      tag: 'Кулинария',
      description: 'Кофе занимает особое место в кулинарной культуре — он объединяет десерты, выпечку и даже мясные блюда. Правильно сваренный кофе раскрывает вкус еды и делает приём пищи настоящим событием.',
      quote: 'Как и в кулинарии, в чашке кофе важны баланс, температура и капля любви.',
      img: 'https://i.ibb.co/8ny7nVW2/photo-5301197186664177664-w.jpg'
    },
    {
      title: 'Живые цветы, которые дарят настроение каждый день',
      tag: 'Декор',
      description: 'Они не требуют сложного ухода, но наполняют дом теплом, уютом и ароматом. Живые цветы — это искусство создавать красоту здесь и сейчас. Они напоминают о лете даже в самые холодные дни и становятся изюминкой любого интерьера.',
      quote: 'Красота, остановившая мгновение — в каждом лепестке застыло лето.',
      img: 'https://i.ibb.co/ymQ3bg3q/photo-5269760001742412144-w.jpg'
    },
    {
      title: 'Зимний вечер в Forest',
      tag: 'Атмосфера',
      description: 'Когда за окном метель, а внутри — уют, тепло и аромат свежей выпечки. Зимний вечер в Forest — это сказка, где можно укрыться от холода, насладиться горячим шоколадом и почувствовать себя в безопасности. Огни, свечи и улыбки — всё это ждёт вас.',
      quote: 'Согрейся не только телом, но и душой — приходи к нам в холодный вечер.',
      img: 'https://i.ibb.co/cSBmq89v/photo-5301197186664177662-w.jpg'
    },
    {
      title: 'Кофе и книга',
      tag: 'Досуг',
      description: 'Иногда лучший отдых — это сесть с чашкой любимого напитка и интересной книгой. В нашей уютной атмосфере время течёт незаметно. Мы создали пространство, где можно отключиться от суеты и погрузиться в мир историй и ароматов.',
      quote: 'Хорошая книга и идеальный кофе — лучшее лекарство от суеты.',
      img: 'https://i.ibb.co/YBp5hVWM/image.jpg'
    }
  ];

  const flowers = [
    {
      name: 'Ромашка полевая',
      description: 'Простой и искренний цветок, который дарит тепло и уют. Символ чистоты и нежности.',
      price: 'от 450 ₽',
      badge: 'Простые',
      img: 'https://i.ibb.co/4wqQXjM5/image.jpg'
    },
    {
      name: 'Тюльпан весенний',
      description: 'Яркий и жизнерадостный, напоминает о первых тёплых днях. Цветок надежды и обновления.',
      price: 'от 550 ₽',
      badge: 'Простые',
      img: 'https://i.ibb.co/MyjfnrNn/image.jpg'
    },
    {
      name: 'Лаванда горная',
      description: 'Нежный аромат и успокаивающий фиолетовый оттенок. Идеально для создания атмосферы уюта.',
      price: 'от 750 ₽',
      badge: 'Изящные',
      img: 'https://i.ibb.co/NgfFWzBr/image.jpg'
    },
    {
      name: 'Пион махровый',
      description: 'Роскошный и пышный цветок, который привлекает внимание. Символ богатства и счастья.',
      price: 'от 950 ₽',
      badge: 'Изящные',
      img: 'https://i.ibb.co/NdVvYLnx/image.jpg'
    },
    {
      name: 'Гортензия голубая',
      description: 'Величественный цветок с крупными соцветиями. Символ искренности и глубоких чувств.',
      price: 'от 1200 ₽',
      badge: 'Эксклюзив',
      img: 'https://i.ibb.co/tPBPs0R5/image.jpg'
    },
    {
      name: 'Роза эфирная',
      description: 'Классическая красота с неповторимым ароматом. Цветок страсти, любви и совершенства.',
      price: 'от 1500 ₽',
      badge: 'Эксклюзив',
      img: 'https://i.ibb.co/Q76RfCJ5/image.jpg'
    },
    {
      name: 'Орхидея королевская',
      description: 'Утончённая экзотика, которая завораживает своей красотой. Цветок силы, благородства и роскоши.',
      price: 'от 2000 ₽',
      badge: 'Незабываемые',
      img: 'https://i.ibb.co/Hf3Xrf9g/image.jpg'
    }
  ];

  const menuData = [
    { category: 'Классический кофе', items: [
      { name: 'Экспресс', price: '150', img: 'https://i.ibb.co/KjL8XHRG/image.jpg' },
      { name: 'Американо', price: '180 / 220 / 260', img: 'https://i.ibb.co/9HfrjC4B/image.jpg' },
      { name: 'Флэт Уайт', price: '250', img: 'https://i.ibb.co/g8stW3r/image.jpg' },
      { name: 'Капучино', price: '220 / 260 / 330', img: 'https://i.ibb.co/nXVKJ4V/image.jpg' },
      { name: 'Латте', price: '250 / 290', img: 'https://i.ibb.co/Rp8wn8RZ/image.jpg' },
      { name: 'Раф', price: '320 / 360', img: 'https://i.ibb.co/Q3LxcSRv/image.jpg' }
    ]},
    { category: 'Авторский кофе', items: [
      { name: 'Соленая карамель', price: '330 / 360', img: 'https://i.ibb.co/3YFxYm9n/image.jpg' },
      { name: 'Халвичный', price: '330 / 360', img: 'https://i.ibb.co/gLDfx2Lv/image.jpg' },
      { name: 'Арахисовый', price: '330 / 360', img: 'https://i.ibb.co/9mFCRxQv/image.jpg' },
      { name: 'Апельсиновый', price: '330 / 360', img: 'https://i.ibb.co/2RqQ30L/image.jpg' }
    ]},
    { category: 'Не кофе', items: [
      { name: 'Матча', price: '200 / 220 / 260', img: 'https://i.ibb.co/Q7h4YmMm/image.jpg' },
      { name: 'Какао', price: '100 / 150 / 200', img: 'https://i.ibb.co/Fb4vn4D2/image.jpg' },
      { name: 'Чай таежный', price: '100 / 150 / 200', img: 'https://i.ibb.co/XkSx6c4Y/image.jpg' }
    ]},
    { category: 'Летнее', items: [
      { name: 'Экспресс тоник', price: '250', img: 'https://i.ibb.co/wNTXDjJh/image.jpg' },
      { name: 'Бамбл', price: '300', img: 'https://i.ibb.co/F4tHcsxm/image.jpg' },
      { name: 'Айс Латте', price: '250', img: 'https://i.ibb.co/TBhCQMgN/image.jpg' },
      { name: 'Айс Латте Матча', price: '250', img: 'https://i.ibb.co/MDBBhDCB/image.jpg' },
      { name: 'Смузи', price: '300', img: 'https://i.ibb.co/nqnWfTWp/image.jpg' },
      { name: 'Милкшейк', price: '250', img: 'https://i.ibb.co/N2LGFfxZ/image.jpg' },
      { name: 'Лимонад', price: '200 / 250', img: 'https://i.ibb.co/JwZCdZTZ/image.jpg' },
      { name: 'Фреш цитрус', price: '200 / 300', img: 'https://i.ibb.co/s953f5N2/image.jpg' }
    ]}
  ];

  const bouquetList = [
    { name: 'Нежный мини-букет', price: 'от 1599 руб.', img: 'https://i.ibb.co/gLqVQXb8/photo-5399918740834554392-y.jpg' },
    { name: 'Летняя свежесть', price: 'от 1999 руб.', img: 'https://i.ibb.co/PG6MHTCw/photo-5274263601369784205-w-1.jpg' },
    { name: 'Нежность', price: 'от 2999 руб.', img: 'https://i.ibb.co/ymQ3bg3q/photo-5269760001742412144-w.jpg' },
    { name: 'Нарядный букет', price: 'от 2499 руб.', img: 'https://i.ibb.co/Kj1Wy1Q2/photo-5269760001742412140-w.jpg' },
    { name: 'Цвет настроения - 💜', price: 'от 1999 руб.', img: 'https://i.ibb.co/bgvPVv5z/photo-5265255547416550591-w.jpg' },
    { name: 'Солнечный букет', price: 'от 3599 руб.', img: 'https://i.ibb.co/93tcKWX2/photo-5399918740834554404-y.jpg' }
  ];

  // DOM элементы
  const pages = {
    home: document.getElementById('page-home'),
    gallery: document.getElementById('page-gallery'),
    menu: document.getElementById('page-menu'),
    bouquets: document.getElementById('page-bouquets'),
    promotions: document.getElementById('page-promotions'),
    contacts: document.getElementById('page-contacts')
  };
  const navLinks = document.querySelectorAll('.nav-links a');
  const footerLinks = document.querySelectorAll('.footer a[data-page]');
  const burgerBtn = document.getElementById('burgerBtn');
  const navList = document.getElementById('navLinks');
  const modal = document.getElementById('orderModal');
  const toast = document.getElementById('toastMessage');
  const header = document.getElementById('header');
  const form = document.getElementById('orderForm');
  const productInput = document.getElementById('formProduct');
  const nameInput = document.getElementById('formName');
  const phoneInput = document.getElementById('formPhone');
  const commentInput = document.getElementById('formComment');
  const nameError = document.getElementById('nameError');
  const phoneError = document.getElementById('phoneError');

  // ========== RENDER FUNCTIONS ==========
  function renderGallery() {
    const container = document.getElementById('galleryGrid');
    container.innerHTML = '';
    galleryData.forEach(item => {
      const card = document.createElement('div');
      card.className = 'gallery-card';
      const img = document.createElement('img');
      img.className = 'gallery-img';
      img.src = item.img;
      img.alt = item.title;
      img.loading = 'lazy';
      card.appendChild(img);
      const body = document.createElement('div');
      body.className = 'gallery-body';
      const tag = document.createElement('div');
      tag.className = 'gallery-tag';
      tag.textContent = item.tag;
      const title = document.createElement('h3');
      title.textContent = item.title;
      const desc = document.createElement('p');
      desc.textContent = item.description;
      const quote = document.createElement('div');
      quote.className = 'gallery-quote';
      quote.textContent = '✦ ' + item.quote;
      body.appendChild(tag);
      body.appendChild(title);
      body.appendChild(desc);
      body.appendChild(quote);
      card.appendChild(body);
      container.appendChild(card);
    });
  }

  function renderFlowers() {
    const container = document.getElementById('flowerPreview');
    container.innerHTML = '';
    flowers.forEach((flower, index) => {
      const item = document.createElement('div');
      item.className = 'flower-item';
      item.dataset.index = index;
      const imgDiv = document.createElement('div');
      imgDiv.className = 'flower-img';
      const img = document.createElement('img');
      img.src = flower.img;
      img.alt = flower.name;
      img.loading = 'lazy';
      imgDiv.appendChild(img);
      const infoDiv = document.createElement('div');
      infoDiv.className = 'flower-info';
      const badge = document.createElement('div');
      badge.className = 'badge';
      badge.textContent = flower.badge;
      const title = document.createElement('h3');
      title.textContent = flower.name;
      const desc = document.createElement('p');
      desc.textContent = flower.description;
      const price = document.createElement('div');
      price.className = 'price-tag';
      price.textContent = flower.price;
      infoDiv.appendChild(badge);
      infoDiv.appendChild(title);
      infoDiv.appendChild(desc);
      infoDiv.appendChild(price);
      item.appendChild(imgDiv);
      item.appendChild(infoDiv);
      container.appendChild(item);
    });
  }

  function renderMenu() {
    const container = document.getElementById('menuContainer');
    container.innerHTML = '';
    menuData.forEach(cat => {
      const title = document.createElement('div');
      title.className = 'category-label';
      title.textContent = cat.category;
      container.appendChild(title);
      const grid = document.createElement('div');
      grid.className = 'card-grid';
      cat.items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        const img = document.createElement('img');
        img.className = 'card-img';
        img.src = item.img || 'https://picsum.photos/seed/' + encodeURIComponent(cat.category + item.name) + '/400/300';
        img.alt = item.name;
        img.loading = 'lazy';
        card.appendChild(img);
        const body = document.createElement('div');
        body.className = 'card-body';
        const titleEl = document.createElement('div');
        titleEl.className = 'card-title';
        titleEl.textContent = item.name;
        const price = document.createElement('div');
        price.className = 'card-price';
        price.textContent = item.price + ' ₽';
        const desc = document.createElement('div');
        desc.className = 'card-desc';
        desc.textContent = 'фото напитка';
        const btn = document.createElement('button');
        btn.className = 'btn-order-sm';
        btn.textContent = 'Заказать';
        btn.dataset.product = item.name;
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          openModal(item.name);
        });
        body.appendChild(titleEl);
        body.appendChild(price);
        body.appendChild(desc);
        body.appendChild(btn);
        card.appendChild(body);
        grid.appendChild(card);
      });
      container.appendChild(grid);
    });
  }

  function renderBouquets() {
    const grid = document.getElementById('bouquetGrid');
    grid.innerHTML = '';
    bouquetList.forEach(b => {
      const card = document.createElement('div');
      card.className = 'card';
      const img = document.createElement('img');
      img.className = 'card-img';
      img.src = b.img || 'https://picsum.photos/seed/' + encodeURIComponent(b.name) + '/400/300';
      img.alt = b.name;
      img.loading = 'lazy';
      card.appendChild(img);
      const body = document.createElement('div');
      body.className = 'card-body';
      const title = document.createElement('div');
      title.className = 'card-title';
      title.textContent = b.name;
      const price = document.createElement('div');
      price.className = 'card-price';
      price.textContent = b.price;
      const btn = document.createElement('button');
      btn.className = 'btn-order-sm';
      btn.textContent = 'Заказать';
      btn.dataset.product = b.name;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openModal(b.name);
      });
      body.appendChild(title);
      body.appendChild(price);
      body.appendChild(btn);
      card.appendChild(body);
      grid.appendChild(card);
    });
  }

  // ========== SCROLL ANIMATION ==========
  function setupFlowerAnimations() {
    const flowerItems = document.querySelectorAll('.flower-item');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 120);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    flowerItems.forEach(item => observer.observe(item));
  }

  // ========== NAVIGATION ==========
  function navigate(pageId, scrollToId) {
    Object.values(pages).forEach(p => p.classList.remove('active'));
    if (pages[pageId]) pages[pageId].classList.add('active');

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.dataset.page === pageId) link.classList.add('active');
    });

    navList.classList.remove('open');
    burgerBtn.setAttribute('aria-expanded', 'false');

    if (scrollToId) {
      setTimeout(() => {
        const el = document.getElementById(scrollToId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 400);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (pageId === 'home') {
      setTimeout(setupFlowerAnimations, 300);
    }
  }

  // ========== MODAL ==========
  function openModal(product) {
    productInput.value = product || '';
    modal.classList.add('open');
    document.getElementById('formName').value = '';
    document.getElementById('formPhone').value = '';
    document.getElementById('formComment').value = '';
    nameError.classList.remove('show');
    phoneError.classList.remove('show');
    nameInput.classList.remove('input-error');
    phoneInput.classList.remove('input-error');
  }

  function closeModal() {
    modal.classList.remove('open');
  }

  function showToast() {
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  }

  // ========== VALIDATION ==========
  function validateForm() {
    let isValid = true;
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    if (!name) {
      nameError.classList.add('show');
      nameInput.classList.add('input-error');
      isValid = false;
    } else {
      nameError.classList.remove('show');
      nameInput.classList.remove('input-error');
    }

    const phoneDigits = phone.replace(/[^\d+]/g, '');
    if (phoneDigits.length < 10 || !phone) {
      phoneError.classList.add('show');
      phoneInput.classList.add('input-error');
      isValid = false;
    } else {
      phoneError.classList.remove('show');
      phoneInput.classList.remove('input-error');
    }

    return isValid;
  }

  // ========== TELEGRAM SEND ==========
  function sendToTelegram(product, name, phone, comment) {
    const text = `🛒 <b>Новый заказ из Forest</b>\n\n📦 <b>Товар:</b> ${product || 'Без товара'}\n👤 <b>Имя:</b> ${name}\n📞 <b>Телефон:</b> ${phone}\n💬 <b>Комментарий:</b> ${comment || 'Нет'}`;

    // Используем глобальные переменные из config.js
    if (typeof TELEGRAM_TOKEN === 'undefined' || typeof TELEGRAM_CHAT_ID === 'undefined' || !TELEGRAM_TOKEN || !TELEGRAM_CHAT_ID) {
      console.log('=== TELEGRAM МОК (токен не задан) ===');
      console.log(text);
      console.log('=== КОНЕЦ МОКА ===');
      return Promise.resolve();
    }

    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: text,
        parse_mode: 'HTML'
      })
    });
  }

  // ========== EVENTS ==========
  // Навигация шапка
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      if (page) navigate(page);
    });
  });

  // Навигация футер
  footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      const scroll = link.dataset.scroll || null;
      if (page) navigate(page, scroll);
    });
  });

  // Кнопки с data-page (например, "Смотреть меню")
  document.querySelectorAll('[data-page]').forEach(el => {
    if (el.tagName === 'A' && el.dataset.page && !el.closest('.footer')) {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const page = el.dataset.page;
        if (page) navigate(page);
      });
    }
  });

  // Бургер
  burgerBtn.addEventListener('click', () => {
    const isOpen = navList.classList.contains('open');
    if (isOpen) {
      navList.classList.remove('open');
      burgerBtn.setAttribute('aria-expanded', 'false');
    } else {
      navList.classList.add('open');
      burgerBtn.setAttribute('aria-expanded', 'true');
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header') && navList.classList.contains('open')) {
      navList.classList.remove('open');
      burgerBtn.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navList.classList.contains('open')) {
      navList.classList.remove('open');
      burgerBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Модалка
  document.getElementById('headerOrderBtn').addEventListener('click', () => openModal(''));
  document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Форма
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const product = productInput.value || 'Без товара';
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const comment = commentInput.value.trim();

    sendToTelegram(product, name, phone, comment)
      .then(() => {
        closeModal();
        showToast();
      })
      .catch((err) => {
        console.error('Ошибка отправки:', err);
        closeModal();
        showToast();
      });
  });

  // Логотип
  document.getElementById('logoLink').addEventListener('click', (e) => {
    e.preventDefault();
    navigate('home');
  });

  // Скролл хедера
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 20) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
        ticking = false;
      });
      ticking = true;
    }
  });

  // Автообновление года в футере
  document.getElementById('currentYear').textContent = new Date().getFullYear();

  // ========== INIT ==========
  renderGallery();
  renderFlowers();
  renderMenu();
  renderBouquets();
  navigate('home');

  setTimeout(setupFlowerAnimations, 500);
  window.addEventListener('resize', () => {
    setTimeout(setupFlowerAnimations, 300);
  });

})();