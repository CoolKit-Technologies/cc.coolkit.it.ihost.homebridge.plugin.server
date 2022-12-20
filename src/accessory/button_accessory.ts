import { base_accessory } from "./base_accessory";
import { HomebridgePlatform } from '../HomebridgePlatform'
import { PlatformAccessory, Categories, Service } from 'homebridge'
import { IDevice } from '../ts/interface/IDevice'

export class button_accessory extends base_accessory {
	public state: { key: number } = { key: this.platform.Characteristic.ProgrammableSwitchEvent.SINGLE_PRESS }

	service: Service | undefined

	constructor(platform: HomebridgePlatform, accessory: PlatformAccessory | undefined, device: IDevice) {
		super(platform, accessory, Categories.PROGRAMMABLE_SWITCH, device)
	}

	mountService(): void {
		this.service = this.accessory?.getService(this.platform.Service.StatelessProgrammableSwitch) || this.accessory?.addService(this.platform.Service.StatelessProgrammableSwitch);
		this.service?.getCharacteristic(this.platform.Characteristic.ProgrammableSwitchEvent)
			.setProps({
				validValues: [0, 1, 2]
			})
			.onGet(() => {
				console.log('trigger onGet');

				return this.state.key
			})
	}

	updateValue(params: any): void {
		console.log("🚀 ~ file: button_accessory.ts:22 ~ button_accessory ~ updateValue ~ params", params)
		const { key } = params as { key: number }
		if (typeof key === 'number') {
			// this.state.key = key
			this.service?.updateCharacteristic(this.platform.Characteristic.ProgrammableSwitchEvent, key)
			// this.service?.getCharacteristic(this.platform.Characteristic.ProgrammableSwitchEvent).updateValue(key)
		}
	}
}