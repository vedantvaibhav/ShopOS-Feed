// jammie v3 shared data: the cast, sample ideas, and the two pieces every page draws the same way.
window.JAMMIE = (() => {
  const A = 'assets/jammie/v3/';
  const CAST = [
    { id:'dollop', name:'Jammie',  role:'Host',              tint:'#FBE3DF' },
    { id:'star',   name:'Spark',   role:'Creative director', tint:'#FBF0C9' },
    { id:'bubble', name:'Chatter', role:'Social',            tint:'#DCEBFA' },
    { id:'arch',   name:'Door',    role:'Storefront',        tint:'#DDF0E2' },
    { id:'heart',  name:'Dear',    role:'Customers',         tint:'#FBE0E8' },
    { id:'play',   name:'Reel',    role:'Reel maker',        tint:'#E9E1F6' },
    { id:'pebble', name:'Scout',   role:'Rival watch',       tint:'#E6E6E6' },
    { id:'cloud',  name:'Hush',    role:'Listening',         tint:'#F3EEE4' },
    { id:'bolt',   name:'Zip',     role:'Performance',       tint:'#FCE6D2' },
  ];
  const by = Object.fromEntries(CAST.map(c => [c.id, c]));
  const IDEAS = [
    { id:'reviews',  who:'star',   el:'megaphone', tint:'#FBE3DF', age:'12m', title:'Lead with 285 reviews, not the price', line:'A ₹4,299 price needs proof of quality for new buyers.', makes:'3 ads', badge:'Start here' },
    { id:'unboxing', who:'play',   el:'clapper',   tint:'#E6E6E6', age:'1h',  title:'Film the unboxing in one take', line:'The best reels from your rivals this month are all under 15 seconds.', makes:'1 reel script' },
    { id:'sizes',    who:'arch',   el:'bag',       tint:'#FBF0C9', age:'2h',  title:'Three sizes are out of stock', line:'UK 8, 9 and 10 still show on the page and take orders.', makes:'A fixed page' },
    { id:'quiet',    who:'heart',  el:'heart',     tint:'#FBE0E8', age:'3h',  title:'214 buyers have gone quiet', line:'They bought once in spring and have not been back.', makes:'1 email', badge:'New' },
    { id:'tired',    who:'bolt',   el:'chart',     tint:'#DDF0E2', age:'5h',  title:'Your best ad is tired', line:'It has run for 41 days and clicks are down by a third.', makes:'3 new openers' },
    { id:'widefit',  who:'cloud',  el:'magnifier', tint:'#DCEBFA', age:'8h',  title:'People keep asking for wide fit', line:'38 reviews and comments mention it this month.', makes:'A product note', locked:true },
  ];
  const av = (id, size) => `<span class="av" style="--tint:${by[id].tint}${size ? `;width:${size}px;height:${size}px` : ''}"><img src="${A}char-${id}.png" alt=""></span>`;
  // the feed card. opts: top (the For you / Team switch), cta (label, or false), href, cls
  const fcard = (d, o = {}) => `<article class="fcard ${o.cls || ''}" style="--tint:${d.tint}" data-idea="${d.id}">
    <div class="art"><img src="${A}el-${d.el}.png" alt=""></div>
    ${o.top ? `<div class="fcard-top"><div class="seg"><button class="on">For you</button><button>Team</button></div></div>` : ''}
    <div class="fcard-foot">
      ${o.cta === false ? '' : `<a class="fcard-cta draw" href="${o.href || '#/why'}">${o.cta || 'Make this'}<i data-ico="arrow"></i></a>`}
      <div class="who">${av(d.who)}<b>${by[d.who].name}</b><span>${by[d.who].role} · ${d.age}</span></div>
      <h3>${d.title}</h3><p>${d.line}</p>
      <div class="fcard-bar"><i></i></div>
    </div></article>`;
  return { A, CAST, by, IDEAS, av, fcard };
})();
