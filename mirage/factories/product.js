import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
    name(i) {return `Product ${i}`},
    sku: '35423',
    unitPrice: 10.99,
    
    afterCreate(){
        
    }

});
