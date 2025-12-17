# GlobalNomad
사용자가 판매자와 체험자 역할을 모두 수행할 수 있는 플랫폼으로, 판매자는 예약 가능 일정을 설정 및 관리하고 사용자는 체험을 예약할 수 있는 기능을 제공합니다.

## 🚀 기술스택
### Frontend
- Next.js (App Router / TypeScript)
- npm
- fetch API
- TailwindCSS v4
clsx / cva / tw-merge / cn 활용
- react-query
- react-hook-form
### 배포
Vercel
### SDK
- Kakao Calendar API
- Kakao Maps SDK
### Authentication
- OAuth
### Code Quality
- ESLint
- Prettier
- Husky

## Branch Strategy — GitHub Flow

main: 배포 및 코드 기준 브랜치
작업 브랜치
- feature/
- refactor/
- fix/

### 브랜치 네이밍

{작업타입}/{이슈번호}/{작업내용}
예: feature/46/gnb-redesign

## Issue / Milestone
### 작업 플로우
1. 이슈 생성 및 작업 정의
2. main 브랜치 기준으로 작업 브랜치 생성
3. 컨벤션 기반 커밋
4. main으로 Pull Request 생성
5. 리뷰 + 승인 최소 1명 필수
6. Merge → 브랜치 삭제

### Milestone

- 프로젝트 기초 세팅
- 공통 컴포넌트
- 페이지 구현 (로그인, 회원가입, 메인, 체험 상세, 내 정보, 예약 목록, 리뷰, 체험 등록/수정, 예약 현황 등)
- QA

## Pull Request 규칙

- main에 직접 push ❌
- PR 단위는 작게 (1 기능 = 1 PR)
- 최소 1명 리뷰/승인 필수
- Merge 방식: Squash 권장

### 코드 리뷰 기준

- use client/server 여부
- 비효율 개선 제안
- 기능/UI 피드백
- 컴포넌트 책임/분리
- AI 코드리뷰 활용 (Gemini)

## Commit Convention

gitmoji 기반
```
예시:
🎉 Init
✨ Feat
🐛 Fix
♻️ Refactor
⚙️ Chore
📄 Docs
```

## 🏷 Labels

- Feature
- Bug
- Refactor
- Docs
- Chore
- Help
- Etc


## Issue

- Feature
- Bug
- Refactor
- Docs
- Chore

## Naming & Rule
### 함수
동사 + 목적어
> 예: handleClick, getUser, updateProfile
### 상수 / ENV
> SNAKE_CASE  
PAGE_SIZE = 3
### 디렉토리/파일
kebab-case
컴포넌트: PascalCase

## 🧾 문서 & 주석
TODO: 미완성 작업 표시  
TSDoc: 추가 설명
