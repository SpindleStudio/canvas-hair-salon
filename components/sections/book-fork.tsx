"use client";

import { useRef, useState } from "react";

import { Button } from "@/components/primitives/button";
import { CtaButton } from "@/components/primitives/cta-button";
import { Input } from "@/components/primitives/input";
import { Label } from "@/components/primitives/label";
import { Textarea } from "@/components/primitives/textarea";

type ClientType = "new" | "returning";
type Stylist = "carly" | "kaitlin";
type SubmitState = "idle" | "submitting" | "success" | "error";

const SERVICES = [
  "Grey coverage & root retouch",
  "Grey blending & transition",
  "Highlights & brightening",
  "Lowlights & dimension",
  "Gloss & refresh",
  "Vivid & fashion color",
  "Cut & styling",
  "Not sure yet",
];

const COLOR_HISTORY = [
  "Virgin / no color history",
  "Box color",
  "Salon color",
  "Highlights or bleach",
  "Chemical straightening or relaxer",
];

export function BookFork() {
  const [clientType, setClientType] = useState<ClientType>("new");

  return (
    <section className="mx-auto max-w-6xl px-6 pb-16">
      <div className="flex gap-2 border-b border-surface">
        <button
          type="button"
          onClick={() => setClientType("new")}
          className={`px-4 py-2 text-body ${
            clientType === "new" ? "border-b-2 border-accent text-ink" : "text-muted"
          }`}
          aria-pressed={clientType === "new"}
        >
          New client
        </button>
        <button
          type="button"
          onClick={() => setClientType("returning")}
          className={`px-4 py-2 text-body ${
            clientType === "returning" ? "border-b-2 border-accent text-ink" : "text-muted"
          }`}
          aria-pressed={clientType === "returning"}
        >
          Returning client
        </button>
      </div>

      {clientType === "new" ? <NewClientIntake /> : <ReturningClient />}
    </section>
  );
}

