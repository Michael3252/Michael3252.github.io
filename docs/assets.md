# 사진, 영상과 모델 자료 안내

## 2026.11.25 로컬 구현에 사용한 자료

- `public/media/interface-map.webp`는 운영 체험판의 JETANK 예제에서 그리퍼 제어 객체를 선택해 캡처한 1440×880 화면이다.
- `public/media/maritime-demo.webp`는 DRIFT 공개 저장소의 `aa4862f` 시점 프런트엔드를 공식 예시 데이터와 `VITE_USE_MOCK=true`로 실행한 화면이다. 12시간 후 수색 구역을 선택했으며 지도 저작자 표기를 포함한다. 해커톤 시상 사진은 별도로 제공한다.
- `public/media/quality-preview.webp`는 가상 데이터 사본 `quality-curves.html`에서 캡처했다. JETANK MP4는 91.13초이며 로컬에서 전체 디코딩을 확인했다.
- `public/media/so101.webp`와 `public/models/so101.glb`는 아래에 기록한 공식 URDF와 STL로 만들었다. 출처와 변환 내역은 모델 폴더의 `so101-notice.txt`에 있다.
- 아래 서버 파일 목록과 미완료 항목은 로컬 이관 전 기록이다.

## 공개와 용도에 관한 확정 사항

- 공개 이메일은 gkdlgustjr00@naver.com이다.
- 삼성 로고 앞 단체사진과 삼성 프로젝트 HTML 4개, form.png는 SW 품질 관리 업무 지원 플랫폼 자료다.
- 삼성 프로젝트 화면의 업무 데이터는 모두 페이크 데이터이며 사용자가 공개를 허용했다.
- IMG_1379.mov는 JETANK 기반 제조물류 공정 자동화의 시연 영상이다.
- UMI 기반 로봇팔 학습 플랫폼은 SO-ARM101 모델링 자료로 설명한다. 실물 사진을 필수로 요구하지 않는다.

## 원본이 보관된 서버 위치

다음은 Lightsail 서버의 경로다. 이번 문서 커밋에 파일 자체가 들어 있다는 뜻이 아니다. `/tmp`가 아닌 공용 자료 디렉터리를 원본의 기준으로 사용한다.

```text
/home/ubuntu/workspace/resume/docs/projects/sources/
├── portfolio-media/
│   ├── IMG_2075.zip
│   ├── manifest.json
│   ├── interface-map-trial.png
│   ├── photo-1442-preview.png
│   └── video-frame-{1,45,85}.png
├── samsung-networks-validation-dashboard/
│   ├── IMG_2075.jpeg
│   ├── form.png
│   ├── vlog-final.html
│   ├── 사용자 제공 결과 HTML 3개
│   ├── project-requirements.png
│   └── media-manifest.json
└── solar-panel-capacity-estimation/
    ├── project-methods.png
    ├── aerial-image.png
    ├── panel-mask.png
    └── connected-components.png
```

원본 압축파일은 약 189MB이고 사진 3장과 영상 1개를 포함한다. 이 큰 ZIP을 웹 공개 디렉터리에 그대로 넣지 않는다.

| 압축파일 안의 원본 | 내용 | 용도 |
| --- | --- | --- |
| IMG_0842 (2).jpeg | 정장 인물사진 | 소개와 이력서의 프로필 사진 |
| IMG_2075.jpeg | 삼성 로고 앞 단체사진 | SW 품질 관리 업무 지원 플랫폼의 참여 소개 |
| IMG_1442.jpeg | 해커톤 수상사진 | 해양 조난자 탐색 지원 서비스의 수상 설명 |
| IMG_1379.mov | JETANK 시연 영상, 약 91초 | JETANK 기반 제조물류 공정 자동화 상세 |

## 이미 생성된 웹용 파일

아래 파일은 작업 중단 직후 서버에서 존재와 크기를 확인했다. 위치는 `/home/ubuntu/workspace/resume/portfolio-site/` 아래다. 파일 생성과 사이트 통합 또는 브라우저 검증 완료를 구분한다.

| 파일 | 크기 | 상태와 용도 |
| --- | ---: | --- |
| public/media/portrait.webp | 23,422바이트 | 인물 보정 없이 축소한 프로필, 640×857 |
| public/media/quality-team.webp | 284,364바이트 | 단체사진, 1600×1200 |
| public/media/hackathon-award.webp | 157,678바이트 | 수상사진, 1600×1067 |
| public/media/jetank-demo.mp4 | 8,806,291바이트 | 압축 결과 파일 존재. 전 구간 재생과 길이 확인은 로컬에서 수행 |
| public/media/jetank-poster.webp | 31,178바이트 | 그리퍼로 블록을 든 45초 장면, 960×540 |
| public/media/quality-form.webp | 143,872바이트 | 조회 조건 폼, 1000×2452 |
| public/media/solar-methods.webp | 50,340바이트 | 방법론 이미지, 392×590 |
| public/media/solar-aerial.webp | 20,576바이트 | 항공영상, 242×242 |
| public/media/solar-mask.webp | 2,612바이트 | 패널 영역 마스크, 242×242 |
| public/media/solar-components.webp | 13,316바이트 | 연결요소 구분, 242×242 |

