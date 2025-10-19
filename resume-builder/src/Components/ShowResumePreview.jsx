import React from 'react'

function ShowResumePreview({ data, theme }) {
    const baseStyle = "p-6 rounded-lg border text-sm leading-relaxed transition-all duration-200";
  const themes = {
    modern: "bg-white border-blue-300 text-gray-800",
    minimal: "bg-gray-50 border-gray-200 text-gray-700",
    classic: "bg-yellow-50 border-yellow-300 text-gray-900",
  };
  return (
    <div className={`${baseStyle} ${themes[theme]}`}>
      <h1 className="text-3xl font-bold">{data.name || "Your Name"}</h1>
      <p className="text-blue-600 font-medium">{data.title || "Your Title"}</p>

      <div className="mt-2 text-sm text-gray-600">
        <p>{data.email || "email@example.com"}</p>
        <p>{data.phone || "123-456-7890"}</p>
      </div>

      <hr className="my-3" />

      <section>
        <h2 className="text-lg font-semibold mb-1">Education</h2>
        <p>{data.education || "Your education details go here..."}</p>
      </section>

      <section className="mt-2">
        <h2 className="text-lg font-semibold mb-1">Experience</h2>
        <p>{data.experience || "Your work experience goes here..."}</p>
      </section>

      <section className="mt-2">
        <h2 className="text-lg font-semibold mb-1">Projects</h2>
        <p>{data.projects || "Project details or descriptions go here..."}</p>
      </section>

      <section className="mt-2">
        <h2 className="text-lg font-semibold mb-1">Skills</h2>
        <p>{data.skills || "List your skills here..."}</p>
      </section>
    </div>
  )
}

export default ShowResumePreview