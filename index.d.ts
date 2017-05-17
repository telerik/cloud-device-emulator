/// <reference path="./interfaces.d.ts" />

declare module "cloud-device-emulator" {
	function getSeverAddress(): Promise<Number>;
	var deviceEmitter: CloudDeviceEmitter;
}
