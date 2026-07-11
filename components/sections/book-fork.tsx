"use client";

import { useState } from "react";

import { Button } from "@/components/primitives/button";
import { CtaButton } from "@/components/primitives/cta-button";
import { Input } from "@/components/primitives/input";
import { Label } from "@/components/primitives/label";
import { Textarea } from "@/components/primitives/textarea";

type ClientType = "new" | "returning";

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
  return (
    <form
      className="mt-8 grid max-w-xl gap-4"
      onSubmit={(event) => event.preventDefault()}
    >
      {/* [PLACEHOLDER]: intake questions are specific to the client's service and not defined yet */}
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required className="mt-1" />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required className="mt-1" />
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" type="tel" required className="mt-1" />
      </div>
      <div>
        <Label htmlFor="service">[PLACEHOLDER] service interested in</Label>
        <Input id="service" name="service" required className="mt-1" />
      </div>
      <div>
        <Label htmlFor="notes">[PLACEHOLDER] anything else we should know</Label>
        <Textarea id="notes" name="notes" className="mt-1" />
      </div>
      <Button type="submit" className="justify-self-start">
        [PLACEHOLDER] submit action
      </Button>
    </form>
  );
}

function ReturningClient() {
  return (
    <div className="mt-8 max-w-xl space-y-6">
      <div className="flex aspect-[3/2] items-center justify-center bg-surface text-caption text-muted">
        [PLACEHOLDER] booking widget embed
      </div>
      <p className="text-body text-muted">
        Prefer another way to reach us:
      </p>
      <div className="flex flex-wrap gap-4">
        <CtaButton channel="text" />
        <CtaButton channel="call" />
      </div>
    </div>
  );
}
