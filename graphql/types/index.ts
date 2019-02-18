import { mergeTypes } from 'merge-graphql-schemas'
import { importSchema } from 'graphql-import'

// import your types here
const Hello = importSchema(__dirname + '/Hello/index.graphql')

const typeDefs: any[] = [Hello]

export default mergeTypes(typeDefs, { all: true })