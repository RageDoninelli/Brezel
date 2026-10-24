/* V.I.V.A. Brezel — núcleo: estado, utilidades, voz, repaso espaciado */
'use strict';
const APP_VERSION = '1.0.0';
const DEADLINE = '2026-12-31';
const START = '2026-10-23';

/* ---------- almacenamiento seguro ---------- */
const mem = {};
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v == null ? (k in mem ? mem[k] : d) : v; } catch (e) { return k in mem ? mem[k] : d; } },
  set(k, v) { mem[k] = v; try { localStorage.setItem(k, v); } catch (e) {} }
};
const DEFAULT_STATE = () => ({
  v: 1, lessons: {}, srs: {}, errors: {}, days: {}, xp: 0, notes: {},
  tests: {}, settings: { rate: 1, dark: 'auto', auto: true, goal: 40 }
});
let S;
function load() {
  try { S = JSON.parse(store.get('brezel.state', 'null')) || DEFAULT_STATE(); } catch (e) { S = DEFAULT_STATE(); }
  const d = DEFAULT_STATE();
  for (const k in d) if (!(k in S)) S[k] = d[k];
  for (const k in d.settings) if (!(k in S.settings)) S.settings[k] = d.settings[k];
}
function save() { store.set('brezel.state', JSON.stringify(S)); }
load();

/* ---------- utilidades ---------- */
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const todayKey = () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
const dayNum = k => Math.floor(Date.parse(k + 'T12:00:00') / 86400000);
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const sample = (a, n) => shuffle(a).slice(0, n);
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));

