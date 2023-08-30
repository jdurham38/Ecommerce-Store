import Link from "next/link";
import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center space-x-4">
          <Link href="/" className="flex gap-x-2">
            <p className="font-bold text-xl">Ice Gainz</p>
          </Link>
          <Link href="/about" className="flex gap-x-2">
            <p>About Us</p>
          </Link>
          <Link href="/cateringforbusiness" className="flex gap-x-2">
            <p>Catering For Your Business</p>
          </Link>
          <Link href="/faq" className="flex gap-x-2">
            <p>FAQs</p>
          </Link>
          <Link href="/contact" className="flex gap-x-2">
            <p>Contact Us</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
