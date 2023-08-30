import Link from 'next/link';
import Container from '@/components/ui/container';

const CateringForBusiness = () => {
  return (
    <Container>
      <div className="space-y-6 pb-6">
        <h1 className="text-3xl font-semibold flex justify-center items-center pb-20 pt-10">Elevate Your Business with Our Premium Ice Cream</h1>
        <p className="text-lg">
          Welcome to an opportunity that adds a delightful touch to your business offerings. Our
          premium ice cream products are tailor-made to complement your store or wellness center,
          bringing a balance of health-consciousness and indulgence to your customers.
        </p>
        <p className="text-lg">
          By introducing our ice cream, you're not only providing a delectable treat but also
          aligning with the desires of health-conscious consumers. Crafted with quality ingredients
          and a range of flavors, our products can enrich your offerings and set your business
          apart.
          
        </p>
        <p className="text-lg">
          Whether you're a store owner looking to diversify your inventory or a wellness center
          aiming to enhance your clients' experience, partnering with us means offering an
          elevated and joyful element to your business.
        </p>
        <p className="text-lg">
          If you're excited to explore how our premium ice cream can integrate seamlessly into your
          business, we're here to collaborate and create a unique offering tailored to your needs.
          Let's work together to make your business even more special.
        </p>
        <div>
          <h1 className="text-lg"><b>What's Included?</b></h1>
          <p className="text-lg mb-4">
            Elevate your business presentation with our Ice Gainz display freezer, a sleek and enticing
            addition that draws customers in. This eye-catching freezer not only showcases our
            mouthwatering ice cream protein products but also becomes a conversation starter, igniting
            curiosity and excitement among your patrons. Our selection of ice cream protein products
            caters to a range of tastes and dietary preferences, offering a guilt-free indulgence that's
            rich in flavor and protein. From classic favorites to innovative creations, our offerings
            are designed to be a standout addition to your establishment, creating a memorable experience
            that keeps customers coming back for more.
          </p>

          <div className=" flex justify-center items-center mt-20">
            <Link href="/contact">
              <div className="inline-block px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
                Contact Us to Partner
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CateringForBusiness;
