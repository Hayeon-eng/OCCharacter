const types = {
  organizer:{
    name:"정리 집착 플래너", icon:"🗂️", color:"#6d8cff", mascot:"organizer",
    catch:"파일명 안 맞으면 집중력도 같이 무너짐.",
    summary:"혼돈을 표와 목록으로 길들이는 사람. 한마디로, ‘일단 정리하면 살 수 있다고 믿는 인간’.",
    quote:"“좋아요. 그럼 항목부터 나눠볼게요.”",
    vibe:["회의하다가 자연스럽게 체크리스트를 만들고 있음","정리 안 된 문서를 보면 일보다 정리가 먼저 보임","누가 뭐 하는지 모르면 속으로 불안 게이지 올라감","파일명에 날짜 없으면 조용히 고통받음","결국 모두가 찾는 문서는 이 사람 폴더에 있음"],
    stats:{"실행력":78,"협업력":86,"감각력":60,"구조력":100,"실험성":48},
    strengths:["업무 흐름을 보기 쉽게 정리함","빠진 항목과 애매한 책임을 잘 찾아냄","문서·일정·체크리스트를 안정적으로 관리함","팀이 다시 찾을 수 있는 형태로 남겨둠"],
    weaknesses:["정리하다가 정작 실행 시간이 줄어들 수 있음","대충 넘어가는 상황에 스트레스를 받음","남의 파일명과 폴더 구조에 마음이 다칠 수 있음"],
    hidden:["체크박스 추가력 99","파일명 민감도 95","문서 위치 기억력 98","표 만들기 반사신경 94","애매함 불쾌지수 91"],
    good:{type:"속도 부스터",reason:"상대가 빠르게 굴린 일을 당신이 구조화해주면, 속도와 안정감이 동시에 살아남."},
    bad:{type:"일단 해보자 실험가",reason:"상대가 계속 새 시도를 던지면 당신의 표와 기준이 매번 다시 흔들려 피로해짐."},
    advice:"정리 안 된 일을 모두 대신 떠안다 보면, 결국 정리할 사람도 당신밖에 안 남을 수 있어요.",
    sayings:["“잠깐만요 제가 정리해볼게요.”","“이거 담당이 누구였죠?”","“문서 위치만 맞추면 금방 됩니다.”"],
    share:"나는 정리 집착 플래너. 혼돈을 보면 표부터 켜는 사람."
  },
  curator:{
    name:"톤앤매너 수호자", icon:"🎨", color:"#a678ff", mascot:"curator",
    catch:"좋은데… 뭔가 살짝 안 맞음.",
    summary:"콘텐츠의 결을 지키는 무드 감별사. 한마디로, ‘예쁘게 맞을 때까지 마음이 안 놓이는 사람’.",
    quote:"“좋은데… 지금 톤이 살짝 다른 것 같아요.”",
    vibe:["문구 하나에도 브랜드 결이 있는지 봄","색감이나 말투가 어긋나면 설명 못 해도 불편함","레퍼런스 저장하다가 원래 하던 일을 잊을 때 있음","‘조금만 더 다듬자’가 생각보다 조금이 아님","결과물이 예쁘게 맞으면 갑자기 세상 관대해짐"],
    stats:{"실행력":64,"협업력":84,"감각력":100,"구조력":76,"실험성":68},
    strengths:["브랜드 톤과 표현의 결을 잘 맞춤","사용자가 보는 첫인상과 완성도를 높임","문구·비주얼·흐름의 어색함을 빨리 감지함","콘텐츠를 그럴듯하게 보이게 만드는 힘이 있음"],
    weaknesses:["작은 어긋남도 그냥 못 넘겨 시간이 늘어남","속도전에서 스트레스를 받기 쉬움","‘느낌이 이상함’을 설명하느라 본인도 지침"],
    hidden:["톤 어긋남 감지력 99","레퍼런스 줍줍력 95","최종수정 한 번 더 91","표현 민감도 96","색감 불편함 참기 23"],
    good:{type:"속도 부스터",reason:"상대가 빠르게 초안을 만들고, 당신이 톤과 완성도를 입히면 빨리 나왔는데도 덜 허술해 보임."},
    bad:{type:"일단 해보자 실험가",reason:"상대는 새로움을 먼저 보고, 당신은 브랜드 결을 먼저 봐서 기준이 자주 엇갈림."},
    advice:"완벽한 톤을 찾다가 타이밍을 놓치면, 아무도 그 결과를 보지 못할 수도 있어요.",
    sayings:["“톤만 조금 더 맞추면 돼요.”","“좋은데 지금 무드가…”","“폰트만 살짝…”"],
    share:"나는 톤앤매너 수호자. 좋은데 뭔가 아닌 걸 그냥 못 넘김."
  },
  speed:{
    name:"속도 부스터", icon:"⚡", color:"#ff8b70", mascot:"speed",
    catch:"일단 버전 하나 만들고 생각함.",
    summary:"멈춘 일을 앞으로 밀어내는 추진 엔진. 한마디로, ‘초안이라도 있어야 싸울 수 있다고 믿는 사람’.",
    quote:"“일단 버전 하나 만들어두고 보죠.”",
    vibe:["고민이 길어지면 손이 먼저 움직임","초안 만들기까지 시간이 짧음","수정은 싫지 않은데 정지는 싫음","일단 굴러가게 만든 뒤 고치는 쪽이 편함","완벽주의자 옆에 있으면 상대가 살짝 불안해질 수 있음"],
    stats:{"실행력":100,"협업력":72,"감각력":66,"구조력":58,"실험성":84},
    strengths:["멈춰 있는 일을 빠르게 움직이게 함","초안·샘플·테스트 버전을 빨리 만듦","논의를 실제 결과물로 전환하는 데 강함","변경 요청이 와도 빠르게 반영함"],
    weaknesses:["검수 디테일이 약할 수 있음","정리형 동료를 불안하게 만들 수 있음","‘일단’이 많아져 후속 정리가 필요함"],
    hidden:["초안 생산력 98","일단 시작력 100","수정 반영 속도 90","미래의 나 믿음 93","빠르게 가죠 빈도 95"],
    good:{type:"디테일 검수관",reason:"당신이 빠르게 판을 열고 상대가 마지막 품질을 잡아줘서, 결과물이 빨리 나오면서도 덜 위험해짐."},
    bad:{type:"톤앤매너 수호자",reason:"당신은 움직임이 먼저고 상대는 결이 먼저라서 공개/공유 타이밍에서 자주 부딪힘."},
    advice:"빠른 실행은 강점이지만, 반복되는 급한 수정은 결국 미래의 당신이 감당하게 돼요.",
    sayings:["“일단 올려보죠.”","“초안부터 볼까요?”","“빠르게 가죠!”"],
    share:"나는 속도 부스터. 일단 초안 만들고 나서 생각하는 편."
  },
  strategist:{
    name:"큰그림 설계자", icon:"🧭", color:"#3b5bdb", mascot:"strategist",
    catch:"하나 물어봤는데 세계관까지 설명함.",
    summary:"업무의 방향과 이유를 잡는 판 설계자. 한마디로, ‘하나 물어봤는데 배경부터 정리해주는 사람’.",
    quote:"“이게 전체 흐름에서 어떤 역할이에요?”",
    vibe:["왜 하는지 모르면 손이 잘 안 움직임","작은 일도 큰 흐름 안에 넣어야 마음이 편함","회의 중 갑자기 3단계 구조로 나눔","단발성 요청을 보면 연결고리를 찾음","말이 길어질 때가 있는데 듣다 보면 맞음"],
    stats:{"실행력":70,"협업력":78,"감각력":74,"구조력":100,"실험성":72},
    strengths:["업무 목적과 우선순위를 선명하게 만듦","흩어진 요청을 하나의 흐름으로 정리함","팀이 왜 이걸 해야 하는지 설명해줌","장기적으로 유지될 수 있는 구조를 고민함"],
    weaknesses:["생각이 길어져 실행이 늦어질 수 있음","즉흥형 동료에게 답답하게 보일 수 있음","작은 요청에도 큰 맥락을 붙이다가 일이 커질 수 있음"],
    hidden:["맥락 설명력 98","큰그림 확대율 99","왜 하는지 질문력 95","회의 구조화력 92","3단계로 나눔 94"],
    good:{type:"속도 부스터",reason:"당신이 방향을 잡고 상대가 빠르게 결과물로 밀어줘서 생각이 실행으로 이어짐."},
    bad:{type:"즉흥 아이디어러",reason:"상대가 계속 방향을 틀면 당신이 잡아둔 구조와 우선순위가 흔들려 피로해짐."},
    advice:"방향을 오래 고민하는 동안, 이미 누군가는 움직이고 있을 수도 있어요.",
    sayings:["“이거 목적이 정확히 뭐예요?”","“전체 흐름에서 보면…”","“우선순위부터 잡죠.”"],
    share:"나는 큰그림 설계자. 간단한 일에도 왜 하는지부터 묻는 사람."
  },
  detail:{
    name:"디테일 검수관", icon:"🔍", color:"#ffd166", mascot:"detail",
    catch:"최종본이라는 말을 아직 믿지 못함.",
    summary:"최종본의 마지막 방어선. 한마디로, ‘내 눈에 보인 순간 모두의 일이 되는 사람’.",
    quote:"“잠깐만요. 여기 링크랑 문구 한 번만 더 볼게요.”",
    vibe:["최종본이라는 말을 잘 믿지 않음","링크 하나 잘못되면 하루 종일 생각남","문장 어색하면 소리 내서 읽어봄","남들은 못 본 걸 봐서 혼자 괴로움","작은 오류 잡고 조용히 뿌듯해함"],
    stats:{"실행력":66,"협업력":80,"감각력":82,"구조력":84,"실험성":46},
    strengths:["오탈자·링크·표현·순서 오류를 잘 잡음","최종 결과물의 신뢰도를 높임","나중에 터질 문제를 미리 막아줌","가이드와 기준을 꼼꼼히 지킴"],
    weaknesses:["종료 타이밍을 놓칠 수 있음","빠른 공유 문화와 충돌할 수 있음","작은 오류가 크게 보이는 저주가 있음"],
    hidden:["오탈자 탐지력 100","링크 클릭 확인력 97","최종본 의심률 96","작은 오류 확대율 99","한 문장 더 다듬기 92"],
    good:{type:"속도 부스터",reason:"상대가 초안을 빠르게 만들고 당신이 마지막 오류와 품질을 잡아줘서 효율이 좋음."},
    bad:{type:"일단 해보자 실험가",reason:"상대는 시도를 늘리고 싶고 당신은 안정적인 품질을 먼저 보고 싶어 해서 기준 차이가 큼."},
    advice:"모든 오류를 막을 수는 없어요. 때로는 ‘충분히 괜찮음’도 필요합니다.",
    sayings:["“이거 최종 맞죠? 진짜 최종?”","“링크 한 번만 더 확인할게요.”","“문구가 살짝 걸려요.”"],
    share:"나는 디테일 검수관. 남들은 못 본 오류 때문에 내가 먼저 지침."
  },
  idea:{
    name:"즉흥 아이디어러", icon:"💡", color:"#ff6fae", mascot:"idea",
    catch:"좋은 생각이 꼭 지금 떠오름.",
    summary:"정체된 판에 새 가능성을 던지는 사람. 한마디로, ‘재밌는데 가끔 모두의 일을 늘리는 사람’.",
    quote:"“근데 이 방향으로 살짝 비틀면 더 재밌지 않아요?”",
    vibe:["레퍼런스 하나 보고 갑자기 새 방향이 떠오름","분위기가 죽으면 아이디어를 던짐","좋은 생각인데 타이밍이 위험할 때가 있음","본인은 작게 말했는데 일이 커짐","뻔한 흐름을 그냥 두기 힘들어함"],
    stats:{"실행력":78,"협업력":72,"감각력":92,"구조력":46,"실험성":100},
    strengths:["새로운 접근과 표현을 잘 떠올림","정체된 업무에 활력을 줌","기존 방식에 갇히지 않음","딱딱한 안을 더 흥미롭게 바꿈"],
    weaknesses:["좋은 생각이 꼭 지금 필요한 건 아닐 수 있음","아이디어가 많아 후속 정리가 필요함","가끔 범위가 커져 팀원이 조용히 긴장함"],
    hidden:["판 키우기 96","레퍼런스 투척력 94","이것도되나요 빈도 97","갑자기 신남 95","후속정리 미룸 74"],
    good:{type:"밸런스 조율러",reason:"당신이 벌린 가능성을 상대가 역할과 순서로 정리해줘서 아이디어가 실제 실행으로 이어짐."},
    bad:{type:"큰그림 설계자",reason:"상대는 전체 방향과 우선순위를 지키고 싶고, 당신은 순간의 가능성을 열고 싶어 해서 속도가 엇갈림."},
    advice:"좋은 아이디어가 많아질수록, 끝까지 책임질 아이디어는 줄어들 수 있어요.",
    sayings:["“이것도 같이 보면…”","“갑자기 생각났는데요.”","“이 방향 재밌지 않아요?”"],
    share:"나는 즉흥 아이디어러. 재밌는 생각을 던졌을 뿐인데 일이 커짐."
  },
  experimenter:{
    name:"일단 해보자 실험가", icon:"🧪", color:"#7bdc65", mascot:"experimenter",
    catch:"작게 해보자고 했는데 안 작음.",
    summary:"새로운 방식과 개선 포인트를 계속 열어보는 사람. 한마디로, ‘한 번만 해보자고 하고 세 번 해보는 사람’.",
    quote:"“작게 한 번만 테스트해보면 안 돼요?”",
    vibe:["반복되는 방식에 금방 답답함을 느낌","새 기능이나 새 포맷 보면 손이 근질거림","실패해도 ‘배웠다’고 생각함","작게 해보자고 했지만 작을지는 모름","후속 정리보다 다음 실험이 먼저 보일 때 있음"],
    stats:{"실행력":82,"협업력":66,"감각력":76,"구조력":58,"실험성":100},
    strengths:["새로운 방식과 개선안을 빠르게 시도함","반복 업무의 비효율을 잘 발견함","작은 테스트로 가능성을 확인함","실패를 다음 개선으로 연결함"],
    weaknesses:["벌려놓은 실험이 많아질 수 있음","안정형 동료가 불안해할 수 있음","마무리보다 시작이 더 신날 때가 있음"],
    hidden:["테스트 욕구 100","새 탭 개수 94","프로토타입 생산력 90","후속정리 미룸 78","개선포인트 줍줍력 92"],
    good:{type:"정리 집착 플래너",reason:"당신이 실험을 열고 상대가 결과와 다음 액션을 정리해줘서 시도가 흐지부지되지 않음."},
    bad:{type:"디테일 검수관",reason:"당신은 빠르게 시도하고 싶고 상대는 안정적인 품질을 먼저 보고 싶어 해서 템포가 다름."},
    advice:"새로운 시도도 중요하지만, 마무리되지 않은 실험은 팀을 지치게 만들 수 있어요.",
    sayings:["“작게 한 번만 해볼까요?”","“이거 테스트 가능할 것 같은데요.”","“실패해도 배운 거죠.”"],
    share:"나는 일단 해보자 실험가. 한 번만 테스트하자고 하고 다음 실험 생각 중."
  },
  coordinator:{
    name:"밸런스 조율러", icon:"🤝", color:"#2b6fff", mascot:"coordinator",
    catch:"모두를 챙기다 내 일정만 불탐.",
    summary:"업무가 굴러가게 만드는 완충재. 한마디로, ‘모두를 챙기다가 내 일정만 조용히 불타는 사람’.",
    quote:"“좋아요. 그럼 역할이랑 일정만 한번 정리할게요.”",
    vibe:["회의 끝나면 자연스럽게 정리본을 만들고 있음","다들 괜찮다는데 본인만 위험 신호를 봄","사람 사이 공백을 메우다가 에너지가 빠짐","일정표가 정리되면 마음이 안정됨","팀이 굴러가면 본인은 뒤에서 조용히 사라짐"],
    stats:{"실행력":76,"협업력":100,"감각력":72,"구조력":88,"실험성":58},
    strengths:["역할과 일정의 빈틈을 잘 메움","갈등과 애매함을 부드럽게 정리함","요청이 꼬이지 않게 흐름을 잡음","사람과 결과물의 균형을 같이 봄"],
    weaknesses:["중간에서 쉽게 지칠 수 있음","본인 의견이 뒤로 밀릴 수 있음","모두의 사정을 챙기다 본인 일정이 위험해짐"],
    hidden:["조율력 100","회의 정리력 95","참는 힘 91","일정 퍼즐력 94","속으로 한숨 90"],
    good:{type:"즉흥 아이디어러",reason:"상대가 아이디어를 많이 벌려도 당신이 역할과 순서를 잡아줘서 혼돈이 실행 가능한 계획으로 바뀜."},
    bad:{type:"속도 부스터",reason:"상대가 너무 빠르게 밀면 당신이 조율할 틈이 없어져 일정과 사람 사이에서 과부하가 올 수 있음."},
    advice:"모두를 챙기다 보면 정작 당신의 에너지는 아무도 챙기지 못할 수 있어요.",
    sayings:["“역할만 정리해볼게요.”","“일정상 이게 가능할까요?”","“좋아요, 그럼 다음 액션은…”"],
    share:"나는 밸런스 조율러. 모두를 챙기다가 내 일정만 조용히 불타는 타입."
  }
};

