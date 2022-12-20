import { base_accessory } from "./base_accessory";
import { HomebridgePlatform } from '../HomebridgePlatform'
import { PlatformAccessory, Categories, CharacteristicValue, Service } from 'homebridge'
import { IDevice } from '../ts/interface/IDevice'

export class curtain_accessory extends base_accessory {
	public state: {
		percent: number,
		positionState: number
	} = {
			percent: 20,
			positionState: 2
		}
	service: Service | undefined
	constructor(platform: HomebridgePlatform, accessory: PlatformAccessory | undefined, device: IDevice) {
		super(platform, accessory, Categories.WINDOW_COVERING, device)
	}

	mountService(): void {
		this.service = this.accessory?.getService(this.platform.Service.WindowCovering) || this.accessory?.addService(this.platform.Service.WindowCovering);
		this.service?.getCharacteristic(this.platform.Characteristic.CurrentPosition)
			.onGet(() => this.state.percent)
		this.service?.getCharacteristic(this.platform.Characteristic.PositionState)
			.onGet(() => this.state.positionState)
		this.service?.getCharacteristic(this.platform.Characteristic.TargetPosition)
			.onGet(() => this.state.percent)
			.onSet((value: CharacteristicValue) => {
				this.state.percent = value as number;
				this.platform.log.info('--->', value)
			})
	}
}