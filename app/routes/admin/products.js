import Ember from 'ember';

export default Ember.Route.extend({

    model(){
        return this.store.findAll('product');
    },

    actions: {
        addNewProduct(newProduct){
            let store = this.store;
            let product = store.createRecord('product', {
                name: newProduct.name,
                sku: newProduct.sku,
                unitPrice: newProduct.unitPrice
            })

            product.save().then(()=>{
                console.log('model saved');
            })
        }
    }
});
