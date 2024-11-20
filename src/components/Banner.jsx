import Header from "./Header";

export default function Banner() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(/boat.avif)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-5 text-[#E0FFE8] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Brighter Days Ahead</h1>
          <p className="mb-5 text-gray-300 sm:text-md md:text-lg lg:text-xl">
          Each day is a new step toward recovery, filled with hope, strength, and the love of those who believe in you. Here’s to finding light and joy in every moment as you move forward on this journey.
          </p>
        </div>
      </div>

      <div className="w-full absolute top-0 text-white">
        <Header/>
      </div>
    </div>
  );
}
