# 프로젝트 폴더 구조

### 폴더 및 파일 설명

#### `public/`
- **`index.html`**: 메인 HTML 파일. CDN 링크, 메타 정보 등을 추가합니다. 이 파일은 웹 서버가 직접 제공하며, Vue의 진입점 역할을 합니다.
- **정적 파일**: `public/` 폴더에 위치한 파일들은 이미지, 폰트, favicon 등을 포함하며, 별도의 Webpack 처리 없이 그대로 서빙됩니다.

#### `src/`
프로젝트의 실제 소스 코드가 위치하는 폴더입니다. 모든 Vue 컴포넌트와 로직이 여기에 포함됩니다.

- **`assets/`**
  - 이미지, CSS, 폰트 등 정적 자원을 관리합니다. Webpack을 통해 로드되며, 규모가 클 경우 하위 폴더로 분류할 수 있습니다.
  - 예시: `src/assets/styles/`, `src/assets/images/`

- **`components/`**
  - 재사용 가능한 Vue 컴포넌트들을 관리합니다. 컴포넌트는 작게 나누어 유지보수성을 높일 수 있으며, 규모가 커질 경우 도메인별로 서브 폴더를 만들어 관리합니다.
  - 예시: `src/components/Button.vue`, `src/components/Card.vue`

- **`views/`**
  - 각 라우터에 대응하는 페이지 단위의 컴포넌트들을 관리합니다. 일반적으로 한 페이지에 여러 컴포넌트가 포함되기 때문에 페이지 단위로 분리하여 관리하는 것이 좋습니다.
  - 예시: `src/views/Home.vue`, `src/views/About.vue`

- **`router/`**
  - 라우팅 관련 설정을 담당하는 파일들이 위치합니다. Vue Router를 사용하여 각 경로에 페이지 컴포넌트를 매핑하는 설정 파일을 포함합니다.
  - 예시: `src/router/index.js`

- **`store/`**
  - 상태 관리를 위한 Vuex 스토어 파일이 위치합니다. 상태 관리는 Vuex를 통해 이루어지며, 모듈별로 나누어 관리할 수 있습니다.
  - 예시: `src/store/index.js`, `src/store/modules/auth.js`, `src/store/modules/user.js`

- **`App.vue`**
  - 전체 애플리케이션의 루트 컴포넌트입니다. 일반적으로 `router-view`를 사용하여 페이지를 교체하는 역할을 합니다.

- **`main.js`**
  - Vue 애플리케이션의 진입 파일로, Vue 인스턴스를 생성하고 `App.vue`를 마운트합니다. 전역 설정, 플러그인 설치 등이 이곳에서 이루어집니다.

## 예시 폴더 구조
```
project/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   ├── views/
│   ├── router/
│   ├── store/
│   ├── App.vue
│   └── main.js
├── package.json
└── README.md
```
---

이 구조는 프로젝트 확장성 및 유지보수성을 고려한 구조이며, 필요에 따라 커스터마이징할 수 있습니다.