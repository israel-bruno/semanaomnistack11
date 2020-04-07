exports.up = function(knex) {
  //npx knex migrate:latest ** EXECUTA A MIGRAÇÃO 
  return  knex.schema.createTable('ongs', function (table) {
        
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    
    });
};
//npx knex mmigrate:rollback ** DESFAZ A ULTIMA MIGRAÇÃO CASO TENHA DADO ERRADO
exports.down = function(knex) {
 return knex.schema.dropTable('ongs');
};
