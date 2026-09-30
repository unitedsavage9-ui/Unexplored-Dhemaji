import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Compass,
  Landmark,
  MapPin,
  Waves,
  Users,
  Building,
  Sparkles,
  ChevronRight,
  Bookmark,
  Share2,
  Clock
} from 'lucide-react';

interface HistoryPageProps {
  onBackToHome: () => void;
  onExplorePlaces?: () => void;
  onExploreCulture?: () => void;
  onOpenMap?: () => void;
}

const HISTORY_COVER_IMG = '/src/assets/images/history_cover_1790782015537.jpg';

export const HistoryPage: React.FC<HistoryPageProps> = ({
  onBackToHome,
  onExplorePlaces,
  onExploreCulture,
  onOpenMap
}) => {
  const [activeSection, setActiveSection] = useState<string>('intro');
  const [copied, setCopied] = useState(false);

  const chapters = [
    { id: 'intro', label: 'Overview', icon: Landmark },
    { id: 'early-history', label: 'Early History', icon: BookOpen },
    { id: 'habung-ahom', label: 'Habung & Ahom Era', icon: Landmark },
    { id: 'chutia-kingdom', label: 'Chutia Kingdom', icon: Landmark },
    { id: 'ahom-expansion', label: 'Ahom Expansion', icon: Compass },
    { id: 'people-culture', label: 'People & Heritage', icon: Users },
    { id: 'name-dhemaji', label: 'The Name Dhemaji', icon: Sparkles },
    { id: 'river-and-land', label: 'The River & Land', icon: Waves },
    { id: 'modern-history', label: 'Modern History', icon: Building },
    { id: 'dhemaji-today', label: 'Dhemaji Today', icon: Compass }
  ];

  const timelineEvents = [
    {
      year: 'c. 1240 AD',
      title: 'Sukaphaa Capitals at Habung',
      desc: 'Chaolung Sukaphaa, founder of the Ahom kingdom, establishes an early capital amidst fertile riverine floodplains at Habung before moving to Charaideo in 1253 AD.'
    },
    {
      year: '10th–16th C.',
      title: 'Flourishing Chutia Kingdom',
      desc: 'The Chutia power establishes fortified settlements, stone temples, copper-plate grants, and thriving agricultural communities throughout northern Assam.'
    },
    {
      year: '1523 AD',
      title: 'Ahom Expansion under Suhungmung',
      desc: 'Ahom king Suhungmung (Dihingia Raja) incorporates the Chutia territories into the Ahom state system, connecting Dhemaji to pan-Assam administration.'
    },
    {
      year: '1971',
      title: 'Dhemaji Sub-Division Created',
      desc: 'Formed as an administrative sub-division of greater Lakhimpur District comprising Dhemaji, Jonai, and Dhakuakhana.'
    },
    {
      year: '1989',
      title: 'Independent District Formed',
      desc: 'Dhemaji is elevated to full district status consisting of Dhemaji Sadar and Jonai sub-divisions on October 14, 1989.'
    },
    {
      year: 'Modern Era',
      title: 'Bogibeel Bridge & Connectivity',
      desc: 'Major infrastructure links connect Dhemaji across the Brahmaputra with Dibrugarh, spurring regional trade, education, and eco-tourism.'
    }
  ];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <article className="pt-24 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fadeIn text-[#1F2923]">
      {/* Top Breadcrumb Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-stone-200">
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-800 hover:text-gold-dark transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          <span>← Back to Home</span>
        </button>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-stone-500 font-mono">
            <Clock className="w-3.5 h-3.5 text-gold-dark" />
            <span>8 min read</span>
          </div>
          <button
            type="button"
            onClick={handleShare}
            className="p-2 rounded-full border border-stone-300 hover:border-gold hover:text-gold-dark transition-all text-stone-600 cursor-pointer"
            title="Copy page link"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>
          {copied && (
            <span className="text-xs text-emerald-700 font-bold animate-fadeIn">
              Link copied!
            </span>
          )}
        </div>
      </div>

      {/* Hero Header */}
      <header className="text-center max-w-5xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-gold" />
          <span className="text-gold-dark uppercase tracking-[0.3em] text-xs font-serif font-bold">
            HISTORICAL CHRONICLES
          </span>
          <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-gold" />
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-forest-900 mb-6 tracking-tight leading-tight">
          History of Dhemaji
        </h1>

        <p className="font-editorial italic text-xl sm:text-2xl text-stone-600 mb-8 font-normal leading-relaxed max-w-3xl mx-auto">
          From ancient copper plates and the legendary capital of Habung to medieval dynasties and the playful waterways of Upper Assam.
        </p>

        {/* Hero Cover Photo Showcase */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white mb-10 group">
          <img
            src={HISTORY_COVER_IMG}
            alt="History of Dhemaji - Land of Rivers, Heritage of People, A Timeless Journey"
            className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl pointer-events-none" />
        </div>

        <div className="jaapi-glow-line h-0.5 w-32 mx-auto mb-8" />

        {/* Lead Narrative Callout Box */}
        <div
          id="intro"
          className="bg-ivory-card border-l-4 border-gold rounded-2xl p-6 sm:p-8 text-left shadow-deep-card relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 opacity-5 assamese-motif-divider pointer-events-none" />
          <p className="text-base sm:text-lg text-charcoal leading-relaxed font-light">
            Dhemaji, situated in the northern part of Assam along the Brahmaputra and its tributaries, has a rich and distinctive history shaped by ancient settlements, medieval kingdoms, indigenous communities, agriculture and the region’s ever-changing riverine landscape. Its historical significance is closely connected with places such as Habung and with the political history of the Chutia and Ahom kingdoms.
          </p>
        </div>
      </header>

      {/* Main Two-Column Layout (Sticky Table of Contents + Comprehensive Content) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Sticky Sidebar: Navigation & Timeline */}
        <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
          {/* Table of Chapters */}
          <nav className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-deep-card">
            <h3 className="font-serif font-bold text-forest-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-gold-dark" />
              <span>Chapters &amp; Sections</span>
            </h3>
            <ul className="space-y-1">
              {chapters.map((ch) => {
                const Icon = ch.icon;
                const isActive = activeSection === ch.id;
                return (
                  <li key={ch.id}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(ch.id)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                        isActive
                          ? 'bg-forest-900 text-gold shadow-md font-bold'
                          : 'text-stone-600 hover:bg-stone-50 hover:text-forest-900'
                      }`}
                    >
                      <span className="flex items-center gap-2.5 truncate">
                        <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-gold' : 'text-stone-400'}`} />
                        <span className="truncate">{ch.label}</span>
                      </span>
                      <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-gold' : 'text-stone-300'}`} />
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Chronological Milestone Timeline */}
          <div className="bg-[#FCFAF6] rounded-3xl p-6 border border-stone-200/90 shadow-xs">
            <h4 className="font-serif font-bold text-forest-900 text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gold-dark" />
              <span>Historical Milestones</span>
            </h4>
            <div className="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-stone-200">
              {timelineEvents.map((event, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-gold border-2 border-white shadow-xs" />
                  <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase block tracking-wider">
                    {event.year}
                  </span>
                  <h5 className="font-serif font-bold text-xs sm:text-sm text-forest-900 mt-0.5">
                    {event.title}
                  </h5>
                  <p className="text-[11px] text-stone-500 mt-1 leading-snug font-light">
                    {event.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions to Explore */}
          <div className="bg-forest-900 text-white rounded-3xl p-6 border border-gold/30 shadow-xl space-y-3">
            <span className="text-gold font-serif text-[10px] font-bold tracking-widest uppercase block">
              Experience the History
            </span>
            <h4 className="font-serif font-bold text-base text-white">
              Discover Dhemaji's Historical Ruins &amp; Traditions
            </h4>
            <p className="text-xs text-stone-300 font-light leading-relaxed">
              Visit Ghuguha Dol, Malinithan archaeological sanctums, Gerukamukh gorge, and Mising ethnic heritage sites in person.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              {onExplorePlaces && (
                <button
                  type="button"
                  onClick={onExplorePlaces}
                  className="w-full py-2.5 rounded-full bg-gold hover:bg-gold-hover text-forest-900 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Explore Historic Places
                </button>
              )}
              {onOpenMap && (
                <button
                  type="button"
                  onClick={onOpenMap}
                  className="w-full py-2.5 rounded-full border border-gold/40 hover:bg-forest-800 text-gold font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  View on District Map
                </button>
              )}
            </div>
          </div>
        </aside>

        {/* Right Main Column: Rich Text & Historical Chapters */}
        <main className="lg:col-span-8 space-y-14 text-stone-800 leading-relaxed font-light text-base sm:text-lg">
          {/* SECTION 1: Early History */}
          <section id="early-history" className="scroll-mt-28 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-gold uppercase tracking-widest">
                Chapter 01
              </span>
              <div className="h-px flex-1 bg-stone-200" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-forest-900 tracking-tight">
              Early History
            </h2>
            <p className="text-charcoal leading-relaxed">
              The history of the Dhemaji region extends back to the early medieval period. The area around <strong>Habung</strong> was an important settlement in the northern Brahmaputra valley. Historical records and copper-plate grants provide evidence of established settlements, agriculture and systems of land administration in the region.
            </p>
            <p className="text-charcoal leading-relaxed">
              Over the centuries, the area witnessed the movement and interaction of different communities and came under the influence of several political powers. These developments gradually shaped the social and cultural character of the region.
            </p>
          </section>

          {/* SECTION 2: Habung and the Ahom Era */}
          <section id="habung-ahom" className="scroll-mt-28 space-y-5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-gold uppercase tracking-widest">
                Chapter 02
              </span>
              <div className="h-px flex-1 bg-stone-200" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-forest-900 tracking-tight">
              Habung and the Ahom Era
            </h2>
            <p className="text-charcoal leading-relaxed">
              Habung occupies a particularly important place in the history of Dhemaji. According to historical accounts recorded by the Government of Assam, <strong>Chaolung Sukaphaa</strong>, the founder of the Ahom kingdom, established an early capital at Habung around <strong>1240 AD</strong>.
            </p>

            <blockquote className="my-6 pl-6 border-l-4 border-gold bg-[#FAF8F2] p-5 rounded-r-2xl italic font-editorial text-lg text-forest-900 shadow-xs">
              “The location offered fertile land for agriculture, but its proximity to the Brahmaputra and other rivers also made it vulnerable to recurring floods. The Ahom capital was subsequently moved, and Sukaphaa eventually established the permanent Ahom capital at Charaideo in 1253 AD.”
            </blockquote>

            <p className="text-charcoal leading-relaxed">
              Although the capital did not remain at Habung, its association with the early Ahom kingdom gives the place considerable historical importance. Habung represents one of the early stages in the formation of the Ahom state in Assam.
            </p>
          </section>

          {/* SECTION 3: The Chutia Kingdom */}
          <section id="chutia-kingdom" className="scroll-mt-28 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-gold uppercase tracking-widest">
                Chapter 03
              </span>
              <div className="h-px flex-1 bg-stone-200" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-forest-900 tracking-tight">
              The Chutia Kingdom
            </h2>
            <p className="text-charcoal leading-relaxed">
              The Dhemaji region later became closely associated with the <strong>Chutia Kingdom</strong>, one of the major political powers of medieval eastern Assam.
            </p>
            <p className="text-charcoal leading-relaxed">
              The Chutias established settlements and agricultural communities across their territories. Historical records associated with the Habung area provide evidence of land grants and organised settlement during this period.
            </p>
            <p className="text-charcoal leading-relaxed">
              The Chutia kingdom played an important role in the political and cultural development of eastern Assam until its eventual defeat by the expanding Ahom kingdom in the 16th century.
            </p>
          </section>

          {/* SECTION 4: The Ahom Expansion */}
          <section id="ahom-expansion" className="scroll-mt-28 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-gold uppercase tracking-widest">
                Chapter 04
              </span>
              <div className="h-px flex-1 bg-stone-200" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-forest-900 tracking-tight">
              The Ahom Expansion
            </h2>
            <p className="text-charcoal leading-relaxed">
              The beginning of the 16th century brought another major political transformation to the region.
            </p>
            <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-forest-900 text-gold flex items-center justify-center shrink-0 font-serif font-bold text-sm">
                1523
              </div>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-forest-900 text-sm">
                  Battle of 1523 AD &amp; Royal Consolidation
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  During the reign of Ahom king <strong>Suhungmung</strong>, also known as <em>Dihingia Raja</em>, the Ahom kingdom expanded its influence towards the territories controlled by the Chutias. In 1523 AD, Suhungmung defeated the Chutia ruler Nityapal, following which the region came under Ahom control.
                </p>
              </div>
            </div>
            <p className="text-charcoal leading-relaxed">
              The incorporation of the region into the Ahom kingdom connected it with the wider political, administrative and agricultural system that developed across much of Assam during the Ahom period.
            </p>
          </section>

          {/* SECTION 5: People and Cultural Heritage */}
          <section id="people-culture" className="scroll-mt-28 space-y-5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-gold uppercase tracking-widest">
                Chapter 05
              </span>
              <div className="h-px flex-1 bg-stone-200" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-forest-900 tracking-tight">
              People and Cultural Heritage
            </h2>
            <p className="text-charcoal leading-relaxed">
              The history of Dhemaji has never been defined solely by kingdoms and political boundaries. Its identity has also been shaped by the communities that have lived in the region for generations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
              {[
                { name: 'Mising Community', role: 'Riverine architects, Ali-Aye-Ligang spring festival, Chang Ghar stilt homes' },
                { name: 'Deori Community', role: 'Custodians of sacred rites, Bohagio Bihu, and priestly traditions' },
                { name: 'Sonowal Kachari', role: 'Heritage agricultural practices, Haidang folk songs, and woven textiles' },
                { name: 'Bodo Kachari & Others', role: 'Vibrant loom customs, folk instruments, and multi-ethnic synthesis' }
              ].map((c) => (
                <div key={c.name} className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-gold/60 transition-colors shadow-xs">
                  <h4 className="font-serif font-bold text-forest-900 text-sm">{c.name}</h4>
                  <p className="text-xs text-stone-500 mt-1 leading-snug font-light">{c.role}</p>
                </div>
              ))}
            </div>

            <p className="text-charcoal leading-relaxed">
              Their traditions have contributed greatly to the cultural richness of the district. Indigenous festivals, traditional agriculture, handloom and handicrafts, music, dance, food and community practices continue to form an important part of Dhemaji’s cultural identity.
            </p>
          </section>

          {/* SECTION 6: The Name Dhemaji */}
          <section id="name-dhemaji" className="scroll-mt-28 space-y-5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-gold uppercase tracking-widest">
                Chapter 06
              </span>
              <div className="h-px flex-1 bg-stone-200" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-forest-900 tracking-tight">
              The Name Dhemaji
            </h2>
            <p className="text-charcoal leading-relaxed">
              The origin of the name Dhemaji is associated with different traditional explanations.
            </p>

            <div className="bg-[#FAF8F2] border border-stone-200 rounded-3xl p-6 shadow-xs relative overflow-hidden">
              <span className="text-[11px] font-bold text-gold uppercase tracking-widest block mb-2 font-mono">
                Assamese Folk Etymology
              </span>
              <h3 className="font-serif text-xl font-bold text-forest-900 mb-2">
                “Dhal-Dhemali” — The Playful Waters
              </h3>
              <p className="text-charcoal text-sm sm:text-base leading-relaxed font-light">
                One popular explanation relates the name to the region’s frequent flooding. Rivers have historically changed their courses and inundated large areas of the district. A traditional interpretation connects the name with the Assamese expression <strong>“Dhal-Dhemali,”</strong> referring to the unpredictable or seemingly playful nature of floods.
              </p>
              <p className="text-xs text-stone-500 mt-3 italic">
                This explanation reflects the close relationship between the people of Dhemaji and its rivers. It is, however, best understood as a traditional explanation of the name rather than as an established historical etymology.
              </p>
            </div>
          </section>

          {/* SECTION 7: The River and the Land */}
          <section id="river-and-land" className="scroll-mt-28 space-y-5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-gold uppercase tracking-widest">
                Chapter 07
              </span>
              <div className="h-px flex-1 bg-stone-200" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-forest-900 tracking-tight">
              The River and the Land
            </h2>
            <p className="text-charcoal leading-relaxed">
              The history of Dhemaji cannot be separated from its geography. The district lies within the floodplains of the Brahmaputra and its tributaries, and rivers have continuously influenced where people live, how they cultivate the land and how communities interact with one another.
            </p>
            <p className="text-charcoal leading-relaxed">
              Floods have periodically caused destruction and displacement, but the same river systems have also deposited fertile alluvial soil across the plains. Agriculture consequently became deeply connected with the lives and traditions of the people.
            </p>
            <p className="text-forest-900 font-serif font-bold text-lg italic">
              “The rivers have therefore been both a challenge and a source of life for Dhemaji.”
            </p>
          </section>

          {/* SECTION 8: Modern Administrative History */}
          <section id="modern-history" className="scroll-mt-28 space-y-5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-gold uppercase tracking-widest">
                Chapter 08
              </span>
              <div className="h-px flex-1 bg-stone-200" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-forest-900 tracking-tight">
              Modern Administrative History
            </h2>
            <p className="text-charcoal leading-relaxed">
              During the modern administrative period, the present-day Dhemaji region formed part of the larger <strong>Lakhimpur District</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
                <span className="text-xs font-mono font-bold text-gold uppercase tracking-widest block mb-1">
                  Year 1971
                </span>
                <h4 className="font-serif font-bold text-forest-900 text-sm mb-1">
                  Sub-Division Establishment
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  A significant change took place in 1971, when Dhemaji was established as a sub-division. The administrative area included Dhemaji, Jonai and Dhakuakhana at that time.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
                <span className="text-xs font-mono font-bold text-gold uppercase tracking-widest block mb-1">
                  Year 1989
                </span>
                <h4 className="font-serif font-bold text-forest-900 text-sm mb-1">
                  Independent District Status
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  The region gained a separate district identity in 1989, when Dhemaji was elevated to the status of an independent district consisting of the Dhemaji Sadar and Jonai sub-divisions.
                </p>
              </div>
            </div>

            <p className="text-charcoal leading-relaxed">
              The establishment of the district marked an important stage in the modern development of the region, providing it with its own administrative structure and encouraging the growth of public institutions and infrastructure.
            </p>
          </section>

          {/* SECTION 9: Development and Connectivity */}
          <section id="development" className="scroll-mt-28 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-gold uppercase tracking-widest">
                Chapter 09
              </span>
              <div className="h-px flex-1 bg-stone-200" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-forest-900 tracking-tight">
              Development and Connectivity
            </h2>
            <p className="text-charcoal leading-relaxed">
              In the decades that followed the formation of the district, Dhemaji experienced gradual development in education, agriculture, transportation and public infrastructure.
            </p>
            <p className="text-charcoal leading-relaxed">
              Its geographical position, close to the foothills of Arunachal Pradesh and across the Brahmaputra from several major centres of Upper Assam, made connectivity particularly important to the region’s development.
            </p>
            <div className="p-5 rounded-2xl bg-forest-900/5 border border-forest-900/10 text-forest-900">
              <h4 className="font-serif font-bold text-sm mb-1">The Bogibeel Bridge Lifeline</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                The construction of major transportation links, including the <strong>Bogibeel Bridge</strong>, strengthened connections between Dhemaji and the southern bank of the Brahmaputra, particularly with Dibrugarh and other parts of Upper Assam.
              </p>
            </div>
          </section>

          {/* SECTION 10: Dhemaji Today */}
          <section id="dhemaji-today" className="scroll-mt-28 space-y-5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-gold uppercase tracking-widest">
                Chapter 10
              </span>
              <div className="h-px flex-1 bg-stone-200" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-forest-900 tracking-tight">
              Dhemaji Today
            </h2>
            <p className="text-charcoal leading-relaxed">
              Modern Dhemaji carries the legacy of its long and diverse past. The historical memory of Habung, the influence of the Chutia and Ahom periods, the traditions of its indigenous communities and the continuing presence of the Brahmaputra and its tributaries all form part of the district’s identity.
            </p>
            <p className="text-charcoal leading-relaxed">
              Today, Dhemaji is a developing district of Assam with a strong agricultural base and a distinctive cultural landscape. Its villages, wetlands, rivers, festivals, traditional practices and historical sites continue to preserve connections with earlier generations, while education, improved connectivity and modern institutions are shaping its future.
            </p>

            <blockquote className="my-6 pl-6 border-l-4 border-forest-900 bg-white p-6 rounded-2xl shadow-sm text-forest-900 italic font-editorial text-lg sm:text-xl leading-relaxed">
              “The story of Dhemaji is therefore not simply a story of ancient kingdoms or administrative boundaries. It is a continuing story of people and place—of communities adapting to rivers, preserving their traditions and building a modern society while remaining connected to a deep historical heritage.”
            </blockquote>

            <p className="text-charcoal leading-relaxed font-normal">
              Dhemaji’s past continues to live in its landscape and its people, making its history an essential part of the wider cultural and historical heritage of Assam.
            </p>
          </section>

          {/* Interactive Footer Callout */}
          <div className="mt-14 pt-8 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h4 className="font-serif font-bold text-forest-900 text-base">
                Continue Your Exploration
              </h4>
              <p className="text-xs text-stone-500 font-light">
                Discover the actual locations and living cultural traditions mentioned in this history.
              </p>
            </div>
            <div className="flex items-center gap-3">
              {onExplorePlaces && (
                <button
                  type="button"
                  onClick={onExplorePlaces}
                  className="px-5 py-2.5 rounded-full bg-forest-900 hover:bg-forest-800 text-gold font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Explore Places
                </button>
              )}
              {onExploreCulture && (
                <button
                  type="button"
                  onClick={onExploreCulture}
                  className="px-5 py-2.5 rounded-full bg-gold hover:bg-gold-hover text-forest-900 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-gold-glow"
                >
                  Explore Culture
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    </article>
  );
};
