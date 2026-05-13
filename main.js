const types = {
  algorithm: {
    name: "알고리즘 헌터",
    color: "#18c7a6",
    summary: "조회수, 유지율, 반응 패턴이 먼저 보이는 콘텐츠 최적화형.",
    quote: "“일단 숫자 보고 판단해도 될까요?”",
    item: "chart",
    stats: {
      "실행력": 76, "협업력": 66, "실험성": 92, "디테일": 70,
      "데이터 감각": 98, "감성력": 58, "트렌드 감지력": 84, "전략력": 78
    },
    strengths: ["반응 데이터 해석이 빠름", "실험 설계에 강함", "성과 개선 포인트를 잘 찾음"],
    weaknesses: ["감성적 맥락을 놓칠 때가 있음", "숫자가 안 나오면 급격히 차가워짐"],
    hidden: ["CTR 집착도 96", "대시보드 체류시간 91", "썸네일 A/B 욕구 94"],
    good: "감성 큐레이터",
    bad: "직감형 런처"
  },
  curator: {
    name: "감성 큐레이터",
    color: "#8b74ff",
    summary: "톤앤매너, 무드, 브랜드 감각으로 콘텐츠의 결을 잡는 타입.",
    quote: "“좋은데, 지금 무드가 살짝 안 맞아요.”",
    item: "note",
    stats: {
      "실행력": 62, "협업력": 82, "실험성": 68, "디테일": 95,
      "데이터 감각": 58, "감성력": 99, "트렌드 감지력": 78, "전략력": 74
    },
    strengths: ["브랜드 톤을 잘 맞춤", "비주얼 완성도가 높음", "사용자 감정선을 잘 읽음"],
    weaknesses: ["속도전에서 답답할 수 있음", "작은 어긋남도 그냥 못 넘김"],
    hidden: ["폰트 민감도 98", "무드보드 저장량 93", "마지막 수정 확률 89"],
    good: "속도형 런처",
    bad: "막던지는 실험가"
  },
  launcher: {
    name: "속도형 런처",
    color: "#ff7a59",
    summary: "완벽보다 공개, 고민보다 실행. 반응을 보며 빠르게 굴리는 타입.",
    quote: "“일단 올리고 반응 보죠.”",
    item: "spark",
    stats: {
      "실행력": 98, "협업력": 70, "실험성": 86, "디테일": 52,
      "데이터 감각": 72, "감성력": 62, "트렌드 감지력": 90, "전략력": 65
    },
    strengths: ["실행 속도가 빠름", "트렌드 대응이 좋음", "일을 멈추게 두지 않음"],
    weaknesses: ["검수 디테일이 약할 수 있음", "완성도형 동료를 불안하게 함"],
    hidden: ["업로드 버튼 친밀도 97", "수정 후반영력 82", "일단시작력 99"],
    good: "디테일 가디언",
    bad: "감성 큐레이터"
  },
  strategist: {
    name: "전략 설계자",
    color: "#2d3a8c",
    summary: "콘텐츠 하나보다 판 전체, 흐름, 포지셔닝을 먼저 보는 타입.",
    quote: "“이게 다음 흐름이랑 어떻게 연결돼요?”",
    item: "chart",
    stats: {
      "실행력": 68, "협업력": 74, "실험성": 76, "디테일": 72,
      "데이터 감각": 86, "감성력": 70, "트렌드 감지력": 80, "전략력": 99
    },
    strengths: ["큰 그림을 잘 봄", "기획 의도를 선명하게 만듦", "우선순위 정리에 강함"],
    weaknesses: ["생각이 길어질 수 있음", "즉흥 실행형과 속도가 안 맞을 수 있음"],
    hidden: ["로드맵 집착도 94", "맥락 설명력 92", "회의 구조화력 88"],
    good: "속도형 런처",
    bad: "급발진 아이디어러"
  },
  detail: {
    name: "디테일 가디언",
    color: "#ffc857",
    summary: "오탈자, 썸네일, 자막, 배치까지 마지막 품질을 지키는 수호자.",
    quote: "“잠깐만요. 여기 한 픽셀만...”",
    item: "note",
    stats: {
      "실행력": 64, "협업력": 78, "실험성": 54, "디테일": 100,
      "데이터 감각": 68, "감성력": 84, "트렌드 감지력": 64, "전략력": 70
    },
    strengths: ["결과물 신뢰도가 높음", "검수 능력이 좋음", "완성도를 끌어올림"],
    weaknesses: ["작업 종료 타이밍을 놓침", "남들이 못 보는 걸 너무 잘 봄"],
    hidden: ["오탈자 탐지력 99", "최종본 의심률 96", "검수 루프 진입률 88"],
    good: "속도형 런처",
    bad: "직감형 런처"
  },
  trend: {
    name: "트렌드 레이더",
    color: "#ff6fae",
    summary: "지금 사람들이 무엇에 반응하는지 빠르게 감지하는 타입.",
    quote: "“이거 지금 타면 반응 올 것 같은데요?”",
    item: "spark",
    stats: {
      "실행력": 82, "협업력": 76, "실험성": 88, "디테일": 60,
      "데이터 감각": 70, "감성력": 82, "트렌드 감지력": 100, "전략력": 66
    },
    strengths: ["밈과 유행을 빠르게 캐치", "콘텐츠 타이밍 감각이 좋음", "아이디어가 신선함"],
    weaknesses: ["유행 수명이 짧을 수 있음", "브랜드 톤과 충돌할 수 있음"],
    hidden: ["스크롤 정보력 97", "밈 저장량 92", "타이밍 감각 95"],
    good: "전략 설계자",
    bad: "프로세스 관리자"
  },
  experimenter: {
    name: "실험 탐험가",
    color: "#7bdc65",
    summary: "새로운 포맷, 새로운 흐름, 새로운 시도를 계속 열어보는 타입.",
    quote: "“이 방식으로 한 번만 테스트해보면 안 돼요?”",
    item: "spark",
    stats: {
      "실행력": 80, "협업력": 64, "실험성": 100, "디테일": 54,
      "데이터 감각": 82, "감성력": 72, "트렌드 감지력": 86, "전략력": 76
    },
    strengths: ["새 포맷 발굴에 강함", "시도 자체를 두려워하지 않음", "정체된 흐름을 깨움"],
    weaknesses: ["벌려놓은 게 많아질 수 있음", "안정형 동료가 불안해함"],
    hidden: ["새 탭 개수 91", "테스트 욕구 99", "프로토타입 생산력 87"],
    good: "알고리즘 헌터",
    bad: "디테일 가디언"
  },
  coordinator: {
    name: "밸런스 코디네이터",
    color: "#2b6fff",
    summary: "사람, 일정, 콘텐츠 품질 사이에서 균형을 맞추는 운영형 에이스.",
    quote: "“좋아요. 그럼 역할만 정리해볼게요.”",
    item: "note",
    stats: {
      "실행력": 76, "협업력": 100, "실험성": 62, "디테일": 78,
      "데이터 감각": 72, "감성력": 76, "트렌드 감지력": 66, "전략력": 82
    },
    strengths: ["협업 구조를 잘 만듦", "갈등을 부드럽게 정리", "일이 흘러가게 함"],
    weaknesses: ["중간에서 지칠 수 있음", "본인 의견이 뒤로 밀릴 수 있음"],
    hidden: ["조율력 99", "회의 정리력 94", "참는 힘 90"],
    good: "급발진 아이디어러",
    bad: "혼자 다 하는 타입"
  }
};

