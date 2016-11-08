function store() {
    this.products = [
        new product("APL", "苹果", "每天吃一个保证远离医生！", 12, 90, 0, 2, 0, 1, 2),
        new product("AVC", "鳄梨", "好吃的鳄梨酱！", 16, 90, 0, 1, 1, 1, 2),
        new product("BAN", "香蕉", "容易剥皮且含有丰富的维生素钾。", 4, 120, 0, 2, 1, 2, 2),
        new product("CTP", "哈密瓜", "美味提神。", 3, 50, 4, 4, 1, 2, 0),
        new product("FIG", "无花果", "不但有营养，且美味。", 10, 100, 0, 0, 0, 1, 2),
        new product("GRF", "葡萄柚", "粉红和红色，健康且美味。", 11, 50, 4, 4, 1, 1, 1),
        new product("GRP", "葡萄", "酒是伟大的，但葡萄更美好。", 8, 100, 0, 3, 0, 1, 1),
        new product("GUA", "番石榴", "异国情调的，芬芳的，美味的！", 8, 50, 4, 4, 0, 1, 2),
        new product("KIW", "猕猴桃", "来自新西兰的美味。", 14, 90, 1, 4, 0, 2, 2),
        new product("LYC", "荔枝", "爱不释口。", 18, 125, 1, 4, 0, 2, 2),
        new product("MAN", "芒果", "不管吃起来有多费劲，但却总是值得的。", 8, 70, 3, 4, 0, 1, 1),
        new product("ORG", "橙子", "富含维生素C，做点果汁吧。", 9, 70, 1, 4, 2, 1, 2),
        new product("PAP", "番木瓜", "超级流行的早餐。", 5, 60, 3, 4, 2, 2, 2),
        new product("PCH", "桃子", "添加一些奶油更是美味。", 19, 70, 1, 2, 0, 1, 2),
        new product("PER", "梨", "新鲜美味，梨汁可在红酒中烹制，或蒸馏梨水。", 8, 100, 0, 2, 0, 1, 2),
        new product("PMG", "石榴", "美味的，健康的，美丽的！", 19, 110, 0, 2, 0, 2, 0),
        new product("PNP", "菠萝", "尽情美味吧（但不要忘了剥皮）。", 4, 60, 0, 3, 0, 0, 1),
        new product("PSM", "柿子", "它们是浆果，你信吗？", 6, 120, 4, 3, 0, 1, 3),
        new product("STR", "草莓", "美丽，健康，美味。", 7, 40, 0, 4, 1, 1, 2),
        new product("TNG", "柑橘", "容易剥皮的橙子。", 8, 50, 3, 4, 1, 1, 2),
        new product("WML", "西瓜", "炎热夏日来一块。", 4, 90, 4, 4, 0, 1, 1)
    ];
    this.dvaCaption = [
        "微乎甚微",
        "含量低",
        "平均水平",
        "含量多",
        "富含"
    ];
    this.dvaRange = [
        "低于 5%",
        "5 ~ 10%",
        "10 ~ 20%",
        "20 ~ 40%",
        "高于 40%"
    ];
};

store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
};
