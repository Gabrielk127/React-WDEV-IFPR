"use client";
import Card from "@/Components/Card";
import Form from "@/Components/Form";
import Header from "@/Components/Header";

export default function Home() {
  return (
    <div className="pb-24">
      <Header />
      <section id="bio" className="max-w-[800px] mx-auto mt-24">
        <h2 className="text-center text-3xl">Short Bio</h2>
        <p className="text-justify mt-4">
          Lorem ipsum dolor sit amet. Vel culpa totam ut facere dolorem in quod
          odit. Ut velit deserunt sed similique doloremque ex galisum facilis.
          Hic unde voluptatem qui iste reiciendis qui praesentium natus. Est
          corporis perspiciatis sit autem voluptas eum placeat provident.
        </p>
      </section>
      <section id="projects" className="max-w-[800px] mx-auto mt-24">
        <h2 className="text-center text-3xl">Projects</h2>
        <div className="grid grid-cols-4 justify-center gap-24 mt-12">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <section id="contact" className="max-w-[800px] mx-auto mt-24">
        <Form />
      </section>
    </div>
  );
}