const questions = [
  {
    q: "새 콘텐츠를 시작할 때 가장 먼저 보는 건?",
    options: [
      ["반응 나올 만한 키워드와 지표", "algorithm"],
      ["톤앤매너와 전체 무드", "curator"],
      ["일단 빠르게 만들 수 있는 실행안", "launcher"],
      ["이 콘텐츠가 전체 전략에서 맡는 역할", "strategist"]
    ]
  },
  {
    q: "결과물 공개 직전 제일 신경 쓰이는 건?",
    options: [
      ["썸네일, 자막, 오탈자, 배치", "detail"],
      ["지금 타이밍에 사람들이 반응할지", "trend"],
      ["이번엔 새 포맷을 써볼 수 있는지", "experimenter"],
      ["팀 안에서 누가 무엇을 맡는지", "coordinator"]
    ]
  },
  {
    q: "아이디어 회의에서 나는 보통?",
    options: [
      ["숫자로 가능성을 검증한다", "algorithm"],
      ["브랜드와 어울리는지 본다", "curator"],
      ["바로 만들 수 있는 버전으로 바꾼다", "launcher"],
      ["다음 콘텐츠 흐름까지 연결한다", "strategist"]
    ]
  },
  {
    q: "콘텐츠가 예상보다 반응이 약할 때 나는?",
    options: [
      ["원인을 데이터에서 찾는다", "algorithm"],
      ["표현 방식과 감정선을 다시 본다", "curator"],
      ["다음 버전으로 빠르게 바꾼다", "launcher"],
      ["포맷 자체를 새로 테스트한다", "experimenter"]
    ]
  },
  {
    q: "팀 프로젝트에서 내가 자주 맡게 되는 역할은?",
    options: [
      ["품질 최종 검수", "detail"],
      ["트렌드/레퍼런스 탐색", "trend"],
      ["일정과 역할 조율", "coordinator"],
      ["전체 방향 설계", "strategist"]
    ]
  },
  {
    q: "나와 가장 가까운 말은?",
    options: [
      ["숫자가 말해준다", "algorithm"],
      ["느낌이 맞아야 한다", "curator"],
      ["일단 공개하고 보자", "launcher"],
      ["한 번 다르게 해보자", "experimenter"]
    ]
  },
  {
    q: "내가 은근히 못 참는 상황은?",
    options: [
      ["근거 없이 감으로만 정하는 것", "algorithm"],
      ["톤이 들쭉날쭉한 것", "curator"],
      ["시작도 못 하고 계속 논의만 하는 것", "launcher"],
      ["정리 없이 각자 움직이는 것", "coordinator"]
    ]
  },
  {
    q: "내 업무 성향을 하나로 줄이면?",
    options: [
      ["성과 최적화", "algorithm"],
      ["무드 설계", "curator"],
      ["빠른 실행", "launcher"],
      ["완성도 수호", "detail"]
    ]
  }
];

