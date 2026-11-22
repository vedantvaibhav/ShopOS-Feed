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
    { id:'reel',    kind:'Reel',        img:'reel.jpg', video:'reel.mp4', title:'Comet x Naru: a girl walks into a ramen bar, her sneaker orders seconds', line:'A 23-second film for Comet x Naru, from one line to seven panels.', goes:'Instagram Reel · 9:16 · 23 s', makes:'1 reel' },
    { id:'reviews', kind:'Ad',          img:'reviews.jpg', title:'Lead with 285 reviews, not the price', line:'A ₹4,299 price needs proof of quality for new buyers.', goes:'Meta ad · 4:5', makes:'1 ad', badge:'Start here' },
    { id:'midnight',kind:'Carousel',    img:'midnight.jpg', n:8, title:'Aeres Hukum Midnight: eight frames for one carousel', line:'The Designer Special in black and red (₹5,899), zari-stitched: spotlit stacks, a balance act.', goes:'Instagram carousel · 4:5 · 8 frames', makes:'8 frames' },
    { id:'xlows',   kind:'Ad',          img:'xlows.jpg', n:4, fit:1, title:'Show all 1,026 X Lows reviews in one swipe ad', line:'Each pair already has 142 to 285 reviews on its page.', goes:'Meta swipe ad · 4:5 · 4 frames', makes:'4 frames' },
    { id:'ivory',   kind:'Carousel',    img:'ivory.jpg', n:8, title:'Aeres Hukum Ivory: a festive carousel in eight frames', line:'The Designer Special in ivory and gold (₹5,899), paisley all the way down: a marigold arch.', goes:'Instagram carousel · 4:5 · 8 frames', makes:'8 frames' },
    { id:'farak',   kind:'Carousel',    img:'farak.jpg', n:2, draft:true, title:'Bring Farak back with a joint carousel this winter', line:'The Sweater shoes are your most affordable collaboration option.', goes:'Instagram carousel · 4:5 · 2 frames', makes:'2 frames' },
    { id:'sketch',  kind:'Carousel',    img:'sketch.jpg', n:6, title:'Sketch to shelf: Aeres Hukum, drawn before it was made', line:'A carousel that opens on the designer’s sketchbook, then the desk, then the finished pair.', goes:'Instagram carousel · 4:5 · 6 frames', makes:'6 frames' },
    { id:'angles',  kind:'Product page',img:'ivory-angles.jpg', n:7, title:'Aeres Hukum Ivory: seven shelf-ready angles for its product page', line:'Side, pair, heel, hero three-quarter, sole and the tongue macro, all locked to the real shoe.', goes:'Product page · 7 photos', makes:'7 photos' },
    { id:'connect', special:'connect' },
    { id:'rival',   kind:'Rival watch', img:'rival.jpg', tag:'Theirs · CHNKS', title:'Launch an ad inspired by CHNKS', line:'Running six versions for eleven days shows this approach works.', goes:'Meta video ad · 9:16', makes:'1 ad' },
    { id:'angles2', kind:'Product page',img:'midnight-angles.jpg', n:9, title:'Aeres Hukum Midnight: nine shelf-ready angles for its product page', line:'Side, pair, heel, sole, the star-panel macro and the top-down pair, all locked to the real shoe.', goes:'Product page · 9 photos', makes:'9 photos' },
    { id:'end',     special:'end' },
  ];
  const real = IDEAS.filter(d => !d.special);
  const av = size => `<span class="av"${size ? ` style="width:${size}px;height:${size}px"` : ''}><img src="${A}char-dollop.png" alt=""></span>`;
  const ico = n => `<i data-ico="${n}"></i>`;
  // a carousel shows its frames: its own picture first, then the store's others (the demo has one picture an idea)
  const frames = d => [d.img, ...real.filter(x => !x.fit && x.img !== d.img).map(x => x.img)].slice(0, d.n);
  const media = d => d.video ? `<video class="fcard-media" src="${D}${d.video}" poster="${D}${d.img}" muted loop autoplay playsinline></video>`
    : d.n ? `<div class="frames">${frames(d).map((f, i) => `<img src="${D}${f}" alt="" ${i ? 'loading="lazy"' : ''}>`).join('')}</div>
      <button class="fr-nav prev draw" data-frame="-1" aria-label="Previous picture" disabled>${ico('back')}</button><button class="fr-nav next draw" data-frame="1" aria-label="Next picture">${ico('arrow')}</button>`
    : `<img class="fcard-media" src="${D}${d.img}" alt="">`;
  const LOGOS = ['meta', 'google', 'analytics', 'slack'];

  // the feed card
  const fcard = d => {
    if (d.special === 'connect') return `<article class="fcard plain">
      <div class="logos"><img class="big" src="${A}el-shopify.png" alt="Shopify"><span>${LOGOS.map(n => `<img src="${A}el-${n}.png" alt="">`).join('')}</span></div>
      <h3>See this with your own numbers</h3>
      <a class="btn b-jam draw" href="#/connectors">Connect Shopify${ico('arrow')}</a><button class="btn b-text" data-do="noshopify">We don’t use Shopify</button></article>`;
    if (d.special === 'end') return `<article class="fcard plain"><img class="el" src="${A}pose-cheer.png" alt="">
      <h3>That’s your top 10</h3>
      <button class="btn b-out" data-do="more8">See the next 8</button></article>`;
    return `<article class="fcard">
    <div class="fc-media ${d.fit ? 'fit' : ''}"${d.fit ? ` style="background-image:url(${D}${d.img})"` : ''}>${media(d)}
      <div class="fcard-top"><span style="display:flex;gap:6px">
        ${d.draft ? `<span class="pill">Initial draft</span>` : ''}${d.tag ? `<span class="pill">${d.tag}</span>` : ''}${d.n ? `<span class="pill" data-fr-count>1/${d.n}</span>` : ''}${d.video ? `<button class="pill" data-do="sound" aria-label="Sound on">${ico('mute')}</button>` : ''}</span></div>

      <div class="fc-over"><h3>${d.title}</h3><p>${d.line}</p></div></div></article>`; };

  // carousels work the same on every page: the arrows move a frame, the count follows the scroll.
  // A frame is a little narrower than the card, so the edge of the next one always shows
  const frameW = fr => fr.children[0].getBoundingClientRect().width + 4;
  const frameAt = fr => fr.scrollLeft >= fr.scrollWidth - fr.clientWidth - 2 ? fr.children.length - 1 : Math.round(fr.scrollLeft / frameW(fr));
  // move a carousel by one frame. It counts from the frame it is already heading to, so two quick presses move two frames
  function turnFrame(fr, dir){ const from = Date.now() - (fr._at || 0) < 500 ? fr._aim : frameAt(fr);
    fr._aim = Math.max(0, Math.min(fr.children.length - 1, from + dir)); fr._at = Date.now(); fr.scrollTo({ left: fr._aim * frameW(fr), behavior: 'smooth' }); }
  document.addEventListener('click', e => { const b = e.target.closest('[data-frame]'); if (!b) return;
    turnFrame(b.closest('.fc-media').querySelector('.frames'), +b.dataset.frame); });
  document.addEventListener('scroll', e => { const fr = e.target; if (!fr.classList || !fr.classList.contains('frames')) return;
    const n = fr.children.length, i = frameAt(fr), m = fr.closest('.fc-media');
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
  return { A, D, GUIDE, IDEAS, real, av, fcard, icard, srow, turnFrame };
})();
