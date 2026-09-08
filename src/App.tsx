import { useState, useEffect } from 'react'

// ─── Types ─────────────────────────────────────────────────────────────────────

type Finish = 'framed' | 'wood'
type SizeKey = 'A5' | 'A4' | 'A3' | 'A2' | 'A1' | 'A0'
type Page = 'home' | 'designs' | 'product'
type Category =
  | 'All'
  | 'Abstract'
  | 'Music'
  | 'Motivation'
  | 'Minimal'
  | 'Cars'
  | 'Anime'
  | 'Movies'
  | 'Sports'
  | 'Lifestyle'
  | 'Business'
  | 'Typography'
  | 'Kenyan'

interface Product {
  id: string
  name: string
  category: Category
  imageUrl: string
  ar: string        // CSS aspect-ratio, e.g. "3/4"
  description: string
}

// ─── Pricing ───────────────────────────────────────────────────────────────────

const FRAMED: Partial<Record<SizeKey, number>> = {
  A5: 500, A4: 800, A3: 1000, A2: 2200,
}
const WOOD: Partial<Record<SizeKey, number>> = {
  A5: 800, A4: 1200, A3: 1500, A2: 2700, A1: 5000, A0: 10000,
}

const pricing = (f: Finish) => (f === 'framed' ? FRAMED : WOOD)
const cheapest = (f: Finish) =>
  Math.min(...(Object.values(pricing(f)).filter(Boolean) as number[]))

const ksh = (n: number) => `KSh ${n.toLocaleString()}`

// ─── Data ──────────────────────────────────────────────────────────────────────

const PRODUCTS: Product[] = [
  {
    id: 'stay-awhile',
    name: 'Stay Awhile',
    category: 'Minimal',
    imageUrl: 'https://images.unsplash.com/photo-1761156254622-7b66649b1f69?w=700&fit=crop&auto=format',
    ar: '3/4',
    description: 'A minimal statement piece designed to add calm and intention to any room. Clean geometry that speaks without shouting.',
  },
  {
    id: 'golden-hour',
    name: 'Golden Hour',
    category: 'Abstract',
    imageUrl: 'https://images.unsplash.com/photo-1699465301322-362016624dd7?w=700&fit=crop&auto=format',
    ar: '4/5',
    description: 'Warm tones and flowing forms that capture the fleeting beauty of late afternoon light. Pairs beautifully with natural materials.',
  },
  {
    id: 'bloom',
    name: 'Bloom',
    category: 'Lifestyle',
    imageUrl: 'https://images.unsplash.com/photo-1646400589947-7d23071b6fd8?w=700&h=700&fit=crop&auto=format',
    ar: '1/1',
    description: 'Soft and elegant. A single bloom in monochrome — perfect for bedrooms, bathrooms or quiet reading nooks.',
  },
  {
    id: 'nairobi-nights',
    name: 'Nairobi Nights',
    category: 'Kenyan',
    imageUrl: 'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=700&fit=crop&auto=format',
    ar: '3/4',
    description: 'The city that never sleeps. A powerful urban portrait of Nairobi\'s skyline for those who love where they come from.',
  },
  {
    id: 'rise-up',
    name: 'Rise Up',
    category: 'Motivation',
    imageUrl: 'https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?w=700&fit=crop&auto=format',
    ar: '4/5',
    description: 'Difficult roads lead to beautiful destinations. A clean typographic piece for your workspace or home office.',
  },
  {
    id: 'vinyl-days',
    name: 'Vinyl Days',
    category: 'Music',
    imageUrl: 'https://images.unsplash.com/photo-1760274741733-21a64eed83c7?w=700&h=525&fit=crop&auto=format',
    ar: '4/3',
    description: 'A love letter to analogue. Rich textures, warm colours and the feeling of dropping a needle on a record.',
  },
  {
    id: 'speed-demon',
    name: 'Speed Demon',
    category: 'Cars',
    imageUrl: 'https://images.unsplash.com/photo-1555532686-d0fccaccadcf?w=700&fit=crop&auto=format',
    ar: '3/4',
    description: 'Power in still form. A dramatic close-up that makes any room feel like a paddock.',
  },
  {
    id: 'city-bridges',
    name: 'City Bridges',
    category: 'Kenyan',
    imageUrl: 'https://images.unsplash.com/photo-1669127300649-940337f1487e?w=700&h=420&fit=crop&auto=format',
    ar: '5/3',
    description: 'A contemporary view of Kenyan urban life — bridges, buildings and movement in one frame.',
  },
  {
    id: 'words-to-live-by',
    name: 'Words to Live By',
    category: 'Motivation',
    imageUrl: 'https://images.unsplash.com/photo-1574495887957-10d1ee854f38?w=700&fit=crop&auto=format',
    ar: '9/16',
    description: 'Simple words, powerful impact. A typographic piece that reminds you what matters every single day.',
  },
  {
    id: 'ferrari-red',
    name: 'Ferrari Red',
    category: 'Cars',
    imageUrl: 'https://images.unsplash.com/photo-1604150189430-d57c0398a850?w=700&fit=crop&auto=format',
    ar: '2/3',
    description: 'Rosso Corsa. The colour of passion, performance and pure Italian engineering.',
  },
  {
    id: 'record-room',
    name: 'Record Room',
    category: 'Music',
    imageUrl: 'https://images.unsplash.com/photo-1769001800010-d8a06d716c6a?w=700&fit=crop&auto=format',
    ar: '1/2',
    description: 'A curated collage of iconic band art and album covers. For music rooms, studios and creative spaces.',
  },
  {
    id: 'mellow-frames',
    name: 'Mellow Frames',
    category: 'Minimal',
    imageUrl: 'https://images.unsplash.com/photo-1594531427175-354aa438dc90?w=700&fit=crop&auto=format',
    ar: '3/4',
    description: 'Two frames, one story. Minimal wall art that creates a gallery feel without the clutter.',
  },
  {
    id: 'concrete-city',
    name: 'Concrete City',
    category: 'Kenyan',
    imageUrl: 'https://images.unsplash.com/photo-1643913224222-17cc6adb2dfc?w=700&h=596&fit=crop&auto=format',
    ar: '7/6',
    description: 'A sweeping aerial perspective of Nairobi — rooftops, roads and the city stretching endlessly forward.',
  },
  {
    id: 'the-studio',
    name: 'The Studio',
    category: 'Lifestyle',
    imageUrl: 'https://images.unsplash.com/photo-1724685109635-a2206372996b?w=700&fit=crop&auto=format',
    ar: '3/4',
    description: 'Creative space, creative mind. An intimate look at the artist\'s world — boards, art and culture.',
  },
  {
    id: 'night-drive',
    name: 'Night Drive',
    category: 'Cars',
    imageUrl: 'https://images.unsplash.com/photo-1547025603-ef800f02690e?w=700&h=450&fit=crop&auto=format',
    ar: '14/9',
    description: 'Light trails and open roads. A long-exposure shot that turns an ordinary road into something cinematic.',
  },
  {
    id: 'never-stop',
    name: 'Never Stop',
    category: 'Motivation',
    imageUrl: 'https://images.unsplash.com/photo-1634552277084-bcaccb0e130f?w=700&h=530&fit=crop&auto=format',
    ar: '4/3',
    description: 'Bold, graphic and direct. A typographic piece that commands attention and inspires action.',
  },
  {
    id: 'rock-on',
    name: 'Rock On',
    category: 'Music',
    imageUrl: 'https://images.unsplash.com/photo-1785813124570-22de566e6ed7?w=700&fit=crop&auto=format',
    ar: '9/16',
    description: 'Loud colours, iconic imagery. A bold music poster for anyone who lives and breathes rock culture.',
  },
  {
    id: 'nairobi-uptown',
    name: 'Nairobi Uptown',
    category: 'Kenyan',
    imageUrl: 'https://images.unsplash.com/photo-1611144727915-ef30a08aaeb3?w=700&fit=crop&auto=format',
    ar: '3/4',
    description: 'High-rise Nairobi, captured with pride. A vertical portrait of the city\'s boldest skyline.',
  },
  {
    id: 'serene',
    name: 'Serene',
    category: 'Lifestyle',
    imageUrl: 'https://images.unsplash.com/photo-1711602741026-22e8a7df1a51?w=700&h=466&fit=crop&auto=format',
    ar: '3/2',
    description: 'Still life with purpose. A plant, a frame, a moment of calm — exactly what your living room needs.',
  },
  {
    id: 'poster-gallery',
    name: 'Poster Gallery',
    category: 'Lifestyle',
    imageUrl: 'https://images.unsplash.com/photo-1695634183934-eeb0e7688f6d?w=700&h=466&fit=crop&auto=format',
    ar: '3/2',
    description: 'The art of display. Black and white prints on marble — a refined, curated gallery wall look.',
  },
  {
    id: 'colour-burst',
    name: 'Colour Burst',
    category: 'Abstract',
    imageUrl: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=700&h=466&fit=crop&auto=format',
    ar: '3/2',
    description: 'Explosive energy in red, blue and yellow. A statement piece for anyone who loves bold colour.',
  },
  {
    id: 'hisoka',
    name: 'Street Legend',
    category: 'Anime',
    imageUrl: 'https://images.unsplash.com/photo-1576843789623-ba1d22102973?w=700&h=466&fit=crop&auto=format',
    ar: '3/2',
    description: 'Street art meets anime culture. A bold graffiti-style portrait for fans of the genre.',
  },
  {
    id: 'court-king',
    name: 'Court King',
    category: 'Sports',
    imageUrl: 'https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?w=700&fit=crop&auto=format',
    ar: '2/3',
    description: 'The hoop, the light, the moment. A dramatic basketball shot that belongs on every sports fan\'s wall.',
  },
  {
    id: 'cinema-nights',
    name: 'Cinema Nights',
    category: 'Movies',
    imageUrl: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=700&fit=crop&auto=format',
    ar: '3/4',
    description: 'Classic cinema energy. For movie lovers who want their walls to tell a story.',
  },
]

