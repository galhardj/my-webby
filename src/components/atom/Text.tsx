import { HOMEPAGE_CONTENT } from "../../constants/constants";

const Text = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        {HOMEPAGE_CONTENT.title}
      </h1>
      <p className="text-lg text-gray-600">{HOMEPAGE_CONTENT.tagline}</p>
      <p className="text-base text-gray-700">{HOMEPAGE_CONTENT.description}</p>

      <ul className="mt-6 space-y-4">
        {HOMEPAGE_CONTENT.features.map((f) => (
          <li key={f.title} className="flex items-start gap-3">
            <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-teal-500" />
            <div>
              <div className="font-medium">{f.title}</div>
              <div className="text-sm text-gray-600">{f.text}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Text;
