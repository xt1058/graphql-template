export default {
    Query: {
        Hello: async (root, {}, ctx, info) => {
            console.log(ctx)
            return 'Hello world :)'
        }
    }
}