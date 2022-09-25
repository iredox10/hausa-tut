import connect from '../../../utils/mongooseConnect';
import Subject from '../../../models/subjectModel';

export default async function handler(req, res) {
  connect();
  try {
    const subjects = await Subject.find();
    res.json(subjects);
  } catch (err) {
    res.json(err);
  }
}
