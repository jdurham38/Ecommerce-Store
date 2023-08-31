import Container from '@/components/ui/container';
import CartPageClient from '@/components/ui/cart-client'; // Import the client-side component

export const revalidate = 0;

const CartPage = () => {
  return (
    <Container>
      <section>
        <h1 className="text-3xl font-semibold flex justify-center items-center pb-20 pt-10">Shopping Cart</h1>
      </section>
      <CartPageClient /> {/* Include the client-side component */}
    </Container>
  );
};

export default CartPage;
