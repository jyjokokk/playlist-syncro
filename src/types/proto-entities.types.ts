export interface Identifiable {
  id: string
}

export interface InstantiatedEntity {
  id: string
  createdAt: Date
  updatedAt: Date
}

export type EntityAccessor<T> = (obj: T) => Required<T & InstantiatedEntity>

export type ReturnedEntity<T> = ReturnType<EntityAccessor<T>>

export abstract class User implements Identifiable {
  id: string
  name: string
  role: string
}
