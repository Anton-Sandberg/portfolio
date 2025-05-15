import Container from "@components/Container.tsx";
import MobileNavbar from "@components/navbar/NavbarMenuMobile.tsx";
import NavbarMenu from "@components/navbar/NavBarMenu.tsx";

const Navbar = () => {
  return (
    <header className="bg-black sticky top-0 z-50 pt-2 pb-2 drop-shadow-[0_4px_10px_rgba(0,0,0,1)]">
      <Container>
        <div className="hidden md:block pl-8">
          <NavbarMenu />
        </div>

        <div className="block md:hidden">
          <MobileNavbar />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
