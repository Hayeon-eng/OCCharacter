const types = {
  organizer:{
    name:"정리 집착 플래너", advice:"정리 안 된 일을 모두 대신 떠안다 보면, 결국 정리할 사람도 당신밖에 안 남을 수 있어요.", icon:"🗂️", color:"#6d8cff", hair:"#202640", hairClass:"bob", prop:"note",
    preset:"일이 흩어져 있으면 마음도 같이 흩어지는 타입",
    summary:"혼돈을 표와 목록으로 길들이는 사람. 한마디로, ‘일단 정리하면 살 수 있다고 믿는 인간’.",catch:"파일명 안 맞으면 집중력도 같이 무너짐.",sayings:["“잠깐만요 제가 정리해볼게요.”","“이거 담당이 누구였죠?”","“문서 위치만 맞추면 금방 됩니다.”"],
    quote:"“좋아요. 그럼 항목부터 나눠볼게요.”",
    vibe:["회의하다가 자연스럽게 체크리스트를 만들고 있음","정리 안 된 문서를 보면 일보다 정리가 먼저 보임","누가 뭐 하는지 모르면 속으로 불안 게이지 올라감","파일명에 날짜 없으면 조용히 고통받음","결국 모두가 찾는 문서는 이 사람 폴더에 있음"],
    stats:{"실행력":78,"협업력":86,"정리력":100,"디테일":82,"아이디어":58,"운영 안정감":92,"가이드 감각":88,"멘탈 방어력":74},
    strengths:["업무 흐름을 보기 쉽게 정리함","빠진 항목과 애매한 책임을 잘 찾아냄","문서·일정·체크리스트를 안정적으로 관리함","팀이 다시 찾을 수 있는 형태로 남겨둠","혼돈을 줄여서 모두의 시간을 아껴줌"],
    weaknesses:["정리하다가 정작 실행 시간이 줄어들 수 있음","대충 넘어가는 상황에 스트레스를 받음","남의 파일명과 폴더 구조에 마음이 다칠 수 있음","정리 기준이 너무 높으면 주변이 숨 막힐 수 있음"],
    hidden:["체크박스 추가력 99","파일명 민감도 95","문서 위치 기억력 98","표 만들기 반사신경 94","정리하다 하루 감 87","애매함 불쾌지수 91"],
    good:{type:"속도 부스터",reason:"상대가 빠르게 굴린 일을 당신이 구조화해주면, 속도와 안정감이 동시에 살아남."},
    bad:{type:"급발진 실험가",reason:"상대가 계속 새 시도를 던지면 당신의 표와 기준이 매번 다시 흔들려 피로해짐."},
    share:"나는 정리 집착 플래너. 혼돈을 보면 표부터 켜는 사람."
  },
  curator:{
    name:"톤앤매너 수호자", advice:"완벽한 톤을 찾다가 타이밍을 놓치면, 아무도 그 결과를 보지 못할 수도 있어요.", icon:"🎨", color:"#a678ff", hair:"#3d315f", hairClass:"wave", prop:"palette",
    preset:"‘뭔가 우리 톤이 아닌데?’ 한마디로 모두를 멈추게 하는 타입",
    summary:"콘텐츠의 결을 지키는 무드 감별사. 한마디로, ‘예쁘게 맞을 때까지 마음이 안 놓이는 사람’.",catch:"좋은데… 뭔가 살짝 안 맞음.",sayings:["“톤만 조금 더 맞추면 돼요.”","“좋은데 지금 무드가…”","“폰트만 살짝…”"],
    quote:"“좋은데… 지금 톤이 살짝 다른 것 같아요.”",
    vibe:["문구 하나에도 브랜드 결이 있는지 봄","색감이나 말투가 어긋나면 설명 못 해도 불편함","레퍼런스 저장하다가 원래 하던 일을 잊을 때 있음","‘조금만 더 다듬자’가 생각보다 조금이 아님","결과물이 예쁘게 맞으면 갑자기 세상 관대해짐"],
    stats:{"실행력":64,"협업력":84,"정리력":76,"디테일":96,"아이디어":78,"운영 안정감":70,"가이드 감각":100,"멘탈 방어력":68},
    strengths:["브랜드 톤과 표현의 결을 잘 맞춤","사용자가 보는 첫인상과 완성도를 높임","문구·비주얼·흐름의 어색함을 빨리 감지함","콘텐츠를 ‘그럴듯하게’ 보이게 만드는 힘이 있음","최종 결과물의 캡처 욕구를 올림"],
    weaknesses:["작은 어긋남도 그냥 못 넘겨 시간이 늘어남","속도전에서 스트레스를 받기 쉬움","‘느낌이 이상함’을 설명하느라 본인도 지침","다 괜찮다는데 혼자만 안 괜찮은 순간이 있음"],
    hidden:["톤 어긋남 감지력 99","레퍼런스 줍줍력 95","최종수정 한 번 더 91","표현 민감도 96","색감 불편함 참기 23","문구 갈아엎기 욕구 88"],
    good:{type:"속도 부스터",reason:"상대가 빠르게 초안을 만들고, 당신이 톤과 완성도를 입히면 빨리 나왔는데도 덜 허술해 보임."},
    bad:{type:"일단 해보자 실험가",reason:"상대는 새로움을 먼저 보고, 당신은 브랜드 결을 먼저 봐서 ‘이거 괜찮아?’의 기준이 다름."},
    share:"나는 톤앤매너 수호자. 좋은데 뭔가 아닌 걸 그냥 못 넘김."
  },
  speed:{
    name:"속도 부스터", advice:"빠른 실행은 강점이지만, 반복되는 급한 수정은 결국 미래의 당신이 감당하게 돼요.", icon:"⚡", color:"#ff8b70", hair:"#473129", hairClass:"short", prop:"bolt",
    preset:"완벽한 문서보다 일단 굴러가는 초안을 믿는 타입",
    summary:"멈춘 일을 앞으로 밀어내는 추진 엔진. 한마디로, ‘초안이라도 있어야 싸울 수 있다고 믿는 사람’.",catch:"일단 버전 하나 만들고 생각함.",sayings:["“일단 올려보죠.”","“초안부터 볼까요?”","“빠르게 가죠!”"],
    quote:"“일단 버전 하나 만들어두고 보죠.”",
    vibe:["고민이 길어지면 손이 먼저 움직임","초안 만들기까지 시간이 짧음","수정은 싫지 않은데 정지는 싫음","완벽주의자 옆에 있으면 상대가 불안해질 수 있음","일단 굴러가게 만든 뒤 고치는 쪽이 편함"],
    stats:{"실행력":100,"협업력":72,"정리력":60,"디테일":58,"아이디어":82,"운영 안정감":66,"가이드 감각":54,"멘탈 방어력":84},
    strengths:["멈춰 있는 일을 빠르게 움직이게 함","초안·샘플·테스트 버전을 빨리 만듦","논의를 실제 결과물로 전환하는 데 강함","변경 요청이 와도 빠르게 반영함","팀에 추진력을 공급함"],
    weaknesses:["검수 디테일이 약할 수 있음","정리형 동료를 불안하게 만들 수 있음","‘일단’이 많아져 후속 정리가 필요함","완성도보다 속도가 먼저 튀어나올 때가 있음"],
    hidden:["초안 생산력 98","일단 시작력 100","수정 반영 속도 90","검수창 닫기 속도 82","미래의 나 믿음 93","빠르게 가죠 빈도 95"],
    good:{type:"디테일 검수관",reason:"당신이 빠르게 판을 열고 상대가 마지막 품질을 잡아줘서, 결과물이 빨리 나오면서도 덜 위험해짐."},
    bad:{type:"톤앤매너 수호자",reason:"당신은 움직임이 먼저고 상대는 결이 먼저라서 공개/공유 타이밍에서 자주 부딪힘."},
    share:"나는 속도 부스터. 일단 초안 만들고 나서 생각하는 편."
  },
  strategist:{
    name:"큰그림 설계자", advice:"방향을 오래 고민하는 동안, 이미 누군가는 움직이고 있을 수도 있어요.", catch:"하나 물어봤는데 세계관까지 설명함.", sayings:["“이것도 같이 보면…”","“한 번만 테스트해보면…”","“좋아요 정리해볼게요.”"], icon:"🧭", color:"#3b5bdb", hair:"#202640", hairClass:"wave", prop:"map",
    preset:"작은 요청 하나에도 전체 맥락부터 찾는 타입",
    summary:"업무의 방향과 이유를 잡는 판 설계자. 한마디로, ‘하나 물어봤는데 배경부터 정리해주는 사람’.",
    quote:"“이게 전체 흐름에서 어떤 역할이에요?”",
    vibe:["왜 하는지 모르면 손이 잘 안 움직임","작은 일도 큰 흐름 안에 넣어야 마음이 편함","회의 중 갑자기 3단계 구조로 나눔","단발성 요청을 보면 연결고리를 찾음","말이 길어질 때가 있는데 듣다 보면 맞음"],
    stats:{"실행력":70,"협업력":78,"정리력":88,"디테일":74,"아이디어":80,"운영 안정감":82,"가이드 감각":86,"멘탈 방어력":72},
    strengths:["업무 목적과 우선순위를 선명하게 만듦","흩어진 요청을 하나의 흐름으로 정리함","팀이 왜 이걸 해야 하는지 설명해줌","장기적으로 유지될 수 있는 구조를 고민함","급한 일 속에서도 방향을 잃지 않게 함"],
    weaknesses:["생각이 길어져 실행이 늦어질 수 있음","즉흥형 동료에게 답답하게 보일 수 있음","작은 요청에도 큰 맥락을 붙이다가 일이 커질 수 있음","한 번 설명하기 시작하면 화살표가 많아짐"],
    hidden:["맥락 설명력 98","큰그림 확대율 99","왜 하는지 질문력 95","회의 구조화력 92","3단계로 나눔 94","로드맵 상상력 90"],
    good:{type:"속도 부스터",reason:"당신이 방향을 잡고 상대가 빠르게 결과물로 밀어줘서 생각이 실행으로 이어짐."},
    bad:{type:"즉흥 아이디어러",reason:"상대가 계속 방향을 틀면 당신이 잡아둔 구조와 우선순위가 흔들려 피로해짐."},
    share:"나는 큰그림 설계자. 간단한 일에도 왜 하는지부터 묻는 사람."
  },
  detail:{
    name:"디테일 검수관", advice:"모든 오류를 막을 수는 없어요. 때로는 ‘충분히 괜찮음’도 필요합니다.", catch:"최종본이라는 말을 아직 믿지 못함.", sayings:["“이것도 같이 보면…”","“한 번만 테스트해보면…”","“좋아요 정리해볼게요.”"], icon:"🔍", color:"#ffd166", hair:"#3a3326", hairClass:"bob", prop:"lens",
    preset:"오탈자, 링크, 문구, 순서 하나 때문에 잠깐 멈추는 타입",
    summary:"최종본의 마지막 방어선. 한마디로, ‘내 눈에 보인 순간 모두의 일이 되는 사람’.",
    quote:"“잠깐만요. 여기 링크랑 문구 한 번만 더 볼게요.”",
    vibe:["최종본이라는 말을 잘 믿지 않음","링크 하나 잘못되면 하루 종일 생각남","문장 어색하면 소리 내서 읽어봄","남들은 못 본 걸 봐서 혼자 괴로움","작은 오류 잡고 조용히 뿌듯해함"],
    stats:{"실행력":66,"협업력":80,"정리력":84,"디테일":100,"아이디어":54,"운영 안정감":92,"가이드 감각":88,"멘탈 방어력":70},
    strengths:["오탈자·링크·표현·순서 오류를 잘 잡음","최종 결과물의 신뢰도를 높임","나중에 터질 문제를 미리 막아줌","가이드와 기준을 꼼꼼히 지킴","팀의 품질 하한선을 끌어올림"],
    weaknesses:["종료 타이밍을 놓칠 수 있음","빠른 공유 문화와 충돌할 수 있음","작은 오류가 크게 보이는 저주가 있음","‘이 정도면 됐다’는 말을 잘 못 믿음"],
    hidden:["오탈자 탐지력 100","링크 클릭 확인력 97","최종본 의심률 96","한 문장 더 다듬기 92","가이드 준수력 95","작은 오류 확대율 99"],
    good:{type:"속도 부스터",reason:"상대가 초안을 빠르게 만들고 당신이 마지막 오류와 품질을 잡아줘서 효율이 좋음."},
    bad:{type:"일단 해보자 실험가",reason:"상대는 시도를 늘리고 싶고 당신은 안정적인 품질을 지키고 싶어 해서 기준 차이가 큼."},
    share:"나는 디테일 검수관. 남들은 못 본 오류 때문에 내가 먼저 지침."
  },
  idea:{
    name:"즉흥 아이디어러", advice:"좋은 아이디어가 많아질수록, 끝까지 책임질 아이디어는 줄어들 수 있어요.", catch:"좋은 생각이 꼭 지금 떠오름.", sayings:["“이것도 같이 보면…”","“한 번만 테스트해보면…”","“좋아요 정리해볼게요.”"], icon:"💡", color:"#ff6fae", hair:"#4a2638", hairClass:"wave", prop:"spark",
    preset:"회의 중 갑자기 ‘이것도 되지 않아요?’를 던지는 타입",
    summary:"정체된 판에 새 가능성을 던지는 사람. 한마디로, ‘재밌는데 가끔 모두의 일을 늘리는 사람’.",
    quote:"“근데 이 방향으로 살짝 비틀면 더 재밌지 않아요?”",
    vibe:["레퍼런스 하나 보고 갑자기 새 방향이 떠오름","분위기가 죽으면 아이디어를 던짐","좋은 생각인데 타이밍이 위험할 때가 있음","본인은 작게 말했는데 일이 커짐","뻔한 흐름을 그냥 두기 힘들어함"],
    stats:{"실행력":78,"협업력":72,"정리력":54,"디테일":58,"아이디어":100,"운영 안정감":54,"가이드 감각":66,"멘탈 방어력":82},
    strengths:["새로운 접근과 표현을 잘 떠올림","정체된 업무에 활력을 줌","기존 방식에 갇히지 않음","사람들이 놓친 가능성을 발견함","딱딱한 안을 더 흥미롭게 바꿈"],
    weaknesses:["좋은 생각이 꼭 지금 필요한 건 아닐 수 있음","아이디어가 많아 후속 정리가 필요함","가끔 범위가 커져 팀원이 조용히 긴장함","마무리보다 시작이 더 신날 수 있음"],
    hidden:["판 키우기 96","레퍼런스 투척력 94","이것도되나요 빈도 97","갑자기 신남 95","후속정리 미룸 74","동료 심박수 상승 88"],
    good:{type:"밸런스 조율러",reason:"당신이 벌린 가능성을 상대가 역할과 순서로 정리해줘서 아이디어가 실제 실행으로 이어짐."},
    bad:{type:"큰그림 설계자",reason:"상대는 전체 방향과 우선순위를 지키고 싶고, 당신은 순간의 가능성을 열고 싶어 해서 속도가 엇갈림."},
    share:"나는 즉흥 아이디어러. 재밌는 생각을 던졌을 뿐인데 일이 커짐."
  },
  experimenter:{
    name:"일단 해보자 실험가", advice:"새로운 시도도 중요하지만, 마무리되지 않은 실험은 팀을 지치게 만들 수 있어요.", catch:"작게 해보자고 했는데 안 작음.", sayings:["“이것도 같이 보면…”","“한 번만 테스트해보면…”","“좋아요 정리해볼게요.”"], icon:"🧪", color:"#7bdc65", hair:"#243b2a", hairClass:"short", prop:"spark",
    preset:"새 방식이 보이면 작게라도 눌러보고 싶은 타입",
    summary:"새로운 방식과 개선 포인트를 계속 열어보는 사람. 한마디로, ‘한 번만 해보자고 하고 세 번 해보는 사람’.",
    quote:"“작게 한 번만 테스트해보면 안 돼요?”",
    vibe:["반복되는 방식에 금방 답답함을 느낌","새 기능이나 새 포맷 보면 손이 근질거림","실패해도 ‘배웠다’고 생각함","작게 해보자고 했지만 작을지는 모름","후속 정리보다 다음 실험이 먼저 보일 때 있음"],
    stats:{"실행력":82,"협업력":66,"정리력":58,"디테일":56,"아이디어":92,"운영 안정감":60,"가이드 감각":68,"멘탈 방어력":86},
    strengths:["새로운 방식과 개선안을 빠르게 시도함","반복 업무의 비효율을 잘 발견함","작은 테스트로 가능성을 확인함","실패를 다음 개선으로 연결함","팀에 변화의 계기를 만들어줌"],
    weaknesses:["벌려놓은 실험이 많아질 수 있음","안정형 동료가 불안해할 수 있음","마무리보다 시작이 더 신날 때가 있음","후속 정리가 따라오지 않으면 혼돈이 남음"],
    hidden:["테스트 욕구 100","새 탭 개수 94","프로토타입 생산력 90","일단실험 확률 96","후속정리 미룸 78","개선포인트 줍줍력 92"],
    good:{type:"정리 집착 플래너",reason:"당신이 실험을 열고 상대가 결과와 다음 액션을 정리해줘서 시도가 흐지부지되지 않음."},
    bad:{type:"디테일 검수관",reason:"당신은 빠르게 시도하고 싶고 상대는 안정적인 품질을 먼저 보고 싶어 해서 템포가 다름."},
    share:"나는 일단 해보자 실험가. 한 번만 테스트하자고 하고 다음 실험 생각 중."
  },
  coordinator:{
    name:"밸런스 조율러", advice:"모두를 챙기다 보면 정작 당신의 에너지는 아무도 챙기지 못할 수 있어요.", catch:"모두를 챙기다 내 일정만 불탐.", sayings:["“이것도 같이 보면…”","“한 번만 테스트해보면…”","“좋아요 정리해볼게요.”"], icon:"🤝", color:"#2b6fff", hair:"#1d2d50", hairClass:"wave", prop:"balance",
    preset:"사람, 일정, 요청 사이에서 혼자 줄타기하는 타입",
    summary:"업무가 굴러가게 만드는 완충재. 한마디로, ‘모두를 챙기다가 내 일정만 조용히 불타는 사람’.",
    quote:"“좋아요. 그럼 역할이랑 일정만 한번 정리할게요.”",
    vibe:["회의 끝나면 자연스럽게 정리본을 만들고 있음","다들 괜찮다는데 본인만 위험 신호를 봄","사람 사이 공백을 메우다가 에너지가 빠짐","일정표가 정리되면 마음이 안정됨","팀이 굴러가면 본인은 뒤에서 조용히 사라짐"],
    stats:{"실행력":76,"협업력":100,"정리력":88,"디테일":80,"아이디어":64,"운영 안정감":100,"가이드 감각":82,"멘탈 방어력":76},
    strengths:["역할과 일정의 빈틈을 잘 메움","갈등과 애매함을 부드럽게 정리함","요청이 꼬이지 않게 흐름을 잡음","사람과 결과물의 균형을 같이 봄","혼돈을 실행 가능한 순서로 바꿈"],
    weaknesses:["중간에서 쉽게 지칠 수 있음","본인 의견이 뒤로 밀릴 수 있음","모두의 사정을 챙기다 본인 일정이 위험해짐","좋게좋게 하다가 본인이 안 좋아짐"],
    hidden:["조율력 100","회의 정리력 95","참는 힘 91","일정 퍼즐력 94","좋게좋게 처리율 88","속으로 한숨 90"],
    good:{type:"즉흥 아이디어러",reason:"상대가 아이디어를 많이 벌려도 당신이 역할과 순서를 잡아줘서 혼돈이 실행 가능한 계획으로 바뀜."},
    bad:{type:"속도 부스터",reason:"상대가 너무 빠르게 밀면 당신이 조율할 틈이 없어져 일정과 사람 사이에서 과부하가 올 수 있음."},
    share:"나는 밸런스 조율러. 모두를 챙기다가 내 일정만 조용히 불타는 타입."
  }
};

