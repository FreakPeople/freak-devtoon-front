# 📖 데브툰 프론트 엔드 애플리케이션

## 개발 환경 구축
- back-end 와 front-end 서버를 로컬환경에서 실행시키고 테스트할 수 있습니다.
- 아래의 단계에 따라 로컬환경에서 순차적으로 실행하면 됩니다.
- docker를 컨테이너로 애플리케이션을 실행시키기 때문에 docker가 설치되어 있어야 합니다.

### 1. 프로젝트 클론
```
git clone https://github.com/FreakPeople/freak-devtoon-front.git
```

### 2. 도커 컴포즈 명령어 실행
- 터미널의 프로젝트 최상위 디렉토리에서 아래의 명령어를 실행합니다.
```
docker-compose up --build
```

### 3. 애플리케이션 종료
- 터미널의 프로젝트 최상위 디렉토리에서 아래 명령어를 실행하면 컨테이너가 삭제되고, 애플리케이션이 종료됩니다.
```
docker-compose down
```
