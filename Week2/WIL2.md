# WIL2
## 1. JavaScript가 DOM에 어떻게 접근하고 적용될까?

### DOM
DOM(Document Object Model)은 HTML 문서의 구조를 트리 형태로 표현한 것으로, 웹 페이지의 각 요소를 객체로 나타낸다.

### JavaScript로 접근하기
'document'라는 객체를 이용하여 접근할 수 있다.
- ID로 접근하기
``` javascript
var element = document.getElementById('myElement');
```
- 클래스 이름으로 접근하기
``` javascript
var elements = document.getElementsByClassName('myClass');
```
- 태그 이름으로 접근하기
``` javascript
var elements = document.getElementsByTagName('div');
```
- CSS 선택자 이용하기
``` javascript
var element = document.querySelector('.myClass'); // 첫 번째 일치하는 요소
var elements = document.querySelectorAll('.myClass'); // 모든 일치하는 요소
```

### DOM요소 조작하기
DOM 요소에 접근한 후, 다양한 방법으로 조작할 수 있다.
- 내용 변경
    - 텍스트 내용 변경
    ``` javascript
    element.textContent = '새 텍스트 내용';
    ```
    - HTML 내용 변경
    ``` javascript
    element.innerHTML = '<span>새 HTML 내용</span>';
    ```
- 속성 변경
    - 기본 속성 변경
    ``` javascript
    element.src = 'new-image.jpg';
    ```
    - 임의 속성 변경
    ``` javascript
    element.setAttribute('data-custom', 'value');
    ```
- 스타일 변경
    - 인라인 스타일 설정
    ``` javascript
    element.style.color = 'red';
    ```
- 클래스 조작
    - 클래스 추가/제거/토글
    ``` javascript
    element.classList.add('newClass');
    element.classList.remove('oldClass');
    element.classList.toggle('activeClass');
    ```

### 이벤트 처리
DOM 요소에 이벤트 리스너를 추가하여 사용자가 페이지와 상호 작용할 수 있다.
- 이벤트 리스너 추가
    - 'addEventListener'메서드 사용
    ``` javascript
    element.addEventListener('click', function(event) {
    console.log('Element clicked!');
    });
    ```
- 이벤트 인라인 핸들러
``` html
<button onclick="alert('Clicked!')">Click Me</button>
```
나의 경우에는 이벤트 인라인 핸들러를 사용했다 하지만 유지보수 측면에서 좋지는 않다.

## 2. 브라우저를 이루는 컴포넌트 중, JavaScript Engine은 무엇이고 어떤 일을 할까?

### JavaScript Engine
JavaScript Engine은 브라우저 내에서 JavaScript 코드를 실행하는 소프트웨어 컴포넌트이다. 각 브라우저는 고유한 JavaScript 엔진을 가지고 있다.

### JavaScript Engine의 역할
1. 파싱(Parsing):
    - JavaScript 소스 코드를 읽고 구문 트리(Parse Tree) 또는 추상 구문 트리(Abstract Syntax Tree, AST)로 변환한다.
    - 이 과정에서 코드가 문법적으로 올바른지 확인한다.
1. 컴파일 (Compilation):
    - AST를 바이트코드 또는 머신 코드로 변환한다.
    - 현대 JavaScript 엔진은 Just-In-Time (JIT) 컴파일을 사용하여, 실행 시점에 코드를 컴파일하고 최적화한다.
1. 실행 (Execution):
    - 컴파일된 코드를 실행한다.
    - 실행 중에 필요한 메모리를 할당하고, 변수와 객체를 관리한다.
    - 이벤트 루프를 관리하여 비동기 코드가 올바르게 실행되도록 한다.
1. 최적화 (Optimization):
    - 코드 실행 중 수집된 데이터를 기반으로 추가 최적화를 수행한다.
    - 반복적인 코드나 핫스팟(Hotspot)을 최적화하여 성능을 개선한다.

### JavaScript 엔진의 동작 과정
1. 소스 코드 입력:
    - 브라우저는 HTML 문서 내에 포함된 '```<script>```' 태그나 외부 JavaScript 파일을 통해 JavaScript 코드를 입력받는다.
1. 파싱:
    - 엔진은 JavaScript 소스 코드를 파싱하여 AST를 생성한다.
    - 문법 오류가 있는 경우, 이 단계에서 에러를 발생시킨다.
1. 컴파일:
    - AST를 바이트코드 또는 머신 코드로 컴파일한다.
    - 일부 엔진은 인터프리터를 사용하여 AST를 직접 실행하기도 한다.
1. 실행:
    - 컴파일된 바이트코드나 머신 코드를 실행한다.
    - 변수, 함수 호출, 객체 생성 등을 처리한다.
    - 필요에 따라 JIT 컴파일러가 실행 중인 코드를 최적화한다.
1. 최적화 및 재컴파일:
    - 코드 실행 중 수집된 프로파일 데이터를 기반으로 추가 최적화를 수행한다.
    - 특정 패턴이 반복되거나 성능 병목이 발생하는 경우, 해당 부분을 최적화한다.

## 3. inline CSS가 항상 좋은 것일까? 아니라면 그 이유는 무엇일까?
inline CSS는 특정 상황에서는 유용할 수 있지만 여러가지 단점이 있어 일반적으로는 외부 스타일시트를 사용하는 것이 더 좋다.

### Inline CSS의 장점
1. 특정 요소의 스타일링
    - 한 두 개의 요소에 대해 특별한 스타일을 적용해야 할 때 유용하다.
2. 우선순위가 높음
    - 인라인 스타일은 다른 스타일 규칙보다 우선순위가 높아 특정 요소의 스타일을 강제로 적용할 수 있다.
3. 신속한 테스트
    - 간단한 스타일 변경을 빠르게 테스트할 때 유용하다.

### Inline CSS의 단점
1. 유지보수의 어려움
    - 인라인 스타일은 HTML요소 내부에 직접 작성되기 때문에, 스타일을 변경하거나 업데이트 할 때 HTML 문서의 여러 곳을 수정해야한다.
1. 코드의 가독성 저하
    - HTML 코드와 CSS 코드가 섞여 있기 때문에 코드가 길고 복잡해질 수 있다. 이는 코드의 가독성을 떨어뜨리고, 디버깅과 유지보수를 어렵게 만든다.
1. 재사용성 부족
    - 인리인 스타일은 특정 요소에만 적용되므로 동일한 스타일을 여러 요소에 적용할 수 없다.
1. 성능 문제
    - 인라인 스타일은 미디어 쿼리를 지원하지 않기 때문에, 반응형 디자인을 구현하기 어렵다.

### Inline CSS를 대체할 수 있는 방법
1. 외부 스타일 시트 사용
    - 스타일을 별도의 CSS 파일에 작성하고, HTML 문서에서 링크한다. 이는 유지보수를 쉽게 하고, 스타일을 여러 페이지에서 재사용할 수 있다.
    ``` html
    <link rel="stylesheet" href="styles.css">
    ```
1. 내부 스타일시트 사용
    - HTML문서의 '```<head>```태그 내에 '```<style>```' 태그를 사용하여 스타일을 정의한다.. 이는 한 문서 내에서만 적용되지만, 인라인 스타일보다 더 구조적이다.
1. CSS 클래스 사용
    - HTML 요소에 클래스를 추가하고, 외부 또는 내부 스타일 시트에서 해당 클래스에 스타일을 정의한다.
    ``` html
    <div class="example">Some content</div>
    ```