import { readFileByPath , saveDataInFile } from "../utils/utils.js";

export const getAgents = async (req, res) => {
    try {
        const agents = await readFileByPath('./data/agents.json')
        res.json(agents)

    } catch (error) {
        res.json(error)
   }
}
export const getById = async (req, res) => {
    try {
        const agents = await readFileByPath('./data/agents.json')
        const objAgent = agents.findIndex(agent => agent.id === req.params.id)
        
        if(objAgent !== -1){
            res.json(agents[objAgent])
        
        } else {
            res.json("not faund: ")
        }
        
    } catch (error) {
        res.json(error)
   }
}
export const createAgent = async (req , res) => {
        const agents = await readFileByPath('./data/agents.json')

        const match = agents.find(agent => agent.id === req.body.id)
        if(!match){
            agents.push(req.body)                        
            saveDataInFile('./data/agents.json', agents)
            res.send("User created: ")
        } else {       
            res.status(401).json('user is alrdy exsist: ')
        } 
}