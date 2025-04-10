import React from "react";
import { Layout, RefreshCw, Grid3X3 } from "lucide-react";

const features = [
  {
    icon: <Layout className="w-8 h-8 text-white" />,
    title: "Refreshing Design",
    description:
      "We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics.",
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-white" />,
    title: "Based on Tailwind CSS",
    description:
      "We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics.",
  },
  {
    icon: <Grid3X3 className="w-8 h-8 text-white" />,
    title: "100+ Components",
    description:
      "We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics.",
  },
];

export default function Features() {
  return (
    <section className="bg-gradient-to-b  text-white py-20 px-4">
      {/* Duplicate block for visual repetition */}
      {[1, 2].map((block) => (
        <div key={block} className="max-w-7xl mx-auto mb-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-2 font-pixel">
              Gamify your Coding Journey
            </h2>
            <p className="text-white/80 max-w-xl mx-auto text-sm">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white text-gray-900 rounded-2xl shadow-lg p-6 text-center flex flex-col items-center"
              >
                <div className="bg-indigo-500 p-4 rounded-xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
