import React, { useState } from 'react';
import { ZoomIn, ZoomOut, Maximize2, X, Download } from 'lucide-react';

const DHEMAJI_MAP_SRC = '/src/assets/images/dhemaji_district_map.jpg';

export const MapPreview: React.FC = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const landmarks = [
    { name: 'Dhemaji (District HQ)', role: 'Administrative center with connections to Silapathar, Machkhoa & Lakhimpur', tag: 'HQ' },
    { name: 'Jonai & Bijaypur', role: 'Sub-divisional hub & eastern gateway to Pasighat and Poba Forest', tag: 'Major Town' },
    { name: 'Silapathar & Dipa', role: 'Commercial transit corridor on NH-52 connecting to Likabali and hills', tag: 'Town' },
    { name: 'Likabali / Malinithan', role: 'Foothills crossing towards Arunachal Pradesh and ancient ruins', tag: 'Heritage' },
    { name: 'Simen Chapori & Dijmur', role: 'Riverine chapori heartland along the northern Brahmaputra banks', tag: 'Ecology' },
    { name: 'NH-52 & NH-52B', role: 'National highway lifeline linking Dhemaji across to Dibrugarh and Bogibeel', tag: 'Highway' }
  ];

  return (
    <section
      className="py-20 bg-[#FAF8F2]"
      data-purpose="interactive-map-showcase"
      id="map-preview"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto mb-10">
          <span className="text-[#966318] font-serif text-xs font-bold tracking-[0.25em] uppercase block mb-2">
            Cartographic Explorer
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#112F23] mb-4">
            Dhemaji District Geography &amp; Key Landmarks
          </h2>
          <p className="text-[#4E5D53] text-sm sm:text-base leading-relaxed">
            Bordered by the Himalayan foothills of Arunachal Pradesh in the north and the mighty Brahmaputra river to the south. Discover connecting highways, sub-divisions, and riverside corridors.
          </p>
        </div>

        {/* Illustrated Map Display with Interactive Container */}
        <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white p-3">
          <div
            className={`relative rounded-2xl overflow-hidden transition-all duration-300 bg-stone-100 ${
              isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <img
              alt="Official Map of Dhemaji District Assam with key towns, highways, and borders"
              className={`w-full h-auto rounded-2xl object-contain transition-transform duration-500 ${
                isZoomed ? 'scale-125' : 'scale-100'
              }`}
              src={DHEMAJI_MAP_SRC}
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-xs text-white text-[11px] px-3.5 py-1.5 rounded-full font-medium flex items-center gap-2 shadow-lg">
              {isZoomed ? <ZoomOut className="w-3.5 h-3.5 text-gold" /> : <ZoomIn className="w-3.5 h-3.5 text-gold" />}
              <span>{isZoomed ? 'Click to reset zoom' : 'Click map to zoom'}</span>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              className="absolute top-3 right-3 bg-black/75 hover:bg-black/90 text-white p-2 rounded-xl backdrop-blur-xs transition-colors shadow-lg cursor-pointer"
              title="View full screen map"
            >
              <Maximize2 className="w-4 h-4 text-gold" />
            </button>
          </div>

          {/* Key Geographic Highlights */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2.5 px-2 text-left">
            {landmarks.map((loc) => (
              <div
                key={loc.name}
                className="bg-[#FAF8F2] border border-stone-200/90 rounded-xl p-2.5 hover:border-[#D99B26]/60 transition-colors"
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <h5 className="font-serif font-bold text-xs text-[#112F23] truncate">
                    {loc.name}
                  </h5>
                  <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-sm bg-[#112F23]/10 text-[#112F23]">
                    {loc.tag}
                  </span>
                </div>
                <p className="text-[11px] text-[#4E5D53] line-clamp-2 leading-tight">
                  {loc.role}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Action Bar */}
          <div className="mt-5 pt-3 pb-1 px-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4 text-left">
            <div>
              <h4 className="font-serif font-bold text-[#112F23] text-sm">
                Official Dhemaji District Map
              </h4>
              <p className="text-xs text-[#4E5D53]">
                Flanked by Arunachal Pradesh, Lakhimpur, Dibrugarh &amp; Sivasagar across the Brahmaputra
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsZoomed(!isZoomed)}
                className="px-4 py-2 rounded-full border border-stone-300 hover:border-forest-700 text-[#112F23] text-xs font-semibold tracking-wider transition-colors cursor-pointer"
              >
                {isZoomed ? 'Reset Zoom' : 'Zoom In'}
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-5 py-2 rounded-full bg-[#112F23] hover:bg-[#1a4232] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5 text-gold" />
                <span>Open Full Map</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full-screen Map Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:px-6 border-b border-stone-200 flex items-center justify-between bg-forest-900 text-white">
              <div>
                <h3 className="font-serif font-bold text-lg text-white">
                  Dhemaji District Official Cartography
                </h3>
                <p className="text-xs text-stone-300">
                  Detailed view with National Highways, Rivers, Towns, and District Boundaries
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={DHEMAJI_MAP_SRC}
                  download="dhemaji_district_map.jpg"
                  className="p-2 rounded-xl bg-forest-800 hover:bg-forest-700 text-gold transition-colors flex items-center gap-1.5 text-xs font-bold"
                  title="Download Map"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Save Image</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-xl bg-forest-800 hover:bg-forest-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-4 overflow-auto flex-1 flex items-center justify-center bg-stone-50">
              <img
                src={DHEMAJI_MAP_SRC}
                alt="Full resolution official map of Dhemaji District"
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow-md border border-stone-200"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
