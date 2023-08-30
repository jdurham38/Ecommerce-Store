import Container from "@/components/ui/container";
import Image from 'next/image';

export const revalidate = 0;

const AboutPage = () => {

  const profiles = [
    {
      name: "Meet The Team!",
      description: "Ice Gainz, an innovative company that originated in a college apartment, is a unique haven for those striving to either gain or lose weight without compromising on the joy of delightful treats. Recognizing the challenges of fitness journeys, Ice Gainz reshapes the conventional approach by offering a delectable solution. By harmoniously blending scrumptious flavors with health aspirations, Ice Gainz redefines wellness. Our treats are meticulously crafted to cater to diverse goals while ensuring an enjoyable experience. Ice Gainz isn't just a brand; it's a commitment to savoring the path to a healthier you.",
      imageUrl: "/josh.jpg",
    },
    {
      name: "Co-Owner & Chef Giuseppe",
      description: "Meet the culinary virtuoso, Chef Giuseppe, whose personal journey towards weight loss led to a remarkable creation. Driven by his own aspirations, Giuseppe embarked on a mission to craft an exquisite yet health-conscious ice cream recipe. Through unwavering dedication and a keen understanding of flavors, he ingeniously concocted a delectable treat that not only catered to his weight loss goals but also delighted the palates of many. Chef Giuseppe's culinary prowess and determination shine through in every scoop of his masterful creation, reflecting his passion for both fine cuisine and personal well-being.",
      imageUrl: "/josh.jpg",
    },
    {
      name: "Owner Josh",
      description: "Josh, the visionary owner of Ice Gainz, is a living testament to the power of determination and transformation. His own battle with weight loss ignited the spark that gave birth to Ice Gainz's unique concept. Fueled by his personal struggles, Josh embarked on a mission to create a haven where health and flavor could coexist harmoniously. Through his relentless dedication, he not only overcame his own challenges but also inspired a community of individuals on their own wellness journeys. Josh's unwavering commitment to turning his struggles into strength is evident in every facet of Ice Gainz, as he continues to steer the company towards empowering others to embrace their own transformations with confidence and delight.",
      imageUrl: "/josh.jpg",
    },
    {
    name: "Co-Owner Alex",
    description: "Alex, a pivotal force behind Ice Gainz's inception, played a key role in shaping the company's visionary concept. Collaborating closely with Josh, Alex infused the initial spark of inspiration with creativity and ingenuity. While instrumental in laying the foundation, Alex embarked on new adventures that led to his departure from the company. His contributions remain embedded in Ice Gainz's DNA, a testament to his dedication and innovative spirit. Though on a different path now, Alex's legacy continues to inspire the brand's evolution, serving as a reminder that great ventures are often a tapestry woven by various visionary minds.",
    imageUrl: "/alexicegainz.jpg",
  },
    
    {
      name: "Marketing Director Christina",
      description: "Christina, the driving force behind Ice Gainz's strategic outreach, occupies the pivotal role of Marketing Director. With a profound understanding of both the brand's ethos and the dynamic fitness landscape, Christina orchestrates compelling campaigns that resonate with the company's diverse audience. Her expertise in crafting narratives that seamlessly weave health-consciousness and indulgence has elevated Ice Gainz's visibility and engagement. Christina's unwavering dedication to inspiring others to embark on their health journeys with a touch of delight underscores her role as a key architect of Ice Gainz's success story.",
      imageUrl: "/christinaicegainz.jpeg",
    },
  ];

  return (
    <Container>
      <h1 className="text-3xl font-semibold flex justify-center items-center pb-20 pt-10">About Us</h1>
      <div className="space-y-10 pb-10">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center space-x-10`}
          >
            <div className="w-1/2">
              <Image
                src={profile.imageUrl}
                alt={`${profile.name} Image`}
                width={400}
                height={300}
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl font-semibold mb-2">{profile.name}</h2>
              <p>{profile.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AboutPage;