const questions = [
  {q:"갑자기 단톡에 업무가 떨어졌다.",options:[
    ["🗂️","항목부터 나누고 체크리스트를 만든다","정리 안 되면 시작이 안 됨","organizer"],
    ["🎨","표현 톤과 가이드에 맞는지 본다","결이 안 맞으면 마음이 불편함","curator"],
    ["⚡","일단 초안이나 샘플부터 만든다","손에 잡히는 게 있어야 움직임","speed"],
    ["🧭","이 일이 전체 흐름에서 왜 필요한지 본다","맥락 없으면 몸이 안 움직임","strategist"]
  ]},
  {q:"업로드 버튼 누르기 직전…",options:[
    ["🔍","오탈자, 링크, 문구, 순서","내 눈에 보이면 모두의 일이 됨","detail"],
    ["💡","더 재밌게 바꿀 수 있는 한 끗","갑자기 좋은 생각이 남","idea"],
    ["🧪","이번에 새 방식으로 작게 해볼 수 있는지","반복만 하면 심심함","experimenter"],
    ["🤝","누가 무엇을 맡고 어디까지 됐는지","흐름이 정리돼야 안심됨","coordinator"]
  ]},
  {q:"회의에서 나는 보통?",options:[
    ["📝","논의 내용을 구조화해서 정리한다","말이 많아질수록 표가 필요함","organizer"],
    ["🪄","표현이나 톤이 어색한 지점을 짚는다","좋아도 우리 톤 아니면 멈춤","curator"],
    ["🚀","바로 실행 가능한 안으로 좁힌다","얘기만 하면 아무것도 안 남음","speed"],
    ["🗺️","방향과 우선순위를 다시 확인한다","이게 왜 1순위인지 궁금함","strategist"]
  ]},
  {q:"업무가 꼬였을 때 나는?",options:[
    ["📋","현재 상태를 다시 정리한다","어디서 꼬였는지 펼쳐봐야 함","organizer"],
    ["🔎","빠진 부분과 오류를 찾는다","작은 구멍이 큰 사고가 됨","detail"],
    ["🤝","사람별 역할과 다음 액션을 맞춘다","일보다 애매함이 더 위험함","coordinator"],
    ["🧪","다른 방식으로 우회할 수 있는지 본다","길이 막히면 새 길을 봄","experimenter"]
  ]},
  {q:"내가 은근히 못 참는 상황은?",options:[
    ["🫠","기준 없이 대충 넘어가는 것","나중에 다시 돌아올 게 보임","detail"],
    ["🎭","말투나 톤이 들쭉날쭉한 것","한 화면에 여러 성격 있으면 힘듦","curator"],
    ["🐢","계속 논의만 하고 시작을 안 하는 것","회의가 업무보다 길면 현기증 남","speed"],
    ["🧩","역할이 불명확한 것","누가 하는데요 모드 ON","coordinator"]
  ]},
  {q:"내가 자주 하는 말에 가까운 건?",options:[
    ["📌","그럼 이걸 세 개로 나누면요","나누면 살 수 있음","organizer"],
    ["✨","좋은데 톤만 조금 더 맞추면요","조금이 조금 아닐 수 있음","curator"],
    ["⚡","일단 버전 하나 만들어볼게요","초안이라도 있어야 싸움 가능","speed"],
    ["🧭","이거 목적이 정확히 뭐예요?","왜 하는지 알아야 함","strategist"]
  ]},
  {q:"새로운 아이디어가 떠올랐을 때 나는?",options:[
    ["💡","회의 중 바로 던져본다","좋은 생각은 식기 전에 말해야 함","idea"],
    ["🧪","작게 테스트할 방법을 찾는다","작게 한다고 했지만 작을지는 모름","experimenter"],
    ["🧭","전체 방향과 맞는지 먼저 본다","재밌어도 방향이 틀리면 보류","strategist"],
    ["🤝","팀이 감당 가능한 범위인지 본다","좋아도 누가 할 건데요","coordinator"]
  ]},
  {q:"작업물이 ‘괜찮다’고 느껴지는 기준은?",options:[
    ["🗂️","구조가 깔끔하고 다시 찾기 쉬울 때","나중의 내가 고마워해야 함","organizer"],
    ["🌈","톤과 표현이 자연스럽게 맞을 때","보자마자 어색하면 안 됨","curator"],
    ["🏃","빠르게 공유하고 다음 액션이 보일 때","멈춰 있는 완성도보다 움직이는 초안","speed"],
    ["🔎","작은 오류까지 정리됐을 때","나중에 발견하면 하루 종일 생각남","detail"]
  ]},
  {q:"동료들이 나에게 기대하는 건?",options:[
    ["📚","자료와 기준을 정리해주는 것","어디 있냐고 물으면 내가 앎","organizer"],
    ["🎨","표현을 더 자연스럽게 다듬는 것","어색함 감별 담당","curator"],
    ["💡","새로운 방향을 던지는 것","판이 심심하면 나를 봄","idea"],
    ["🤝","사람과 일정 사이를 맞추는 것","중간에서 다리 놓는 담당","coordinator"]
  ]},
  {q:"퇴근 전 가장 마음에 걸리는 건?",options:[
    ["✅","체크 안 된 항목","빈 체크박스가 나를 부름","organizer"],
    ["🔗","확인 안 한 링크나 문구","내일 터질까 봐 무서움","detail"],
    ["🧪","해보고 싶은 개선안","생각나면 저장해둬야 함","experimenter"],
    ["🧭","이 일이 다음 흐름과 연결되는지","오늘 한 일이 내일도 의미 있어야 함","strategist"]
  ]}
];

