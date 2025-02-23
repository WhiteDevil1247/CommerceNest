const { NlpManager } = require('node-nlp');

const manager = new NlpManager({ languages: ['en'] });

manager.addDocument('en', 'hello', 'greetings.hello');
manager.addDocument('en', 'hi', 'greetings.hello');
manager.addDocument('en', 'how are you', 'greetings.howareyou');
manager.addDocument('en', 'what is the process for registering a business', 'business.registration.process');
manager.addDocument('en', 'what documents are needed', 'business.documents.needed');
manager.addDocument('en', 'how to file ITR', 'business.itr.filing');
manager.addDocument('en', 'what is the cost', 'business.cost');
manager.addDocument('en', 'how long does it take', 'business.time');

manager.addAnswer('en', 'greetings.hello', 'Hello! How can I assist you today?');
manager.addAnswer('en', 'greetings.howareyou', 'I am just a bot, but I am here to help you!');
manager.addAnswer('en', 'business.registration.process', 'The process involves several steps including document generation, certification, and registration. Our platform guides you through each step.');
manager.addAnswer('en', 'business.documents.needed', 'The required documents depend on your business type. You can generate a tailored list using our platform.');
manager.addAnswer('en', 'business.itr.filing', 'Our ITR filing assistant simplifies the process. You can use it directly from our platform.');
manager.addAnswer('en', 'business.cost', 'The cost varies based on your business type and the services you require. Our platform provides a detailed breakdown.');
manager.addAnswer('en', 'business.time', 'The time taken depends on the complexity of your business and the documents required. Our platform helps streamline the process.');

const handleQuery = async (req, res) => {
  const { query } = req.body;
  const response = await manager.process('en', query);
  res.json({ response: response.answer });
};

module.exports = {
  handleQuery,
};