import Image from "next/image";

export default function OurPartners() {
  const stories = [
    {
      id: 1,
      img: "/website-ui/our-partners.svg",
      alt: "Kwara State University",
    },
    {
      id: 2,
      img: "/website-ui/our-partners-2.svg",
      alt: "Ministry of Education",
    },
  ];

  return (
    <div className="w-full grid gap-12">
      <div className="text-[#183668] text-center">
        <h1 className="uppercase font-bold text-4xl md:text-6xl">
          Our Partners
        </h1>
      </div>
      <div className="grid grid-flow-col gap-2 sm:gap-5">
        {stories.map((story) => (
          <div key={story.id} className="grid gap-2">
            {/* Image */}
            <div className="w-full h-[250px] relative">
              <Image
                src={story.img}
                alt={story.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
