const mem = {};
const GAME = (new URLSearchParams(location.search).get('g')||'v5').replace(/[^A-Za-z0-9]/g,'').slice(0,12) || 'v5';
const PFX = 'mm36:'+GAME+':';
const store = {
  get(k, d){ try{ const v = localStorage.getItem(PFX+k); return v===null? (mem[k]??d) : JSON.parse(v);}catch(e){ return mem[k]??d; } },
  set(k, v){ mem[k]=v; try{ localStorage.setItem(PFX+k, JSON.stringify(v)); }catch(e){} }
};
const img = k => !IMG[k] ? '' : (IMG[k].startsWith('img/') ? IMG[k] : `data:image/jpeg;base64,${IMG[k]}`);
const esc = s => String(s??'').replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const md = s => esc(s).replace(/\*\*(.+?)\*\*/g,'<b class="hl">$1</b>').replace(/__(.+?)__/g,'<u class="ul">$1</u>');
const fCls = f => f==='한의학파'?'h':(f==='마운자로파'?'m':'n');
const fBadge = f => `<span class="badge ${f==='한의학파'?'b-han':(f==='마운자로파'?'b-mou':'b-non')}">${esc(f)}</span>`;
const $ = sel => document.querySelector(sel);
const byId = id => CHARS.find(c=>c.id===id);
const me = () => store.get('me', null);
const clueCode = (ownerId, i) => String(CHARS.findIndex(c=>c.id===ownerId)+1).padStart(2,'0')+'-'+(i+1);   // 예: 05-2
function parseClueCode(t){ const m=String(t).trim().match(/^(\d{1,2})\s*-\s*([1-3])$/); if(!m) return null; const ch=CHARS[+m[1]-1]; if(!ch) return null; return {o:ch.id,i:+m[2]-1}; }
const K = name => (me()||'_')+':'+name;   // 캐릭터별로 분리 저장

