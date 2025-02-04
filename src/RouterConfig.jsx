import SiteTour from "./assets/pages/SiteTour.jsx";
import MikiGallery from "./assets/pages/MikiGallery.jsx";
import BdayBoard from "./assets/pages/BdayBoard.jsx";
import LoveReason from "./assets/pages/LoveReasons.jsx";
import ArtGallery from "./assets/pages/ArtGallery.jsx";
import Admin from "./assets/pages/Admin.jsx";
import { Route, Routes } from "react-router";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
//clerk key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/map" element={<SiteTour />} />
      <Route path="/miki" element={<MikiGallery />} />
      <Route path="/ily" element={<LoveReason />} />
      <Route path="/notes" element={<BdayBoard />} />
      <Route path="/art" element={<ArtGallery />} />
      <Route
        path="/admin"
        element={
          <ClerkProvider  publishableKey={PUBLISHABLE_KEY} >
            <Admin />
          </ClerkProvider>
        }
      />
    </Routes>
  );
}

export default RouterConfig;
