
exports.up = function(knex) {
    return knex.schema.createTable('invitation', t => {
        t.increments();
        t.integer('rsvpCode');
        t.string('streetAddress');
        t.string('city');
        t.string('state');
        t.string('zipCode');
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('invitation');
};
