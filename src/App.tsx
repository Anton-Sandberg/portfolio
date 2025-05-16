import Navbar from "@components/navbar/Navbar";
import AppRoutes from "@router/AppRoutes";
import Container from "@components/Container";

function App() {
  return (
    <div className="min-h-screen bg-black text-primary font-nunito">
      <Navbar />
      <main>
        <Container>
          <AppRoutes />
        </Container>
      </main>
    </div>
  );
}

export default App;
