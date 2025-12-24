import { readFileByPath , saveDataInFile } from "../utils/utils.js";


export const getOk =  (req,res) => {
    try {
        res.json({ok: true});

    } catch (error) {
        res.status(500).json({ error: "Failed to conact server " });
    }

}
export const getUsers = async (req, res) => {
    try {
        const users = await readFileByPath('./data/users.json')
        res.json(users)

    } catch (error) {
        res.json(error)
   }
}
export const createUser = async (req , res) => {
        const users = await readFileByPath('./data/users.json')
        const match = users.find(user => user.username === req.body.username)
        if(!match){
            users.push(req.body)
            
            saveDataInFile('./data/users.json', users)
            res.send("User created: ")
        } else {       
            res.status(401).json('user is alrdy exsist: ')
        } 
}
export const updateUser = async(req,res)=>{
    try {
        const users = await readFileByPath('./data/users.json')
        const index = users.findIndex(user => user.username === req.params.username)
     
        users[index].password = req.body.password
        saveDataInFile('./data/users.json', users)
        res.send("end")
    } catch (error) {
        res.status()
    }
}
export const deleteUser = async(req,res)=>{
    try {
        const users = await readFileByPath('./data/users.json')
        const obj = users.find(user => user.username === req.params.username)
                
        if(obj){
            const updatedUsers = users.filter(user => user.username !== req.params.username);
            saveDataInFile('./data/users.json', updatedUsers)
            res.send("delet user:")
        } else {
            res.send("not exsist")
        }
        
    } catch (error) {
        res.status(404)
    }
}