'use strict';
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const answer = Number(
      prompt(
        this.question +
          '\n' +
          this.options.join('\n ') +
          '\n' +
          'Write option Number here'
      )
    );
    if (typeof answer === 'number' && answer < 4 && answer >= 0) {
      this.answers[answer]++;
    }
  },
};

function btnAnswer() {
  poll.registerNewAnswer();
  displayResult();
}
function displayResult() {
  console.log(poll.answers);
}