let index = 0;
const scores = Object.fromEntries(Object.keys(types).map(k => [k, 0]));

const app = document.querySelector("#app");

function renderShell(content) {
  app.innerHTML = `
    <div class="app-shell">
      <div class="topbar">
        <div class="brand"><div class="logo"></div><span>OCG Character Test</span></div>
        <div class="pill">Samsung Online Contents Group</div>
      </div>
      ${content}
    </div>
  `;
}

function miniCharacter(typeKey) {
  const t = types[typeKey];
  return `
    <div class="character-card" style="--type:${t.color}">
      <div class="character">
        <div class="head"><div class="face"><div class="eye left"></div><div class="eye right"></div><div class="mouth"></div></div></div>
        <div class="body"></div>
        <div class="arm left"></div><div class="arm right"></div>
        <div class="leg left"></div><div class="leg right"></div>
        <div class="item ${t.item}"></div>
      </div>
    </div>
  `;
}

function renderHome() {
  renderShell(`
    <section class="panel hero screen active">
      <div class="hero-copy">
        <div class="eyebrow">✨ 콘텐츠 업무 성향 분석</div>
        <h1>나는 어떤<br/>콘텐츠 캐릭터일까?</h1>
        <p class="lead">
          온라인컨텐츠그룹 업무 스타일을 귀엽지만 꽤 정확하게 분석해요.
          실행력, 협업력, 실험성, 디테일, 데이터 감각까지 결과 카드로 확인해보세요.
        </p>
        <div class="cta-row">
          <button class="primary" onclick="startTest()">테스트 시작</button>
          <button class="secondary" onclick="showResult('curator')">결과 미리보기</button>
        </div>
      </div>
      <div class="preview-card">
        <div class="blob"></div>
        <div class="character-stage">${miniCharacter("curator")}</div>
        <div class="preview-info">
          <strong>감성 큐레이터</strong>
          <span>톤앤매너와 무드를 조용히 지배하는 콘텐츠 감각형.</span>
        </div>
      </div>
    </section>
  `);
}