let step = 0;
const scores = Object.fromEntries(Object.keys(types).map(k=>[k,0]));
const app = document.querySelector("#app");

function shell(content){
  app.innerHTML = `
    <div class="shell">
      <div class="topbar">
        <div class="brand"><div class="logo"></div><span>Online Content Group</span></div>
        <div class="badge">Work Character Test</div>
      </div>
      ${content}
    </div>`;
}

function character(key){
  const t = types[key];
  const svg = {
    organizer: `
      <svg viewBox="0 0 360 420" class="sticker-svg" aria-hidden="true">
        <ellipse cx="180" cy="378" rx="94" ry="18" fill="rgba(0,0,0,.10)"/>
        <rect x="78" y="72" width="204" height="260" rx="60" fill="#fff" stroke="rgba(0,0,0,.08)" stroke-width="3"/>
        <path d="M118 115c10-42 114-62 142 0 17 38-4 88-4 88H104s-7-53 14-88z" fill="#26324a"/>
        <circle cx="180" cy="164" r="58" fill="#FFD9C2"/>
        <path d="M122 152c22-34 76-44 116-16 0-38-31-66-67-66-36 0-63 26-70 63-3 14 5 19 21 19z" fill="#26324a"/>
        <circle cx="158" cy="166" r="7" fill="#171717"/>
        <circle cx="202" cy="166" r="7" fill="#171717"/>
        <path d="M167 192c11 9 25 9 36 0" fill="none" stroke="#171717" stroke-width="6" stroke-linecap="round"/>
        <circle cx="140" cy="184" r="10" fill="#ff9eb5" opacity=".45"/>
        <circle cx="220" cy="184" r="10" fill="#ff9eb5" opacity=".45"/>
        <path d="M114 246c8-48 124-48 132 0l11 83H103l11-83z" fill="#6D8CFF"/>
        <rect x="106" y="236" width="148" height="114" rx="24" fill="#fff" stroke="#6D8CFF" stroke-width="8"/>
        <path d="M135 270h72M135 298h82M135 326h55" stroke="#6D8CFF" stroke-width="9" stroke-linecap="round"/>
        <path d="M108 267l-45-22M253 266l44-24" stroke="#FFD9C2" stroke-width="18" stroke-linecap="round"/>
        <circle cx="67" cy="244" r="16" fill="#FFD9C2"/>
        <circle cx="292" cy="240" r="16" fill="#FFD9C2"/>
        <path d="M128 334v44M232 334v44" stroke="#343a46" stroke-width="28" stroke-linecap="round"/>
        <path d="M104 382h52M204 382h52" stroke="#171717" stroke-width="16" stroke-linecap="round"/>
        <rect x="239" y="62" width="72" height="54" rx="18" fill="#fff" stroke="rgba(0,0,0,.08)" stroke-width="3"/>
        <path d="M256 82h36M256 98h24" stroke="#6D8CFF" stroke-width="7" stroke-linecap="round"/>
        <text x="74" y="58" font-size="28" font-weight="900" fill="#6D8CFF">✓</text>
      </svg>`,
    curator: `
      <svg viewBox="0 0 360 420" class="sticker-svg" aria-hidden="true">
        <ellipse cx="180" cy="378" rx="94" ry="18" fill="rgba(0,0,0,.10)"/>
        <rect x="74" y="70" width="212" height="264" rx="68" fill="#fff" stroke="rgba(0,0,0,.08)" stroke-width="3"/>
        <path d="M100 157c-2-72 38-105 86-105s85 38 80 108c-4 56-28 74-28 74H122s-20-22-22-77z" fill="#4A3671"/>
        <circle cx="180" cy="166" r="60" fill="#FFD8BF"/>
        <path d="M119 146c24-42 82-56 127-25-6-47-39-69-75-65-37 4-63 37-65 79-.5 15 2 18 13 11z" fill="#4A3671"/>
        <circle cx="158" cy="168" r="7" fill="#171717"/>
        <circle cx="204" cy="168" r="7" fill="#171717"/>
        <path d="M170 194c12 7 23 7 34 0" fill="none" stroke="#171717" stroke-width="6" stroke-linecap="round"/>
        <circle cx="139" cy="186" r="10" fill="#ff9eb5" opacity=".48"/>
        <circle cx="224" cy="186" r="10" fill="#ff9eb5" opacity=".48"/>
        <path d="M110 252c10-54 132-54 142 0l12 80H98l12-80z" fill="#A678FF"/>
        <path d="M108 272l-47-16M252 273l50-17" stroke="#FFD8BF" stroke-width="18" stroke-linecap="round"/>
        <circle cx="58" cy="253" r="17" fill="#FFD8BF"/>
        <circle cx="303" cy="252" r="17" fill="#FFD8BF"/>
        <rect x="66" y="219" width="86" height="70" rx="24" fill="#fff" stroke="rgba(0,0,0,.08)" stroke-width="3"/>
        <circle cx="91" cy="246" r="10" fill="#FF8B70"/>
        <circle cx="117" cy="246" r="10" fill="#A678FF"/>
        <circle cx="104" cy="274" r="10" fill="#3FD2AE"/>
        <path d="M129 334v44M231 334v44" stroke="#343a46" stroke-width="28" stroke-linecap="round"/>
        <path d="M105 382h52M204 382h52" stroke="#171717" stroke-width="16" stroke-linecap="round"/>
        <text x="266" y="74" font-size="32" font-weight="900" fill="#A678FF">✦</text>
      </svg>`,
    speed: `
      <svg viewBox="0 0 360 420" class="sticker-svg" aria-hidden="true">
        <ellipse cx="180" cy="378" rx="100" ry="18" fill="rgba(0,0,0,.10)"/>
        <rect x="72" y="74" width="216" height="258" rx="64" fill="#fff" stroke="rgba(0,0,0,.08)" stroke-width="3"/>
        <path d="M126 94c20-33 86-47 120-3 24 31 12 80 12 80l-145-4s-11-42 13-73z" fill="#553328"/>
        <circle cx="182" cy="163" r="58" fill="#FFD8BF"/>
        <path d="M124 139c31-29 78-36 119-13-5-35-30-58-64-58-35 0-62 26-66 61-1 10 4 15 11 10z" fill="#553328"/>
        <circle cx="160" cy="165" r="7" fill="#171717"/>
        <circle cx="207" cy="165" r="7" fill="#171717"/>
        <path d="M169 192c16 13 33 10 45-2" fill="none" stroke="#171717" stroke-width="6" stroke-linecap="round"/>
        <path d="M104 250c10-49 138-49 151 0l14 82H93l11-82z" fill="#FF8B70"/>
        <path d="M119 264l-54 35M254 260l54 30" stroke="#FFD8BF" stroke-width="18" stroke-linecap="round"/>
        <circle cx="63" cy="299" r="17" fill="#FFD8BF"/>
        <circle cx="309" cy="290" r="17" fill="#FFD8BF"/>
        <path d="M135 334v44M229 334v44" stroke="#343a46" stroke-width="28" stroke-linecap="round"/>
        <path d="M95 383h64M204 383h68" stroke="#171717" stroke-width="17" stroke-linecap="round"/>
        <rect x="238" y="64" width="76" height="56" rx="20" fill="#fff" stroke="rgba(0,0,0,.08)" stroke-width="3"/>
        <text x="257" y="103" font-size="35" font-weight="900" fill="#FF8B70">⚡</text>
        <path d="M54 124h48M43 150h38M61 176h32" stroke="#FF8B70" stroke-width="8" stroke-linecap="round" opacity=".85"/>
      </svg>`,
    strategist: `
      <svg viewBox="0 0 360 420" class="sticker-svg" aria-hidden="true">
        <ellipse cx="180" cy="378" rx="94" ry="18" fill="rgba(0,0,0,.10)"/>
        <rect x="75" y="72" width="210" height="260" rx="64" fill="#fff" stroke="rgba(0,0,0,.08)" stroke-width="3"/>
        <path d="M113 140c-4-54 31-82 69-82s70 30 68 84c-1 35-18 64-18 64H128s-12-31-15-66z" fill="#202640"/>
        <circle cx="181" cy="164" r="58" fill="#FFD8BF"/>
        <path d="M123 142c24-34 72-46 113-19-2-36-25-57-59-57-31 0-58 24-64 58-2 15 2 23 10 18z" fill="#202640"/>
        <circle cx="159" cy="166" r="7" fill="#171717"/>
        <circle cx="205" cy="166" r="7" fill="#171717"/>
        <path d="M169 194h26" stroke="#171717" stroke-width="6" stroke-linecap="round"/>
        <path d="M110 250c10-50 132-50 142 0l12 82H98l12-82z" fill="#3B5BDB"/>
        <path d="M112 267l-44-27M250 267l43-29" stroke="#FFD8BF" stroke-width="18" stroke-linecap="round"/>
        <circle cx="67" cy="238" r="16" fill="#FFD8BF"/>
        <circle cx="294" cy="237" r="16" fill="#FFD8BF"/>
        <rect x="238" y="74" width="78" height="68" rx="20" fill="#fff" stroke="rgba(0,0,0,.08)" stroke-width="3"/>
        <path d="M255 94h42M255 112h24M282 112l16 15" stroke="#3B5BDB" stroke-width="7" stroke-linecap="round"/>
        <path d="M130 334v44M230 334v44" stroke="#343a46" stroke-width="28" stroke-linecap="round"/>
        <path d="M105 382h52M204 382h52" stroke="#171717" stroke-width="16" stroke-linecap="round"/>
        <text x="64" y="76" font-size="31" font-weight="900" fill="#3B5BDB">?</text>
      </svg>`,
    detail: `
      <svg viewBox="0 0 360 420" class="sticker-svg" aria-hidden="true">
        <ellipse cx="180" cy="378" rx="94" ry="18" fill="rgba(0,0,0,.10)"/>
        <rect x="76" y="72" width="208" height="260" rx="64" fill="#fff" stroke="rgba(0,0,0,.08)" stroke-width="3"/>
        <path d="M112 143c-2-55 28-86 69-86s73 31 71 86c-1 37-18 66-18 66H126s-13-31-14-66z" fill="#3A3326"/>
        <circle cx="181" cy="165" r="58" fill="#FFD8BF"/>
        <path d="M122 140c25-35 77-44 119-15-5-40-29-61-63-60-35 1-61 27-67 61-2 13 3 20 11 14z" fill="#3A3326"/>
        <path d="M153 166h14M197 166h14" stroke="#171717" stroke-width="7" stroke-linecap="round"/>
        <path d="M172 195h22" stroke="#171717" stroke-width="6" stroke-linecap="round"/>
        <circle cx="142" cy="186" r="9" fill="#ff9eb5" opacity=".42"/>
        <circle cx="222" cy="186" r="9" fill="#ff9eb5" opacity=".42"/>
        <path d="M109 251c10-51 134-51 144 0l12 81H97l12-81z" fill="#FFD166"/>
        <path d="M117 265l-46-25M251 265l38-36" stroke="#FFD8BF" stroke-width="18" stroke-linecap="round"/>
        <circle cx="68" cy="238" r="16" fill="#FFD8BF"/>
        <circle cx="291" cy="228" r="16" fill="#FFD8BF"/>
        <circle cx="282" cy="104" r="30" fill="#fff" stroke="#FFD166" stroke-width="9"/>
        <path d="M304 127l28 28" stroke="#FFD166" stroke-width="10" stroke-linecap="round"/>
        <path d="M130 334v44M230 334v44" stroke="#343a46" stroke-width="28" stroke-linecap="round"/>
        <path d="M105 382h52M204 382h52" stroke="#171717" stroke-width="16" stroke-linecap="round"/>
      </svg>`,
    idea: `
      <svg viewBox="0 0 360 420" class="sticker-svg" aria-hidden="true">
        <ellipse cx="180" cy="378" rx="100" ry="18" fill="rgba(0,0,0,.10)"/>
        <rect x="72" y="72" width="216" height="260" rx="68" fill="#fff" stroke="rgba(0,0,0,.08)" stroke-width="3"/>
        <path d="M104 152c-8-68 35-100 78-100s82 39 74 105c-7 58-25 70-25 70H126s-17-23-22-75z" fill="#4A2638"/>
        <circle cx="180" cy="164" r="58" fill="#FFD8BF"/>
        <path d="M119 143c28-40 82-48 124-18-5-42-31-66-66-65-37 1-65 31-69 68-1 13 2 20 11 15z" fill="#4A2638"/>
        <circle cx="158" cy="166" r="8" fill="#171717"/>
        <circle cx="204" cy="166" r="8" fill="#171717"/>
        <circle cx="158" cy="166" r="3" fill="#fff"/>
        <circle cx="204" cy="166" r="3" fill="#fff"/>
        <path d="M168 192c14 13 31 13 45 0" fill="none" stroke="#171717" stroke-width="6" stroke-linecap="round"/>
        <path d="M108 252c10-50 136-50 146 0l12 80H96l12-80z" fill="#FF6FAE"/>
        <path d="M115 263l-45-40M252 263l45-40" stroke="#FFD8BF" stroke-width="18" stroke-linecap="round"/>
        <circle cx="68" cy="222" r="16" fill="#FFD8BF"/>
        <circle cx="298" cy="222" r="16" fill="#FFD8BF"/>
        <text x="51" y="89" font-size="34" font-weight="900" fill="#FF6FAE">!</text>
        <text x="276" y="75" font-size="34" font-weight="900" fill="#FF6FAE">✦</text>
        <rect x="235" y="92" width="76" height="56" rx="18" fill="#fff" stroke="rgba(0,0,0,.08)" stroke-width="3"/>
        <path d="M253 113h40M253 130h24" stroke="#FF6FAE" stroke-width="7" stroke-linecap="round"/>
        <path d="M130 334v44M230 334v44" stroke="#343a46" stroke-width="28" stroke-linecap="round"/>
        <path d="M105 382h52M204 382h52" stroke="#171717" stroke-width="16" stroke-linecap="round"/>
      </svg>`,
    experimenter: `
      <svg viewBox="0 0 360 420" class="sticker-svg" aria-hidden="true">
        <ellipse cx="180" cy="378" rx="94" ry="18" fill="rgba(0,0,0,.10)"/>
        <rect x="76" y="72" width="208" height="260" rx="64" fill="#fff" stroke="rgba(0,0,0,.08)" stroke-width="3"/>
        <path d="M119 104c22-40 94-46 124 2 23 37 4 91 4 91H111s-16-54 8-93z" fill="#243B2A"/>
        <circle cx="181" cy="164" r="58" fill="#FFD8BF"/>
        <path d="M123 139c26-32 77-41 118-13-4-38-29-61-63-60-34 1-61 27-66 60-2 13 2 19 11 13z" fill="#243B2A"/>
        <circle cx="159" cy="166" r="7" fill="#171717"/>
        <circle cx="205" cy="166" r="7" fill="#171717"/>
        <path d="M170 193c12 9 25 9 36 0" fill="none" stroke="#171717" stroke-width="6" stroke-linecap="round"/>
        <path d="M109 251c10-50 134-50 144 0l12 81H97l12-81z" fill="#7BDC65"/>
        <path d="M117 263l-44-30M250 263l43-32" stroke="#FFD8BF" stroke-width="18" stroke-linecap="round"/>
        <circle cx="72" cy="232" r="16" fill="#FFD8BF"/>
        <circle cx="294" cy="231" r="16" fill="#FFD8BF"/>
        <rect x="248" y="72" width="50" height="88" rx="20" fill="#fff" stroke="rgba(0,0,0,.08)" stroke-width="3"/>
        <path d="M266 92v28l-14 24h42l-14-24V92" fill="none" stroke="#7BDC65" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="273" cy="134" r="7" fill="#7BDC65"/>
        <circle cx="70" cy="96" r="10" fill="#7BDC65"/>
        <circle cx="90" cy="77" r="6" fill="#7BDC65"/>
        <path d="M130 334v44M230 334v44" stroke="#343a46" stroke-width="28" stroke-linecap="round"/>
        <path d="M105 382h52M204 382h52" stroke="#171717" stroke-width="16" stroke-linecap="round"/>
      </svg>`,
    coordinator: `
      <svg viewBox="0 0 360 420" class="sticker-svg" aria-hidden="true">
        <ellipse cx="180" cy="378" rx="94" ry="18" fill="rgba(0,0,0,.10)"/>
        <rect x="76" y="72" width="208" height="260" rx="64" fill="#fff" stroke="rgba(0,0,0,.08)" stroke-width="3"/>
        <path d="M110 147c-3-62 31-93 72-93s75 34 70 96c-4 48-22 69-22 69H128s-16-26-18-72z" fill="#1D2D50"/>
        <circle cx="181" cy="166" r="58" fill="#FFD8BF"/>
        <path d="M122 142c25-35 78-45 119-15-5-41-30-63-64-62-35 1-62 28-67 63-2 13 3 20 12 14z" fill="#1D2D50"/>
        <circle cx="159" cy="168" r="7" fill="#171717"/>
        <circle cx="205" cy="168" r="7" fill="#171717"/>
        <path d="M168 195c12 8 26 8 38 0" fill="none" stroke="#171717" stroke-width="6" stroke-linecap="round"/>
        <circle cx="140" cy="187" r="9" fill="#ff9eb5" opacity=".42"/>
        <circle cx="224" cy="187" r="9" fill="#ff9eb5" opacity=".42"/>
        <path d="M109 252c10-50 134-50 144 0l12 80H97l12-80z" fill="#2B6FFF"/>
        <path d="M117 264l-48-18M250 264l49-18" stroke="#FFD8BF" stroke-width="18" stroke-linecap="round"/>
        <circle cx="67" cy="245" r="16" fill="#FFD8BF"/>
        <circle cx="301" cy="245" r="16" fill="#FFD8BF"/>
        <rect x="47" y="86" width="66" height="50" rx="18" fill="#fff" stroke="rgba(0,0,0,.08)" stroke-width="3"/>
        <path d="M62 106h36M62 122h24" stroke="#2B6FFF" stroke-width="7" stroke-linecap="round"/>
        <rect x="248" y="86" width="66" height="50" rx="18" fill="#fff" stroke="rgba(0,0,0,.08)" stroke-width="3"/>
        <path d="M263 106h36M263 122h24" stroke="#2B6FFF" stroke-width="7" stroke-linecap="round"/>
        <path d="M130 334v44M230 334v44" stroke="#343a46" stroke-width="28" stroke-linecap="round"/>
        <path d="M105 382h52M204 382h52" stroke="#171717" stroke-width="16" stroke-linecap="round"/>
      </svg>`
  };
  return `<div class="sticker-card" style="--type:${t.color}">${svg[key] || svg.organizer}</div>`;
}

