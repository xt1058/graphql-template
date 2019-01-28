import { mergeResolvers } from 'merge-graphql-schemas'
// import resolvers here
import Hello from './Hello'

const resolvers: any[] = [Hello]

export default mergeResolvers(resolvers)