function startTest() {
  index = 0;
  Object.keys(scores).forEach(k => scores[k] = 0);
  renderQuestion();
}

function renderQuestion() {
  const item = questions[index];
  const pct = ((index) / questions.length) * 100;

  renderShell(`
    <section class="test-wrap">
      <div class="progress"><div style="width:${pct}%"></div></div>
      <div class="panel question-card">
        <div class="question-meta">${index + 1} / ${questions.length}</div>
        <h2 class="question">${item.q}</h2>
        <div class="options">
          ${item.options.map(([text, type]) => `
            <button class="option" onclick="answer('${type}')">${text}</button>
          `).join("")}
        </div>
      </div>
    </section>
  `);
}

function answer(type) {
  scores[type] += 1;
  index += 1;
  if (index >= questions.length) {
    const winner = Object.entries(scores).sort((a,b) => b[1] - a[1])[0][0];
    showResult(winner);
  } else {
    renderQuestion();
  }
}

function showResult(typeKey) {
  const t = types[typeKey];
  renderShell(`
    <section class="panel result" style="--type:${t.color}">
      <div class="result-left">
        <div class="result-character">${miniCharacter(typeKey)}</div>
        <div class="chips">
          <span class="chip">#콘텐츠업무유형</span>
          <span class="chip">#${t.name.replaceAll(" ", "")}</span>
          <span class="chip">#결과공유각</span>
        </div>
      </div>

      <div class="result-right">
        <h1 class="result-title">${t.name}</h1>
        <p class="result-subtitle">${t.summary}</p>
        <div class="quote">${t.quote}</div>

        <div class="section">
          <h3>업무 능력치</h3>
          ${Object.entries(t.stats).map(([name, value]) => `
            <div class="stat">
              <div class="stat-head"><span>${name}</span><span>${value}</span></div>
              <div class="stat-bar"><div class="stat-fill" style="width:${value}%"></div></div>
            </div>
          `).join("")}
        </div>

        <div class="section grid2">
          <div class="info-box">
            <h3>강점</h3>
            <ul>${t.strengths.map(x => `<li>${x}</li>`).join("")}</ul>
          </div>
          <div class="info-box">
            <h3>약점</h3>
            <ul>${t.weaknesses.map(x => `<li>${x}</li>`).join("")}</ul>
          </div>
        </div>

        <div class="section">
          <h3>Hidden Stats</h3>
          <div class="chips">${t.hidden.map(x => `<span class="chip">${x}</span>`).join("")}</div>
        </div>

        <div class="section grid2">
          <div class="info-box"><h3>잘 맞는 타입</h3><strong>${t.good}</strong></div>
          <div class="info-box"><h3>안 맞는 타입</h3><strong>${t.bad}</strong></div>
        </div>

        <button class="restart" onclick="renderHome()">다시 하기</button>
      </div>
    </section>
  `);
}

window.startTest = startTest;
window.answer = answer;
window.showResult = showResult;
window.renderHome = renderHome;

renderHome();