const CATEGORIES: Category[] = [
  'All', 'Abstract', 'Music', 'Motivation', 'Minimal', 'Cars',
  'Anime', 'Movies', 'Sports', 'Lifestyle', 'Business', 'Typography', 'Kenyan',
]

const CATEGORY_COVERS: Partial<Record<Category, string>> = {
  Music: 'https://images.unsplash.com/photo-1760274741733-21a64eed83c7?w=500&h=640&fit=crop&auto=format',
  Cars: 'https://images.unsplash.com/photo-1555532686-d0fccaccadcf?w=500&h=640&fit=crop&auto=format',
  Minimal: 'https://images.unsplash.com/photo-1761156254622-7b66649b1f69?w=500&h=640&fit=crop&auto=format',
  Motivation: 'https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?w=500&h=640&fit=crop&auto=format',
  Kenyan: 'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=500&h=640&fit=crop&auto=format',
  Abstract: 'https://images.unsplash.com/photo-1699465301322-362016624dd7?w=500&h=640&fit=crop&auto=format',
  Lifestyle: 'https://images.unsplash.com/photo-1711602741026-22e8a7df1a51?w=500&h=640&fit=crop&auto=format',
  Sports: 'https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?w=500&h=640&fit=crop&auto=format',
  Anime: 'https://images.unsplash.com/photo-1576843789623-ba1d22102973?w=500&h=640&fit=crop&auto=format',
  Movies: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&h=640&fit=crop&auto=format',
}

// ─── WhatsApp ──────────────────────────────────────────────────────────────────

const WA = '254100709586'

