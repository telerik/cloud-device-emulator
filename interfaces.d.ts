interface CloudDeviceEmitter {
	on(event: string, listener: Function): this;
	getCurrentlyAttachedDevices(): IAppetizeDeviceBasicInfo[];
}

interface IAppetizeDeviceBasicInfo {
	identifier: string;
	publicKey: string;
	model: string;
	os: string;
}

interface ICloudDeviceServerInfo {
	port: number;
	host: string;
}