const questions = [
  {q:"갑자기 단톡에 업무가 떨어졌다.",options:[["🗂️","항목부터 나누고 체크리스트를 만든다","정리 안 되면 시작이 안 됨","organizer"],["🎨","표현 톤과 가이드에 맞는지 본다","결이 안 맞으면 마음이 불편함","curator"],["⚡","일단 초안이나 샘플부터 만든다","손에 잡히는 게 있어야 움직임","speed"],["🧭","이 일이 전체 흐름에서 왜 필요한지 본다","맥락 없으면 몸이 안 움직임","strategist"]]},
  {q:"업로드 버튼 누르기 직전…",options:[["🔍","오탈자, 링크, 문구, 순서","내 눈에 보이면 모두의 일이 됨","detail"],["💡","더 재밌게 바꿀 수 있는 한 끗","갑자기 좋은 생각이 남","idea"],["🧪","이번에 새 방식으로 작게 해볼 수 있는지","반복만 하면 심심함","experimenter"],["🤝","누가 무엇을 맡고 어디까지 됐는지","흐름이 정리돼야 안심됨","coordinator"]]},
  {q:"회의에서 나는 보통?",options:[["📝","논의 내용을 구조화해서 정리한다","말이 많아질수록 표가 필요함","organizer"],["🪄","표현이나 톤이 어색한 지점을 짚는다","좋아도 우리 톤 아니면 멈춤","curator"],["🚀","바로 실행 가능한 안으로 좁힌다","얘기만 하면 아무것도 안 남음","speed"],["🗺️","방향과 우선순위를 다시 확인한다","이게 왜 1순위인지 궁금함","strategist"]]},
  {q:"업무가 꼬였을 때 나는?",options:[["📋","현재 상태를 다시 정리한다","어디서 꼬였는지 펼쳐봐야 함","organizer"],["🔎","빠진 부분과 오류를 찾는다","작은 구멍이 큰 사고가 됨","detail"],["🤝","사람별 역할과 다음 액션을 맞춘다","일보다 애매함이 더 위험함","coordinator"],["🧪","다른 방식으로 우회할 수 있는지 본다","길이 막히면 새 길을 봄","experimenter"]]},
  {q:"내가 은근히 못 참는 상황은?",options:[["🫠","기준 없이 대충 넘어가는 것","나중에 다시 돌아올 게 보임","detail"],["🎭","말투나 톤이 들쭉날쭉한 것","한 화면에 여러 성격 있으면 힘듦","curator"],["🐢","계속 논의만 하고 시작을 안 하는 것","회의가 업무보다 길면 현기증 남","speed"],["🧩","역할이 불명확한 것","누가 하는데요 모드 ON","coordinator"]]},
  {q:"내가 자주 하는 말에 가까운 건?",options:[["📌","그럼 이걸 세 개로 나누면요","나누면 살 수 있음","organizer"],["✨","좋은데 톤만 조금 더 맞추면요","조금이 조금 아닐 수 있음","curator"],["⚡","일단 버전 하나 만들어볼게요","초안이라도 있어야 싸움 가능","speed"],["🧭","이거 목적이 정확히 뭐예요?","왜 하는지 알아야 함","strategist"]]},
  {q:"새로운 아이디어가 떠올랐을 때 나는?",options:[["💡","회의 중 바로 던져본다","좋은 생각은 식기 전에 말해야 함","idea"],["🧪","작게 테스트할 방법을 찾는다","작게 한다고 했지만 작을지는 모름","experimenter"],["🧭","전체 방향과 맞는지 먼저 본다","재밌어도 방향이 틀리면 보류","strategist"],["🤝","팀이 감당 가능한 범위인지 본다","좋아도 누가 할 건데요","coordinator"]]},
  {q:"작업물이 ‘괜찮다’고 느껴지는 기준은?",options:[["🗂️","구조가 깔끔하고 다시 찾기 쉬울 때","나중의 내가 고마워해야 함","organizer"],["🌈","톤과 표현이 자연스럽게 맞을 때","보자마자 어색하면 안 됨","curator"],["🏃","빠르게 공유하고 다음 액션이 보일 때","멈춰 있는 완성도보다 움직이는 초안","speed"],["🔎","작은 오류까지 정리됐을 때","나중에 발견하면 하루 종일 생각남","detail"]]},
  {q:"동료들이 나에게 기대하는 건?",options:[["📚","자료와 기준을 정리해주는 것","어디 있냐고 물으면 내가 앎","organizer"],["🎨","표현을 더 자연스럽게 다듬는 것","어색함 감별 담당","curator"],["💡","새로운 방향을 던지는 것","판이 심심하면 나를 봄","idea"],["🤝","사람과 일정 사이를 맞추는 것","중간에서 다리 놓는 담당","coordinator"]]},
  {q:"퇴근 전 가장 마음에 걸리는 건?",options:[["✅","체크 안 된 항목","빈 체크박스가 나를 부름","organizer"],["🔗","확인 안 한 링크나 문구","내일 터질까 봐 무서움","detail"],["🧪","해보고 싶은 개선안","생각나면 저장해둬야 함","experimenter"],["🧭","이 일이 다음 흐름과 연결되는지","오늘 한 일이 내일도 의미 있어야 함","strategist"]]}
];

