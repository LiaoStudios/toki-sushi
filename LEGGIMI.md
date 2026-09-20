# Toki Sushi–Asian Bologna — Sito web

Sito statico (HTML/CSS/JS, nessun framework). Si carica su qualsiasi hosting
copiando la cartella `SitoWeb`.

## Pagine
- `index.html` — Home
- `il-ristorante.html` — Il Ristorante
- `menu-ayce.html` — Menu All You Can Eat
- `menu-alla-carta.html` — Menu Alla Carta
- `gallery.html` — Gallery (con lightbox)
- `contatti.html` — Contatti + prenotazione + mappa stilizzata + asporto/delivery
- `privacy.html` / `cookie.html` — pagine legali (da far verificare)

## File
- `assets/css/style.css` — stili
- `assets/js/main.js` — menu, animazioni, filtri, lightbox, form
- `assets/img/` — immagini ottimizzate
- `assets/img/logo-light.png` — logo trasparente per sfondi scuri (header/footer)
- `assets/img/logo-dark.png` — logo trasparente per sfondi chiari (se serve)

## DATI REALI inseriti (dai canali ufficiali Toki)
- Indirizzo: **Via Ferrarese 119/2, 40128 Bologna (BO)**
- Telefono / WhatsApp: **+39 051 0143981**
- Orari: **aperti tutti i giorni · Pranzo 12–15 · Cena 19–00**
- Instagram: https://www.instagram.com/toki_sushiasianbologna/
- Facebook: https://www.facebook.com/tokisushiasianbologna
- TikTok: https://www.tiktok.com/@tokisushiasian
- Just Eat: https://www.justeat.it/restaurants-toki-sushi-asian-bologna-40128/menu
- Glovo: https://glovoapp.com/it/it/bologna/stores/toki-sushi-asian-bol
- Google Maps: link "Apri su Google Maps" (ricerca per nome + indirizzo)

## MENU (dai PDF ufficiali pranzo/cena/asporto 2025-2026)
- **AYCE Pranzo:** €14,90 (Lun–Ven) / €16,90 (Sab, Dom, festivi) · coperto €2
- **AYCE Cena:** €30,90 (tutti i giorni) · coperto €2
- **Asporto:** Menu Offerta 6 piatti €26,90 · Box 34pz €22 / 40pz €30 / 72pz €40
- **Menu Alla Carta:** ~199 piatti reali (26 categorie) con prezzi e allergeni, filtrabili.
  Estratti automaticamente dai PDF per evitare errori di trascrizione.
- Le **immagini dei PDF** (solo illustrative) non sono state usate: il sito usa le foto
  professionali reali del ristorante (Instagram/Google Business).

## ANCORA DA VERIFICARE / SOSTITUIRE
- **Email**: usato `info@toki-bologna.it` (dominio del sito ufficiale) — confermare.
- **Recensioni**: testi placeholder segnalati, da sostituire con recensioni reali.
- **Bevande e dolci**: esclusi dalla formula e non elencati nei PDF (nessun prezzo inventato).
- **Prenotazioni**: via telefono/WhatsApp (nessun modulo email).
- **Delivery**: Just Eat, Glovo e Deliveroo (link reali) in home, contatti e footer.

## Anteprima locale
Dalla cartella `SitoWeb`:
    python3 -m http.server 8000
poi apri http://localhost:8000
