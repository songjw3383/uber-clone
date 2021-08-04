# Uber-Clone
## 목적

한국 내에서도 현재까지 여러 택시 플랫폼이 생겨나고 있는 추세이며, 본인도 직접 여러 플랫폼을 사용하면서 관심이 생겨 개발을 해보기로 했다. 

또한 이 프로젝트는 유튜브 강의를 참고하여 개발하였으며 Uber의 UI를 기초로 두고 개발되었다. 그리고 지도와 경로에 관한 API는 구글 클라우드 플랫폼 내의 API를 사용하였다.

출처 ) https://www.youtube.com/watch?v=bvn_HYpix6s

- **기간** :
08.01 ~ 08.04

- **개발인원** :
1 명

- **페이지 구성 (flow chart)** 

![Uber_Flowchart](https://user-images.githubusercontent.com/56250064/128135812-b380bdf0-dd56-4539-ba76-aef22d5063c4.png)

## 개발 도구 및 환경
- Visual Studio Code
- Expo
- IPhone 12 
## 사용기술
1. React-native
2. Redux
3. Tailwind CSS 

<hr/>

*etc* 
- react-native-gesture-handler
- react-native-safe-area-context 
- @react-navigation/native ( For Navigate )
- react-native-elements ( For Icon )
- @react-navigation/stack ( Stack.Navigator / Screen )

## 상세 페이지 (진행 중)
### - 메인 페이지
<center><img src="https://user-images.githubusercontent.com/56250064/128139149-33fb7220-be94-4af2-9bd1-d8bace2af5e2.jpg" width="300"></center>

### - 맵 스크린
<center><img src="https://user-images.githubusercontent.com/56250064/128139624-a790d271-89d9-4d57-a144-3643f1b64611.jpg" width="300"></center>

### - 시연 영상
<center><img src="https://user-images.githubusercontent.com/56250064/128147852-70860d59-5f95-4772-8ae0-ad5cbe7056fb.gif" width="300"></center>

## 마무리
React JS 를 계속 공부하고 있던 와중에 React-Native 를 배우다 보니 큰 어려움은 없었지만, Tailwind-CSS 는 처음이다 보니 살짝 어려운 부분이 있었다.
하지만 이해하는데는 큰 어려움은 없었고, 단지 Class Name 만 익숙해지면 CSS를 적용하는 과정에서 많은 이점이 있을 것 같다.

그리고 이번 프로젝트에서 부족한 점은 Google의 Direction API 가 일부 국가와 지역에서는 잘 안되는 것 같았다.
또한 경로를 알려주는 개념보단 출발지로 부터 목적지 까지의 단순한 방향을 제시하는 것 같아 아쉬움이 좀 남았다.

그리하여 차라리 국내에서 사용성을 높이기 위해서는 카카오맵에서 지원하는 API를 사용하는 것이 더 장점이 클 것 같다.
