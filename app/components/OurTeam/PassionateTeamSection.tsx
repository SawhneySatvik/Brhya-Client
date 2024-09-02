import React from "react";
import Image from "next/image";

export default function PassionateTeamSection(){
  return (
    <section className="bg-yellow-100 text-gray-800 py-16 px-6 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl font-extrabold leading-tight">
            We’re a passionate group of people building the future of logistics.
          </h1>
          <p className="mt-4 text-lg">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.
          </p>
        </div>
        {/* Image */}
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/assets/team-photo.png" // Replace with your image path
            alt="Team Photo"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};