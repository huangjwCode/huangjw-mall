import { request } from "./request";

export function getDetail(iid) {
  return request({
    url: "/detail",
    methods: "GET",
    params: {
      iid
    }
  });
}

export function getDetailRecommend() {
  return request({
    url: "/home/multidata",
    methods: "GET"
  });
}

export class Goods {
  constructor(itemInfo, columns, services) {
    /*this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.oldPrice = itemInfo.oldPrice;
    this.lowNowPrice = itemInfo.lowNowPrice;
    this.price = itemInfo.price;
    this.discountBgColor = itemInfo.discountBgColor;
    this.discountDesc = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;*/

    this.title = 'intercrew2020秋韩版简约修身七分袖打底衫针织衫女';
    this.desc = '针织衫女';
    this.oldPrice = '150.00';
    this.lowNowPrice = '89.00';
    this.price = '889.00';
    this.discountBgColor = '#ff5777';
    this.discountDesc = '火热传销';
    this.columns = ['销量53','收藏20人','退货补运费'];
    this.services = [{
      name:'品牌认证',
      icon:'https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp'
    },{
      name:'72小时发货',
      icon:'https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp'
    },{
      name:'30天无理由退货',
      icon:'https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp'
    }];
  }
}

export class Shop {
  constructor(shopInfo) {
    /*this.logo = shopInfo.shopLogo; //字符串
    this.score = shopInfo.score; //数组
    this.fans = shopInfo.cFans;
    this.goods = shopInfo.cGoods;
    this.sells = shopInfo.cSells;
    this.name = shopInfo.name;*/

    this.logo = "https://s11.mogucdn.com/p2/161124/33u8nk_5i344i40g45779dl4kc17d9dfgb03_200x200.jpg_120x120.webp"; //字符串
    this.score = [{name:'描述相符',score:'5',isBetter:true},{name:'价格合适',score:'4.3',isBetter:false},{name:'质量满意',score:'5',isBetter:true}]; //数组
    this.goods = '36';
    this.sells = 8500000;
    this.name = 'lamilee莱玫旗舰店';
  }
}

export class GoodsParam {
  constructor(info, rule) {
    /*this.image = info.images ? info.images[0] : "";
    this.infos = info.set;
    this.sizes = rule.tables;*/

    this.infos = [
      {name:'厚薄',value:'普通'},
      {name:'颜色',value:'黑色，白色'},
      {name:'季节',value:'秋季'},
      {name:'材质',value:'针织'},
      {name:'领型',value:'其他'},
      {name:'袖长',value:'七分袖'},
      {name:'风格',value:'简约'},
      {name:'尺码',value:'95/L,85/S,90/M'},
      {name:'衣长',value:'常规款'},
      {name:'版型',value:'收腰'}
      ];
  }
}
