# 로컬 작업 인계

## 현재 요청과 상태

2026.11.25 사용자는 포트폴리오 제작 도중 Lightsail에 부하가 걸렸다고 알렸고, 이후 문서만 정리해 GitHub에 push한 뒤 본인 컴퓨터에서 작업을 이어가겠다고 요청했다.

따라서 이번 커밋은 **문서만 포함한다**. 구현, 미디어 처리와 브라우저 작업을 중단했다. 새 프로젝트를 다시 기획하거나 사용자에게 이미 확정한 자료를 다시 요구하지 않고, 이 문서를 읽고 로컬에서 구현을 재개하면 된다.

웹사이트는 완성되지 않았다. 페이지, 스타일과 컴포넌트는 구현 전이며 빌드, 테스트와 배포 성공 기록도 없다.

## 이번 GitHub 커밋에 포함된 것

- README.md: 읽는 순서와 로컬 시작 방법
- AGENTS.md: 사실 표현, 공개 범위와 작업 환경 지침
- docs/portfolio-plan.md: 목적, 사이트 구조, 디자인과 기능 계획
- docs/project-content.md: 주요 프로젝트와 전체 이력의 콘텐츠 기준
- docs/assets.md: 원본과 준비된 미디어의 위치, 용도와 상태
- docs/handoff.md: 이 문서

사진, 영상, HTML 사본, 시작한 소스 코드와 패키지는 이 문서 커밋에 포함하지 않는다. 서버 파일은 삭제하지 않고 보존했다.

## 먼저 읽을 핵심 결정

1. 취업 목적이며 이력의 가독성과 전문성이 최우선이다.
2. 웹서비스, AI와 로봇 제어 경험을 균형 있게 소개한다.
3. 로봇의 뇌와 심장, 서비스 화면을 경험 분야와 연결하는 보조 도식을 사용한다.
4. 대표 프로젝트 6개와 나머지 전체 프로젝트를 소개한다. 정확한 제목과 개인 역할은 콘텐츠 기준을 따른다.
5. 공개 이메일은 gkdlgustjr00@naver.com이다.
6. 삼성 프로젝트 첨부자료는 공개 가능한 페이크 데이터다. 공개 허용을 다시 묻지 않는다.
7. 제공된 로봇 영상은 JETANK 프로젝트다.
8. UMI의 시각 자료는 SO-ARM101 공식 모델을 이용한다. 실물 사진 없이 진행할 수 있다.

## 서버에 남은 구현 초안

위치: `/home/ubuntu/workspace/resume/portfolio-site`

로컬 Git 브랜치는 `codex/portfolio`에서 시작했고 다음 파일들은 커밋하지 않은 상태로 작성했다. 이번 문서만 받으면 아래 코드가 함께 받아지는 것은 아니다.

| 경로 | 상태 |
| --- | --- |
| package.json, package-lock.json | 의존성 설치를 마친 초기 설정. 실행 가능한 사이트는 아님 |
| astro.config.mjs | 정적 출력, 목표 사이트 주소와 trailing slash 설정 |
| tsconfig.json | Astro strict 설정 |
| .gitignore | node_modules, dist, 임시 산출물 제외 |
| src/data/profile.ts | 이름, 교육, 수상, 자격과 역량 소개의 초기 데이터 |
| PRODUCT.md | 제품 목적과 사실 범위를 적은 초안 |
| docs/surface-brief.md | 처음 합의한 화면 방향의 기록 |
| scripts/prepare-media.mjs | 원본 위치를 참조하는 이미지와 HTML 준비 스크립트 초안 |
| scripts/prepare-so101.mjs | 공식 URDF와 STL을 GLB로 변환하는 스크립트 초안. 완료 검증 없음 |
| public/media/ | 최적화 이미지와 MP4. 정확한 목록은 자료 안내 참고 |
| public/demos/ | 삼성 프로젝트 가상 데이터 HTML 4개 |
| docs/media-sources.json | 변환한 자료의 경로와 해시 목록 |

`src/pages/`, `src/components/`, `src/layouts/`, `src/styles/` 등 디렉터리는 만들었으나 웹 페이지 구현 파일은 없다. `package.json`의 test 명령이 가리키는 `scripts/verify-site.mjs`도 아직 없으므로 테스트 명령이 준비됐다고 간주하지 않는다.

초기 설치 환경은 Node.js 24.20.0, npm 11.19.0이었다. 설치된 package.json에는 Astro 7.4.13, TypeScript 6.0.3, Three.js 0.187.0, Sharp 0.35.5, Playwright 1.65.1과 Noto Sans KR 및 Manrope 폰트가 기재돼 있다. 이를 배포 검증을 마친 조합으로 해석하지 않는다. 초안을 가져오면 package-lock.json으로 설치하고 로컬에서 확인한다.

