import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Star, MessageCircle, Bookmark } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { useManga } from '../context/MangaContext';
import { ARCS } from '../constants';

const Home: React.FC = () => {
  const { chapters } = useManga();
  const latestChapter = chapters[0];
  const [continueChapter, setContinueChapter] = React.useState<number | null>(null);

  React.useEffect(() => {
    const saved = localStorage.getItem('dandadan_last_chapter');
    if (saved) setContinueChapter(parseInt(saved, 10));
  }, []);

  return (
    <>
      <SEOHead
        title="Read Dandadan Manga Online Free in HD"
        description={`Read Dandadan Manga online in high quality English. All ${chapters.length}+ chapters by Tatsu Yukinobu. HD scans, fast loading, no sign-up required.`}
        canonicalUrl="https://www.readdandadanmanga.online/"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Dandadan Manga",
            "url": "https://www.readdandadanmanga.online",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.readdandadanmanga.online/manga?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "ComicSeries",
            "name": "Dandadan",
            "alternateName": ["Dan Da Dan", "ダンダダン"],
            "description": "Momo Ayase and Ken Takakura get cursed and abducted, starting a chaotic supernatural adventure filled with aliens, ghosts, and romance.",
            "url": "https://www.readdandadanmanga.online/",
            "image": "https://www.readdandadanmanga.online/logo.png",
            "author": {
              "@type": "Person",
              "name": "Tatsu Yukinobu"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Shueisha",
              "url": "https://www.shueisha.co.jp"
            },
            "genre": ["Action", "Comedy", "Supernatural", "Sci-Fi", "Romance"],
            "startDate": "2021-04-06",
            "inLanguage": "en",
            "numberOfEpisodes": chapters.length,
            "contentRating": "Teen",
            "isAccessibleForFree": true,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "35000",
              "bestRating": "5",
              "worstRating": "1"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Why Read Dandadan Manga on this Site?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Experience Dandadan manga like never before with high-quality scans and regularly updated chapters. Dive into the intense storyline without delays."
                }
              },
              {
                "@type": "Question",
                "name": "Is the Dandadan Manga Finished?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, the Dandadan manga is currently ongoing. New chapters are released in Weekly Shonen Magazine."
                }
              },
              {
                "@type": "Question",
                "name": "Where should I start reading Dandadan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Start with Chapter 1. The story builds progressively, so starting from the beginning is highly recommended to fully appreciate the character development."
                }
              },
              {
                "@type": "Question",
                "name": "What are the differences between Dandadan Manga and Anime?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Dandadan manga offers more detailed art that the anime sometimes simplifies. The supernatural effects are more visceral in the manga."
                }
              }
            ]
          }
        ]}
      />

      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-bb-dark py-20">
        <div className="absolute inset-0 z-0 opacity-30 select-none pointer-events-none">
          <img
            src="/dandadan.jpg"
            alt=""
            width="1920"
            height="1080"
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-bb-dark via-bb-dark/60 to-transparent z-0 pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

          <h1 className="text-5xl md:text-8xl font-heading font-bold text-white mb-4 drop-shadow-2xl tracking-tighter text-center">
            DANDADAN <span className="text-bb-blue">MANGA</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl text-center mb-10 font-light leading-relaxed">
            Read Dandadan Manga Online In High Quality, All Chapters and Volumes in English With HD scans and No Sign-Up Required.
          </p>

          {/* Info Card - Dark by default, Light/Dark supported if needed, but keeping Dark for Hero */}
          <div className="w-full bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 mb-10 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-8">

              {/* Left Column: Stats & Meta */}
              <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-6 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-6">

                {/* Rating Block */}
                <div className="col-span-2 sm:col-span-4 flex items-center gap-3 mb-2" aria-label="rated 4.8 out of 5 stars">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4].map(i => <Star key={i} className="fill-yellow-400 text-yellow-400 w-5 h-5" />)}
                    <Star className="fill-yellow-400/30 text-yellow-400 w-5 h-5" />
                  </div>
                  <span className="text-3xl font-bold text-white">4.8</span>
                  <span className="text-sm text-gray-400 mt-1 ml-2">Average 4.8 / 5 out of 45k</span>
                </div>

                {/* Info Fields */}
                <div className="space-y-1">
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-wider block">Rank</span>
                  <span className="text-white font-medium">1st, 20M views</span>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-wider block">Release</span>
                  <span className="text-white font-medium">2021</span>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-wider block">Status</span>
                  <span className="text-green-400 font-bold">Ongoing</span>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-wider block">Type</span>
                  <span className="text-white font-medium">Action, Comedy, Supernatural</span>
                </div>

                <div className="col-span-2 sm:col-span-4 flex flex-col gap-3 mt-2">
                  <div className="flex flex-wrap gap-2 items-center border-t border-white/5 pt-3">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider mr-2">Author(s):</span>
                    <span className="text-white hover:text-bb-blue cursor-pointer transition-colors">Tatsu Yukinobu</span>
                  </div>
                  <div className="flex flex-wrap gap-2 items-center border-t border-white/5 pt-3">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider mr-2">Genre(s):</span>
                    {["Action","Comedy","Supernatural","Sci-Fi","Romance"].map(g => (
                      <span key={g} className="text-xs text-gray-400 hover:text-white transition-colors cursor-pointer">
                        {g},
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 items-start border-t border-white/5 pt-3">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Synopsis:</span>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Momo Ayase (believer of ghosts) and Ken Takakura (believer of aliens) get cursed and abducted, starting a chaotic supernatural adventure.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Actions/Social Proof */}
              <div className="flex lg:flex-col justify-center items-center gap-8 min-w-[140px]">
                <div className="text-center group w-full">
                  <MessageCircle className="w-8 h-8 text-gray-500 group-hover:text-bb-blue mx-auto mb-2 transition-colors" />
                  <span className="block text-2xl font-bold text-white">256</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">Comments</span>
                </div>
                <div className="w-px h-12 bg-white/10 lg:w-16 lg:h-px"></div>
                <button
                  onClick={() => {
                    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
                    alert(`Press ${isMac ? 'Cmd' : 'Ctrl'} + D to bookmark this page!`);
                  }}
                  className="text-center group cursor-pointer w-full focus:outline-none"
                  aria-label="Bookmark this page"
                >
                  <Bookmark className="w-8 h-8 text-bb-blue mx-auto mb-2 fill-bb-blue group-hover:scale-110 transition-transform" />
                  <span className="block text-2xl font-bold text-white">1k</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wide group-hover:text-bb-blue transition-colors">Bookmark Now</span>
                </button>
              </div>
            </div>
          </div>

          {latestChapter && (
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              {continueChapter ? (
                <Link
                  to={`/chapter/${continueChapter}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-bb-blue hover:bg-blue-700 shadow-lg shadow-blue-900/20 transition-all hover:scale-105"
                >
                  ▶ Continue — Chapter {continueChapter}
                </Link>
              ) : (
                <Link
                  to="/chapter/1"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-bb-blue hover:bg-blue-700 shadow-lg shadow-blue-900/20 transition-all hover:scale-105"
                >
                  Start Reading — Chapter 1
                </Link>
              )}
              <Link
                to={`/chapter/${latestChapter.number}`}
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-lg font-bold rounded-lg text-white hover:bg-white hover:text-black transition-all"
              >
                Latest: Chapter {latestChapter.number}
              </Link>
            </div>
          )}
        </div>
      </section >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Latest Chapters Grid */}
        {/* Latest Chapters Grid */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <BookOpen className="text-bb-blue" /> Latest Releases
            </h2>
            <Link to="/manga" className="text-bb-blue hover:underline flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {chapters.slice(0, 12).map((chapter) => (
              <Link
                key={chapter.id}
                to={`/chapter/${chapter.number}`}
                className="group relative flex flex-col justify-between h-full bg-white dark:bg-[#1a1a1a] rounded-lg border border-gray-200 dark:border-white/10 p-5 hover:border-bb-blue/50 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-bb-blue/10"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-bb-blue uppercase tracking-wider">
                    Chapter {chapter.number}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight group-hover:text-bb-blue transition-colors line-clamp-2">
                    {chapter.title}
                  </h3>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Read Now</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-bb-blue group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-8 border border-gray-200 dark:border-white/10 shadow-sm">
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">About Dandadan</h2>
            <div className="prose prose-lg dark:prose-invert text-gray-700 dark:text-gray-300 max-w-none space-y-4">
              <p>
                <strong className="text-gray-900 dark:text-white">Dandadan</strong> is an acclaimed manga series written/illustrated by <strong className="text-gray-900 dark:text-white">Tatsu Yukinobu</strong>. It has been serialized in <strong className="text-gray-900 dark:text-white">Shōnen Jump+</strong> since 2021. The story follows <strong className="text-gray-900 dark:text-white">Momo Ayase</strong> and other key figures in an epic journey.
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">Synopsis</h3>
              <p>
                Momo Ayase (believer of ghosts) and Ken Takakura (believer of aliens) get cursed and abducted, starting a chaotic supernatural adventure.
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">Key Characters</h3>
              <p>
                The series features memorable characters including <strong className="text-gray-900 dark:text-white">Momo Ayase</strong>, <strong className="text-gray-900 dark:text-white">Ken Takakura (Okarun)</strong>, and <strong className="text-gray-900 dark:text-white">Seiko Ayase</strong>.
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">Why Read Dandadan?</h3>
              <p>
                <strong className="text-gray-900 dark:text-white">Dandadan</strong> offers an incredible and unique storyline with high-stakes drama and exceptional artwork. The story builds progressively, keeping readers on the edge of their seats with every chapter.
              </p>
            </div>
          </div>
        </section>

        {/* Major Story Arcs */}
        {/* FAQ Section */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="text-bb-blue" />
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Why Read Dandadan Manga on this Site?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Experience <strong>Dandadan manga</strong> like never before with high-quality scans and regularly updated chapters. Dive into the intense storyline without delays.
              </p>
            </div>

            <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Differences between Dandadan Manga and Anime?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                The <strong>Dandadan manga</strong> offers intense and detailed art that the anime sometimes simplifies. The aura and ego effects are more visceral in the manga.
              </p>
            </div>

            <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Is the Dandadan Manga Finished?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                No, the <strong>Dandadan manga</strong> is currently ongoing. New chapters are released in Weekly Shonen Magazine.
              </p>
            </div>

            <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Where should I start reading?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                If you are new to the series, start with <Link to="/chapter/1" className="text-bb-blue hover:underline">Chapter 1</Link>. The story builds progressively, so starting from the beginning is highly recommended to fully appreciate the character development and relationships.
              </p>
            </div>
          </div>
        </section>

        {/* Improved SEO Content Section */}
        <section className="mb-12">
          <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-8 border border-gray-200 dark:border-white/10 shadow-sm">
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">Read Dandadan Manga Online Free</h2>
            <div className="prose prose-lg dark:prose-invert text-gray-700 dark:text-gray-300 max-w-none space-y-4">
              <p>
                Welcome to <strong>readdandadanmanga.online</strong>, the premier destination for fans to <strong className="text-bb-blue">Read Dandadan Manga</strong> online. We provide high-quality scans of the latest chapters as soon as they are released. Join millions of fans worldwide in following the journey of Momo Ayase.
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">What is Dandadan?</h3>
              <p>
                Momo Ayase (believer of ghosts) and Ken Takakura (believer of aliens) get cursed and abducted, starting a chaotic supernatural adventure.
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Why is Dandadan So Popular?</h3>
              <p>
                Created by <strong className="text-gray-900 dark:text-white">Tatsu Yukinobu</strong>, <em>Dandadan</em> deconstructs standard tropes, highlighting individual drive and unique storytelling. Combined with exceptional, dynamic art style, it has become a global phenomenon.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* More Manga Network Banner */}
      <div className="bg-[#0d1117] border-t border-white/5 py-14 px-4">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <span className="text-bb-blue text-xs font-bold uppercase tracking-widest block mb-2">More from Our Network</span>
          <h2 className="text-2xl font-heading font-bold text-white">Also Reading?</h2>
          <p className="text-gray-500 text-sm mt-2">Explore more top manga series — all free, all high quality.</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { name: 'Blue Lock', url: 'https://www.readbluelockmanga.online/', desc: 'Soccer & ego battle', emoji: '⚽' },
            { name: 'Kagurabachi', url: 'https://www.kagurabachimanga.online/', desc: 'Enchanted blade revenge', emoji: '⚔️' },
            { name: 'Gachiakuta', url: 'https://www.readgachiakutamanga.online/', desc: 'Trash-powered warrior', emoji: '🗑️' },
            { name: 'Nano Machine', url: 'https://www.nanomachinemanga.online/', desc: 'Futuristic murim rise', emoji: '⚙️' },
            { name: 'Kingdom', url: 'https://www.readkingdommanga.online/', desc: '876 ch. epic history', emoji: '🏯' },
          ].map(site => (
            <a key={site.url} href={site.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 p-5 bg-white/3 border border-white/5 rounded-xl hover:border-bb-blue/30 hover:bg-bb-blue/5 transition-all text-center">
              <span className="text-3xl">{site.emoji}</span>
              <span className="font-bold text-white text-sm group-hover:text-bb-blue transition-colors">{site.name}</span>
              <span className="text-xs text-gray-500">{site.desc}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;