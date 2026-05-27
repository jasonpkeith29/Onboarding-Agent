/* DEP PM Onboarding — Scripts
   Extracted from index.html for standalone use */

function showPage(n) {
  var pages = document.querySelectorAll('.page');
  var tabs = document.querySelectorAll('.tab');
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = (i === n) ? 'block' : 'none';
  }
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.toggle('on', Number(tabs[i].dataset.page) === n);
  }
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function showStage(id, el, idx) {
  var panels = document.querySelectorAll('.stage-panel');
  for (var i = 0; i < panels.length; i++) { panels[i].style.display = 'none'; panels[i].classList.remove('on'); }
  var p = document.getElementById('panel-' + id);
  if (p) { p.style.display = 'grid'; p.classList.add('on'); }
  var steps = document.querySelectorAll('.flow-step');
  for (var i = 0; i < steps.length; i++) { steps[i].classList.remove('active'); }
  el.classList.add('active');
  var colors = ['var(--teal)', 'var(--amber)', 'var(--rose)', 'var(--green)'];
  var fill = document.getElementById('stage-fill');
  if (fill) { fill.style.left = (idx * 25) + '%'; fill.style.background = colors[idx]; }
}

function setCompLevel(level) {
  var cards = ['cc1','cc2','cc3','cc4','cc5','cc6'];
  var levels = ['a','sa','m','sm','d'];
  for (var c = 0; c < cards.length; c++) {
    for (var l = 0; l < levels.length; l++) {
      var el = document.getElementById(cards[c] + '-' + levels[l]);
      if (el) el.style.display = (levels[l] === level) ? 'block' : 'none';
    }
  }
  var cfg = {
    'a':  {bg:'var(--green)',   fg:'#fff', ibg:'var(--green-lt)',  ifg:'var(--green)'},
    'sa': {bg:'var(--teal)',    fg:'#fff', ibg:'var(--teal-lt)',   ifg:'var(--teal)'},
    'm':  {bg:'var(--amber)',   fg:'#fff', ibg:'var(--amber-lt)',  ifg:'var(--amber)'},
    'sm': {bg:'var(--slate)',   fg:'#fff', ibg:'var(--slate-lt)',  ifg:'var(--slate)'},
    'd':  {bg:'var(--rose)',    fg:'#fff', ibg:'var(--rose-lt)',   ifg:'var(--rose)'}
  };
  for (var l = 0; l < levels.length; l++) {
    var btn = document.getElementById('cb-' + levels[l]);
    if (!btn) continue;
    var active = levels[l] === level;
    btn.style.background = active ? cfg[levels[l]].bg : cfg[levels[l]].ibg;
    btn.style.color = active ? cfg[levels[l]].fg : cfg[levels[l]].ifg;
    btn.style.opacity = active ? '1' : '0.75';
  }
}

function setLCLevel(level) {
  var stages = ['s1','s2','s3','s4'];
  var levels = ['a','sa','m','sm','d'];
  for (var s = 0; s < stages.length; s++) {
    for (var l = 0; l < levels.length; l++) {
      var show = levels[l] === level;
      var pm = document.getElementById('lc-' + stages[s] + '-' + levels[l]);
      if (pm) pm.style.display = show ? 'block' : 'none';
      var up = document.getElementById('lc-' + stages[s] + '-' + levels[l] + '-up');
      if (up) up.style.display = show ? 'block' : 'none';
    }
  }
  var cfg = {
    'a':  {bg:'var(--green)',   fg:'#fff', ibg:'var(--green-lt)',  ifg:'var(--green)'},
    'sa': {bg:'var(--teal)',    fg:'#fff', ibg:'var(--teal-lt)',   ifg:'var(--teal)'},
    'm':  {bg:'var(--amber)',   fg:'#fff', ibg:'var(--amber-lt)',  ifg:'var(--amber)'},
    'sm': {bg:'var(--slate)',   fg:'#fff', ibg:'var(--slate-lt)',  ifg:'var(--slate)'},
    'd':  {bg:'var(--rose)',    fg:'#fff', ibg:'var(--rose-lt)',   ifg:'var(--rose)'}
  };
  for (var l = 0; l < levels.length; l++) {
    var btn = document.getElementById('lb-' + levels[l]);
    if (!btn) continue;
    var active = levels[l] === level;
    btn.style.background = active ? cfg[levels[l]].bg : cfg[levels[l]].ibg;
    btn.style.color = active ? cfg[levels[l]].fg : cfg[levels[l]].ifg;
    btn.style.opacity = active ? '1' : '0.75';
  }
}

function jumpLevel(id) {
  var el = document.getElementById('level-' + id);
  if (el) {
    el.scrollIntoView({behavior:'smooth', block:'center'});
    el.style.outline = '2px solid var(--teal)';
    setTimeout(function() { el.style.outline = ''; }, 1800);
  }
}
