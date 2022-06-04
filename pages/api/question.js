const questions = require('../../shared/json/question.json')

export default function handler(req, res) {
  res.send(questions);
}
