var dogs=[];
dogs[0] = {
    name: '골든 리트리버',
    description: '골든 리트리버는 충성스럽고 인내심이 강하며 믿음 가는 강아지다. 체계적이고 안정적인 환경을 좋아하는 당신에게 골든 리트리버는 든든한 동반자가 될 것이다.',
    activity: 4,
    attract: 3,
    intimacy: 4,
    loyalty: 5,
    smart: 5,
    match1: 'istj',
    match2: 'isfj'
};
dogs[1] = {
    name: '푸들',
    description: '의젓하고 낯을 가리는 당신에게 가장 좋은 친구는 푸들이다. 푸들은 반응성과 리액션이 좋아 바라보고만 있어도 당신을 활기차게 만들어 줄 것이다. 또한 인간과의 정서적 교감이 뛰어나고 애착이 많아 당신에게 무한한 에너지를 가져다줄 것이다.',
    activity: 5,
    attract: 4,
    intimacy: 5,
    loyalty: 3,
    smart: 5,
    match1: 'istj',
    match2: 'isfj'
};
dogs[2] = {
    name: '저먼 셰퍼드',
    description: '저먼 셰퍼드는 영리하고 분별력 있는 강아지이다. 당신과 마찬가지로 끈기 있고 정의로운 성격이다. 용맹하고 충성심 높은 저먼 셰퍼드는 성실하고 영감이 솟아오르는 당신과 함께할 때 최고의 시너지를 낼 것이다.',
    activity: 4,
    attract: 4,
    intimacy: 4,
    loyalty: 4,
    smart: 5,
    match1: 'infj',
    match2: 'intj'
};
dogs[3] = {
    name: '포메라니안',
    description: '논리적이고 통찰력 있는 당신과 잘 맞는 강아지는 포메라니안이다. 포메라니안은 활동적이지만 원하는 것에 대해 고집이 있다는 점에서 당신과 닮았다. 몸집이 작아 상대적으로 적은 산책과 운동량으로도 만족시킬 수 있다.',
    activity: 5,
    attract: 2,
    intimacy: 2,
    loyalty: 2,
    smart: 4,
    match1: 'infj',
    match2: 'intj'
};
dogs[4] = {
    name: '프렌치불독',
    description: '프렌치 불독은 외모와 달리 활달하고 명랑하며 믿음직스러운 강아지다. 혈기 왕성하고 사랑스러운 매력을 가지고 있다. 만능 재주꾼이며 팔방미인인 당신과 활동적이고 모험심 강한 프렌치 불독이 함께라면 무서울 게 없을 것이다!',
    activity: 5,
    attract: 3,
    intimacy: 5,
    loyalty: 4,
    smart: 4,
    match1: 'istp',
    match2: 'isfp'
};
dogs[5] = {
    name: '시바견',
    description: '자유로운 예술가 성향인 당신에게 가장 잘 어울리는 강아지는 시바견이다. 느긋하고 독립적인 성향을 가진 시바견은 당신과 꼭 닮았다. 온순하고 인내심이 강하며 충성스러워 당신의 마음에 쏙 들 것이다.',
    activity: 3,
    attract: 3,
    intimacy: 4,
    loyalty: 4,
    smart: 4,
    match1: 'istp',
    match2: 'isfp'
};
dogs[6] = {
    name: '요크셔테리어',
    description: '다정하고 주인과 꼭 붙어 있으려고 하는 요크셔테리어는 낭만적이고 감성이 풍부한 당신과 찰떡궁합! 자신이 원할 때는 극강의 애교를 부리고, 안 내키면 시크해지는 요크셔테리어는 당신 마음을 포근하게 해 줄 것이다.',
    activity: 3,
    attract: 4,
    intimacy: 4,
    loyalty: 5,
    smart: 3,
    match1: 'infp',
    match2: 'intp'
};
dogs[7] = {
    name: '시츄',
    description: '논리적이고 지적인 당신과 영리하면서도 조용한 시츄는 닮은 점이 많다. 시츄의 성격은 모든 견종 중에서 가장 온순한 편이다. 똑똑하지만 주변에 크게 신경쓰지 않는 당신은 자신도 모르게 시츄의 매력에 빠져들 것이다.',
    activity: 1,
    attract: 4,
    intimacy: 3,
    loyalty: 2,
    smart: 4,
    match1: 'infp',
    match2: 'intp'
};
dogs[8] = {
    name: '비글',
    description: '도전 정신이 강하고 스릴있는 삶을 즐기는 당신에게는 활동적이고 호기심이 많은 비글이 최고의 친구가 될 것이다. 즉흥적이고 자유분방한 비글과 함께라면 당신은 최고의 하루하루를 보낼 것이다.',
    activity: 5,
    attract: 3,
    intimacy: 5,
    loyalty: 2,
    smart: 1,
    match1: 'estp',
    match2: 'esfp'
};
dogs[9] = {
    name: '웰시코기',
    description: '웰시코기는 언제나 당신과 함께할 준비가 되어 있다. 운동을 좋아하고 애교도 많으며 활동적이고 난관에 닥쳤을 때 스스로 판단하여 해결하기 때문에 지능도 높다. 주인에 대한 충성심도 높아 언제나 낙천적인 당신에겐 웰시코기가 찰떡궁합!',
    activity: 4,
    attract: 4,
    intimacy: 4,
    loyalty: 5,
    smart: 5,
    match1: 'estp',
    match2: 'esfp'
};
dogs[10] = {
    name: '말티즈',
    description: '주변을 활기차게 하는 능력이 있는 당신과 쾌활하고 붙임성 있는 말티즈는 최고의 궁합! 활발하고 놀기를 좋아하여 주인이 집에 들어오면 방방 뛰는 모습을 볼 수 있다. 영리하고 눈치가 빨라서 당신 마음에 쏙 들 것이다.',
    activity: 5,
    attract: 3,
    intimacy: 3,
    loyalty: 2,
    smart: 2,
    match1: 'enfp',
    match2: 'entp'
};
dogs[11] = {
    name: '차우차우',
    description: '독창적이고 실행력 있는 당신에게 가장 좋은 친구는 차우차우다. 영리하고 깔끔한 차우차우는 독립적이면서도 주인에게 충성을 바친다. 자기주장이 강하다는 측면에서 당신과 꼭 닮았다.',
    activity: 4,
    attract: 3,
    intimacy: 3,
    loyalty: 5,
    smart: 4,
    match1: 'enfp',
    match2: 'entp'
};
dogs[12] = {
    name: '닥스훈트',
    description: '영리하고 똑똑한 닥스훈트는 리더십과 추진력을 가진 당신과 최고의 궁합이다. 닥스훈트는 짧은 다리를 가졌음에도 날렵한 몸놀림으로 독특한 재주를 보인다. 열정과 인내심을 두루 갖추고 민첩하게 움직이는 닥스훈트는 당신과 함께할 때 최고의 시너지를 발휘할 것이다.',
    activity: 5,
    attract: 4,
    intimacy: 4,
    loyalty: 4,
    smart: 5,
    match1: 'estj',
    match2: 'esfj'
};
dogs[13] = {
    name: '보더콜리',
    description: '현실감각이 뛰어나며 추진력 있는 당신에게는 영리하고 민첩한 보더콜리가 잘 어울린다. 열정적이고 활발하며 충성심도 높다. 지능 테스트에서 항상 최상위권을 차지하는 보더콜리는 당신 마음에 쏙 드는 강아지일 것이다.',
    activity: 5,
    attract: 3,
    intimacy: 4,
    loyalty: 4,
    smart: 5,
    match1: 'estj',
    match2: 'esfj'
};
dogs[14] = {
    name: '비숑프리제',
    description: '따뜻하고 적극적이며 사교성이 풍부한 당신은 활발하고 사고뭉치인 비숑프리제와 잘 어울린다. 항상 에너지가 넘치는 비숑프리제와 함께라면 자다가도 벌떡 일어날 수 있다! 적응력이 뛰어나 어디든 데리고 다닐 수 있는 비숑프리제는 당신에게 최고의 친구가 될 것이다.',
    activity: 5,
    attract: 3,
    intimacy: 5,
    loyalty: 3,
    smart: 4,
    match1: 'enfj',
    match2: 'entj'
};
dogs[15] = {
    name: '치와와',
    description: '용감하고 호기심이 강하며 쾌활한 치와와는 리더십 있고 활기찬 당신에게 든든한 동료가 되어 줄 것이다. 활발하고 주인과 노는 것을 좋아하기 때문에 언제나 당신을 에너제틱하게 만들어줄 것이다.',
    activity: 5,
    attract: 3,
    intimacy: 4,
    loyalty: 4,
    smart: 4,
    match1: 'enfj',
    match2: 'entj'
};

