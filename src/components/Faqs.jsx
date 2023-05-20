import { useState } from "react";

const Faqs = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  return (
    <div className="px-4 py-9 md:px-6 md:pb-20 md:pt-16 lg:px-20 2xl:mx-auto">
      <div className="space-y-2 text-center">
        <h2 className="text-4xl font-semibold leading-10 text-gray-800">
          Frequently Asked <span className="gradient">Questions</span>
        </h2>
        <p className="text-gray-600">
          Here are few of the most frequently asked questions by our valuable
          customers
        </p>
      </div>

      <div className="mt-8 flex flex-col md:mt-14 md:flex-row md:space-x-8">
        <div className="h-[70vh] w-full md:w-5/12 lg:w-6/12">
          <img
            src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1684578170/Website-assets/Toy%20Galaxy/AdobeStock_224196166_zqstcr.jpg"
            alt="Img of child with car toys"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>

        <div className="mt-10 w-full sm:mt-14 md:mt-6 md:w-7/12 lg:w-8/12">
          {/* <!-- Section 1--> */}
          <div>
            <div className=" flex cursor-pointer items-center justify-between">
              <h3 className=" text-xl font-semibold leading-5 text-gray-800">
                What age range are these toy cars suitable for?
              </h3>
              <button
                aria-label="too"
                className="cursor-pointer focus:outline-none"
                onClick={() => setShow1(!show1)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={show1 ? "hidden" : "block"}
                    d="M10 4.1665V15.8332"
                    stroke="#1F2937"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.16602 10H15.8327"
                    stroke="#1F2937"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <p
              className={
                "mt-4 w-11/12 text-base font-normal leading-6 text-gray-600 " +
                (show1 ? "block" : "hidden")
              }
            >
              Our toy cars are designed to cater to a wide range of ages, making
              them suitable for children from 3 years and up. We understand that
              children at different stages of development have varying interests
              and abilities, so our toy car collection encompasses options that
              are age-appropriate and engaging for each age group.
            </p>
          </div>

          <hr className="my-7 bg-gray-200" />
          {/* <!-- Section 2--> */}
          <div>
            <div className=" flex cursor-pointer items-center justify-between">
              <h3 className=" text-xl font-semibold leading-5 text-gray-800">
                Are the toy cars durable and built to last?
              </h3>
              <button
                aria-label="too"
                className="cursor-pointer focus:outline-none"
                onClick={() => setShow(!show)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={show ? "hidden" : "block"}
                    d="M10 4.1665V15.8332"
                    stroke="#1F2937"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.16602 10H15.8327"
                    stroke="#1F2937"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <p
              className={
                "mt-4 w-11/12 text-base font-normal leading-6 text-gray-600 " +
                (show ? "block" : "hidden")
              }
            >
              Absolutely! We understand that children toys need to withstand
              enthusiastic play. Our toy cars are made from high-quality
              materials, ensuring durability and longevity so they can endure
              countless adventures.
            </p>
          </div>

          <hr className="my-7 bg-gray-200" />

          {/* <!-- Section 3--> */}

          <div>
            <div className=" flex cursor-pointer items-center justify-between">
              <h3 className=" text-xl font-semibold leading-5 text-gray-800">
                Are the toy cars safe for my child to play with?
              </h3>
              <button
                aria-label="too"
                className=" cursor-pointer focus:outline-none"
                onClick={() => setShow2(!show2)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={show2 ? "hidden" : "block"}
                    d="M10 4.1665V15.8332"
                    stroke="#1F2937"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.16602 10H15.8327"
                    stroke="#1F2937"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <p
              className={
                "mt-4 w-11/12 text-base font-normal leading-6 text-gray-600 " +
                (show2 ? "block" : "hidden")
              }
            >
              Yes, safety is our top priority. Our toy cars undergo rigorous
              testing to meet international safety standards. They are free from
              harmful substances and have no small parts that can pose a choking
              hazard, making them safe for your child to enjoy.
            </p>
          </div>

          <hr className="my-7 bg-gray-200" />

          {/* <!-- Section 4--> */}

          <div>
            <div className=" flex cursor-pointer items-center justify-between">
              <h3 className=" text-xl font-semibold leading-5 text-gray-800">
                Can I track the delivery of my toy car purchase?
              </h3>
              <button
                aria-label="too"
                className=" cursor-pointer focus:outline-none"
                onClick={() => setShow3(!show3)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={show3 ? "hidden" : "block"}
                    d="M10 4.1665V15.8332"
                    stroke="#1F2937"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.16602 10H15.8327"
                    stroke="#1F2937"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <p
              className={
                "mt-4 w-11/12 text-base font-normal leading-6 text-gray-600 " +
                (show3 ? "block" : "hidden")
              }
            >
              Certainly! We provide order tracking services for all purchases.
              Once your toy car is shipped, you will receive a tracking number
              to monitor its progress until it reaches your doorstep. You can
              stay updated on the delivery status at all times.
            </p>
          </div>

          <hr className="my-7 bg-gray-200" />

          {/*Section 5*/}

          <div>
            <div className=" flex cursor-pointer items-center justify-between">
              <h3 className=" text-xl font-semibold leading-5 text-gray-800">
                What is your return policy if I am not satisfied with my
                purchase?
              </h3>
              <button
                aria-label="too"
                className=" cursor-pointer focus:outline-none"
                onClick={() => setShow4(!show4)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={show4 ? "hidden" : "block"}
                    d="M10 4.1665V15.8332"
                    stroke="#1F2937"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.16602 10H15.8327"
                    stroke="#1F2937"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <p
              className={
                "mt-4 w-11/12 text-base font-normal leading-6 text-gray-600 " +
                (show4 ? "blcok" : "hidden")
              }
            >
              We want you to be completely satisfied with your purchase. If for
              any reason you are not happy with your toy car, we offer a
              hassle-free return policy. Simply reach out to our customer
              support within 30 days of purchase, and we will assist you with
              the return process. Please refer to our Returns & Refunds page for
              more details.
            </p>
          </div>

          <hr className="my-7 bg-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
