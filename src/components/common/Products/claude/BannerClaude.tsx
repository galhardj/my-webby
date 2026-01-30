export default function BannerClaude() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="relative h-64 md:h-auto md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="Team collaboration"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center p-8 md:w-1/2 md:p-12">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              We're recruiting...
            </h1>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Calling all superstar Baristas, Team Leaders (Supervisors) and
              Team Members. Apply now to enjoy flexible hours, free food, and
              great career development opportunities.
            </p>

            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              And with our recent pay and mystery shopper bonus increase,
              there's no better time to join Team Pret...
            </p>

            <button className="w-full transform rounded-lg bg-gray-900 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-800 hover:shadow-xl md:w-auto">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