function setMode(m){ document.body.dataset.mode = m; }
function route(){
  const h = location.hash.replace(/^#\/?/,'');
  const [a,b,c] = h.split('/');
  window.scrollTo(0,0);
  if(a==='me') return renderMe(b);
  if(a==='inv' && b) return renderInv(b);
  if(a==='pick' && b) return renderPin(b);
  if(a==='shared') return renderShared(b);
  if(a==='ending') return renderEnding();
  if(a==='grade') return renderGrade();
  renderHome();
}
window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', route);

function topbar(title, back, act){
  return `<header class="top"><div class="wrap">
    ${back?`<a class="back" href="${back}" aria-label="뒤로">‹</a>`:''}
    <div class="ttl">${esc(title)}</div>
    ${act||''}
  </div></header>`;
}
function modebar(kind, text){
  const ic = {me:'🔒', inv:'🔍', shared:'📋', home:'', ending:'📖', grade:'✅'}[kind]||'';
  const lbl = {me:'나만 보는 화면', inv:'다른 플레이어 조사', shared:'공용 · 모두 같은 내용', ending:'엔딩북', grade:'최종 채점'}[kind]||'';
  return `<div class="modebar ${kind}"><span class="ic">${ic}</span><b>${lbl}</b><span class="tx">${esc(text||'')}</span></div>`;
}
function acc(title, body, open, id){ return `<div class="acc ${open?'open':''}" ${id?`id="${id}"`:''}><button onclick="this.parentNode.classList.toggle('open')"><span>${title}</span><span class="chev">›</span></button><div class="body">${body}</div></div>`; }

/* ===== tokens & inventory ===== */
function tokenState(){
  const rounds = store.get('rounds',{}); const T = META.tokens;
  const total = T.start + (rounds.r2?T.r2:0) + (rounds.r3?T.r3:0) + (rounds.r4?T.r4:0);
  const acq = store.get(K('acq'), []);
  return { total, acq, left: Math.max(0, total - acq.length) };
}
function nextTokenHint(){ const r=store.get('rounds',{}); if(!r.r2) return 'ROUND 2 코드 입력 시 +1'; if(!r.r3) return 'ROUND 3 코드 입력 시 +1'; if(!r.r4) return 'ROUND 4 코드 입력 시 +1'; return '추가 토큰 없음'; }

/* ===== HOME ===== */
function renderHome(){
  setMode('home');
  const my = me() ? byId(me()) : null;
  const ts = tokenState(); const view = store.get('alibiView','list');
  $('#app').innerHTML = `
  ${topbar(META.title, null, my?`<a class="act me" href="#/me">🔒 내 화면</a>`:'')}
  <main class="wrap">
    ${my && store.get('rounds',{}).ending? `<a class="finalbanner" href="#/grade"><span>📖 엔딩이 열렸습니다</span><b>✅ 최종 채점하기 →</b></a>`:''}
    <div class="titleblk">
      <div class="stamp">[대외비]<small>열람 주의</small></div>
      <div class="kicker">${esc(META.sub)}</div>
      <h1>매탄동 전자회사의<br>대증적 처방</h1>
      <p class="tag">${esc(META.tagline)}</p>
    </div>

    <div class="section-h"><span>게임 소개</span><small>눌러서 펼치기</small></div>
    ${acc('세계관 · 2036년, 종파전쟁', `${RULES.world.map(p=>`<p style="font-size:15px">${md(p)}</p>`).join('')}<div class="panel c-mou"><h3>2년 전, 치킨 3000마리 횡령 사건</h3><p style="margin:0;font-size:15px">${md(RULES.chicken)}</p></div>`, true)}
    ${acc('사건 개요 · 그리고 이번에는 사람이 죽었다', `<dl class="kv">${RULES.scene.map(([k,v])=>`<dt>${esc(k)}</dt><dd>${md(v)}</dd>`).join('')}</dl><div class="panel c-red" style="margin-top:14px"><h3>오늘 밤의 질문</h3><p style="margin:0">${esc(RULES.question)}</p></div><p class="hint">캐릭터북과 공개된 카드에 적힌 사실만 사용합니다. 진행자가 아직 공개하지 않은 자료는 미리 열람하지 않습니다.</p>`)}
    ${acc('게임 규칙 · 진행 흐름과 대화 규칙', `<ul class="tl navy">${RULES.flow.map(([t,h,d])=>`<li><div class="t">${esc(t)}</div><div class="d"><b>${esc(h)}</b><br>${esc(d)}</div></li>`).join('')}</ul>
      <dl class="kv" style="margin-top:14px">${RULES.talking.map(([k,v])=>`<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl>
      <div class="panel c-amb" style="margin-top:14px"><h3>조사 토큰</h3><p style="margin:0;font-size:15px">다른 플레이어의 개인 단서를 1장 열어볼 때 <b>내 토큰 1개</b>를 씁니다. 시작 ${META.tokens.start}개, ROUND 2·3·4 코드 입력 시 각 1개가 추가됩니다. 내 단서는 토큰 없이 봅니다. 열어본 단서는 내 화면의 ‘획득 단서’에 남습니다.</p></div>`)}
    ${acc('최종 추리 · 네 가지 항목', `${RULES.finalItems.map(([n,t,d])=>`<div class="panel"><h3>${n}. ${esc(t)}</h3><p style="margin:0;font-size:15px">${esc(d)}</p></div>`).join('')}<div class="panel c-amb"><h3>TRUE END 기준</h3><p style="margin:0;font-size:15px">${esc(RULES.trueEnd)}</p></div><p class="hint">제출은 내 화면의 <b>추리</b> 탭에서 합니다.</p>`)}

    <div class="section-h"><span>공개 정보 · 누구나 볼 수 있음</span></div>
    ${acc('공용 NPC 카드 · 조성혁 / 김대현 / 정수환', NPCS.map(n=>`<div class="npc"><img src="${img(n.img)}" alt=""><div><div class="nm">${esc(n.name)} <span class="small">${esc(n.age)}</span></div><div class="rl">${esc(n.role)} · ${esc(n.faction)}</div><p>${esc(n.info)}</p><p class="small">${esc(n.note)}</p></div></div>`).join(''))}
    ${acc('인물 관계도', `<div class="npcline">${esc(RELATIONS.npcLine)}</div><div class="rel">${CHARS.map(ch=>`<div><b>${esc(ch.name)}</b> ${fBadge(ch.faction)}<small>${esc(ch.group)}</small></div>`).join('')}</div><p class="small" style="margin:10px 0 0">${esc(RELATIONS.note)}</p>`)}
    ${acc('12명의 공개 알리바이 · 목록 / 시간별 그래프', `<div class="seg"><button class="${view==='list'?'on':''}" onclick="setAlibiView('list')">목록</button><button class="${view==='graph'?'on':''}" onclick="setAlibiView('graph')">시간별 그래프</button></div><div id="alibiwrap">${view==='graph'?alibiGraph():alibiList()}</div>`, false, 'acc-alibi')}

    <div class="section-h"><span>내 캐릭터</span></div>
    ${my? `<div class="mecard">
        <img src="${img('photo_'+my.id)}" alt="">
        <div class="mi"><div class="nm">${esc(my.name)}</div><div class="gp">${esc(my.group)} · ${esc(my.title)} ${fBadge(my.faction)}</div>
          <div class="stat"><span>🪙 토큰 <b>${ts.left}</b>/${ts.total}</span><span>📎 획득 단서 <b>${ts.acq.length}</b></span></div></div>
        <div class="mb"><a class="btn" href="#/me">내 화면</a><button class="btn ghost sm" onclick="changeMe()">변경</button></div>
      </div>`
    : `<div class="mecard empty"><div><b>아직 내 캐릭터가 없습니다.</b><br><span class="small">아래 카드 중 배정받은 캐릭터의 <b>내 캐릭터로 설정</b>을 누르고 번호를 입력하세요.</span></div></div>`}

    <div class="section-h"><span>캐릭터 카드 12장</span><small>누르면 뒤집혀 공개 정보가 보입니다</small></div>
    ${my? `<p class="guide">다른 사람의 카드를 뒤집어 공개 정보를 확인하고, <b>🔍 단서 조사</b>로 내 토큰을 써서 그 사람의 단서를 열어보세요.</p>`
        : `<p class="guide"><b>배정받은 캐릭터를 선택하세요.</b> 카드를 뒤집고 <b>내 캐릭터로 설정</b>을 눌러 진행자가 준 번호를 입력하면 시작됩니다.</p>`}
    <div class="grid" id="cards">
      ${CHARS.map(ch=>cardHTML(ch, my)).join('')}
    </div>

    <div class="section-h"><span>진행자 공개 단서 · 엔딩</span></div>
    <a class="rowbtn" href="#/shared"><div><b>📋 진행자 공개 단서</b><span>라운드마다 진행자가 알려주는 코드로 개봉 · 현장 구조도 · 감식 · 부검 · 회수 증거</span></div><span class="chev">›</span></a>
    <a class="rowbtn" href="#/ending"><div><b>📖 엔딩북</b><span>${store.get('rounds',{}).ending?'열려 있음':'최종 추리 제출 후 진행자가 알려주는 코드로 열림'}</span></div><span class="chev">›</span></a>
    ${my && store.get('rounds',{}).ending? `<a class="rowbtn grade" href="#/grade"><div><b>✅ 채점하기</b><span>엔딩이 열렸습니다 · 내 답을 정답과 대조합니다</span></div><span class="chev">›</span></a>`:''}
    <p class="foot">${esc(META.version)}<br><button class="lnk" onclick="resetAll()">이 기기 데이터 초기화</button></p>
  </main>`;
}
function cardHTML(ch, my){
  const isMe = my && my.id===ch.id;
  return `<div class="flip ${isMe?'isme':''}" id="card-${ch.id}">
    <button class="face front idb" onclick="flipCard('${ch.id}')" aria-label="${esc(ch.name)} 카드 뒤집기">
      <div class="strip ${fCls(ch.faction)}"><span>MX WELLNESS TF</span><span>${esc(ch.faction)}</span></div>
      <div class="hole"></div>
      <div class="body"><img src="${img('photo_'+ch.id)}" alt=""><div><div class="nm">${esc(ch.name)}</div><div class="gp">${esc(ch.group)}<br>${esc(ch.title.split(' · ').pop())}</div></div></div>
      <div class="bar"></div>
      ${isMe?'<span class="lk ok">내 캐릭터</span>':''}
      <span class="tapme">탭 → 공개 정보</span>
    </button>
    <div class="face back">
      <div class="bh"><span>${esc(ch.name)} · 공개 정보</span><button class="x" onclick="flipCard('${ch.id}')" aria-label="닫기">×</button></div>
      <div class="bb">
        <div class="pubtop"><img src="${img('photo_'+ch.id)}" alt=""><div><div class="meta">${esc(ch.birth)}<br>${esc(ch.group)}<br>${esc(ch.title)}</div>${fBadge(ch.faction)}</div></div>
        <div class="panel c-han"><h3>공개 알리바이</h3><p class="quote">${esc(ch.alibi)}</p></div>
        <div class="panel"><h3>누구나 아는 정보</h3><p style="margin:0">${esc(ch.publicInfo)}</p></div>
        <div class="panel"><h3>피해자와의 공개 관계</h3><p style="margin:0">${esc(ch.relation)}</p></div>
        <div class="panel c-amb"><h3>첫 자기소개</h3><p class="quote">${esc(ch.intro)}</p></div>
        <div class="bact">
          ${isMe? `<a class="btn" href="#/me">🔒 내 화면 열기</a>`
                : (my? `<a class="btn inv" href="#/inv/${ch.id}">🔍 단서 조사 (내 토큰 사용)</a>` : `<a class="btn ghost" href="#/pick/${ch.id}">내 캐릭터로 설정</a>`)}
          ${my && !isMe? `<a class="lnk small" href="#/pick/${ch.id}">이 캐릭터가 나라면 → 변경</a>`:''}
        </div>
      </div>
    </div>
  </div>`;
}
function flipCard(id){
  const el = $('#card-'+id); if(!el) return;
  const was = el.classList.contains('flipped');
  document.querySelectorAll('.flip.flipped').forEach(f=>f.classList.remove('flipped'));
  if(!was){ el.classList.add('flipped'); setTimeout(()=>el.scrollIntoView({behavior:'smooth',block:'start'}),60); }
}
function changeMe(){ if(confirm('내 캐릭터를 변경할까요? 토큰·획득 단서·메모·추리는 캐릭터별로 따로 저장됩니다.')){ store.set('me', null); renderHome(); } }
function resetAll(){ if(confirm('이 기기에 저장된 내 캐릭터·토큰·획득 단서·메모·추리·봉인 해제 상태를 모두 지울까요?')){ try{ Object.keys(localStorage).filter(k=>k.startsWith(PFX)).forEach(k=>localStorage.removeItem(k)); }catch(e){} for(const k in mem) delete mem[k]; location.hash='#/'; renderHome(); } }

/* ===== PIN ===== */
function renderPin(id){
  const ch = byId(id); if(!ch) return renderHome();
  setMode('home'); const n = ch.pin.length;
  $('#app').innerHTML = `
  ${topbar('내 캐릭터로 설정','#/')}
  <main class="wrap">
    <div class="gate">
      <div class="who"><img src="${img('photo_'+ch.id)}" alt=""><div><h2>${esc(ch.name)}</h2><p>${esc(ch.group)}<br>${esc(ch.title)}</p></div></div>
      <div class="gmsg" id="gmsg">진행자가 알려준 ${n}자리 번호를 입력하세요</div>
      <div class="pinrow"><input id="pin" type="tel" inputmode="numeric" maxlength="${n}" autocomplete="off" placeholder="${'·'.repeat(n)}" aria-label="번호"></div>
      <button class="btn" onclick="tryPin('${ch.id}')">이 캐릭터로 시작</button>
    </div>
    <p class="hint" style="text-align:center;color:var(--dim)">배정받은 캐릭터만 설정하세요. 다른 사람의 캐릭터북을 여는 것은 규칙 위반입니다.</p>
  </main>`;
  const inp=$('#pin'); inp.focus();
  inp.addEventListener('input', ()=>{ if(inp.value.length===n) tryPin(ch.id); });
  inp.addEventListener('keydown', e=>{ if(e.key==='Enter') tryPin(ch.id); });
}
function tryPin(id){
  const ch = byId(id); const v=$('#pin').value.trim();
  if(v===ch.pin){ store.set('me', id); location.hash='#/me'; renderMe(); }
  else { const m=$('#gmsg'); m.className='gmsg err'; m.textContent='번호가 맞지 않습니다'; $('#pin').value=''; $('#pin').focus(); }
}

/* ===== MY SCREEN ===== */
const TABS = [['story','이야기'],['timeline','시간표'],['secret','비밀'],['clues','내 단서'],['acq','획득 단서'],['memo','메모'],['deduce','추리']];
function renderMe(tab){
  const ch = me() ? byId(me()) : null; if(!ch){ location.hash='#/'; return renderHome(); }
  setMode('me');
  tab = tab || store.get(K('tab'), 'story'); store.set(K('tab'), tab);
  const ts = tokenState();
  $('#app').innerHTML = `
  ${topbar(ch.name+' · 내 화면','#/',`<span class="act tok">🪙 ${ts.left}</span>`)}
  ${modebar('me', ch.name+' 본인 외에는 보여주지 마세요')}
  <main class="wrap">
    <div class="doc book">
      <div class="bookhead">
        <div class="ph"><span class="clip"></span><img src="${img('photo_'+ch.id)}" alt=""></div>
        <div>
          <div class="nm">${esc(ch.name)}</div>
          <div class="meta">${esc(ch.birth)} · ${esc(ch.career)}<br>${esc(ch.group)}<br>${esc(ch.title)}</div>
          <div style="margin-top:6px">${fBadge(ch.faction)} ${ch.canLie?'<span class="badge b-red">거짓말 범위 있음</span>':'<span class="badge b-non">거짓말 불가</span>'}</div>
        </div>
      </div>
    </div>
    <nav class="tabs">${TABS.map(([k,l])=>`<button class="tab ${k===tab?'on':''}" onclick="location.hash='#/me/${k}'">${l}</button>`).join('')}</nav>
    <section class="pane on" id="pane">${renderPane(ch, tab)}</section>
  </main>`;
  if(tab==='memo') bindMemo(ch);
  if(tab==='deduce') bindDeduce(ch);
}
function renderPane(ch, tab){
  return ({story:paneStory, timeline:paneTimeline, secret:paneSecret, clues:paneClues, acq:paneAcq, memo:paneMemo, deduce:paneDeduce}[tab]||paneStory)(ch);
}
function paneStory(ch){ return `<p class="legend-hl"><b class="hl">굵은 글씨</b>는 반드시 기억할 사실, <u class="ul">밑줄</u>은 말할 때 조심할 문장입니다.</p><div class="panel story">${ch.story.map(p=>`<p>${md(p)}</p>`).join('')}</div>`; }
function paneTimeline(ch){
  return `<ul class="tl">${ch.timeline.map(([t,d])=>`<li><div class="t">${esc(t)}</div><div class="d">${md(d)}</div></li>`).join('')}</ul>
  ${ch.knows.length?`<div class="panel c-han" style="margin-top:14px"><h3>당신이 확실히 아는 것</h3><ul class="plain">${ch.knows.map(k=>`<li>${md(k)}</li>`).join('')}</ul></div>`:''}
  ${ch.weak.length?`<div class="panel c-red"><h3>알리바이가 흔들리는 지점</h3><ul class="plain">${ch.weak.map(k=>`<li>${md(k)}</li>`).join('')}</ul></div>`:''}`;
}
function paneSecret(ch){
  const L = ch.lie;
  return `
  <div class="panel c-red"><h3>비공개 사실</h3><ul class="plain">${ch.secrets.map(s=>`<li>${md(s)}</li>`).join('')}</ul></div>
  <div class="panel"><h3>${ch.canLie?'거짓말 범위 · 이 선을 넘지 마세요':'말하기 규칙'}</h3>
    <div class="lie">
      ${L.can?`<div class="ok"><b>가능 · 사실과 다르게 말해도 됨</b><u class="ul">${esc(L.can)}</u></div>`:''}
      ${L.hide?`<div class="hide"><b>숨김 · 답변 거절은 되지만 부정은 안 됨</b><u class="ul">${esc(L.hide)}</u></div>`:''}
      ${L.forbid?`<div class="no"><b>${ch.canLie?'금지':'규칙'}</b>${esc(L.forbid)}</div>`:''}
    </div></div>
  ${ch.tips.length?`<div class="panel c-amb"><h3>PLAY / 거짓말 TIP</h3><ul class="plain">${ch.tips.map(s=>`<li>${md(s)}</li>`).join('')}</ul></div>`:''}
  <div class="panel"><h3>누가 내 비밀을 알고 있나</h3><p style="margin:0">${md(ch.whoKnows)}</p></div>
  ${ch.targets.length?`<div class="panel c-mou"><h3>먼저 타겟할 인물</h3><ul class="plain">${ch.targets.map(s=>`<li>${md(s)}</li>`).join('')}</ul></div>`:''}
  <div class="panel c-amb"><h3>미션</h3><p style="margin:0 0 6px"><b>공통</b> 실제 범인과 범행 동기를 맞힌다.</p><p style="margin:0"><b>개인</b> ${md(ch.mission)}</p></div>`;
}
function clueCard(owner, c, i, opts={}){
  return `<div class="clue ${opts.cls||''}" id="${opts.id||''}">
    <div class="ch"><b>${esc(c.title)}</b><span class="ev">${esc(owner.name)} · 코드 ${clueCode(owner.id,i)}</span></div>
    <div class="im"><img src="${img(c.img)}" alt="${esc(c.title)}" onclick="openZoom(this.src)"></div>
    <div class="ct">${esc(c.text)}</div>
    ${opts.foot||''}
  </div>`;
}
function paneClues(ch){
  const rev = store.get(K('rev'), {});
  return `<p class="hint">내 개인 단서 3장입니다. 토큰 없이 볼 수 있습니다. 공개하기로 결정한 순간에만 다른 사람에게 보여줍니다.</p>
  ${ch.clues.map((c,i)=>clueCard(ch,c,i,{foot:`<div class="cf"><button class="rev ${rev[i]?'on':''}" onclick="toggleRev(${i},this)">${rev[i]?'공개함':'미공개'}</button><button class="btn sm" onclick="shareClue('${ch.id}',${i})">📣 공개하기</button></div>`})).join('')}
  <p class="hint">카드에 적힌 사실을 바꾸거나 새 증거를 만들어 말할 수 없습니다.</p>`;
}
function toggleRev(i,btn){ const r=store.get(K('rev'),{}); r[i]=!r[i]; store.set(K('rev'),r); btn.classList.toggle('on',r[i]); btn.textContent = r[i]?'공개함':'미공개'; }
function paneAcq(ch){
  const ts = tokenState();
  const list = ts.acq.slice().reverse();
  const recv = store.get(K('recv'), []).slice().reverse();
  return `<div class="tokbar"><div><div class="lbl">조사 토큰</div><div class="mono" style="font-size:12px;color:var(--dim)">${ts.left>0?`남은 토큰 ${ts.left}개`:'토큰 없음 · '+nextTokenHint()}</div></div>
    <div class="coins">${Array.from({length:ts.total},(_,i)=>`<span class="coin ${i<ts.left?'':'ghost'}">T</span>`).join('')}</div></div>

  <div class="panel c-amb"><h3>공개받은 단서 추가</h3>
    <p style="margin:0 0 8px;font-size:14px">누가 단서를 공개하면 카드 코드(예: <b>05-2</b>)를 말해주거나 카톡으로 보냅니다. 코드를 입력하면 그 단서가 내 단서함에 들어옵니다. 토큰은 들지 않습니다.</p>
    <div class="coderow"><input id="recvcode" type="text" inputmode="numeric" placeholder="05-2" maxlength="5"><button class="btn sm" onclick="addRecv()">추가</button></div></div>

  <h3 class="subh">토큰으로 조사한 단서 · ${list.length}장</h3>
  ${list.length? list.map(a=>{ const o=byId(a.o); const c=o.clues[a.i]; return clueCard(o,c,a.i,{foot:`<div class="cf"><span class="small">${esc(a.at||'')} 조사 · <a class="lnk small" href="#/inv/${o.id}">${esc(o.name)} 더 조사</a></span><button class="btn sm" onclick="shareClue('${o.id}',${a.i})">📣 공개하기</button></div>`}); }).join('')
    : `<div class="panel"><p style="margin:0;font-size:14px">아직 없습니다. 홈에서 다른 캐릭터 카드를 뒤집고 <b>🔍 단서 조사</b>를 누르면 토큰 1개로 그 사람의 단서 1장을 열어볼 수 있습니다.</p></div>`}

  <h3 class="subh">공개받은 단서 · ${recv.length}장</h3>
  ${recv.length? recv.map(a=>{ const o=byId(a.o); const c=o.clues[a.i]; return clueCard(o,c,a.i,{foot:`<div class="cf"><span class="small">${esc(a.at||'')} 코드로 받음</span><button class="lnk small" onclick="removeRecv('${a.o}',${a.i})">제거</button></div>`}); }).join('')
    : `<div class="panel"><p style="margin:0;font-size:14px">아직 없습니다.</p></div>`}`;
}
function addRecv(){
  const inp=$('#recvcode'); const p=parseClueCode(inp.value);
  if(!p){ inp.value=''; inp.placeholder='형식: 05-2'; inp.focus(); return; }
  if(p.o===me()){ alert('내 단서입니다. 내 단서 탭에서 볼 수 있습니다.'); inp.value=''; return; }
  const recv=store.get(K('recv'),[]); if(!recv.some(a=>a.o===p.o&&a.i===p.i)) recv.push({o:p.o,i:p.i,at:new Date().toTimeString().slice(0,5)}); store.set(K('recv'),recv);
  renderMe('acq');
}
function removeRecv(o,i){ store.set(K('recv'), store.get(K('recv'),[]).filter(a=>!(a.o===o&&a.i===i))); renderMe('acq'); }
function shareClue(ownerId, i){
  const o=byId(ownerId); const c=o.clues[i]; const code=clueCode(ownerId,i);
  const sheet=document.createElement('div'); sheet.className='sheet'; sheet.id='sheet';
  sheet.innerHTML=`<div class="sh">
    <div class="shh"><b>단서 공개</b><button class="x" onclick="closeSheet()">×</button></div>
    <p class="small" style="margin:0 0 6px">${esc(o.name)}의 단서 · ${esc(c.title)}</p>
    <div class="bigcode">${code}</div>
    <p style="font-size:14px;margin:0 0 12px">이 코드를 받은 사람은 <b>내 화면 › 획득 단서 › 공개받은 단서 추가</b>에 입력하면 카드를 볼 수 있습니다.</p>
    <button class="btn" style="width:100%;margin-bottom:8px" onclick="closeSheet();alert('테이블에 이렇게 말하세요:\\n\\n“${code} 공개합니다 — ${esc(o.name)}의 ${esc(c.title)}”')">📣 모두에게 공개 (말로 알리기)</button>
    <button class="btn inv" style="width:100%" onclick="sendClue('${ownerId}',${i})">✉️ 특정인에게 보내기 (카톡 공유)</button>
  </div>`;
  document.body.appendChild(sheet);
}
function closeSheet(){ const s=$('#sheet'); if(s) s.remove(); }
async function sendClue(ownerId,i){
  const o=byId(ownerId); const c=o.clues[i]; const code=clueCode(ownerId,i);
  const text=`[매탄동 단서 공개] ${o.name}의 단서 「${c.title}」\n코드: ${code}\n→ 내 화면 › 획득 단서 › 공개받은 단서 추가에 입력`;
  closeSheet();
  try{ if(navigator.share){ await navigator.share({text}); return; } }catch(e){}
  try{ await navigator.clipboard.writeText(text); alert('복사했습니다. 보낼 사람과의 채팅에 붙여넣으세요.'); }catch(e){ prompt('아래 내용을 복사해 보내세요', text); }
}

/* ===== INVESTIGATE another player ===== */
function renderInv(id){
  const my = me() ? byId(me()) : null; const t = byId(id);
  if(!t) return renderHome(); if(!my){ location.hash='#/pick/'+id; return renderPin(id); }
  if(t.id===my.id){ location.hash='#/me/clues'; return renderMe('clues'); }
  setMode('inv');
  const ts = tokenState();
  const mine = ts.acq.filter(a=>a.o===t.id).map(a=>a.i);
  $('#app').innerHTML = `
  ${topbar(t.name+' 조사','#/',`<span class="act tok">🪙 ${ts.left}</span>`)}
  ${modebar('inv', my.name+'의 토큰으로 '+t.name+'의 단서를 열어봅니다')}
  <main class="wrap">
    <div class="doc invhead">
      <img src="${img('photo_'+t.id)}" alt="">
      <div><div class="nm">${esc(t.name)}</div><div class="meta">${esc(t.group)} · ${esc(t.title)}</div>${fBadge(t.faction)}
        <div class="small" style="margin-top:6px">공개 알리바이: “${esc(t.alibi)}”</div></div>
    </div>
    <div class="tokbar"><div><div class="lbl">내 조사 토큰 (${esc(my.name)})</div><div class="mono" style="font-size:12px;color:var(--dim)">${ts.left>0?`남은 토큰 ${ts.left}개 · 1장 개봉에 1개`:'토큰 없음 · '+nextTokenHint()}</div></div>
      <div class="coins" id="coins">${Array.from({length:ts.total},(_,i)=>`<span class="coin ${i<ts.left?'':'ghost'}">T</span>`).join('')}</div></div>
    ${t.clues.map((c,i)=> mine.includes(i)
      ? clueCard(t,c,i,{id:'clue-'+i, foot:`<div class="cf"><span class="small">내 획득 단서에 보관됨</span></div>`})
      : `<div class="clue sealedc" id="clue-${i}">
          <div class="ch"><b>봉인된 단서</b><span class="ev">${esc(t.name)} · ${i+1}/3</span></div>
          <div class="sealface"><div><div class="seal ${ts.left>0?'blink':''}">SEALED</div><p>${ts.left>0?'내 토큰 1개로 열어볼 수 있습니다':'토큰이 없습니다'}</p></div></div>
          <div class="cf" style="padding-top:12px"><span class="small">열면 내 획득 단서에 남습니다</span><button class="btn inv sm" ${ts.left>0?'':'disabled style="opacity:.4"'} onclick="investigate('${t.id}',${i})">🪙 토큰 1개로 열기</button></div>
        </div>`).join('')}
    <p class="hint" style="color:var(--dim)">상대 화면에는 아무 표시도 남지 않습니다. 열어본 내용을 말로 공개할지는 내 선택입니다.</p>
  </main>`;
}
function investigate(ownerId, i){
  const ts = tokenState(); if(ts.left<=0) return;
  const coins = document.querySelectorAll('#coins .coin:not(.ghost)');
  const coin = coins[coins.length-1]; if(coin) coin.classList.add('fly');
  setTimeout(()=>{
    const acq = store.get(K('acq'), []); if(!acq.some(a=>a.o===ownerId&&a.i===i)) acq.push({o:ownerId,i,at:new Date().toTimeString().slice(0,5)}); store.set(K('acq'), acq);
    renderInv(ownerId);
    const el=$('#clue-'+i); if(el){ el.classList.add('reveal'); el.scrollIntoView({behavior:'smooth',block:'center'}); }
  }, 560);
}
function openZoom(src){ $('#zoomimg').src=src; $('#zoom').classList.add('on'); }
function closeZoom(){ $('#zoom').classList.remove('on'); }

/* ===== MEMO ===== */
const SLOTS = ['18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:15','21:30','21:45','22:00','22:15','22:30','23:00'];
function paneMemo(ch){
  const m = store.get(K('memo'), {text:'', slots:{}, at:null});
  return `<p class="hint">다른 사람의 진술에서 걸리는 부분을 적고 <b>저장</b>을 누르세요.</p>
  <div class="tgrid"><div class="h">TIME</div><div class="h">누가 · 어디서 · 무엇을 (다른 사람 진술)</div>
  ${SLOTS.map(s=>`<div class="tt">${s}</div><input data-slot="${s}" value="${esc(m.slots[s]||'')}">`).join('')}</div>
  <h3 class="subh">자유 메모</h3>
  <textarea class="memo" id="memotext" placeholder="가설, 질문할 것, 의심 포인트…">${esc(m.text)}</textarea>
  <div class="savebar"><span class="st" id="memost">${m.at?'저장됨 · '+m.at:'저장된 메모 없음'}</span>
    <span><button class="btn ghost sm" onclick="clearMemo()">지우기</button> <button class="btn sm" onclick="saveMemo()">저장</button></span></div>`;
}
function bindMemo(){ document.querySelectorAll('.tgrid input, #memotext').forEach(el=>el.addEventListener('input', ()=>{ const s=$('#memost'); if(s){ s.textContent='저장되지 않은 변경'; s.className='st dirty'; } })); }
function saveMemo(){
  const slots={}; document.querySelectorAll('.tgrid input').forEach(i=>{ if(i.value) slots[i.dataset.slot]=i.value; });
  const at = new Date().toTimeString().slice(0,5);
  store.set(K('memo'),{text:$('#memotext').value, slots, at});
  const s=$('#memost'); s.textContent='저장됨 · '+at; s.className='st';
}
function clearMemo(){ if(confirm('메모를 모두 지울까요?')){ store.set(K('memo'),{text:'',slots:{},at:null}); renderMe('memo'); } }

/* ===== DEDUCTION ===== */
function ded(){ return store.get(K('ded'), {a1:'',a2c:'',a2m:'',a3p:'',a3t:'',a4:'',submitted:false,grade:{},graded:false}); }
function paneDeduce(ch){
  const d = ded(); const endingOpen = !!store.get('rounds',{}).ending;
  const sel = (name,val,ph) => `<select name="${name}" ${d.submitted?'disabled':''}><option value="">${ph}</option>${CHARS.map(c=>`<option value="${c.id}" ${val===c.id?'selected':''}>${esc(c.name)}</option>`).join('')}</select>`;
  const ta = (name,val) => d.submitted ? `<div class="ans ${val?'':'empty'}">${esc(val||'(미작성)')}</div>` : `<textarea name="${name}" placeholder="답을 적으세요">${esc(val)}</textarea>`;
  let html = `
  ${d.submitted?`<div class="locked-note"><span>제출 완료 · 수정 불가</span><button class="btn ghost sm" onclick="unsubmit()">수정하기</button></div>`:`<p class="hint">FINAL에 네 항목을 적고 <b>제출</b>을 누르세요. 제출 후에는 잠기며, 엔딩 코드가 열리면 아래에서 직접 채점합니다.</p>`}
  <div class="panel">
    <div class="fld"><label>1. 사망 원인과 사건의 방식</label>${ta('a1',d.a1)}</div>
    <div class="fld"><label>2. 실제 범인</label>${sel('a2c',d.a2c,'범인을 선택')}</div>
    <div class="fld"><label>2. 동기</label>${ta('a2m',d.a2m)}</div>
    <div class="fld"><label>3. 비밀을 밝혀낸 플레이어</label>${sel('a3p',d.a3p,'플레이어를 선택')}</div>
    <div class="fld"><label>3. 그 플레이어의 비밀</label>${ta('a3t',d.a3t)}</div>
    <div class="fld"><label>4. 치킨 3000마리 횡령 사건의 비밀</label>${ta('a4',d.a4)}</div>
    ${d.submitted?'':`<div style="text-align:right"><button class="btn" onclick="submitDed()">제출</button></div>`}
  </div>`;
  if(d.submitted){
    html += endingOpen
      ? `<a class="rowbtn grade" href="#/grade" style="margin-top:4px"><div><b>✅ 채점하기</b><span>엔딩이 열렸습니다. 채점 화면으로 이동합니다.</span></div><span class="chev">›</span></a>`
      : `<div class="panel c-amb"><h3>다음 단계</h3><p style="margin:0;font-size:15px">모두 제출한 뒤 진행자가 엔딩 코드를 알려주면 <a href="#/ending" style="color:var(--red)">엔딩북</a>이 열리고, 홈의 <b>✅ 채점하기</b>에서 채점합니다.</p></div>`;
  }
  return html;
}
function bindDeduce(){ document.querySelectorAll('#pane textarea, #pane select').forEach(el=>el.addEventListener('input', ()=>{ const d=ded(); d[el.name]=el.value; store.set(K('ded'), d); })); }
function submitDed(){ const d=ded(); if(!d.a2c){ alert('2번 범인을 선택하세요.'); return; } if(!confirm('제출하면 수정이 잠깁니다. 제출할까요?')) return; d.submitted=true; store.set(K('ded'),d); renderMe('deduce'); }
function unsubmit(){ if(confirm('제출을 취소하고 수정할까요? (채점 내용도 지워집니다)')){ const d=ded(); d.submitted=false; d.graded=false; d.grade={}; store.set(K('ded'),d); renderMe('deduce'); } }
function scoreOf(d){
  const R = HOST_RUBRIC; const g = d.grade||{};
  const n = k => (g[k]||[]).filter(Boolean).length;
  const s1 = n('c0')>=2?1:(n('c0')===1?0.5:0);
  const culpritOk = d.a2c && byId(d.a2c)?.name===R[1].culprit;
  const s2 = culpritOk ? (n('c1')>=1?1:0.5) : 0;
  const s3 = n('c2')>=2?1:0;
  const s4 = n('c3')>=2?1:(n('c3')===1?0.5:0);
  const total = s1+s2+s3+s4;
  return {s:[s1,s2,s3,s4], total, label: total===4?'perfect':((s1===1&&s2===1&&total>=3)?'true':'fail'), culpritOk};
}
function renderGrade(){
  const ch = me() ? byId(me()) : null; if(!ch){ location.hash='#/'; return renderHome(); }
  setMode('grade');
  const d = ded(); const endingOpen = !!store.get('rounds',{}).ending;
  let body;
  if(!d.submitted){
    body = `<div class="gate"><h2 style="margin:0 0 8px">아직 제출한 추리가 없습니다</h2><p style="font-family:var(--mono);color:var(--dim);font-size:13px;margin-bottom:14px">FINAL에 네 항목을 적고 제출한 뒤 채점할 수 있습니다.</p><a class="btn" href="#/me/deduce">추리 탭으로</a></div>`;
  } else if(!endingOpen){
    body = `<div class="gate"><div class="seal" style="display:inline-block;transform:rotate(-8deg);color:var(--red);border:3px solid var(--red);border-radius:6px;padding:4px 14px;font-weight:900;letter-spacing:.2em;margin-bottom:10px">SEALED</div>
      <h2 style="margin:0 0 6px">엔딩 코드</h2><div class="gmsg" id="gmsg">모두 제출한 뒤 진행자가 알려줍니다. 코드를 넣으면 엔딩북이 열리고 채점이 시작됩니다.</div>
      <div class="pinrow"><input id="pin" type="tel" inputmode="numeric" maxlength="4" placeholder="····"></div><button class="btn" onclick="tryEndingFromGrade()">개봉</button></div>`;
  } else if(!d.graded){
    body = gradeForm(d);
  } else {
    body = gradeResult(ch, d);
  }
  $('#app').innerHTML = `${topbar('최종 채점 · '+ch.name,'#/')}${modebar('grade', ch.name+'의 답안을 정답과 대조합니다')}<main class="wrap" style="padding-top:16px">${body}</main>`;
  if(!d.submitted || endingOpen) return;
  const inp=$('#pin'); if(inp){ inp.focus(); inp.addEventListener('input',()=>{ if(inp.value.length===4) tryEndingFromGrade(); }); inp.addEventListener('keydown',e=>{ if(e.key==='Enter') tryEndingFromGrade(); }); }
}
function tryEndingFromGrade(){ if($('#pin').value.trim()===META.roundCodes.ending){ const r=store.get('rounds',{}); r.ending=true; store.set('rounds',r); renderGrade(); } else { const m=$('#gmsg'); m.className='gmsg err'; m.textContent='코드가 맞지 않습니다'; $('#pin').value=''; } }
function gradeForm(d){
  const R = HOST_RUBRIC; const g = d.grade||{}; const sc = scoreOf(d);
  const box = (k,i,txt) => `<label class="chk"><input type="checkbox" data-k="${k}" data-i="${i}" ${(g[k]||[])[i]?'checked':''}><span>${esc(txt)}</span></label>`;
  const myAns = {0:d.a1, 1:(d.a2c?byId(d.a2c).name+' · ':'')+d.a2m, 2:(d.a3p?byId(d.a3p).name+' · ':'')+d.a3t, 3:d.a4};
  return `<div class="gintro"><b>채점 방법</b><br>항목마다 <b>내 답</b>이 위에 보입니다. 그 아래 정답 요소 중 <b>내 답에 들어 있는 것만</b> 체크하세요. 점수는 자동으로 계산됩니다. 정답 전문은 <a href="#/ending" style="color:var(--amber)">엔딩북</a>에서 확인할 수 있습니다.</div>
  ${R.map((r,k)=>`<div class="gstep">
    <div class="gh"><span class="gn">${k+1}</span><b>${esc(r.item.replace(/^\d+\.\s*/,''))}</b><span class="gpt" id="gpt${k}">${sc.s[k]}</span></div>
    <div class="myans"><label>내 답</label><div>${esc(myAns[k]||'(미작성)')}</div></div>
    ${k===1?`<div class="key">정답 범인 <b>${esc(r.culprit)}</b> · 내 답 <b>${d.a2c?esc(byId(d.a2c).name):'-'}</b> → ${sc.culpritOk?'<span style="color:var(--han)">일치</span>':'<span style="color:var(--red)">불일치 (이 항목 0점)</span>'}</div>`:''}
    <div class="qlabel">내 답에 이 내용이 있나요?</div>
    <div class="checks">${r.checks.map((c,i)=>box('c'+k,i,c)).join('')}</div>
    <div class="itemscore">점수 기준 · ${esc(r.rule)}</div>
  </div>`).join('')}
  <div style="text-align:center;margin:18px 0 6px"><button class="btn big" onclick="finishGrade()">결과 확인</button></div>`;
}
function gradeResult(ch, d){
  const sc = scoreOf(d);
  const lbl = {perfect:'PERFECT SOLVE',true:'TRUE END',fail:'미해결'}[sc.label];
  const sub = {perfect:'4개 항목 모두 정답입니다.',true:'1·2번을 맞히고 3개 이상 정답 — 사건을 해결했습니다.',fail:'1·2번 중 하나가 틀렸거나 정답이 3개 미만입니다. 엔딩북에서 남은 조각을 확인하세요.'}[sc.label];
  return `<div class="result big-result ${sc.label}">
      <div class="rstamp">${sc.label==='fail'?'CASE OPEN':'CASE CLOSED'}</div>
      <div class="who">${esc(ch.name)}</div>
      <div class="big ${sc.label}">${lbl}</div>
      <div class="sc">${sc.total} / 4</div>
      <p class="sub">${sub}</p>
      <div class="bars">${HOST_RUBRIC.map((r,k)=>`<div class="bar-row"><span>${k+1}. ${esc(r.item.replace(/^\d+\.\s*/,''))}</span><i class="v${String(sc.s[k]).replace('.','_')}"></i><b>${sc.s[k]}</b></div>`).join('')}</div>
    </div>
    <div class="panel">
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><button class="btn big" style="flex:1;background:var(--red)" onclick="shareSub()">📨 진행자에게 결과 보내기</button><button class="btn ghost sm" onclick="unGrade()">채점 수정</button></div>
      <p class="small" style="margin:10px 0 0">결과가 담긴 메시지를 카톡 등으로 진행자에게 보냅니다. 진행자는 받은 메시지를 진행자 화면에 붙여넣어 집계합니다.</p>
      <details style="margin-top:6px"><summary class="small" style="cursor:pointer">결과 코드 직접 보기</summary><div class="codebox" id="subcode">${encodeSub(ch,d,sc)}</div></details></div>
    <a class="rowbtn" href="#/ending"><div><b>📖 엔딩북 다시 보기</b></div><span class="chev">›</span></a>`;
}
document.addEventListener('change', e=>{
  const t=e.target; if(t.matches && t.matches('.chk input')){ const d=ded(); d.grade[t.dataset.k]=d.grade[t.dataset.k]||[]; d.grade[t.dataset.k][+t.dataset.i]=t.checked; store.set(K('ded'),d); const sc=scoreOf(d); sc.s.forEach((v,k)=>{ const el=$('#gpt'+k); if(el) el.textContent=v; }); }
});
function finishGrade(){ const d=ded(); d.graded=true; store.set(K('ded'),d); renderGrade(); }
function unGrade(){ const d=ded(); d.graded=false; store.set(K('ded'),d); renderGrade(); }
function b64e(s){ return btoa(unescape(encodeURIComponent(s))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,''); }
function encodeSub(ch,d,sc){ return 'MM36:'+b64e(JSON.stringify({id:ch.id, n:ch.name, a1:d.a1, a2c:d.a2c, a2m:d.a2m, a3p:d.a3p, a3t:d.a3t, a4:d.a4, s:sc.s, t:sc.total, l:sc.label, at:new Date().toISOString().slice(0,16)})); }
async function shareSub(){
  const code=$('#subcode').textContent; const ch=byId(me());
  const text = `[매탄동 최종 추리 제출] ${ch.name}\n${code}`;
  try{ if(navigator.share){ await navigator.share({text}); return; } }catch(e){}
  try{ await navigator.clipboard.writeText(text); alert('결과가 복사되었습니다. 진행자와의 채팅에 붙여넣어 보내세요.'); }catch(e){ prompt('아래 내용을 복사해 진행자에게 보내세요', text); }
}

/* ===== SHARED ===== */
function renderShared(sub){
  setMode('shared');
  const rounds = store.get('rounds', {}); const view = store.get('alibiView','list');
  $('#app').innerHTML = `
  ${topbar('진행자 공개 단서','#/')}
  ${modebar('shared', '모든 플레이어가 같은 내용을 봅니다')}
  <main class="wrap" style="padding-top:16px">
    <p class="hint" style="color:var(--dim)">진행자가 라운드마다 알려주는 4자리 코드를 입력하면 봉인이 풀립니다. ROUND 2·3·4 코드는 내 조사 토큰도 1개씩 추가합니다.</p>
    ${HOST_CARDS.map((c,i)=>envelope(c,i,rounds)).join('')}
    <p class="foot">${esc(META.version)}</p>
  </main>`;
}
function setAlibiView(v){ store.set('alibiView',v); document.querySelectorAll('.seg button').forEach(b=>b.classList.toggle('on', b.textContent===(v==='list'?'목록':'시간별 그래프'))); $('#alibiwrap').innerHTML = v==='graph'?alibiGraph():alibiList(); }
function alibiList(){ return `<div class="alibi-list">${CHARS.map(ch=>`<div class="item"><div class="who">${esc(ch.name)} <span>${esc(ch.group)}</span> ${fBadge(ch.faction)}</div><p>“${esc(ch.alibi)}”</p></div>`).join('')}</div>`; }
const GCOL = {exec:'#C8322B', seat:'#2F5A46', out:'#2D3B5E', room:'#C99A3A', room2:'#8a6a1f', hall:'#8a7f73', unk:'url(#hatch)'};
const GLBL = {exec:'임원실', seat:'자기 자리', out:'사옥 밖', room:'회의실', room2:'발표 중', unk:'시간·위치 불명(진술 기준)'};
function alibiGraph(){
  const t0 = 19*60, t1 = 23*60+10, W=720, L=78, R=10, rowH=36, top=26;
  const H = top + CHARS.length*rowH + 6;
  const x = tm => { const [h,m]=tm.split(':').map(Number); return L + (h*60+m - t0)/(t1-t0)*(W-L-R); };
  let s = `<div class="gscroll"><svg class="agraph" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="공개 알리바이 시간표">
  <defs><pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#efe7d3"/><line x1="0" y1="0" x2="0" y2="6" stroke="#a89f8c" stroke-width="2"/></pattern></defs>`;
  for(let h=19;h<=23;h++){ const X=x(`${h}:00`); s+=`<line class="grid" x1="${X}" y1="${top-6}" x2="${X}" y2="${H-2}"/><text x="${X}" y="12" text-anchor="middle">${h}:00</text>`; if(h<23){ const X2=x(`${h}:30`); s+=`<line class="grid" x1="${X2}" y1="${top-2}" x2="${X2}" y2="${H-2}" stroke-dasharray="2 3"/>`; } }
  CHARS.forEach((ch,i)=>{
    const y = top + i*rowH; const g = ALIBI_GRAPH[ch.id]||{bars:[],pts:[]};
    const fc = {h:'#2F5A46',m:'#2D3B5E',n:'#8a7f73'}[fCls(ch.faction)];
    s += `<rect x="0" y="${y}" width="4" height="${rowH-8}" fill="${fc}"/><text class="nm" x="10" y="${y+18}">${esc(ch.name)}</text>`;
    s += `<line class="grid" x1="${L}" y1="${y+rowH-6}" x2="${W-R}" y2="${y+rowH-6}"/>`;
    g.bars.forEach(b=>{ const x1=x(b.f), x2=x(b.t); const sub=b.type==='room2'; s+=`<rect x="${x1}" y="${y+(sub?12:5)}" width="${Math.max(3,x2-x1)}" height="${sub?10:20}" rx="2" fill="${GCOL[b.type]}" opacity="${sub?.9:.92}"><title>${esc(ch.name)} · ${b.f}~${b.t} · ${esc(b.l)}</title></rect>`; if(x2-x1>70 && !sub) s+=`<text x="${x1+5}" y="${y+19}" fill="${b.type==='unk'?'#5a534c':'#fff'}" font-size="10">${esc(b.l)}</text>`; });
    g.pts.forEach(p=>{ const X=x(p.at); s+=`<g><polygon points="${X},${y+2} ${X+6},${y+10} ${X},${y+18} ${X-6},${y+10}" fill="#C8322B" stroke="#fff" stroke-width="1.2"/><title>${esc(ch.name)} · ${p.at} · ${esc(p.l)}</title></g>`; });
  });
  s += `</svg></div>`;
  s += `<div class="legend">${Object.keys(GLBL).map(k=>`<span><i style="background:${k==='unk'?'repeating-linear-gradient(45deg,#efe7d3 0 2px,#a89f8c 2px 4px)':GCOL[k]}"></i>${GLBL[k]}</span>`).join('')}<span><i style="background:#C8322B;clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%)"></i>시점(전달·목격 등)</span></div>
  <p class="hint" style="margin-top:8px">공개 진술에 나온 시간만 그렸습니다. 좌우로 밀어 볼 수 있고, 막대를 길게 누르면 내용이 보입니다.</p>`;
  return s;
}
function envelope(c,i,rounds,justOpened){
  const open = !!rounds[c.key];
  return `<div class="env ${open?'open':''} ${c.key==='final'?'final':''}" id="env-${i}">
    ${justOpened?'<div class="unseal"><div>봉인 해제</div></div>':''}
    <div class="hh"><span>${esc(c.round)}</span><b>${esc(c.title)}</b></div>
    ${open? `<img src="${img(c.img)}" alt="" onclick="openZoom(this.src)"><div class="ht">${esc(c.text)}</div>`
          : `<div class="sealed"><div class="seal">SEALED</div><div class="row"><input type="tel" inputmode="numeric" maxlength="4" placeholder="····" aria-label="${esc(c.title)} 코드" onkeydown="if(event.key==='Enter')tryRound('${c.key}',${i},this)"><button class="btn" onclick="tryRound('${c.key}',${i},this.previousElementSibling)">개봉</button></div></div>`}
  </div>`;
}
function tryRound(key, i, inp){
  if(inp.value.trim()===META.roundCodes[key]){
    const r=store.get('rounds',{}); r[key]=true; store.set('rounds',r);
    HOST_CARDS.forEach((c,j)=>{ if(c.key===key){ const el=$('#env-'+j); if(el){ const w=document.createElement('div'); w.innerHTML=envelope(c,j,r,true); el.replaceWith(w.firstElementChild);} } });
    if(META.tokens[key]) setTimeout(()=>alert(`조사 토큰 +${META.tokens[key]} (내 화면 › 획득 단서에서 확인)`), 700);
  } else { inp.value=''; inp.placeholder='다름'; inp.focus(); }
}

/* ===== ENDING ===== */
function renderEnding(){
  setMode('ending');
  const rounds = store.get('rounds',{});
  if(!rounds.ending){
    $('#app').innerHTML = `${topbar('엔딩북','#/')}${modebar('ending','최종 추리 제출 후 진행자가 코드를 알려줍니다')}<main class="wrap"><div class="gate">
      <div class="seal" style="display:inline-block;transform:rotate(-8deg);color:var(--red);border:3px solid var(--red);border-radius:6px;padding:4px 14px;font-weight:900;letter-spacing:.2em;margin-bottom:10px">SEALED</div>
      <h2 style="margin:0 0 6px">엔딩 코드</h2><div class="gmsg" id="gmsg"></div>
      <div class="pinrow"><input id="pin" type="tel" inputmode="numeric" maxlength="4" placeholder="····" aria-label="엔딩 코드"></div>
      <button class="btn" onclick="tryEnding()">개봉</button></div></main>`;
    const inp=$('#pin'); inp.focus(); inp.addEventListener('input',()=>{ if(inp.value.length===4) tryEnding(); }); inp.addEventListener('keydown',e=>{ if(e.key==='Enter') tryEnding(); });
    return;
  }
  $('#app').innerHTML = `${topbar('엔딩북','#/')}${modebar('ending','네 가지 진실 · 2036.10.28 그날 밤')}<main class="wrap" style="padding-top:16px">
    ${endingBody()}
    ${me()?`<a class="rowbtn grade" href="#/grade"><div><b>✅ 채점하기</b><span>정답 항목을 체크해 점수를 확정합니다</span></div><span class="chev">›</span></a>`:''}
    <p class="foot">${esc(META.version)}</p></main>`;
}
function tryEnding(){ if($('#pin').value.trim()===META.roundCodes.ending){ const r=store.get('rounds',{}); r.ending=true; store.set('rounds',r); renderEnding(); } else { const m=$('#gmsg'); m.className='gmsg err'; m.textContent='코드가 맞지 않습니다'; $('#pin').value=''; } }
function endingBody(){
  return `<div class="ending">
    ${ENDING.truths.map(([k,v])=>`<div class="panel c-red"><h3>${esc(k)}</h3><p style="margin:0;font-size:15px">${esc(v)}</p></div>`).join('')}
    ${acc('그날 밤 실제로 일어난 일 · 타임라인', `<ul class="tl">${MASTER_TIMELINE.map(([t,d])=>`<li><div class="t">${esc(t)}</div><div class="d">${esc(d)}</div></li>`).join('')}</ul>`)}
    ${acc('숨은 진실', ENDING.deep.map(([k,v])=>`<div class="panel c-mou"><h3>${esc(k)}</h3><p style="margin:0;font-size:15px">${esc(v)}</p></div>`).join(''))}
    ${acc('각 인물의 밤', `<dl class="kv">${ENDING.aftermath.map(([k,v])=>`<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl>`)}
  </div>`;
}
