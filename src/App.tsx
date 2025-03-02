import { Route, Routes } from "react-router";
import Sidebar from "./components/Sidebar";
import Dashboard from "./content/Dashboard";
import Users from "./content/Users";
import Movies from "./content/Movies";
import Series from "./content/Series";
import ErrorMessages from "./components/ErrorMessages";

function App() {
  return (
    <>
      <div className="flex items-start min-h-screen bg-body-bg font-msemibold w-full max-screen1200:pt-15">
        <Sidebar />
        <div className="content w-full p-8 max-screen500:p-3">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/comments" element={<Dashboard />} />
            <Route path="/error_messages" element={<ErrorMessages />} />
            <Route path="/schedule" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
