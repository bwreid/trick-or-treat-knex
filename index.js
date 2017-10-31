const env = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[env]
const knex = require('knex')(config)

// SELECT
// knex('houses').select('last_name')
//   .then(result => {
//     console.log(result)
//   })

// INSERT
// knex('houses').insert({
//   address: '111 S. Jackson Street',
//   last_name: 'Galvanize'
// }, '*').then(result => {
//   console.log(result)
// })

// UPDATE
// knex('houses').update({
//   last_name: 'g67'
// }, '*').where({
//   address: '111 S. Jackson Street'
// }).then(result => {
//   console.log(result)
// })

// DELETE
// knex('houses').delete('*')
//   .where({ address: '111 S. Jackson Street' })
//   .then(result => {
//     console.log(result)
//   })

knex.destroy()
