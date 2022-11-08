export interface BandMember {
  name: string
}

export interface Band {
  id: number
  name: string
  genreCode: string
  year: number
  country: string
  members: BandMember[]
}

export interface Genre {
  code: string
  name: string
}

export interface Album {
  id: number
  bandId: string
  name: string
  year: number
}
