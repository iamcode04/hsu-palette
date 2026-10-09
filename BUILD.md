# HSU Palette 배포 빌드

이 프로젝트는 VS Code 확장이 아니라 Chrome/Edge Manifest V3 브라우저 확장이다.
따라서 `.vscodeignore`와 VSIX는 사용하지 않는다.

## 빌드

```powershell
npm ci
npm run build
```

결과물:

- `release/unpacked`: Chrome/Edge에서 "압축해제된 확장 프로그램을 로드"할 폴더
- `release/hsu-palette-1.1.3.zip`: 배포용 ZIP

빌드 스크립트는 다음 런타임 파일만 결과물에 포함한다.

- `manifest.json`
- 번들링과 압축(minify)을 거친 `theme.js`, `viewer.js`

Chrome 웹 스토어 정책은 코드 난독화를 금지한다(압축은 허용). 1.1.2는 난독화
때문에 거부되었으므로 난독화 도구를 다시 추가하지 않는다.
- 압축한 `theme.css`
- 아이콘, 폰트, 제3자 라이선스

원본 JavaScript, 빌드 스크립트, `package.json`, `node_modules`는 배포 ZIP에
포함되지 않는다.

## 한계

브라우저가 실행해야 하는 JavaScript와 CSS는 사용자 컴퓨터에 전달되어야 한다.
번들링과 압축은 원본 복원이나 변조를 막지 못한다. 중요한 비밀 값이나 서버 권한 검사는 확장 프로그램 코드에 두지
말고 신뢰할 수 있는 서버에서 처리해야 한다.
