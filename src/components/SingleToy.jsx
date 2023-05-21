import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleToy = () => {
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/singleToys/${id}`)
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  }, []);
  return <div>single toy</div>;
};

export default SingleToy;
