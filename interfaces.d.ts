interface CloudDeviceEmitter {
	on(event: string, listener: Function): this;
}

interface IAppetizeDeviceBasicInfo {
	identifier: string;
	publicKey: string;
	model: string;
	os: string;
}