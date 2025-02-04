import SiteTour from "./assets/pages/SiteTour.jsx";
import MikiGallery from "./assets/pages/MikiGallery.jsx";
import BdayBoard from "./assets/pages/BdayBoard.jsx";
import LoveReason from "./assets/pages/LoveReasons.jsx";
import ArtGallery from "./assets/pages/ArtGallery.jsx";
import Admin from "./assets/pages/Admin.jsx";
import SignInPage from "./assets/pages/SignInPage.jsx";
import { NavLink, Route, Routes } from "react-router";
import App from "./App.jsx";
import { ClerkProvider,SignedIn,SignedOut} from "@clerk/clerk-react";
//clerk key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
function RouterConfig() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<App />} />
      <Route path="/map" element={<SiteTour />} />
      <Route path="/miki" element={<MikiGallery />} />
      <Route path="/ily" element={<LoveReason />} />
      <Route path="/notes" element={<BdayBoard />} />
      <Route path="/art" element={<ArtGallery />} />
      
      {/* Authentication Routes */}
      <Route path="/signin" element={<SignInPage />} />
      
      {/* Protected Admin Route */}
      <Route 
        path="/admin" 
        element={
          <>
            <SignedIn>
              <Admin />
            </SignedIn>
            <SignedOut>
            <div className="w-full flex justify-center items-center h-screen flex-col">
          <h1 className="text-red-600 text-2xl font-mono">Go back! This isnt where you are supposed to be</h1>
          <div className="flex flex-col gap-5">
          <NavLink className="rounded-lg p-3  h-12 bg-blue-400 text-center mt-10 text-white" to="/signin">Admin Sign In</NavLink>
          <NavLink className="rounded-lg p-3  h-12 bg-green-400 mt-10 text-center text-white" to="/">Click here to go back</NavLink>
          </div>
        </div>
            </SignedOut>
          </>
        } 
      />
    </Routes>
  </ClerkProvider>
  );
}

export default RouterConfig;
