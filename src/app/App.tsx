import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// ── Logo ──────────────────────────────────────────────────────────────────────
function Logo({ variant, className = '' }: { variant: 'white' | 'black' | 'earth' | 'sulphur'; className?: string }) {
  const fills: Record<string, string> = {
    white: '#fff',
    black: '#000',
    earth: '#332b25',
    sulphur: '#e4e18b',
  };
  const fill = fills[variant];
  return (
    <svg viewBox="0 0 283.46 168.83" className={className} xmlns="http://www.w3.org/2000/svg">
      <path fill={fill} d="M16.32,50.32c-3.64,0-6.42-.89-8.34-2.66-1.92-1.77-2.88-4.6-2.88-8.48v-17.68H0v-6.83h5.1V6.04h8.19v8.63h8.7v6.83h-8.7v17.75c0,1.68.38,2.8,1.15,3.38.77.58,1.92.86,3.45.86h4.1v6.83h-5.68Z"/>
      <path fill={fill} d="M26.31,50.32V0h8.12v19.48c1.2-1.87,2.86-3.28,5-4.24,2.13-.96,4.32-1.44,6.58-1.44,4.12,0,7.48,1.32,10.06,3.95,2.59,2.64,3.88,6.52,3.88,11.64v20.92h-8.05v-19.91c0-3.02-.71-5.39-2.12-7.12-1.41-1.73-3.49-2.59-6.22-2.59s-5.06.92-6.68,2.77c-1.63,1.85-2.44,4.35-2.44,7.51v19.34h-8.12Z"/>
      <path fill={fill} d="M81.71,51.18c-3.59,0-6.73-.8-9.42-2.41-2.68-1.6-4.78-3.81-6.29-6.61-1.51-2.8-2.26-6.03-2.26-9.67s.75-7.07,2.26-9.85c1.51-2.78,3.62-4.95,6.33-6.5,2.71-1.56,5.86-2.34,9.45-2.34s6.54.75,9.13,2.26c2.59,1.51,4.62,3.58,6.11,6.22,1.48,2.64,2.23,5.63,2.23,8.98,0,.67-.01,1.27-.04,1.8-.02.53-.08,1.1-.18,1.73h-27.1c.14,1.87.62,3.53,1.44,5,.81,1.46,1.93,2.6,3.34,3.41,1.41.82,3.03,1.22,4.85,1.22,1.96,0,3.63-.43,5-1.29,1.37-.86,2.43-2.11,3.2-3.74h8.55c-.67,2.16-1.74,4.12-3.2,5.89-1.46,1.77-3.31,3.2-5.53,4.28-2.23,1.08-4.85,1.62-7.87,1.62ZM72.01,29.11h18.9c-.05-2.63-.98-4.72-2.8-6.25-1.82-1.53-4-2.3-6.54-2.3-2.3,0-4.37.7-6.22,2.08-1.85,1.39-2.96,3.55-3.34,6.47Z"/>
      <path fill={fill} d="M19.41,110c-2.97,0-5.52-.62-7.66-1.87-2.13-1.25-3.77-3.03-4.92-5.35-1.15-2.32-1.73-5.07-1.73-8.23v-21.06h8.12v19.91c0,2.97.71,5.33,2.12,7.08,1.41,1.75,3.51,2.62,6.29,2.62s5.03-.91,6.61-2.73c1.58-1.82,2.37-4.34,2.37-7.55v-19.34h8.12v35.65h-7.91l-.14-4.89c-1.2,1.82-2.8,3.23-4.82,4.24s-4.17,1.51-6.47,1.51Z"/>
      <path fill={fill} d="M44.54,109.14v-35.65h7.91l.14,4.89c1.2-1.87,2.85-3.29,4.96-4.28,2.11-.98,4.31-1.47,6.61-1.47,4.17,0,7.55,1.32,10.13,3.95,2.59,2.64,3.88,6.52,3.88,11.64v20.92h-8.05v-19.91c0-3.02-.72-5.39-2.16-7.12-1.44-1.73-3.55-2.59-6.33-2.59s-4.97.92-6.58,2.77c-1.61,1.85-2.41,4.35-2.41,7.51v19.34h-8.12Z"/>
      <path fill={fill} d="M84.56,109.14v-28.82h-4.6v-6.83h4.6v-3.38c0-4.03,1.01-6.91,3.02-8.66,2.01-1.75,4.82-2.62,8.41-2.62h3.23v6.97h-1.94c-1.68,0-2.86.32-3.56.97-.7.65-1.04,1.76-1.04,3.34v3.38h7.19v6.83h-7.19v28.82h-8.12Z"/>
      <path fill={fill} d="M117.12,168.83c-2.97,0-5.52-.62-7.66-1.87-2.13-1.25-3.77-3.03-4.92-5.35-1.15-2.32-1.73-5.07-1.73-8.23v-21.06h8.12v19.91c0,2.97.71,5.33,2.12,7.08,1.41,1.75,3.51,2.62,6.29,2.62s5.03-.91,6.61-2.73c1.58-1.82,2.37-4.34,2.37-7.55v-19.34h8.12v35.65h-7.91l-.14-4.89c-1.2,1.82-2.8,3.23-4.82,4.24-2.01,1.01-4.17,1.51-6.47,1.51Z"/>
      <path fill={fill} d="M158.68,110c-3.5,0-6.59-.79-9.27-2.37-2.68-1.58-4.79-3.77-6.33-6.58-1.53-2.8-2.3-6.05-2.3-9.74s.74-6.86,2.23-9.67c1.48-2.8,3.57-5.01,6.25-6.61,2.68-1.6,5.82-2.41,9.42-2.41,4.31,0,7.94,1.09,10.89,3.27,2.95,2.18,4.9,5.28,5.86,9.31h-8.63c-.43-1.68-1.37-3.04-2.8-4.1-1.44-1.05-3.23-1.58-5.39-1.58s-3.93.54-5.32,1.62c-1.39,1.08-2.43,2.52-3.13,4.31-.7,1.8-1.04,3.75-1.04,5.86s.36,4.19,1.08,5.97c.72,1.77,1.78,3.19,3.2,4.24,1.41,1.05,3.15,1.58,5.21,1.58s3.87-.49,5.28-1.47c1.41-.98,2.38-2.38,2.91-4.2h8.63c-.58,2.59-1.64,4.83-3.2,6.72-1.56,1.89-3.49,3.34-5.79,4.35-2.3,1.01-4.89,1.51-7.76,1.51Z"/>
      <path fill={fill} d="M178.95,109.14v-50.32h8.12v29.76l12.79-15.09h10.35l-15.67,17.32,16.53,18.33h-10.49l-13.51-16.24v16.24h-8.12Z"/>
      <path fill={fill} d="M225.6,110c-3.59,0-6.73-.8-9.42-2.41-2.68-1.6-4.78-3.81-6.29-6.61-1.51-2.8-2.26-6.03-2.26-9.67s.75-7.07,2.26-9.85c1.51-2.78,3.62-4.95,6.33-6.5,2.71-1.56,5.86-2.34,9.45-2.34s6.54.75,9.13,2.26c2.59,1.51,4.62,3.58,6.11,6.22,1.48,2.64,2.23,5.63,2.23,8.98,0,.67-.01,1.27-.04,1.8-.02.53-.08,1.1-.18,1.73h-27.1c.14,1.87.62,3.53,1.44,5,.81,1.46,1.93,2.6,3.34,3.41,1.41.82,3.03,1.22,4.85,1.22,1.96,0,3.63-.43,5-1.29s2.43-2.11,3.2-3.74h8.55c-.67,2.16-1.74,4.12-3.2,5.89-1.46,1.77-3.31,3.2-5.53,4.28-2.23,1.08-4.85,1.62-7.87,1.62ZM215.9,87.93h18.9c-.05-2.63-.98-4.72-2.8-6.25-1.82-1.53-4-2.3-6.54-2.3-2.3,0-4.37.7-6.22,2.08-1.85,1.39-2.96,3.55-3.34,6.47Z"/>
      <path fill={fill} d="M263.05,110c-3.55,0-6.58-.85-9.09-2.55-2.52-1.7-4.46-3.96-5.82-6.79-1.37-2.83-2.05-5.99-2.05-9.49s.68-6.58,2.05-9.38c1.37-2.8,3.32-5.03,5.86-6.68,2.54-1.65,5.56-2.48,9.06-2.48,2.49,0,4.82.52,6.97,1.55,2.16,1.03,3.91,2.53,5.25,4.49v-19.84h8.19v50.32h-7.98l-.22-5.39c-1.15,1.92-2.8,3.44-4.96,4.56-2.16,1.13-4.58,1.69-7.26,1.69ZM264.85,102.89c2.16,0,4-.5,5.53-1.51,1.53-1.01,2.73-2.38,3.59-4.13.86-1.75,1.29-3.73,1.29-5.93,0-2.54-.49-4.67-1.47-6.4-.98-1.73-2.28-3.02-3.88-3.88-1.61-.86-3.32-1.29-5.14-1.29-2.01,0-3.8.49-5.35,1.47-1.56.98-2.78,2.32-3.67,4.03-.89,1.7-1.33,3.7-1.33,6s.45,4.25,1.37,6c.91,1.75,2.14,3.13,3.7,4.13,1.56,1.01,3.34,1.51,5.35,1.51Z"/>
    </svg>
  );
}

