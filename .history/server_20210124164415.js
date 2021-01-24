const express = require('express');
const expressGraphQL = require('express-graphql');
const app = express();


app.use('/graphql', expressGraphQL({
    graphql: true
}))
app.listen(5000., () => {console.log("Running");})