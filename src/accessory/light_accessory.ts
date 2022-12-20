import { base_accessory } from "./base_accessory";
import { HomebridgePlatform } from '../HomebridgePlatform'
import { PlatformAccessory, Categories, CharacteristicValue, Service } from 'homebridge'
import { IDevice } from '../ts/interface/IDevice'

export class light_accessory extends base_accessory {
	public state: {
		switch: boolean,
		brightness: number,
		colorTemperature: number
	} = {
			switch: false,
			brightness: 1,
			colorTemperature: 50
		}

	service: Service | undefined

	constructor(platform: HomebridgePlatform, accessory: PlatformAccessory | undefined, device: IDevice) {
		super(platform, accessory, Categories.LIGHTBULB, device)
	}
	mountService(): void {
		this.service = this.accessory!.getService(this.platform.Service.Lightbulb) || this.accessory!.addService(this.platform.Service.Lightbulb);
		this.service.getCharacteristic(this.platform.Characteristic.On)
			.onGet(() => this.state.switch)
			.onSet((value: CharacteristicValue) => {
				this.state.switch = value as boolean;
				this.platform.log.info('--->', value)
			})
		this.service.getCharacteristic(this.platform.Characteristic.Brightness)
			.onGet(() => this.state.brightness)
			.onSet((value: CharacteristicValue) => {
				this.state.brightness = value as number;
				this.platform.log.info('--->', value)
			})
		this.service.getCharacteristic(this.platform.Characteristic.ColorTemperature)
			.setProps({
				minValue: 0,
				maxValue: 100
			})
			.onGet(() => this.state.colorTemperature)
			.onSet((value: CharacteristicValue) => {
				this.state.brightness = value as number;
				this.platform.log.info('--->', value)
			})
	}
	updateValue(params: any): void {

	}
}