var cats=[];
cats[0] = {
    name: '브리티쉬 숏헤어',
    description: '브리티쉬 숏헤어는 내성적이면서도 지적인 고양이다. 책임감이 강하며 인내심 있고 성실한 당신과 아주 잘 어울린다. 가족들과도 두루두루 친밀한 관계를 맺는 고양이로, 바라보기만 해도 마음이 따뜻해질 것이다.',
    activity: 3,
    attract: 3,
    intimacy: 4,
    loyalty: 3,
    smart: 4,
    match1: 'istj',
    match2: 'isfj'
};
cats[1] = {
    name: '페르시안',
    description: "차분하고 헌신적이며 인내심이 강한 당신은 페르시안 고양이와 찰떡궁합이다. 페르시안 고양이는 느긋하면서도 우아한 성격을 가지고 있다. '털이 있는 가구'라는 별명이 붙을 만큼 차분하게 평화로운 시간을 즐기는 페르시안 고양이는 당신의 마음에 쏙 들 것이다.",
    activity: 2,
    attract: 3,
    intimacy: 4,
    loyalty: 2,
    smart: 3,
    match1: 'istj',
    match2: 'isfj'
};
cats[2] = {
    name: '러시안 블루',
    description: '높은 통찰력을 지닌 당신에게는 러시안 블루가 찰떡궁합! 러시안 블루는 내성적이지만 다정하고 사랑스러운 고양이다. 애교도 많으며 집사의 기분을 잘 이해하고 공감해 주는 부드럽고 따뜻한 면을 가지고 있다.',
    activity: 3,
    attract: 4,
    intimacy: 3,
    loyalty: 3,
    smart: 3,
    match1: 'infj',
    match2: 'intj'
};
cats[3] = {
    name: '노르웨이 숲',
    description: '노르웨이 숲 고양이는 똑똑한 고양이로, 훈련을 시키기도 쉽고 여러운 장난감도 잘 가지고 논다. 진지한 생각을 자주 하는 당신과 마찬가지로 공상을 자주 하는 듯하다. 친화력은 좋지만 독립적인 성격이라 찰싹 붙어 있지는 않다.',
    activity: 4,
    attract: 2,
    intimacy: 4,
    loyalty: 3,
    smart: 5,
    match1: 'infj',
    match2: 'intj'
};
cats[4] = {
    name: '오리엔탈',
    description: '분석적이며 적응력 강한 당신과 잘 어울리는 고양이는 오리엔탈이다. 오리엔탈은 호기심이 많고 활동적이며 놀기를 좋아하는데, 탐험가 기질을 가진 당신을 쏙 빼닮았다. 지능도 높고 충성스러움도 갖추고 있는 귀여운 고양이다.',
    activity: 4,
    attract: 3,
    intimacy: 3,
    loyalty: 5,
    smart: 4,
    match1: 'istp',
    match2: 'isfp'
};
cats[5] = {
    name: '저먼 렉스',
    description: '온화하고 겸손한 당신과 딱 어울리는 고양이는 저먼 렉스다. 애정이 넘치고 사랑스러운 저먼 렉스는 당신과 함께일 때 최고의 행복을 느낄 것이다. 충성심도 높아 당신을 졸졸 따라다닐 것이다!',
    activity: 4,
    attract: 4,
    intimacy: 5,
    loyalty: 5,
    smart: 4,
    match1: 'istp',
    match2: 'isfp'
};
cats[6] = {
    name: '버만',
    description: '성실하고 이해심 많은 당신에게 가장 좋은 친구는 버만이다. 조용하면서도 사랑스러운 버만은 당신과 마찬가지로 혼자만의 시간을 좋아한다. 착하고 순종적인 고양이로, 버만과 함께라면 세상 외롭지 않을 것이다.',
    activity: 3,
    attract: 4,
    intimacy: 4,
    loyalty: 4,
    smart: 3,
    match1: 'infp',
    match2: 'intp'
};
cats[7] = {
    name: '터키쉬 앙고라',
    description: '터키쉬 앙고라는 대단히 영리하고 호기심이 많은 고양이로, 잠재력과 가능성을 중요시하는 당신의 마음에 쏙 들 것이다. 항상 무언가를 하느라 바쁘지만 주인이 쓰다듬어줄 때는 얌전히 앉아 즐기는 귀염둥이이기도 하다. 집사에게는 언제나 무한한 애정표현을 해줄 것이다.',
    activity: 4,
    attract: 4,
    intimacy: 4,
    loyalty: 4,
    smart: 5,
    match1: 'infp',
    match2: 'intp'
};
cats[8] = {
    name: '뱅갈고양이',
    description: '언제나 활기차고 자신감 넘치는 당신과 뱅갈고양이는 많은 점에서 닮았다. 당신처럼 뱅갈고양이도 엄청난 활동성을 자랑하며, 똑똑하고 호기심도 많아 새로운 것에 언제나 도전한다. 그러면서도 다정하고 애교도 많은 뱅갈고양이는 당신과 찰떡궁합!',
    activity: 5,
    attract: 5,
    intimacy: 4,
    loyalty: 4,
    smart: 3,
    match1: 'estp',
    match2: 'esfp'
};
cats[9] = {
    name: '스핑크스',
    description: '자유롭고 재미있는 성격을 가진 당신에게 가장 좋은 친구는 스핑크스다. 스핑크스는 사랑스럽고 사교적인 성격을 가지고 있다는 점이 당신과 닮았다. 애교도 많고 친화력도 좋아 많은 사람들에게 사랑받는 종이다.',
    activity: 4,
    attract: 5,
    intimacy: 5,
    loyalty: 4,
    smart: 4,
    match1: 'estp',
    match2: 'esfp'
};
cats[10] = {
    name: '싱가푸라',
    description: '싱가푸라는 호기심이 많아 장난을 좋아하며 사람을 잘 따르는 귀여운 고양이다. 똑똑해서 어느 정도의 훈련도 가능하다. 매우 활동적이면서도 사교적이며 열정 넘치는 싱가푸라는 밝고 활기찬 당신과 찰떡궁합! 집사가 휴식을 취할 때는 집사 옆에서 떨어지지 않는 사랑스러운 모습도 보인다.',
    activity: 5,
    attract: 4,
    intimacy: 4,
    loyalty: 5,
    smart: 4,
    match1: 'enfp',
    match2: 'entp'
};
cats[11] = {
    name: '발리니즈',
    description: '발리니즈는 매우 영리하며 외향적이고 활발하한 고양이다. 그래서 다재다능하고 팔방미인형인 당신과 아주 잘 어울린다. 호기심이 많고 똑똑하여 주변에 관심이 많고 새로운 것을 빨리 배운다. 공격적이지 않고 온화하여 아이들이나 다른 동물들과도 잘 지내다 보니 많은 사람들에게 사랑받는 고양이다.',
    activity: 4,
    attract: 5,
    intimacy: 5,
    loyalty: 4,
    smart: 5,
    match1: 'enfp',
    match2: 'entp'
};
cats[12] = {
    name: '버미즈',
    description: '체계적으로 일하고 경영자적 자질을 가진 당신에게는 버미즈가 최고의 친구가 될 것이다. 버미즈는 친화력이 좋고 사회적이며 영리하여 집사와 강한 유대감을 쌓을 수 있다. 공격성이 낮고 활동적이며 놀기를 즐기는 귀여운 고양이다.',
    activity: 4,
    attract: 4,
    intimacy: 5,
    loyalty: 4,
    smart: 5,
    match1: 'estj',
    match2: 'esfj'
};
cats[13] = {
    name: '아비시니안',
    description: '사람에 대한 관심이 많으며 친절한 당신의 성격과 가장 닮은 고양이는 바로 아비시니안이다. 온순한 성격이면서도 대단히 활발하고 놀이를 좋아한다. 끊임없이 돌아다니기를 좋아하기 때문에 집사에게 얌전히 안겨 있기보다는 늘 주변을 맴돌며 집사에게 사랑스러운 눈빛을 보낸다.',
    activity: 4,
    attract: 4,
    intimacy: 5,
    loyalty: 4,
    smart: 3,
    match1: 'estj',
    match2: 'esfj'
};
cats[14] = {
    name: '통키니즈',
    description: '사람을 좋아하고 항상 적극적인 당신처럼 통키니즈 역시 사랑 받는 것을 좋아하여 주인의 곁에서 잘 떨어지지 않는다. 호기심이 많고 장난을 좋아하여 집안 구석에 숨거나, 물건을 가져오는 류의 장난을 잘 치는 통키니즈는 당신과 찰떡궁합!',
    activity: 4,
    attract: 4,
    intimacy: 4,
    loyalty: 3,
    smart: 5,
    match1: 'enfj',
    match2: 'entj'
};
cats[15] = {
    name: '샴',
    description: '샴고양이는 성격이 독특하면서도 영리하고 애정이 깊다. 외향적이면서도 지배적인 성격을 가지고 있어서 자기 주장을 잘 하고 언제나 활동적이다. 활동적이고 리더십이 강한 당신과 꼭 닮았다. 친화력 좋고 똑똑한 샴고양이와 만난다면 둘은 최고의 친구가 될 것이다.',
    activity: 4,
    attract: 3,
    intimacy: 4,
    loyalty: 4,
    smart: 5,
    match1: 'enfj',
    match2: 'entj'
};