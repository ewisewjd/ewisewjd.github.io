
# HTML
├─ 기본 문법
├─ Semantic HTML
├─ header / nav / main / section / article / footer
├─ form / input / label
├─ img / alt
└─ anchor

----
# html 설명

## <!DOCTYPE html>

이것은 html 문서의 종류를 브라우저에게 알려주는 선언이다. 쉽게 말하면 "이문서는 html5 표준 방식으로 해석해 줘" 라고 알려주는 것과 같다 

이 선언은 html 태그가 아니다. 그래서 여는 태그와 닫는 태그가 존재하지 않는다. 그러나 이 선언을 생갹한다면 일부 브라우저가 호환성 목적의 오래된 레이아웃 해석방식으로 동작할 수 있다. 그러니 html 문서 맨위에 작성하는 습관을 들이면 된다.

## `<html lang="ko">`
`<html>`은 html 문서 전체를 감싸는 최솽위 요소이다. 

```
<html lang="ko">
    ...
</html>
```
여기서 lang="ko"는 속성(attribute)이다. 

이 속성은 화면에 한국어를 표시하는 명령이 아니다. 문서의 기본 언어가 한국어라는 것을 브라우저 , 검색엔진, 스크린 리더 등에 알려주는 것이다. 

태그 : 요소의 종류, 속성 : 요소에 추가적인 정보 제공

## `<head>`- 화면에 보이는 콘텐츠가 아닌 문서 설정

```
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>정충원 | The Voyage Begins</title>
    <meta name="description" content="정충원의 역사와 AI, 데이터 탐험 기록">

    <link rel="stylesheet" href="css/style.css">

    <script src="js/main.js" defer></script>
</head>
```

`<head>`는 문서에 관한 설정이나 리소스 정보를 담는 공간이다, 일반적으로 여기 안에 작성한 내용은 웹페이지 본문에 직접 표시 되지 않는다. 

### `<meta charset="UTF-8">`

```
<meta charset="UTF-8">
```

이것은 문서에 문자 인코딩을 지정하는 코드이다. 문자 인코딩은 컴퓨터가 문자를 바이트로 저장하고 다시 문자로 해석하는 방식을 말한다. 

이 설정이 올바르지 않으면 한국어가 깨져 보이는 문제가 생길 수 있다. 

- meta : 문서에 관한 메타데이터를 제공하는 태그
- charset: 문자 인코딩을 지정하는 속성 
- UTF-8 : 한국어 , 영어 등 다양한 문자를 표현할 수 있는 문자 인코딩

이태그는 닫는 태그 없시 사용되는 형태이다. 

### `<meta name= "viewport">`

```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

이것은 반응형 웹페이지를 만들때 매우 중요한 설정이다. 먼저 viewport는 브라우저에서 웹페이직가 표시되는 화면의 영역을 의미한다. 

- name="viewprot" : 뷰포트 관련 설정이라는 의미
- width=device-width : 뷰포트 너비를 기기 화면에 맞춤
- initial-scale=1.0 : 처음 표시할 때 확대 , 축소 비율을 1로 설정

예를 들면 모바일 기기의 화면 너비가 390css픽셀이라면 페이지가 그 너비에 맞는 기준으로 표시되게 끔 하는 것이다. 

다만 이 코드만 작성한다고 웹페이지가 자동으로 반응형이 되는것은 아니다. 

화면 크기에 맞춰 메뉴를 바꾸거나 카드의 열 수를 조정하는 작업은 css에서 해야한다. 

```
/* 예시 */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```
위와 같은 css가 실제 반응형 레이아웃을 구성하는데 사용된다. 

### `<title>`

```
<title>정충원 | The Voyage Begins</title>
```

웹페이지의 제목이다. 브라우저 탭에 표시되는 제목이고 검색 결과 등에서도 사용될 수 있다. 

여기서 주의할점은 `<title>`에 작성한 내용이 웹페이지 본문에 자동으로 표시되는것은 아니라는 것이다. 

본문에 큰제목으로 표시하고 싶다면 `<h1>`을 사용해야한다. 이것은 뒤에서 나올 섹션에서 살펴볼것이다. 

### `<meta name="description">`

```
<meta name="description" content="정충원의 역사와 AI, 데이터 탐험 기록">
```

이것은 웹페이지의 내용을 간략하게 설명하는 메타데이터이다. 

- name = "description" : 페이지 설명이라는 의미이다. 
- content = "..." :  실제 설명 내용

검색엔진이 페이지 내용을 이해하는데 참고할 수 있다. 다만 검색결과에 이 문구가 항상 그대로 표시되는 것은 아니다. 

