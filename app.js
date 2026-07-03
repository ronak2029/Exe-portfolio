document.addEventListener('DOMContentLoaded', () => {
  
  // --- DATABASE: FASHION Chronicles EDITORIALS ---
  const blogDatabase = {
    'b1': {
      title: 'The Resurgence of Structured Minimalist Silhouettes',
      category: 'Silhouette Study',
      author: 'Sylvia Thorne',
      date: 'July 01, 2026',
      readTime: '12 min read',
      image: 'assets/blog_preview_1.png',
      content: `
        <p>In modern haute couture, structure and raw minimalism are merging to create striking visual statements. Structured silhouettes—defined by clean architectural lines, hidden internal seams, and precise padding—have taken center stage in our recent runway collections.</p>
        <h2>The Architecture of Pattern Cutting</h2>
        <p>Designing a structured blazer requires a builder's approach to tailoring. By utilizing canvas interlinings made of horsehair and wool blends, we can construct collars and lapels that maintain their curve and rigidity without feeling stiff. This creates a garment that hangs perfectly from the shoulders, establishing a clean frame independent of the wearer's movements.</p>
        <h2>Eco-Responsible Wool Selection</h2>
        <p>Rigid designs require materials with natural bounce. We source traceable, upcycled virgin wool from Italian family-run mills. These wools are treated with natural beeswax rather than synthetic finishes, preserving the fiber's breatheability and natural elasticity while repelling moisture.</p>
        <h2>Styling the Modern Silhouette</h2>
        <p>When styling structured garments, balance is crucial. We suggest pairing our Obsidian Noir blazer with wide-leg draped linen trousers. This juxtaposition of rigid shoulder geometry and fluid leg movements creates a visually interesting, premium styling layout.</p>
      `
    },
    'b2': {
      title: 'Sourcing Organic Silk: Ethical Sericulture Processes',
      category: 'Atelier Journal',
      author: 'Julian Vance',
      date: 'June 24, 2026',
      readTime: '8 min read',
      image: 'assets/blog_preview_2.png',
      content: `
        <p>Silk is celebrated for its luster and drape, but traditional silk harvesting has high environmental and ethical costs. At Maison AURA, we have transitioned our entire collection to certified organic sericulture, ensuring the process is ethical and traceable.</p>
        <h2>Mulberry Agriculture and Soil Care</h2>
        <p>Ethical silk begins in the mulberry orchards. Our partner silk cooperatives in organic regions cultivate mulberry trees without chemical pesticides. By utilizing companion planting and organic compost, the soil remains mineral-rich, producing healthy mulberry leaves that nourish silkworms naturally.</p>
        <h2>Cruelty-Free Spinning (Ahimsa Silk)</h2>
        <p>Standard silk harvesting involves heating cocoons before the moths emerge, which preserves long filament lines but harms the moth. We source Ahimsa (Peace) silk, allowing the silkworm to fully metamorphose and leave the cocoon naturally before harvesting the silk fiber.</p>
        <p>Once the moth emerges, our artisans carefully hand-spin the broken fibers. This hand-spinning process creates a slightly textured, organic weave that reflects light unevenly, giving our Luminescence collection its characteristic natural shimmer.</p>
      `
    },
    'b3': {
      title: 'Behind the Scenes: SS26 Lookbook Shoot',
      category: 'Styling',
      author: 'Elena Rostova',
      date: 'June 15, 2026',
      readTime: '6 min read',
      image: 'assets/project_preview_2.png',
      content: `
        <p>Creating our seasonal lookbook is a collaborative process that takes months of preparation. For the Luminescence Spring/Summer 2026 campaign, we wanted to capture how our garments interact with natural golden hour lighting.</p>
        <h2>Curating the Visual Concept</h2>
        <p>The theme of Luminescence revolves around light reflection and organic movement. We chose a wind-swept coastal location where the shifting sun and sea breezes could showcase the fluid drapes of our silk shirts and light linen dresses.</p>
        <h2>On-Set Styling Decisions</h2>
        <p>During the shoot, we focused on monochromatic pairings. Slinky silk blouses were matched with textured linen trousers and raw wood accessories, highlighting the difference between smooth silk shine and rustic matte fabric fibers.</p>
        <p>You can view the full selection of images inside the Collections tab, and purchase individual items through our private atelier styling desks.</p>
      `
    },
    'b4': {
      title: 'The Chemistry of Natural Botanical Indigo Dyes',
      category: 'Fabric Science',
      author: 'Julian Vance',
      date: 'May 29, 2026',
      readTime: '10 min read',
      image: 'assets/project_preview_3.png',
      content: `
        <p>Synthetic chemical dyes are a leading cause of water pollution in fashion manufacturing. In our search for green alternatives, we turned to botanical indigo extraction—a traditional process that yields deep, stable blues without toxic chemicals.</p>
        <h2>Indigofera Tinctoria Fermentation</h2>
        <p>Natural indigo pigments are not water-soluble. To dye fabrics, we harvest leaves of the Indigofera plant and ferment them in alkaline wood-ash vats. This fermentation process reduces the indigo into a soluble state, turning the liquid a greenish-yellow color.</p>
        <h2>Fabric Oxidation Mechanics</h2>
        <p>When linen fabric is immersed in the indigo vat and lifted into the air, oxygen reacts with the dye, transforming the pigment into its characteristic deep blue. Repeating this dipping and oxidation cycle builds rich layers of color that naturally resist fading.</p>
        <p>By avoiding synthetic mordants, the runoff from our dye vats is completely biodegradable and safe for irrigation, closing the circle of ethical production.</p>
      `
    }
  };

  // --- DATABASE: LOOKBOOKS DETAILS ---
  const projectDatabase = {
    'p1': {
      title: 'Luminescence Silk Drapery',
      category: 'Spring/Summer 2026',
      tags: ['Organic Silk', 'Ahimsa Silk', 'Natural Gold Dyes', 'Unisex'],
      image: 'assets/project_preview_1.png',
      content: `
        <p>The Luminescence collection highlights the beauty of natural silk filaments. Featuring light-reflective fibers, each piece is designed to drape softly, responding to the wearer's movements with natural fluid curves.</p>
        <h2>Material Sourcing Details</h2>
        <ul>
          <li><strong>Organic Ahimsa Silk</strong>: Spun after the moth emerges.</li>
          <li><strong>Botanical Goldenrod Dyes</strong>: Earthy, warm champagne tones extracted from local plants.</li>
          <li><strong>Handmade Heritage Weaves</strong>: Woven on traditional wooden looms in our ateliers.</li>
        </ul>
        <h2>Styling Recommendations</h2>
        <p>We recommend layering our draped silk shirts under unstructured blazers for a soft, premium look. Wash by hand with pH-neutral soap to preserve the delicate natural botanical dyes.</p>
      `
    },
    'p2': {
      title: 'Obsidian Noir Blazer',
      category: 'Autumn/Winter 2026',
      tags: ['Upcycled Wool', 'Structured Tailoring', 'Matte Black', 'Atelier Crafted'],
      image: 'assets/project_preview_2.png',
      content: `
        <p>A study of sharp tailoring and minimalist lines. The Obsidian Noir blazer uses structured interlinings to create clean, architectural shoulder lines and flat lapels.</p>
        <h2>Design Features</h2>
        <ul>
          <li><strong>Traceable Virgin Wool</strong>: Sourced from eco-conscious heritage mills.</li>
          <li><strong>Internal Canvas Structure</strong>: Provides structural shape without synthetic stiffness.</li>
          <li><strong>Shorn-Horn Buttons</strong>: Biodegradable buttons made from responsibly sourced horn.</li>
        </ul>
        <p>Each jacket is individually tailored at our Presidio studio to guarantee a perfect fit.</p>
      `
    },
    'p3': {
      title: 'Reclaimed Linen Loungewear',
      category: 'Eco-Line',
      tags: ['Organic Flax Linen', 'Zero Waste Patterns', 'Bio-Bleaching', 'Natural Indigo'],
      image: 'assets/project_preview_3.png',
      content: `
        <p>Designed for relaxed, everyday luxury, our Reclaimed Linen collection utilizes zero-waste cutting patterns, ensuring every thread of flax is incorporated into the design.</p>
        <h2>Sustainable Production Steps</h2>
        <p>By using linen naturally bleached with plant enzymes, we bypass harsh chlorine chemicals. The fabrics are then dyed in small batches using fermented indigo leaves, creating unique, hand-crafted blue color variations.</p>
      `
    }
  };

  // --- GLOBAL VARIABLES & OBSERVER DECLARATIONS ---
  const sections = document.querySelectorAll('.app-section');
  const navLinks = document.querySelectorAll('.nav-link');
  const isObserverSupported = 'IntersectionObserver' in window;
  let revealObserver;

  if (isObserverSupported) {
    revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Animate once
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.05
    });
  }

  // --- HELPER FUNCTIONS ---

  function revealOnScroll(parentScope = document) {
    const revealElements = parentScope.querySelectorAll('.reveal');
    revealElements.forEach(el => {
      if (isObserverSupported && revealObserver) {
        revealObserver.observe(el);
      } else {
        el.classList.add('visible');
      }
    });

    // Fallback: force visibility of top elements inside active view immediately to avoid blank screens
    setTimeout(() => {
      const activeSection = document.querySelector('.app-section.active');
      if (activeSection) {
        const visibleHeader = activeSection.querySelector('.section-header.reveal');
        if (visibleHeader) visibleHeader.classList.add('visible');
        
        const topReveal = activeSection.querySelector('.reveal');
        if (topReveal) topReveal.classList.add('visible');
      }
    }, 200);
  }

  function navigateToSection(sectionId) {
    // 1. Hide active hamburger navbar if open
    const navbar = document.getElementById('navbar');
    if (navbar) {
      navbar.classList.remove('active');
    }

    // 2. Hide all sections
    sections.forEach(sec => {
      sec.classList.remove('active');
    });

    // 3. Show targeted section
    const targetSec = document.getElementById(sectionId);
    if (targetSec) {
      targetSec.classList.add('active');
      window.scrollTo(0, 0);
      
      // Trigger scroll reveals inside newly active section
      revealOnScroll(targetSec);
    }

    // 4. Update Nav Links indicators
    navLinks.forEach(link => {
      if (link.getAttribute('data-section') === sectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // 5. Update browser URL hash (without reloading page)
    if (window.location.hash.slice(1) !== sectionId) {
      history.pushState(null, null, `#${sectionId}`);
    }
  }

  function handleInitialRoute() {
    const hash = window.location.hash.slice(1);
    const validSections = ['home', 'portfolio', 'community', 'team', 'blog', 'support'];
    const initialSection = validSections.includes(hash) ? hash : 'home';
    navigateToSection(initialSection);
  }

  function openModal(htmlContent) {
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContentArea = document.getElementById('modal-content-area');
    if (modalContentArea && modalOverlay) {
      modalContentArea.innerHTML = htmlContent;
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // Lock background scrolling
    }
  }

  function closeModal() {
    const modalOverlay = document.getElementById('modal-overlay');
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // --- ATTACH EVENT LISTENERS (Guarded and Safe) ---

  // Nav click handlers
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSec = link.getAttribute('data-section');
      navigateToSection(targetSec);
    });
  });

  // Action button navigators (CTA, footer links)
  document.body.addEventListener('click', (e) => {
    const trigger = e.target.closest('.nav-trigger');
    if (trigger) {
      e.preventDefault();
      const targetSec = trigger.getAttribute('data-target');
      navigateToSection(targetSec);
    }
  });

  // Logo home navigate
  const logoHome = document.getElementById('logo-home');
  if (logoHome) {
    logoHome.addEventListener('click', (e) => {
      e.preventDefault();
      navigateToSection('home');
    });
  }

  // Hamburger menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navbarElement = document.getElementById('navbar');
  if (menuToggle && navbarElement) {
    menuToggle.addEventListener('click', () => {
      navbarElement.classList.toggle('active');
    });
  }

  // Scroll action header monitor
  const headerElement = document.querySelector('header');
  if (headerElement) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        headerElement.classList.add('scrolled');
      } else {
        headerElement.classList.remove('scrolled');
      }
    });
  }

  // Portfolio category filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        
        card.style.opacity = '0';
        card.style.transform = 'translateY(10px) scale(0.99)';
        
        setTimeout(() => {
          if (filterVal === 'all' || cat === filterVal) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0) scale(1)';
              card.classList.add('visible');
            }, 50);
          } else {
            card.style.display = 'none';
          }
        }, 300);
      });
    });
  });

  // Modal overlay click bindings
  const modalClose = document.getElementById('modal-close');
  const modalOverlay = document.getElementById('modal-overlay');
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Attach click events dynamically for blog posts
  document.body.addEventListener('click', (e) => {
    const blogTitle = e.target.closest('[data-blog-id]');
    if (blogTitle) {
      const blogId = blogTitle.getAttribute('data-blog-id');
      const article = blogDatabase[blogId];
      if (article) {
        const content = `
          <img src="${article.image}" class="modal-header-img" alt="${article.title}">
          <div class="modal-meta">
            <span class="badge">${article.category}</span>
            <span>By ${article.author}</span>
            <span>&bull;</span>
            <span>${article.date}</span>
            <span>&bull;</span>
            <span>${article.readTime}</span>
          </div>
          <h1 style="font-size: 2rem; margin-bottom: 1.5rem; font-family: 'Playfair Display', serif; line-height: 1.3;">${article.title}</h1>
          <div class="modal-body">${article.content}</div>
        `;
        openModal(content);
      }
    }
  });

  // Attach click events dynamically for project detail buttons
  document.body.addEventListener('click', (e) => {
    const projectBtn = e.target.closest('[data-project-id]');
    if (projectBtn) {
      e.preventDefault();
      const projId = projectBtn.getAttribute('data-project-id');
      const proj = projectDatabase[projId];
      if (proj) {
        const tagsHtml = proj.tags.map(t => `<span class="badge" style="background: transparent; color: var(--color-primary); border-color: var(--border-color-focus); margin-right: 0.5rem; text-transform: none; font-size: 0.65rem;">${t}</span>`).join('');
        const content = `
          <img src="${proj.image}" class="modal-header-img" alt="${proj.title}">
          <div style="margin-bottom: 1.5rem; display: flex; flex-wrap: wrap; gap: 0.5rem;">
            ${tagsHtml}
          </div>
          <h1 style="font-size: 2rem; margin-bottom: 0.5rem; font-family: 'Playfair Display', serif; line-height: 1.3;">${proj.title}</h1>
          <h4 style="color: var(--color-text-secondary); margin-bottom: 2rem; font-family: 'Inter', sans-serif; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.12em; font-weight: 500;">Collection Scope: ${proj.category}</h4>
          <div class="modal-body">${proj.content}</div>
          <div style="margin-top: 2.5rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
            <button class="btn btn-primary" onclick="alert('Inquire for bespoke pricing options regarding this collection at our showroom...');">Request Atelier Pricing</button>
          </div>
        `;
        openModal(content);
      }
    }
  });

  // Editorials Search
  const blogSearch = document.getElementById('blog-search');
  const blogGrid = document.getElementById('blog-grid');
  if (blogSearch && blogGrid) {
    blogSearch.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const blogCards = blogGrid.querySelectorAll('.blog-card');

      blogCards.forEach(card => {
        const matchText = card.getAttribute('data-title') || '';
        const textTitle = card.querySelector('h4').innerText.toLowerCase();
        
        if (matchText.includes(query) || textTitle.includes(query)) {
          card.style.display = 'grid';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // FAQ Accordion expansion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });



  // Support Ticket Form
  const ticketForm = document.getElementById('support-ticket-form');
  const ticketSuccess = document.getElementById('ticket-success');
  const ticketIdDisplay = document.getElementById('ticket-id-display');
  if (ticketForm && ticketSuccess) {
    ticketForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = ticketForm.querySelector('button[type="submit"]');
      const email = document.getElementById('ticket-email').value;
      const category = document.getElementById('ticket-category').value;
      const message = document.getElementById('ticket-desc').value;
      
      if (submitBtn) {
        submitBtn.innerHTML = 'Sending Inquiry...';
        submitBtn.disabled = true;
      }
      
      fetch('send_email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, category, message })
      })
      .then(res => res.json())
      .then(data => {
        if (submitBtn) {
          submitBtn.innerHTML = 'Send Inquiry';
          submitBtn.disabled = false;
        }
        if (data.success) {
          const randomId = Math.floor(10000 + Math.random() * 90000);
          if (ticketIdDisplay) {
            ticketIdDisplay.innerText = `Ticket ID: #AURA-${randomId} (Sent successfully)`;
          }
          ticketForm.reset();
          ticketSuccess.classList.add('active');
        } else {
          alert('Delivery Error: ' + data.message);
        }
      })
      .catch(err => {
        if (submitBtn) {
          submitBtn.innerHTML = 'Send Inquiry';
          submitBtn.disabled = false;
        }
        console.error(err);
        alert('Network/Server Error: Unable to submit styling inquiry.');
      });
    });
  }


  // --- CRAFTSMANSHIP TIMELINE INTERACTION ---
  const craftsTabs = document.querySelectorAll('.timeline-tab');
  const craftsMainImg = document.getElementById('crafts-main-img');
  const timelineCard = document.getElementById('timeline-card');
  const timelineStepTitle = document.getElementById('timeline-step-title');
  const timelineStepDesc = document.getElementById('timeline-step-desc');
  const timelineInsetImg = document.getElementById('timeline-inset-img');

  const timelineStepsData = {
    '1': {
      title: 'Traceable Fibers & Sericulture',
      desc: 'We source cruelty-free Ahimsa silk and organic linen dyed in botanical vats. Every thread of flax can be traced back to its community-certified farm.',
      mainImg: 'assets/team_avatar_3.png',
      insetImg: 'assets/project_preview_3.png'
    },
    '2': {
      title: 'Zero-Waste Drafting',
      desc: 'Our designers draft pattern layouts in interlocking puzzle structures. By matching curves and angles perfectly, we eliminate textile cut-offs completely.',
      mainImg: 'assets/blog_preview_1.png',
      insetImg: 'assets/project_preview_1.png'
    },
    '3': {
      title: 'Hand Canvas Stitching',
      desc: 'A single tailored blazer requires over 45 hours of hand-canvas needlework. Tailors shape the curves using steam and structural stitching.',
      mainImg: 'assets/team_avatar_2.png',
      insetImg: 'assets/project_preview_2.png'
    }
  };

  if (craftsTabs.length > 0 && craftsMainImg && timelineCard) {
    craftsTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        craftsTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const step = tab.getAttribute('data-step');
        const data = timelineStepsData[step];

        if (data) {
          if (typeof gsap !== 'undefined') {
            gsap.to([craftsMainImg, timelineCard], {
              opacity: 0,
              y: 10,
              duration: 0.25,
              onComplete: () => {
                timelineStepTitle.innerText = data.title;
                timelineStepDesc.innerText = data.desc;
                craftsMainImg.src = data.mainImg;
                timelineInsetImg.src = data.insetImg;

                gsap.to([craftsMainImg, timelineCard], {
                  opacity: 1,
                  y: 0,
                  duration: 0.4,
                  ease: 'power2.out'
                });
              }
            });
          } else {
            timelineStepTitle.innerText = data.title;
            timelineStepDesc.innerText = data.desc;
            craftsMainImg.src = data.mainImg;
            timelineInsetImg.src = data.insetImg;
          }
        }
      });
    });
  }

  // --- HERO MOUSE-TRACKING PARALLAX ---
  const heroSection = document.querySelector('.luxury-hero');
  const heroImg = document.querySelector('.parallax-hero-img');
  if (heroSection && heroImg && typeof gsap !== 'undefined') {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(heroImg, {
        x: x * 20,
        y: y * 20,
        duration: 0.8,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    });

    heroSection.addEventListener('mouseleave', () => {
      gsap.to(heroImg, {
        x: 0,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    });
  }

  // --- STATS COUNTING ANIMATION ---
  function animateStats() {
    const statsElements = document.querySelectorAll('.stat-num');
    statsElements.forEach(stat => {
      const targetVal = parseInt(stat.getAttribute('data-target-num'), 10);
      let curVal = 0;
      const stepDuration = Math.max(10, Math.floor(1500 / targetVal));
      const interval = setInterval(() => {
        curVal++;
        stat.innerText = curVal;
        if (curVal >= targetVal) {
          stat.innerText = targetVal;
          clearInterval(interval);
        }
      }, stepDuration);
    });
  }

  // --- GSAP SCROLL TRIGGERS ---
  if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Initial Load Timeline
    const heroTimeline = gsap.timeline();
    heroTimeline.fromTo('.hero-label', 
      { opacity: 0, y: 15 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo('.hero-headline .reveal-line',
      { y: '100%' },
      { y: '0%', duration: 1.2, ease: 'power4.out', stagger: 0.15 },
      '-=0.6'
    )
    .fromTo('.hero-desc',
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.8'
    )
    .fromTo('.hero-cta-wrapper',
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo('.hero-image-container',
      { clipPath: 'inset(100% 0% 0% 0%)' },
      { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.6, ease: 'power4.inOut' },
      '-=1.4'
    )
    .fromTo('.parallax-hero-img',
      { scale: 1.25 },
      { scale: 1.08, duration: 2, ease: 'power3.out' },
      '-=1.2'
    )
    .add(animateStats, '-=0.8');

    // Scroll Anim: Featured Collection cards
    gsap.utils.toArray('.featured-card').forEach(card => {
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%'
          }
        }
      );
    });

    // Scroll Anim: Craftsmanship visual parallax
    gsap.fromTo('.crafts-visual img',
      { scale: 1.12 },
      {
        scale: 1.01,
        scrollTrigger: {
          trigger: '.craftsmanship-section',
          start: 'top 90%',
          end: 'bottom 20%',
          scrub: true
        }
      }
    );

    // Scroll Anim: Signature pieces clip reveal
    gsap.utils.toArray('.signature-row').forEach(row => {
      const text = row.querySelector('.sig-text');
      const img = row.querySelector('.sig-img');
      gsap.fromTo(img,
        { clipPath: 'inset(0% 100% 0% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.4,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: row,
            start: 'top 75%'
          }
        }
      );
      gsap.fromTo(text,
        { opacity: 0, x: row.classList.contains('alt') ? 30 : -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 75%'
          }
        }
      );
    });

    // Scroll Anim: Testimonials
    gsap.fromTo('.atelier-testimonials',
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.atelier-testimonials',
          start: 'top 80%'
        }
      }
    );
  } else {
    animateStats();
  }

  // --- INITIALIZE ROUTING & SCROLL REVEALS ---
  
  try {
    // 1. Observe scroll reveal hooks
    revealOnScroll();
  } catch (err) {
    console.error("Scroll reveal init error:", err);
  }

  try {
    // 2. Perform initial SPA routing
    handleInitialRoute();
  } catch (err) {
    console.error("Initial routing error:", err);
  }

  // 3. Listen to browser history hash changes (back/forward or URL hash updates)
  window.addEventListener('hashchange', () => {
    try {
      const hash = window.location.hash.slice(1);
      const validSections = ['home', 'portfolio', 'community', 'team', 'blog', 'support'];
      if (validSections.includes(hash)) {
        navigateToSection(hash);
      }
    } catch (err) {
      console.error("Hashchange routing error:", err);
    }
  });

});
