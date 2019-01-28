import { mergeTypes } from 'merge-graphql-schemas'
// import your types here
import Hello from './Hello'

const typeDefs: any[] = [Hello]

export default mergeTypes(typeDefs, { all: true })