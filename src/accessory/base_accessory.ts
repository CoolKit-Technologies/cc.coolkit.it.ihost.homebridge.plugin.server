import { Categories, PlatformAccessory } from 'homebridge'
import { HomebridgePlatform } from "../HomebridgePlatform";
import { IDevice } from '../ts/interface/IDevice';
import { IBaseAccessory } from '../ts/interface/IBaseAccessory';

export class base_accessory implements IBaseAccessory {

	platform: HomebridgePlatform
	accessory: PlatformAccessory | undefined
	category: Categories
	device: IDevice


	constructor(platform: HomebridgePlatform, accessory: PlatformAccessory | undefined, category: Categories, device: IDevice) {
		this.platform = platform;
		this.accessory = accessory;
		this.category = category;
		this.device = device;

		if (!this.accessory) {
			const uuid = platform.api.hap.uuid.generate(device.serial_number);
			this.accessory = new platform.api.platformAccessory(device.name, uuid, category);
		} else {
			this.platform.log.info('Existing Accessory', this.accessory.UUID, this.accessory.displayName)
		}
		//	set fundamental device info
		this.accessory.getService(this.platform.Service.AccessoryInformation)
			?.setCharacteristic(this.platform.Characteristic.Manufacturer, device.manufacturer)
			.setCharacteristic(this.platform.Characteristic.Model, device.model)
			.setCharacteristic(this.platform.Characteristic.SerialNumber, device.serial_number)
			.setCharacteristic(this.platform.Characteristic.Name, device.name);
	}

	//	各子类单独实现功能
	mountService() { }
	updateValue(params: any) { }
}