export const contact = { email: "gkdlgustjr00@naver.com", github: "https://github.com/Michael3252" };
export const fields = { service: "웹서비스", ai: "AI와 데이터", robotics: "로봇과 제어" } as const;
export type Field = keyof typeof fields;
interface ProjectPhoto {
  image: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
}
export interface Project {
  slug: string;
  title: string;
  field: Field;
  summary: string;
  role: string;
  tags: string[];
  period?: string;
  setting?: string;
  award?: string;
  reading?: [string, string, ProjectPhoto[]?][];
  links?: [string, string][];
  cover?: string;
  coverAlt?: string;
}

export const projects: Project[] = [
  {
    slug: "interface-map", title: "Interface Map", field: "service",
    period: "2026.08.10부터 운영", setting: "서비스 기획, 개발 및 운영",
    summary: "공동 편집 설계 도구를 만들어 운영합니다. 사용자 피드백을 받아 캔버스에 객체별 띠지와 파일 확장자 아이콘을 추가했습니다.",
    role: "설계 도구를 직접 기획하고 개발해 운영하고 있습니다. 객체마다 잠금을 두고 변경 내용을 실시간으로 동기화해, 팀원들이 같은 캔버스에서 서로 다른 구성 요소를 동시에 편집할 수 있게 했습니다.",
    tags: ["JavaScript", "Fastify", "WebSocket", "SQLite"],
    cover: "interface-map", coverAlt: "JETANK 예제의 구성 요소와 연결선을 보여주는 Interface Map 체험 화면",
    reading: [
      ["설계 변경을 한곳에서 확인하기", "인터페이스가 바뀌면 팀원들은 여러 문서를 대조해야 했습니다. 시스템 구성 요소와 통신 규칙을 한 캔버스에 담고, 설계를 JSON으로 내보내거나 다시 불러올 수 있게 했습니다. 팀원과 외부 AI가 같은 설계 정보를 주고받는 방식입니다."],
      ["공동 편집에서 변경이 겹칠 때", "브라우저 편집기는 JavaScript ES Modules로, 서버는 Fastify와 SQLite로 만들었습니다. WebSocket으로 편집 상태를 공유하고, 객체별 잠금과 접근 권한을 적용해 누가 어떤 객체를 편집할 수 있는지 정했습니다."],
      ["운영 중 반영한 사용자 피드백", "사용자 피드백을 받아 객체에 띠지를 붙이고 파일 확장자를 아이콘으로 표시했습니다. 자주 확인하는 정보와 세부 설정은 나눠 표시했습니다. GitHub App으로 브랜치 생성과 PR 등록을 연결하고, Docker와 GitHub Actions로 AWS에 배포했습니다."]
    ],
    links: [["체험판 열기", "https://app.interface-map.org/trial"], ["서비스 방문", "https://interface-map.org"]]
  },
  {
    slug: "maritime-search", title: "해양 조난자 탐색 지원 서비스", field: "ai",
    period: "2026.06.13 – 06.14", setting: "팀 해커톤", award: "고용노동부 장관상",
    summary: "표류 범위를 계산하고 비슷한 사고 기록을 찾아주는 구조 지원 프로토타입을 팀과 함께 완성했습니다.",
    role: "OpenDrift로 예상 표류 범위를 계산하고, 유사 사고 기록에서 구조 정보를 찾는 기능을 구현했습니다. 통합 중 변수명과 자료형이 맞지 않아 팀원들과 입출력 규격을 다시 정했고, 함께 구조 지원 프로토타입을 완성했습니다.",
    tags: ["OpenDrift", "Python", "RAG"], cover: "maritime-demo", coverAlt: "해상 지도 위에 12시간 후 예상 수색 구역을 표시한 모의 데이터 데모",
    reading: [
      ["조난자가 어디까지 표류할지 계산", "팀에 주어진 시간은 약 24시간이었습니다. 해류와 바람을 반영하는 표류 시뮬레이션을 맡아 조난 위치에서 시작한 물체가 이동할 범위를 계산했습니다."],
      ["구조 정보에 참고할 사고 고르기", "과거 사고 CSV에서 위치, 기상 조건, 사고 유형이 비슷한 사례를 골라 LLM에 전달했습니다. 모델이 해당 사례를 참고해 구조 활동에 필요한 정보를 정리하도록 했습니다."],
      ["팀과 마친 통합", "기능을 합치는 과정에서 서로 다른 이름과 형식으로 같은 데이터를 다루고 있었습니다. 구현을 잠시 멈추고 팀원들과 주고받을 데이터와 담당 범위를 합의했습니다. 팀은 완성한 프로토타입으로 고용노동부 장관상을 받았습니다."]
    ],
    links: [["공개 저장소", "https://github.com/Michael3252/DRIFT"]]
  },
  {
    slug: "jetank", title: "JETANK 기반 제조물류 공정 자동화", field: "robotics",
    period: "2026.05.06 – 06.26", setting: "팀 프로젝트", award: "1학기 프로젝트 우수상",
    summary: "주행선을 따라 이동한 로봇이 마커로 찾은 물체를 집도록 제어했습니다. 실물 시연에서는 그리퍼가 블록을 들어 올렸습니다.",
    role: "카메라가 읽은 마커 위치를 로봇팔 좌표로 옮기고, 관절이 닿는 범위 안에서 집기 자세를 계산했습니다. 실제 장비로 시연했을 때 그리퍼가 블록을 들어 올렸습니다.",
    tags: ["Python", "ArUco", "역기구학"], cover: "jetank-poster", coverAlt: "JETANK 로봇팔이 블록을 들어 올린 실제 시연 장면",
    reading: [
      ["카메라로 주행선과 마커 읽기", "JETANK의 카메라 영상에서 주행선을 찾아 로봇이 선을 따라 움직이도록 했습니다. 집기 단계에서는 ArUco 마커로 물체 위치를 구했습니다."],
      ["물체 위치를 집기 자세로 바꾸기", "어깨 회전, 어깨, 팔꿈치 세 관절의 도달 범위와 서보 각도 제한을 역기구학 계산에 반영했습니다. Python에서 서보 라이브러리로 관절 명령을 보내고 집게를 제어했습니다."],
      ["팀 시연과 수상", "팀은 주행과 집기를 연결해 제조물류 공정을 시연했고, 삼성청년SW·AI아카데미 1학기 프로젝트 우수상을 받았습니다."]
    ], links: [["공개 저장소", "https://github.com/Michael3252/jetank-factory-automation"]]
  },
  {
    slug: "quality-platform", title: "SW 품질 관리 업무 지원 플랫폼", field: "service",
    period: "2026.10부터 참여", setting: "삼성청년SW·AI아카데미 기업연계 프로젝트, 6인 팀",
    summary: "여러 검증 업무 플랫폼의 시험 기록을 연결해, 담당자가 같은 시험 항목의 결과를 사업자별로 나란히 비교할 수 있게 했습니다.",
    role: "현업 담당자들이 다른 프로젝트의 시험 기록을 찾아 인용하는 것을 보고, 검증 현황 비교 화면을 제안해 구현했습니다. 담당자는 인용 여부를 판단하고 관련 부서를 찾는 데 도움이 된다고 평가했습니다.",
    tags: ["Python", "FastMCP", "SQL", "Cline"], cover: "quality-feature-comparison", coverAlt: "같은 기능의 시험 항목별 검증 상태를 사업자와 통신 방식에 따라 나란히 보여주는 비교표",
    links: [["검증 현황 비교 데모", "/demos/quality-timeline.html#/dashboard?pkg=ARC26A&row=a3&view=fc"]],
    reading: [
      ["담당자가 검증 계획을 세우는 방식", "삼성전자 네트워크사업부와 진행한 SSAFY 기업연계 프로젝트입니다. 처음에는 시험 실패 건수로 기능별 위험도를 안내했습니다. 담당자와 만나 업무를 살펴보니, 검증 계획을 세울 때 다른 프로젝트에서 같은 기능을 시험한 기록을 찾아 인용한다는 점을 알게 됐습니다."],
      ["같은 시험 항목을 한 줄에서 비교", "담당자들이 쓰는 컬럼을 조사해 중복을 정리하고, 사업자와 기능(Feature), 시험 항목(TC)을 공통 DB에서 연결했습니다. 비교 화면에서는 기능별로 시험 항목을 묶고, 사업자와 통신 방식별 시험 결과를 같은 행에 배치했습니다.", [
        { image: "quality-feature-comparison", width: 1806, height: 1106, alt: "ARC26A의 Feature Comparison 표. 시험 항목을 기준으로 AUR, BLX, ZEN, ORN의 LTE 또는 NR 검증 상태를 비교한다.", caption: "직접 구현한 검증 현황 비교 화면입니다. ARC26A에서 여섯 비교 대상을 선택한 가상 데이터 예시입니다." }
      ]],
      ["조회 범위를 사용자가 정하도록", "Python FastMCP로 검증 업무 플랫폼과 Confluence를 연결했습니다. Cline이 조회 범위를 임의로 정하는 문제가 있어 FormHost를 구현했습니다. 테스트에서 사용자가 폼으로 고른 기간, 프로젝트, 상태에 맞는 응답을 확인했습니다."]
    ]
  },
  {
    slug: "solar-vision", title: "항공영상 기반 태양광 패널 인식 및 설비용량 추정", field: "ai",
    period: "2025.09.01 – 11.07", setting: "개인 프로젝트", award: "제15회 ECC 학술제 대상",
    summary: "항공영상에서 패널이 차지하는 면적을 구해 설비용량을 추정했습니다. 이 개인 프로젝트로 제15회 ECC 학술제 대상을 받았습니다.",
    role: "항공영상에 태양광 패널 영역을 직접 표시해 분할 모델을 학습시켰습니다. 모델의 출력에서 패널 면적을 구해 설비용량을 추정했고, 이 연구로 제15회 ECC 학술제 대상을 받았습니다.",
    tags: ["DeepLabV3+", "영상 분할", "연결요소 분석"], cover: "solar-aerial", coverAlt: "태양광 패널이 설치된 구역의 원본 항공영상",
    reading: [
      ["패널과 배경을 구분하는 학습 데이터", "항공영상에 직접 표시한 패널 영역을 정답으로 삼아 사전 학습된 DeepLabV3+를 미세 조정했습니다. BCE와 Dice Loss를 사용하고 AdamW로 모델을 학습했습니다."],
      ["마스크에서 설비용량까지", "분할 마스크에서 서로 연결된 영역을 구분하고, 각 영역에 해당하는 원본 영상을 추출했습니다. 흑백 변환과 이진화를 거쳐 패널 유닛을 파악하고, 인식한 면적으로 설비용량을 추정했습니다."]
    ]
  },
  {
    slug: "umi", title: "UMI 기반 로봇팔 학습 플랫폼", field: "robotics", setting: "시뮬레이션과 실물 실행기",
    summary: "시뮬레이션에서 수집한 동작으로 정책 학습 과정을 검증했습니다. 실물 로봇팔에서는 관절별 서보를 조정해 부하 시험에서 오차와 떨림이 줄어든 것을 확인했습니다.",
    role: "실물 로봇팔의 Python 실행기를 만들고 관절별 서보 PID 게인을 조정했습니다. 부하를 걸어 시험했을 때 목표값과의 오차가 줄고 팔의 떨림도 작아졌습니다.",
    tags: ["MuJoCo", "Diffusion Policy", "Jetson Orin Nano"], cover: "umi-gripper", coverAlt: "휴대폰을 장착한 실제 로봇팔의 그리퍼가 포장 물체를 잡고 있는 모습",
    reading: [
      ["시뮬레이션에서 정책 학습까지", "SO-ARM101과 UMI 핸들의 URDF로 MuJoCo 작업대를 구성했습니다. 여러 위치의 물체를 정해진 곳으로 옮기며 동작과 카메라 영상을 수집했습니다. ArUco 전처리와 ORB-SLAM3를 거쳐 Diffusion Policy 학습까지 검증했습니다.", [
        { image: "umi-simulation", width: 1600, height: 600, alt: "MuJoCo 작업대 전체와 캔이 그리퍼 사이에 보이는 근접 시점을 나란히 표시한 화면", caption: "캔에 접근하는 같은 순간을 두 시점에서 봤습니다. 왼쪽은 작업대 전체, 오른쪽은 그리퍼에서 본 화면입니다." }
      ]],
      ["실물 로봇팔에 명령을 보내는 방법", "Jetson Orin Nano에서 정책이 출력한 상대 목표를 관측 시점의 로봇팔 끝단 위치와 자세를 기준으로 베이스 좌표계에 옮겼습니다. 역기구학으로 구한 다섯 관절의 각도와 그리퍼 폭을 각각 서보 명령값(tick)으로 바꾸고, 관절별 허용 범위를 적용해 UART로 보냈습니다.", [
        { image: "umi-gripper", width: 810, height: 1440, alt: "휴대폰이 달린 흰색 로봇팔과 포장 물체를 쥔 검은 그리퍼", caption: "실물 장비 촬영. 그리퍼 위에 장착한 휴대폰과 물체를 잡은 집게가 함께 보입니다." }
      ]]
    ]
  },
  {
    slug: "autonomous-taxi", title: "Jetson Orin Nano 기반 자율주행 택시", field: "robotics",
    summary: "축소 도로에서 횡단보도와 정지선을 인식하고, 외부 카메라로 차량 위치를 추정하는 가상 GPS를 만들었습니다.",
    role: "광각 영상을 위에서 내려다본 시점으로 바꾸고 도로 표시 인식 모델을 학습시켜 횡단보도와 정지선을 구분했습니다. 차량 위치는 외부 카메라 두 대가 읽은 ArUco 마커를 기준으로 추정했습니다.",
    tags: ["Jetson Orin Nano", "YOLO26", "ArUco"],
    reading: [
      ["축소 도로를 위에서 바라보는 시점으로", "카메라 앞쪽을 비스듬히 본 영상에는 가까운 횡단보도가 크게, 먼 차선은 좁게 보입니다. 광각 영상을 위에서 내려다본 시점(BEV)으로 변환해 노면 표시의 배치를 읽을 수 있게 했습니다.", [
        { image: "taxi-road", width: 1440, height: 1080, alt: "축소 도로 교차로를 낮은 시점에서 본 사진. 앞쪽 횡단보도 너머로 화살표와 차선이 보인다.", caption: "축소 도로의 교차로. 가까운 횡단보도와 먼 차선에서 원근 차이가 드러납니다." },
        { image: "taxi-bev", width: 954, height: 241, alt: "위에서 본 형태로 변환한 축소 도로의 횡단보도와 방향 화살표", caption: "BEV 변환 예시. 검은 부분은 카메라 영상이 투영되지 않은 영역입니다." }
      ]],
      ["횡단보도와 정지선을 구분하기", "YOLO26을 학습해 도로 표시가 차지하는 영역을 구분했습니다.", [
        { image: "taxi-segmentation", width: 954, height: 241, alt: "도로에 색 마스크와 분류명이 겹쳐진 세그멘테이션 결과", caption: "다른 주행 장면의 인식 결과. 횡단보도, 정지선, 점선, 방향 화살표에 분류명이 표시됩니다." }
      ]],
      ["외부 카메라로 위치 기준 잡기", "축소 도로 주위에 놓은 ArUco 마커를 외부 카메라로 읽어 차량 위치 추정에 쓰는 가상 GPS를 구현했습니다.", [
        { image: "taxi-virtual-gps", width: 2400, height: 1286, alt: "외부 카메라 두 대에서 마커 좌표와 공유 마커 4번, 5번을 표시한 화면", caption: "두 카메라가 공유하는 마커는 4번과 5번입니다. 화면 아래에 검출한 마커와 각 카메라의 보정 상태가 표시됩니다." }
      ]]
    ]
  },
  {
    slug: "solar-forecast", title: "태양광 발전량 예측", field: "ai",
    summary: "기상예보, 관측 기록, 위성 영상을 함께 사용해 태양광 발전량을 예측했습니다.",
    role: "교수님께 태양광 발전량 예측을 위한 프로젝트 과목 개설을 요청했습니다. 기상예보, 관측 기록, 위성 영상 API를 연결하고 수집한 자료로 발전량을 예측하는 MLP 모델을 만들었습니다.",
    tags: ["MLP", "기상 데이터"]
  },
  {
    slug: "wind-forecast", title: "풍력 발전량 예측", field: "ai",
    summary: "공모전에서 과거 기상 조건과 발전량 기록을 이용해 풍력 발전량을 예측했습니다.",
    role: "풍력 발전량 예측 공모전에서 기상 데이터를 입력으로, 발전량 기록을 예측 대상으로 삼아 랜덤 포레스트 회귀 모델을 구현했습니다.",
    tags: ["랜덤 포레스트", "회귀 분석"]
  },
  {
    slug: "power-demand", title: "전력 수요 예측", field: "ai",
    summary: "LSTM으로 전력 수요를 예측하고 XGBoost로 예측 오차를 보정했습니다.",
    role: "LSTM으로 전력 수요를 예측한 뒤, 실제 수요와 예측값 사이에 남은 오차를 XGBoost로 추정해 보정하는 모델을 구현했습니다.",
    tags: ["LSTM", "XGBoost"]
  }
];

export const featured = projects.filter(project => project.cover);
export const education = [
  ["2026.01 – 12 예정", "삼성청년SW·AI아카데미 15기", "1학기 925시간 이수. 웹, AI, 임베디드, 알고리즘 실습"],
  ["2020.03 – 2026.02", "상명대학교 서울캠퍼스", "전기공학전공 공학사"]
];
export const awards = [
  ["2026.06", "고용노동부 장관상", "SSAFY X Kakao Tech Bootcamp AI Hackathon"],
  ["2026.06", "1학기 프로젝트 우수상", "삼성청년SW·AI아카데미, JETANK 기반 제조물류 공정 자동화"],
  ["2026.06", "1학기 성적 우수상", "삼성청년SW·AI아카데미"],
  ["2025.11", "제15회 ECC 학술제 대상", "상명대학교 융합공과대학"]
];
export const credentials = [
  ["2026.09", "정보처리기사"], ["2026.09", "SQL 개발자(SQLD)"], ["2026.06", "전기공사기사"],
  ["2026.03", "삼성 상시 SW 역량테스트 B형"], ["2025.12", "전기기사"],
  ["2026.03", "TOEIC Speaking IM3"], ["2025.10", "TOEIC 890점"]
];
