import { reasonsILoveYou } from "../constants";

function LoveReasons() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 py-8 px-4">
      {/* Header Section */}
      <div className="flex justify-center items-center mb-8 animate-fade-in-down">
        <img 
          className="h-20 mr-4 animate-float" 
          src="/Images/pimg/iconOne.png" 
          alt="Heart icon" 
        />
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text  custom-font">
          100 Reasons Why I Love You
        </h1>
        <img 
          className="h-20 ml-4 animate-float-delayed" 
          src="/Images/Kuromi.png" 
          alt="Kuromi character" 
        />
      </div>

      {/* Reasons Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasonsILoveYou.map((item) => (
          <div 
            key={item.number}
            className="relative bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 group"
          >
            {/* Decorative Elements */}
            <div className="absolute top-2 right-2 text-pink-400 text-2xl">
              ❤️
            </div>
            
            {/* Number Badge */}
            <div className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center absolute -top-4 -left-4 shadow-md">
              {item.number}
            </div>

            {/* Reason Text */}
            <p className="text-pink-900 text-lg font-medium leading-relaxed pl-4 border-l-4 border-pink-200">
              {item.reason}
            </p>

            {/* Hover Effect Decoration */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-pink-50 group-hover:bg-pink-200 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* Floating Decorations */}
      <div className="fixed top-20 left-0 w-15  animate-float">
        <img  src="/Images/melody.png" alt="heart decoration" />
      </div>
      <div className="fixed bottom-10 right-0 w-15  animate-float-delayed">
        <img src="/Images/Kuromi2.png" alt="sparkle decoration" />
      </div>
    </div>
  );
}

export default LoveReasons;