function NewClientIntake() {
  const [stylist, setStylist] = useState<Stylist>("carly");
  const [services, setServices] = useState<string[]>([]);
  const [colorHistory, setColorHistory] = useState<string[]>([]);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const currentPhotoRef = useRef<HTMLInputElement>(null);
  const inspoPhotoRef = useRef<HTMLInputElement>(null);

  function toggleService(s: string) {
    setServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }

  function toggleColorHistory(h: string) {
    setColorHistory((prev) =>
      prev.includes(h) ? prev.filter((x) => x !== h) : [...prev, h]
    );
  }

  async function toBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve((reader.result as string).split(",")[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitState("submitting");

    const form = e.currentTarget;
    const data: Record<string, unknown> = {
      stylist,
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      source: (form.elements.namedItem("source") as HTMLSelectElement).value,
      referral: (form.elements.namedItem("referral") as HTMLInputElement)?.value || "",
      thickness: (form.elements.namedItem("thickness") as HTMLSelectElement).value,
      length: (form.elements.namedItem("length") as HTMLSelectElement).value,
      services,
      colorHistory,
      goals: (form.elements.namedItem("goals") as HTMLTextAreaElement).value,
      allergies: (form.elements.namedItem("allergies") as HTMLTextAreaElement).value,
    };

    if (currentPhotoRef.current?.files?.[0]) {
      data.currentPhoto = await toBase64(currentPhotoRef.current.files[0]);
    }
    if (inspoPhotoRef.current?.files?.[0]) {
      data.inspoPhoto = await toBase64(inspoPhotoRef.current.files[0]);
    }

    try {
      const res = await fetch("/.netlify/functions/submit-intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitState(res.ok ? "success" : "error");
    } catch {
      setSubmitState("error");
    }
  }

  if (submitState === "success") {
    return (
      <div className="mt-8 max-w-xl space-y-4">
        <p className="font-display text-h3 text-ink">Got it.</p>
        <p className="text-body text-muted">
          {stylist === "carly"
            ? "Carly will reach out to schedule your free 15-minute consultation."
            : "Kaitlin will be in touch to confirm your appointment."}
        </p>
      </div>
    );
  }

  return (
    <form className="mt-8 grid max-w-xl gap-6" onSubmit={handleSubmit}>

      {/* Stylist selector */}
      <fieldset>
        <legend className="text-body font-medium text-ink">Who would you like to book with?</legend>
        <div className="mt-2 flex gap-4">
          {(["carly", "kaitlin"] as Stylist[]).map((s) => (
            <label key={s} className="flex cursor-pointer items-center gap-2 text-body text-ink">
              <input
                type="radio"
                name="stylist"
                value={s}
                checked={stylist === s}
                onChange={() => setStylist(s)}
                className="accent-accent"
              />
              {s === "carly" ? "Carly Carden" : "Kaitlin Jackson"}
            </label>
          ))}
        </div>
        {stylist === "carly" && (
          <p className="mt-2 text-caption text-muted">
            New clients with Carly start with a free 15-minute consultation on Wednesdays.
          </p>
        )}
      </fieldset>

      {/* Contact */}
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required className="mt-1" />
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" type="tel" required className="mt-1" />
      </div>

      {/* How did you hear about us */}
      <div>
        <Label htmlFor="source">How did you hear about Canvas?</Label>
        <select
          id="source"
          name="source"
          required
          className="mt-1 w-full border border-border bg-paper px-3 py-2 text-body text-ink"
        >
          <option value="">Select one</option>
          <option>A friend or client referred me</option>
          <option>Instagram</option>
          <option>Google search</option>
          <option>Facebook</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <Label htmlFor="referral">If referred, who sent you? (optional)</Label>
        <Input id="referral" name="referral" className="mt-1" />
      </div>

      {/* Hair profile */}
      <div>
        <Label htmlFor="thickness">Hair thickness</Label>
        <select
          id="thickness"
          name="thickness"
          className="mt-1 w-full border border-border bg-paper px-3 py-2 text-body text-ink"
        >
          <option value="">Select one</option>
          <option>Fine</option>
          <option>Medium</option>
          <option>Thick / coarse</option>
        </select>
      </div>
      <div>
        <Label htmlFor="length">Hair length</Label>
        <select
          id="length"
          name="length"
          className="mt-1 w-full border border-border bg-paper px-3 py-2 text-body text-ink"
        >
          <option value="">Select one</option>
          <option>Short (above chin)</option>
          <option>Medium (chin to shoulder)</option>
          <option>Long (below shoulder)</option>
          <option>Very long (past mid-back)</option>
        </select>
      </div>

      {/* Color history */}
      <fieldset>
        <legend className="text-body font-medium text-ink">Color history (select all that apply)</legend>
        <div className="mt-2 grid gap-2">
          {COLOR_HISTORY.map((h) => (
            <label key={h} className="flex cursor-pointer items-center gap-2 text-body text-ink">
              <input
                type="checkbox"
                checked={colorHistory.includes(h)}
                onChange={() => toggleColorHistory(h)}
                className="accent-accent"
              />
              {h}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Services */}
      <fieldset>
        <legend className="text-body font-medium text-ink">Services you&rsquo;re interested in (select all that apply)</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <label key={s} className="flex cursor-pointer items-center gap-2 text-body text-ink">
              <input
                type="checkbox"
                checked={services.includes(s)}
                onChange={() => toggleService(s)}
                className="accent-accent"
              />
              {s}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Goals */}
      <div>
        <Label htmlFor="goals">What are you hoping to achieve? What does your ideal result look like?</Label>
        <Textarea id="goals" name="goals" rows={4} className="mt-1" />
      </div>

      {/* Photos */}
      <div>
        <Label htmlFor="currentPhoto">Photo of your current hair (optional)</Label>
        <input
          id="currentPhoto"
          name="currentPhoto"
          type="file"
          accept="image/*"
          ref={currentPhotoRef}
          className="mt-1 block text-body text-ink"
        />
      </div>
      <div>
        <Label htmlFor="inspoPhoto">Inspiration photo (optional)</Label>
        <input
          id="inspoPhoto"
          name="inspoPhoto"
          type="file"
          accept="image/*"
          ref={inspoPhotoRef}
          className="mt-1 block text-body text-ink"
        />
      </div>

      {/* Sensitivities */}
      <div>
        <Label htmlFor="allergies">Any product sensitivities or allergies we should know about?</Label>
        <Textarea id="allergies" name="allergies" rows={2} className="mt-1" />
      </div>

      {submitState === "error" && (
        <p className="text-body text-red-600">Something went wrong. Please call or text us at (910) 530-0036.</p>
      )}

      <Button type="submit" disabled={submitState === "submitting"} className="justify-self-start">
        {submitState === "submitting" ? "Sending..." : "Submit intake form"}
      </Button>
    </form>
  );
}

function ReturningClient() {
  return (
    <div className="mt-8 max-w-xl space-y-6">
      <p className="text-body text-ink">
        Head straight to GlossGenius to book with Carly or Kaitlin.
      </p>
      <a
        href="https://canvas.glossgenius.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border border-ink bg-ink px-6 py-3 text-body text-paper hover:bg-accent hover:border-accent transition-colors"
      >
        Book on GlossGenius
      </a>
      <p className="text-body text-muted">Or reach us directly:</p>
      <div className="flex flex-wrap gap-4">
        <CtaButton channel="text" />
        <CtaButton channel="call" />
      </div>
    </div>
  );
}
