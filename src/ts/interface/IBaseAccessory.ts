import { HomebridgePlatform } from '../../HomebridgePlatform'
import { PlatformAccessory, Categories, Service } from 'homebridge'
import { IDevice } from './IDevice'


export interface IBaseAccessory {
	platform: HomebridgePlatform
	accessory: PlatformAccessory | undefined
	category: Categories
	device: IDevice
	mountService: () => void
	updateValue: (params: any) => void

}