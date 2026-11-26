import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, resolve } from "node:path";

const root = resolve("dist");
const origin = "https://michael3252.github.io";
const read = (path) => readFileSync(path, "utf8");
const sitemap = read(join(root, "sitemap.xml"));
const routes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => new URL(match[1]).pathname);
const details = routes.filter(route => /^\/projects\/[^/]+\/$/.test(route));
assert.equal(new Set(routes).size, routes.length, "사이트맵 경로 중복");
assert.equal(details.length, 10, "프로젝트 상세 수");
assert.equal(readdirSync(join(root, "demos")).filter(name => name.endsWith(".html")).length, 4);

function fileFor(url) {
  const path = decodeURIComponent(url.pathname);
  const file = join(root, path.endsWith("/") ? path + "index.html" : path);
  assert.ok(existsSync(file) && statSync(file).isFile(), "누락된 파일 " + relative(root, file));
  return file;
}

for (const route of [...routes, "/404.html"]) {
  const current = new URL(route, origin);
  const html = read(fileFor(current));
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, route + " 제목");
  for (const match of html.matchAll(/\b(?:href|src|poster)="([^"]+)"/g)) {
    const url = new URL(match[1], current);
    if (url.origin !== origin) continue;
    const target = fileFor(url);
    if (url.hash) assert.ok(read(target).includes('id="' + decodeURIComponent(url.hash.slice(1)) + '"'), route + " " + url.hash);
  }
  const ogImage = html.match(/<meta property="og:image" content="([^"]+)"/);
  assert.ok(ogImage, route + " 미리보기 이미지");
  fileFor(new URL(ogImage[1]));
}
const home = read(join(root, "index.html"));
assert.equal((home.match(/class="card-link"/g) || []).length, 6, "홈 대표 프로젝트 수");
const archive = read(join(root, "projects", "index.html"));
for (const route of details) assert.ok(archive.includes('href="' + route + '"'), "목록 누락 " + route);
assert.ok(!home.includes(".glb"), "홈에서 3D 모델 선로딩");
assert.ok(!home.includes("/media/so101.webp"), "홈에 로봇팔 구조 렌더링 노출");
const umi = read(join(root, "projects", "umi", "index.html"));
assert.doesNotMatch(umi, /<video\b|\.mp4\b/i, "UMI에는 스크린샷만 게시");
for (const [html, photos] of [
  [umi, ["umi-simulation", "umi-gripper"]],
  [read(join(root, "projects", "autonomous-taxi", "index.html")), ["taxi-road", "taxi-bev", "taxi-segmentation", "taxi-virtual-gps"]]
]) {
  for (const photo of photos) assert.ok(html.includes(`src="/media/${photo}.webp"`), "상세 사진 누락 " + photo);
}
const glb = readFileSync(join(root, "models", "so101.glb"));
assert.equal(glb.toString("ascii", 0, 4), "glTF");
assert.equal(glb.readUInt32LE(8), glb.length);
console.log(`검증 완료: 정적 페이지 ${routes.length + 1}개, 프로젝트 상세 ${details.length}개, 내부 링크와 자료, OG 이미지, 3D 모델`);