/* normalización tolerante: mayúsculas, puntuación, ae/oe/ue/ss */
function norm(s) {
  return String(s).toLowerCase()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[.,!?;:„“”"'’‘…–—()\[\]]/g, ' ').replace(/\s+/g, ' ').trim();
}
const sameAns = (u, answers) => { const n = norm(u); return (Array.isArray(answers) ? answers : [answers]).some(a => norm(a) === n); };
function words(s) { return String(s).trim().split(/\s+/).filter(Boolean); }

/* ---------- datos del curso ---------- */
const MODS = (window.BREZEL && window.BREZEL.modules || []).slice().sort((a, b) => (a.level === b.level ? a.num - b.num : a.level === 'A2' ? -1 : 1));
const LESSONS = [];
MODS.forEach(m => m.lessons.forEach(l => { l.mod = m; LESSONS.push(l); }));
const lessonById = id => LESSONS.find(l => l.id === id);
const modById = id => MODS.find(m => m.id === id);
const lvLabel = l => l === 'B1' ? 'B1.1' : l;
const lnum = l => parseInt(l.id.split('-')[1], 10);

/* ---------- progreso por lección ---------- */
function LS(id) { return S.lessons[id] || (S.lessons[id] = { g: 0, v: 0, p: 0, d: 0, e: 0, s: 0 }); }
// g gramática vista, v vocab estudiado, p frases, d diálogo, e mejor % de ejercicios, s tareas de hablar
function lessonPct(id) {
  const x = S.lessons[id]; if (!x) return 0;
  return Math.round(((x.g ? 1 : 0) + (x.v ? 1 : 0) + (x.p ? 1 : 0) + (x.d ? 1 : 0) + (x.s ? 1 : 0) + clamp((x.e || 0) / 80, 0, 1) * 2) / 7 * 100);
}
const lessonDone = id => lessonPct(id) >= 85;
function mark(id, k, v) { const x = LS(id); if (v === undefined) v = 1; if (k === 'e') x.e = Math.max(x.e || 0, v); else x[k] = v; save(); }

/* ---------- actividad, XP y racha ---------- */
function addXP(n) {
  const k = todayKey(); S.days[k] = (S.days[k] || 0) + n; S.xp += n; save();
  if (typeof chips === 'function') { try { chips(); } catch (e) {} }
}
function streak() {
  let n = 0, d = dayNum(todayKey());
  if (!S.days[todayKey()]) d--;
  for (; ; d--) { const k = new Date(d * 86400000 + 43200000); const key = k.getUTCFullYear() + '-' + String(k.getUTCMonth() + 1).padStart(2, '0') + '-' + String(k.getUTCDate()).padStart(2, '0'); if (S.days[key]) n++; else break; }
  return n;
}
const todayXP = () => S.days[todayKey()] || 0;

/* ---------- repaso espaciado (Leitner) ---------- */
const BOX_DAYS = [0, 1, 2, 4, 7, 14, 30];
function srsKey(type, lid, id) { return type + '|' + lid + '|' + id; }
function srsAdd(key, box) {
  if (!S.srs[key]) { S.srs[key] = { b: box || 1, due: dayNum(todayKey()) + BOX_DAYS[box || 1] }; save(); }
}
function srsGrade(key, ok, easy) {
  const it = S.srs[key] || (S.srs[key] = { b: 1, due: 0 });
  it.b = ok ? clamp(it.b + (easy ? 2 : 1), 1, 6) : 1;
  it.due = dayNum(todayKey()) + (ok ? BOX_DAYS[it.b] : 0);
  it.n = (it.n || 0) + 1; it.t = ok ? (it.t || 0) + 1 : (it.t || 0);
  save();
}
function dueKeys() { const t = dayNum(todayKey()); return Object.keys(S.srs).filter(k => S.srs[k].due <= t); }
function parseKey(k) { const [type, lid, ...rest] = k.split('|'); return { type, lid, id: rest.join('|') }; }
function resolveItem(k) {
  const { type, lid, id } = parseKey(k); const L = lessonById(lid); if (!L) return null;
  if (type === 'v') { const v = L.vocab.find(x => x.de === id); return v ? { type, L, v, key: k } : null; }
  if (type === 'p') { const v = L.phrases.find(x => x.de === id); return v ? { type, L, v, key: k } : null; }
  if (type === 'x') { const e = L.ex[parseInt(id, 10)]; return e ? { type, L, e, key: k } : null; }
  return null;
}
function addErr(L, idx) { const k = srsKey('x', L.id, idx); const it = S.srs[k]; if (!it) S.srs[k] = { b: 1, due: dayNum(todayKey()) + 1 }; else { it.b = 1; it.due = Math.min(it.due, dayNum(todayKey()) + 1); } save(); }

/* ---------- voz (TTS) y micrófono ---------- */
let voice = null, voicesReady = false;
function pickVoice() {
  if (!('speechSynthesis' in window)) return;
  const vs = speechSynthesis.getVoices(); if (!vs.length) return;
  voicesReady = true;
  const de = vs.filter(v => /^de([-_]|$)/i.test(v.lang));
  voice = de.find(v => /de[-_]DE/i.test(v.lang) && /google|natural|premium|enhanced/i.test(v.name)) || de.find(v => /de[-_]DE/i.test(v.lang)) || de[0] || null;
}
if ('speechSynthesis' in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
const hasTTS = () => 'speechSynthesis' in window;
let speakTimer = null;
function speak(text, opts) {
  opts = opts || {};
  return new Promise(res => {
    if (!hasTTS()) { toast('Tu navegador no tiene voz. Prueba con Chrome.'); return res(false); }
    try { speechSynthesis.cancel(); } catch (e) {}
    clearInterval(speakTimer);
    const u = new SpeechSynthesisUtterance(String(text).replace(/\|/g, '').replace(/…/g, ' ... '));
    u.lang = 'de-DE'; if (voice) u.voice = voice;
    u.rate = (opts.rate || S.settings.rate || 1) * (opts.slow ? 0.7 : 1);
    u.onend = () => { clearInterval(speakTimer); res(true); };
    u.onerror = () => { clearInterval(speakTimer); res(false); };
    if (!voice && voicesReady) { /* sin voz alemana */ if (!speak._warned) { speak._warned = 1; toast('No hay voz alemana instalada. Instálala en Ajustes del teléfono > Texto a voz.'); } }
    speechSynthesis.speak(u);
    // Chrome corta voces largas: mantener vivo
    speakTimer = setInterval(() => { if (!speechSynthesis.speaking) clearInterval(speakTimer); else { speechSynthesis.pause(); speechSynthesis.resume(); } }, 9000);
  });
}
function stopSpeak() { try { speechSynthesis.cancel(); } catch (e) {} clearInterval(speakTimer); }
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
const hasMic = !!SR;
function listen() {
  return new Promise((res, rej) => {
    if (!SR) return rej(new Error('nomic'));
    const r = new SR(); r.lang = 'de-DE'; r.interimResults = false; r.maxAlternatives = 3; r.continuous = false;
    let got = null;
    r.onresult = e => { got = Array.from(e.results[0]).map(a => a.transcript); };
    r.onerror = e => rej(new Error(e.error || 'error'));
    r.onend = () => got ? res(got) : rej(new Error('nospeech'));
    try { r.start(); } catch (e) { rej(e); }
    listen.cur = r;
  });
}
function similarity(target, said) {
  const t = norm(target).split(' ').filter(Boolean), s = norm(said).split(' ').filter(Boolean);
  if (!t.length) return 0; let hit = 0; const pool = s.slice();
  t.forEach(w => { const i = pool.indexOf(w); if (i >= 0) { hit++; pool.splice(i, 1); } });
  return Math.round(hit / t.length * 100);
}

/* ---------- toast ---------- */
let toastT;
function toast(msg) {
  let t = $('#toast'); if (!t) { t = document.createElement('div'); t.id = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
  t.textContent = msg; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 3200);
}

/* ---------- plan hasta fin de diciembre ---------- */
function plan() {
  const t = dayNum(todayKey()), end = dayNum(DEADLINE);
  const left = Math.max(1, end - t + 1);
  const remaining = LESSONS.filter(l => !lessonDone(l.id)).length;
  const weeks = Math.max(1, Math.ceil(left / 7));
  return { left, remaining, perWeek: Math.max(1, Math.ceil(remaining / weeks)), total: LESSONS.length, done: LESSONS.length - remaining };
}
function nextLesson() { return LESSONS.find(l => !lessonDone(l.id)) || null; }

/* ---------- artículos / género ---------- */
function genderClass(de) { const m = /^(der|die|das)\b/.exec(de); return m ? 'g-' + m[1] : ''; }
function colorDe(de) { const m = /^(der|die|das) (.*)$/.exec(de); return m ? `<span class="art g-${m[1]}">${m[1]}</span> ${esc(m[2])}` : esc(de); }

/* V.I.V.A. Brezel — motor de ejercicios */
const UML = ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'];
function umlBar() { return `<div class="uml" aria-label="Caracteres alemanes">${UML.map(c => `<button type="button" class="uk" data-ch="${c}" tabindex="-1">${c}</button>`).join('')}</div>`; }
let lastInput = null;
document.addEventListener('focusin', e => { if (e.target.matches && e.target.matches('input.ans, textarea.ans')) lastInput = e.target; });
document.addEventListener('click', e => {
  const b = e.target.closest && e.target.closest('.uk'); if (!b || !lastInput) return;
  const el = lastInput, s = el.selectionStart || el.value.length, t = el.selectionEnd || s;
  el.value = el.value.slice(0, s) + b.dataset.ch + el.value.slice(t); el.focus(); el.setSelectionRange(s + 1, s + 1);
  el.dispatchEvent(new Event('input', { bubbles: true }));
});

const stripHint = s => String(s).replace(/\s*\([^)]*\)\s*/g, ' ').replace(/\s+/g, ' ').trim();
function fullSentence(e) {
  if (e.t === 'mc') return e.q.indexOf('___') >= 0 ? stripHint(e.q.replace('___', e.o[e.a])) : null;
  if (e.t === 'gap') return stripHint(e.q.replace('___', e.a[0]));
  if (e.t === 'order') return e.de;
  if (e.t === 'tr') return e.de[0];
  if (e.t === 'fix') return e.a[0];
  return null;
}
function qHTML(q, blank) { return esc(q).replace('___', blank || '<span class="blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>'); }

/* items: [{e, L, idx, key?}]   opts: {title, back(), onFinish(res), xp, retry} */
function exRun(root, items, opts) {
  opts = opts || {};
  let queue = items.map(it => Object.assign({}, it)), pos = 0, firstTotal = items.length, good = 0, missed = [], answered = 0;
  const xpEach = opts.xp == null ? 10 : opts.xp;
  const doneSet = new Set();

  function head() {
    return `<div class="exbar"><button class="iconbtn" data-act="quit" aria-label="Salir">✕</button>
      <div class="prog" role="progressbar" aria-valuemin="0" aria-valuemax="${firstTotal}" aria-valuenow="${Math.min(answered, firstTotal)}"><i style="width:${Math.round(Math.min(answered, firstTotal) / firstTotal * 100)}%"></i></div>
      <span class="count">${Math.min(answered + 1, firstTotal)}/${firstTotal}</span></div>`;
  }
  function render() {
    if (pos >= queue.length) return finish();
    const it = queue[pos], e = it.e;
    const label = { mc: 'Elige la opción correcta', gap: 'Completa la frase', order: 'Ordena la frase', tr: 'Traduce al alemán', fix: 'Corrige el error', match: 'Une los pares' }[e.t];
    let body = '';
    if (e.t === 'mc') {
      body = `<p class="q">${qHTML(e.q)}</p><div class="opts" role="radiogroup">${e.o.map((o, i) => `<button class="opt" role="radio" aria-checked="false" data-i="${i}">${esc(o)}</button>`).join('')}</div>`;
    } else if (e.t === 'gap') {
      const parts = e.q.split('___');
      body = `<p class="q gapq">${esc(parts[0])}<input class="ans gapin" type="text" autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false" size="${Math.max(6, Math.max.apply(null, e.a.map(a => a.length)) + 2)}" aria-label="Respuesta">${esc(parts[1] || '')}</p>${umlBar()}`;
    } else if (e.t === 'order') {
      const toks = shuffle(words(e.de).concat(e.x || []));
      body = `<p class="q es">${esc(e.es)}</p><div class="answer" id="ordAns" aria-label="Tu frase"></div><div class="bank" id="ordBank">${toks.map((w, i) => `<button class="tile" data-w="${esc(w)}" data-n="${i}">${esc(w)}</button>`).join('')}</div>`;
    } else if (e.t === 'tr') {
      body = `<p class="q es">${esc(e.es)}</p><textarea class="ans" rows="2" autocomplete="off" autocapitalize="sentences" spellcheck="false" placeholder="Escribe en alemán…" aria-label="Traducción"></textarea>${umlBar()}`;
    } else if (e.t === 'fix') {
      body = `<p class="hint">Esta frase tiene un error. Escríbela bien.</p><textarea class="ans" rows="2" autocomplete="off" spellcheck="false" aria-label="Frase corregida">${esc(e.q)}</textarea>${umlBar()}`;
    } else if (e.t === 'match') {
      const L1 = shuffle(e.pairs.map((p, i) => ({ t: p[0], i }))), R1 = shuffle(e.pairs.map((p, i) => ({ t: p[1], i })));
      body = `<div class="match"><div class="mcol">${L1.map(x => `<button class="mt" data-s="l" data-i="${x.i}">${esc(x.t)}</button>`).join('')}</div><div class="mcol">${R1.map(x => `<button class="mt" data-s="r" data-i="${x.i}">${esc(x.t)}</button>`).join('')}</div></div>`;
    }
    root.innerHTML = head() + `<div class="card exq ${it.retry ? 'retry' : ''}"><div class="qlabel">${label}${it.retry ? ' · otra vez' : ''}</div>${body}</div><div class="fb" id="fb" aria-live="polite"></div>
      <div class="actions"><button class="btn primary" id="chk" ${e.t === 'match' ? 'hidden' : 'disabled'}>Comprobar</button></div>`;
    wire(it);
    const inp = $('input.ans, textarea.ans', root); if (inp) { setTimeout(() => { try { inp.focus(); } catch (x) {} }, 50); }
  }

  function wire(it) {
    const e = it.e, chk = $('#chk', root); let state = 'ask', sel = null, ok = false;
    $('[data-act=quit]', root).onclick = () => { if (confirm('¿Salir? Perderás el progreso de esta sesión.')) { stopSpeak(); opts.back && opts.back(); } };
    const getAns = () => {
      if (e.t === 'mc') return sel;
      if (e.t === 'gap' || e.t === 'tr' || e.t === 'fix') { const el = $('.ans', root); return el.value; }
      if (e.t === 'order') return $$('#ordAns .tile', root).map(b => b.dataset.w).join(' ');
    };
    const ready = () => {
      const a = getAns();
      chk.disabled = !(e.t === 'mc' ? sel !== null : String(a).trim().length > 0);
    };
    if (e.t === 'mc') $$('.opt', root).forEach(b => b.onclick = () => { if (state !== 'ask') return; $$('.opt', root).forEach(x => { x.classList.remove('sel'); x.setAttribute('aria-checked', 'false'); }); b.classList.add('sel'); b.setAttribute('aria-checked', 'true'); sel = +b.dataset.i; ready(); });
    if (e.t === 'gap' || e.t === 'tr' || e.t === 'fix') { const el = $('.ans', root); el.addEventListener('input', ready); el.addEventListener('keydown', ev => { if (ev.key === 'Enter' && !ev.shiftKey) { ev.preventDefault(); if (!chk.disabled) chk.click(); } }); if (e.t === 'fix') ready(); }
    if (e.t === 'order') {
      const ans = $('#ordAns', root), bank = $('#ordBank', root);
      const mv = ev => {
        if (state !== 'ask') return;
        const t = ev.target.closest('.tile'); if (!t) return;
        if (t.parentNode === bank) ans.appendChild(t); else bank.appendChild(t); ready();
      };
      ans.addEventListener('click', mv); bank.addEventListener('click', mv);
    }
    if (e.t === 'match') {
      let pick = null, errs = 0, solved = 0;
      $$('.mt', root).forEach(b => b.onclick = () => {
        if (b.classList.contains('done')) return;
        if (!pick) { pick = b; b.classList.add('sel'); return; }
        if (pick === b) { b.classList.remove('sel'); pick = null; return; }
        if (pick.dataset.s === b.dataset.s) { pick.classList.remove('sel'); pick = b; b.classList.add('sel'); return; }
        if (pick.dataset.i === b.dataset.i) {
          pick.classList.remove('sel'); pick.classList.add('done'); b.classList.add('done'); solved++; pick = null;
          if (solved === e.pairs.length) { state = 'done'; settle(errs === 0, `Pares: ${e.pairs.length - Math.min(errs, e.pairs.length)} de ${e.pairs.length} a la primera.`, null); }
        } else { errs++; const a = pick; a.classList.add('bad'); b.classList.add('bad'); setTimeout(() => { a.classList.remove('bad', 'sel'); b.classList.remove('bad'); }, 450); pick = null; }
      });
      return;
    }
    chk.onclick = () => {
      if (state === 'ask') {
        state = 'fb'; const a = getAns(); let why = e.why || '', corr = '';
        if (e.t === 'mc') { ok = a === e.a; $$('.opt', root).forEach((b, i) => { b.disabled = true; if (i === e.a) b.classList.add('right'); else if (i === a) b.classList.add('wrong'); }); corr = ok ? '' : e.o[e.a]; }
        else if (e.t === 'gap') { ok = sameAns(a, e.a); const el = $('.ans', root); el.disabled = true; el.classList.add(ok ? 'right' : 'wrong'); corr = ok ? '' : e.a[0]; }
        else if (e.t === 'order') { ok = sameAns(a, e.de); $('#ordAns', root).classList.add(ok ? 'right' : 'wrong'); corr = ok ? '' : e.de; }
        else if (e.t === 'tr') { ok = sameAns(a, e.de); const el = $('.ans', root); el.disabled = true; el.classList.add(ok ? 'right' : 'wrong'); corr = ok ? '' : e.de[0]; if (!ok && e.de.length > 1) corr += '  ·  también: ' + e.de.slice(1).join(' / '); }
        else if (e.t === 'fix') { ok = sameAns(a, e.a); const el = $('.ans', root); el.disabled = true; el.classList.add(ok ? 'right' : 'wrong'); corr = ok ? '' : e.a[0]; }
        settle(ok, why, corr);
      } else { next(); }
    };
    function settle(good_, why, corr) {
      ok = good_; state = 'fb';
      const sent = fullSentence(e);
      const fb = $('#fb', root);
      fb.className = 'fb ' + (ok ? 'ok' : 'no');
      fb.innerHTML = `<div class="fbh">${ok ? '✓ ¡Correcto!' : '✗ No del todo'}</div>${corr ? `<div class="corr">${esc(corr)}</div>` : ''}${why ? `<div class="why">${esc(why)}</div>` : ''}${sent ? `<button class="listen" data-say="${esc(sent)}">🔊 Escuchar la frase</button>` : ''}`;
      const sb = $('.listen', fb); if (sb) sb.onclick = () => speak(sent);
      if (S.settings.auto && sent && ok) speak(sent);
      chk.hidden = false; chk.disabled = false; chk.textContent = 'Continuar'; chk.focus();
      chk.onclick = next;
      record(it, ok);
    }
    function next() { stopSpeak(); pos++; render(); }
    ready();
  }

  function record(it, ok) {
    const first = !it.retry;
    if (first) {
      answered++; if (ok) { good++; addXP(xpEach); } else missed.push(it);
      if (it.key && S.srs[it.key]) srsGrade(it.key, ok);
      else if (!ok && it.L) addErr(it.L, it.idx);
      if (it.L && it.idx != null && ok) { const k = srsKey('x', it.L.id, it.idx); if (S.srs[k]) srsGrade(k, true); }
    }
    if (!ok && first && opts.retry !== false) { const c = Object.assign({}, it, { retry: true }); queue.push(c); }
  }

  function finish() {
    stopSpeak();
    const pct = firstTotal ? Math.round(good / firstTotal * 100) : 0;
    const res = { correct: good, total: firstTotal, pct, missed: missed.length };
    if (opts.onFinish) opts.onFinish(res);
    const msg = pct >= 90 ? '¡Excelente! Dominas esto.' : pct >= 75 ? 'Muy bien. Repasa los fallos y avanza.' : pct >= 50 ? 'Vas bien, pero repasa la gramática y vuelve a intentarlo.' : 'Aún está fresco. Relee la gramática y repite.';
    root.innerHTML = `<div class="card result"><div class="bigpct ${pct >= 75 ? 'good' : 'low'}">${pct}%</div><h2>${good} de ${firstTotal} a la primera</h2><p>${msg}</p><p class="xp">+${good * xpEach} XP</p>
      ${missed.length ? `<div class="missed"><h3>Para repasar</h3><ul>${missed.map(m => `<li>${esc(missText(m.e))}</li>`).join('')}</ul></div>` : ''}
      <div class="actions row"><button class="btn" id="again">Repetir</button><button class="btn primary" id="back">Listo</button></div></div>`;
    $('#back', root).onclick = () => opts.back && opts.back(res);
    $('#again', root).onclick = () => exRun(root, items, opts);
  }
  function missText(e) { const s = fullSentence(e); if (s) return s; if (e.t === 'match') return 'Unir: ' + e.pairs.map(p => p[0] + ' = ' + p[1]).slice(0, 3).join(', ') + '…'; return e.q || e.es || ''; }
  render();
}

/* V.I.V.A. Brezel — interfaz: shell, inicio, lección */
const ICON = {
  home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
  review: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12a8 8 0 0 1 14-5l2-2v6h-6l2.2-2.2A5.5 5.5 0 1 0 17.5 13h2.5A8 8 0 0 1 4 12z"/></svg>',
  talk: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H9l-5 4V5a1 1 0 0 1 1-1z"/></svg>',
  stats: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V10h4v10zm6 0V4h4v16zm6 0v-7h4v7z"/></svg>'
};
const PRETZEL = '<svg viewBox="70 110 372 310" class="logo" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="40"><path d="M256 250C256 170 300 130 350 150C420 180 420 300 340 360C310 385 280 395 256 395C232 395 202 385 172 360C92 300 92 180 162 150C212 130 256 170 256 250"/><path d="M150 330C200 290 300 230 372 190M362 330C312 290 212 230 140 190" stroke-width="34"/></g></svg>';

let tabMem = {};
const view = () => $('#view');

function shell() {
  document.body.innerHTML = `<a class="skip" href="#view">Saltar al contenido</a>
  <div id="install" hidden><span>Instala Brezel en tu teléfono para usarla sin conexión.</span><button class="btn small primary" id="instBtn">Instalar</button><button class="iconbtn" id="instX" aria-label="Cerrar">✕</button></div>
  <header class="top"><a class="brand" href="#/" aria-label="Inicio">${PRETZEL}<span>Brezel</span></a>
    <div class="chips"><span class="chip" id="chipStreak" title="Racha de días">🔥 <b>0</b></span><span class="chip" id="chipXP" title="Puntos de experiencia">⭐ <b>0</b></span></div></header>
  <div class="flag" aria-hidden="true"><i></i><i></i><i></i></div>
  <main id="view" tabindex="-1"></main>
  <nav class="tabbar" aria-label="Principal">
    <a href="#/" data-n="home">${ICON.home}<span>Inicio</span></a>
    <a href="#/review" data-n="review">${ICON.review}<span>Repaso</span><em id="dueBadge" hidden></em></a>
    <a href="#/fluency" data-n="fluency">${ICON.talk}<span>Fluidez</span></a>
    <a href="#/stats" data-n="stats">${ICON.stats}<span>Progreso</span></a>
  </nav>`;
  const inst = $('#install');
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); window._ip = e; if (store.get('brezel.noinst') !== '1') inst.hidden = false; });
  $('#instBtn').onclick = async () => { if (window._ip) { window._ip.prompt(); await window._ip.userChoice; window._ip = null; } inst.hidden = true; };
  $('#instX').onclick = () => { inst.hidden = true; store.set('brezel.noinst', '1'); };
  document.addEventListener('click', e => { const b = e.target.closest('[data-say]'); if (b) { e.preventDefault(); speak(b.dataset.say, { slow: b.dataset.slow === '1' }); } });
}
function chips() {
  const s = $('#chipStreak b'), x = $('#chipXP b'); if (s) s.textContent = streak(); if (x) x.textContent = S.xp;
  const d = dueKeys().length, bd = $('#dueBadge'); if (bd) { bd.hidden = !d; bd.textContent = d > 99 ? '99+' : d; }
}
function setNav(n) { $$('.tabbar a').forEach(a => { const on = a.dataset.n === n; a.classList.toggle('on', on); if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); }); }
const sayBtn = (t, extra) => `<button class="say" data-say="${esc(t)}" ${extra || ''} aria-label="Escuchar">🔊</button>`;
const sayPill = (t, l) => `<button class="say pill" data-say="${esc(t)}" aria-label="Escuchar: ${esc(l)}">🔊 ${l}</button>`;
const pctBar = p => `<div class="bar" role="img" aria-label="${p}%"><i style="width:${p}%"></i></div>`;

