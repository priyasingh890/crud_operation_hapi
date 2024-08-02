exports.up = function(knex) {
    console.log(knex)
    return knex.schema.createTable('users', function(table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('state').notNullable();
        table.string('number').notNullable();
        table.string('email').notNullable(); 
        table.timestamps(true, true); 
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
