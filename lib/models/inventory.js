var Waterline = require('Waterline');

// User model definition
var Inventory = Waterline.Collection.extend({
  identity: 'inventory',
  connection: 'zssn-postgres',

  attributes: {
    item_type: {
      type: 'string',
      enum: ['agua', 'comida', 'medicamento', 'municao']
    }
  }
});

module.exports = Inventory;
