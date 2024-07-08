/**
 * Retrieves access token from local storage or creates as new one.
 *
 * @ToDo Maybe write whole access logic to a proper service and class?
 */

import configService from '../config/config.service'

export function getAccessToken() {
  return configService.getConfig().CLIENT_ID
}
