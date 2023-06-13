export interface ICall {
  id?: string
  affectedName: string
  callAddress: string
  description: string
  affectedPhone: number
  users: string[] | string
  station: string
}
