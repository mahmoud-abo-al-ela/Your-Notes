import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute, Register, Home } from "./pages";
import { SharedLayout, Profile } from "./pages/dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