// ── Menu ──────────────────────────────────────────────────────────────────────
function Menu() {
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { label: 'The programmes', href: '#programmes' },
    { label: 'Why Nick', href: '#why-nick' },
    { label: 'Work Together', href: '#apply' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav
        style={{ backgroundColor: isScrolled ? 'rgba(232, 229, 167, 0.95)' : 'rgba(232, 229, 167, 1)' }}
        className="max-w-6xl mx-auto rounded-full px-8 py-4 flex items-center justify-between shadow-lg backdrop-blur-sm transition-colors duration-300"
      >
        <a href="#home" className="flex-shrink-0">
          <Logo variant="earth" className="h-12 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-12">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-zinc-900 hover:text-zinc-600 transition-all text-base hover:underline underline-offset-4"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#apply"
          className="bg-zinc-900 text-white px-8 py-3 rounded-full hover:bg-zinc-800 transition-colors text-base"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      if (link.parentNode) link.parentNode.removeChild(link);
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Menu />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-zinc-900">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src="/AUTUM_LEAVES-_1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 w-full">
          <p className="text-white/60 text-sm uppercase tracking-widest mb-6">The Unfuck'd Paradigm</p>
          <h1 className="text-5xl md:text-7xl text-white mb-8 leading-tight max-w-4xl">
            For men ready to stop performing and start becoming.
          </h1>
          <p className="text-white/80 text-base leading-relaxed mb-6 max-w-2xl">
            A coaching practice for men in the middle of it — separation, identity collapse, the slow leak of a life built on someone else's instructions. Three phases: Dismantle. Rewire. Rebuild.
          </p>
          <p className="text-white/80 text-base leading-relaxed mb-12 max-w-2xl">
            {"You've been using the word 'should' your entire adult life. You should be further along. You should be handling this better. You should want what you have. The Unfuck'd Paradigm is for the man who is finally ready to ask whose voice that actually is."}
          </p>
          <div className="flex flex-col gap-6 items-start">
            <a
              href="#apply"
              className="px-8 py-4 bg-white text-zinc-900 hover:bg-zinc-100 transition-colors inline-block"
            >
              Apply to work with me →
            </a>
            <a
              href="https://open.substack.com/pub/nickberman"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-white/80 hover:text-white transition-colors inline-block"
            >
              Not ready? Read the writing →
            </a>
          </div>
        </div>
      </section>

      {/* Empathy Block */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden order-2 md:order-1">
              <img
                src="/DSCF0462-2_MLV.jpg"
                alt="Nick Berman"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl mb-8 text-zinc-900 leading-tight">
                You know something has to change. You just don't know what yet.
              </h2>
              <div className="space-y-6 text-zinc-700 text-base leading-relaxed">
                <p>
                  {"You're not in crisis. You're functioning. You show up to work, you pay your bills, you manage the logistics of your life. But somewhere along the way, the person you thought you'd become stopped making sense. You look around and realize you don't recognize the life you built — or worse, you do, and it's someone else's blueprint."}
                </p>
                <p>
                  {"Maybe it's a separation that's forcing you to look at who you are when the role of 'husband' or 'partner' gets stripped away. Maybe it's the slow, grinding realization that the career you've been climbing doesn't actually mean anything to you. Maybe it's the quiet, persistent sense that you've been performing a version of yourself for so long you've forgotten what the original looked like."}
                </p>
                <p>
                  {"The men who do this work aren't broken. They're awake. And that's harder."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Phases */}
      <section id="phases" className="bg-[#E8E5A7] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-16 text-zinc-900">
            The three phases
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="aspect-square mb-6 rounded-lg overflow-hidden">
                <img src="/DSCF0664.jpg" alt="Go no further - boundary" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl mb-4 text-zinc-900">Dismantle</h3>
              <p className="text-zinc-700 text-base leading-relaxed">
                {"Look at what you've been carrying. The inherited beliefs about what a man is, what he owes, what he's allowed to want. The patterns that were running you before you were old enough to question them. You can't change what you can't see."}
              </p>
            </div>
            <div>
              <div className="aspect-square mb-6 rounded-lg overflow-hidden">
                <img src="/DSCF0003.jpg" alt="In transition" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl mb-4 text-zinc-900">Rewire</h3>
              <p className="text-zinc-700 text-base leading-relaxed">
                {"Work at the level of the nervous system, not the head. Insight alone does not change patterns — the body has to be involved. This is where the actual shift happens, and it's slower than you'd like."}
              </p>
            </div>
            <div>
              <div className="aspect-square mb-6 rounded-lg overflow-hidden">
                <img src="/DSCF0038.jpg" alt="Rebuilding - globe and books" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl mb-4 text-zinc-900">Rebuild</h3>
              <p className="text-zinc-700 text-base leading-relaxed">
                {"Make something new. A version of yourself that isn't a reaction to what came before — one that's chosen, not inherited. This is the part most men skip. It's also the part that lasts."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Man This Is For */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-12 text-zinc-900">
                The man this is for
              </h2>
              <div className="space-y-6 text-zinc-700 text-base leading-relaxed">
                <p>
                  {"You're not looking for someone to tell you what to do. You've had enough of that. You're looking for someone who can hold space while you work out what you actually want — not what you're supposed to want, not what would make other people comfortable, but what's true."}
                </p>
                <p>
                  {"You're done with surface-level fixes. You've read the books, listened to the podcasts, maybe even done some therapy. You know the language. But knowing why you do something and being able to change it are not the same thing. You're ready for the slower, harder work that actually shifts the pattern."}
                </p>
                <p>
                  {"You're willing to be uncomfortable. You understand that clarity doesn't come from comfort — it comes from being honest about what you've been avoiding. And you're finally ready to stop managing your symptoms and start addressing their source."}
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img src="/DSCF0083.jpg" alt="Contemplation" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Nick */}
      <section id="why-nick" className="bg-[#D4C5A0] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden order-2 md:order-1">
              <img src="/DSCF0462-2_MLV.jpg" alt="Nick Berman" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-zinc-700 text-sm mb-8 leading-relaxed italic">
                Twenty years in recruitment. Four years coaching men through separation, identity collapse, and the work of becoming someone they actually recognise. Father of three daughters.
              </p>
              <h2 className="text-4xl md:text-5xl mb-8 text-zinc-900">
                Why Nick
              </h2>
              <div className="space-y-6 text-zinc-700 text-base leading-relaxed">
                <p>
                  {"I spent twenty years in recruitment, building teams, reading people, watching what happens when someone's in the wrong role but can't name why. I learned how to listen for what wasn't being said. How to spot the gap between what someone projects and what's actually going on underneath."}
                </p>
                <p>
                  {"Four years ago, I went through my own reckoning. Separation. Identity collapse. The slow, grinding realization that the life I'd built didn't fit the person I was becoming. I didn't have a map. I didn't have a coach. I had to figure it out the hard way."}
                </p>
                <p>
                  {"This work came out of that. The men I work with aren't projects. They're not case studies. They're men in the middle of it, trying to figure out who they are when the scaffolding falls away. I know what that feels like. And I know what it takes to rebuild."}
                </p>
                <p className="pt-6">— Nick Berman</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-12 text-zinc-900">
            What men say
          </h2>
          <div className="space-y-12">
            <blockquote className="border-l-2 border-zinc-300 pl-6">
              <p className="text-zinc-700 text-lg leading-relaxed mb-4 italic">
                {'"I came to Nick thinking I needed help with my separation. What I got was permission to stop performing and start asking what I actually wanted. That shift changed everything."'}
              </p>
              <footer className="text-zinc-600 text-sm">— James, Melbourne</footer>
            </blockquote>
            <blockquote className="border-l-2 border-zinc-300 pl-6">
              <p className="text-zinc-700 text-lg leading-relaxed mb-4 italic">
                {'"This isn\'t therapy. It\'s not coaching in the traditional sense. It\'s someone who\'s been through it, holding space while you work out who you are when the script runs out."'}
              </p>
              <footer className="text-zinc-600 text-sm">— David, Brisbane</footer>
            </blockquote>
            <blockquote className="border-l-2 border-zinc-300 pl-6">
              <p className="text-zinc-700 text-lg leading-relaxed mb-4 italic">
                {'"I spent years in therapy talking about my patterns. With Nick, I finally learned how to change them. The difference is embodiment. The work is somatic, not just cerebral."'}
              </p>
              <footer className="text-zinc-600 text-sm">— Michael, Sydney</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* The Programmes */}
      <section id="programmes" className="bg-zinc-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            The programmes
          </h2>
          <p className="text-white/80 text-xl mb-16">
            Three ways to do this work. Pick the one that fits where you are.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-800 p-8 flex flex-col">
              <h3 className="text-2xl mb-2 text-white">The Reckoning</h3>
              <p className="text-white/60 text-sm mb-6">8 weeks · 1:1 · AU$1,400/month</p>
              <p className="text-white/90 mb-6 text-base">
                The starting point. Eight weeks of weekly 90-minute 1:1 calls to look honestly at what you've been carrying — the inherited beliefs, the patterns running you, the version of yourself you've been performing.
              </p>
              <div className="mb-6 space-y-2 text-sm text-white/80">
                <p>• 8 × 90-minute weekly 1:1 sessions over Zoom</p>
                <p>• WhatsApp access between sessions</p>
                <p>• Weekly resources sent ahead of each session</p>
                <p>• A clear map of what you're working with</p>
              </div>
              <p className="text-white/70 text-sm italic mb-6">
                For the man who is ready to stop pretending things are fine but isn't yet sure what the work actually is.
              </p>
              <p className="text-white text-lg mt-auto">Total: AU$2,800</p>
            </div>

            <div className="bg-white p-8 flex flex-col border-4 border-[#E8E5A7]">
              <h3 className="text-2xl mb-2 text-zinc-900">The Rewire</h3>
              <p className="text-zinc-600 text-sm mb-6">6 months · 1:1 · AU$1,700/month</p>
              <p className="text-zinc-900 mb-6 text-base">
                The deep work. Six months of weekly 1:1 plus the slower, harder process of changing patterns at the level of the nervous system — not just in the head.
              </p>
              <div className="mb-6 space-y-2 text-sm text-zinc-700">
                <p>• 24 × 90-minute weekly 1:1 sessions</p>
                <p>• WhatsApp access throughout — daily if you need it</p>
                <p>• Custom somatic practice plan</p>
                <p>• Quarterly half-day deep dives (3 hours)</p>
                <p>• Library of resources and tools built for you</p>
              </div>
              <p className="text-zinc-600 text-sm italic mb-6">
                For the man who has done some work already and knows insight isn't enough. Ready to commit to the slower, harder shift that actually lasts.
              </p>
              <p className="text-zinc-900 text-lg mt-auto">Total: AU$10,200</p>
            </div>

            <div className="bg-zinc-800 p-8 flex flex-col">
              <h3 className="text-2xl mb-2 text-white">The Immersion</h3>
              <p className="text-white/60 text-sm mb-6">Bespoke · By application only · From AU$15,000</p>
              <p className="text-white/90 mb-6 text-base">
                The premium tier. A fully bespoke 6–12 month container designed around the man and the moment he's in. Includes everything in The Rewire plus deeper access and concentrated work.
              </p>
              <div className="mb-6 space-y-2 text-sm text-white/80">
                <p>• All elements of The Rewire</p>
                <p>• Weekend intensive on the Sunshine Coast</p>
                <p>• Direct phone access — not just WhatsApp</p>
                <p>• Two additional half-day deep dives</p>
                <p>• Bespoke programme design</p>
              </div>
              <p className="text-white/70 text-sm italic mb-6">
                For the man in a major transition — separation, identity collapse, business exit — who knows he needs concentrated, dedicated work, not a programme.
              </p>
              <p className="text-white text-lg mt-auto">From AU$15,000</p>
            </div>
          </div>

          <p className="text-white/70 text-center mt-12 text-base">
            Not sure which fits? Apply and we'll talk it through on the connection call. Five questions. Five minutes.
          </p>
        </div>
      </section>

      {/* How This Works */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-16 text-zinc-900 text-center">
            How this works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-zinc-900 text-white flex items-center justify-center text-2xl mx-auto mb-6">1</div>
              <h3 className="text-2xl mb-4 text-zinc-900">Apply</h3>
              <p className="text-zinc-700 text-base leading-relaxed">
                {"Five questions, five minutes. You're being honest about where you are, not selling yourself."}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-zinc-900 text-white flex items-center justify-center text-2xl mx-auto mb-6">2</div>
              <h3 className="text-2xl mb-4 text-zinc-900">We talk</h3>
              <p className="text-zinc-700 text-base leading-relaxed">
                {"If we're a fit, we'll set up a 30-minute conversation — no pitch, no pressure — to work out whether this is the right work for you right now."}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-zinc-900 text-white flex items-center justify-center text-2xl mx-auto mb-6">3</div>
              <h3 className="text-2xl mb-4 text-zinc-900">We begin</h3>
              <p className="text-zinc-700 text-base leading-relaxed">
                If we both want to proceed, we choose the right programme together and we get to work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Call */}
      <section id="apply" className="bg-[#C4B89B] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl mb-6 text-zinc-900 leading-tight">
            Ready to start?
          </h2>
          <p className="text-zinc-700 mb-12 text-base max-w-2xl leading-relaxed">
            Book a 30-minute connection call. No pitch, no pressure — just a conversation to work out whether this is the right work for you right now.
          </p>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/nick-unfckedparadigm/alignment-call?hide_gdpr_banner=1"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-12 text-zinc-900">
            Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Is this therapy?",
                a: "No. I'm not a therapist and this isn't therapy. This is coaching — practical, somatic, focused on patterns and embodiment. If you need clinical support, I'll tell you. If you need someone to help you rewire the way you show up in the world, that's this."
              },
              {
                q: "Is this confidential?",
                a: "Yes. Everything we discuss stays between us. I don't write about client work, I don't name names, and I don't share stories — not in content, not in conversation, not ever. If you're in legal proceedings, an executive role, or any situation where discretion matters, assume it's handled."
              },
              {
                q: "What if I'm not sure I'm ready?",
                a: "Then you're probably not. This work requires commitment — not to a outcome, but to the process of being honest about what you've been avoiding. If you're not there yet, that's fine. Read the writing. Come back when it's time."
              },
              {
                q: "Do you work with women?",
                a: "No. I work exclusively with men. Not because the work isn't relevant to women, but because the patterns I work with — inherited masculinity, performance, the collapse that happens when the scaffolding falls away — show up differently for men. This is a container built for that."
              },
              {
                q: "What happens on the connection call?",
                a: "We talk for 30 minutes. You tell me where you are, I tell you whether I think I can help. If it's not a fit, I'll say so. If it is, we'll talk about which programme makes sense and what the next step looks like. No pitch, no pressure."
              }
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-zinc-200 pb-6">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <h3 className="text-xl text-zinc-900 pr-8">{faq.q}</h3>
                  {openFaq === idx ? (
                    <ChevronUp className="w-6 h-6 text-zinc-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-zinc-600 flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <p className="text-zinc-700 text-base leading-relaxed mt-4">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <Logo variant="white" className="h-16 w-auto mb-6" />
            <p className="text-white/70 text-base max-w-2xl">
              {"The Unfuck'd Paradigm — for men ready to stop managing their symptoms and start addressing their source."}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="text-white text-sm mb-4 uppercase tracking-wider">The Practice</h4>
              <nav className="flex flex-col gap-3 text-sm">
                <a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a>
                <a href="#phases" className="text-white/70 hover:text-white transition-colors">The three phases</a>
                <a href="#programmes" className="text-white/70 hover:text-white transition-colors">The programmes</a>
                <a href="#apply" className="text-white/70 hover:text-white transition-colors">Apply</a>
              </nav>
            </div>

            <div>
              <h4 className="text-white text-sm mb-4 uppercase tracking-wider">Read</h4>
              <nav className="flex flex-col gap-3 text-sm">
                <a href="https://open.substack.com/pub/nickberman" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Substack</a>
                <a href="https://www.linkedin.com/in/batmanbeard/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">LinkedIn</a>
                <a href="https://open.substack.com/pub/nickberman" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Recent essays</a>
              </nav>
            </div>

            <div>
              <h4 className="text-white text-sm mb-4 uppercase tracking-wider">Contact</h4>
              <nav className="flex flex-col gap-3 text-sm">
                <a href="mailto:hello@theunfuckdparadigm.com" className="text-white/70 hover:text-white transition-colors">email me</a>
                <a href="#apply" className="text-white/70 hover:text-white transition-colors">Apply to work with me</a>
              </nav>
            </div>

            <div>
              <h4 className="text-white text-sm mb-4 uppercase tracking-wider">Legal</h4>
              <nav className="flex flex-col gap-3 text-sm">
                <a href="#" className="text-white/70 hover:text-white transition-colors">Privacy</a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Terms</a>
                <p className="text-white/70 text-sm mt-6">© 2026 Nick Berman</p>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}