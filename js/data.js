const qnaList = [
  {
    q: '1. 친구와 쇼핑할 때 주로 어떤 편인가요?',
    a: [
      { answer: 'a. 친구에게 스타일 추천을 받는다.', type: [2, 4, 9, 10] },
      { answer: 'b. 내가 마음에 드는 스타일을 먼저 찾는다.', type: [0, 1, 3, 6, 7, 8] },
      { answer: 'c. 난 잘 모르겠어..', type: [5, 11] },
    ]
  },
  {
    q: '2. 옷을 살 때 가장 중요하게 생각하는 것은?',
    a: [
      { answer: 'a. 편안함과 실용성이 제일 중요하지', type: [1, 2, 9] },
      { answer: 'b. 독특하고 개성 있는 디자인이 좋아', type: [0, 3, 6, 8] },
      { answer: 'c. 사랑스럽고 톡톡튀는 옷이 좋아', type: [4, 5, 7, 10, 11] },
    ]
  },
  {
    q: '3. 파티에 갈 때 선택하는 스타일은?',
    a: [
      { answer: 'a. 깔끔하고 단정한 룩', type: [1, 2, 5, 11] },
      { answer: 'b. 강렬하고 눈에 띄는 룩', type: [0, 3, 7, 8] },
      { answer: 'c. 세련되고 트렌디한 룩', type: [4, 6, 9, 10] },
    ]
  },
  {
    q: '4. 선호하는 색상 조합은?',
    a: [
      { answer: 'a. 모노톤이나 뉴트럴 컬러', type: [1, 6, 8, 9] },
      { answer: 'b. 비비드하고 강렬한 컬러', type: [0, 2, 3, 4] },
      { answer: 'c. 파스텔이나 부드러운 컬러', type: [5, 7, 10, 11] },
    ]
  },
  {
    q: '5. 주로 사용하는 액세서리는?',
    a: [
      { answer: 'a. 심플한 귀걸이 혹은 목걸이', type: [1, 7, 10, 4, 9] },
      { answer: 'b. 화려한 반지나 큰 목걸이', type: [0, 3, 6, 11] },
      { answer: 'c. 미니멀한 시계나 브레이슬릿', type: [2, 5, 8] },
    ]
  },
  {
    q: '6. 패션 아이템을 고를 때 참고하는 것은?',
    a: [
      { answer: 'a. 패션 잡지와 트렌드', type: [0, 1, 8, 9] },
      { answer: 'b. SNS에서 인기 있는 스타일', type: [2, 3, 6, 10] },
      { answer: 'c. 내가 좋아하는 연예인이나 셀럽의 스타일', type: [4, 5, 7, 11] },
    ]
  },
  {
    q: '7. 좋아하는 신발 스타일은?',
    a: [
      { answer: 'a. 편안한 스니커즈', type: [0, 1, 2, 3, 6] },
      { answer: 'b. 포인트가 되는 힐이나 부츠', type: [4, 5, 7, 8] },
      { answer: 'c. 유행하는 로퍼나 플랫 슈즈', type: [9, 10, 11] },
    ]
  },
  {
    q: '8. 일상에서 자주 입는 스타일은?',
    a: [
      { answer: 'a. 편안하고 활동적인 캐주얼 룩', type: [1, 6] },
      { answer: 'b. 개성 넘치는 스트릿 패션', type: [0, 2, 3, 4, 10, 8] },
      { answer: 'c. 심플하면서도 포인트가 있는 오피스룩', type: [5, 7, 9, 11] },
    ]
  },
  {
    q: '9. 다음 중 가장 탐나는 패션 아이템은?',
    a: [
      { answer: 'a. 좋아하는 브랜드의 로고가 박혀있는 티셔츠', type: [2, 6] },
      { answer: 'b. 트렌디한 디자인의 개성적인 아우터 자켓', type: [0, 1, 3, 8] },
      { answer: 'c. 작지만 포인트가 될 수 있는 악세서리', type: [4, 5, 7, 9, 10, 11] },
    ]
  },
  {
    q: '10. 친구가 옷을 추천해주면 어떻게 반응하나요?',
    a: [
      { answer: 'a. 입어보고 편하면 사는 편이다.', type: [2, 6, 9] },
      { answer: 'b. 내 스타일과 맞는지 고민해 본다.', type: [1, 4, 5, 7, 11] },
      { answer: 'c. 새로운 스타일을 시도해보려 한다.', type: [0, 3, 8, 10] },
    ]
  },
  {
    q: '11. 계절별로 옷을 어떻게 준비하나요? ',
    a: [
      { answer: 'a. 기본템을 다양하게 준비한다.', type: [2, 8, 9] },
      { answer: 'b. 계절마다 유행하는 아이템을 찾는다.', type: [1, 4, 6, 5, 10] },
      { answer: 'c. 색감이나 패턴을 신경 써서 준비한다.', type: [0, 3, 5, 7, 11] },
    ]
  },
  {
    q: '12. 패션에 관한 생각은?',
    a: [
      { answer: 'a. 나만의 스타일을 고수하고 싶다.', type: [0, 1, 3, 4, 10] },
      { answer: 'b. 계절마다 새로운 스타일을 시도해보고 싶다.', type: [6, 7, 8] },
      { answer: 'c. 트렌드와 기본을 적절히 조합하고 싶다.', type: [2, 9, 11] },
    ]
  },
]