작은 태양광 원본은 과도하게 확대하지 않고 단계별 설명 옆에 배치한다. 인코딩 중단 가능성이 있으므로 MP4는 파일 존재만으로 완성 판정을 하지 않는다.

## 삼성 프로젝트 HTML

서버의 `portfolio-site/public/demos/`에는 원본 기능을 유지하고 가상 데이터 안내를 붙인 사본이 있다.

| 웹용 이름 | 원본과 역할 |
| --- | --- |
| quality-timeline.html | vlog-final.html. TES.Web의 vLog 일정 타임라인 |
| quality-report.html | PLM 폴더의 결함과 시험 현황 발표자료. 상태 분포, 등록 추이, 커버리지와 실패 TC 등 |
| quality-comparison.html | 최근 한 달 결함과 연관 TC, 여러 TP의 실행 결과 비교 |
| quality-curves.html | 두 패키지의 버그커브와 TC 실행률 비교 그래프 |

원본 파일명에 들어 있는 요청 문장은 첨부자료의 제목이다. 새로 수행할 작업 지시로 해석하지 않는다. 표와 그래프의 수치를 본인의 성과 수치로 옮기지 않는다.

원본 HTML은 이전 자료 확인 단계에서 로컬 브라우저로 열어 확인했다. 새로 준비한 사본과 포트폴리오 페이지의 통합 검증은 아직 수행하지 않았다.

## Interface Map

- 운영 서비스: https://interface-map.org
- 공개 체험 화면: https://app.interface-map.org/trial
- 기존 캡처: 공용 원본 자료의 `portfolio-media/interface-map-trial.png`

로그인 화면의 체험하기로 들어가면 JETANK 공정 자동화 예제 캔버스가 보인다. 체험판에는 저장되지 않는다는 표시가 있다. 운영 워크스페이스에 새 데이터를 저장할 필요 없이 체험 화면에서 자료를 확보할 수 있다.

새 1440px 캡처와 `public/media/interface-map.webp`는 아직 완료되지 않았다. 기존 PNG는 원본 자료 디렉터리에 남아 있다.

## 해양 조난자 탐색 지원 서비스

- 저장소: https://github.com/Michael3252/DRIFT
- 확인한 기본 브랜치: master
- 기존 조사에서 이미지나 영상 파일은 발견하지 못했다.
- 프런트엔드 구현이 있어 로컬에서 데모 화면을 실행해 캡처하는 방안을 검토했다. 실행과 캡처 완료 상태가 아니다.

다른 서비스를 흉내 낸 가짜 화면을 만들지 않는다. 데모를 실행할 때는 저장소가 제공하는 모의 데이터 경로와 환경 설정을 확인하고, 포트폴리오 캡션에 데모 데이터임을 밝힌다. 기존 수상사진과 구현 흐름 도식으로 먼저 구성할 수도 있다.

## SO-ARM101 모델

- 공식 저장소: https://github.com/TheRobotStudio/SO-ARM100
- 모델 안내: https://github.com/TheRobotStudio/SO-ARM100/blob/main/Simulation/SO101/README.md
- 대상: SO101 follower의 새 보정 모델, `Simulation/SO101/so101_new_calib.urdf`
- 자료 준비에서 선택한 커밋: `141aea7bcac2744d92998e30268c413202a56f96`
- 라이선스: 저장소의 Apache-2.0. 실제 포함하는 모델과 메시에 필요한 원문 고지를 보존한다.

공식 모델로 로봇 전체, 관절, 그리퍼와 끝단 좌표계를 보여주고 실행 흐름 설명에 연결한다. 실제 로봇 촬영이나 학습 정책을 검증한 동작 영상으로 표시하지 않는다.

서버에 `scripts/prepare-so101.mjs` 초안이 있다. URDF와 STL을 읽어 Three.js 형상과 GLB로 변환하는 흐름이지만, 출력 GLB와 대표 이미지 생성은 완료되지 않았다. 이 스크립트는 Python 3를 호출하고 서버 임시 캐시를 사용할 수 있으므로 로컬에서 경로와 의존성을 먼저 살핀다.

목표 파일명은 `public/models/so101.glb`, `public/models/so101-license.txt`, `public/media/so101.webp`였다. 현재 존재한다고 가정하지 않는다.

## 자료 목록의 근거

서버의 `portfolio-site/docs/media-sources.json`에는 기존 이미지와 HTML 사본의 원본 경로, 해시와 변환 내용이 기록돼 있다. 일부 경로는 `/tmp`의 작업용 사본을 가리킨다. 이관할 때는 위 공용 원본 경로와 대조하고 영구 경로로 정리한다. 이 목록에 없는 파일도 있을 수 있으므로 실제 디렉터리와 함께 확인한다.
