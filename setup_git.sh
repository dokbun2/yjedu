#!/bin/bash

# Git 설치 확인
if ! command -v git &> /dev/null
then
    echo "Git이 아직 설치되지 않았습니다. Xcode Command Line Tools 설치를 완료해주세요."
    exit 1
fi

echo "Git 설정을 시작합니다..."

# Git 초기화
git init
echo "✅ Git 저장소 초기화 완료"

# 사용자 정보 설정 (필요시 수정)
git config user.name "dokbun2"
git config user.email "your-email@example.com"  # 이메일 주소를 입력해주세요
echo "✅ Git 사용자 정보 설정 완료"

# GitHub 원격 저장소 추가
git remote add origin https://github.com/dokbun2/yjedu.git
echo "✅ GitHub 원격 저장소 연결 완료"

# 모든 파일 스테이징
git add .
echo "✅ 모든 파일 스테이징 완료"

# 첫 커밋
git commit -m "Initial commit: Spruce clone website

- 홈페이지 HTML 파일들 추가
- CSS 및 JavaScript 파일 포함
- 이미지 및 폰트 리소스 추가
- 가구, 패키지, 소셜워커 상세 페이지 구현"
echo "✅ 첫 커밋 생성 완료"

# main 브랜치로 변경
git branch -M main
echo "✅ main 브랜치 설정 완료"

# GitHub에 푸시
echo "GitHub에 푸시를 시작합니다..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ GitHub 푸시 완료!"
    echo ""
    echo "다음 단계: Cloudflare Pages 배포"
    echo "1. https://pages.cloudflare.com/ 접속"
    echo "2. 'Create a project' 클릭"
    echo "3. 'Connect to Git' 선택"
    echo "4. GitHub 계정 연결 후 'dokbun2/yjedu' 저장소 선택"
    echo "5. 빌드 설정:"
    echo "   - Framework preset: None"
    echo "   - Build command: (비워두기)"
    echo "   - Build output directory: /"
    echo "6. 'Save and Deploy' 클릭"
else
    echo "❌ 푸시 실패. GitHub 인증이 필요할 수 있습니다."
    echo "다음 명령어를 수동으로 실행해보세요:"
    echo "git push -u origin main"
fi