const app = document.querySelector("#app");
let step = 0;
const scores = Object.fromEntries(Object.keys(types).map(k => [k, 0]));


function mascotSvg(key){
  const t = types[key];
  const p = {
    organizer:{body:"#FFF3B8", accent:"#6D8CFF", prop:"check", face:"tired"},
    curator:{body:"#F5E9FF", accent:"#A678FF", prop:"palette", face:"soft"},
    speed:{body:"#FFE3CF", accent:"#FF8B70", prop:"bolt", face:"smile"},
    strategist:{body:"#E6ECFF", accent:"#3B5BDB", prop:"map", face:"flat"},
    detail:{body:"#FFF3B8", accent:"#FFD166", prop:"lens", face:"focus"},
    idea:{body:"#FFE5F2", accent:"#FF6FAE", prop:"idea", face:"spark"},
    experimenter:{body:"#E5FFD7", accent:"#7BDC65", prop:"flask", face:"smile"},
    coordinator:{body:"#E6F0FF", accent:"#2B6FFF", prop:"chat", face:"soft"}
  }[key] || {body:"#FFF3B8", accent:t.color, prop:"check", face:"soft"};

  const face = {
    tired:`<path d="M142 192h24" stroke="#202124" stroke-width="7" stroke-linecap="round"/><path d="M204 192h24" stroke="#202124" stroke-width="7" stroke-linecap="round"/><path d="M172 224c12 12 28 12 40 0" fill="none" stroke="#202124" stroke-width="7" stroke-linecap="round"/><path d="M118 220c9 8 17 15 25 24" stroke="#FF7D8D" stroke-width="8" stroke-linecap="round"/><path d="M136 218c8 8 15 15 22 23" stroke="#FF7D8D" stroke-width="8" stroke-linecap="round"/>`,
    soft:`<circle cx="154" cy="196" r="13" fill="#202124"/><circle cx="216" cy="196" r="13" fill="#202124"/><circle cx="159" cy="190" r="4" fill="#fff"/><circle cx="221" cy="190" r="4" fill="#fff"/><path d="M172 225c12 12 28 12 40 0" fill="none" stroke="#202124" stroke-width="7" stroke-linecap="round"/>`,
    smile:`<circle cx="154" cy="196" r="12" fill="#202124"/><circle cx="216" cy="196" r="12" fill="#202124"/><path d="M168 222c15 18 39 18 54 0" fill="none" stroke="#202124" stroke-width="7" stroke-linecap="round"/>`,
    flat:`<circle cx="154" cy="196" r="11" fill="#202124"/><circle cx="216" cy="196" r="11" fill="#202124"/><path d="M172 226h36" stroke="#202124" stroke-width="7" stroke-linecap="round"/>`,
    focus:`<path d="M142 194h28" stroke="#202124" stroke-width="7" stroke-linecap="round"/><path d="M200 194h28" stroke="#202124" stroke-width="7" stroke-linecap="round"/><path d="M174 226h30" stroke="#202124" stroke-width="7" stroke-linecap="round"/>`,
    spark:`<circle cx="154" cy="196" r="13" fill="#202124"/><circle cx="216" cy="196" r="13" fill="#202124"/><circle cx="158" cy="190" r="4" fill="#fff"/><circle cx="220" cy="190" r="4" fill="#fff"/><path d="M166 222c16 18 42 18 58 0" fill="none" stroke="#202124" stroke-width="7" stroke-linecap="round"/>`
  }[p.face];

  const prop = {
    check:`<g transform="translate(226 220)"><rect x="0" y="0" width="96" height="122" rx="22" fill="#fff" stroke="#202124" stroke-width="8"/><rect x="22" y="-15" width="54" height="28" rx="10" fill="${p.accent}" stroke="#202124" stroke-width="7"/><path d="M24 38l12 12 24-27M24 72l12 12 24-27" fill="none" stroke="#5BBF8A" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><path d="M65 40h18M65 75h18M28 102h54" stroke="#202124" stroke-width="6" stroke-linecap="round"/></g>`,
    palette:`<g transform="translate(224 224)"><path d="M46 0c40 0 70 26 70 62 0 30-22 50-47 50h-8c-10 0-16-7-14-16 2-8-4-14-14-14H24C9 82 0 69 0 53 0 24 20 0 46 0z" fill="#fff" stroke="#202124" stroke-width="8"/><circle cx="34" cy="38" r="10" fill="#FF8B70"/><circle cx="63" cy="30" r="10" fill="#A678FF"/><circle cx="78" cy="58" r="10" fill="#7BDC65"/><circle cx="47" cy="66" r="10" fill="#FFD166"/></g>`,
    bolt:`<g transform="translate(238 216)"><rect x="0" y="0" width="88" height="88" rx="28" fill="#fff" stroke="#202124" stroke-width="8"/><path d="M50 13 25 51h26l-12 26 29-41H44z" fill="${p.accent}" stroke="#202124" stroke-width="5" stroke-linejoin="round"/></g>`,
    map:`<g transform="translate(224 220)"><rect x="0" y="0" width="104" height="92" rx="22" fill="#fff" stroke="#202124" stroke-width="8"/><path d="M24 28h55M24 50h36M56 50l25 22" stroke="${p.accent}" stroke-width="8" stroke-linecap="round"/><circle cx="82" cy="73" r="7" fill="${p.accent}"/></g>`,
    lens:`<g transform="translate(230 218)"><circle cx="42" cy="42" r="34" fill="#fff" stroke="#202124" stroke-width="8"/><circle cx="42" cy="42" r="20" fill="none" stroke="${p.accent}" stroke-width="8"/><path d="M66 66l35 35" stroke="#202124" stroke-width="10" stroke-linecap="round"/></g>`,
    idea:`<g transform="translate(236 210)"><path d="M50 8c28 0 48 20 48 46 0 18-9 31-22 40l-4 18H29l-4-18C11 85 2 72 2 54 2 28 22 8 50 8z" fill="#fff" stroke="#202124" stroke-width="8"/><path d="M38 119h25" stroke="#202124" stroke-width="8" stroke-linecap="round"/><path d="M35 55c8-16 22-16 30 0" fill="none" stroke="${p.accent}" stroke-width="8" stroke-linecap="round"/></g>`,
    flask:`<g transform="translate(238 218)"><path d="M40 10v42L16 96c-7 14 3 30 19 30h46c16 0 26-16 19-30L76 52V10" fill="#fff" stroke="#202124" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 82h50" stroke="${p.accent}" stroke-width="8" stroke-linecap="round"/><circle cx="55" cy="99" r="7" fill="${p.accent}"/></g>`,
    chat:`<g transform="translate(224 220)"><rect x="0" y="0" width="108" height="82" rx="24" fill="#fff" stroke="#202124" stroke-width="8"/><path d="M32 80 20 105 55 82" fill="#fff" stroke="#202124" stroke-width="8" stroke-linejoin="round"/><path d="M27 30h54M27 53h36" stroke="${p.accent}" stroke-width="8" stroke-linecap="round"/></g>`
  }[p.prop];

  return `<div class="mascot-card" style="--type:${t.color}">
    <svg class="mascot-svg" viewBox="0 0 420 420" aria-hidden="true">
      <defs>
        <filter id="softShadow-${key}" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="18" stdDeviation="10" flood-color="#202124" flood-opacity=".16"/></filter>
      </defs>
      <ellipse cx="204" cy="365" rx="108" ry="22" fill="rgba(32,33,36,.10)"/>
      <g filter="url(#softShadow-${key})">
        <path d="M111 118c-12-82 36-112 70-66 12 16 16 47 8 85" fill="${p.body}" stroke="#fff" stroke-width="24" stroke-linecap="round"/>
        <path d="M271 118c12-82-36-112-70-66-12 16-16 47-8 85" fill="${p.body}" stroke="#fff" stroke-width="24" stroke-linecap="round"/>
        <path d="M111 118c-12-82 36-112 70-66 12 16 16 47 8 85" fill="${p.body}" stroke="#202124" stroke-width="9" stroke-linecap="round"/>
        <path d="M271 118c12-82-36-112-70-66-12 16-16 47-8 85" fill="${p.body}" stroke="#202124" stroke-width="9" stroke-linecap="round"/>
        <path d="M139 74c7-23 26-26 34-3 6 19 4 44-8 66" fill="#FFC7A8" opacity=".75"/>
        <path d="M243 74c-7-23-26-26-34-3-6 19-4 44 8 66" fill="#FFC7A8" opacity=".75"/>
        <path d="M71 220c0-80 57-134 127-134 74 0 133 54 133 136 0 82-57 138-130 138-78 0-130-58-130-140z" fill="${p.body}" stroke="#fff" stroke-width="25" stroke-linejoin="round"/>
        <path d="M71 220c0-80 57-134 127-134 74 0 133 54 133 136 0 82-57 138-130 138-78 0-130-58-130-140z" fill="${p.body}" stroke="#202124" stroke-width="9" stroke-linejoin="round"/>
        <path d="M92 231c-28 11-34 39-26 61" fill="none" stroke="#202124" stroke-width="8" stroke-linecap="round"/>
        <path d="M304 236c26 10 31 34 24 55" fill="none" stroke="#202124" stroke-width="8" stroke-linecap="round"/>
        ${face}
        <circle cx="120" cy="223" r="17" fill="${p.accent}" opacity=".28"/>
        <circle cx="258" cy="223" r="17" fill="${p.accent}" opacity=".22"/>
        <path d="M127 304c10 18 31 19 42 0" fill="none" stroke="#F8D990" stroke-width="8" stroke-linecap="round" opacity=".72"/>
        <path d="M65 333c14 11 42 14 66 3" fill="none" stroke="#202124" stroke-width="7" stroke-linecap="round" opacity=".28"/>
        ${prop}
        <circle cx="308" cy="118" r="5" fill="#FFD166"/><path d="M333 146l6 12 12 6-12 6-6 12-6-12-12-6 12-6z" fill="#FFD166" opacity=".9"/>
        ${key === "detail" ? `<path d="M103 244c-7 14-11 23-11 30a13 13 0 0 0 26 0c0-7-6-16-15-30z" fill="#6DD7FF" stroke="#202124" stroke-width="4"/>` : ""}
      </g>
    </svg>
  </div>`;
}

