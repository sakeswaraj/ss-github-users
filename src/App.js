import { Routes, Route } from "react-router-dom";
import { Dashboard, Error } from "./routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
