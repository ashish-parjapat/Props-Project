import Expe from './components/Expe';
import Skills from './components/Skills';
import './App.css';
import Education from './components/Education';
import Extracurriculars from './components/Extracurriculars';
import Interests from './components/ Interests';

function App() {
  const resume={
    experience:[{year:2012, company:'IT', role:'Java Developer'},{year:2018, company:'xyz', role:'Web Developet'}],
    education:[{graduation:'MDU '},{HighSchool:'M.M Public School'}],
    skills : [ 'react js', 'node js','MongoDB','Express','Linux','Python'],
    Extracurriculars:['Badmintoon','Running','Gym','Music'],
    Interests:['Travelling','Joking','GirlFriend','Sex','Reading Book']
  }





  return (
    <div className="App">
      <h1>Experinece</h1>
   {resume.experience.map((exp)=>(
      <Expe exp= {exp} />
     

     ))}

<h1> Education</h1>
    {resume.education.map((edu)=>{
      return <Education edu={edu} />
    })}

    <h1>Skills</h1>
    {resume.skills.map((skill)=>{
      return <Skills skill={skill} />
    })}
<h1>   Extracurriculars</h1>
{resume.Extracurriculars.map((extra)=>{
  return <Extracurriculars extra={extra}/>
})}

<h1>Interests</h1>
{resume.Interests.map((interest)=>{
  return <Interests interest={interest}/>
})}
     
   
    </div>
  );
}

export default App;
