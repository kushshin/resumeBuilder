import React from 'react'

function TemplateSelector({ theme, setTheme }) {
     const themes = ["standard", "minimal", "classic"];
  return (
     <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Select Template</label>
      <div className="flex gap-3">
        {themes.map((t) => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            className={`px-3 py-1 rounded-full border ${
              theme === t ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 border-gray-300"
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TemplateSelector