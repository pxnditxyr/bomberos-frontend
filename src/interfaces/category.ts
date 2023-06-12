import { IArticle } from '.'

export interface ICategory {
  id?: string
  name: string
  description: string
  user: string
  article?: IArticle[]
}
