[1 박스 트리](#ch1) [2 박스 모델](#ch2) [3 가로 방정식](#ch3) [4 퍼센트](#ch4) [5 인라인과 블록](#ch5) [6 margin 겹침](#ch6) [7 flex](#ch7) [8 디버깅](#ch8)

# CSS 배치 원리

속성의 뜻을 외우는 대신, 브라우저가 박스의 크기와 위치를 어떤 순서로 계산하는지 따라가는 자료입니다. 각 장의 실험 화면은 실제 HTML과 CSS로 그려져 있고, 표시되는 숫자는 브라우저가 계산한 결과를 읽어 온 값입니다. 슬라이더를 움직여 보면서 읽으세요.

margin border padding content

## 1모든 요소는 박스 하나가 된다

브라우저는 HTML을 읽어 태그의 부모와 자식 관계를 트리로 만들고, CSS를 적용해 요소마다 크기와 위치를 계산합니다. 계산이 끝나면 요소 하나가 직사각형 박스 하나가 되고, 자식 박스는 부모 박스 안에 놓입니다. 화면의 모든 배치는 이 박스들을 어떤 규칙으로 늘어놓느냐의 문제입니다.

1. HTML을 파싱해 요소의 부모·자식 관계를 트리(DOM)로 만듭니다.
2. CSS 규칙을 요소에 맞춰 적용해 요소별 최종 스타일을 정합니다.
3. **레이아웃**: 각 박스의 크기와 위치를 계산합니다. 이 자료가 다루는 단계입니다.
4. 계산된 위치에 색과 글자를 그립니다.

```
<body>
  <div class="card">
    <h3>제목</h3>
    <p>문장 속의 <span>강조</span> 단어</p>
  </div>
</body>
```

### 제목

문장 속의 강조 단어

왼쪽 코드를 그리면 오른쪽처럼 박스가 겹쳐서 들어갑니다. 파란 선이 각 요소의 박스 경계입니다. `div`, `h3`, `p`는 부모의 폭을 채우며 위에서 아래로 쌓이고, `span`은 `p`의 글줄 안에 글자처럼 놓입니다.

**포함 블록.** 자식의 폭, 위치, 퍼센트 값은 가장 가까운 block 부모의 content 영역을 기준으로 계산됩니다. 이 자료에서 말하는 "기준"은 대부분 이 영역입니다.

## 2박스 모델: 네 겹의 구조

박스 하나는 안쪽부터 content, padding, border, margin 네 겹입니다. padding에는 요소의 배경색이 칠해지고, margin은 border 바깥의 투명한 여백입니다. border가 0px이어도 경계는 두께가 0인 선으로 존재하기 때문에, 선이 보이지 않아도 padding과 margin은 구분됩니다.

box-sizing content-box border-box

width padding border margin

content

```

```

기본값인 `content-box`에서 `width`는 content의 폭만 가리킵니다. padding과 border가 그 바깥에 더해지므로 `width: 200px`인 박스가 실제로는 더 넓어집니다. `border-box`에서는 `width`가 border까지 포함한 박스 전체 폭이라서, 지정한 값이 눈에 보이는 폭과 같습니다. 그래서 `* { box-sizing: border-box; }`를 맨 앞에 적어 두는 경우가 많습니다.

해 볼 것: box-sizing을 바꿔 가며 박스 폭과 content 폭이 어떻게 달라지는지 보세요. width를 80으로 줄이고 border-box에서 padding을 48까지 올리면 지정한 width를 지킬 수 없게 됩니다.

## 3block 요소의 가로 방정식

block 요소의 가로 배치에는 등식이 하나 있습니다. 가로 방향의 일곱 값을 모두 더하면 부모의 content 폭과 같아야 합니다. 브라우저는 값이 `auto`인 항목을 이 등식이 맞도록 채웁니다.

```
margin-left + border-left + padding-left + width
  + padding-right + border-right + margin-right  =  부모 content 폭
```

아래 실험은 자식의 border와 padding을 0으로 두어 margin과 width 세 값만 남겼습니다. 막대는 부모 폭을 그대로 옮긴 것이고, 오른쪽 검은 선이 부모의 오른쪽 끝입니다.

width auto 고정

width margin-left [ ] margin-left: auto margin-right [ ] margin-right: auto

child

위: 부모 · 아래: 계산된 가로 구성

- width가 `auto`이면 남는 공간을 content가 채웁니다. margin-right를 키우면 박스가 좁아질 뿐 부모보다 커지지 않습니다.
- width를 고정하고 margin도 모두 지정하면 합이 맞지 않을 수 있습니다. 왼쪽에서 오른쪽으로 쓰는 문서에서는 margin-right 지정값을 버리고 남는 값으로 다시 계산합니다. 그래서 margin-right를 아무리 키워도 박스는 margin-left 위치에서 시작하고 크기도 변하지 않습니다.
- width가 고정이고 margin-left와 width의 합이 부모보다 크면 박스가 부모 밖으로 넘칩니다. "자식이 부모보다 클 수 있다"는 말은 이 경우를 가리킵니다.
- `margin: 0 auto`가 가운데 정렬이 되는 이유는 width가 고정일 때 양쪽 auto margin이 남는 공간을 똑같이 나눠 갖기 때문입니다.

세로 방향에는 이런 등식이 없습니다. 높이는 내용이 정하고, 세로 margin은 다음 박스를 밀어낼 뿐입니다. 세로 margin에만 적용되는 겹침 규칙은 6장에서 다룹니다.

## 4퍼센트는 무엇의 몇 퍼센트인가

`width: 50%`는 부모 content 폭의 50%입니다. 헷갈리기 쉬운 쪽은 margin과 padding의 퍼센트입니다. 위아래 값도 부모의 높이가 아니라 부모의 폭을 기준으로 계산합니다.

부모 폭 자식 width 자식 padding-top

child

| 속성 | 퍼센트의 기준 |
| --- | --- |
| `width: %` | 포함 블록의 content 폭 |
| `margin: %`, `padding: %` (네 방향 모두) | 포함 블록의 content 폭 |
| `height: %` | 포함 블록의 height. 부모 높이가 내용에 따라 정해지는 auto이면 무시되어 auto처럼 동작 |
| `position: absolute`의 `top`, `left` | position이 지정된 가장 가까운 조상의 padding 영역 |
| `margin: auto` | 가로 방향의 남는 공간 |

## 5인라인과 블록

block 박스는 앞뒤로 줄을 바꾸며 아래로 쌓입니다. inline 박스는 글자처럼 줄 안에 놓이고, 줄 끝에 닿으면 다음 줄로 이어집니다. 그래서 inline 요소에는 크기를 지정할 수 없고, 한 요소가 두 조각으로 나뉘기도 합니다. inline-block은 줄 안에 글자처럼 놓이면서 안쪽은 block처럼 크기를 가집니다.

display inline inline-block block

width padding 위아래 padding 좌우 margin 위아래 margin 좌우

브라우저는 글자를 왼쪽에서 오른쪽으로 놓다가 줄 끝에 닿으면 다음 줄로 이어지는 대상 요소 뒤에 오는 글자는 이 요소 바로 뒤에서 계속 배치됩니다.

한 줄의 높이는 그 줄에 놓인 박스들이 정합니다. inline 요소의 위아래 padding은 그려지기만 하고 줄 높이에는 들어가지 않아서 위아래 줄과 겹칠 수 있습니다. 링크(`a`)에 위아래 padding을 줬는데 주변이 밀리지 않았다면 이 때문입니다. 위아래 여백이 필요하면 inline-block이나 block으로 바꿉니다.

## 6margin 겹침

세로 방향으로 맞닿은 margin은 더해지지 않고 하나로 합쳐지며, 합쳐진 값은 둘 중 큰 쪽입니다. 형제 사이에서만 일어나는 것이 아니라 부모와 첫째 자식 사이에서도 일어나기 때문에, 자식의 `margin-top`이 부모 바깥으로 새어 나오는 것처럼 보입니다.

실험 형제 사이 부모와 자식

A margin-bottom B margin-top [ ] 부모에 display: flex, flex-direction: column

자식 margin-top 부모에 적용할 것

A

B

위쪽 기준 요소

자식

겹침은 일반 흐름 안의 block 박스끼리, 세로로 맞닿았을 때만 일어납니다. 가로 margin, flex나 grid 항목 사이, 부모와 자식 사이에 padding이나 border가 끼어 있는 경우, 부모가 `overflow`(visible 이외), `flow-root`, flex 등으로 새 서식 문맥을 만드는 경우에는 겹치지 않습니다.

## 7flex로 가로 배치하기

div가 가로로 나란히 놓인 사이트는 대부분 부모에 `display: flex`가 적용되어 있습니다. flex는 부모 안에서 자식 박스를 한 방향(주축)으로 늘어놓는 배치 방식입니다. 자식은 여전히 박스 모델을 가지고 margin과 padding도 그대로 적용됩니다. 바뀌는 것은 박스를 놓는 규칙입니다.

display block flex

flex-direction row column

justify-content align-items gap item margin [ ] B에 flex: 1

A

B\
두 줄

C

```

```

`justify-content`는 주축 방향의 남는 공간을 나눠 갖는 방식을 정하고, `align-items`는 주축에 수직인 방향(교차축)에서의 위치를 정합니다. `flex-direction`을 `column`으로 바꾸면 두 축이 서로 바뀌므로, `justify-content`가 항상 가로 정렬인 것은 아닙니다.

## 8배치가 이상할 때 확인하는 순서

- 브라우저에서 요소를 우클릭해 **검사**를 열고 요소를 고르면, 오른쪽 Computed 탭에 이 자료와 같은 색의 박스 모델 그림이 나옵니다. 숫자를 눌러 바로 고쳐 볼 수 있습니다.
- 박스 경계를 눈으로 보려면 `* { outline: 1px solid red; }`를 임시로 넣습니다. outline은 자리를 차지하지 않아 배치가 변하지 않습니다. border로 확인하면 박스 크기가 바뀌어 원인을 흐리게 됩니다.
- 기준이 되는 부모가 누구인지부터 찾습니다. 폭, 퍼센트, 위치는 모두 부모의 content 영역에서 출발합니다.

[ ] 이 페이지의 모든 요소에 outline 적용해 보기

막혔을 때 스스로 물어볼 것은 네 가지입니다.

- 이 요소는 block인가 inline인가? 크기가 안 먹으면 inline일 수 있습니다.
- 부모에 flex나 grid가 있는가? 있다면 자식은 그 규칙을 따릅니다.
- width는 auto인가 고정인가? auto라면 남는 공간을 채우고 있는 것입니다.
- 세로 간격이 생각보다 작거나 크다면 margin이 겹치거나 부모 밖으로 새어 나간 것은 아닌가?