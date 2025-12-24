import {readFileByPath} from '../utils/utils.js'

export const valid = async (req , res , next) => {
        const users = await readFileByPath('./data/users.json')
    
        const mach = users.find(user => 
            user.username === req.headers.username && 
            user.password === req.headers.password)
    
        if(mach){
            next()
        } else {       
            res.status(401).json('obj not ')
        } 
    
}