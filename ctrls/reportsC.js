import { readFileByPath , saveDataInFile } from "../utils/utils.js";

export const getReports = async (req, res) => {
    try {
        const reports = await readFileByPath('./data/reports.json')
        res.json(reports)

    } catch (error) {
        res.json(error)
   }
}
export const getById = async (req, res) => {
    try {
        const reports = await readFileByPath('./data/reports.json')
        const objReports = reports.findIndex(agent => agent.id === req.params.id)
        
        if(objReports !== -1){
            res.json(reports[objReports])
        
        } else {
            res.json("not faund: ")
        }
        
    } catch (error) {
        res.json(error)
   }
}
export const createReport = async (req , res) => {
        const reports = await readFileByPath('./data/reports.json')
        const agents = await readFileByPath('./data/agents.json')
        const match = agents.find(agent => agent.id === req.body.agentId)

        if(match){
        const report = {
            id: String(reports.length + 1),
            date:new Date().toISOString(),
            content: req.body.content,
            agentId: req.body.agentId
            }                       
            reports.push(report) 
            saveDataInFile('./data/reports.json', reports)
            res.send("Reports created: ")
        } else {       
            res.status(401).json('Reports is alrdy exists: ')
        }
        
}
export const updateReports = async(req,res)=>{
    try {
        const reports = await readFileByPath('./data/reports.json')

        const indexReports = reports.findIndex(report => report.id === req.params.id)
        
        if(indexReports !== -1 && req.body.content !== undefined ){
            reports[indexReports].content = req.body.content
            saveDataInFile('./data/reports.json', reports)
            res.send("end")
        } else {res.send("not faund: ")}
        
    } catch (error) {
        res.status()
    }
}
export const deleteReport = async(req,res)=>{
    try {
        const reports = await readFileByPath('./data/reports.json')
        const agents = await readFileByPath('./data/agents.json')
        const indexReports = reports.findIndex(report => report.id === req.params.id)        
        const indexAgents = agents.findIndex(agent => reports[indexReports].agentId === agent.id)
                
        if(indexReports !== -1 && indexAgents !== -1){
            agents[indexAgents].reportsCount -= 1
            const updatedReports = reports.filter(report => report.id !== req.params.id);            
            saveDataInFile('./data/reports.json', updatedReports)
            saveDataInFile('./data/agents.json', agents)
            res.send("delet report:")
        } else {
            res.send("report not exsist")
        }
        
    } catch (error) {
        res.status(404)
    }
}