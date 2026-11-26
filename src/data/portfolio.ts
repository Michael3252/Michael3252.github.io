export const contact = { email: "gkdlgustjr00@naver.com", github: "https://github.com/Michael3252" };
export const fields = { service: "웹서비스", ai: "AI와 데이터", robotics: "로봇과 제어", engineering: "전력 설계" } as const;
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
    summary: "팀이 시스템 구조와 통신 규칙을 한 캔버스에서 함께 편집하는 협업 웹서비스입니다.",
    role: "기획부터 프런트엔드, 서버, 배포와 운영까지 맡았습니다.",
    tags: ["JavaScript", "Fastify", "WebSocket", "SQLite"],
    cover: "interface-map", coverAlt: "JETANK 예제의 구성 요소와 연결선을 보여주는 Interface Map 체험 화면",
    reading: [
      ["설계 변경을 팀에 전달하는 방법", "인터페이스가 바뀔 때마다 팀원이 여러 문서를 대조해야 했습니다. 구성 요소와 통신 규칙을 캔버스에 함께 담고, 같은 설계를 사람과 외부 AI가 주고받을 수 있게 JSON 가져오기와 내보내기를 만들었습니다."],
      ["여러 사람이 같은 캔버스를 편집할 때", "JavaScript ES Modules로 편집기를 만들고 Fastify와 SQLite로 서버를 구성했습니다. WebSocket으로 편집 상태를 동기화하고, 객체별 잠금과 접근 권한을 적용해 동시에 편집할 때 변경이 겹치는 문제를 다뤘습니다."],
      ["배포 이후의 개선", "GitHub App으로 브랜치 생성과 PR 등록을 연결하고 Docker와 GitHub Actions로 AWS에 배포했습니다. 사용자 피드백을 받아 객체마다 띠지와 파일 확장자 아이콘을 붙이고, 자주 보는 정보와 세부 설정을 나눴습니다."]
    ],
    links: [["체험판 열기", "https://app.interface-map.org/trial"], ["서비스 방문", "https://interface-map.org"]]
  },
  {
    slug: "maritime-search", title: "해양 조난자 탐색 지원 서비스", field: "ai",
    period: "2026.06.13 – 06.14", setting: "팀 해커톤", award: "고용노동부 장관상",
    summary: "해류와 바람으로 표류 범위를 예측하고, 유사 사고 기록에서 구조 활동에 참고할 정보를 찾습니다.",
    role: "OpenDrift 표류 시뮬레이션과 유사 사례 기반 RAG를 구현했습니다.",
    tags: ["OpenDrift", "Python", "RAG"], cover: "maritime-demo", coverAlt: "해상 지도 위에 12시간 후 예상 수색 구역을 표시한 모의 데이터 데모",
    reading: [
      ["조난 위치에서 예상 탐색 범위로", "약 24시간 동안 진행한 팀 해커톤에서 해류와 바람을 반영하는 OpenDrift 시뮬레이션을 맡았습니다. 예상 이동 범위와 과거 사고 정보를 함께 살펴보는 구조 지원 프로토타입을 만들었습니다."],
      ["유사 사례를 고른 기준", "과거 사고 CSV에서 위치, 기상 조건과 사건 유형이 유사한 사례를 골라 LLM에 전달했습니다. 구조 활동에 참고할 만한 기록이 응답의 근거가 되도록 구성했습니다."],
      ["통합 과정에서 바꾼 점", "기능을 합치면서 변수명과 자료형을 다시 확인하는 데 시간이 들었습니다. 팀과 구현을 잠시 멈추고 입력, 출력, 담당 범위를 먼저 맞춘 뒤 통합을 마쳤습니다. 팀은 SSAFY X Kakao Tech Bootcamp AI Hackathon에서 고용노동부 장관상을 받았습니다."]
    ],
    links: [["공개 저장소", "https://github.com/Michael3252/DRIFT"]]
  },
  {
    slug: "jetank", title: "JETANK 기반 제조물류 공정 자동화", field: "robotics",
    period: "2026.05.06 – 06.26", setting: "팀 프로젝트", award: "1학기 프로젝트 우수상",
    summary: "카메라로 주행선을 따라 이동하고, 마커로 찾은 물체를 로봇팔로 집는 제조물류 공정을 구현했습니다.",
    role: "비전 기반 주행과 ArUco 마커 처리, 좌표 변환, 로봇팔 역기구학 제어를 맡았습니다.",
    tags: ["Python", "ArUco", "역기구학"], cover: "jetank-poster", coverAlt: "JETANK 로봇팔이 블록을 들어 올린 실제 시연 장면",
    reading: [
      ["주행선에서 물체 위치까지", "JETANK AI Kit의 카메라 영상으로 주행선을 따라가도록 했습니다. ArUco 마커에서 얻은 물체 위치를 로봇팔이 사용하는 좌표계로 옮겨 주행과 집기 동작을 연결했습니다."],
      ["로봇팔이 도달할 수 있는 목표", "어깨 회전, 어깨와 팔꿈치에 해당하는 세 관절의 도달 범위와 서보 각도 제한을 반영해 역기구학을 계산했습니다. Python에서 기존 서보 라이브러리로 직렬 명령을 전송하고 별도 집게로 물체를 집었습니다."],
      ["팀 결과", "팀은 삼성청년SW·AI아카데미 1학기 프로젝트 우수상을 받았습니다. 아래 영상에서 실제 장비의 주행과 로봇팔 동작을 확인할 수 있습니다."]
    ], links: [["공개 저장소", "https://github.com/Michael3252/jetank-factory-automation"]]
  },
  {
    slug: "quality-platform", title: "SW 품질 관리 업무 지원 플랫폼", field: "service",
    period: "2026.10부터 참여", setting: "삼성청년SW·AI아카데미 기업연계 프로젝트, 6인 팀",
    summary: "여러 검증 서비스의 데이터를 연결해 담당자가 공통 기능의 시험 현황을 비교하도록 지원했습니다.",
    role: "공통 DB 구축, 공통 기능 검증 현황 비교, FastMCP 연동과 FormHost 조건 입력을 맡았습니다.",
    tags: ["Python", "FastMCP", "SQL", "Cline"], cover: "quality-preview", coverAlt: "가상 데이터로 두 패키지의 결함 추이를 비교한 실제 HTML 결과",
    reading: [
      ["업무 관찰에서 바뀐 기능", "삼성전자 네트워크사업부와 진행한 SSAFY 기업연계 프로젝트입니다. 처음 제안한 시험 실패 건수 기반 위험도는 현업의 판단 기준과 차이가 있었습니다. 담당자 미팅과 업무 관찰을 통해 다른 프로젝트의 동일 기능 검증 결과를 인용하는 절차를 파악했습니다."],
      ["공통 데이터를 연결하는 설계", "기능 담당자에게 필요한 컬럼을 조사하고 중복을 정리해 공통 DB를 구축했습니다. 사업자, Feature, TC 테이블을 외래 키로 연결하고, 공통 기능의 검증 현황을 프로젝트별로 비교하는 화면을 제안하고 구현했습니다. 인용 여부 판단과 관련 부서 탐색에 도움이 된다는 평가를 받았습니다."],
      ["조회 조건을 사용자가 정하도록", "Python FastMCP로 검증 서비스와 Confluence를 연결했습니다. Cline이 조회 범위를 임의로 정하는 문제를 줄이기 위해 FormHost를 구현했습니다. 사용자가 로컬 폼에서 기간, 프로젝트, 결함 상태를 선택하면 MCP가 조건에 맞는 데이터를 조회하고 Cline이 표와 문서로 정리합니다."]
    ]
  },
  {
    slug: "solar-vision", title: "항공영상 기반 태양광 패널 인식 및 설비용량 추정", field: "ai",
    period: "2025.09.01 – 11.07", setting: "개인 프로젝트", award: "제15회 ECC 학술제 대상",
    summary: "항공영상에서 패널 영역을 분리하고 인식한 면적을 바탕으로 태양광 설비용량을 추정했습니다.",
    role: "주제 선정부터 항공영상 라벨링, 모델 학습, 마스크 후처리와 설비용량 추정까지 수행했습니다.",
    tags: ["DeepLabV3+", "영상 분할", "연결요소 분석"], cover: "solar-aerial", coverAlt: "태양광 패널이 설치된 구역의 원본 항공영상",
    reading: [
      ["직접 만든 학습 데이터", "항공영상의 패널 영역을 직접 라벨링하고, 사전 학습된 DeepLabV3+를 미세 조정해 패널과 배경을 분리했습니다. 학습에는 BCE와 Dice Loss, AdamW를 사용했습니다."],
      ["분할 결과를 설비용량으로", "영역 마스크의 연결요소를 구분한 뒤 원본 영역을 추출했습니다. 흑백 변환과 이진화를 거쳐 패널 유닛을 파악하고 인식 면적을 설비용량 추정에 연결했습니다."],
      ["발표 결과", "2025년 11월 14일 상명대학교 융합공과대학 제15회 ECC 학술제에서 대상을 받았습니다."]
    ]
  },
  {
    slug: "umi", title: "UMI 기반 로봇팔 학습 플랫폼", field: "robotics", setting: "시뮬레이션과 실물 실행기",
    summary: "가상 환경에서 수집한 동작으로 정책을 학습하고, 정책 출력을 로봇팔 명령으로 바꾸는 실행기를 구현했습니다.",
    role: "MuJoCo 데이터 수집과 UMI 학습 파이프라인을 검증하고 실제 로봇의 Python 실행기를 구현했습니다.",
    tags: ["MuJoCo", "Diffusion Policy", "Jetson Orin Nano"], cover: "umi-gripper", coverAlt: "휴대폰을 장착한 실제 로봇팔의 그리퍼가 포장 물체를 잡고 있는 모습",
    reading: [
      ["시뮬레이션에서 수집한 동작", "SO-ARM101과 UMI 핸들의 URDF로 MuJoCo 환경을 구성했습니다. 임의 위치의 물체를 정해진 곳으로 옮기는 동작과 가상 카메라 영상을 수집하고, ArUco 전처리와 ORB-SLAM3를 거쳐 Diffusion Policy 학습까지 파이프라인을 검증했습니다.", [
        { image: "umi-simulation", width: 1600, height: 600, alt: "MuJoCo 작업대 전체와 캔이 그리퍼 사이에 보이는 근접 시점을 나란히 표시한 화면", caption: "캔에 접근하는 같은 순간을 두 시점에서 봤습니다. 왼쪽은 작업대 전체, 오른쪽은 그리퍼에서 본 화면입니다." }
      ]],
      ["정책 출력을 실제 로봇 명령으로", "Jetson Orin Nano의 Python 실행기에서 정책의 상대 TCP 목표를 관측 시점 기준으로 베이스 좌표계에 옮겼습니다. 5관절 역기구학으로 관절각을 구하고, 그리퍼 폭과 함께 서보 tick으로 변환해 관절별 허용 범위를 적용한 뒤 UART로 전송했습니다.", [
        { image: "umi-gripper", width: 810, height: 1440, alt: "휴대폰이 달린 흰색 로봇팔과 포장 물체를 쥔 검은 그리퍼", caption: "실물 장비 촬영. 그리퍼 위에 장착한 휴대폰과 물체를 잡은 집게가 함께 보입니다." }
      ]],
      ["실물에서 확인한 제어", "관절별 서보 PID 게인을 조정하고 부하 테스트에서 목표 오차와 떨림 감소를 확인했습니다. 아래 모델은 관절, 그리퍼와 끝단의 위치 관계를 설명하는 공식 형상입니다."]
    ]
  },
  {
    slug: "langgraph", title: "LangGraph 기반 질문 분류", field: "ai",
    summary: "질문의 난도와 유형에 따라 처리 경로를 나누는 흐름을 구성했습니다.",
    role: "파라미터 수가 작은 모델로 질문을 분류하고, 결과를 LangGraph 처리 흐름에 연결했습니다.",
    tags: ["LangGraph", "질문 분류"]
  },
  {
    slug: "autonomous-taxi", title: "Jetson Orin Nano 기반 자율주행 택시", field: "robotics",
    summary: "축소 도로에서 도로 표시를 인식하고 차량 위치를 추정하는 기능을 개발했습니다.",
    role: "광각 영상을 BEV로 변환하고 YOLO26으로 도로 표시를 인식했습니다. 외부 카메라와 ArUco 마커로 가상 GPS를 구현했습니다.",
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
    summary: "기상예보, 기상 기록과 위성 영상을 결합해 태양광 발전량을 예측했습니다.",
    role: "교수님께 프로젝트 과목 개설을 요청했습니다. 세 종류의 API 데이터를 연결하고 가공해 MLP 예측 파이프라인을 구현했습니다.",
    tags: ["MLP", "기상 데이터"]
  },
  {
    slug: "wind-forecast", title: "풍력 발전량 예측", field: "ai",
    summary: "기상 조건과 과거 발전량을 바탕으로 풍력 발전량을 예측하는 공모전 프로젝트입니다.",
    role: "풍력 발전량과 기상 데이터를 이용해 랜덤 포레스트 회귀 모델을 구현했습니다.",
    tags: ["랜덤 포레스트", "회귀 분석"]
  },
  {
    slug: "power-demand", title: "전력 수요 예측", field: "ai",
    summary: "전력 수요의 시계열 예측과 잔차 보정을 결합했습니다.",
    role: "LSTM으로 전력 수요를 예측하고, XGBoost로 잔차를 보정하는 모델을 구현했습니다.",
    tags: ["LSTM", "XGBoost"]
  },
  {
    slug: "hvdc", title: "한일 해저 HVDC 송전망 연계 가상 설계", field: "engineering",
    summary: "한국과 일본을 잇는 해저 고압직류 송전망을 가상으로 설계한 프로젝트입니다.",
    role: "설계의 깊이와 발표 방향에 관한 의견을 명세서와 요구사항 기준으로 조율하고 팀과 설계 및 발표를 마쳤습니다.",
    tags: ["HVDC", "요구사항 분석"]
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
