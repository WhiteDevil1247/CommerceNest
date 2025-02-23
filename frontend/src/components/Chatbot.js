import React, { useState } from 'react';

function Chatbot() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleQuery = async () => {
    const res = await fetch('/api/chatbot/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <section id="chatbot" className="my-8">
      <h2 className="text-2xl font-bold mb-4">AI Chatbot Support</h2>
      <div className="chatbot-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded mb-4"
          placeholder="Ask a question"
        />
        <button onClick={handleQuery} className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
        <div className="response mt-4">{response}</div>
      </div>
    </section>
  );
}

export default Chatbot;