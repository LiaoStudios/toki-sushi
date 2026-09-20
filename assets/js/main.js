/* ===== TOKI — interactions ===== */
(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* ---- Header state on scroll ---- */
  const header = $(".site-header");
  const isSolid = header && header.classList.contains("solid");
  const onScroll = () => {
    if (!header || isSolid) return;
    header.classList.toggle("scrolled", window.scrollY > 40);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  const burger = $(".hamburger");
  const closeMenu = () => document.body.classList.remove("menu-open");
  if (burger) {
    burger.addEventListener("click", () =>
      document.body.classList.toggle("menu-open")
    );
    $$(".mobile-nav a").forEach((a) => a.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---- Reveal on scroll ---- */
  const reveals = $$(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* ---- Filterable grids (menu highlight + alla carta) ---- */
  $$("[data-tabset]").forEach((set) => {
    const tabs = $$(".tab", set);
    const scope = set.getAttribute("data-target")
      ? $(set.getAttribute("data-target"))
      : set.nextElementSibling;
    if (!scope) return;
    const items = $$("[data-cat]", scope);
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        const f = tab.dataset.filter;
        items.forEach((it) => {
          const show = f === "all" || it.dataset.cat === f;
          it.classList.toggle("is-hidden", !show);
        });
      });
    });
  });

  /* ---- Lightbox for gallery ---- */
  const lb = $(".lightbox");
  if (lb) {
    const lbImg = $("img", lb);
    const links = $$("[data-lightbox]");
    let idx = 0;
    const srcs = links.map((l) => l.getAttribute("href") || l.dataset.full);
    const open = (i) => {
      idx = (i + srcs.length) % srcs.length;
      lbImg.src = srcs[idx];
      lb.classList.add("open");
      document.body.style.overflow = "hidden";
    };
    const close = () => {
      lb.classList.remove("open");
      document.body.style.overflow = "";
    };
    links.forEach((l, i) =>
      l.addEventListener("click", (e) => {
        e.preventDefault();
        open(i);
      })
    );
    $(".lightbox__close", lb).addEventListener("click", close);
    $(".lightbox__nav.prev", lb).addEventListener("click", () => open(idx - 1));
    $(".lightbox__nav.next", lb).addEventListener("click", () => open(idx + 1));
    lb.addEventListener("click", (e) => {
      if (e.target === lb) close();
    });
    document.addEventListener("keydown", (e) => {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") open(idx + 1);
      if (e.key === "ArrowLeft") open(idx - 1);
    });
  }

  /* ---- Booking form (demo, no backend) ---- */
  const form = $("#booking-form");
  if (form) {
    const dateInput = $('input[type="date"]', form);
    if (dateInput) dateInput.min = new Date().toISOString().split("T")[0];
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      form.style.display = "none";
      const ok = $("#booking-success");
      if (ok) ok.classList.add("show");
    });
  }

  /* ---- Footer year ---- */
  $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

  /* ---- Highlight today's opening row ---- */
  $$("[data-days]").forEach((row) => {
    const days = row.dataset.days.split(",").map(Number);
    if (days.includes(new Date().getDay())) row.classList.add("today");
  });
})();