function waOrder(p: Product, finish: Finish, size: SizeKey) {
  const price = pricing(finish)[size]!
  const label = finish === 'framed' ? 'Framed' : 'Wood Mounted'
  const msg = encodeURIComponent(
    `Hi Keja Prints! I'd like to order:\n\nDesign: ${p.name}\nFinish: ${label}\nSize: ${size}\nPrice: ${ksh(price)}\n\nPlease confirm availability. Thank you!`
  )
  return `https://wa.me/${WA}?text=${msg}`
}

function waQuestion(p: Product) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(`Hi Keja Prints! I have a question about the "${p.name}" design.`)}`
}

// ─── Micro SVG icons ───────────────────────────────────────────────────────────

const I = {
  search: (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  menu: (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  close: (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  arrowRight: (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  arrowLeft: (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
    </svg>
  ),
  check: (
    <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  wa: (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
  instagram: (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  frame: (
    <svg width={32} height={32} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="40" height="40" rx="2" />
      <rect x="11" y="11" width="26" height="26" />
      <line x1="4" y1="4" x2="11" y2="11" /><line x1="44" y1="4" x2="37" y2="11" />
      <line x1="4" y1="44" x2="11" y2="37" /><line x1="44" y1="44" x2="37" y2="37" />
    </svg>
  ),
  wood: (
    <svg width={32} height={32} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="40" height="40" rx="2" />
      <line x1="16" y1="4" x2="16" y2="44" /><line x1="32" y1="4" x2="32" y2="44" />
      <line x1="4" y1="16" x2="16" y2="16" /><line x1="4" y1="32" x2="16" y2="32" />
      <line x1="32" y1="16" x2="44" y2="16" /><line x1="32" y1="32" x2="44" y2="32" />
    </svg>
  ),
}

// ─── Nav ───────────────────────────────────────────────────────────────────────

function Nav({ page, go }: { page: Page; go: (p: Page) => void }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const link = (target: Page, label: string) => (
    <button
      key={target}
      onClick={() => { go(target); setOpen(false) }}
      style={{
        background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0',
        fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem',
        fontWeight: page === target ? 600 : 400,
        color: page === target ? '#2D6A4F' : '#1C1C1A',
        borderBottom: page === target ? '1.5px solid #2D6A4F' : '1.5px solid transparent',
        letterSpacing: '0.01em', transition: 'color 0.2s',
      }}
    >
      {label}
    </button>
  )

  const scroll = (id: string) => {
    go('home')
    setOpen(false)
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  const ghostNavBtn = (label: string, id: string) => (
    <button
      key={id}
      onClick={() => scroll(id)}
      style={{
        background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0',
        fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', fontWeight: 400,
        color: '#1C1C1A', letterSpacing: '0.01em', borderBottom: '1.5px solid transparent',
        transition: 'color 0.2s',
      }}
    >
      {label}
    </button>
  )

  return (
    <>
      {/* Bar */}
      <nav style={{
        position: 'fixed', inset: '0 0 auto', zIndex: 200,
        height: 62,
        backgroundColor: scrolled ? 'rgba(250,249,247,0.95)' : '#FAF9F7',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(28,28,26,0.07)' : '1px solid transparent',
        transition: 'background-color 0.35s, border-color 0.35s, backdrop-filter 0.35s',
      }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', height: '100%', padding: '0 clamp(16px,4vw,48px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Wordmark */}
          <button onClick={() => go('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'baseline', gap: 4, padding: 0 }}>
            <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.35rem', fontStyle: 'italic', color: '#1C1C1A', letterSpacing: '-0.01em' }}>Keja</span>
            <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.35rem', color: '#2D6A4F', letterSpacing: '-0.01em' }}>Prints</span>
          </button>

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="nav-links">
            {link('home', 'Home')}
            {link('designs', 'Designs')}
            {ghostNavBtn('Categories', 'categories')}
            {ghostNavBtn('How It Works', 'how-it-works')}
          </div>

          {/* Desktop CTA */}
          <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer"
            className="nav-cta"
            style={{
              display: 'flex', alignItems: 'center', gap: 7,
              backgroundColor: '#25D366', color: '#fff',
              padding: '8px 17px', borderRadius: 6,
              fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 600,
              textDecoration: 'none', letterSpacing: '0.01em',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1DAE55')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#25D366')}
          >
            {I.wa} Order Now
          </a>

          {/* Mobile icons */}
          <div style={{ display: 'none', gap: 10, alignItems: 'center' }} className="nav-mobile">
            <button onClick={() => go('designs')} aria-label="Search" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1C1C1A', padding: 4, display: 'flex' }}>
              {I.search}
            </button>
            <button onClick={() => setOpen(!open)} aria-label="Menu" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1C1C1A', padding: 4, display: 'flex' }}>
              {open ? I.close : I.menu}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position: 'fixed', top: 62, inset: '62px 0 0', zIndex: 199,
          backgroundColor: '#FAF9F7', display: 'flex', flexDirection: 'column',
          padding: '28px clamp(16px,4vw,48px)',
        }} className="nav-drawer">
          {[['home', 'Home'], ['designs', 'Designs']].map(([p, l]) => (
            <button key={p} onClick={() => { go(p as Page); setOpen(false) }} style={{
              background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
              padding: '14px 0', borderBottom: '1px solid rgba(28,28,26,0.07)',
              fontFamily: "'DM Serif Display', serif", fontSize: '1.75rem',
              color: page === p ? '#2D6A4F' : '#1C1C1A',
            }}>{l}</button>
          ))}
          {[['Categories', 'categories'], ['How It Works', 'how-it-works']].map(([l, id]) => (
            <button key={id} onClick={() => scroll(id)} style={{
              background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
              padding: '14px 0', borderBottom: '1px solid rgba(28,28,26,0.07)',
              fontFamily: "'DM Serif Display', serif", fontSize: '1.75rem', color: '#1C1C1A',
            }}>{l}</button>
          ))}
          <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer" style={{
            marginTop: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            backgroundColor: '#25D366', color: '#fff', padding: '14px 24px', borderRadius: 6,
            fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', fontWeight: 700,
            textDecoration: 'none',
          }}>{I.wa} Order on WhatsApp</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-cta { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}
// ─── Watermark overlay ───────────────────────────────────────────────────────────
// Sits on top of a protected image. Doesn't stop a determined screenshot/devtools
// user, but makes a saved copy visibly unusable and deters casual right-click-save.

function Watermark() {
  return (
    <div className="watermark-overlay" aria-hidden="true">
      {Array.from({ length: 12 }).map((_, i) => <span key={i}>Keja Prints</span>)}
    </div>
  )
}

const noSave = {
  draggable: false,
  onContextMenu: (e: { preventDefault: () => void }) => e.preventDefault(),
}
// ─── Poster Card ───────────────────────────────────────────────────────────────

function Card({ p, onClick }: { p: Product; onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      style={{ breakInside: 'avoid', marginBottom: 'clamp(8px,1.5vw,16px)', cursor: 'pointer' }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 4, backgroundColor: '#E8E4DF', aspectRatio: p.ar }}>
        <img
          src={p.imageUrl}
          alt={`${p.name} poster`}
          loading="lazy"
          {...noSave}
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transform: hovered ? 'scale(1.045)' : 'scale(1)',
            transition: 'transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94)',
          }}
        />
        {/* Hover overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(28,28,26,0.28)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s',
        }}>
          <span style={{
            color: '#fff', fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
            borderBottom: '1px solid rgba(255,255,255,0.6)', paddingBottom: 2,
            display: 'flex', alignItems: 'center', gap: 5,
          }}>
            View Design {I.arrowRight}
          </span>
        </div>
      </div>

      {/* Caption */}
      <div style={{ padding: '9px 2px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 6 }}>
          <p style={{ margin: 0, fontFamily: "'DM Sans', sans-serif", fontSize: '0.84rem', fontWeight: 500, color: '#1C1C1A', lineHeight: 1.3 }}>
            {p.name}
          </p>
          <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#A8A49F', whiteSpace: 'nowrap', paddingTop: 1 }}>
            {p.category}
          </span>
        </div>
        <p style={{ margin: '2px 0 0', fontFamily: "'DM Sans', sans-serif", fontSize: '0.79rem', color: '#8A8682', fontWeight: 400 }}>
          From {ksh(500)}
        </p>
      </div>
    </div>
  )
}

// ─── Masonry ──────────────────────────────────────────────────────────────────

function Masonry({ items, onSelect }: { items: Product[]; onSelect: (p: Product) => void }) {
  if (!items.length)
    return (
      <div style={{ textAlign: 'center', padding: '80px 0', color: '#8A8682' }}>
        <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.6rem', margin: '0 0 8px' }}>No designs found</p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem' }}>Try a different search or category.</p>
      </div>
    )
  return (
    <div style={{ columnCount: 4, columnGap: 'clamp(8px,1.5vw,16px)' }} className="masonry">
      {items.map(p => <Card key={p.id} p={p} onClick={() => onSelect(p)} />)}
    </div>
  )
}

// ─── Hero ──────────────────────────────────────────────────────────────────────

function Hero({ onBrowse, onHIW }: { onBrowse: () => void; onHIW: () => void }) {
  // 5-tile mosaic: column 1 tall portrait | col 2 top square + bottom portrait | col 3 tall portrait
  const mosaic = [
    PRODUCTS[0],  // tall portrait → col 1 row-span 2
    PRODUCTS[5],  // landscape/square → col 2 row 1
    PRODUCTS[16], // portrait → col 3 row-span 2
    PRODUCTS[2],  // square → col 2 row 2
  ]

  return (
    <section style={{ paddingTop: 62, display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '94vh', overflow: 'hidden' }} className="hero-section">
      {/* Copy */}
      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: 'clamp(48px,8vw,100px) clamp(24px,5vw,72px)',
      }}>
        <span style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: '0.74rem', fontWeight: 700,
          letterSpacing: '0.14em', textTransform: 'uppercase', color: '#2D6A4F', marginBottom: 22,
        }}>
          Kenyan wall art studio
        </span>

        <h1 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 'clamp(2.6rem,5.5vw,4.8rem)',
          lineHeight: 1.06, color: '#1C1C1A',
          margin: '0 0 26px', letterSpacing: '-0.025em',
        }}>
          Posters That<br />
          <em style={{ color: '#2D6A4F' }}>Make Your</em><br />
          Space Yours.
        </h1>

        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 'clamp(0.95rem,1.5vw,1.08rem)',
          color: '#6B6B67', lineHeight: 1.75,
          maxWidth: 420, margin: '0 0 40px',
        }}>
          Discover stylish posters and wall art designed to bring personality to your space. Choose your design, pick your finish and order directly through WhatsApp.
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button onClick={onBrowse} style={{
            backgroundColor: '#1C1C1A', color: '#FAF9F7',
            border: 'none', cursor: 'pointer', borderRadius: 6,
            padding: '13px 26px', fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.01em',
            display: 'flex', alignItems: 'center', gap: 7,
            transition: 'background-color 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2D6A4F')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1C1C1A')}
          >
            Browse Designs {I.arrowRight}
          </button>
          <button onClick={onHIW} style={{
            backgroundColor: 'transparent', color: '#1C1C1A',
            border: '1.5px solid rgba(28,28,26,0.18)', cursor: 'pointer', borderRadius: 6,
            padding: '12px 22px', fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.9rem', fontWeight: 500,
            transition: 'border-color 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(28,28,26,0.45)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(28,28,26,0.18)')}
          >
            How It Works
          </button>
        </div>

        {/* Stats strip */}
        <div style={{ marginTop: 52, display: 'flex', gap: 36, paddingTop: 28, borderTop: '1px solid rgba(28,28,26,0.08)' }}>
          {[['24+', 'Unique designs'], ['2', 'Finish options'], ['From KSh', '500']].map(([v, l]) => (
            <div key={l}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.5rem', color: '#1C1C1A', lineHeight: 1 }}>{v}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: '#8A8682', marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mosaic */}
      <div style={{ overflow: 'hidden', backgroundColor: '#EDE9E4' }} className="hero-mosaic">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '1fr 1fr', height: '100%', gap: 3 }}>
          {/* col 1, rows 1-2 */}
          <div style={{ gridColumn: '1', gridRow: '1 / 3', overflow: 'hidden', backgroundColor: '#D9D5CF' }}>
            <img src={mosaic[0].imageUrl} alt={mosaic[0].name} {...noSave} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          {/* col 2, row 1 */}
          <div style={{ gridColumn: '2', gridRow: '1', overflow: 'hidden', backgroundColor: '#D9D5CF' }}>
            <img src={mosaic[1].imageUrl} alt={mosaic[1].name} {...noSave} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          {/* col 3, rows 1-2 */}
          <div style={{ gridColumn: '3', gridRow: '1 / 3', overflow: 'hidden', backgroundColor: '#D9D5CF' }}>
            <img src={mosaic[2].imageUrl} alt={mosaic[2].name} {...noSave} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          {/* col 2, row 2 */}
          <div style={{ gridColumn: '2', gridRow: '2', overflow: 'hidden', backgroundColor: '#D9D5CF' }}>
            <img src={mosaic[3].imageUrl} alt={mosaic[3].name} {...noSave} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-section { grid-template-columns: 1fr !important; min-height: auto !important; }
          .hero-mosaic { display: none !important; }
        }
      `}</style>
    </section>
  )
}

