import { ConfigLiterals } from '../utils/types/config.interface'

export interface ConfigService {
  getConfig: () => ConfigLiterals
}
