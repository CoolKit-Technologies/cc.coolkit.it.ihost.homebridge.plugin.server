import { base_accessory } from "./base_accessory";
import { HomebridgePlatform } from '../HomebridgePlatform'
import { PlatformAccessory, Categories, CharacteristicValue, Service } from 'homebridge'
import { IDevice } from '../ts/interface/IDevice'

export class door_accessory extends base_accessory {
	public state: {
		switch: boolean
		battery: number
	} = {
			switch: false,
			battery: 30
		}
	service: Service | undefined
	batteryService: Service | undefined

	constructor(platform: HomebridgePlatform, accessory: PlatformAccessory | undefined, device: IDevice) {
		super(platform, accessory, Categories.SENSOR, device)
	}

	mountService(): void {
		this.service = this.accessory?.getService(this.platform.Service.ContactSensor) || this.accessory?.addService(this.platform.Service.ContactSensor);
		this.service?.getCharacteristic(this.platform.Characteristic.ContactSensorState)
			.onGet(() => this.state.switch)
			.onSet((value: CharacteristicValue) => {
				this.state.switch = value as boolean;
				this.platform.log.info('--->', value)
			})

		this.batteryService = this.accessory?.getService(this.platform.Service.Battery) || this.accessory?.addService(this.platform.Service.Battery);
		this.batteryService?.getCharacteristic(this.platform.Characteristic.StatusLowBattery)
			.onGet(() => this.state.battery < 20 ? 1 : 0)

		this.batteryService?.getCharacteristic(this.platform.Characteristic.BatteryLevel)
			.onGet(() => this.state.battery)
			.onSet((value: CharacteristicValue) => {
				this.state.battery = value as number;
				this.platform.log.info('--->', value)
			})
	}
	updateValue(params: any): void {
		const { switch: state } = params as { switch: boolean }
			this.service?.updateCharacteristic(this.platform.Characteristic.ContactSensorState, state)
			// this.state.switch = state
	}
}