// ─── Featured ─────────────────────────────────────────────────────────────────

function Featured({ onSelect, onViewAll }: { onSelect: (p: Product) => void; onViewAll: () => void }) {
  return (
    <section style={{ padding: 'clamp(64px,8vw,108px) clamp(16px,4vw,48px)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: '#1C1C1A', margin: '0 0 6px', letterSpacing: '-0.015em' }}>
              Featured Designs
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', color: '#8A8682', margin: 0, fontStyle: 'italic' }}>
              A few of our favourites.
            </p>
          </div>
          <button onClick={onViewAll} style={{
            background: 'none', border: '1.5px solid rgba(28,28,26,0.15)', cursor: 'pointer',
            borderRadius: 6, padding: '8px 18px',
            fontFamily: "'DM Sans', sans-serif", fontSize: '0.84rem', fontWeight: 500, color: '#1C1C1A',
            display: 'flex', alignItems: 'center', gap: 6, transition: 'border-color 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = '#2D6A4F')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(28,28,26,0.15)')}
          >
            View All {I.arrowRight}
          </button>
        </div>
        <Masonry items={PRODUCTS.slice(0, 8)} onSelect={onSelect} />
      </div>
    </section>
  )
}

// ─── Categories ───────────────────────────────────────────────────────────────

function Categories({ onSelect }: { onSelect: (c: Category) => void }) {
  const cats: Category[] = ['Music', 'Cars', 'Minimal', 'Motivation', 'Kenyan', 'Abstract', 'Lifestyle', 'Sports', 'Anime', 'Movies']

  return (
    <section id="categories" style={{ padding: 'clamp(64px,8vw,108px) clamp(16px,4vw,48px)', backgroundColor: '#F5F3F0' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: '#1C1C1A', margin: '0 0 6px', letterSpacing: '-0.015em' }}>
            Browse by Category
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', color: '#8A8682', margin: 0, fontStyle: 'italic' }}>
            Find your style.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 10 }}>
          {cats.map(cat => {
            const img = CATEGORY_COVERS[cat]
            return (
              <button key={cat} onClick={() => onSelect(cat)} style={{
                position: 'relative', overflow: 'hidden', borderRadius: 4,
                aspectRatio: '3/4', cursor: 'pointer', border: 'none',
                backgroundColor: '#D9D5CF', padding: 0,
              }}
                onMouseEnter={e => { const i = e.currentTarget.querySelector('img') as HTMLImageElement; if (i) i.style.transform = 'scale(1.07)' }}
                onMouseLeave={e => { const i = e.currentTarget.querySelector('img') as HTMLImageElement; if (i) i.style.transform = 'scale(1)' }}
              >
                {img && <img src={img} alt={cat} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.42s cubic-bezier(0.25,0.46,0.45,0.94)' }} />}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(28,28,26,0.75) 0%, rgba(28,28,26,0.0) 55%)',
                  display: 'flex', alignItems: 'flex-end', padding: '16px 14px',
                }}>
                  <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.05rem', color: '#fff', letterSpacing: '-0.01em' }}>
                    {cat}
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── How It Works ─────────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    { n: '01', title: 'Find Your Design', body: "Browse our collection and choose a poster you love. From minimal to bold, there's something for every space." },
    { n: '02', title: 'Choose Your Finish', body: 'Select Framed or Wood Mounted and pick your size. Every price is shown upfront — no surprises.' },
    { n: '03', title: 'Order on WhatsApp', body: "Send us your selection through WhatsApp and we'll take care of the rest. Simple, fast and personal." },
  ]
  return (
    <section id="how-it-works" style={{ padding: 'clamp(64px,8vw,108px) clamp(16px,4vw,48px)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{ marginBottom: 60, maxWidth: 520 }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: '#1C1C1A', margin: '0 0 12px', letterSpacing: '-0.015em' }}>
            How It Works
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', color: '#8A8682', lineHeight: 1.75, margin: 0 }}>
            Ordering from Keja Prints is simple. No accounts, no checkout, no fuss.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(32px,5vw,64px)' }} className="hiw-grid">
          {steps.map(s => (
            <div key={s.n}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '3.5rem', color: 'rgba(45,106,79,0.13)', lineHeight: 1, marginBottom: 24, letterSpacing: '-0.02em' }}>
                {s.n}
              </div>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.3rem', color: '#1C1C1A', margin: '0 0 10px', letterSpacing: '-0.01em' }}>
                {s.title}
              </h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', color: '#8A8682', lineHeight: 1.75, margin: 0 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:640px){.hiw-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section style={{ backgroundColor: '#1C1C1A', padding: 'clamp(64px,8vw,108px) clamp(16px,4vw,48px)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }} className="about-grid">
        <div>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.74rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#2D6A4F', marginBottom: 20, display: 'block' }}>
            Our story
          </span>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2rem,4vw,3.4rem)', color: '#FAF9F7', margin: '0 0 22px', letterSpacing: '-0.02em', lineHeight: 1.08 }}>
            Made for<br /><em>your space.</em>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: 'rgba(250,249,247,0.6)', lineHeight: 1.8, margin: '0 0 32px', maxWidth: 400 }}>
            Keja Prints is a Kenyan creative brand bringing stylish, affordable wall art to your space. From statement pieces to subtle prints, we make it easy to find something that feels like you.
          </p>
          <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            backgroundColor: '#25D366', color: '#fff',
            padding: '12px 22px', borderRadius: 6,
            fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 700,
            textDecoration: 'none',
          }}>
            {I.wa} Chat with us
          </a>
        </div>
        {/* 2×2 grid of posters */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, aspectRatio: '1' }}>
          {PRODUCTS.slice(13, 17).map(p => (
            <div key={p.id} style={{ overflow: 'hidden', borderRadius: 4, backgroundColor: '#2D2D2A' }}>
              <img src={p.imageUrl} alt={p.name} {...noSave} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.82 }} />
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer({ go }: { go: (p: Page) => void }) {
  const scroll = (id: string) => {
    go('home')
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 120)
  }
  return (
    <footer style={{ borderTop: '1px solid rgba(28,28,26,0.07)', padding: 'clamp(48px,6vw,72px) clamp(16px,4vw,48px) 28px' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, marginBottom: 48 }} className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 12 }}>
              <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.4rem', fontStyle: 'italic', color: '#1C1C1A' }}>Keja</span>
              <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.4rem', color: '#2D6A4F' }}>Prints</span>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.87rem', color: '#8A8682', lineHeight: 1.75, maxWidth: 260, margin: '0 0 20px' }}>
              Posters that make your space yours. Premium Kenyan wall art, delivered through WhatsApp.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[{ href: `https://wa.me/${WA}`, icon: I.wa, hc: '#25D366' }, { href: 'https://instagram.com', icon: I.instagram, hc: '#1C1C1A' }].map(({ href, icon, hc }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ color: '#8A8682', textDecoration: 'none', transition: 'color 0.2s', display: 'flex' }}
                  onMouseEnter={e => (e.currentTarget.style.color = hc)}
                  onMouseLeave={e => (e.currentTarget.style.color = '#8A8682')}
                >{icon}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1C1C1A', margin: '0 0 14px' }}>
              Navigate
            </h4>
            {[['Home', 'home'], ['Designs', 'designs']].map(([l, p]) => (
              <button key={p} onClick={() => go(p as Page)} style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0', fontFamily: "'DM Sans', sans-serif", fontSize: '0.87rem', color: '#8A8682', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#1C1C1A')}
                onMouseLeave={e => (e.currentTarget.style.color = '#8A8682')}
              >{l}</button>
            ))}
            {[['Categories', 'categories'], ['How It Works', 'how-it-works']].map(([l, id]) => (
              <button key={id} onClick={() => scroll(id)} style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0', fontFamily: "'DM Sans', sans-serif", fontSize: '0.87rem', color: '#8A8682', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#1C1C1A')}
                onMouseLeave={e => (e.currentTarget.style.color = '#8A8682')}
              >{l}</button>
            ))}
          </div>
          <div>
            <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1C1C1A', margin: '0 0 14px' }}>
              Contact
            </h4>
            {[{ label: 'WhatsApp', href: `https://wa.me/${WA}`, hc: '#25D366' }, { label: 'Instagram', href: 'https://instagram.com', hc: '#1C1C1A' }].map(({ label, href, hc }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontFamily: "'DM Sans', sans-serif", fontSize: '0.87rem', color: '#8A8682', textDecoration: 'none', padding: '4px 0', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = hc)}
                onMouseLeave={e => (e.currentTarget.style.color = '#8A8682')}
              >{label}</a>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(28,28,26,0.07)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.79rem', color: '#A8A49F', margin: 0 }}>
            © 2026 Keja Prints. All rights reserved.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.79rem', color: '#A8A49F', margin: 0, fontStyle: 'italic' }}>
            Nairobi, Kenya
          </p>
        </div>
      </div>
      <style>{`@media(max-width:640px){.footer-grid{grid-template-columns:1fr !important;gap:28px !important;}}`}</style>
    </footer>
  )
}

// ─── Home Page ────────────────────────────────────────────────────────────────

function HomePage({ go, onProduct, onCat }: {
  go: (p: Page) => void
  onProduct: (p: Product) => void
  onCat: (c: Category) => void
}) {
  return (
    <div className="page-enter">
      <Hero
        onBrowse={() => go('designs')}
        onHIW={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
      />
      <Featured onSelect={onProduct} onViewAll={() => go('designs')} />
      <Categories onSelect={onCat} />
      <HowItWorks />
      <About />
    </div>
  )
}

// ─── Designs Page ─────────────────────────────────────────────────────────────

function DesignsPage({ onProduct, initCat = 'All' }: {
  onProduct: (p: Product) => void
  initCat?: Category
}) {
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState<Category>(initCat)

  const results = PRODUCTS.filter(p =>
    (cat === 'All' || p.category === cat) &&
    (query === '' || p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()))
  )

  return (
    <div className="page-enter" style={{ paddingTop: 62 }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: 'clamp(40px,6vw,72px) clamp(16px,4vw,48px) 0' }}>
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2rem,4vw,3.2rem)', color: '#1C1C1A', margin: '0 0 10px', letterSpacing: '-0.02em' }}>
          Explore Our Designs
        </h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', color: '#8A8682', lineHeight: 1.75, maxWidth: 520, margin: '0 0 32px' }}>
          Find something for your bedroom, living room, office, business or wherever you want to add a little personality.
        </p>

        {/* Search */}
        <div style={{ position: 'relative', maxWidth: 360, marginBottom: 20 }}>
          <div style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', color: '#8A8682', pointerEvents: 'none', display: 'flex' }}>{I.search}</div>
          <input
            type="text" placeholder="Search posters..." value={query}
            onChange={e => setQuery(e.target.value)}
            style={{
              width: '100%', padding: '11px 13px 11px 40px',
              border: '1.5px solid rgba(28,28,26,0.13)', borderRadius: 6,
              fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', color: '#1C1C1A',
              backgroundColor: '#FAF9F7', outline: 'none', transition: 'border-color 0.2s',
            }}
            onFocus={e => (e.target.style.borderColor = '#2D6A4F')}
            onBlur={e => (e.target.style.borderColor = 'rgba(28,28,26,0.13)')}
          />
        </div>

        {/* Filter chips */}
        <div style={{ overflowX: 'auto', display: 'flex', gap: 7, paddingBottom: 4, marginBottom: 32 }}
          className="scroll-x-hide">
          {CATEGORIES.map(c => (
            <button key={c} onClick={() => setCat(c)} style={{
              flexShrink: 0, whiteSpace: 'nowrap',
              border: cat === c ? '1.5px solid #2D6A4F' : '1.5px solid rgba(28,28,26,0.13)',
              borderRadius: 100, padding: '7px 15px',
              fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem',
              fontWeight: cat === c ? 600 : 400,
              color: cat === c ? '#2D6A4F' : '#8A8682',
              backgroundColor: cat === c ? 'rgba(45,106,79,0.07)' : 'transparent',
              cursor: 'pointer', transition: 'all 0.18s',
            }}>
              {c}
            </button>
          ))}
        </div>

        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.79rem', color: '#A8A49F', marginBottom: 20 }}>
          {results.length} {results.length === 1 ? 'design' : 'designs'}{cat !== 'All' ? ` in ${cat}` : ''}
        </p>
      </div>

      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px,4vw,48px) 80px' }}>
        <Masonry items={results} onSelect={onProduct} />
      </div>
    </div>
  )
}

