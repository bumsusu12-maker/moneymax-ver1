# MONEYMAX v16.8.2 — Cloudflare Workers 배포

이 버전은 Cloudflare **Workers + Static Assets** 전용입니다.

## Cloudflare GitHub 자동 배포 설정

현재 프로젝트의 배포 설정은 아래처럼 사용하면 됩니다.

- 빌드 명령: 없음
- 배포 명령: `npx wrangler deploy`
- 루트 디렉터리: `/`

`wrangler.jsonc`가 배포 설정의 기준입니다.

## GitHub에 올릴 파일

ZIP 안의 내용 전체를 저장소 루트에 올립니다.

특히 아래가 최상단에 있어야 합니다.

- `wrangler.jsonc`
- `package.json`
- `src/worker.js`
- `public/index.html`
- `public/logo-light.png`
- 기타 public 이미지

## 배포 후 확인

1. 메인 `*.workers.dev` 주소
2. `/api/rates`
3. `/api/markets`

## 로컬 테스트

```cmd
npm install
npm run dev
```

Wrangler가 출력한 localhost 주소를 브라우저에서 엽니다.

## 구조

- `public/` : 정적 웹 화면/이미지
- `src/worker.js` : `/api/rates`, `/api/markets` 처리
- `wrangler.jsonc` : Cloudflare Workers 배포/Static Assets 설정
- `_legacy_render_reference/` : 과거 Render 서버 참고용. 운영에는 사용하지 않음.
