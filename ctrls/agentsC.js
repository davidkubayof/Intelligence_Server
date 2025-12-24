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
            res.status(401).json('user is alrdy exists: ')
        } 
}
export const updateAgent = async(req,res)=>{
    try {
        const agents = await readFileByPath('./data/agents.json')
        const index = agents.findIndex(agent => agent.id === req.params.id)
        
        if(index !== -1){
            agents[index].id = req.body.id
            saveDataInFile('./data/agents.json', agents)
            res.send("end")
        } else {res.send("not faund: ")}
        
    } catch (error) {
        res.status()
    }
}
export const deleteAgent = async(req,res)=>{
    try {
        const agents = await readFileByPath('./data/agents.json')
        const obj = agents.find(agent => agent.id === req.params.id)
                
        if(obj){
            const updatedAgents = agents.filter(agent => agent.id !== req.params.id);
            console.log(updatedAgents);
            
            saveDataInFile('./data/agents.json', updatedAgents)
            res.send("delet agent:")
        } else {
            res.send("agent not exsist")
        }
        
    } catch (error) {
        res.status(404)
    }
}