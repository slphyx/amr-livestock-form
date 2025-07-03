// pages/index.tsx
import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [formData, setFormData] = useState({
    farmId: '',
    animalType: '',
    testDate: '',
    testResult: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted (no data saved in this version)');
    setFormData({ farmId: '', animalType: '', testDate: '', testResult: '', notes: '' });
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <Head><title>AMR Livestock Test Form</title></Head>
      <h1 className="text-xl font-bold mb-4">Submit AMR Test Result</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1" htmlFor="farmId">Farm ID</label>
          <input className="w-full border px-2 py-1" name="farmId" value={formData.farmId} onChange={handleChange} required />
        </div>

        <div>
          <label className="block mb-1" htmlFor="animalType">Animal Type</label>
          <input className="w-full border px-2 py-1" name="animalType" value={formData.animalType} onChange={handleChange} required />
        </div>

        <div>
          <label className="block mb-1" htmlFor="testDate">Test Date</label>
          <input className="w-full border px-2 py-1" type="date" name="testDate" value={formData.testDate} onChange={handleChange} required />
        </div>

        <div>
          <label className="block mb-1" htmlFor="testResult">Test Result</label>
          <textarea className="w-full border px-2 py-1" name="testResult" value={formData.testResult} onChange={handleChange} required />
        </div>

        <div>
          <label className="block mb-1" htmlFor="notes">Additional Notes</label>
          <textarea className="w-full border px-2 py-1" name="notes" value={formData.notes} onChange={handleChange} />
        </div>

        <button className="bg-blue-500 text-white px-4 py-2" type="submit">Submit</button>
      </form>
    </div>
  );
}

