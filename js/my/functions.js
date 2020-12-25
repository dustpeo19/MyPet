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

function getBgColor(score) {
    if(score==100) {
        return 'primary';
    }
    if(score==80) {
        return 'info';
    }
    if(score==60) {
        return 'success';
    }
    if(score==40) {
        return 'warning';
    }
    if(score==20) {
        return 'danger';
    }
}

function getGraphHTML(score) {
    result='<div class="progress-bar bg-'+getBgColor(score)+' progress-bar-striped" style="width: '+String(score)+'%;height: 20px;text-align: right;padding-right: 5px;">'+String(score)+'%</div>';
    return result;
}