import connect from '../../../utils/mongooseConnect';
import Subject from '../../../models/subjectModel';

export default async function blog(req, res) {
  connect();
  const id = req.query.id
  try {
    const topics = await Subject.findById(id).populate('topics')
    res.json(topics);
  } catch (err) {
    res.json(err);
  }
}
