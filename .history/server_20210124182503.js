const { query } = require('express');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,

} = require('graphql');
const app = express();

// const schema = new GraphQLSchema({
//     query: new GraphQLObjectType({
//         name: 'HelloWorld',
//         fields: () => ({
//             message: {
//                 type: GraphQLString,
//                 resolve: () => 'Hello World'
//             }
//         })
//     })
// })

const BookType = new GraphQLObjectType({
    name: 'Book',

})

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => {
        books: {
            type: new GraphQLList(BookType);
            description: 'List Of Books';
            resolve: () => {

            }
        }
    }
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphql: true
}))

app.listen(5000., () => {console.log("Running");})