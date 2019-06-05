import { verify } from 'jsonwebtoken'
import { SECRET_KEY } from '../config'

export function isAuth(token): Boolean | Object {
    try {
        return verify(token, SECRET_KEY)
    } catch (error) {
        return false
    }
}