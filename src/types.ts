export type DemoName = 'air-quality' | 'which-content-is-real' // Add new demo labels here

export type Demo = {
  slug: DemoName
  thumbnail: string
  title: string
  description: string
  url: string
}

export const demos = [
  {
    slug: 'air-quality',
    title: 'Air Quality in Brussels',
    description: 'Citizen Engagement',
    url: 'https://demo-air-quality.netlify.app/',
    thumbnail: '/thumbnails/air-quality.png',
  },
  {
    slug: 'which-content-is-real',
    title: 'Which Content is Real?',
    description: 'AI Education',
    url: 'https://which-content-is-real.netlify.app',
    thumbnail: '/thumbnails/which-content-is-real.png',
  },
] as const as Demo[]
