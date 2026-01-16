"use client";
import FormNewBoard from "@/components/FormNewBoard";

export default function Dashboard() {
  return (
    <main className="bg-base-200 min-h-screen">
      {/* HEADER */}
      <section className="bg-base-100">
        <div className="max-w-5xl mx-auto px-5 py-3 flex justify-end">
          Log out
        </div>
      </section>

      <section className="px-5 py-12 max-w-5xl mx-auto">
        <FormNewBoard />
      </section>
    </main>
  );
}
