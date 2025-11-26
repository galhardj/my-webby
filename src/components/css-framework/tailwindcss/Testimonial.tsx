export default function Testimonial() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">
            Trusted by product teams
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            “This UI kit helped us ship in record time.”
          </h2>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-10 sm:mt-12 sm:pt-12">
          <figure className="mx-auto max-w-3xl">
            <blockquote className="text-lg leading-8 text-gray-700 sm:text-xl">
              <p>
                Using these components, our team was able to move from idea to
                production in weeks instead of months. The design system feels
                cohesive, and the developer experience is a joy to work with.
              </p>
            </blockquote>
            <figcaption className="mt-8 flex items-center justify-center gap-x-4">
              <div className="h-12 w-12 rounded-full bg-indigo-100 ring-2 ring-indigo-500" />
              <div className="text-left">
                <div className="text-sm font-semibold text-gray-900">
                  Alex Johnson
                </div>
                <div className="text-sm text-gray-500">
                  Head of Product, Acme Inc.
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
