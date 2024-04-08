import Button from '../components/Button';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen">
        {/* Top component */}
        <div className="bg-baseblue flex flex-col items-center py-12 text-2xl text-white">
          <Image
            alt="card logos"
            className="m-1"
            height={86}
            src="/assets/logos.png"
            width={128}
          />
          <div>
            Own your <span className="text-blue-500">feature</span> simple
          </div>
          <div>
            and for <span className="text-blue-500">free</span>
          </div>
        </div>

        <div className="bg-baseblue flex justify-center">
          <Image
            alt="hero video poster"
            height={600}
            src="/assets/hero-video-poster-image.jpg"
            width={1200}
          />
        </div>

        <div className="bg-baseblue flex flex-col justify-around text-white">
          <div className="m-4 mt-8 flex justify-center">
            <div className="bg-blue-500 px-2 py-2 rounded-full w-32 flex justify-center">
              <div className="text-black">Who are we</div>
            </div>
          </div>
          <div className="m-4 flex justify-center">
            <div>
              Our one of a kind integration lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
              <br />
              <br /> As part of the Amazon family,&nbsp;
              <span className="text-blue-500">Veeqo</span> provides trusted data
              security and Amazon account protection from late deliveries and
              negative feedback, if you ship on time.
            </div>
          </div>
        </div>

        <div className="bg-baseblue flex justify-center">
          <div className="mx-auto flex overflow-hidden mb-8">
            <Image
              alt="dogs image"
              className="m-1"
              height={50}
              src="/assets/intro-image-1.png"
              width={200}
            />
            <Image
              alt="dog in a cup image"
              className="m-1"
              height={50}
              src="/assets/intro-image-2.png"
              width={200}
            />
            <Image
              alt="dog image"
              className="m-1"
              height={50}
              src="/assets/intro-image-3.png"
              width={200}
            />
            <Image
              alt="sitting dog image"
              className="m-1"
              height={50}
              src="/assets/intro-image-4.png"
              width={200}
            />
          </div>
        </div>

        {/* Middle 1 component */}
        <div className="flex flex-col justify-between px-10 md:px-20">
          <div className="flex flex-col p-12">
            <div className="bg-baseblue text-white rounded-full px-4 py-2 w-44 flex justify-center">
              Start saving today
            </div>
            <div className="font-semibold text-2xl py-8">
              See how much <br /> you could save
            </div>
            <div className="pb-6">
              Class aptent taciti sociosqu ad litora torquent per conubia nostra
              inceptos himenaeos. Aenean vulputate semper sem nec sodales.
              Vestibulum vitae vulputate metus.
            </div>
            <Button href="#">Start shipping</Button>
          </div>
          <Image
            alt="employees high five image"
            className="m-1 p-12"
            height={100}
            src="/assets/feature-image-1.png"
            width={400}
          />
        </div>

        {/* Middle 2 component */}
        <div className="bg-baseblue flex flex-col md:flex-row items-center text-white py-4">
          <div className="flex flex-col  md:mx-auto justify-end">
            <div className="bg-green-200 text-black rounded-full px-4 py-2 w-44 flex justify-center mt-4 mb-8">
              We are a team of
            </div>
            <div className="font-semibold text-5xl md:text-8xl">
              1,000
              <br /> People
            </div>
          </div>
          <Image
            alt="dogs bubble image"
            className="m-1 p-12"
            height={100}
            src="/assets/stats-image.png"
            width={400}
          />
        </div>

        {/* Bottom component */}
        <div className="flex flex-col justify-between px-10 md:px-12 md:flex-row">
          <Image
            alt="employees high five image"
            className="m-1 p-12"
            height={638 * 0.6}
            src="/assets/feature-image-2.png"
            width={791 * 0.6}
          />
          <div className="flex flex-col p-12">
            <div className="bg-baseblue text-white rounded-full px-4 py-2 w-44 flex justify-center">
              Start saving today
            </div>
            <div className="font-semibold text-2xl py-8">
              See how much <br /> you could save
            </div>
            <div className="pb-6">
              Pellentesque solicitudin ligula pharetra ipsum tristique, sit amet
              gravida leo ornare.
              <br />
              <br />
              Anean nec nulla quis ligula venenatis varius. Nunc sapien lacus,
              feugiat nec consecteur a, facilisis et leo. Sed vel.
            </div>
            <Button href="#">Start shipping</Button>
          </div>
        </div>
      </main>
    </>
  );
}