## 로컬로 자료를 가져오는 방법

문서는 Git으로 받는다.

```bash
git clone https://github.com/Michael3252/Michael3252.github.io.git
cd Michael3252.github.io
```

아래 명령은 **사용자 컴퓨터의 터미널에서** 실행한다. `YOUR_LIGHTSAIL_HOST`를 평소 SSH로 접속하던 서버 주소 또는 호스트 별칭으로 바꾼다. SSH 키가 별도로 필요하면 평소 사용하는 SSH 설정을 적용한다. 아래 명령은 서버에서 새로 변환하거나 빌드하지 않고 기존 파일만 가져온다.

먼저 준비된 미디어와 삼성 HTML 사본을 가져오면 원본을 모두 다시 변환할 필요가 없다.

```bash
scp -r ubuntu@YOUR_LIGHTSAIL_HOST:/home/ubuntu/workspace/resume/portfolio-site/public .
```

구현 초안도 재사용하려면 필요한 파일만 추가로 가져온다. Git 메타데이터, node_modules와 서버의 설정 폴더는 복사하지 않는다.

```bash
scp ubuntu@YOUR_LIGHTSAIL_HOST:/home/ubuntu/workspace/resume/portfolio-site/package.json .
scp ubuntu@YOUR_LIGHTSAIL_HOST:/home/ubuntu/workspace/resume/portfolio-site/package-lock.json .
scp ubuntu@YOUR_LIGHTSAIL_HOST:/home/ubuntu/workspace/resume/portfolio-site/astro.config.mjs .
scp ubuntu@YOUR_LIGHTSAIL_HOST:/home/ubuntu/workspace/resume/portfolio-site/tsconfig.json .
scp ubuntu@YOUR_LIGHTSAIL_HOST:/home/ubuntu/workspace/resume/portfolio-site/.gitignore .
scp -r ubuntu@YOUR_LIGHTSAIL_HOST:/home/ubuntu/workspace/resume/portfolio-site/src .
scp -r ubuntu@YOUR_LIGHTSAIL_HOST:/home/ubuntu/workspace/resume/portfolio-site/scripts .
scp ubuntu@YOUR_LIGHTSAIL_HOST:/home/ubuntu/workspace/resume/portfolio-site/docs/media-sources.json ./docs/
```

원본이 필요하면 전체 공용 폴더를 복사하기보다 `docs/assets.md`의 해당 자료만 가져온다. 특히 원본 ZIP은 약 189MB다. 다른 기업 지원서나 연락처 원본, 개인 계정 설정을 공개 저장소에 복사하지 않는다.

## 로컬에서 이어서 할 일

1. 초안 재사용 여부를 정하고 Astro와 TypeScript 정적 사이트를 준비한다. 초안을 가져왔다면 의존성을 로컬에서 설치한다.
2. 콘텐츠 기준을 구조화한 프로젝트 데이터로 옮긴다. 전체 목록을 먼저 반영하고 대표 6개 상세 글을 작성한다.
3. 홈, 프로젝트 목록과 상세, 인쇄 가능한 이력서를 구현한다. 아직 빈 경로에 링크만 연결해 두지 않는다.
4. 준비된 이미지와 HTML, 영상의 표시를 확인한다. 영상은 재생 길이와 끝부분까지 확인한다.
5. Interface Map 화면을 추가 캡처하고, 필요하면 DRIFT의 기존 데모를 로컬에서 실행해 화면을 확보한다.
6. SO-ARM101 공식 모델을 변환한다. 3D 렌더링은 나머지 작업과 동시에 돌리지 않고 정적 대표 이미지를 먼저 준비한다.
7. 접근성, 모바일, 링크, 인쇄, 실제 영상과 모델 로딩을 브라우저에서 확인한다.
8. GitHub Actions와 GitHub Pages를 설정하고 빌드와 배포 결과를 실제로 검증한다.

## 부하와 중단 기록

작업 당시 패키지 설치, 사진 변환, 175MB 영상 압축, Chromium 화면 캡처 준비, SO-ARM101 형상 처리를 병렬로 진행했다. 부하를 유발할 수 있는 작업들이 겹친 것은 사실이다. 어느 프로세스가 장애를 일으켰는지 또는 OOM이 발생했는지는 확인하지 않았다.

중단 후 확인한 서버 메모리는 약 1.9GB이고 스왑은 없었다. 서버가 재기동된 상태에서 확인한 프로세스 목록에는 작업용 Chromium과 영상 인코더가 남아 있지 않았다. 보조 작업도 중단했다.

이 Lightsail에서 무거운 작업을 다시 수행하지 않는다. 로컬에서는 먼저 일반 화면과 콘텐츠를 만들고, 미디어 변환과 3D 작업을 하나씩 실행한다. 개발 서버와 브라우저도 작업에 필요한 만큼만 띄운다.
