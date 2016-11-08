//----------------------------------------------------------------
// product class
function product(sku, name, description, price, cal, carot, vitc, folate, potassium, fiber) {
    this.sku = sku; // product code (SKU = stock keeping unit)
    this.name = name;
    this.description = description;
    this.price = price;
    this.cal = cal;
    this.nutrients = {
        "胡萝卜素": carot,
        "VC": vitc,
        "叶酸": folate,
        "钾": potassium,
        "纤维素": fiber
    };
}
