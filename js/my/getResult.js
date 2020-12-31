var answerSet=[0,0,0,0,0,0,0,0,0,0,0,0];

var tab1 = document.querySelector('.tab1');
var tab2 = document.querySelector('.tab2');
var tab3 = document.querySelector('.tab3');
var tab4 = document.querySelector('.tab4');
var tab5 = document.querySelector('.tab5');
var tab6 = document.querySelector('.tab6');
var tab7 = document.querySelector('.tab7');
var tab8 = document.querySelector('.tab8');
var tab9 = document.querySelector('.tab9');
var tab10 = document.querySelector('.tab10');
var tab11 = document.querySelector('.tab11');
var tab12 = document.querySelector('.tab12');

var btn1 = tab1.querySelectorAll('p');
var btn2 = tab2.querySelectorAll('p');
var btn3 = tab3.querySelectorAll('p');
var btn4 = tab4.querySelectorAll('p');
var btn5 = tab5.querySelectorAll('p');
var btn6 = tab6.querySelectorAll('p');
var btn7 = tab7.querySelectorAll('p');
var btn8 = tab8.querySelectorAll('p');
var btn9 = tab9.querySelectorAll('p');
var btn10 = tab10.querySelectorAll('p');
var btn11 = tab11.querySelectorAll('p');
var btn12 = tab12.querySelectorAll('p');

for (let i = 0; i < 2; i++) {
  btn1[i].onclick = function() {

    var c = 0;
    while (c < btn1.length) {
      btn1[c].className = '';
      c++;
    }

    btn1[i].className = 'p-active';
    answerSet[0]=btn1[i].dataset.answer;
  };
}
for (let i = 0; i < 2; i++) {
  btn2[i].onclick = function() {

    var c = 0;
    while (c < btn2.length) {
      btn2[c].className = '';
      c++;
    }

    btn2[i].className = 'p-active';
    answerSet[1]=btn2[i].dataset.answer;
  };
}
for (let i = 0; i < 2; i++) {
  btn3[i].onclick = function() {

    var c = 0;
    while (c < btn3.length) {
      btn3[c].className = '';
      c++;
    }

    btn3[i].className = 'p-active';
    answerSet[2]=btn3[i].dataset.answer;
  };
}
for (let i = 0; i < 2; i++) {
  btn4[i].onclick = function() {

    var c = 0;
    while (c < btn4.length) {
      btn4[c].className = '';
      c++;
    }

    btn4[i].className = 'p-active';
    answerSet[3]=btn4[i].dataset.answer;
  };
}
for (let i = 0; i < 2; i++) {
  btn5[i].onclick = function() {

    var c = 0;
    while (c < btn5.length) {
      btn5[c].className = '';
      c++;
    }

    btn5[i].className = 'p-active';
    answerSet[4]=btn5[i].dataset.answer;
  };
}
for (let i = 0; i < 2; i++) {
  btn6[i].onclick = function() {

    var c = 0;
    while (c < btn6.length) {
      btn6[c].className = '';
      c++;
    }

    btn6[i].className = 'p-active';
    answerSet[5]=btn6[i].dataset.answer;
  };
}
for (let i = 0; i < 2; i++) {
  btn7[i].onclick = function() {

    var c = 0;
    while (c < btn7.length) {
      btn7[c].className = '';
      c++;
    }

    btn7[i].className = 'p-active';
    answerSet[6]=btn7[i].dataset.answer;
  };
}
for (let i = 0; i < 2; i++) {
  btn8[i].onclick = function() {

    var c = 0;
    while (c < btn8.length) {
      btn8[c].className = '';
      c++;
    }

    btn8[i].className = 'p-active';
    answerSet[7]=btn8[i].dataset.answer;
  };
}
for (let i = 0; i < 2; i++) {
  btn9[i].onclick = function() {

    var c = 0;
    while (c < btn9.length) {
      btn9[c].className = '';
      c++;
    }

    btn9[i].className = 'p-active';
    answerSet[8]=btn9[i].dataset.answer;
  };
}
for (let i = 0; i < 2; i++) {
  btn10[i].onclick = function() {

    var c = 0;
    while (c < btn10.length) {
      btn10[c].className = '';
      c++;
    }

    btn10[i].className = 'p-active';
    answerSet[9]=btn10[i].dataset.answer;
  };
}
for (let i = 0; i < 2; i++) {
  btn11[i].onclick = function() {

    var c = 0;
    while (c < btn11.length) {
      btn11[c].className = '';
      c++;
    }

    btn11[i].className = 'p-active';
    answerSet[10]=btn11[i].dataset.answer;
  };
}
for (let i = 0; i < 2; i++) {
  btn12[i].onclick = function() {

    var c = 0;
    while (c < btn12.length) {
      btn12[c].className = '';
      c++;
    }

    btn12[i].className = 'p-active';
    answerSet[11]=btn12[i].dataset.answer;
  };
}

function isAnswered(element) {
  return element > 0;
}

function getResultAfterTimeout() {
  if(getMBTI(answerSet)=='istj' || getMBTI(answerSet)=='isfj') {
    if(target=='dog') {
      location.href='resultid=1';
    } else {
      location.href='resultid=9';
    }
  }
  if(getMBTI(answerSet)=='infj' || getMBTI(answerSet)=='intj') {
    if(target=='dog') {
      location.href='resultid=2';
    } else {
      location.href='resultid=10';
    }
  }
  if(getMBTI(answerSet)=='istp' || getMBTI(answerSet)=='isfp') {
    if(target=='dog') {
      location.href='resultid=3';
    } else {
      location.href='resultid=11';
    }
  }
  if(getMBTI(answerSet)=='infp' || getMBTI(answerSet)=='intp') {
    if(target=='dog') {
      location.href='resultid=4';
    } else {
      location.href='resultid=12';
    }
  }
  if(getMBTI(answerSet)=='estp' || getMBTI(answerSet)=='esfp') {
    if(target=='dog') {
      location.href='resultid=5';
    } else {
      location.href='resultid=13';
    }
  }
  if(getMBTI(answerSet)=='enfp' || getMBTI(answerSet)=='entp') {
    if(target=='dog') {
      location.href='resultid=6';
    } else {
      location.href='resultid=14';
    }
  }
  if(getMBTI(answerSet)=='estj' || getMBTI(answerSet)=='esfj') {
    if(target=='dog') {
      location.href='resultid=7';
    } else {
      location.href='resultid=15';
    }
  }
  if(getMBTI(answerSet)=='enfj' || getMBTI(answerSet)=='entj') {
    if(target=='dog') {
      location.href='resultid=8';
    } else {
      location.href='resultid=16';
    }
  }
}

var submitBtn = document.getElementById('submitbtn');

submitBtn.onclick = function() {
  if(answerSet.every(isAnswered)) {
      $(window).scrollTop(0);
      document.querySelector('.formnotice').style.display="none";
      document.querySelector('.formwrapper').style.display="none";
      document.querySelector('.ad-bottom').style.display="none";
      document.querySelector('footer').style.display="none";
      document.querySelector('.loading').style.display="block";
      setTimeout(getResultAfterTimeout,1500);
  }else{
      alert('모든 문항에 답변해주세요!');
  }
}