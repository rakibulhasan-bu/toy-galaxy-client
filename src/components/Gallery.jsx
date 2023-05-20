const Gallery = () => {
  const carsImage = [
    {
      title: "Lightning Racer",
      subTitle: "Supersonic Lightning Speedster",
      img: "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1684585532/Website-assets/Toy%20Galaxy/Lightning_Racer_cwkygm.jpg",
    },
    {
      title: "Turbo Tornado",
      subTitle: "Thrilling Turbocharged Tornado",
      img: "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1684602183/Website-assets/Toy%20Galaxy/Turbo_Tornado_u1hh6b.jpg",
    },
    {
      title: "Monster Crusher",
      subTitle: "Mighty Monster Crusher Machine",
      img: "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1684602263/Website-assets/Toy%20Galaxy/Monster_Crusher_vuyvei.jpg",
    },
    {
      title: "Fire Blaster ",
      subTitle: "Blazing Fire-Rescue Hero",
      img: "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1684602307/Website-assets/Toy%20Galaxy/Fire_Blaster_y35efl.jpg",
    },
    {
      title: "LEGO Technic",
      subTitle: "Ultra-Fast Speed Demon",
      img: "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1684602381/Website-assets/Toy%20Galaxy/LEGO_Technic_rkdqxt.jpg",
    },
    {
      title: "Turbocharged Thunder",
      subTitle: "Speedy Thunderbolt Racer",
      img: "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1684602446/Website-assets/Toy%20Galaxy/Turbocharged_Thunder_o25hvi.jpg",
    },
    // {
    //   title: "Dino Roamer",
    //   subTitle: "Roaring Dino Adventure Car",
    //   img: "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1684602581/Website-assets/Toy%20Galaxy/Dino_Roamer_xvd1yi.jpg",
    // },
    // {
    //   title: "Rocket Racer",
    //   subTitle: "Epic Rocket-Powered Speedster",
    //   img: "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1684602637/Website-assets/Toy%20Galaxy/Rocket_Racer_ovzx6n.jpg",
    // },
  ];
  return (
    <section className="container mx-auto px-6 py-16">
      <h1 className="text-center text-2xl font-semibold capitalize text-gray-800 lg:text-4xl ">
        Car Craze <span className="gradient">Gallery</span>
      </h1>

      <p className="mt-4 text-center text-gray-500 ">
        Explore Captivating Moments and Adventures in our Toy Galaxy Gallery
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3">
        {carsImage &&
          carsImage.map((car, i) => (
            <div key={i} className="relative flex h-72">
              <img
                alt="gallery"
                className="absolute inset-0 h-full w-full rounded-lg object-cover object-center"
                src={car.img}
                loading="lazy"
              />
              <div className="relative z-10 flex w-full flex-col justify-center rounded-lg bg-gray-800/60 px-8 py-10 opacity-0 backdrop-blur-sm transition-opacity duration-700 hover:opacity-100">
                <h2 className="text-3xl font-semibold capitalize text-white">
                  {car.title}
                </h2>

                <p className="text-md mt-2 tracking-wider text-cyan-200">
                  {car.subTitle}
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Gallery;
