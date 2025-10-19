import React from 'react'

function ResumeForm({ resumeData, setResumeData }) {
    const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData({ ...resumeData, [name]: value });
  };

  const fields = [
    { label: "Full Name", name: "name" },
    { label: "Title / Role", name: "title" },
    { label: "Email", name: "email" },
    { label: "Phone", name: "phone" },
    { label: "Education", name: "education" },
    { label: "Experience", name: "experience" },
    { label: "Projects", name: "projects" },
    { label: "Skills", name: "skills" },
  ];
  return (
    <div>
        <form className="space-y-3">
      {fields.map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
          <textarea
            name={field.name}
            value={resumeData[field.name]}
            onChange={handleChange}
            rows={field.name === "education" || field.name === "experience" ? 3 : 1}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      ))}
    </form>
    </div>
  )
}

export default ResumeForm