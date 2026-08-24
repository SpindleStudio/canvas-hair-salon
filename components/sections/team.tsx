const teamMembers = [
  {
    name: "Carly Carden",
    instagram: "@carlycarden.colorist",
    specialty: "Grey coverage, blonding & dimensional color",
    bio: "Carly has been doing hair for over 9 years, and what keeps her in it is the mix - color is equal parts technical precision and artistic instinct, and she loves living in that overlap. Grey coverage, blonding, and dimensional color are where she spends most of her time, though she's always up for a challenge. Outside the salon, she's a mom of two - which is part of why Canvas runs the way it does. Every appointment gets her full attention, one client at a time, because that's the only way she's interested in working.",
    testimonial: null,
    bookingNote: "New clients start with a free 15-minute consultation, Wednesdays.",
  },
  {
    name: "Kaitlin Jackson",
    instagram: "@kaitlintheblondecolourist",
    specialty: "Color, cuts & full service styling",
    bio: "Kaitlin is a modern colorist with a deep technical background - she trained extensively, including specialized color work, and brings that precision to every appointment. Color, cuts, and full-service styling are her focus, with an approach built around collaboration: she wants to understand what you're going for and help you get there, whether that's a subtle refresh or something completely new. Outside the salon, she's also a mom of two, and brings that same attentiveness to the chair, one client at a time.",
    testimonial: "If anyone is looking for a hair stylist, I would highly recommend Kaitlin. Whether you need a cut and blow dry or color and highlights, Kaitlin is your stylist. I've been going to her for years and wouldn't consider anyone else.",
    testimonialAttribution: "Marianne",
    bookingNote: "Book directly via GlossGenius or text.",
  },
];

export function Team() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="font-display text-h2 text-ink">Meet Carly &amp; Kaitlin</h2>
      <div className="mt-8 grid gap-10 sm:grid-cols-2">
        {teamMembers.map((member) => (
          <div key={member.name}>
            <div className="flex aspect-[4/3] items-center justify-center bg-surface text-caption text-muted">
              photo coming soon
            </div>
            <div className="mt-6">
              <p className="font-display text-h3 text-ink">{member.name}</p>
              <p className="text-caption text-muted">{member.specialty}</p>
              <p className="mt-4 text-body text-ink">{member.bio}</p>
              {member.testimonial && (
                <blockquote className="mt-6 border-l-2 border-accent pl-4">
                  <p className="text-body italic text-ink">&ldquo;{member.testimonial}&rdquo;</p>
                  {member.testimonialAttribution && (
                    <footer className="mt-2 text-caption text-muted">- {member.testimonialAttribution}</footer>
                  )}
                </blockquote>
              )}
              <p className="mt-4 text-caption text-muted">{member.bookingNote}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-12 max-w-2xl text-body text-muted">
        Carly and Kaitlin met years ago, when Kaitlin was teaching and Carly was just starting out.
        Their paths crossed early - and years later, they crossed again. By the time they reconnected,
        both had spent years building their craft on their own terms. Opening Canvas together was less
        of a leap and more of a return to something that had always made sense.
      </p>
    </section>
  );
}
