var fixedmbti=''

if(rid==1) {
    fixedmbti='istj'
}
if(rid==2) {
    fixedmbti='infj'
}
if(rid==3) {
    fixedmbti='istp'
}
if(rid==4) {
    fixedmbti='infp'
}
if(rid==5) {
    fixedmbti='estp'
}
if(rid==6) {
    fixedmbti='enfp'
}
if(rid==7) {
    fixedmbti='estj'
}
if(rid==8) {
    fixedmbti='enfj'
}

var resultName=[];
var resultEName=[];
var resultDescription=[];
var resultActivity=[];
var resultAttract=[];
var resultIntimacy=[];
var resultLoyalty=[];
var resultSmart=[];

//매칭시키기
for(let i=0;i<cats.length;i++) {
    if(cats[i].match1==fixedmbti || cats[i].match2==fixedmbti) {
        if(typeof(resultName[0]) == 'undefined') {
            resultName[0]=cats[i].name;
            resultEName[0]=cats[i].ename;
            resultDescription[0]=cats[i].description;
            resultActivity[0]=cats[i].activity*20;
            resultAttract[0]=cats[i].attract*20;
            resultIntimacy[0]=cats[i].intimacy*20;
            resultLoyalty[0]=cats[i].loyalty*20;
            resultSmart[0]=cats[i].smart*20;
        } else {
            resultName[1]=cats[i].name;
            resultEName[1]=cats[i].ename;
            resultDescription[1]=cats[i].description;
            resultActivity[1]=cats[i].activity*20;
            resultAttract[1]=cats[i].attract*20;
            resultIntimacy[1]=cats[i].intimacy*20;
            resultLoyalty[1]=cats[i].loyalty*20;
            resultSmart[1]=cats[i].smart*20;
        }
    }
}

//html에 삽입
var mc = document.getElementById('matched-cat');
mc.insertAdjacentHTML('beforeend', resultName[0]+', '+resultName[1]);

var name1 = document.getElementById('name-1');
name1.insertAdjacentHTML('afterbegin', resultName[0]);
var ename1 = document.getElementById('ename-1');
ename1.insertAdjacentHTML('afterbegin', resultEName[0]);
var img1 = document.getElementById('img-1');
img1.insertAdjacentHTML('afterbegin', '<img src="img/profile/cat/'+resultName[0]+'.jpg" alt="'+resultName[0]+'" width="200px">');
var desc1 = document.getElementById('desc-1');
desc1.insertAdjacentHTML('afterbegin', resultDescription[0]);

var activity1 = document.getElementById('activity-1');
activity1.insertAdjacentHTML('afterbegin', getGraphHTML(resultActivity[0]));
var attract1 = document.getElementById('attract-1');
attract1.insertAdjacentHTML('afterbegin', getGraphHTML(resultAttract[0]));
var intimacy1 = document.getElementById('intimacy-1');
intimacy1.insertAdjacentHTML('afterbegin', getGraphHTML(resultIntimacy[0]));
var loyalty1 = document.getElementById('loyalty-1');
loyalty1.insertAdjacentHTML('afterbegin', getGraphHTML(resultLoyalty[0]));
var smart1 = document.getElementById('smart-1');
smart1.insertAdjacentHTML('afterbegin', getGraphHTML(resultSmart[0]));

var name2 = document.getElementById('name-2');
name2.insertAdjacentHTML('afterbegin', resultName[1]);
var ename2 = document.getElementById('ename-2');
ename2.insertAdjacentHTML('afterbegin', resultEName[1]);
var img2 = document.getElementById('img-2');
img2.insertAdjacentHTML('afterbegin', '<img src="img/profile/cat/'+resultName[1]+'.jpg" alt="'+resultName[1]+'" width="200px">');
var desc2 = document.getElementById('desc-2');
desc2.insertAdjacentHTML('afterbegin', resultDescription[1]);

var activity2 = document.getElementById('activity-2');
activity2.insertAdjacentHTML('afterbegin', getGraphHTML(resultActivity[1]));
var attract2 = document.getElementById('attract-2');
attract2.insertAdjacentHTML('afterbegin', getGraphHTML(resultAttract[1]));
var intimacy2 = document.getElementById('intimacy-2');
intimacy2.insertAdjacentHTML('afterbegin', getGraphHTML(resultIntimacy[1]));
var loyalty2 = document.getElementById('loyalty-2');
loyalty2.insertAdjacentHTML('afterbegin', getGraphHTML(resultLoyalty[1]));
var smart2 = document.getElementById('smart-2');
smart2.insertAdjacentHTML('afterbegin', getGraphHTML(resultSmart[1]));