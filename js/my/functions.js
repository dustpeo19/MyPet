function getMBTI(array) {
    var e_score=0;
    var n_score=0;
    var f_score=0;
    var j_score=0;
    var mbti='';

    for(let i=0;i<array.length;i++) {
        if(i%4==0) {
            if(array[i]==1) {
                e_score++;
            }
        }
        if(i%4==1) {
            if(array[i]==1) {
                n_score++;
            }
        }
        if(i%4==2) {
            if(array[i]==1) {
                f_score++;
            }
        }
        if(i%4==3) {
            if(array[i]==1) {
                j_score++;
            }
        }
    }
    
    if(e_score>1) {
        mbti=mbti+'e';
    } else {
        mbti=mbti+'i';
    }
    if(n_score>1) {
        mbti=mbti+'n';
    } else {
        mbti=mbti+'s';
    }
    if(f_score>1) {
        mbti=mbti+'f';
    } else {
        mbti=mbti+'t';
    }
    if(j_score>1) {
        mbti=mbti+'j';
    } else {
        mbti=mbti+'p';
    }

    return mbti;
}

function makeResult(mbti) {
    //매칭시키기
    var resultName=[];
    var resultImg=[];
    var resultDescription=[];

    for(let i=0;i<dogs.length;i++) {
        if(dogs[i].match1==mbti || dogs[i].match2==mbti) {
            if(typeof(resultName[0]) == 'undefined') {
                resultName[0]=dogs[i].name;
                resultImg[0]=dogs[i].img;
                resultDescription[0]=dogs[i].description;
            } else {
                resultName[1]=dogs[i].name;
                resultImg[1]=dogs[i].img;
                resultDescription[1]=dogs[i].description;
            }
        }
    }

    //html에 삽입
    var md = document.getElementById('matched-dog');
    md.insertAdjacentHTML('beforeend', resultName[0]+', '+resultName[1]);

    var name1 = document.getElementById('name-1');
    name1.insertAdjacentHTML('afterbegin', resultName[0]);
    var img1 = document.getElementById('img-1');
    img1.insertAdjacentHTML('afterbegin', '<img src="img/profile/dog/'+resultName[0]+'.jpg" alt="'+resultName[0]+'" width="200px">');
    var desc1 = document.getElementById('desc-1');
    desc1.insertAdjacentHTML('afterbegin', resultDescription[0]);

    var name2 = document.getElementById('name-2');
    name2.insertAdjacentHTML('afterbegin', resultName[1]);
    var img2 = document.getElementById('img-2');
    img2.insertAdjacentHTML('afterbegin', '<img src="img/profile/dog/'+resultName[1]+'.jpg" alt="'+resultName[1]+'" width="200px">');
    var desc2 = document.getElementById('desc-2');
    desc2.insertAdjacentHTML('afterbegin', resultDescription[1]);
}