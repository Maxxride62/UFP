import { useEffect, useState } from 'react';
import { Menu } from './components/Menu';
import { ImageWithFallback } from './components/ImageWithFallback';
import { Logo } from './components/Logo';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 px-6 max-w-4xl w-full pt-32 md:pt-0">
          <h1 className="text-white text-6xl md:text-7xl lg:text-8xl leading-tight mb-8">
            You're not lost.<br />You never had a map.
          </h1>
          <p className="text-white/90 text-xl md:text-2xl leading-relaxed mb-8 max-w-3xl">
            A coaching practice for men in the middle of it — separation, identity collapse, the slow leak of a life built on someone else's instructions. Three phases: Dismantle. Rewire. Rebuild.
          </p>
          <p className="text-white/80 text-base leading-relaxed mb-12 max-w-2xl">
            You've been using the word 'should' your entire adult life. You should be further along. You should be handling this better. You should want what you have. The Unfuck'd Paradigm is for the man who is finally ready to ask whose voice that actually is.
          </p>
          <div className="flex flex-col gap-6 items-start">
            <a
              href="#apply"
              className="px-8 py-4 bg-white text-zinc-900 hover:bg-zinc-100 transition-colors inline-block"
            >
              Apply to work with me →
            </a>
            <a
              href="https://substack.com"
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
                src="/DSCF0036.jpg"
                alt="Man in contemplation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl mb-12 text-zinc-900">
                Here's what the men who come to this work actually look like
              </h2>
              <div className="space-y-6 text-zinc-700 text-base leading-relaxed">
                <p>
                  You're not in crisis. You're functioning. You show up to work, you pay your bills, you manage the logistics of your life. But somewhere along the way, the person you thought you'd become stopped making sense. You look around and realize you don't recognize the life you built — or worse, you do, and it's someone else's blueprint.
                </p>
                <p>
                  Maybe it's a separation that's forcing you to look at who you are when the role of 'husband' or 'partner' gets stripped away. Maybe it's the slow, grinding realization that the career you've been climbing doesn't actually mean anything to you. Maybe it's the quiet, persistent sense that you've been performing a version of yourself for so long you've forgotten what the original looked like.
                </p>
                <p>
                  The men who do this work aren't broken. They're awake. And that's harder.
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
                <img
                  src="/DSCF0664.jpg"
                  alt="Go no further - boundary"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl mb-4 text-zinc-900">Dismantle</h3>
              <p className="text-zinc-700 text-base leading-relaxed">
                Look at what you've been carrying. The inherited beliefs about what a man is, what he owes, what he's allowed to want. The patterns that were running you before you were old enough to question them. You can't change what you can't see.
              </p>
            </div>
            <div>
              <div className="aspect-square mb-6 rounded-lg overflow-hidden">
                <img
                  src="/DSCF0003.jpg"
                  alt="In transition"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl mb-4 text-zinc-900">Rewire</h3>
              <p className="text-zinc-700 text-base leading-relaxed">
                Work at the level of the nervous system, not the head. Insight alone does not change patterns — the body has to be involved. This is where the actual shift happens, and it's slower than you'd like.
              </p>
            </div>
            <div>
              <div className="aspect-square mb-6 rounded-lg overflow-hidden">
                <img
                  src="/DSCF0038.jpg"
                  alt="Rebuilding - globe and books"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl mb-4 text-zinc-900">Rebuild</h3>
              <p className="text-zinc-700 text-base leading-relaxed">
                Make something new. A version of yourself that isn't a reaction to what came before — one that's chosen, not inherited. This is the part most men skip. It's also the part that lasts.
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
                  You're not looking for someone to tell you what to do. You've had enough of that. You're looking for someone who can hold space while you work out what you actually want — not what you're supposed to want, not what would make other people comfortable, but what's true.
                </p>
                <p>
                  You're done with surface-level fixes. You've read the books, listened to the podcasts, maybe even done some therapy. You know the language. But knowing why you do something and being able to change it are not the same thing. You're ready for the slower, harder work that actually shifts the pattern.
                </p>
                <p>
                  You're willing to be uncomfortable. You understand that clarity doesn't come from comfort — it comes from being honest about what you've been avoiding. And you're finally ready to stop managing your symptoms and start addressing their source.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img
                src="/DSCF0083.jpg"
                alt="Contemplation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Nick */}
      <section id="why-nick" className="bg-[#D4C5A0] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden order-2 md:order-1">
              <img
                src="/DSCF0462-2_MLV.jpg"
                alt="Nick Berman"
                className="w-full h-full object-cover"
              />
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
                  I spent twenty years in recruitment, building teams, reading people, watching what happens when someone's in the wrong role but can't name why. I learned how to listen for what wasn't being said. How to spot the gap between what someone projects and what's actually going on underneath.
                </p>
                <p>
                  Four years ago, I went through my own reckoning. Separation. Identity collapse. The slow, grinding realization that the life I'd built didn't fit the person I was becoming. I didn't have a map. I didn't have a coach. I had to figure it out the hard way.
                </p>
                <p>
                  This work came out of that. The men I work with aren't projects. They're not case studies. They're men in the middle of it, trying to figure out who they are when the scaffolding falls away. I know what that feels like. And I know what it takes to rebuild.
                </p>
                <p className="pt-6">
                  — Nick Berman
                </p>
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
                "I came to Nick thinking I needed help with my separation. What I got was permission to stop performing and start asking what I actually wanted. That shift changed everything."
              </p>
              <footer className="text-zinc-600 text-sm">— James, Melbourne</footer>
            </blockquote>
            <blockquote className="border-l-2 border-zinc-300 pl-6">
              <p className="text-zinc-700 text-lg leading-relaxed mb-4 italic">
                "This isn't therapy. It's not coaching in the traditional sense. It's someone who's been through it, holding space while you work out who you are when the script runs out."
              </p>
              <footer className="text-zinc-600 text-sm">— David, Brisbane</footer>
            </blockquote>
            <blockquote className="border-l-2 border-zinc-300 pl-6">
              <p className="text-zinc-700 text-lg leading-relaxed mb-4 italic">
                "I spent years in therapy talking about my patterns. With Nick, I finally learned how to change them. The difference is embodiment. The work is somatic, not just cerebral."
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
            {/* Tier 1 - The Reckoning */}
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
              <p className="text-white text-lg mt-auto">
                Total: AU$2,800
              </p>
            </div>

            {/* Tier 2 - The Rewire */}
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
              <p className="text-zinc-900 text-lg mt-auto">
                Total: AU$10,200
              </p>
            </div>

            {/* Tier 3 - The Immersion */}
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
              <p className="text-white text-lg mt-auto">
                From AU$15,000
              </p>
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
              <div className="w-16 h-16 rounded-full bg-zinc-900 text-white flex items-center justify-center text-2xl mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl mb-4 text-zinc-900">Apply</h3>
              <p className="text-zinc-700 text-base leading-relaxed">
                Five questions, five minutes. You're being honest about where you are, not selling yourself.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-zinc-900 text-white flex items-center justify-center text-2xl mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl mb-4 text-zinc-900">We talk</h3>
              <p className="text-zinc-700 text-base leading-relaxed">
                If we're a fit, we'll set up a 30-minute conversation — no pitch, no pressure — to work out whether this is the right work for you right now.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-zinc-900 text-white flex items-center justify-center text-2xl mx-auto mb-6">
                3
              </div>
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

          {/* Calendly inline widget */}
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/nick-hireground?hide_gdpr_banner=1"
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
                  <p className="text-zinc-700 text-base leading-relaxed mt-4">
                    {faq.a}
                  </p>
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
              The Unfuck'd Paradigm — for men ready to stop managing their symptoms and start addressing their source.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="text-white text-sm mb-4 uppercase tracking-wider">The Practice</h4>
              <nav className="flex flex-col gap-3 text-sm">
                <a href="#home" className="text-white/70 hover:text-white transition-colors">
                  Home
                </a>
                <a href="#phases" className="text-white/70 hover:text-white transition-colors">
                  The three phases
                </a>
                <a href="#programmes" className="text-white/70 hover:text-white transition-colors">
                  The programmes
                </a>
                <a href="#apply" className="text-white/70 hover:text-white transition-colors">
                  Apply
                </a>
              </nav>
            </div>

            <div>
              <h4 className="text-white text-sm mb-4 uppercase tracking-wider">Read</h4>
              <nav className="flex flex-col gap-3 text-sm">
                <a href="https://substack.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  Substack
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Recent essays
                </a>
              </nav>
            </div>

            <div>
              <h4 className="text-white text-sm mb-4 uppercase tracking-wider">Contact</h4>
              <nav className="flex flex-col gap-3 text-sm">
                <a href="mailto:hello@theunfuckdparadigm.com" className="text-white/70 hover:text-white transition-colors">
                  email me
                </a>
                <a href="#apply" className="text-white/70 hover:text-white transition-colors">
                  Apply to work with me
                </a>
              </nav>
            </div>

            <div>
              <h4 className="text-white text-sm mb-4 uppercase tracking-wider">Legal</h4>
              <nav className="flex flex-col gap-3 text-sm">
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Privacy
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Terms
                </a>
                <p className="text-white/70 text-sm mt-6">
                  © 2026 Nick Berman
                </p>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}