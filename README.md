# REACT TYPESCRIPT PROJECT with tailwindcss 시작하기

## npx로 프로젝트 생성하기
npx create-react-app [프로젝트 명] --template typescript

## tailwindcss 설치 및 config 파일 생성
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

## tailwind.config.js 설정
content: ["./src/**/*.{html,js}"],

## css 파일에 추가 (src>styles 폴더 내에 global.css에 위치)
@tailwind base;
@tailwind components;
@tailwind utilities;
## tailwind css intelliSense 익스텐션 추가

## tailwind-styled-components 설치
npm i -D tailwind-styled-components

## 스타일 컴포넌트 사용할 파일에 아래 import 추가
import tw from "tailwind-styled-components";

## react-router-dom@6 설치
npm install react-router-dom@6

## 최상단의 index.tsx에서 <BrowserRouter> 추가

## 라우터를 메인페이지에서 지정
```
<Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
</Routes>
```

## Link와 useNavige로 원하는 페이지로 이동한다