/* ===================== INICIO ===================== */
let homeLevel = null;
function homeView() {
  setNav('home'); stopSpeak();
  const pl = plan(), nx = nextLesson(), due = dueKeys().length, gxp = todayXP(), goal = S.settings.goal;
  if (!homeLevel) homeLevel = nx ? nx.mod.level : 'A2';
  const donePct = Math.round(pl.done / pl.total * 100);
  let h = `<section class="plan"><div class="planh"><div><div class="big">${pl.left}</div><div class="cap">días hasta el 31 dic</div></div>
    <div><div class="big">${pl.done}<small>/${pl.total}</small></div><div class="cap">lecciones listas</div></div>
    <div><div class="big">${pl.perWeek}</div><div class="cap">por semana</div></div></div>${pctBar(donePct)}
    <div class="goal"><span>Hoy ${Math.min(gxp, goal)}/${goal} XP</span>${pctBar(clamp(Math.round(gxp / goal * 100), 0, 100))}</div></section>`;
  if (nx) h += `<a class="next" href="#/l/${nx.id}"><span class="plat">${lnum(nx)}</span><span class="nt"><b>${esc(nx.title)}</b><small>${esc(nx.es)} · ${lvLabel(nx.mod.level)}</small></span><span class="go">Continuar</span></a>`;
  else h += `<div class="card center"><h2>¡Completaste todo el curso!</h2><p>Repasa en Fluidez y haz los tests de módulo.</p></div>`;
  if (due) h += `<a class="duecard" href="#/review"><b>${due}</b><span>${due === 1 ? 'tarjeta lista' : 'tarjetas listas'} para repasar hoy</span><em>Repasar</em></a>`;
  h += `<div class="seg" role="tablist" aria-label="Nivel">${['A2', 'B1'].map(l => `<button role="tab" aria-selected="${homeLevel === l}" data-lv="${l}">${lvLabel(l)}</button>`).join('')}</div>`;
  h += `<div class="line">`;
  MODS.filter(m => m.level === homeLevel).forEach(m => {
    const done = m.lessons.filter(l => lessonDone(l.id)).length, tb = S.tests[m.id];
    h += `<section class="mod lv-${m.level}"><div class="modh"><span class="badge">${lvLabel(m.level)}·${m.num}</span><div><h3>${m.emoji} ${esc(m.title)}</h3><small>${done}/3 lecciones${tb != null ? ' · test ' + tb + '%' : ''}</small></div></div><ol class="stations">`;
    m.lessons.forEach(l => {
      const p = lessonPct(l.id), cur = nx && nx.id === l.id, d = p >= 85;
      h += `<li class="${d ? 'done' : ''} ${cur ? 'cur' : ''}"><a href="#/l/${l.id}"><span class="plat">${lnum(l)}</span><span class="lt"><b>${esc(l.title)}</b><small>${esc(l.es)}</small></span><span class="lp">${d ? '✓' : p ? p + '%' : ''}</span></a></li>`;
    });
    h += `<li class="testrow"><a href="#/test/${m.id}"><span class="plat t">★</span><span class="lt"><b>Test del módulo</b><small>20 preguntas mezcladas · aprueba con 80%</small></span><span class="lp">${tb != null ? tb + '%' : ''}</span></a></li></ol></section>`;
  });
  h += `</div>`;
  view().innerHTML = h;
  $$('[data-lv]').forEach(b => b.onclick = () => { homeLevel = b.dataset.lv; homeView(); });
}

