
const Profile=({age, year=new Date().getFullYear()})=>{
    return(
      <div className="h-screen flex flex-col items-center justify-center bg-gray-900">
        <h1 className="text-2xl text-white font-mono">Hey my name is Aliyan!</h1>
        <h2 className="text-2xl text-white font-mono">My age is: {age}</h2>
        <h2 className="text-2xl text-white font-mono">The year: {year}</h2>
        <p className="text-2xl text-white font-mono">i'm learning and preacticing react</p>
      </div>
    )
  }
  
  export default Profile