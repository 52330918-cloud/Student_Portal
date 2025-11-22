
function About() {
return(
  <div className="bg-green-50 h-screen flex flex-col items-center justify-center space-y-8">
    <div className="backdrop-blur-md bg-green-100/70 border border-green-300 shadow-lg rounded-xl p-6 max-w-2xl w-full flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">ℹ️ About</h2>
      <p className="mb-3">This portal is designed to facilitate student course registration and provide essential information about available courses.</p>
      <ul className="space-y-2">
        <li className="flex items-center gap-2">🎓 <span>Browse available courses</span></li>
        <li className="flex items-center gap-2">📝 <span>Register for courses</span></li>
        <li className="flex items-center gap-2">📋 <span>View registered courses</span></li>
      </ul>
    </div>
  </div>
   
);
    
   

}

export default About;
