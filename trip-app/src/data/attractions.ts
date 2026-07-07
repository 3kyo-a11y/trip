import type { Attraction } from '../types';

export const attractions: Attraction[] = [
  {
    id: 'forbidden-city',
    name: '故宫',
    city: '北京',
    region: '华北',
    category: ['人文历史', '古镇古村'],
    rating: 4.9,
    bestSeason: ['春', '秋'],
    suggestedDuration: '4-6小时',
    ticketPrice: '旺季60元 / 淡季40元',
    description: '故宫又称紫禁城，是中国明清两代的皇家宫殿，世界上现存规模最大、保存最完整的木质结构古建筑群。占地72万平方米，建筑面积约15万平方米，有大小宫殿七十多座，房屋九千余间。',
    highlights: ['太和殿——中国现存最大的木构大殿', '乾清宫——明清皇帝寝宫', '御花园——皇家园林典范', '珍宝馆和钟表馆——宫廷珍品荟萃', '角楼——摄影爱好者的圣地'],
    routes: [
      {
        name: '经典中轴线一日游',
        duration: '4-5小时',
        stops: ['午门', '太和殿', '中和殿', '保和殿', '乾清宫', '交泰殿', '坤宁宫', '御花园', '神武门'],
      },
      {
        name: '深度文化游',
        duration: '全天',
        stops: ['午门', '太和殿', '珍宝馆', '钟表馆', '乾清宫', '养心殿', '御花园', '慈宁宫', '角楼'],
      },
    ],
    transport: {
      arrive: ['地铁1号线"天安门东"站或"天安门西"站步行约10分钟', '公交1路、2路、52路"天安门东站"', '机场：首都机场乘机场快轨至东直门换乘地铁2号线'],
      local: ['景区内步行', '周边可租共享单车', '出租车至"天安门东"站下车'],
    },
    accommodation: [
      { level: '高端', name: '北京王府井希尔顿酒店', priceRange: '1200-2000元', distance: '距故宫约1.5公里' },
      { level: '舒适', name: '全季酒店(北京故宫店)', priceRange: '500-800元', distance: '距故宫约1公里' },
      { level: '经济', name: '如家快捷酒店(前门店)', priceRange: '200-400元', distance: '距故宫约2公里' },
    ],
    food: [
      { name: '仿膳饭庄', type: '宫廷菜', price: '人均200-300元', location: '北海公园内' },
      { name: '四季民福(故宫店)', type: '北京烤鸭', price: '人均150-200元', location: '故宫东华门附近' },
      { name: '牛街聚宝源', type: '涮羊肉', price: '人均80-120元', location: '西城区牛街' },
    ],
    budget: {
      total: '人均800-1500元（含住宿餐饮）',
      breakdown: { 门票: '60元', 交通: '50-100元', 餐饮: '200-300元', 住宿: '300-800元/晚' },
    },
    tips: ['提前在官网或小程序预约购票，现场不售票', '周一闭馆（法定节假日除外）', '带身份证原件入园', '建议早上8:30开门即入，避开人流高峰', '景区内信号较弱，提前下载离线地图'],
    coverImage: '/images/forbidden-city.webp',
    images: ['/images/forbidden-city-1.webp', '/images/forbidden-city-2.webp'],
    reviews: [
      { user: '旅行者小王', rating: 5, date: '2026-03-15', content: '太震撼了！每一座宫殿都承载着厚重的历史，强烈推荐请讲解员。' },
      { user: '历史爱好者', rating: 5, date: '2026-02-20', content: '秋天去最美，红墙黄叶相映成趣。珍宝馆千万别错过。' },
    ],
  },
  {
    id: 'west-lake',
    name: '西湖',
    city: '杭州',
    region: '华东',
    category: ['自然风光', '人文历史'],
    rating: 4.8,
    bestSeason: ['春', '秋'],
    suggestedDuration: '全天',
    ticketPrice: '免费（部分小景点收费）',
    description: '西湖位于杭州市中心，以"欲把西湖比西子，淡妆浓抹总相宜"闻名天下。湖面面积约6.39平方公里，被三面云山一面城环绕，是中国首批世界文化遗产。',
    highlights: ['断桥残雪——白蛇传传说之地', '苏堤春晓——漫步赏花胜地', '雷峰塔——俯瞰西湖全景', '三潭印月——人民币一元背面图案', '花港观鱼——古典园林之美'],
    routes: [
      {
        name: '环湖骑行一日游',
        duration: '6-8小时',
        stops: ['断桥', '白堤', '孤山', '苏堤', '花港观鱼', '雷峰塔', '南屏晚钟'],
      },
      {
        name: '文化深度游',
        duration: '全天',
        stops: ['平湖秋月', '曲院风荷', '岳王庙', '中国丝绸博物馆', '灵隐寺'],
      },
    ],
    transport: {
      arrive: ['地铁1号线"龙翔桥"站步行约10分钟', '公交K1/K7路至"湖滨"站', '高铁至杭州东站转地铁1号线'],
      local: ['环湖骑行（共享单车/景区自行车）', '游船（30元起）', '步行游览'],
    },
    accommodation: [
      { level: '高端', name: '西湖国宾馆', priceRange: '2000-5000元', distance: '紧邻西湖' },
      { level: '舒适', name: '亚朵S酒店(西湖店)', priceRange: '500-800元', distance: '距西湖约500米' },
      { level: '经济', name: '汉庭酒店(凤起路店)', priceRange: '200-400元', distance: '距西湖约1.5公里' },
    ],
    food: [
      { name: '楼外楼', type: '杭帮菜', price: '人均150-250元', location: '孤山路' },
      { name: '外婆家', type: '杭帮菜', price: '人均60-80元', location: '多家分店' },
      { name: '知味观', type: '小吃', price: '人均30-50元', location: '中山路店' },
    ],
    budget: {
      total: '人均500-1000元（门票免费，性价比高）',
      breakdown: { 门票: '免费', 交通: '30-50元', 餐饮: '100-200元', 住宿: '300-800元/晚' },
    },
    tips: ['春天樱花和桃花盛开时最美', '周末和节假日人流量大，建议工作日前往', '环湖骑行约15公里，穿舒适的鞋', '雷峰塔需另购票（40元）', '夜游西湖别有韵味，音乐喷泉每周二、五、六晚有'],
    coverImage: '/images/west-lake.webp',
    images: ['/images/west-lake-1.webp', '/images/west-lake-2.webp'],
    reviews: [
      { user: '江南旅人', rating: 5, date: '2026-04-10', content: '三月去的时候樱花正好开了，西湖边的一切都太美了！' },
      { user: '骑行爱好者', rating: 4, date: '2026-05-01', content: '环湖骑行很棒，但五一期间人多，建议错峰。' },
    ],
  },
  {
    id: 'great-wall',
    name: '长城（八达岭）',
    city: '北京',
    region: '华北',
    category: ['人文历史', '自然风光'],
    rating: 4.8,
    bestSeason: ['春', '秋', '冬'],
    suggestedDuration: '半天-一天',
    ticketPrice: '旺季40元 / 淡季30元（缆车另计）',
    description: '八达岭长城是北京最具代表性的长城段，位于延庆区军都山关沟古道北口。"不到长城非好汉"，这里是万里长城的精华所在，海拔高达1015米。',
    highlights: ['好汉坡——征服长城的成就感', '烽火台——古代军事瞭望设施', '缆车——轻松登顶体验', '四季不同景色——春赏花开、冬看雪景'],
    routes: [
      {
        name: '好汉线路',
        duration: '4-5小时',
        stops: ['南四楼', '北七楼（好汉坡）', '北四楼'],
      },
    ],
    transport: {
      arrive: ['德胜门乘877路公交直达', '高铁"北京北"至"八达岭长城"站约20分钟', '自驾走京藏高速G6'],
      local: ['缆车上山（单程100元）', '步行攀登', '滑车下山（单程80元）'],
    },
    accommodation: [
      { level: '高端', name: '北京八达岭希尔顿酒店', priceRange: '800-1500元', distance: '距景区约5公里' },
      { level: '舒适', name: '永宁镇快捷酒店', priceRange: '200-400元', distance: '距景区约10公里' },
    ],
    food: [
      { name: '长城脚下的公社餐厅', type: '农家菜', price: '人均80-120元', location: '水关长城附近' },
      { name: '永宁古城小吃', type: '当地小吃', price: '人均30-50元', location: '永宁古城' },
    ],
    budget: {
      total: '人均400-800元（含往返交通）',
      breakdown: { 门票: '40元', 缆车: '100元', 交通: '50-100元', 餐饮: '100-150元' },
    },
    tips: ['穿舒适的运动鞋，台阶较多', '春秋最佳，夏季防晒，冬季注意保暖', '旺季提前购票', '缆车适合老人小孩，但排队较长', '野长城（慕田峪/司马台）更原生态但难度更大'],
    coverImage: '/images/great-wall.webp',
    images: ['/images/great-wall-1.webp', '/images/great-wall-2.webp'],
    reviews: [
      { user: '登山达人', rating: 5, date: '2026-09-20', content: '秋天登长城是最美的，层林尽染，好汉坡上拍照绝了！' },
      { user: '家庭出游', rating: 4, date: '2026-07-15', content: '夏天太热了，建议早上去。缆车很实用，带老人和孩子推荐。' },
    ],
  },
  {
    id: 'panda-base',
    name: '成都大熊猫繁育研究基地',
    city: '成都',
    region: '西南',
    category: ['自然风光', '主题乐园'],
    rating: 4.7,
    bestSeason: ['春', '夏', '秋'],
    suggestedDuration: '3-5小时',
    ticketPrice: '55元',
    description: '成都大熊猫基地是世界上最大的人工大熊猫繁育机构之一。在这里可以看到不同年龄段的大熊猫，从幼崽到成年，还有珍稀的白熊猫。基地占地近1000亩，模拟野生环境。',
    highlights: ['月亮产房——观看熊猫宝宝（3-7月最佳）', '太阳产房——近距离观察幼崽', '熊猫温室花卉园——四季花海', '白熊猫——比大熊猫更珍稀', '熊猫博物馆——了解保护知识'],
    routes: [
      {
        name: '精华游览路线',
        duration: '3-4小时',
        stops: ['大门', '熊猫大道', '月亮产房', '太阳产房', '小熊猫展区', '熊猫博物馆'],
      },
    ],
    transport: {
      arrive: ['地铁3号线"军区总医院"站转公交', '公交198路直达', '自驾导航"大熊猫基地"'],
      local: ['园区内电瓶车（30元）', '步行游览'],
    },
    accommodation: [
      { level: '高端', name: '成都博舍酒店', priceRange: '1500-3000元', distance: '距基地约15公里' },
      { level: '舒适', name: '春熙路亚朵酒店', priceRange: '400-600元', distance: '距基地约12公里' },
      { level: '经济', name: '宽窄巷子青旅', priceRange: '80-150元', distance: '距基地约10公里' },
    ],
    food: [
      { name: '小龙坎火锅', type: '火锅', price: '人均120-180元', location: '成都多家分店' },
      { name: '人民公园鹤鸣茶社', type: '茶馆', price: '人均30-50元', location: '人民公园内' },
      { name: '锦里小吃街', type: '四川小吃', price: '人均50-80元', location: '锦里古街' },
    ],
    budget: {
      total: '人均600-1200元（含住宿餐饮）',
      breakdown: { 门票: '55元', 交通: '50-100元', 餐饮: '150-300元', 住宿: '300-800元/晚' },
    },
    tips: ['早上7:30开门即入，熊猫上午最活跃', '7-8月可以看到最多幼崽', '不要穿鲜艳衣服，避免惊吓熊猫', '园区较大，建议坐电瓶车', '旁边有宽窄巷子可以安排同一天游览'],
    coverImage: '/images/panda-base.webp',
    images: ['/images/panda-base-1.webp', '/images/panda-base-2.webp'],
    reviews: [
      { user: '熊猫迷', rating: 5, date: '2026-05-20', content: '看到熊猫宝宝吃竹子的样子，心都要化了！强烈推荐清晨去。' },
      { user: '亲子游妈妈', rating: 4, date: '2026-06-10', content: '孩子超开心，但夏天有点热，注意防晒和补水。' },
    ],
  },
  {
    id: 'huangshan',
    name: '黄山',
    city: '黄山',
    region: '华东',
    category: ['自然风光'],
    rating: 4.9,
    bestSeason: ['春', '秋', '冬'],
    suggestedDuration: '2天1夜',
    ticketPrice: '旺季190元 / 淡季150元（索道另计）',
    description: '黄山素有"五岳归来不看山，黄山归来不看岳"的美誉。以奇松、怪石、云海、温泉、冬雪"五绝"著称于世，是中国最著名的山脉之一。',
    highlights: ['迎客松——黄山标志', '光明顶——俯瞰云海最佳位置', '始信峰——奇松荟萃', '西海大峡谷——惊险壮观', '日出日落——莲花峰顶绝美体验'],
    routes: [
      {
        name: '经典两日游',
        duration: '2天',
        stops: ['云谷寺→始信峰→黑虎松→光明顶→西海大峡谷→鳌鱼峰→迎客松'],
      },
    ],
    transport: {
      arrive: ['高铁至"黄山北站"转大巴', '飞机至"屯溪国际机场"', '自驾走沪渝高速'],
      local: ['玉屏索道（上行80元/下行60元）', '云谷索道（上行80元/下行60元）', '景区大巴'],
    },
    accommodation: [
      { level: '高端', name: '黄山白云宾馆（山顶）', priceRange: '800-1500元', distance: '光明顶附近' },
      { level: '舒适', name: '黄山温泉度假酒店', priceRange: '400-800元', distance: '山脚下' },
      { level: '经济', name: '汤口镇青年旅舍', priceRange: '100-200元', distance: '山脚换乘中心旁' },
    ],
    food: [
      { name: '臭鳜鱼', type: '徽菜', price: '人均60-100元', location: '汤口镇多家餐馆' },
      { name: '毛豆腐', type: '小吃', price: '人均20-40元', location: '屯溪老街' },
    ],
    budget: {
      total: '人均1000-2000元（含山顶住宿）',
      breakdown: { 门票: '190元', 索道: '140-160元', "住宿": "400-1500元", 餐饮: '200-300元' },
    },
    tips: ['山顶温差大，即使是夏天也要带外套', '看日出需住山顶，提前预订', '冬天可以看雪景和雾凇，别有一番风味', '建议轻装上阵，山顶物资贵', '雨后易见云海，但路滑注意安全'],
    coverImage: '/images/huangshan.webp',
    images: ['/images/huangshan-1.webp', '/images/huangshan-2.webp'],
    reviews: [
      { user: '户外爱好者', rating: 5, date: '2026-10-05', content: '秋天的黄山色彩斑斓，云海概率最高，值了！' },
      { user: '摄影发烧友', rating: 5, date: '2026-01-20', content: '冬天的雪景黄山简直像仙境，但路真的很滑，需要冰爪。' },
    ],
  },
  {
    id: 'jiuzhaigou',
    name: '九寨沟',
    city: '阿坝',
    region: '西南',
    category: ['自然风光'],
    rating: 4.9,
    bestSeason: ['秋'],
    suggestedDuration: '2-3天',
    ticketPrice: '旺季250元（含观光车）/ 淡季80元',
    description: '九寨沟位于四川省阿坝藏族羌族自治州，以翠海、叠瀑、彩林、雪峰、藏情、蓝冰"六绝"闻名于世。沟内有树正沟、则查洼沟、日则沟三条主沟，总长达60余公里。',
    highlights: ['五花海——九寨沟最美湖泊', '诺日朗瀑布——中国最宽的钙华瀑布', '长海——海拔最高的湖泊', '珍珠滩——西游记片头取景地', '五彩池——最小的海子却最美'],
    routes: [
      {
        name: '一日精华游',
        duration: '全天',
        stops: ['入口→箭竹海→熊猫海→五花海→长海→五彩池→诺日朗瀑布→珍珠滩'],
      },
      {
        name: '两日深度游',
        duration: '2天',
        stops: ['第一天：日则沟', '第二天：树正沟+则查洼沟'],
      },
    ],
    transport: {
      arrive: ['飞抵九寨黄龙机场', '成都茶店子客运站大巴约8小时', '自驾走成兰高速'],
      local: ['景区观光车（必买，90元）', '步行栈道游览'],
    },
    accommodation: [
      { level: '高端', name: '九寨沟天源豪生度假酒店', priceRange: '600-1000元', distance: '距景区入口约2公里' },
      { level: '舒适', name: '九寨沟安纳希酒店', priceRange: '300-500元', distance: '距景区入口约1公里' },
      { level: '经济', name: '沟口青年旅舍', priceRange: '80-150元', distance: '距景区入口步行5分钟' },
    ],
    food: [
      { name: '牦牛肉火锅', type: '藏餐', price: '人均80-120元', location: '沟口商业街' },
      { name: '青稞饼', type: '藏式主食', price: '人均20-30元', location: '沟口多家小店' },
    ],
    budget: {
      total: '人均1500-3000元（含往返大交通）',
      breakdown: { 门票: '250元', 观光车: '90元', "交通": "500-1500元", "住宿": "300-1000元/晚", 餐饮: '150-300元' },
    },
    tips: ['10月中下旬是秋色最美的时期', '海拔2000-3100米，注意高原反应', '景区内不能带宠物', '旺季（4-11月）需提前预约门票', '紫外线很强，做好防晒'],
    coverImage: '/images/jiuzhaigou.webp',
    images: ['/images/jiuzhaigou-1.webp', '/images/jiuzhaigou-2.webp'],
    reviews: [
      { user: '色彩控', rating: 5, date: '2026-10-15', content: '秋天的九寨沟就像打翻了调色盘，五花海美得让人说不出话。' },
      { user: '背包客小李', rating: 5, date: '2026-06-20', content: '夏天去避暑也很棒，水量充沛，瀑布特别壮观。' },
    ],
  },
];

export function getRegions(): string[] {
  const regions = new Set(attractions.map((a) => a.region));
  return Array.from(regions);
}

export function getCategories(): string[] {
  const cats = new Set<string>();
  attractions.forEach((a) => a.category.forEach((c) => cats.add(c)));
  return Array.from(cats);
}

export function getCities(): string[] {
  const cities = new Set(attractions.map((a) => a.city));
  return Array.from(cities);
}

export function getAttractionById(id: string): Attraction | undefined {
  return attractions.find((a) => a.id === id);
}

export function filterAttractions(search: string, region: string, category: string, season: string): Attraction[] {
  return attractions.filter((a) => {
    if (search && !a.name.includes(search) && !a.city.includes(search)) return false;
    if (region && a.region !== region) return false;
    if (category && !a.category.includes(category)) return false;
    if (season && !a.bestSeason.includes(season)) return false;
    return true;
  });
}