function radarSvg(stats, color){
  const names = ["실행력","협업력","감각력","구조력","실험성"];
  const cx = 170, cy = 160, maxR = 105;
  const angle = i => -Math.PI / 2 + i * Math.PI * 2 / names.length;
  const point = (i, r) => `${cx + Math.cos(angle(i)) * r},${cy + Math.sin(angle(i)) * r}`;
  const poly = names.map((n,i)=>point(i, maxR * (stats[n] || 0) / 100)).join(" ");
  const grids = [0.33,0.66,1].map(s => `<polygon class="radar-grid" points="${names.map((_,i)=>point(i,maxR*s)).join(" ")}"/>`).join("");
  const axes = names.map((_,i)=>`<line class="radar-axis" x1="${cx}" y1="${cy}" x2="${point(i,maxR).split(',')[0]}" y2="${point(i,maxR).split(',')[1]}"/>`).join("");
  const labels = names.map((n,i)=>{
    const [x,y] = point(i,maxR+34).split(',').map(Number);
    const [vx,vy] = point(i,maxR+52).split(',').map(Number);
    return `<text class="radar-label" x="${x}" y="${y}" text-anchor="middle">${n}</text><text class="radar-value" x="${vx}" y="${vy}" text-anchor="middle">${stats[n]}</text>`;
  }).join("");
  const dots = names.map((n,i)=>{const [x,y]=point(i,maxR*(stats[n]||0)/100).split(','); return `<circle class="radar-dot" cx="${x}" cy="${y}" r="4"/>`;}).join("");
  return `<svg class="radar-svg" viewBox="0 0 340 330" style="--type:${color}">${grids}${axes}<polygon class="radar-poly" points="${poly}"/>${dots}${labels}</svg>`;
}