// ─── Product Page ─────────────────────────────────────────────────────────────

function ProductPage({ p, onBack }: { p: Product; onBack: () => void }) {
  const [finish, setFinish] = useState<Finish>('framed')
  const [size, setSize] = useState<SizeKey>('A4')

  const p2 = pricing(finish)
  const sizes = Object.keys(p2) as SizeKey[]

  useEffect(() => {
    if (!p2[size]) setSize(sizes[0])
  }, [finish])

  const price = p2[size]
  const orderLink = waOrder(p, finish, size)
  const qLink = waQuestion(p)

  const finishOpts: { key: Finish; label: string; icon: React.ReactNode; sub: string; desc: string }[] = [
    { key: 'framed', label: 'Framed', icon: I.frame, sub: 'Classic & timeless', desc: 'Your print is placed inside a quality frame, ready to hang.' },
    { key: 'wood', label: 'Wood Mounted', icon: I.wood, sub: 'Modern & minimal', desc: 'Your design is printed directly onto a wooden board.' },
  ]

  return (
    <div className="page-enter" style={{ paddingTop: 62, paddingBottom: 100 }}>
      {/* Breadcrumb */}
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '20px clamp(16px,4vw,48px) 0' }}>
        <button onClick={onBack} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: "'DM Sans', sans-serif", fontSize: '0.84rem', color: '#8A8682',
          display: 'flex', alignItems: 'center', gap: 5, padding: 0, transition: 'color 0.2s',
        }}
          onMouseEnter={e => (e.currentTarget.style.color = '#1C1C1A')}
          onMouseLeave={e => (e.currentTarget.style.color = '#8A8682')}
        >
          {I.arrowLeft} Back to Designs
        </button>
      </div>

      {/* Layout */}
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '28px clamp(16px,4vw,48px) 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(28px,5vw,72px)', alignItems: 'start' }}
        className="product-grid">
        {/* Left — sticky image */}
        <div style={{ position: 'sticky', top: 80 }}>
          <div style={{
            position: 'relative', borderRadius: 6, overflow: 'hidden', backgroundColor: '#E8E4DF',
            aspectRatio: p.ar,
          }}>
            <img src={p.imageUrl.replace('w=700', 'w=900')} alt={`${p.name} poster`}
              {...noSave}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <Watermark />
          </div>
          {/* Category tag */}
          <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
            <span style={{
              padding: '4px 12px', borderRadius: 100, backgroundColor: '#EDE9E4',
              fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: '#8A8682', fontWeight: 600, letterSpacing: '0.04em',
            }}>
              {p.category}
            </span>
          </div>
        </div>

        {/* Right — config */}
        <div>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.8rem,3vw,2.8rem)', color: '#1C1C1A', margin: '0 0 10px', letterSpacing: '-0.02em' }}>
            {p.name}
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.97rem', color: '#8A8682', lineHeight: 1.78, margin: '0 0 40px' }}>
            {p.description}
          </p>

          {/* Finish */}
          <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1C1C1A', margin: '0 0 14px' }}>
            Choose Your Finish
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 36 }}>
            {finishOpts.map(f => {
              const sel = finish === f.key
              return (
                <button key={f.key} onClick={() => setFinish(f.key)} style={{
                  border: sel ? '2px solid #2D6A4F' : '1.5px solid rgba(28,28,26,0.1)',
                  borderRadius: 8, padding: '16px', backgroundColor: sel ? 'rgba(45,106,79,0.05)' : '#FAF9F7',
                  cursor: 'pointer', textAlign: 'left', transition: 'all 0.18s', position: 'relative',
                }}>
                  {sel && (
                    <div style={{
                      position: 'absolute', top: 10, right: 10,
                      width: 18, height: 18, borderRadius: '50%',
                      backgroundColor: '#2D6A4F', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#fff',
                    }}>{I.check}</div>
                  )}
                  <div style={{ color: sel ? '#2D6A4F' : '#8A8682', marginBottom: 10 }}>{f.icon}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.88rem', fontWeight: 700, color: '#1C1C1A', marginBottom: 3 }}>{f.label}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.76rem', color: '#2D6A4F', fontWeight: 600, marginBottom: 5 }}>{f.sub}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', color: '#8A8682', lineHeight: 1.5 }}>{f.desc}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.76rem', color: '#8A8682', marginTop: 8 }}>
                    From {ksh(cheapest(f.key))}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Size */}
          <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1C1C1A', margin: '0 0 14px' }}>
            Select Size
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 }}>
            {sizes.map(s => {
              const sel = size === s
              return (
                <button key={s} onClick={() => setSize(s)} style={{
                  border: sel ? '2px solid #2D6A4F' : '1.5px solid rgba(28,28,26,0.1)',
                  borderRadius: 6, padding: '10px 14px', minWidth: 68,
                  backgroundColor: sel ? 'rgba(45,106,79,0.07)' : '#FAF9F7',
                  cursor: 'pointer', transition: 'all 0.18s', textAlign: 'center',
                }}>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: sel ? 700 : 500, color: sel ? '#2D6A4F' : '#1C1C1A' }}>{s}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.73rem', color: '#8A8682', marginTop: 1 }}>{ksh(p2[s]!)}</div>
                </button>
              )
            })}
          </div>

          {/* Price summary */}
          <div style={{ backgroundColor: '#F5F3F0', border: '1px solid rgba(28,28,26,0.07)', borderRadius: 8, padding: '18px 22px', marginBottom: 20 }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.71rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8A8682', marginBottom: 5 }}>
              Your Selection
            </div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.88rem', color: '#8A8682', marginBottom: 10 }}>
              {finish === 'framed' ? 'Framed' : 'Wood Mounted'} · {size}
            </div>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '2.1rem', color: '#1C1C1A', letterSpacing: '-0.02em', lineHeight: 1 }}>
              {price ? ksh(price) : '—'}
            </div>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a href={orderLink} target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9,
              backgroundColor: '#25D366', color: '#fff',
              padding: '15px 24px', borderRadius: 6,
              fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', fontWeight: 700,
              textDecoration: 'none', transition: 'background-color 0.2s, transform 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1DAE55'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#25D366'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {I.wa} Order on WhatsApp
            </a>
            <a href={qLink} target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1.5px solid rgba(28,28,26,0.14)', color: '#1C1C1A',
              padding: '13px 24px', borderRadius: 6,
              fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 500,
              textDecoration: 'none', transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(28,28,26,0.4)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(28,28,26,0.14)')}
            >
              Ask Us a Question
            </a>
          </div>

          {/* Which finish guide */}
          <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(28,28,26,0.07)' }}>
            <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.15rem', color: '#1C1C1A', margin: '0 0 16px', letterSpacing: '-0.01em' }}>
              Which finish is right for you?
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {[
                { icon: I.frame, title: 'Framed', sub: 'Classic & timeless', body: 'Traditional framed look. Easy to hang and suits any interior.' },
                { icon: I.wood, title: 'Wood Mounted', sub: 'Modern & minimal', body: 'Printed directly onto wood. Clean gallery feel, no frame needed.' },
              ].map(item => (
                <div key={item.title} style={{ padding: '14px', backgroundColor: '#F5F3F0', borderRadius: 8 }}>
                  <div style={{ color: '#2D6A4F', marginBottom: 8 }}>{item.icon}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.84rem', fontWeight: 700, color: '#1C1C1A', marginBottom: 2 }}>{item.title}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.73rem', color: '#2D6A4F', fontWeight: 600, marginBottom: 5 }}>{item.sub}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.77rem', color: '#8A8682', lineHeight: 1.6 }}>{item.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky bar */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 150,
        backgroundColor: 'rgba(250,249,247,0.97)', backdropFilter: 'blur(14px)',
        borderTop: '1px solid rgba(28,28,26,0.09)',
        padding: '12px 16px 18px',
        display: 'none', gap: 10, alignItems: 'center',
      }} className="mobile-sticky">
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: '#8A8682', marginBottom: 1 }}>
            {finish === 'framed' ? 'Framed' : 'Wood Mounted'} · {size}
          </div>
          <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.25rem', color: '#1C1C1A' }}>
            {price ? ksh(price) : '—'}
          </div>
        </div>
        <a href={orderLink} target="_blank" rel="noopener noreferrer" style={{
          display: 'flex', alignItems: 'center', gap: 7,
          backgroundColor: '#25D366', color: '#fff',
          padding: '12px 18px', borderRadius: 6,
          fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 700,
          textDecoration: 'none',
        }}>
          {I.wa} Order
        </a>
      </div>

      <style>{`
        @media(max-width:768px){
          .product-grid{grid-template-columns:1fr !important;}
          .mobile-sticky{display:flex !important;}
        }
      `}</style>
    </div>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const [product, setProduct] = useState<Product | null>(null)
  const [initCat, setInitCat] = useState<Category>('All')

  const go = (p: Page) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openProduct = (p: Product) => {
    setProduct(p)
    go('product')
  }

  const openCat = (c: Category) => {
    setInitCat(c)
    go('designs')
  }

  return (
    <>
      <Nav page={page} go={go} />

      <main>
        {page === 'home' && <HomePage go={go} onProduct={openProduct} onCat={openCat} />}
        {page === 'designs' && <DesignsPage key={initCat} onProduct={openProduct} initCat={initCat} />}
        {page === 'product' && product && <ProductPage p={product} onBack={() => go('designs')} />}
      </main>

      {page !== 'product' && <Footer go={go} />}

      <style>{`
        @media(max-width:640px){
          .masonry{column-count:2 !important;}
        }
        @media(min-width:641px) and (max-width:1024px){
          .masonry{column-count:3 !important;}
        }
      `}</style>
    </>
  )
}
