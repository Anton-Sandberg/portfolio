import { Outlet } from "react-router-dom";
import Navbar from "@components/navbar/Navbar";
import AppRoutes from "@router/AppRoutes";
import Container from "@components/Container";

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
