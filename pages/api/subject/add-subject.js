import connect from '../../../utils/mongooseConnect'
import Subject from '../../../models/subjectModel'

export default async function blog(req,res) {
    connect()
    try{
        const subject = await Subject.create(req.body)
        res.json(subject)
    }catch(err){
        res.json(err)
    }
}