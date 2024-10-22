#!/bin/bash

# 프로젝트 이름 설정
PROJECT_NAME=$1

# 프로젝트 이름이 입력되지 않았을 경우 예외 처리
if [ -z "$PROJECT_NAME" ]; then
  echo "프로젝트 이름을 입력해 주세요."
  echo "사용법: ./create-vue-structure.sh [프로젝트이름]"
  exit 1
fi

# Vue 프로젝트 생성 (Vue CLI가 설치되어 있어야 합니다)
echo "Vue 프로젝트를 생성합니다..."
vue create $PROJECT_NAME --default

# 프로젝트 디렉토리로 이동
cd $PROJECT_NAME || exit

# Vue Router 및 Vuex 설치
npm install vue-router@next vuex@next

# 기본 디렉토리 생성
echo "폴더 구조를 생성합니다..."

mkdir -p src/assets
mkdir -p src/assets/images
mkdir -p src/assets/styles
mkdir -p src/components/common
mkdir -p src/components/layout
mkdir -p src/views
mkdir -p src/router
mkdir -p src/locales
mkdir -p src/store
mkdir -p src/plugins
mkdir -p src/composables
mkdir -p src/utils

# 기본 파일 생성
echo "기본 파일을 생성합니다..."

# router/index.js 생성
cat <<EOL > src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
EOL

# store/index.js 생성
cat <<EOL > src/store/index.js
import { createStore } from 'vuex'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
})
EOL

# App.vue 수정
cat <<EOL > src/App.vue
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
/* 전역 스타일을 여기에 추가합니다 */
</style>
EOL

# main.js 수정
cat <<EOL > src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
EOL

# Home.vue 생성
cat <<EOL > src/views/Home.vue
<template>
  <div>
    <h1>Welcome to Home Page</h1>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style scoped>
/* 홈 페이지에 대한 스타일을 여기에 추가합니다 */
</style>
EOL

echo "폴더 구조 생성 및 기본 파일 생성이 완료되었습니다."

# 종료 메시지
echo "Vue 프로젝트가 성공적으로 생성되었습니다."
echo "프로젝트 폴더로 이동하여 개발을 시작하세요: cd $PROJECT_NAME"