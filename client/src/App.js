import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PREVIEW } from "./api";
import "./App.css";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CreateListing from "./pages/CreateListing";
import ListingDetails from "./pages/ListingDetails";

import WishList from "./pages/WishList";
import PropertyList from "./pages/PropertyList";
import CategoryPage from "./pages/CategoryPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {!PREVIEW && <Route path="/register" element={<RegisterPage />} />}
          {!PREVIEW && <Route path="/login" element={<LoginPage />} />}
          {!PREVIEW && <Route path="/create-listing" element={<CreateListing />} />}
          <Route path="/properties/:listingId" element={<ListingDetails />} />
          <Route path="/properties/category/:category" element={<CategoryPage />} />
          <Route path="/properties/search/:search" element={<SearchPage />} />
          {!PREVIEW && <Route path="/:userId/wishList" element={<WishList />} />}
          {!PREVIEW && <Route path="/:userId/properties" element={<PropertyList />} />}
          {/* preview: account pages and unknown addresses go back to the home page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
