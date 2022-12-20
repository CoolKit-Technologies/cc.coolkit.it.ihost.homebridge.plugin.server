import { base_accessory } from "./base_accessory";
import { HomebridgePlatform } from '../HomebridgePlatform'
import { PlatformAccessory, Categories, CharacteristicValue, Service } from 'homebridge'
import { IDevice } from '../ts/interface/IDevice'

export class motion_accessory extends base_accessory {
	public state: {
		motion: boolean
	} = {
			motion: false
		}
	service: Service | undefined

	constructor(platform: HomebridgePlatform, accessory: PlatformAccessory | undefined, device: IDevice) {
		super(platform, accessory, Categories.SENSOR, device)
	}

	mountService(): void {
		this.service = this.accessory?.getService(this.platform.Service.MotionSensor) || this.accessory?.addService(this.platform.Service.MotionSensor);
		this.service?.getCharacteristic(this.platform.Characteristic.MotionDetected)
			.onGet(() => this.state.motion)
			.onSet((value: CharacteristicValue) => {
				this.state.motion = value as boolean;
				this.platform.log.info('--->', value)
			})
	}
	updateValue(params: any): void {

	}
}