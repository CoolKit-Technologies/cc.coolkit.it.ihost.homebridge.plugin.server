import { base_accessory } from './base_accessory'
import { HomebridgePlatform } from '../HomebridgePlatform'
import { PlatformAccessory, Categories, CharacteristicValue, Service } from 'homebridge'
import { IDevice } from '../ts/interface/IDevice'

export class switch_accessory extends base_accessory {
	public state: {
		switch: boolean,
		switch1: boolean
	} = {
			switch: false,
			switch1: false
		}
	service: Service | undefined
	service1: Service | undefined


	constructor(platform: HomebridgePlatform, accessory: PlatformAccessory | undefined, device: IDevice) {
		super(platform, accessory, Categories.SWITCH, device)
	}
	mountService(): void {
		this.service = this.accessory!.getService(this.platform.Service.Switch) || this.accessory!.addService(this.platform.Service.Switch);
		this.service.getCharacteristic(this.platform.Characteristic.On)
			.onGet(() => this.state.switch)
			.onSet((value: CharacteristicValue) => {
				this.state.switch = value as boolean;
				this.platform.log.info('--->', value)
			})
		this.service1 = this.accessory?.getService('switch 1') || this.accessory!.addService(this.platform.Service.Switch, 'switch 1', 'switch 1');
		this.service1.getCharacteristic(this.platform.Characteristic.On)
			.onGet(() => this.state.switch1)
			.onSet((value: CharacteristicValue) => {
				this.state.switch1 = value as boolean;
				this.platform.log.info('--->', value)
			})

	}
	updateValue(params: { switch: 'on' | 'off' }): void {
		this.platform.log.info('switch_accessory updateValue', this.state, params)
	}
}