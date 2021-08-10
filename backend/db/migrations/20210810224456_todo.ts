import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('todo', table => {
        table
            .uuid('id')
            .primary()
            .index()
            .unique()
            .notNullable()
            .defaultTo(knex.raw('gen_random_uuid()'));
        table.string('todo').notNullable();
        table.boolean('finished').defaultTo(false);
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('todo');
}