/* ===================== LECCIÓN ===================== */
const TABS = [['g', 'Gramática'], ['v', 'Vocabulario'], ['p', 'Frases'], ['d', 'Diálogo'], ['e', 'Ejercicios'], ['s', 'Hablar']];
function lessonView(id, tab) {
  const L = lessonById(id); if (!L) { location.hash = '#/'; return; }
  setNav('home'); stopSpeak(); window.scrollTo(0, 0);
  tab = tab || tabMem[id] || (LS(id).g ? (LS(id).v ? 'e' : 'v') : 'g'); tabMem[id] = tab;
  const x = LS(id);
  const tabHtml = TABS.map(([k, n]) => { const done = k === 'e' ? (x.e || 0) >= 80 : !!x[k]; return `<button role="tab" aria-selected="${tab === k}" data-t="${k}" class="${done ? 'ok' : ''}">${n}</button>`; }).join('');
  view().innerHTML = `<div class="lhead"><a class="iconbtn back" href="#/" aria-label="Volver">‹</a><div><div class="lvl">${lvLabel(L.mod.level)} · Módulo ${L.mod.num} · Lección ${lnum(L)}</div><h1>${esc(L.title)}</h1><div class="sub">${esc(L.es)}</div></div></div>
  ${pctBar(lessonPct(id))}<div class="tabs" role="tablist">${tabHtml}</div><div id="tabbody"></div>`;
  $$('.tabs [data-t]').forEach(b => b.onclick = () => lessonView(id, b.dataset.t));
  const body = $('#tabbody');
  ({ g: tabGrammar, v: tabVocab, p: tabPhrases, d: tabDialog, e: tabEx, s: tabSpeak })[tab](L, body);
  const t = $('.tabs [aria-selected=true]'); if (t && t.scrollIntoView) t.scrollIntoView({ inline: 'center', block: 'nearest' });
}
function nextTab(L, cur) { const i = TABS.findIndex(t => t[0] === cur); return TABS[i + 1] ? TABS[i + 1][0] : null; }
function nextBtn(L, cur) { const n = nextTab(L, cur); if (!n) return `<div class="actions"><a class="btn primary" href="#/">Volver al mapa</a></div>`; return `<div class="actions"><button class="btn primary" data-go="${n}">Siguiente: ${TABS.find(t => t[0] === n)[1]}</button></div>`; }
function wireNext(L, body) { const b = $('[data-go]', body); if (b) b.onclick = () => lessonView(L.id, b.dataset.go); }

