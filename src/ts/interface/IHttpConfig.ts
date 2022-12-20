import { EMethod } from "../enum/EMethod";

interface IHttpConfig {
	ip: string,
	path: string,
	method: EMethod,
	at?: string,
	params?: any
}

export { IHttpConfig }