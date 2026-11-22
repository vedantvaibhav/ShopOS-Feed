// jammie v3 shared data and the pieces every page draws the same way.
window.JAMMIE = (() => {
  const A = 'assets/jammie/v3/';
  // Jammie is the only character in the product. The others are a guideline for when more are needed.
  const HOST = { id:'dollop', name:'Jammie' };
  const GUIDE = [
    { id:'star', shape:'Star' }, { id:'bubble', shape:'Speech bubble' }, { id:'arch', shape:'Arch' }, { id:'heart', shape:'Heart' },
    { id:'play', shape:'Play' }, { id:'pebble', shape:'Ball' }, { id:'cloud', shape:'Cloud' }, { id:'bolt', shape:'Bolt' },
  ];
  const IDEAS = [
    { id:'reviews',  kind:'Ads',       el:'megaphone', age:'12m', title:'Lead with 285 reviews, not the price', line:'A ₹4,299 price needs proof of quality for new buyers.', makes:'3 ads', badge:'Start here' },
    { id:'unboxing', kind:'Reel',      el:'clapper',   age:'1h',  title:'Film the unboxing in one take', line:'The best reels from your rivals this month are all under 15 seconds.', makes:'1 reel script' },
    { id:'sizes',    kind:'Store',     el:'sparkle',     age:'2h',  title:'Three sizes are out of stock', line:'UK 8, 9 and 10 still show on the page and take orders.', makes:'A fixed page' },
    { id:'quiet',    kind:'Customers', el:'heart',     age:'3h',  title:'214 buyers have gone quiet', line:'They bought once in spring and have not been back.', makes:'1 email', badge:'New' },
    { id:'tired',    kind:'Ads',       el:'chart',     age:'5h',  title:'Your best ad is tired', line:'It has run for 41 days and clicks are down by a third.', makes:'3 new openers' },
    { id:'widefit',  kind:'Product',   el:'magnifier', age:'8h',  title:'People keep asking for wide fit', line:'38 reviews and comments mention it this month.', makes:'A product note', locked:true },
  ];
  const av = size => `<span class="av"${size ? ` style="width:${size}px;height:${size}px"` : ''}><img src="${A}char-dollop.png" alt=""></span>`;
  // the feed card. opts: top (the switch above the picture), cta (label, or false), href, cls
  const fcard = (d, o = {}) => `<article class="fcard ${o.cls || ''}" data-idea="${d.id}">
    <div class="art"><img src="${A}el-${d.el}.png" alt=""></div>
    ${o.top ? `<div class="fcard-top"><div class="seg"><button class="on">For you</button><button>New</button></div></div>` : ''}
    <div class="fcard-foot">
      ${o.cta === false ? '' : `<a class="fcard-cta draw" href="${o.href || '#/why'}">${o.cta || 'Make this'}<i data-ico="arrow"></i></a>`}
      <div class="who">${av()}<b>Jammie</b><span>${d.kind} · ${d.age}</span></div>
      <h3>${d.title}</h3><p>${d.line}</p>
      <div class="fcard-bar"><i></i></div>
    </div></article>`;
  // the idea card in a grid: picture, a quiet meta line, the title, one button
  const icard = (d, o = {}) => `<article class="icard">
    <div class="art"><img src="${A}el-${d.el}.png" alt="">${d.badge ? `<span class="badge">${d.badge}</span>` : ''}
      <button class="like draw ${o.liked ? 'liked' : ''}" data-like data-id="${d.id}" aria-label="Keep"><i data-ico="heart"></i></button></div>
    <div class="icard-body"><div class="icard-meta"><span>${d.kind}</span><span>${d.makes}</span></div>
      <h3>${d.title}</h3><a class="btn b-line b-sm" href="${o.href || '#/why'}" data-open="${d.id}">Make this</a></div></article>`;
  // a row with a small stack of pictures
  const srow = (title, meta, els, href = '#') => `<a class="srow draw" href="${href}">
    <span class="stack">${els.map(e => `<i style="background-image:url(${A}el-${e}.png)"></i>`).join('')}</span>
    <b>${title}</b><span>${meta}</span><i data-ico="arrow"></i></a>`;
  return { A, HOST, GUIDE, IDEAS, av, fcard, icard, srow };
})();