function shell(content){
  app.innerHTML = `<div class="shell"><div class="topbar"><div class="brand"><div class="logo"></div><span>Online Content Group</span></div><div class="badge">Work Character Test</div></div>${content}</div>`;
}

function home(){
  shell(`<section class="panel home"><div class="hero-copy"><div class="eyebrow">✨ OCG 업무 캐릭터 테스트</div><h1>나는 어떤<br/>콘텐츠형 인간일까?</h1><p class="lead">정리형인지, 즉흥형인지, 조율형인지.<br/>Online Content Group 안에서의 당신 업무 스타일을 귀여운 캐릭터로 분석해봐요.</p><div class="mystery-stack"><div class="mystery-card">🗂️ 누군가는 표를 켜고</div><div class="mystery-card">🎨 누군가는 톤을 맞추고</div><div class="mystery-card">⚡ 누군가는 일단 버전을 만들고</div><div class="mystery-card">🧪 누군가는 또 새 걸 해봅니다</div></div><div class="cta-row"><button class="primary big" onclick="startTest()">내 캐릭터 확인하기</button></div></div></section>`);
}

function startTest(){
  step = 0;
  Object.keys(scores).forEach(k => scores[k] = 0);
  question();
}

function question(){
  const q = questions[step];
  const pct = (step / questions.length) * 100;
  shell(`<section class="test"><div class="progress"><div style="width:${pct}%"></div></div><div class="panel question-card"><div class="meta">${step+1} / ${questions.length}</div><h2 class="question">${q.q}</h2><div class="options">${q.options.map(([icon,text,desc,type])=>`<button class="option" style="--choice:${types[type].color}" onclick="answer('${type}')"><div class="option-icon">${icon}</div><div><div>${text}</div><small>${desc}</small></div></button>`).join("")}</div></div></section>`);
}

