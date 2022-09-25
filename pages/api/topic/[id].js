import connect from '../../../utils/mongooseConnect'
import Subject from '../../../models/subjectModel'
import Topic from '../../../models/topicModel'

export default async function handler(req,res){
      const id = req.query.id;
      connect();
      try {
        const topic = await Topic.create(req.body);
        const subject = await Subject.findById(id);
        subject.topics.push(topic);
        await subject.save();
        res.json({ topic, subject });
      } catch (err) {
        res.json(err);
      }
}