function home(){
  shell(`
    <section class="panel home simple-home">
      <div class="hero-copy full">
        <div class="eyebrow">✨ OCG 업무 캐릭터 테스트</div>
        <h1>나는 어떤<br/>콘텐츠형 인간일까?</h1>
        <p class="lead">
          정리형인지, 즉흥형인지, 조율형인지.<br/>
          Online Content Group 안에서의 당신 업무 스타일을 캐릭터로 분석해봐요.
        </p>

        <div class="mystery-stack">
          <div class="mystery-card">🗂️ 누군가는 표를 켜고</div>
          <div class="mystery-card">🎨 누군가는 톤을 맞추고</div>
          <div class="mystery-card">⚡ 누군가는 일단 올립니다</div>
          <div class="mystery-card">🧪 누군가는 또 새 걸 해봅니다</div>
        </div>

        <div class="cta-row">
          <button class="primary big" onclick="startTest()">내 캐릭터 확인하기</button>
        </div>
      </div>
    </section>`);
}

function startTest(){
  step=0;
  Object.keys(scores).forEach(k=>scores[k]=0);
  question();
}

function question(){
  const q=questions[step];
  const pct=(step/questions.length)*100;
  shell(`
    <section class="test">
      <div class="progress"><div style="width:${pct}%"></div></div>
      <div class="panel question-card">
        <div class="meta">${step+1} / ${questions.length}</div>
        <h2 class="question">${q.q}</h2>
        <div class="options">
          ${q.options.map(([icon,text,desc,type])=>`
            <button class="option" style="--choice:${types[type].color}" onclick="answer('${type}')">
              <div class="option-icon">${icon}</div>
              <div><div>${text}</div><small>${desc}</small></div>
            </button>`).join("")}
        </div>
      </div>
    </section>`);
}

