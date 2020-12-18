function getResultPageHTML(species, animal) {
    result = '<div class="resultname">'+animal.name+'</div><div class="resultimg"><img src="img/profile/'+species+'/'+animal.name+'.jpg" alt="'+animal.name+'" width="200px"></div><div class="resultdesc">'+animal.description+'</div><div class="properties d-flex"><div class="axis"><ul><li class="axisname">활동성</li><li class="axisname">애교</li><li class="axisname">친화력</li><li class="axisname">충성심</li><li class="axisname">똑똑함</li></ul></div><div class="graph flex-grow-1"><div class="progress" style="height:20px;font-size: 0.8rem;margin-bottom: 2.5px;"><div class="progress-bar bg-'+getBgColor(animal.activity*20)+' progress-bar-striped" style="width: '+String(animal.activity*20)+'%;height: 20px;text-align: right;padding-right: 5px;">'+String(animal.activity*20)+'%</div></div><div class="progress" style="height:20px;font-size: 0.8rem;margin-bottom: 2.5px;"><div class="progress-bar bg-'+getBgColor(animal.attract*20)+' progress-bar-striped" style="width: '+String(animal.attract*20)+'%;height: 20px;text-align: right;padding-right: 5px;">'+String(animal.attract*20)+'%</div></div><div class="progress" style="height:20px;font-size: 0.8rem;margin-bottom: 2.5px;"><div class="progress-bar bg-'+getBgColor(animal.intimacy*20)+' progress-bar-striped" style="width: '+String(animal.intimacy*20)+'%;height: 20px;text-align: right;padding-right: 5px;">'+String(animal.intimacy*20)+'%</div></div><div class="progress" style="height:20px;font-size: 0.8rem;margin-bottom: 2.5px;"><div class="progress-bar bg-'+getBgColor(animal.loyalty*20)+' progress-bar-striped" style="width: '+String(animal.loyalty*20)+'%;height: 20px;text-align: right;padding-right: 5px;">'+String(animal.loyalty*20)+'%</div></div><div class="progress" style="height:20px;font-size: 0.8rem;margin-bottom: 2.5px;"><div class="progress-bar bg-'+getBgColor(animal.smart*20)+' progress-bar-striped" style="width: '+String(animal.smart*20)+'%;height: 20px;text-align: right;padding-right: 5px;">'+String(animal.smart*20)+'%</div></div></div></div>';

    return result;
}

var getTableDog=document.querySelectorAll('.doglist table tr td');
var getTableCat=document.querySelectorAll('.catlist table tr td');
var detailWrap=document.getElementsByClassName('detailwrap');

for(let i=0;i<32;i++) {
    if(i<16) {
        result=
        getTableDog[i].insertAdjacentHTML('afterbegin', '<a href="#'+String(i)+'">'+dogs[i].name+'</a>');
        detailWrap[i].insertAdjacentHTML('afterbegin', getResultPageHTML('dog',dogs[i]));
    } else {
        getTableCat[i-16].insertAdjacentHTML('afterbegin', '<a href="#'+String(i)+'">'+cats[i-16].name+'</a>');
        detailWrap[i].insertAdjacentHTML('afterbegin', getResultPageHTML('cat',cats[i-16]));
    }
}