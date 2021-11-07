<script>
  export let candidates;
  let QandA = [
    {
      Q: "Q. 디자인 시스템 도입 후 맞닥뜨리는 일반적인 문제 중 하나는 '엄격함과 OOO 사이의 어려움' 이다.",
      A: ["유연함"],
    },
    {
      Q: "Q. Recoil에서 get 및 set 콜백에 매개변수를 전달할 수 있는 selector 유틸은 OOOOOOOOOOOOOO(OOOOOO) 이다. (영어 14자 또는 영어 6자,하나만 맞아도 정답처리)",
      A: ["selectorFamily", "Family", "selectorFamily(Family)"],
    },
    {
      Q: "Q. 스크린리더가 요소를 포커스했을 때 소리내어 읽는 값은 aria-label과 같은 속성으로 정하는 OOOOOO 혹은 요소의 텍스트값인 contents 중 하나이다. (영어)",
      A: ["author"],
    },
    {
      Q: "Q. OOOOOOO OOOO 은 네트워크 호출 보류 시간으로, 크롬 브라우저에서 네트워크 요청을 전송하기 전 대기하는데 걸린 시간을 의미한다.(영어)",
      A: ["Stalled Time"],
    },
    {
      Q: "Q. API 서버로부터 전역 ID(Global ID)를 통해 타입에 관계없이 특정 객체를 가져오는 것을 OOOOOO OOOOOO OOOOOOOOOOOOOO 이라고 한다.(영어, 6자 6자 14자)",
      A: ["Global Object Identification"],
    },
    {
      //두개다 있어야함
      Q: "Q. OO응집도를 가진 컴포넌트는 이해, 의도파악, 테스트하기가 OO. (한글, 답변 ex. 라면,좋다)",
      A: ["높은", "쉽다"],
      matchingCount: 2,
    },
    {
      Q: "Q. Module Federation 관점에서 최종적으로 통합되는 컨테이너 모듈을 Host라고 부르고, Host 입장에서 Host에 통합되는 모듈들을 OOOOOO라고 부릅니다.(영어)",
      A: ["Remote"],
    },
    {
      Q: "Q. Vue 2에서는 Vue 3에서 제공되는 주요 특징인 OOOO 과 OOOOOO 를 사용할 수 있다(한글)",
      A: ["컴포지션", "타입스크립트"],
      matchingCount: 2,
    },
    {
      Q: "Q. React 를 프로그래밍 언어로 바라본다면, document.appendChild 와 같은 특정 호스트 환경의 UI를 조작하기 위한 API 는 일반적인 프로그래밍 환경에서의 OOOO 에 해당한다.(한글)",
      A: ["어셈블리"],
    },
    {
      Q: "Q. VSCode는 어플리케이션의 상태를 String ID로 표현할 수 있는 OOOOOOOOOO 를 통해 사용자에게 확장성을 제공한다.(영어, 10자)",
      A: ["ContextKey"],
    },
    {
      Q: "Q. 자바스크립트로 작성된 노드.js 프로그램의 성능을 예측하는 게 매우 어려운 건 V8 엔진이 OOO 컴파일을 하기때문이다.(영어)",
      A: ["JIT"],
    },
    {
      Q: "Q. tensorflow.js를 이용해 직접 WebGL Tensor를 만든 경우 OO (OOOOOOO OOOOOOOOOO)가 동작하지 않기 때문에, tf.dispose, tf.memory등을 이용해 메모리 관리를 직접 해줘야 한다. (영어 2자 또는 영어 7자 10자, 둘중 하나만 맞아도 정답인정)",
      A: ["GC", "Garbage Collection", "GC(Garbage Collection)"],
    },
  ];
  let elects = [];
  $: {
    let incorrectTable = [];
    elects = candidates.filter((candidate) => {
      let score = 0;
      for (const quest of Object.keys(candidate)) {
        const Q = QandA.find((q) => q.Q === quest);
        if (Q) {
          const answers = Q.A.map((t) => t.replaceAll(" ", "").toUpperCase());
          const responses = candidate[quest]
            .split(",")
            .map((t) => t.replaceAll(" ", "").toUpperCase());
          const corrects = answers.filter((t) => responses.includes(t));
          const matchingCount = Q.matchingCount || 1;
          if (corrects.length === matchingCount) {
            score += 1;
          } else {
            incorrectTable = [
              ...incorrectTable,
              {
                답: answers.toString(),
                응답: responses.toString(),
              },
            ];
          }
        }
      }
      if (score >= 6) return true;
      else return false;
    });
    console.table(incorrectTable);
  }
</script>

<slot {elects} />
