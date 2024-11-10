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
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold">Brighter Days Ahead</h1>
          <p className="mb-5 text-gray-300">
          Each day is a new step toward recovery, filled with hope, strength, and the love of those who believe in you. Here’s to finding light and joy in every moment as you move forward on this journey.
          </p>
          <button className="btn btn-outline btn-info">Get Started</button>
        </div>
      </div>

      <div className="w-full absolute top-0 text-white">
        <Header/>
      </div>
    </div>
  );
}
