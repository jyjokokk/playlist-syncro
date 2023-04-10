export interface Identifiable {
  id: string
}

export interface InstantiatedEntity {
  id: string
  createdAt: Date
  updatedAt: Date
}

export type EntityAccessor<T> = (obj: T) => Required<T | InstantiatedEntity>
