import { ParsedQuery } from 'query-string'

export interface OgMeta {
  type: string
  title: string
  url: string
  description: string
  image: string
  updatedTime: number | string
}

export interface FacebookMeta {
  agentName: string
  availability: string
  condition: string
  priceAmount: string
  priceCurrency: string
  tripId: number | string
}

export interface TwitterMeta {
  card: string
  site: string
  title: string
  description: string
  image: string
  label1: string
  data1: string
  label2: string
  data2: string
}

export interface MetaProps {
  pageTitle?: string
  pageDescription?: string
  appId?: string
  robots?: string
  author?: string
  og?: Partial<OgMeta>
  fb?: {
    pages?: boolean
  } & Partial<FacebookMeta>
  appLink?: {
    url?: string
    query?: ParsedQuery
    web?: string
  }
  twitter?: Partial<TwitterMeta>
  structuredData?: string[]
  content?: {
    title?: string
    keywords?: string
    author?: string
    canonical?: string
    alternate?: string
  }
}
