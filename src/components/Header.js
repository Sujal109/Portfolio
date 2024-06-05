import SUJAL from "../images/SujalAggarwal.jpg"
const Header = () => {
  return (
    <>
    <div className="flex justify-center">
    <div className=" font-serif w-3/5 p-64 bg-slate-400">
        <div className="text-3xl">
            Hi , My name is 
        </div>
        <div className="text-8xl">
          SUJAL<br />AGGARWAL
        </div>
        <div>
          I am a full stack web developer based in Delhi, India.
        </div>
      </div>
      <div className="bg-slate-400 w-2/5 flex justify-center items-center" >
       <img className="w-96 h-96 rounded-full" src={SUJAL} alt="" />
      </div>
    </div>
      
    </>
  )
}

export default Header
