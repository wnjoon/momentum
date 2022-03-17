# momentum
NomadCoder 강의를 통해 학습한 구글 익스텐션 프로그램 제작기

> lecture : [바닐라 JS로 크롬 앱 만들기](https://nomadcoders.co/javascript-for-beginners)

## Why I Learned

NodeJS를 이용한 backend 프로그래밍을 배우고 싶었고, 이를 위해 자바스크립트의 지식이 필요했음

## What I Learned

자바스크립트의 기본적인 문법  
자바스크립트를 이용해 html 파일을 작성하는 방법  
- 생성된 태그의 ID 또는 class 기반으로 해당 값을 가져와서 수정하는 방법
    - document.selectQuery
    - '#' : ID
    - '$' : Class
- form에 입력한 값에 대한 이벤트 생성
    - ${form}.addEventListener("특정 동작", 함수);
    - event.preventDefault : 이벤트가 실행된 이후에 다음동작으로 넘어가지 않고 멈춰주는 기능 
- html 클래스 생성 또는 삭제 방법 : classList를 활용하면 특정 부분의 클래스를 목록 형태로 관리 가능
localStorage를 활용한 로그인 항목 관리 
- localStorage.getItem / setItem
- localStorage는 기본적으로 문자열 형태의 값만을 key:value 형태로 저장
- 배열 형태를 문자열로 변경하려면 JSON.stringify를 사용 ([js/todo.js](js/todo.js):13)
- 문자열 형태를 배열로 변환하려면 JSON.parse를 사용 ([js/todo.js](js/todo.js):63)

## What I should know 

나는 backend에서의 자바스크립트를 배우기 위해 강의를 들었지만, 이 강의는 기본적으로 frontend를 기초로 둔다.  
사실 자바스크립트의 탄생 배경과 현재 가장 많이 사용되는 부분이 frontend 이기는 하지만, 개인적으로 css 또는 html에 대한 지식이 거의 없기 때문에 본 강의 이후에 이를 예쁘게 꾸미는 작업까지는 진행하기 어려울 것으로 보인다.

