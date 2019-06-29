import { ForbiddenError } from 'apollo-server-koa'

export const isAuth = next => (root, args, context) => {
    if(!context.auth){
        throw new ForbiddenError("Need a valid token")
    }

    return next(root, args, context)
}