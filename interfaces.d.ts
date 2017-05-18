interface CloudDeviceEmitter {
	on(event: string, listener: Function): this;
	getCurrentlyAttachedDevices(): IAttachedDevices;
}

interface IAttachedDevices {
	[key: string]: IAppetizeDeviceBasicInfo;
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
