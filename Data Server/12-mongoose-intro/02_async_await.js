const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shop', {useNewParser: true});

let productSchema = new mongoose.Schema({
    name: String,
    price: Number
});

// a class method for log messaging
productSchema.methods.logMessage = function () {
    let msg = `The product ${this.name} with the price ${this.price} has been inserted`;
    console.log(msg);
};

let Product = mongoose.model('Product', productSchema);

let samsung = new Product({ name: 'Samsung Galaxy One', price: 399.99});
console.log(samsung.name);
console.log(samsung.price);

let apple = new Product({ name: 'iPhone X', price: 4990.99});
console.log(apple.name);
console.log(apple.price);


let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function() {
    // we're connected!
    console.log("we're connected!");

    try {
        // save samsung async
        const product = new Product(samsung);
        await product.save();
        await console.log('saved!');

        // find all samsung phones
        const found_products = await Product.find();
        await console.log('found!');
        await console.log(JSON.stringify(found_products, null, 4));
        await console.log('end found!');

        await console.log('find by id');
        const found_product_with_id = await Product.findById('5e15ad926397c82831374260');
        await console.log(JSON.stringify(found_product_with_id, null, 4));

        const remove_products = await Product.remove();
        await console.log(JSON.stringify(remove_products, null, 4));
        console.log('Products removed');

    } catch (e) {
        console.error(e);
    }

    db.close();

});