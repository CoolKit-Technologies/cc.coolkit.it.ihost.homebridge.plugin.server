import { base_accessory } from "./base_accessory";
import { HomebridgePlatform } from '../HomebridgePlatform'
import { PlatformAccessory, Categories, CharacteristicValue, Service, HAPStatus } from 'homebridge'
import { IDevice } from '../ts/interface/IDevice'

export class outlet_accessory extends base_accessory {
	public state: {
		switch: boolean,
		online: boolean
	} = {
			switch: false,
			online: false
		}
	service: Service | undefined

	constructor(platform: HomebridgePlatform, accessory: PlatformAccessory | undefined, device: IDevice) {
		super(platform, accessory, Categories.OUTLET, device)
	}

	mountService(): void {
		this.service = this.accessory!.getService(this.platform.Service.Outlet) || this.accessory!.addService(this.platform.Service.Outlet);
		this.service.getCharacteristic(this.platform.Characteristic.On)
			.onGet(() => {
				if (!this.state.online) {
					throw new this.platform.api.hap.HapStatusError(HAPStatus.SERVICE_COMMUNICATION_FAILURE)
				}
				return this.state.switch
			})
			.onSet((value: CharacteristicValue) => {
				this.state.switch = value as boolean;
				this.platform.log.info('--->', value)
			})
	}
	updateValue(params: any): void {
		console.log("🚀 ~ file: outlet_accessory.ts:35 ~ outlet_accessory ~ updateValue ~ params", params)
		const { online } = params as { online: boolean }
		this.state.online = online
	}
}