function answer(type){
  scores[type] += 1;
  step += 1;
  if(step >= questions.length){
    const winner = Object.entries(scores).sort((a,b)=>b[1]-a[1])[0][0];
    showResult(winner);
  } else question();
}

function showResult(key){
  const t = types[key];
  shell(`<section class="panel result" style="--type:${t.color}"><div class="result-left"><div class="character-stage">${mascotSvg(key)}</div><div class="chips"><span class="chip">#${t.name.replaceAll(" ","")}</span><span class="chip">#OnlineContentGroup</span><span class="chip">#살짝찔림주의</span></div></div><div class="result-right"><h1>${t.icon} ${t.name}</h1><div class="catch">${t.catch}</div><p class="summary">${t.summary}</p><div class="quote">${t.quote}</div><div class="section"><h3>평소 업무 스타일</h3><div class="box"><ul>${t.vibe.map(x=>`<li>${x}</li>`).join("")}</ul></div></div><div class="section"><h3>캐릭터 프로필</h3><div class="radar-wrap">${radarSvg(t.stats, t.color)}</div></div><div class="section"><h3>자주 하는 말</h3><div class="chips">${t.sayings.map(x=>`<span class="chip">${x}</span>`).join("")}</div></div><div class="section grid2"><div class="box"><h3>강점</h3><ul>${t.strengths.map(x=>`<li>${x}</li>`).join("")}</ul></div><div class="box"><h3>약점</h3><ul>${t.weaknesses.map(x=>`<li>${x}</li>`).join("")}</ul></div></div><div class="section"><h3>Hidden Stats</h3><div class="chips">${t.hidden.map(x=>`<span class="chip">${x}</span>`).join("")}</div></div><div class="section grid2"><div class="box compat"><h3>잘 맞는 타입</h3><strong>${t.good.type}</strong><p>${t.good.reason}</p></div><div class="box compat"><h3>안 맞는 타입</h3><strong>${t.bad.type}</strong><p>${t.bad.reason}</p></div></div><div class="section"><h3>이 사람을 위한 일침</h3><div class="share cold">${t.advice}</div></div><div class="section"><h3>공유용 한 줄</h3><div class="share">${t.share}</div></div><div class="cta-row"><button class="secondary" onclick="window.print()">결과 저장하기</button><button class="restart" onclick="home()">처음으로</button></div></div></section>`);
}

window.startTest = startTest;
window.answer = answer;
window.showResult = showResult;
window.home = home;
home();
