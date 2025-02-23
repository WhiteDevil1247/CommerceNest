import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="registration" className="my-8">
      <h2 className="text-2xl font-bold mb-4">User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Business Type:</label>
          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          >
            <option value="">Select Business Type</option>
            <option value="small">Small Business</option>
            <option value="medium">Medium Business</option>
            <option value="large">Large Business</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
      </form>
    </section>
  );
}

export default RegistrationForm;