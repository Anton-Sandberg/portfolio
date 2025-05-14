import { Outlet } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import AppRoutes from "./assets/router/AppRoutes";
import Container from "./assets/components/Container";

function App() {
  return (
    <div className="min-h-screen bg-black text-neutral-500">
      <Navbar />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <AppRoutes />
    </div>
  );
}

export default App;