const infoList = [
  {
    name: '거침없는 자유, 그런지 스타일러',
    desc: '그런지 스타일을 좋아하는 사람들은 일반적으로 유행보다는 자신만의 스타일을 중요시하며, 약간 빈티지하고 허술해 보이는 매력을 선호합니다. 해진 청바지, 낡은 티셔츠, 오버사이즈 셔츠 등 거친 느낌을 주는 옷들을 자주 입으며, 다양한 레이어링을 통해 무심하면서도 자유로운 느낌을 더합니다. 패턴이 있는 재킷이나 후디와 같은 아이템을 즐겨 입으며, 색상은 주로 어두운 톤을 선호합니다. 그린지 스타일러는 본인이 가진 자연스러운 모습을 최대한 살리려 하고, 메이크업이나 스타일링에서도 과한 연출을 지양합니다. 그들은 보통 새로운 것보다는 본인이 좋아하는 스타일을 꾸준히 고수하며, 옷에 담긴 시간의 흔적을 소중하게 여깁니다. 또한, 독립적이고 예술적 감각을 가진 경우가 많아, 다양한 문화와 예술 장르에 관심이 많으며 취향이 뚜렷합니다.'
  },
  {
    name: '데님의 매력을 아는 패셔니스타',
    desc: '데님 스타일을 사랑하는 이들은 캐주얼하면서도 실용적인 패션을 선호합니다. 청바지, 데님 재킷, 데님 셔츠 등 데님 소재의 아이템을 다양하게 활용하며, 클래식하면서도 꾸민 듯 안 꾸민 듯한 룩을 연출하는 것을 좋아합니다. 이런 사람들은 매일 입기 편한 옷을 중요하게 생각하고, 스타일링에서도 크게 고민하지 않고 자연스럽게 데님 아이템을 선택하는 경우가 많습니다. 데님의 매력을 아는 사람은 실용성과 내구성을 중시하는 성향이 강하고, 편안함과 유행을 동시에 추구합니다. 이들은 라이프 스타일에서도 지나치게 계획을 세우기보다는 그때그때 상황에 맞추며 자유롭게 일상을 즐기는 편입니다. 패션을 통해 일상에서 자신감과 편안함을 동시에 느끼고, 친근하고 꾸밈없는 이미지로 사람들에게 다가갑니다.'
  },
  {
    name: '활기찬 에너지, 스포티 캐주얼러',
    desc: '스포티 스타일을 좋아하는 사람들은 활동적인 라이프 스타일을 즐기고, 언제든지 움직이기 편한 패션을 추구합니다. 그들은 주로 스웨트팬츠, 트랙슈트, 운동화, 그리고 기능성 티셔츠와 같은 아이템을 선호하며, 편안함과 실용성을 중시합니다. 강렬한 컬러나 스포츠 브랜드의 로고가 들어간 옷을 좋아하며, 스포티하면서도 세련된 분위기를 즐깁니다. 스포티 캐주얼러들은 일상에서도 활발하게 움직이는 편이며, 새로운 활동에 대한 호기심이 많습니다. 그들은 친구와 운동을 즐기거나 아웃도어 활동을 좋아하고, 한가한 시간에는 활동적인 취미 생활을 하는 경우가 많습니다. 패션 스타일도 자신이 편하게 느끼는 스타일을 중요시하고, 기능적이면서도 멋스러운 옷을 선택해 라이프 스타일과 잘 어우러지도록 합니다.'
  },
  {
    name: '자유와 개성의 아이콘, 프리덤 스타일',
    desc: 'HIP 스타일을 좋아하는 사람들은 자유롭고 독창적인 성격을 가지고 있으며, 고정된 틀에 얽매이기보다는 자신만의 스타일을 창조하는 것을 즐깁니다. 다양한 패턴과 컬러 조합을 시도하는 것을 두려워하지 않으며, 빈티지 아이템과 최신 유행을 믹스 매치하는 것을 선호합니다. 와이드 팬츠, 컬러풀한 악세서리, 오버사이즈 재킷 등을 활용해 유니크한 분위기를 연출합니다. 프리덤 스타일러들은 창의적이고 예술적인 감각이 뛰어나며, 패션 외에도 음악, 미술, 사진 등 다양한 문화에 관심이 많습니다. 또한 트렌드를 앞서가면서도 자신의 취향을 고수하는 성향이 있어, 어디서든 눈에 띄고 개성 있는 존재감을 드러냅니다. 일상에서도 자율적인 성향이 강하고, 고유의 라이프스타일을 중요하게 여깁니다.'
  },
  {
    name: '상큼 발랄, 젤리 팝 스타일러',
    desc: '젤리 스타일을 선호하는 사람들은 발랄하고 활기찬 성격을 가지고 있으며, 컬러풀하고 화려한 패션을 좋아합니다. 다양한 컬러를 조화롭게 매치하거나 귀여운 패턴의 아이템을 즐겨 입으며, 특히 파스텔톤과 네온 컬러 조합을 자주 선택합니다. 아이템의 소재에서도 투명하거나 반짝이는 느낌을 즐기며, 액세서리 역시 상큼한 포인트를 주는 것을 선호합니다. 젤리 팝 스타일러는 낙천적이고 긍정적인 성향을 가지고 있으며, 새로운 경험을 즐기고 사람들과 어울리는 것을 좋아합니다. 호기심이 많고 다채로운 경험을 쌓기를 좋아하며, 패션을 통해 자신의 개성과 활기를 표현하는 편입니다. 이런 성향 덕에 친구들과 함께 할 때 활력소가 되어 주며, 즐거움과 긍정 에너지를 주는 사람으로 기억됩니다. 일상에서도 창의적인 일에 끌리고, 작은 소소한 재미를 추구합니다.'
  },
  {
    name: '꿈같은 로맨스, 웨딩 판타지아',
    desc: '웨딩 스타일을 선호하는 사람들은 로맨틱하고 우아한 분위기를 좋아하며, 드레시하고 고급스러운 패션에 끌립니다. 흰색과 파스텔 컬러, 레이스, 러플 등의 디테일이 들어간 옷을 선호하며, 드레스나 스커트 스타일의 아이템을 자주 선택합니다. 단정하고 정돈된 룩을 선호하며, 액세서리와 메이크업에서도 여성스러운 느낌을 추구합니다. 웨딩 판타지아는 섬세하고 감성적인 성향이 강하며, 로맨스와 영화 같은 순간을 꿈꾸는 경향이 있습니다. 일상에서 작은 디테일을 소중히 여기고, 주변 사람들에게 따뜻하게 대하며 배려심이 깊습니다. 클래식한 아이템을 통해 우아함을 유지하면서도 트렌디한 요소를 섞어 로맨틱한 분위기를 연출하는 것을 좋아합니다. 패션뿐 아니라 삶에서도 여유롭고 아름다운 순간을 즐기며, 추억을 소중히 여깁니다.'
  },
  {
    name: '기능적이고 미래적인, 테크웨어 어드벤처',
    desc: '테크웨어 스타일을 선호하는 사람들은 미래 지향적인 디자인과 기능성을 중요하게 여깁니다. 방수나 방풍 기능이 있는 소재, 다수의 포켓, 스트랩과 벨크로 같은 디테일을 좋아하며, 블랙이나 카키와 같은 중성적이면서도 강렬한 색상을 즐깁니다. 이 스타일을 선호하는 사람들은 주로 아웃도어 활동이나 여행을 즐기는 경우가 많으며, 실용적이고 혁신적인 패션을 추구합니다. 테크웨어 어드벤처러는 탐구심이 강하고, 새로운 것을 시도하는 데 거침이 없는 성격입니다. 신기술이나 혁신적인 제품에 대한 관심이 많으며, 삶 속에서 효율성을 중시합니다. 또한 새로운 기술을 일상에 도입하고자 하며, 패션에서도 단순한 멋보다는 기능적인 매력을 중요시합니다. 종종 자신만의 개성과 독창성을 표현하고, 최신 트렌드와 기술에 관심을 가지고 있습니다.'
  },
  {
    name: '신비한 환상, 날개의 몽상가',
    desc: '날개 스타일을 선호하는 사람들은 환상적이고 신비로운 스타일을 추구합니다. 하늘하늘하고 가벼운 소재의 옷이나 레이어링이 돋보이는 스타일을 좋아하며, 주로 화이트, 블루, 라벤더 등의 차분하고 신비로운 색상을 선호합니다. 펄이나 글리터 같은 작은 디테일이 들어간 옷을 즐기며, 마치 천사나 요정처럼 가벼운 분위기를 좋아합니다. 날개의 몽상가는 순수하고 이상적인 성향을 지니고 있으며, 상상력이 풍부해 예술과 문학에 관심이 많습니다. 자신만의 세계를 소중히 여겨 조용하고 내면적인 활동을 선호하고, 공상과 상상에 빠져드는 것을 좋아합니다. 실용성보다는 감정적인 만족을 더 중시하고, 패션을 통해 신비롭고 감성적인 이미지를 연출하는 것을 즐깁니다. 다른 사람들에게는 몽환적이고 신비로운 느낌을 주며, 다소 내성적이지만 따뜻한 성격으로 주변을 포근하게 만드는 매력을 지니고 있습니다.'
  },
  {
    name: '미지의 세계 탐험가, 스페이스 드리머',
    desc: '지치고 힘들 때 언제나 행복을 주는 당신! 정말 끼가 많고 말재주가 많다보니 팔방미인이라는 소리를 많이 듣는 편이랍니다. 또한 다재다능하고 총명하여 어떤 일이든지 잘할 수 있고, 유머 감각도 뛰어나 주변 사람들이 많이 따르는 마당발 타입입니다. 연애할 때 상대방의 기분을 잘 맞춰주고 즐거운 분위기를 유지하나, 다소 본인의 체면을 중시하는 경향이 있어요. 이 점 때문에 잔머리를 굴리다 타인에게 교활하다는 인상을 주게 될 수도 있기 때문에 조금 조심하면 좋을 것 같아요!'
  },
  {
    name: '도시적 세련미, 모던 시크',
    desc: '모던 스타일을 좋아하는 사람들은 깔끔하고 정돈된 느낌을 선호하며, 기본 아이템을 통해 세련된 룩을 완성하는 데 능숙합니다. 주로 뉴트럴 컬러나 블랙 앤 화이트를 활용하여 차분하고 도시적인 분위기를 연출합니다. 그들은 셔츠, 슬랙스, 미니멀한 코트 같은 기본 아이템을 활용하여 실루엣과 디테일을 중요하게 생각하는 편입니다. 모던 시크 스타일을 좋아하는 이들은 보통 계획적인 성향이 강하고, 꼼꼼하게 일정을 관리하는 편입니다. 일상에서도 정돈된 분위기를 유지하려 하며, 자신을 똑 부러지게 표현하는 것을 선호합니다. 패션에서도 불필요한 요소를 줄이고 실루엣과 소재를 중심으로 하여 편안하면서도 격식을 갖춘 스타일링을 즐깁니다. 심플함 속에서도 디테일과 고급스러움을 느낄 수 있는 스타일을 추구합니다.'
  },
  {
    name: '사랑스러운 매력, 러블리 몬스터',
    desc: '귀여운 스타일을 선호하는 사람들은 주로 파스텔 톤이나 화사한 색상의 옷을 즐겨 입으며, 러플, 리본, 프릴 등 장식이 들어간 아이템을 선호합니다. 이런 스타일을 즐기는 사람들은 스커트, 원피스, 귀여운 패턴의 상의를 자주 입으며, 메이크업에서도 화사하고 자연스러운 느낌을 지향합니다. 부드럽고 사랑스러운 이미지를 유지하며, 옷을 고를 때도 귀여운 포인트를 중시합니다. 큐티 러블리는 대체로 긍정적이고 낙천적인 성격을 가지고 있으며, 사람들과 잘 어울리며 따뜻한 인상을 주는 경우가 많습니다. 패션에서도 단정하고 부드러운 느낌을 즐기며, 일상에서도 섬세하고 배려심 있는 성향을 보입니다. 자주 사람들에게 웃음을 주며, 친구들과의 소통을 소중히 여기고 작은 행복에 감동하는 경우가 많습니다.'
  },
  {
    name: '우아한 선율, 발레 블루머',
    desc: '발레 스타일을 선호하는 사람들은 우아하고 섬세한 스타일을 지향하며, 주로 파스텔 톤과 핑크, 화이트 등의 부드러운 색상을 선호합니다. 레이스, 리본, 스커트, 또는 튜튜 스타일의 아이템을 즐겨 입으며, 여리여리하고 로맨틱한 분위기를 연출합니다. 발레리나의 아름다움에서 영감을 받아, 하늘하늘하고 여성스러운 룩을 선호합니다. 발레 블루머는 조용하고 섬세한 성향을 가지고 있으며, 차분한 일상을 즐기는 경향이 있습니다. 감성이 풍부하고 예술에 대한 관심이 많으며, 미적 감각이 뛰어나 주변 환경이나 소품의 아름다움에도 신경을 쓰는 편입니다. 활동적인 것보다는 자신만의 공간에서 책을 읽거나 예술 작품을 감상하는 등 내면의 만족을 추구합니다. 이러한 스타일은 자신을 소중히 여기고 부드럽게 표현하고자 하는 성향을 반영합니다.'
  },
]
