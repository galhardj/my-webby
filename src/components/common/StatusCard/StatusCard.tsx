import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcn-ui/card";

const STATUS = [
  { label: "Deployments", value: "All systems go" },
  { label: "Latency (p95)", value: "142 ms" },
  { label: "Active regions", value: "7" },
];

export default function StatusCard() {
  return (
    <section className="px-6 py-10">
      <Card className="mx-auto max-w-xl">
        <CardHeader>
          <CardTitle>Realtime Status</CardTitle>
          <CardDescription>
            Quick insight into today&rsquo;s infra health.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-3">
          {STATUS.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-stone-200 p-4 text-center dark:border-stone-800"
            >
              <p className="text-xs tracking-wide text-stone-500 uppercase">
                {item.label}
              </p>
              <p className="mt-2 text-lg font-semibold text-stone-900 dark:text-stone-50">
                {item.value}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
