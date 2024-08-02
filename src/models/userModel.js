
const { Model } = require('objection');

class User extends Model {
   
    static get tableName() {
        return 'users';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name', 'state', 'number', 'email'],

            properties: {
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1, maxLength: 255 },
                state: { type: 'string', minLength: 1, maxLength: 255 },
                number: { type: 'string', minLength: 1, maxLength: 15 },
                email: { type: 'string', format: 'email', minLength: 1, maxLength: 255 },
                created_at: { type: 'string', format: 'date-time' },
                updated_at: { type: 'string', format: 'date-time' }
            }
        };
    }

    // Define the primary key column
    static get idColumn() {
        return 'id';
    }
}

module.exports = User;
