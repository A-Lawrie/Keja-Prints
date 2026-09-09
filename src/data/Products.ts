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
    category: 'Minimal',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867327/Artwork-10.jpg',
    ar: '',
    description: 'Warm tones and flowing forms that capture the fleeting beauty of late afternoon light. Pairs beautifully with natural materials.',
  },
  {
    id: 'sunny-horizon-2',
    name: 'Sunny Horizon 2',
    category: 'Minimal',
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
    id: 'make-art-your-life',
    name: 'Make Art Your Life',
    category: 'Lifestyle',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867329/Artwork-13.jpg',
    ar: '',
    description: 'Difficult roads lead to beautiful destinations. A clean typographic piece for your workspace or home office.',
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
    id: 'spinning-record',
    name: 'Spinning Record',
    category: 'Music',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867326/Artwork-7.jpg',
    ar: '5/7',
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
    id: 'stay-hungry',
    name: 'Stay Hungry',
    category: 'Motivation',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867326/Artwork-3.jpg',
    ar: '10/16',
    description: 'Simple words, powerful impact. A typographic piece that reminds you what matters every single day.',
  },
  {
    id: 'hwbt-porsche-floral',
    name: 'HWBT Floral Porsche',
    category: 'Cars',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788866556/hwbt-floral.png',
    ar: '2/3',
    description: 'Rosso Corsa. The colour of passion, performance and pure Italian engineering.',
  },
  {
    id: 'after-hours',
    name: 'After Hours',
    category: 'Music',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867329/Artwork-15.jpg',
    ar: '1/2',
    description: 'A curated collage of iconic band art and album covers. For music rooms, studios and creative spaces.',
  },
  {
    id: 'samurai',
    name: 'Samurai',
    category: 'Anime',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867334/Artwork-28.jpg',
    ar: '3/4',
    description: 'Two frames, one story. Minimal wall art that creates a gallery feel without the clutter.',
  },
  {
    id: 'fuck-is-a-speed-limit',
    name: 'Fuck is a Speed Limit',
    category: 'Cars',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867453/What_the_fuck_is_a_speed_lmit.png',
    ar: '7/9',
    description: 'A sweeping aerial perspective of Nairobi — rooftops, roads and the city stretching endlessly forward.',
  },
  {
    id: 'peaky-blinders',
    name: 'Peaky Blinders',
    category: 'Movies',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867442/Peaky_Blinders.png',
    ar: '3/4',
    description: 'Creative space, creative mind. An intimate look at the artist\'s world — boards, art and culture.',
  },
  {
    id: 'bmw-e30',
    name: 'BMW E30',
    category: 'Cars',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867333/Artwork-27.jpg',
    ar: '14/19',
    description: 'Light trails and open roads. A long-exposure shot that turns an ordinary road into something cinematic.',
  },
  {
    id: 'ninja-500-stats',
    name: 'Ninja 500 Stats',
    category: 'Cars',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867439/Kawasaki_Stats.png',
    ar: '4/5',
    description: 'Bold, graphic and direct. A typographic piece that commands attention and inspires action.',
  },
  {
    id: 'lulu',
    name: 'Lulu',
    category: 'Sports',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867430/lulu.png',
    ar: '9/16',
    description: 'Loud colours, iconic imagery. A bold music poster for anyone who lives and breathes rock culture.',
  },
  {
    id: 'evolution-of-music',
    name: 'Evolution of Music',
    category: 'Abstract',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867328/Artwork-8.jpg',
    ar: '3/4',
    description: 'Power in still form. A dramatic close-up that makes any room feel like a paddock.',
  },
  {
    id: 'one-day',
    name: 'One Day',
    category: 'Motivation',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867422/ONE_DAY.png',
    ar: '3/4',
    description: 'High-rise Nairobi, captured with pride. A vertical portrait of the city\'s boldest skyline.',
  },
  {
    id: 'man-u',
    name: 'Team Kubwa',
    category: 'Sports',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867410/Manchester-United.jpg',
    ar: '3/4',
    description: 'Still life with purpose. A plant, a frame, a moment of calm — exactly what your living room needs.',
  },
  {
    id: 'lookism',
    name: 'Lookism',
    category: 'Anime',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867405/lookism2_Original.jpg',
    ar: '3/4',
    description: 'The art of display. Black and white prints on marble — a refined, curated gallery wall look.',
  },
  {
    id: 'ninja-500',
    name: 'Ninja 500',
    category: 'Cars',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867403/KAWASAKI.png',
    ar: '3/4',
    description: 'Explosive energy in red, blue and yellow. A statement piece for anyone who loves bold colour.',
  },
  {
    id: 'create',
    name: 'Create',
    category: 'Lifestyle',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867329/Artwork-14.jpg',
    ar: '3/4',
    description: 'Power in still form. A dramatic close-up that makes any room feel like a paddock.',
  },
  {
    id: 'hwbt-gtr',
    name: 'HWBT GTR',
    category: 'Cars',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867366/HWBT-HTR.jpg',
    ar: '3/4',
    description: 'Street art meets anime culture. A bold graffiti-style portrait for fans of the genre.',
  },
  {
    id: 'last-true-m5',
    name: 'Last True M5',
    category: 'Cars',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867354/F90_M5.png',
    ar: '2/3',
    description: 'The hoop, the light, the moment. A dramatic basketball shot that belongs on every sports fan\'s wall.',
  },
  {
    id: 'gnx',
    name: 'GNX',
    category: 'Music',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867352/GNX.png',
    ar: '3/4',
    description: 'Classic cinema energy. For movie lovers who want their walls to tell a story.',
  },
  {
    id: 'day-one',
    name: 'Day One',
    category: 'Motivation',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867352/DAY_ONE.png',
    ar: '3/4',
    description: 'Classic cinema energy. For movie lovers who want their walls to tell a story.',
  },
  {
    id: 'whoopi-goldberg',
    name: 'Whoopi Goldberg',
    category: 'Movies',
    imageUrl: 'https://res.cloudinary.com/zfgt2fon/image/upload/v1788867334/Artwork-25.jpg',
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