/* ----- gramática ----- */
function tabGrammar(L, body) {
  let h = `<div class="card goals"><h3>Qué vas a lograr</h3><ul>${L.goals.map(g => `<li>${esc(g)}</li>`).join('')}</ul></div>`;
  L.grammar.forEach(g => {
    h += `<article class="card gram"><h2>${esc(g.h)}</h2><p class="gp">${g.p}</p>`;
    if (g.table) h += `<div class="tw"><table><thead><tr>${g.table.head.map(c => `<th scope="col">${c}</th>`).join('')}</tr></thead><tbody>${g.table.rows.map(r => `<tr>${r.map((c, i) => i === 0 ? `<th scope="row">${c}</th>` : `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    h += `<ul class="exs">${g.ex.map(e => `<li><div class="de">${esc(e.de)}</div><div class="es">${esc(e.es)}</div>${sayBtn(e.de)}</li>`).join('')}</ul>`;
    if (g.tip) h += `<div class="tip"><b>Ojo:</b> ${g.tip}</div>`;
    h += `</article>`;
  });
  h += `<div class="actions"><button class="btn primary" id="gok">${LS(L.id).g ? 'Siguiente: Vocabulario' : 'Entendido, a practicar'}</button></div>`;
  body.innerHTML = h;
  $('#gok').onclick = () => { if (!LS(L.id).g) { mark(L.id, 'g'); addXP(15); } lessonView(L.id, 'v'); };
}

/* ----- vocabulario ----- */
function tabVocab(L, body) {
  const known = L.vocab.filter(v => S.srs[srsKey('v', L.id, v.de)]).length;
  let h = `<div class="card tools"><div><b>${L.vocab.length} palabras</b><small>${known ? known + ' ya en tu repaso espaciado' : 'Estúdialas con tarjetas para añadirlas al repaso'}</small></div><button class="btn primary" id="vstudy">Estudiar tarjetas</button></div>
  <ul class="vlist">${L.vocab.map(v => `<li><div class="vtop"><span class="vde ${genderClass(v.de)}">${colorDe(v.de)}${v.pl ? `<small class="pl">${esc(v.pl)}</small>` : ''}</span>${sayBtn(v.de.replace(/\|/g, ''))}</div><div class="ves">${esc(v.es)}</div>${v.note ? `<div class="vnote">${esc(v.note)}</div>` : ''}<div class="vex"><span>${esc(v.ex)}</span>${sayBtn(v.ex)}</div><div class="vexes">${esc(v.exes)}</div></li>`).join('')}</ul>`;
  h += nextBtn(L, 'v'); body.innerHTML = h; wireNext(L, body);
  $('#vstudy').onclick = () => {
    const cards = shuffle(L.vocab).map(v => ({ key: srsKey('v', L.id, v.de), front: `<div class="cf ${genderClass(v.de)}">${colorDe(v.de.replace(/\|/g, ''))}</div>`, back: `<div class="cb"><b>${esc(v.es)}</b>${v.note ? `<div class="vnote">${esc(v.note)}</div>` : ''}<div class="cex">${esc(v.ex)}</div><div class="cexes">${esc(v.exes)}</div></div>`, say: v.de.replace(/\|/g, ''), say2: v.ex }));
    cardSession(view(), cards, { mode: 'learn', title: 'Vocabulario · ' + L.title, back: () => lessonView(L.id, 'v'), onFinish: () => { mark(L.id, 'v'); addXP(20); } });
  };
}

/* ----- tarjetas (aprender / repasar) ----- */
function cardSession(root, cards, opts) {
  let i = 0, nOk = 0, shown = false;
  const total = cards.length;
  function draw() {
    if (i >= total) {
      stopSpeak(); if (opts.onFinish) opts.onFinish();
      root.innerHTML = `<div class="card result"><div class="bigpct good">${nOk}/${total}</div><h2>${opts.mode === 'learn' ? 'Tarjetas listas' : 'Repaso terminado'}</h2><p>${opts.mode === 'learn' ? 'Las palabras que fallaste vuelven mañana; las otras, en unos días.' : 'Volverás a ver cada tarjeta justo antes de olvidarla.'}</p><p class="xp">+${nOk * 5 + 10} XP</p><div class="actions"><button class="btn primary" id="cdone">Listo</button></div></div>`;
      addXP(nOk * 5); $('#cdone').onclick = () => opts.back && opts.back(); chips(); return;
    }
    const c = cards[i]; shown = false;
    root.innerHTML = `<div class="exbar"><button class="iconbtn" data-act="quit" aria-label="Salir">✕</button><div class="prog"><i style="width:${Math.round(i / total * 100)}%"></i></div><span class="count">${i + 1}/${total}</span></div>
      <div class="card flash" id="flash" tabindex="0" role="button" aria-label="Mostrar respuesta">${c.kind ? `<div class="qlabel">${c.kind}</div>` : ''}<div class="front">${c.front}</div>
      ${c.typed ? `<div class="typed"><input class="ans" id="tin" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="Escribe en alemán…" aria-label="Respuesta"></div>${umlBar()}` : ''}
      <div class="back" id="cback" hidden>${c.back}</div><div class="sayrow">${c.say ? sayPill(c.say, c.say2 ? 'Palabra' : 'Escuchar') : ''}${c.say2 ? sayPill(c.say2, 'Ejemplo') : ''}</div></div>
      <div class="actions" id="cact">${c.typed ? '<button class="btn primary" id="creveal">Comprobar</button>' : '<button class="btn primary" id="creveal">Mostrar respuesta</button>'}</div>`;
    $('[data-act=quit]', root).onclick = () => { if (confirm('¿Salir de la sesión?')) { stopSpeak(); opts.back && opts.back(); } };
    if (c.say && c.autoSay !== false && S.settings.auto && !c.typed) speak(c.say);
    const tin = $('#tin'); if (tin) { setTimeout(() => tin.focus(), 60); tin.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); reveal(); } }); }
    const reveal = () => {
      if (shown) return; shown = true; $('#cback').hidden = false; let typedOk = null;
      if (c.typed) { const v = $('#tin'); typedOk = sameAns(v.value, c.typed); v.disabled = true; v.classList.add(typedOk ? 'right' : 'wrong'); }
      if (c.say && c.typed) speak(c.say);
      $('#cact').innerHTML = typedOk !== null
        ? `<div class="fbline ${typedOk ? 'ok' : 'no'}">${typedOk ? '✓ Correcto' : '✗ Era: ' + esc(c.typed[0] || c.typed)}</div><button class="btn primary" id="cnext">Continuar</button>`
        : `<div class="grades"><button class="btn g0" data-g="0">Otra vez</button><button class="btn g1" data-g="1">Bien</button><button class="btn g2" data-g="2">Fácil</button></div>`;
      const adv = (ok, easy) => {
        if (opts.mode === 'learn') { if (S.srs[c.key]) srsGrade(c.key, ok, easy); else srsAdd(c.key, ok ? (easy ? 4 : 2) : 1); }
        else srsGrade(c.key, ok, easy);
        if (ok) nOk++; i++; draw();
      };
      if (typedOk !== null) $('#cnext').onclick = () => adv(typedOk, false);
      else $$('[data-g]').forEach(b => b.onclick = () => adv(b.dataset.g !== '0', b.dataset.g === '2'));
    };
    $('#creveal').onclick = reveal; $('#flash').onclick = e => { if (!e.target.closest('button,input')) reveal(); };
  }
  draw();
}

/* ----- frases ----- */
function tabPhrases(L, body) {
  const known = L.phrases.filter(v => S.srs[srsKey('p', L.id, v.de)]).length;
  let h = `<div class="card tools"><div><b>${L.phrases.length} frases útiles</b><small>${known ? known + ' en tu repaso' : 'Aprende frases completas, no palabras sueltas'}</small></div><button class="btn primary" id="pstudy">Estudiar frases</button></div><ul class="plist">`;
  L.phrases.forEach((p, i) => {
    h += `<li><div class="pdet"><span class="use">${esc(p.use)}</span><div class="pde">${esc(p.de)}</div><div class="pes">${esc(p.es)}</div></div><div class="pbtns">${sayBtn(p.de)}${hasMic ? `<button class="mic" data-i="${i}" aria-label="Repetir en voz alta">🎤</button>` : ''}</div><div class="said" id="said${i}" aria-live="polite"></div></li>`;
  });
  h += `</ul>${hasMic ? '' : '<p class="hint">Tu navegador no tiene reconocimiento de voz. Repite en voz alta y compara de oído.</p>'}` + nextBtn(L, 'p');
  body.innerHTML = h; wireNext(L, body);
  $$('.mic', body).forEach(b => b.onclick = () => micCheck(L.phrases[+b.dataset.i].de, $('#said' + b.dataset.i), b));
  $('#pstudy').onclick = () => {
    const cards = shuffle(L.phrases).map(p => ({ key: srsKey('p', L.id, p.de), kind: p.use, front: `<div class="cf phrase">${esc(p.es)}</div>`, back: `<div class="cb"><b class="pdeb">${esc(p.de)}</b><small>Dilo en voz alta antes de continuar</small></div>`, say: p.de, autoSay: false }));
    cardSession(view(), cards, { mode: 'learn', back: () => lessonView(L.id, 'p'), onFinish: () => { mark(L.id, 'p'); addXP(15); } });
  };
}
async function micCheck(target, out, btn) {
  if (!hasMic) return;
  out.className = 'said on'; out.textContent = 'Escuchando… habla ahora'; if (btn) btn.classList.add('rec'); stopSpeak();
  try {
    const alts = await listen(); const best = alts.map(a => ({ a, s: similarity(target, a) })).sort((x, y) => y.s - x.s)[0];
    out.className = 'said on ' + (best.s >= 80 ? 'ok' : best.s >= 50 ? 'mid' : 'no');
    out.innerHTML = `<b>${best.s}%</b> · escuché: «${esc(best.a)}»${best.s >= 80 ? ' · ¡muy bien!' : ' · inténtalo otra vez, más despacio'}`;
    if (best.s >= 80) addXP(5);
  } catch (e) {
    out.className = 'said on no'; out.textContent = e.message === 'not-allowed' ? 'Permite el micrófono en tu navegador para usar esta función.' : e.message === 'nospeech' ? 'No te escuché. Prueba de nuevo.' : 'No se pudo usar el micrófono (' + e.message + ').';
  }
  if (btn) btn.classList.remove('rec');
}

/* ----- diálogo ----- */
function tabDialog(L, body) {
  const D = L.dialog; let tr = false, run = 0;
  body.innerHTML = `<div class="card tools"><div><b>${esc(D.title)}</b><small>Escucha, y luego haz tú uno de los papeles</small></div></div>
    <div class="dtools"><button class="btn small" id="dall">▶ Escuchar todo</button><button class="btn small" id="dA">Hacer de A</button><button class="btn small" id="dB">Hacer de B</button><button class="btn small ghost" id="dtr" aria-pressed="false">Mostrar traducción</button></div>
    <div class="dlg" id="dlg">${D.lines.map((l, i) => `<div class="bub ${l.s}" id="b${i}"><div class="who">${l.s}</div><div class="bt"><div class="bde">${esc(l.de)}</div><div class="bes">${esc(l.es)}</div></div>${sayBtn(l.de)}</div>`).join('')}</div>
    <div id="rp" class="rp" hidden></div>` + nextBtn(L, 'd');
  wireNext(L, body);
  const hl = i => { $$('.bub', body).forEach(b => b.classList.remove('hl')); const b = $('#b' + i); if (b) { b.classList.add('hl'); b.scrollIntoView({ block: 'center', behavior: 'smooth' }); } };
  const fin = () => { mark(L.id, 'd'); addXP(20); toast('Diálogo completado · +20 XP'); chips(); };
  const reset = () => { run++; stopSpeak(); $$('.bub', body).forEach(b => b.classList.remove('hl', 'hide')); $('#rp').hidden = true; };
  $('#dtr').onclick = e => { tr = !tr; $('#dlg').classList.toggle('showtr', tr); e.target.setAttribute('aria-pressed', tr); e.target.textContent = tr ? 'Ocultar traducción' : 'Mostrar traducción'; };
  $('#dall').onclick = async () => { reset(); const me = run; for (let i = 0; i < D.lines.length; i++) { if (me !== run) return; hl(i); await speak(D.lines[i].de); await new Promise(r => setTimeout(r, 350)); } if (me === run) { $$('.bub', body).forEach(b => b.classList.remove('hl')); fin(); } };
  function role(r) {
    reset(); const me = run; let i = 0; const rp = $('#rp');
    $$('.bub.' + r, body).forEach(b => b.classList.add('hide'));
    const step = async () => {
      while (i < D.lines.length) {
        if (me !== run) return; const l = D.lines[i]; hl(i);
        if (l.s !== r) { await speak(l.de); i++; continue; }
        rp.hidden = false;
        rp.innerHTML = `<div class="rpt">Tu turno (${r})</div><div class="rph">${esc(l.es)}</div><div class="rpb"><button class="btn small" id="rpm" ${hasMic ? '' : 'hidden'}>🎤 Hablar</button><button class="btn small" id="rps">Ver y escuchar</button><button class="btn small primary" id="rpn">Siguiente</button></div><div class="said" id="rsaid" aria-live="polite"></div>`;
        $('#rpm').onclick = () => micCheck(l.de, $('#rsaid'), $('#rpm'));
        $('#rps').onclick = () => { $('#b' + i).classList.remove('hide'); speak(l.de); };
        $('#rpn').onclick = () => { $('#b' + i).classList.remove('hide'); i++; step(); };
        return;
      }
      rp.hidden = true; $$('.bub', body).forEach(b => b.classList.remove('hide', 'hl')); fin();
    };
    step();
  }
  $('#dA').onclick = () => role('A'); $('#dB').onclick = () => role('B');
}

/* ----- ejercicios ----- */
function tabEx(L, body) {
  const x = LS(L.id), n = L.ex.length;
  body.innerHTML = `<div class="card tools"><div><b>${n} ejercicios</b><small>${x.e ? 'Tu mejor resultado: ' + x.e + '%' : 'Sin intentos todavía'} · lo que falles vuelve en el repaso</small></div><button class="btn primary" id="estart">${x.e ? 'Repetir' : 'Empezar'}</button></div>
    <div class="card"><h3>Qué practicas aquí</h3><ul class="plain">${L.goals.map(g => `<li>${esc(g)}</li>`).join('')}</ul></div>` + nextBtn(L, 'e');
  wireNext(L, body);
  $('#estart').onclick = () => exRun(view(), L.ex.map((e, idx) => ({ e, L, idx })), { title: L.title, back: () => lessonView(L.id, 'e'), onFinish: r => { mark(L.id, 'e', r.pct); addXP(10); chips(); } });
}

/* ----- hablar ----- */
function tabSpeak(L, body) {
  const x = LS(L.id); x.sp = x.sp || [0, 0, 0];
  let h = `<p class="hint">Producir es lo que crea fluidez. Habla en voz alta (o escribe), y luego compara con el modelo.</p>`;
  L.speak.forEach((s, i) => {
    const key = L.id + ':' + i, val = S.notes[key] || '';
    h += `<article class="card spk ${x.sp[i] ? 'done' : ''}" id="sp${i}"><div class="qlabel">Tarea ${i + 1}</div><p class="q">${esc(s.prompt)}</p>
      <textarea class="ans" rows="4" data-k="${key}" placeholder="Escribe aquí tu respuesta en alemán…" aria-label="Tu respuesta">${esc(val)}</textarea>${umlBar()}
      <div class="rpb">${hasMic ? `<button class="btn small" data-mic="${i}">🎤 Dictar</button>` : ''}<button class="btn small" data-model="${i}">Ver modelo</button><button class="btn small ${x.sp[i] ? 'primary' : ''}" data-done="${i}">${x.sp[i] ? '✓ Hecha' : 'Marcar hecha'}</button></div>
      <div class="said" id="sps${i}" aria-live="polite"></div><div class="model" id="mod${i}" hidden><div class="mt1">Modelo</div><p>${esc(s.model)}</p>${sayBtn(s.model)}</div></article>`;
  });
  h += nextBtn(L, 's'); body.innerHTML = h; wireNext(L, body);
  $$('textarea[data-k]', body).forEach(t => t.addEventListener('input', () => { S.notes[t.dataset.k] = t.value; save(); }));
  $$('[data-model]', body).forEach(b => b.onclick = () => { const m = $('#mod' + b.dataset.model); m.hidden = !m.hidden; });
  $$('[data-mic]', body).forEach(b => b.onclick = async () => { const i = +b.dataset.mic, out = $('#sps' + i); out.className = 'said on'; out.textContent = 'Escuchando… habla'; b.classList.add('rec'); try { const a = await listen(); const t = $('#sp' + i + ' textarea'); t.value = (t.value ? t.value + ' ' : '') + a[0]; t.dispatchEvent(new Event('input')); out.className = 'said on ok'; out.textContent = 'Listo. Revisa el texto y compáralo con el modelo.'; } catch (e) { out.className = 'said on no'; out.textContent = 'No se pudo escuchar (' + e.message + ').'; } b.classList.remove('rec'); });
  $$('[data-done]', body).forEach(b => b.onclick = () => {
    const i = +b.dataset.done; x.sp[i] = x.sp[i] ? 0 : 1; if (x.sp[i]) addXP(15); if (x.sp.every(v => v)) { x.s = 1; } else x.s = 0; save(); chips(); lessonView(L.id, 's');
  });
}

/* V.I.V.A. Brezel — interfaz: repaso, fluidez, test, progreso, router */

/* ===================== REPASO ===================== */
function reviewView() {
  setNav('review'); stopSpeak(); window.scrollTo(0, 0);
  const keys = dueKeys(), all = Object.keys(S.srs).length;
  if (!keys.length) {
    const t = dayNum(todayKey()); const next = Object.values(S.srs).map(x => x.due).filter(d => d > t).sort((a, b) => a - b)[0];
    view().innerHTML = `<div class="card center empty"><div class="bigemoji">🥨</div><h2>${all ? 'Todo al día' : 'Aún no hay nada que repasar'}</h2>
      <p>${all ? `Tienes ${all} elementos en tu repaso espaciado. ${next ? 'El próximo vence ' + (next - t === 1 ? 'mañana' : 'en ' + (next - t) + ' días') + '.' : ''}` : 'Estudia las tarjetas de vocabulario o de frases de una lección y aparecerán aquí justo cuando toque repasarlas.'}</p>
      <div class="actions"><a class="btn primary" href="#/">${all ? 'Ir a las lecciones' : 'Empezar la lección 1'}</a></div></div>`;
    return;
  }
  const items = keys.map(resolveItem).filter(Boolean).sort((a, b) => (S.srs[a.key].b - S.srs[b.key].b)).slice(0, 30);
  const nv = items.filter(i => i.type === 'v').length, np = items.filter(i => i.type === 'p').length, nx = items.filter(i => i.type === 'x').length;
  view().innerHTML = `<div class="card center"><div class="bigpct good">${items.length}</div><h2>${items.length === 1 ? 'elemento' : 'elementos'} para repasar</h2>
    <p>${[nv && nv + ' palabras', np && np + ' frases', nx && nx + ' ejercicios que fallaste'].filter(Boolean).join(' · ')}</p>
    <p class="hint">Primero las tarjetas, luego los ejercicios. Unos ${Math.max(2, Math.round(items.length * 0.5))} minutos.</p>
    <div class="actions"><button class="btn primary" id="rgo">Empezar repaso</button></div></div>`;
  $('#rgo').onclick = () => {
    const cards = [], exs = [];
    items.forEach(it => {
      const b = S.srs[it.key].b;
      if (it.type === 'v') {
        const v = it.v, clean = v.de.replace(/\|/g, '');
        if (b <= 2) cards.push({ key: it.key, kind: 'Palabra · ' + lvLabel(it.L.mod.level), front: `<div class="cf ${genderClass(v.de)}">${colorDe(clean)}</div>`, back: `<div class="cb"><b>${esc(v.es)}</b><div class="cex">${esc(v.ex)}</div><div class="cexes">${esc(v.exes)}</div></div>`, say: clean, say2: v.ex });
        else cards.push({ key: it.key, kind: 'Escríbela en alemán (con artículo)', front: `<div class="cf phrase">${esc(v.es)}</div>`, typed: [clean, v.de], back: `<div class="cb"><b>${colorDe(clean)}</b><div class="cex">${esc(v.ex)}</div></div>`, say: clean, say2: v.ex, autoSay: false });
      } else if (it.type === 'p') {
        cards.push({ key: it.key, kind: it.v.use, front: `<div class="cf phrase">${esc(it.v.es)}</div>`, back: `<div class="cb"><b class="pdeb">${esc(it.v.de)}</b><small>Dilo en voz alta</small></div>`, say: it.v.de, autoSay: false });
      } else exs.push({ e: it.e, L: it.L, idx: parseInt(parseKey(it.key).id, 10), key: it.key });
    });
    const runEx = () => exs.length ? exRun(view(), exs, { back: reviewView, xp: 8 }) : reviewView();
    if (cards.length) cardSession(view(), shuffle(cards), { mode: 'review', back: runEx, onFinish: () => {} }); else runEx();
  };
}

/* ===================== FLUIDEZ ===================== */
function pool() {
  const started = LESSONS.filter(l => S.lessons[l.id] && (S.lessons[l.id].g || S.lessons[l.id].v));
  return started.length ? started : LESSONS.slice(0, 3);
}
function sentencePool(P) {
  const out = [];
  P.forEach(L => {
    L.grammar.forEach(g => g.ex.forEach(e => out.push({ de: e.de, es: e.es, L })));
    L.phrases.forEach(p => out.push({ de: p.de, es: p.es, L }));
    L.vocab.forEach(v => out.push({ de: v.ex, es: v.exes, L }));
    L.dialog.lines.forEach(l => out.push({ de: l.de, es: l.es, L }));
  });
  const seen = new Set();
  return out.filter(s => { const n = words(s.de).length; if (n < 4 || n > 14 || /…|\.\.\./.test(s.de) || seen.has(s.de)) return false; seen.add(s.de); return true; });
}
function fluencyView() {
  setNav('fluency'); stopSpeak(); window.scrollTo(0, 0);
  const P = pool(), nErr = Object.keys(S.srs).filter(k => k.startsWith('x|')).length;
  const items = [
    ['dict', '✍️', 'Dictado', 'Escuchas una frase y la escribes. Entrena el oído y la ortografía.', false],
    ['shadow', '🗣️', 'Repite la frase', 'Escucha, repite en voz alta y mira cuánto se parece.', false],
    ['trans', '🔁', 'Traducción rápida', 'Construye frases en alemán desde el español. 10 por ronda.', false],
    ['mix', '🎲', 'Mezcla de ejercicios', '15 ejercicios al azar de todo lo que ya estudiaste.', false],
    ['errs', '🩹', 'Mis errores', nErr ? nErr + (nErr === 1 ? ' ejercicio que fallaste, para dominarlo.' : ' ejercicios que fallaste, para dominarlos.') : 'Cuando falles un ejercicio, aparecerá aquí.', !nErr],
    ['dlg', '💬', 'Diálogos', 'Haz tú un papel en los diálogos de las lecciones.', false]
  ];
  view().innerHTML = `<h1 class="pt">Fluidez</h1><p class="hint">Usa el contenido de las lecciones que ya empezaste (${P.length} ${P.length === 1 ? 'lección' : 'lecciones'}). Entre más avances, más variedad.</p>
    <div class="fgrid">${items.map(([k, e, t, d, dis]) => `<button class="fcard" data-f="${k}" ${dis ? 'disabled' : ''}><span class="fe">${e}</span><b>${t}</b><small>${d}</small></button>`).join('')}</div>`;
  $$('[data-f]').forEach(b => b.onclick = () => fluencyGo(b.dataset.f));
}
function fluencyGo(k) {
  const P = pool(), back = fluencyView;
  if (k === 'dict') dictation(sample(sentencePool(P), 8), back);
  else if (k === 'shadow') shadowing(sample(sentencePool(P), 8), back);
  else if (k === 'trans') { const it = []; P.forEach(L => L.ex.forEach((e, idx) => { if (e.t === 'order' || e.t === 'tr') it.push({ e, L, idx }); })); exRun(view(), sample(it, 10), { back, retry: false }); }
  else if (k === 'mix') { const it = []; P.forEach(L => L.ex.forEach((e, idx) => { if (e.t !== 'match') it.push({ e, L, idx }); })); exRun(view(), sample(it, 15), { back }); }
  else if (k === 'errs') { const it = Object.keys(S.srs).filter(x => x.startsWith('x|')).map(resolveItem).filter(Boolean).map(r => ({ e: r.e, L: r.L, idx: parseInt(parseKey(r.key).id, 10), key: r.key })); exRun(view(), sample(it, 15), { back }); }
  else if (k === 'dlg') {
    const ls = P.slice(); view().innerHTML = `<div class="exbar"><button class="iconbtn" id="bk" aria-label="Volver">‹</button><h2 class="ph">Elige un diálogo</h2></div><div class="plainlist">${ls.map(l => `<a class="rowlink" href="#/l/${l.id}"><b>${esc(l.dialog.title)}</b><small>${esc(l.title)} · ${lvLabel(l.mod.level)}</small></a>`).join('')}</div>`;
    $('#bk').onclick = back; $$('.rowlink').forEach(a => a.addEventListener('click', () => { tabMem[a.getAttribute('href').split('/')[2]] = 'd'; }));
  }
}
/* diff por palabras (LCS) */
function wordDiff(target, said) {
  const t = words(target), u = norm(said).split(' ').filter(Boolean), tn = t.map(w => norm(w));
  const n = tn.length, m = u.length, dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) dp[i][j] = tn[i] === u[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const ok = new Array(n).fill(false); let i = 0, j = 0;
  while (i < n && j < m) { if (tn[i] === u[j]) { ok[i] = true; i++; j++; } else if (dp[i + 1][j] >= dp[i][j + 1]) i++; else j++; }
  return { html: t.map((w, k) => `<span class="${ok[k] ? 'w-ok' : 'w-no'}">${esc(w)}</span>`).join(' '), score: n ? Math.round(ok.filter(Boolean).length / n * 100) : 0 };
}
function dictation(list, back) {
  let i = 0, sum = 0;
  const draw = () => {
    if (i >= list.length) { const avg = Math.round(sum / list.length); addXP(Math.round(avg / 5)); chips(); view().innerHTML = `<div class="card result"><div class="bigpct ${avg >= 75 ? 'good' : 'low'}">${avg}%</div><h2>Dictado terminado</h2><p>${avg >= 85 ? 'Tu oído ya distingue muy bien.' : 'Escucha más despacio y fíjate en las terminaciones y los artículos.'}</p><p class="xp">+${Math.round(avg / 5)} XP</p><div class="actions"><button class="btn primary" id="dd">Listo</button></div></div>`; $('#dd').onclick = back; return; }
    const s = list[i];
    view().innerHTML = `<div class="exbar"><button class="iconbtn" id="qq" aria-label="Salir">✕</button><div class="prog"><i style="width:${Math.round(i / list.length * 100)}%"></i></div><span class="count">${i + 1}/${list.length}</span></div>
      <div class="card exq"><div class="qlabel">Dictado</div><div class="dbtns"><button class="btn bigplay" id="p1">▶ Escuchar</button><button class="btn" id="p2">🐢 Lento</button></div>
      <textarea class="ans" rows="3" autocomplete="off" autocapitalize="sentences" spellcheck="false" placeholder="Escribe lo que escuchas…" aria-label="Lo que escuchas"></textarea>${umlBar()}</div><div class="fb" id="fb" aria-live="polite"></div><div class="actions"><button class="btn primary" id="dchk">Comprobar</button></div>`;
    $('#qq').onclick = () => { if (confirm('¿Salir del dictado?')) { stopSpeak(); back(); } };
    $('#p1').onclick = () => speak(s.de); $('#p2').onclick = () => speak(s.de, { slow: true });
    setTimeout(() => speak(s.de), 250);
    const ta = $('textarea'); ta.focus();
    let stage = 0;
    $('#dchk').onclick = () => {
      if (stage === 0) {
        stage = 1; const r = wordDiff(s.de, ta.value); sum += r.score; ta.disabled = true;
        const fb = $('#fb'); fb.className = 'fb ' + (r.score >= 85 ? 'ok' : 'no'); fb.innerHTML = `<div class="fbh">${r.score}% de las palabras</div><div class="corr diff">${r.html}</div><div class="why">${esc(s.es)}</div>`;
        $('#dchk').textContent = 'Continuar';
      } else { stopSpeak(); i++; draw(); }
    };
  };
  draw();
}
function shadowing(list, back) {
  let i = 0, n = 0;
  const draw = () => {
    if (i >= list.length) { addXP(n * 5); chips(); view().innerHTML = `<div class="card result"><div class="bigpct good">${n}/${list.length}</div><h2>Ronda terminada</h2><p>Repetir frases completas es la forma más rápida de ganar soltura al hablar.</p><p class="xp">+${n * 5} XP</p><div class="actions"><button class="btn primary" id="dd">Listo</button></div></div>`; $('#dd').onclick = back; return; }
    const s = list[i];
    view().innerHTML = `<div class="exbar"><button class="iconbtn" id="qq" aria-label="Salir">✕</button><div class="prog"><i style="width:${Math.round(i / list.length * 100)}%"></i></div><span class="count">${i + 1}/${list.length}</span></div>
      <div class="card exq"><div class="qlabel">Escucha y repite en voz alta</div><p class="q shd">${esc(s.de)}</p><p class="es">${esc(s.es)}</p>
      <div class="dbtns"><button class="btn bigplay" id="p1">▶ Escuchar</button><button class="btn" id="p2">🐢 Lento</button>${hasMic ? '<button class="btn" id="pm">🎤 Hablar</button>' : ''}</div><div class="said" id="sd" aria-live="polite"></div></div>
      <div class="actions row"><button class="btn" id="sk">Saltar</button><button class="btn primary" id="ok">Lo dije bien</button></div>`;
    $('#qq').onclick = () => { stopSpeak(); back(); };
    $('#p1').onclick = () => speak(s.de); $('#p2').onclick = () => speak(s.de, { slow: true }); setTimeout(() => speak(s.de), 250);
    const pm = $('#pm'); if (pm) pm.onclick = () => micCheck(s.de, $('#sd'), pm);
    $('#sk').onclick = () => { stopSpeak(); i++; draw(); }; $('#ok').onclick = () => { stopSpeak(); n++; i++; draw(); };
  };
  draw();
}

/* ===================== TEST DE MÓDULO ===================== */
function testView(mid) {
  const m = modById(mid); if (!m) return homeView(); setNav('home'); stopSpeak(); window.scrollTo(0, 0);
  const best = S.tests[mid];
  view().innerHTML = `<div class="lhead"><a class="iconbtn back" href="#/" aria-label="Volver">‹</a><div><div class="lvl">${lvLabel(m.level)} · Módulo ${m.num}</div><h1>Test: ${esc(m.title)}</h1><div class="sub">20 preguntas mezcladas de las 3 lecciones</div></div></div>
    <div class="card center"><p>${best != null ? 'Tu mejor resultado: <b>' + best + '%</b>.' : 'Aún no lo has hecho.'} Para aprobar necesitas 80%. Sin pistas ni reintentos.</p><div class="actions"><button class="btn primary" id="tgo">Empezar test</button></div></div>`;
  $('#tgo').onclick = () => {
    let it = []; m.lessons.forEach(L => { const a = L.ex.map((e, idx) => ({ e, L, idx })).filter(x => x.e.t !== 'match'); it = it.concat(sample(a, 7)); });
    it = sample(it, 20);
    exRun(view(), it, { back: () => testView(mid), retry: false, xp: 15, onFinish: r => { S.tests[mid] = Math.max(S.tests[mid] || 0, r.pct); save(); if (r.pct >= 80) toast('¡Módulo aprobado! 🎉'); } });
  };
}

/* ===================== PROGRESO ===================== */
function statsView() {
  setNav('stats'); stopSpeak(); window.scrollTo(0, 0);
  const pl = plan(), words = Object.keys(S.srs).filter(k => k.startsWith('v|')).length, phr = Object.keys(S.srs).filter(k => k.startsWith('p|')).length;
  const strong = Object.keys(S.srs).filter(k => k.startsWith('v|') && S.srs[k].b >= 4).length;
  const t0 = dayNum(todayKey()); let cells = '';
  for (let d = t0 - 69; d <= t0; d++) { const dt = new Date(d * 86400000 + 43200000), key = dt.getUTCFullYear() + '-' + String(dt.getUTCMonth() + 1).padStart(2, '0') + '-' + String(dt.getUTCDate()).padStart(2, '0'), x = S.days[key] || 0; cells += `<i class="hm l${x === 0 ? 0 : x < 20 ? 1 : x < 50 ? 2 : x < 100 ? 3 : 4}" title="${key}: ${x} XP"></i>`; }
  const st = S.settings;
  view().innerHTML = `<h1 class="pt">Progreso</h1>
  <div class="statgrid"><div><b>${pl.done}/${pl.total}</b><small>lecciones</small></div><div><b>${words}</b><small>palabras en repaso</small></div><div><b>${strong}</b><small>palabras sólidas</small></div><div><b>${phr}</b><small>frases en repaso</small></div><div><b>${streak()}</b><small>días de racha</small></div><div><b>${S.xp}</b><small>XP total</small></div></div>
  <section class="card"><h3>Últimos 70 días</h3><div class="heat" role="img" aria-label="Actividad de los últimos 70 días">${cells}</div></section>
  <section class="card"><h3>Tests de módulo</h3><ul class="tl">${MODS.map(m => `<li><span>${lvLabel(m.level)}·${m.num} ${esc(m.title)}</span><b class="${S.tests[m.id] >= 80 ? 'good' : ''}">${S.tests[m.id] != null ? S.tests[m.id] + '%' : '—'}</b></li>`).join('')}</ul></section>
  <section class="card set"><h3>Ajustes</h3>
    <label class="row">Velocidad de la voz<input type="range" id="srate" min="0.6" max="1.2" step="0.05" value="${st.rate}"><output id="rv">${st.rate}×</output></label>
    <div class="row"><button class="btn small" id="stest">🔊 Probar la voz</button><small id="vinfo">${hasTTS() ? (voice ? 'Voz: ' + esc(voice.name) : 'Sin voz alemana detectada') : 'Sin síntesis de voz'}</small></div>
    <label class="row">Reproducir audio automáticamente<input type="checkbox" id="sauto" ${st.auto ? 'checked' : ''}></label>
    <label class="row">Meta diaria<select id="sgoal">${[20, 40, 60, 100].map(g => `<option ${st.goal === g ? 'selected' : ''} value="${g}">${g} XP</option>`).join('')}</select></label>
    <label class="row">Tema<select id="sdark"><option value="auto" ${st.dark === 'auto' ? 'selected' : ''}>Automático</option><option value="light" ${st.dark === 'light' ? 'selected' : ''}>Claro</option><option value="dark" ${st.dark === 'dark' ? 'selected' : ''}>Oscuro</option></select></label></section>
  <section class="card set"><h3>Copia de seguridad</h3><p class="hint">Tu progreso vive solo en este navegador. Guarda una copia por si cambias de teléfono o borras datos.</p>
    <div class="row wrap"><button class="btn small" id="bexp">Descargar copia</button><button class="btn small" id="bimp">Restaurar copia</button><input type="file" id="bfile" accept="application/json,.json" hidden><button class="btn small danger" id="breset">Borrar todo</button></div></section>
  <p class="ver">V.I.V.A. Brezel ${APP_VERSION} · A2 + B1.1 · ${LESSONS.length} lecciones</p>`;
  $('#srate').oninput = e => { st.rate = +e.target.value; $('#rv').textContent = st.rate + '×'; save(); };
  $('#stest').onclick = () => speak('Guten Tag! Ich lerne Deutsch und mache jeden Tag Fortschritte.');
  $('#sauto').onchange = e => { st.auto = e.target.checked; save(); };
  $('#sgoal').onchange = e => { st.goal = +e.target.value; save(); };
  $('#sdark').onchange = e => { st.dark = e.target.value; save(); applyTheme(); };
  $('#bexp').onclick = () => { const b = new Blob([JSON.stringify(S)], { type: 'application/json' }), a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'brezel-progreso-' + todayKey() + '.json'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000); };
  $('#bimp').onclick = () => $('#bfile').click();
  $('#bfile').onchange = e => { const f = e.target.files[0]; if (!f) return; const r = new FileReader(); r.onload = () => { try { const d = JSON.parse(r.result); if (!d.lessons || !d.srs) throw 0; S = d; load0(); save(); toast('Progreso restaurado'); route(); } catch (x) { toast('Ese archivo no es una copia válida'); } }; r.readAsText(f); };
  $('#breset').onclick = () => { if (confirm('¿Borrar TODO tu progreso? No se puede deshacer.') && confirm('Última confirmación: se borran lecciones, repasos y XP.')) { S = DEFAULT_STATE(); save(); toast('Progreso borrado'); route(); } };
}
function load0() { const d = DEFAULT_STATE(); for (const k in d) if (!(k in S)) S[k] = d[k]; for (const k in d.settings) if (!(k in S.settings)) S.settings[k] = d.settings[k]; }
function applyTheme() { const t = S.settings.dark; if (t === 'auto') document.documentElement.removeAttribute('data-theme'); else document.documentElement.setAttribute('data-theme', t); }

/* ===================== ROUTER ===================== */
function route() {
  const h = location.hash.replace(/^#\/?/, ''), parts = h.split('/'), a = parts[0], b = parts[1];
  if (a === 'view') return;
  try { listen.cur && listen.cur.abort && listen.cur.abort(); } catch (e) {}
  chips();
  if (!a) homeView();
  else if (a === 'l') lessonView(b);
  else if (a === 'review') reviewView();
  else if (a === 'fluency') fluencyView();
  else if (a === 'test') testView(b);
  else if (a === 'stats') statsView();
  else homeView();
  const v = view(); if (v && !(a === 'l')) { /* foco accesible sin saltos */ }
}
function init() {
  if (!LESSONS.length) { document.body.innerHTML = '<p style="padding:24px;font:16px system-ui">No se cargó el contenido del curso (courses.js).</p>'; return; }
  applyTheme(); shell(); route();
  window.addEventListener('hashchange', route);
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(() => {});
}
document.addEventListener('DOMContentLoaded', init);
