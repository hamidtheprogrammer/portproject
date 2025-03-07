import React, { useState } from "react";
import Reviews from "./Reviews";
import FrequentlyBT from "./FrequentlyBT";

enum IModal {
  REVIEWS = "reviews",
  DESCRIPTION = "description",
}

const MoreDetails = () => {
  const [currentModal, setCurrentModal] = useState<IModal>(IModal.DESCRIPTION);
  return (
    <div className="flex max-md:flex-col gap-1 mt-20">
      <span className="flex-1">
        <nav>
          <ul className="text-xs font-semibold flex gap-5">
            <li
              onClick={() => setCurrentModal(IModal.DESCRIPTION)}
              className={`cursor-pointer hover ${
                currentModal === IModal.DESCRIPTION &&
                "border-b-2 text-[#4039be]"
              } pb-2 border-[#4039be]`}
            >
              Description
            </li>
            <li
              onClick={() => setCurrentModal(IModal.REVIEWS)}
              className={`cursor-pointer hover ${
                currentModal === IModal.REVIEWS && "border-b-2 text-[#4039be]"
              } pb-2 border-[#4039be]`}
            >
              Reviews
            </li>
          </ul>
        </nav>
        {currentModal === IModal.DESCRIPTION ? (
          <div className="mt-5">
            <p className="text-sm mb-4">
              The
              <strong>
                Apple MacBook Pro 16-inch (M3, Space Grey) – 2023 Model
              </strong>
              is built for professionals who demand power, efficiency, and
              seamless performance. Equipped with the
              <strong>Apple M3 chip</strong>, a <strong>16-core GPU</strong>,
              and
              <strong>18GB of unified memory</strong>, this laptop is designed
              to handle intensive tasks like
              <strong>
                video editing, 3D rendering, coding, and music production
              </strong>
              with ease. The
              <strong>16.2-inch Liquid Retina XDR display</strong> delivers
              <strong>
                incredible brightness, deep contrast, and stunning color
                accuracy
              </strong>
              , making it perfect for creatives who need a
              <strong>high-fidelity visual experience</strong>. Its
              <strong>512GB SSD</strong> ensures lightning-fast storage access,
              while
              <strong>macOS Sonoma</strong> optimizes performance and security,
              ensuring a smooth workflow. The
              <strong>long-lasting battery life of up to 22 hours</strong> makes
              it ideal for professionals who need all-day productivity without
              interruption.
            </p>
            <img
              src="/MacDetail.jpg"
              className="w-[40rem] rounded-3xl my-3"
              alt="product image"
            />
            <p className="text-sm">
              Built with a <strong>sleek aluminum chassis</strong> in
              <strong>Space Grey</strong>, the MacBook Pro is both durable and
              stylish, maintaining a premium feel while being lightweight enough
              for portability. It features
              <strong>MagSafe 3 fast charging</strong>,<strong>HDMI 2.1</strong>
              , three <strong>Thunderbolt 4 ports</strong>, an
              <strong>SDXC card slot</strong>, and a
              <strong>high-fidelity six-speaker sound system</strong> for an
              immersive audio experience. Its
              <strong>advanced cooling system</strong> keeps performance stable
              even under heavy workloads, ensuring sustained peak efficiency.
              Whether you're a
              <strong>
                content creator, developer, or business professional
              </strong>
              , the <strong>MacBook Pro 16-inch M3</strong> offers cutting-edge
              performance, stunning visuals, and seamless integration with the
              <strong>Apple ecosystem</strong>, making it one of the most
              powerful and reliable laptops available today.
            </p>
          </div>
        ) : (
          <Reviews />
        )}
      </span>
      <span className="relative md:w-[40%] flex md:justify-end top-11">
        <FrequentlyBT />
      </span>
    </div>
  );
};

export default MoreDetails;
