import { Card, CardContent } from "@/components/primitives/card";

const teamMembers = [
  {
    name: "[PLACEHOLDER] name",
    specialty: "[PLACEHOLDER] specialty",
    testimonial: "[PLACEHOLDER] testimonial, required for every team member before this section ships.",
  },
  {
    name: "[PLACEHOLDER] name",
    specialty: "[PLACEHOLDER] specialty",
    testimonial: "[PLACEHOLDER] testimonial, required for every team member before this section ships.",
  },
  {
    name: "[PLACEHOLDER] name",
    specialty: "[PLACEHOLDER] specialty",
    testimonial: "[PLACEHOLDER] testimonial, required for every team member before this section ships.",
  },
];

export function Team() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-h2 font-display text-ink">
        [PLACEHOLDER] team section heading
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {teamMembers.map((member, index) => (
          <Card key={index}>
            <div className="flex aspect-square items-center justify-center bg-surface text-caption text-muted">
              [PLACEHOLDER] photo
            </div>
            <CardContent className="pt-6">
              <p className="text-h3 font-display text-ink">{member.name}</p>
              <p className="text-caption text-muted">{member.specialty}</p>
              <p className="mt-4 text-body text-ink">&ldquo;{member.testimonial}&rdquo;</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="mt-8 max-w-2xl text-body text-muted">
        [PLACEHOLDER] trust line, one to two sentences: founder story, brand ethos, whatever is true.
      </p>
    </section>
  );
}
