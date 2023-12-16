import { Config } from '../interfaces/config.interface'
import { Store } from './store.class'

class CentralStore extends Store {
  protected readonly config: Config

  save(): void {
    console.log('save')
  }

  getAll(): string {
    console.log('getAll')
    return 'all data'
  }

  connect(): void {
    console.log(this.config.LOCAL_DATABASE_PATH)
    console.log('connect central store')
  }
}

export default CentralStore
