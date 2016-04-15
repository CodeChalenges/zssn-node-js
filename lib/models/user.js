var Waterline = require('Waterline');

// User model definition
var User = Waterline.Collection.extend({
  identity: 'user',
  connection: 'zssn-postgres',

  attributes: {
    name: {
      type: 'string',
      required: true
    },

    age: {
      type: 'integer',
      required: true
    },

    sex: {
      type: 'string',
      enum: ['male', 'female']
    },

    latitude: {
      type: 'float'
    },

    longitude: {
      type: 'float'
    }
  }
});

module.exports = User;
