
import Compass from "../Components/Compass";
import Legend from "../Components/Legend";

function SiteTour() {

 
    return (
      <>
        <div className="w-full flex flex-col items-center justify-between ">
      <Compass/>
  {/* legend */}
<Legend/>
        </div>
      </>
    );
  }
  
  export default SiteTour;
  