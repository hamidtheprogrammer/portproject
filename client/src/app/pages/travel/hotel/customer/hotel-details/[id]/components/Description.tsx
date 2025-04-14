import React from "react";
import { Property } from "../../../hotels-filter";
import { FerrisWheel, Train } from "lucide-react";

const Description = ({ h }: { h: Property }) => {
  return (
    <section className="flex  mt-6 max-md:flex-col max-md:gap-8">
      <div className="space-y-3 text-xs text-gray-700 text-balance">
        <h1 className="text-2xl font-bold">Description</h1>
        <p className="leading-relaxed">
          Discover a world of luxury and comfort at{" "}
          <strong className="text-gray-900">this hotel</strong>, where elegance
          meets relaxation. Nestled in the heart of the city, it offers
          breathtaking{" "}
          <strong className="text-gray-900">panoramic views</strong>,
          world-className amenities, and an unforgettable hospitality
          experience.
        </p>
        <h2 className="text-xl font-semibold text-gray-800">
          Unparalleled Comfort & Elegance
        </h2>
        <p className="leading-relaxed">
          Each of our{" "}
          <strong className="text-gray-900">
            spacious and elegantly designed rooms
          </strong>{" "}
          is equipped with modern amenities, including{" "}
          <strong className="text-gray-900">high-speed WiFi</strong>, a{" "}
          <strong className="text-gray-900">flat-screen TV</strong>, and a
          <strong className="text-gray-900">private balcony</strong> overlooking
          the skyline.
        </p>
        <h2 className="text-xl font-semibold text-gray-800">
          Exceptional Dining
        </h2>
        <p className="leading-relaxed">
          Indulge in a culinary journey at our{" "}
          <strong className="text-gray-900">award-winning restaurant</strong>,
          serving exquisite dishes crafted by top chefs. Enjoy a refreshing
          drink at our
          <strong className="text-gray-900">rooftop bar</strong> while soaking
          in the stunning city lights.
        </p>
        <h2 className="text-xl font-semibold text-gray-800">
          World-ClassName Amenities
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Infinity Pool</strong> with a city
            view
          </li>
          <li>
            <strong className="text-gray-900">
              State-of-the-art Fitness Center
            </strong>{" "}
            with personal trainers
          </li>
          <li>
            <strong className="text-gray-900">Full-service Spa</strong> offering
            rejuvenating treatments
          </li>
          <li>
            <strong className="text-gray-900">Business Lounge</strong> with
            high-tech meeting rooms
          </li>
          <li>
            <strong className="text-gray-900">24/7 Concierge</strong> for all
            your travel needs
          </li>
        </ul>
        <h2 className="text-xl font-semibold text-gray-800">Prime Location</h2>
        <p className="leading-relaxed">
          Located just minutes from the city's top attractions,{" "}
          <strong className="text-gray-900">this hotel</strong>
          is the perfect destination for both business and leisure travelers.
          Whether you're here for a relaxing getaway or a corporate retreat, we
          guarantee a <strong className="text-gray-900">memorable stay</strong>.
        </p>
        <h2 className="text-xl font-semibold text-gray-800">
          Book Your Stay Today!
        </h2>
        <p className="leading-relaxed">
          Experience the ultimate in luxury and comfort.{" "}
          <strong className="text-gray-900">Reserve your room now</strong> and
          let us make your stay extraordinary.
        </p>
      </div>

      <div className="md:sticky md:self-start md:top-[25%] md:w-[45rem] border-[1px] rounded-xl p-4">
        <div className="flex items-center gap-2">
          <span className="w-fit rounded-l-full rounded-br-full bg-blueish py-1 px-2 font-semibold text-white">
            {h.rating}.0/5
          </span>
          <span className="text-blueish font-bold text-xl">
            {h.rating === 5
              ? "Excellent"
              : h.rating === 4
              ? "Very Good"
              : h.rating === 3
              ? "Good"
              : "Okay"}
          </span>
        </div>
        <p className="text-xs mt-2">
          A beautiful and well-kept place with a reasonable price. I love it and
          can’t wait to visit again!
        </p>
        <a href="##" className="text-xs text-blueish hover:underline">
          View 400 Reviews
        </a>
        <hr className="my-2" />
        <h1 className="text-lg font-semibold">Surroundings</h1>
        <div className="flex flex-col gap-2 text-xs text-black/80 mt-3">
          <>
            {h.nearbyAttractions.map((a) => (
              <span className="flex gap-2 items-center">
                <FerrisWheel size={24} className="text-black/50" />
                {a}
              </span>
            ))}
          </>
          {h.nearbyTransport.map((a) => (
            <span className="flex gap-2 items-center">
              <Train size={24} className="text-black/50" />
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Description;
