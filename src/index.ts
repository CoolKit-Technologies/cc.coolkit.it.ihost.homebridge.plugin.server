import { API } from 'homebridge';

import { PLATFORM_NAME } from './config/platformConfig';
import { HomebridgePlatform } from './HomebridgePlatform';

export = (api: API) => {
	api.registerPlatform(PLATFORM_NAME, HomebridgePlatform)
}