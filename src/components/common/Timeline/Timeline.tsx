import React from "react";

const Timeline: React.FC = () => {
  return (
    <section className="px-6 py-12">
      <h2 className="mb-6 text-2xl font-bold">Product timeline</h2>
      <ul className="timeline timeline-vertical">
        <li>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">1984</time>
            <div className="text-lg font-black">First Macintosh</div>
            The Macintosh is the first mass-market all-in-one desktop computer
            to feature a graphical user interface, built-in screen, and mouse.
          </div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <hr className="bg-base-300" />
        </li>
        <li>
          <hr className="bg-base-300" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">1998</time>
            <div className="text-lg font-black">iMac</div>
            iMac is a family of all-in-one Mac desktop computers designed and
            built by Apple Inc. It has been part of Apple&apos;s consumer
            desktop offerings since 1998.
          </div>
          <hr className="bg-base-300" />
        </li>
        <li>
          <hr className="bg-base-300" />
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2001</time>
            <div className="text-lg font-black">iPod</div>
            The iPod line of portable media players helped define the modern
            digital music era and paved the way for future Apple devices.
          </div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <hr className="bg-base-300" />
        </li>
        <li>
          <hr className="bg-base-300" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2007</time>
            <div className="text-lg font-black">iPhone</div>
            iPhone is Apple&apos;s line of smartphones that redefined the mobile
            phone industry and user experience.
          </div>
          <hr className="bg-base-300" />
        </li>
        <li>
          <hr className="bg-base-300" />
          <div className="timeline-start md:text-end">
            <time className="font-mono italic">2015</time>
            <div className="text-lg font-black">Apple Watch</div>
            Apple Watch brings fitness tracking, health capabilities, and
            seamless integration with the Apple ecosystem to the wrist.
          </div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Timeline;
