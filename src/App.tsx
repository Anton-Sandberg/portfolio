import { Outlet } from "react-router-dom";
import AppRoutes from "./assets/router/AppRoutes";
import Container from "./assets/components/Container";

function App() {
  return (
    <div className="min-h-screen bg-black text-neutral-500">
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
