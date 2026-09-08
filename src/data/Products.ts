export type Category =
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

export interface Product {
  id: string
  name: string
  category: Category
  imageUrl: string
  ar: string
  description: string
}

export const PRODUCTS: Product[] = [
  {
    id: '+254',
    name: '+254',
    category: 'Kenyan',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867333/Artwork-12.jpg',
    ar: '1/1.414',
    description: 'A minimal statement piece designed to add calm and intention to any room. Clean geometry that speaks without shouting.',
  },
  {
    id: 'sunny-horizon',
    name: 'Sunny Horizon',
    category: 'Abstract',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867327/Artwork-10.jpg',
    ar: '',
    description: 'Warm tones and flowing forms that capture the fleeting beauty of late afternoon light. Pairs beautifully with natural materials.',
  },
  {
    id: 'sunny-horizon-2',
    name: 'Sunny Horizon 2',
    category: 'Abstract',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867328/Artwork-11.jpg',
    ar: '',
    description: 'Soft and elegant. A single bloom in monochrome — perfect for bedrooms, bathrooms or quiet reading nooks.',
  },
  {
    id: 'hurry-up-tomorrow',
    name: 'Hurry Up Tomorrow',
    category: 'Music',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867330/Artwork-17.jpg',
    ar: '',
    description: 'The city that never sleeps. A powerful urban portrait of Nairobi\'s skyline for those who love where they come from.',
  },
  {
    id: 'deserve-it-all',
    name: 'I Deserve it All',
    category: 'Motivation',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867407/I_deserve_it_all.png',
    ar: '',
    description: 'Difficult roads lead to beautiful destinations. A clean typographic piece for your workspace or home office.',
  },
  {
    id: 'vinyl-days',
    name: 'Vinyl Days',
    category: 'Music',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867326/Artwork-7.jpg',
    ar: '5/4',
    description: 'A love letter to analogue. Rich textures, warm colours and the feeling of dropping a needle on a record.',
  },
  {
    id: 'nissan-gtr',
    name: 'Nissan GTR',
    category: 'Cars',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867361/gtr.jpg',
    ar: '3/4',
    description: 'Power in still form. A dramatic close-up that makes any room feel like a paddock.',
  },
  {
    id: 'blend-loop',
    name: 'Blend',
    category: 'Abstract',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867326/Artwork-6.jpg',
    ar: '',
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

export const CATEGORIES: Category[] = [
  'All', 'Abstract', 'Music', 'Motivation', 'Minimal', 'Cars',
  'Anime', 'Movies', 'Sports', 'Lifestyle', 'Business', 'Typography', 'Kenyan',
]

export const CATEGORY_COVERS: Partial<Record<Category, string>> = {
  Music: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867330/Artwork-17.jpg',
  Cars: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867333/Artwork-27.jpg',
  Minimal: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867333/Artwork-26.1.jpg',
  Motivation: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867407/I_deserve_it_all.png',
  Kenyan: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867333/Artwork-12.jpg',
  Abstract: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867328/Artwork-8.jpg',
  Lifestyle: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788866426/god_s_plan.png',
  Sports: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867430/lulu.png',
  Anime: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867405/lookism2_Original.jpg',
  Movies: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867442/Peaky_Blinders.png',
}