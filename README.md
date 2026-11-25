# 김현석 개발자 포트폴리오

웹서비스, AI 응용과 로봇 제어 경험을 소개하는 한국어 포트폴리오입니다. Astro와 TypeScript로 홈, 전체 프로젝트 목록, 분야별 목록, 프로젝트 상세 12개, 인쇄용 이력서와 404 페이지를 생성합니다.

## 로컬 실행

Node.js 24와 npm을 사용합니다.

```bash
npm ci
npm run dev
```

개발 서버가 출력하는 로컬 주소에서 확인합니다. 프로덕션 결과를 검사하려면 다음 순서로 실행합니다.

```bash
npm run check
npm run build
npm test
npm run preview
```

## 콘텐츠와 자료

- [프로젝트 데이터](src/data/portfolio.ts)에서 프로젝트 본문, 학력, 수상, 자격과 공개 연락처를 관리합니다.
- [프로젝트 콘텐츠 기준](docs/project-content.md)에 개인 역할과 팀 결과의 근거를 정리했습니다.
- [미디어](public/media)에는 실제 서비스 캡처, 수상 및 참여 사진, JETANK 시연 영상과 구조 설명용 렌더링이 있습니다.
- [데모](public/demos)에는 가상 데이터로 구성한 삼성청년SW·AI아카데미 기업연계 프로젝트의 HTML 예시 4개가 있습니다.
- SO-ARM101은 공식 형상으로 만든 정적 이미지부터 표시합니다. UMI 상세에서 3D 모델 열기를 누르면 뷰어와 GLB가 로드됩니다. [모델 출처 및 변환 내역](public/models/so101-notice.txt)
- [작업 인계](docs/handoff.md), [계획](docs/portfolio-plan.md), [자료 안내](docs/assets.md)는 초기 문서 커밋 시점의 기록입니다.

## GitHub Pages

[배포 워크플로](.github/workflows/pages.yml)는 main 브랜치에 push하거나 수동으로 실행하면 타입 검사, 정적 빌드, 링크 및 자료 검사를 거친 dist 폴더를 GitHub Pages에 배포합니다. 저장소의 Settings → Pages에서 소스를 GitHub Actions로 지정합니다.
