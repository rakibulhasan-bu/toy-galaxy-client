import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleToy = () => {
  const [toy, setToy] = useState({});
  const {
    subCategory,
    sellerName,
    rating,
    quantity,
    price,
    photoUrl,
    name,
    email,
    description,
  } = toy || {};
  console.log(toy);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://toy-galaxy-server-two.vercel.app/singleToys/${id}`)
      .then((res) => res.json())
      .then((result) => setToy(result))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="container mx-auto flex flex-col gap-y-6 py-12"
    >
      <h2 className="gradient text-center text-5xl font-semibold">{name}</h2>
      <div className="mx-auto h-[60vh] w-10/12">
        <img
          className="h-full w-full rounded-lg object-cover object-center"
          src={photoUrl}
          alt="car image"
        />
      </div>
      <div className="space-y-4 px-12 text-lg">
        <div className="mx-auto w-8/12">
          <div className="flex items-center justify-between text-lg font-medium text-gray-800">
            <div>
              <p>
                Seller Email: <span className="gradient"> {email}</span>
              </p>
              <p>
                Toy price: <span className="gradient">{price}</span>
              </p>
              <p>
                Available Quantity: <span className="gradient">{quantity}</span>
              </p>
            </div>
            <div>
              <p>
                Seller Name: <span className="gradient">{sellerName}</span>
              </p>
              <p>
                Rating: <span className="gradient">{rating}</span>
              </p>
              <p>
                Sub Category: <span className="gradient">{subCategory}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="text-lg text-gray-800">
          <p className="font-medium text-gray-800">Toy description: </p>
          <p className="text-lg text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
