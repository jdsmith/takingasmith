exports.up = function(knex) {
    return knex.schema.createTable('guest', t => {
        t.increments();
        t.string('firstName');
        t.string('lastName');
        t.boolean('hasResponded');
        t.boolean('isAttending');
        t.biginteger('invitationId').unsigned().notNullable().references('id').inTable('invitation').index();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('guest');
};
