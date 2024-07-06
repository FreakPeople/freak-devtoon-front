# 베이스 이미지로 Node.js 사용
FROM node

# 작업 디렉토리 설정
WORKDIR /app

# package.json복사
COPY ["package*.json","./"]

# 의존성 설치
RUN npm install

# 모든 소스 코드를 복사
COPY . .

# 앱이 3000 포트에서 실행되도록 명시화
EXPOSE 3000

# 컨테이너가 생성될 때 트리커되어야 하는 명령어
CMD ["npm", "run", "dev"]