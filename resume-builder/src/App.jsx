import React,{ useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShowResumePreview from './Components/ShowResumePreview';
import ResumeForm from './Components/ResumeForm';
import TemplateSelector from './Components/TemplateSelector';

function App() {
  const [theme, setTheme] = useState("standard");
  const [resumeData, setResumeData] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    projects: "",
    skills: "",
  });

  //  useEffect(() => {
  //   localStorage.setItem("resumeData", JSON.stringify(resumeData));
  // }, [resumeData]);


//  const [isLoaded, setIsLoaded] = useState(false); 
 
  useEffect(() => {
    const saved = localStorage.getItem("resumeData");
    if (saved) {
      setResumeData(JSON.parse(saved));
    }
    // setIsLoaded(true); 
  }, []);

 
 useEffect(() => {
   localStorage.setItem("resumeData", JSON.stringify(resumeData));
   
  }, [resumeData]);
 

 

  return (
    <>
       <div className="min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row gap-6">
     
      <div className="w-full md:w-1/2 bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Resume Builder</h1>
        <TemplateSelector theme={theme} setTheme={setTheme} />
        <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
      </div>

     
      <div className="w-full md:w-1/2 bg-white shadow-lg rounded-2xl p-6 overflow-auto">
        <h2 className="text-xl font-semibold mb-3 text-gray-700">Live Preview</h2>
        <ShowResumePreview data={resumeData} theme={theme} />
      </div>
    </div>
    </>
  )
}

export default App
