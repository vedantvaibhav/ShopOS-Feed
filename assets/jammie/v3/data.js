// jammie v3 shared data and the pieces every page draws the same way.
// The ideas, numbers and words below are taken from the live demo store (Comet) on 22 Nov 2026.
window.JAMMIE = (() => {
  const A = 'assets/jammie/v3/', D = A + 'demo/';
  // Jammie is the only character in the product. The others are a guideline for when more are needed.
  const GUIDE = [
    { id:'star', shape:'Star' }, { id:'bubble', shape:'Speech bubble' }, { id:'arch', shape:'Arch' }, { id:'heart', shape:'Heart' },
    { id:'play', shape:'Play' }, { id:'pebble', shape:'Ball' }, { id:'cloud', shape:'Cloud' }, { id:'bolt', shape:'Bolt' },
  ];
  const IDEAS = [
    { id:'reel',    kicker:'Made for you',   kind:'Reel',        age:'3h',  img:'reel.jpg', video:'reel.mp4', title:'Comet x Naru: a girl walks into a ramen bar, her sneaker orders seconds', line:'A 23-second vertical film for Comet x Naru (₹5,899): one line became a seven-panel storyboard.', goes:'Instagram Reel · 9:16 · 23 s', makes:'1 reel' },
    { id:'reviews', kicker:'Made for you',   kind:'Ad',          age:'2h',  img:'reviews.jpg', title:'Lead with 285 reviews, not the price', line:'A ₹4,299 price needs proof of quality for new buyers.', goes:'Meta ad · 4:5', makes:'1 ad', badge:'Start here' },
    { id:'midnight',kicker:'An idea for you',kind:'Carousel',    age:'3h',  img:'midnight.jpg', n:8, title:'Aeres Hukum Midnight: eight frames for one carousel', line:'The Designer Special in black and red (₹5,899), zari-stitched: spotlit stacks, a balance act.', goes:'Instagram carousel · 4:5 · 8 frames', makes:'8 frames' },
    { id:'xlows',   kicker:'Made for you',   kind:'Ad',          age:'2h',  img:'xlows.jpg', n:4, title:'Show all 1,026 X Lows reviews in one swipe ad', line:'Each pair already has 142 to 285 reviews on its page.', goes:'Meta swipe ad · 4:5 · 4 frames', makes:'4 frames' },
    { id:'ivory',   kicker:'An idea for you',kind:'Carousel',    age:'3h',  img:'ivory.jpg', n:8, title:'Aeres Hukum Ivory: a festive carousel in eight frames', line:'The Designer Special in ivory and gold (₹5,899), paisley all the way down: a marigold arch.', goes:'Instagram carousel · 4:5 · 8 frames', makes:'8 frames' },
    { id:'farak',   kicker:'Partnerships',   kind:'Carousel',    age:'2h',  img:'farak.jpg', n:2, draft:true, title:'Bring Farak back with a joint carousel this winter', line:'The Sweater shoes are your most affordable collaboration option.', goes:'Instagram carousel · 4:5 · 2 frames', makes:'2 frames' },
    { id:'sketch',  kicker:'An idea for you',kind:'Carousel',    age:'3h',  img:'sketch.jpg', n:6, title:'Sketch to shelf: Aeres Hukum, drawn before it was made', line:'A carousel that opens on the designer’s sketchbook, then the desk, then the finished pair.', goes:'Instagram carousel · 4:5 · 6 frames', makes:'6 frames' },
    { id:'angles',  kicker:'From your store',kind:'Product page',age:'3h',  img:'ivory-angles.jpg', n:7, title:'Aeres Hukum Ivory: seven shelf-ready angles for its product page', line:'Side, pair, heel, hero three-quarter, sole and the tongue macro, all locked to the real shoe.', goes:'Product page · 7 photos', makes:'7 photos' },
    { id:'connect', special:'connect' },
    { id:'rival',   kicker:'Seen on CHNKS',  kind:'Rival watch', age:'59m', img:'rival.jpg', tag:'Theirs · CHNKS', title:'Launch an ad inspired by CHNKS', line:'Running six versions for eleven days shows this approach works.', goes:'Meta video ad · 9:16', makes:'1 ad' },
    { id:'angles2', kicker:'From your store',kind:'Product page',age:'3h',  img:'midnight-angles.jpg', n:8, title:'Aeres Hukum Midnight: nine shelf-ready angles for its product page', line:'Side, pair, heel, sole, the star-panel macro and the top-down pair, all locked to the real shoe.', goes:'Product page · 9 photos', makes:'9 photos' },
    { id:'end',     special:'end' },
  ];
  const real = IDEAS.filter(d => !d.special);
  const av = size => `<span class="av"${size ? ` style="width:${size}px;height:${size}px"` : ''}><img src="${A}char-dollop.png" alt=""></span>`;
  const ico = n => `<i data-ico="${n}"></i>`;
  // a carousel shows its frames: its own picture first, then the store's others (the demo has one picture an idea)
  const frames = d => [d.img, ...real.map(x => x.img).filter(f => f !== d.img)].slice(0, d.n);
  const media = d => d.video ? `<video class="fcard-media" src="${D}${d.video}" poster="${D}${d.img}" muted loop autoplay playsinline></video>`
    : d.n ? `<div class="frames">${frames(d).map((f, i) => `<img src="${D}${f}" alt="" ${i ? 'loading="lazy"' : ''}>`).join('')}</div>
      <button class="fr-nav prev draw" data-frame="-1" aria-label="Previous picture" disabled>${ico('back')}</button><button class="fr-nav next draw" data-frame="1" aria-label="Next picture">${ico('arrow')}</button>`
    : `<img class="fcard-media" src="${D}${d.img}" alt="">`;
  const LOGOS = ['meta', 'google', 'analytics', 'slack'];

  // the feed card. opts: cta (label, or false), href, cls
  const fcard = (d, o = {}) => {
    if (d.special === 'connect') return `<article class="fcard plain ${o.cls || ''}" data-idea="${d.id}">
      <div class="logos"><img class="big" src="${A}el-shopify.png" alt="Shopify"><span>${LOGOS.map(n => `<img src="${A}el-${n}.png" alt="">`).join('')}</span></div>
      <h3>See this with your own numbers</h3>
      <a class="btn b-jam draw" href="${o.base || ''}#/connectors">Connect Shopify${ico('arrow')}</a><button class="btn b-text" data-do="noshopify">We don’t use Shopify</button></article>`;
    if (d.special === 'end') return `<article class="fcard plain ${o.cls || ''}" data-idea="${d.id}"><img class="el" src="${A}pose-cheer.png" alt="">
      <h3>That’s your top 10</h3>
      <button class="btn b-out" data-do="more8">See the next 8</button></article>`;
    return `<article class="fcard ${o.cls || ''}" data-idea="${d.id}">
    <div class="fc-media">${media(d)}
      <div class="fcard-top"><span style="display:flex;gap:6px">
        ${d.draft ? `<span class="pill light">Initial draft</span>` : ''}${d.tag ? `<span class="pill light">${d.tag}</span>` : ''}${d.n ? `<span class="pill" data-fr-count>1/${d.n}</span>` : ''}${d.video ? `<button class="pill" data-do="sound" aria-label="Sound on">${ico('play')}</button>` : ''}</span></div>
      <div class="fc-over"><div class="fc-text"><h3>${d.title}</h3><p>${d.line}</p></div>
        ${o.cta === false ? '' : `<a class="fcard-cta draw" href="${o.href || '#/jam'}">${o.cta || 'Let’s jam'}${ico('arrow')}</a>`}</div></div></article>`; };

  // carousels work the same on every page: the arrows move a frame, the count follows the scroll
  document.addEventListener('click', e => { const b = e.target.closest('[data-frame]'); if (!b) return;
    const fr = b.closest('.fc-media').querySelector('.frames'); fr.scrollBy({ left: +b.dataset.frame * fr.clientWidth, behavior: 'smooth' }); });
  document.addEventListener('scroll', e => { const fr = e.target; if (!fr.classList || !fr.classList.contains('frames')) return;
    const n = fr.children.length, i = Math.min(n - 1, Math.round(fr.scrollLeft / fr.clientWidth)), m = fr.closest('.fc-media');
    m.querySelector('[data-fr-count]').textContent = `${i + 1}/${n}`;
    m.querySelector('.fr-nav.prev').disabled = i === 0; m.querySelector('.fr-nav.next').disabled = i === n - 1; }, true);

  // the idea card in a grid: picture, a quiet meta line, the title, one button
  const icard = (d, o = {}) => `<article class="icard">
    <div class="pic"><img src="${D}${d.img}" alt="" loading="lazy">${d.badge ? `<span class="badge">${d.badge}</span>` : ''}
      <button class="like draw ${o.liked ? 'liked' : ''}" data-like data-id="${d.id}" aria-label="Keep">${ico('heart')}</button></div>
    <div class="icard-body"><div class="icard-meta"><span>${d.kind}</span><span>${d.makes}</span></div>
      <h3>${d.title}</h3><a class="btn b-line b-sm" href="${o.href || '#/idea'}" data-open="${d.id}">${o.cta || 'Open'}</a></div></article>`;

  // a row with a small stack of pictures: bold line, quiet line, arrow
  const srow = (title, meta, imgs, href = '#') => `<a class="srow draw" href="${href}">
    <span class="stack">${imgs.map(f => `<i style="background-image:url(${D}${f})"></i>`).join('')}</span>
    <b>${title}</b><span>${meta}</span>${ico('arrow')}</a>`;
  return { A, D, GUIDE, IDEAS, real, av, fcard, icard, srow };
})();
