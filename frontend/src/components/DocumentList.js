import React from 'react';

function DocumentList() {
  const documents = [
    'Business License',
    'Tax Identification Number',
    'Employment Identification Number',
    'Sales Tax Permit',
    'Zoning Permit',
    'Health Department Permit',
    'Sign Permit',
    'Fire Department Permit',
    'Building Permit',
    'Occupancy Permit',
  ];

  return (
    <section id="documents" className="my-8">
      <h2 className="text-2xl font-bold mb-4">Generated Documents List</h2>
      <ul>
        {documents.map((doc, index) => (
          <li key={index} className="mb-2">{doc}</li>
        ))}
      </ul>
    </section>
  );
}

export default DocumentList;