import React, { useState } from "react";
import ProjectHero from "./ProjectHero";
import AboutSection from "./AboutSection";

// Skeleton layout for a real estate project detail page
// Tailwind CSS required. All content is placeholder/dummy for later wiring.

const SectionHeading = ({ title, subtitle }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-semibold text-yellow-500">{title}</h2>
    {subtitle ? (
      <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
    ) : null}
  </div>
);

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-lg shadow-xl w-11/12 max-w-4xl p-4">
        <button
          className="absolute top-2 right-2 inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-2 py-1 text-sm text-gray-700 hover:bg-gray-50"
          onClick={onClose}
          aria-label="Close"
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

function ProjectLayout2() {
  const [isFloorPlanModalOpen, setIsFloorPlanModalOpen] = useState(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <ProjectHero />

      {/* About Project */}
      <AboutSection />

      {/* Highlights */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Highlights" />
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Dummy highlight point one for the project.</li>
            <li>Dummy highlight point two about amenities or design.</li>
            <li>Dummy highlight point three about location advantages.</li>
            <li>Dummy highlight point four about pricing or sizes.</li>
          </ul>
        </div>
      </section>

      {/* How Much (Size & Price) */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="How Much (Size & Price)" />
          <div className="overflow-x-auto rounded border border-gray-700">
            <table className="min-w-full divide-y divide-gray-700 text-sm">
              <thead className="bg-gray-900">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-gray-300">Unit Type</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-300">Size</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-300">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-gray-900">
                  <td className="px-4 py-3 text-gray-300">2 BHK</td>
                  <td className="px-4 py-3 text-gray-300">XXX - YYY sq.ft.</td>
                  <td className="px-4 py-3 text-gray-300">₹X.XX Cr onwards</td>
                </tr>
                <tr className="bg-gray-900">
                  <td className="px-4 py-3 text-gray-300">3 BHK</td>
                  <td className="px-4 py-3 text-gray-300">XXX - YYY sq.ft.</td>
                  <td className="px-4 py-3 text-gray-300">₹X.XX Cr onwards</td>
                </tr>
                <tr className="bg-gray-900">
                  <td className="px-4 py-3 text-gray-300">4 BHK</td>
                  <td className="px-4 py-3 text-gray-300">XXX - YYY sq.ft.</td>
                  <td className="px-4 py-3 text-gray-300">₹X.XX Cr onwards</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Floor Plans */}
      <section className="py-12 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Floor Plans" />
          {/* Carousel Placeholder */}
          <div className="flex gap-4 overflow-x-auto pb-2">
            <div className="bg-gray-700 h-48 w-64 rounded shrink-0" />
            <div className="bg-gray-700 h-48 w-64 rounded shrink-0" />
            <div className="bg-gray-700 h-48 w-64 rounded shrink-0" />
          </div>
          <div className="mt-4">
            <button
              className="rounded-md border border-gray-600 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
              onClick={() => setIsFloorPlanModalOpen(true)}
            >
              Open Floor Plan Modal
            </button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Gallery" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div key={idx} className="bg-gray-700 h-28 rounded" />
            ))}
          </div>
          <div className="mt-4">
            <button
              className="rounded-md border border-gray-600 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
              onClick={() => setIsGalleryModalOpen(true)}
            >
              Open Gallery Modal
            </button>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-12 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Amenities" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {Array.from({ length: 12 }).map((_, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center gap-2 rounded border border-gray-700 p-4 text-center bg-gray-900"
              >
                <div className="bg-gray-700 h-10 w-10 rounded" />
                <div className="text-sm text-gray-300">Amenity {idx + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map & Connectivity Info */}
      <section className="py-12 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Location Map & Connectivity" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-700 h-64 w-full rounded" />
            <div>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Connectivity point one (e.g., Metro Station - X km)</li>
                <li>Business hub nearby (e.g., IT Park - X km)</li>
                <li>Education institute (e.g., School/College - X km)</li>
                <li>Entertainment (e.g., Mall/Cinema - X km)</li>
                <li>Healthcare (e.g., Hospital - X km)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Master Plan */}
      <section className="py-12 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Master Plan" />
          <div className="bg-gray-700 h-96 w-full rounded" />
        </div>
      </section>

      {/* Builder Info */}
      <section className="py-12 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Builder Info" />
          <p className="text-gray-300 leading-relaxed">
            About the Builder: This is a placeholder paragraph describing the builder's history, track record, and other credentials. Replace with real information later.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="FAQs" />
          <div className="divide-y divide-gray-800 rounded border border-gray-700">
            {[
              "What is the project possession date?",
              "What configurations are available?",
              "Is financing available?",
              "What are the maintenance charges?",
            ].map((q, idx) => (
              <details key={idx} className="group bg-gray-900">
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium text-gray-200">
                  {q}
                  <span className="text-gray-400 group-open:hidden">+</span>
                  <span className="text-gray-400 hidden group-open:inline">-</span>
                </summary>
                <div className="px-4 pb-4 text-sm text-gray-300">
                  Placeholder answer text. Replace with the actual answer later.
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-12 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Related Projects" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="rounded border border-gray-700 p-4 bg-gray-900">
                <div className="bg-gray-700 h-32 w-full rounded mb-3" />
                <div className="h-4 bg-gray-600 rounded w-2/3 mb-2" />
                <div className="h-3 bg-gray-600 rounded w-1/2" />
              </div>
            ))}
          </div>
          <div className="mt-6">
            <button className="rounded-md border border-gray-600 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">
              View More
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Contact" />
          <form className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded border border-gray-600 bg-gray-900 text-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded border border-gray-600 bg-gray-900 text-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <input
              type="tel"
              placeholder="Mobile"
              className="w-full rounded border border-gray-600 bg-gray-900 text-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <div className="sm:col-span-3">
              <button
                type="button"
                className="rounded-md bg-white px-4 py-2 text-black text-sm hover:bg-gray-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Floor Plan Modal Placeholder */}
      <Modal isOpen={isFloorPlanModalOpen} onClose={() => setIsFloorPlanModalOpen(false)}>
        <div className="bg-gray-200 h-96 w-full rounded" />
        <p className="mt-4 text-sm text-gray-700">Enlarged floor plan placeholder.</p>
      </Modal>

      {/* Gallery Modal Placeholder */}
      <Modal isOpen={isGalleryModalOpen} onClose={() => setIsGalleryModalOpen(false)}>
        <div className="bg-gray-200 h-96 w-full rounded" />
        <p className="mt-4 text-sm text-gray-700">Enlarged gallery image placeholder.</p>
      </Modal>
    </div>
  );
}

export default ProjectLayout2;
