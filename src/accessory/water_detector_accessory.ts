import { base_accessory } from "./base_accessory";
import { HomebridgePlatform } from '../HomebridgePlatform'
import { PlatformAccessory, Categories, CharacteristicValue, Service } from 'homebridge'
import { IDevice } from '../ts/interface/IDevice'

export class water_detector_accessory extends base_accessory {
	public state: {
		water: boolean
	} = {
			water: false
		}

	service: Service | undefined

	constructor(platform: HomebridgePlatform, accessory: PlatformAccessory | undefined, device: IDevice) {
		super(platform, accessory, Categories.SENSOR, device)
	}
	mountService(): void {
		this.service = this.accessory?.getService(this.platform.Service.LeakSensor) || this.accessory?.addService(this.platform.Service.LeakSensor);
		this.service?.getCharacteristic(this.platform.Characteristic.LeakDetected)
			.onGet(() => this.state.water)
			.onSet((value: CharacteristicValue) => {
				this.state.water = value as boolean;
				this.platform.log.info('--->', value)
			})
	}
	updateValue(params: any): void {

	}
}