function answer(type){
  scores[type]+=1;
  step+=1;
  if(step>=questions.length){
    const winner=Object.entries(scores).sort((a,b)=>b[1]-a[1])[0][0];
    showResult(winner);
  }else question();
}

function showResult(key){
  const t=types[key];
  shell(`
    <section class="panel result" style="--type:${t.color}">
      <div class="result-left">
        <div class="character-stage">${character(key)}</div>
        <div class="chips">
          <span class="chip">#${t.name.replaceAll(" ","")}</span>
          <span class="chip">#OnlineContentGroup</span>
          <span class="chip">#살짝찔림주의</span>
        </div>
      </div>
      <div class="result-right">
        <h1>${t.icon} ${t.name}</h1>
        <div class="catch">${t.catch}</div><p class="summary">${t.summary}</p><div class="quote">${t.quote}</div><div class="section"><h3>자주 하는 말</h3><div class="chips">${t.sayings.map(x=>`<span class="chip">${x}</span>`).join("")}</div></div>

        <div class="section">
          <h3>평소 업무 스타일</h3>
          <div class="box">
            <ul>${t.vibe.map(x=>`<li>${x}</li>`).join("")}</ul>
          </div>
        </div>

        <div class="section">
          <h3>캐릭터 프로필</h3>
          <div class="radar-wrap">
            <div class="radar" style="--type:${t.color}">
              <div class="polygon"></div>
              <div class="center"></div>
            </div>
            <div class="radar-labels">
              <span>⚡ 실행력</span>
              <span>🤝 협업력</span>
              <span>🎨 감각력</span>
              <span>🧠 구조력</span>
              <span>🧪 실험성</span>
            </div>
          </div>
        </div>

        <div class="section">
          <h3>업무 능력치</h3>
          ${Object.entries(t.stats).map(([name,value])=>`
            <div class="stat">
              <div class="stat-head"><span>${name}</span><span>${value}</span></div>
              <div class="bar"><div class="fill" style="width:${value}%"></div></div>
            </div>`).join("")}
        </div>

        <div class="section grid2">
          <div class="box">
            <h3>강점</h3>
            <ul>${t.strengths.map(x=>`<li>${x}</li>`).join("")}</ul>
          </div>
          <div class="box">
            <h3>약점</h3>
            <ul>${t.weaknesses.map(x=>`<li>${x}</li>`).join("")}</ul>
          </div>
        </div>

        <div class="section">
          <h3>Hidden Stats</h3>
          <div class="chips">${t.hidden.map(x=>`<span class="chip">${x}</span>`).join("")}</div>
        </div>

        <div class="section grid2">
          <div class="box compat">
            <h3>잘 맞는 타입</h3>
            <strong>${t.good.type}</strong>
            <p>${t.good.reason}</p>
          </div>
          <div class="box compat">
            <h3>안 맞는 타입</h3>
            <strong>${t.bad.type}</strong>
            <p>${t.bad.reason}</p>
          </div>
        </div>

        <div class="section">
          <h3>이 사람을 위한 일침</h3>
          <div class="share cold">${t.advice}</div>
        </div>

        <div class="section">
          <h3>공유용 한 줄</h3>
          <div class="share">${t.share}</div>
        </div>

        <button class="secondary" onclick="window.print()">결과 저장하기</button><button class="restart" onclick="home()">처음으로</button>
      </div>
    </section>`);
}

window.startTest=startTest;
window.answer=answer;
window.showResult=showResult;
window.home=home;
home();
