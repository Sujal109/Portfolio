import SUJAL from "../images/SujalAggarwal.jpg";

const Header = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center p-2 md:p-4 bg-slate-400">
        <div className="font-serif w-full md:w-3/5 p-4 md:p-8 lg:p-32 bg-slate-400 text-center md:text-left">
          <div className="text-2xl md:text-4xl lg:text-5xl">
            Hi, My name is
          </div>
          <div className="text-3xl md:text-6xl lg:text-8xl mt-2 md:mt-4">
            SUJAL<br />AGGARWAL
          </div>
          <div className="text-base md:text-xl lg:text-2xl mt-4">
            I am a full stack web developer based in Delhi, India.
          </div>
        </div>
        <div className="bg-slate-400 w-full md:w-2/5 flex justify-center items-center mt-4 md:mt-0">
          <img className="w-32 h-32 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-full" src={SUJAL} alt="Sujal Aggarwal" />
        </div>
      </div>
    </>
  );
};

export default Header;
