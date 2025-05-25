import Navbar from "@components/navbar/Navbar";
import AppRoutes from "@router/AppRoutes";
import Container from "@components/Container";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-primary font-nunito">
      <Navbar />
      <main className="grow">
        <Container>
          <AppRoutes />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
