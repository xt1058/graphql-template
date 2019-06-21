import { mergeTypes, fileLoader } from 'merge-graphql-schemas'
import { join } from 'path'

// import all .graphql files
const typeDefs = fileLoader(join(__dirname + '/'), {extensions: ['.graphql']})

export default mergeTypes(typeDefs, { all: true })