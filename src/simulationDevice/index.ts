const devices:Array<any> = [
	{
		"serial_number": "f9404a29-d410-4ec7-a39b-7b57bebadf95",
		"name": "无线按键开关",
		"manufacturer": "manufacturer namess",
		"model": "model namess",
		"firmware_version": "firmware version11",
		"display_category": "button",
		"link_layer_type": "",
		"capabilities": [
			{
				"capability": "press",
				"permission": "readWrite"
			},
			{
				"capability": "battery",
				"permission": "readWrite"
			},
			{
				"capability": "rssi",
				"permission": "readWrite"
			}
		],

		"rid": null,

		"gid_list": [],

		"idx_in_room": null,

		"idx_in_home": 9,

		"state": null,

		"tags": {

			"key": "value"

		},

		"type": "thirdparty",

		"enable_log": true,

		"enable_debug_log": false,

		"online": true,

		"state_updated_at": null

	},

	{

		"serial_number": "ba13a728-6fde-40f1-a5e8-4b4258ed6a27",

		"name": "烟雾传感器",

		"manufacturer": "manufacturer namess",

		"model": "model namess",

		"firmware_version": "firmware version11",

		"display_category": "smokeDetector",

		"link_layer_type": "",

		"capabilities": [

			{

				"capability": "detect",

				"permission": "readWrite"

			},

			{

				"capability": "battery",

				"permission": "readWrite"

			},

			{

				"capability": "rssi",

				"permission": "readWrite"

			}

		],

		"rid": null,

		"gid_list": [],

		"idx_in_room": null,

		"idx_in_home": 8,

		"state": null,

		"tags": {

			"key": "value"

		},

		"type": "thirdparty",

		"enable_log": true,

		"enable_debug_log": false,

		"online": true,

		"state_updated_at": null

	},

	{

		"serial_number": "b7c30727-e835-497b-8c14-f343aee68305",

		"name": "单色灯",

		"manufacturer": "manufacturer namess",

		"model": "model namess",

		"firmware_version": "firmware version11",

		"display_category": "light",

		"link_layer_type": "",

		"capabilities": [

			{

				"capability": "power",

				"permission": "readWrite"

			},

			{

				"capability": "brightness",

				"permission": "readWrite"

			},

			{

				"capability": "rssi",

				"permission": "readWrite"

			}

		],

		"rid": null,

		"gid_list": [],

		"idx_in_room": null,

		"idx_in_home": 6,

		"state": {

			"power": {

				"powerState": "off",

				"updated_at": 1670220693231

			},

			"brightness": {

				"brightness": 0,

				"updated_at": 1670207289531

			}

		},

		"tags": {

			"key": "value"

		},

		"type": "thirdparty",

		"enable_log": true,

		"enable_debug_log": false,

		"online": true,

		"state_updated_at": 1670220693231

	},

	{

		"serial_number": "9dcd7019-f266-4bc4-a3e9-5680e19abe4c",

		"name": "五色灯",

		"manufacturer": "manufacturer namess",

		"model": "model namess",

		"firmware_version": "firmware version11",

		"display_category": "light",

		"link_layer_type": "",

		"capabilities": [

			{

				"capability": "power",

				"permission": "readWrite"

			},

			{

				"capability": "brightness",

				"permission": "readWrite"

			},

			{

				"capability": "color-temperature",

				"permission": "readWrite"

			},

			{

				"capability": "rssi",

				"permission": "readWrite"

			},

			{

				"capability": "color-rgb",

				"permission": "readWrite"

			}

		],

		"rid": null,

		"gid_list": [],

		"idx_in_room": null,

		"idx_in_home": 5,

		"state": {

			"power": {

				"powerState": "on",

				"updated_at": 1670207289559

			},

			"color-temperature": {

				"colorTemperature": 10,

				"updated_at": 1670207289561

			},

			"brightness": {

				"brightness": 60,

				"updated_at": 1670207289565

			},

			"color-rgb": {

				"red": 255,

				"green": 1,

				"blue": 1,

				"updated_at": 1670207289568

			}

		},

		"tags": {

			"key": "value"

		},

		"type": "thirdparty",

		"enable_log": true,

		"enable_debug_log": false,

		"online": true,

		"state_updated_at": 1670207289568

	},

	{

		"serial_number": "e6ed1750-226b-4120-aeb7-89769e5b03aa",

		"name": "zigbee 门磁传感器",

		"manufacturer": "manufacturer namess",

		"model": "model namess",

		"firmware_version": "firmware version11",

		"display_category": "contactSensor",

		"link_layer_type": "",

		"capabilities": [

			{

				"capability": "detect",

				"permission": "readWrite"

			},

			{

				"capability": "battery",

				"permission": "readWrite"

			},

			{

				"capability": "rssi",

				"permission": "readWrite"

			}

		],

		"rid": null,

		"gid_list": [],

		"idx_in_room": null,

		"idx_in_home": 4,

		"state": {

			"detect": {

				"detected": true,

				"updated_at": 1669962118981

			},

			"battery": {

				"battery": 40,

				"updated_at": 1669962118986

			}

		},

		"tags": {

			"key": "value"

		},

		"type": "thirdparty",

		"enable_log": true,

		"enable_debug_log": false,

		"online": true,

		"state_updated_at": 1669962118986

	},

	{

		"serial_number": "7453a012-14d3-4c69-8d7d-23c84a5f7d59",

		"name": "窗帘",

		"manufacturer": "manufacturer namess",

		"model": "model namess",

		"firmware_version": "firmware version11",

		"display_category": "curtain",

		"link_layer_type": "",

		"capabilities": [

			{

				"capability": "motor-control",

				"permission": "readWrite"

			},

			{

				"capability": "motor-reverse",

				"permission": "readWrite"

			},

			{

				"capability": "motor-clb",

				"permission": "readWrite"

			},

			{

				"capability": "percentage",

				"permission": "readWrite"

			},

			{

				"capability": "battery",

				"permission": "readWrite"

			},

			{

				"capability": "rssi",

				"permission": "readWrite"

			},

			{

				"capability": "startup",

				"permission": "readWrite"

			}

		],

		"rid": null,

		"gid_list": [],

		"idx_in_room": null,

		"idx_in_home": 3,

		"state": {

			"percentage": {

				"percentage": 97,

				"updated_at": 1669973791810

			},

			"motor-control": {

				"motorControl": "open",

				"updated_at": 1669973472464

			},

			"motor-reverse": {

				"motorReverse": true,

				"updated_at": 1669973790882

			},

			"motor-clb": {

				"motorClb": "normal",

				"updated_at": 1669972968995

			},

			"startup": {

				"startup": "stay",

				"updated_at": 1669973799367

			}

		},

		"tags": {

			"key": "value"

		},

		"type": "thirdparty",

		"enable_log": true,

		"enable_debug_log": false,

		"online": true,

		"state_updated_at": 1669973799367

	},

	{

		"serial_number": "a93d959c-8cc3-4498-a33b-1d6084901165",

		"name": "温湿度传感器（正常）",

		"manufacturer": "manufacturer namess",

		"model": "model namess",

		"firmware_version": "firmware version11",

		"display_category": "temperatureAndHumiditySensor",

		"link_layer_type": "",

		"capabilities": [

			{

				"capability": "temperature",

				"permission": "read"

			},

			{

				"capability": "humidity",

				"permission": "read"

			},

			{

				"capability": "battery",

				"permission": "readWrite"

			},

			{

				"capability": "rssi",

				"permission": "readWrite"

			}

		],

		"rid": null,

		"gid_list": [],

		"idx_in_room": null,

		"idx_in_home": 2,

		"state": {

			"humidity": {

				"humidity": 100,

				"updated_at": 1669966629653

			},

			"temperature": {

				"temperature": 26,

				"updated_at": 1669966629659

			}

		},

		"tags": {

			"key": "value"

		},

		"type": "thirdparty",

		"enable_log": true,

		"enable_debug_log": false,

		"online": true,

		"state_updated_at": 1669966629659

	},

	{

		"serial_number": "00124b002342d5a7",

		"name": 'plug',

		"manufacturer": "SONOFF",

		"model": "BASICZBR3",

		"firmware_version": "0.5",

		"display_category": "plug",

		"link_layer_type": "Zigbee-ZR",

		"capabilities": [

			{

				"capability": "power",

				"permission": "readWrite"

			},

			{

				"capability": "rssi",

				"permission": "read"

			}

		],

		"rid": null,

		"gid_list": [],

		"idx_in_room": null,

		"idx_in_home": -5,

		"state": {

			"power": {

				"powerState": "on",

				"updated_at": 1670226391411

			},

			"rssi": {

				"rssi": -23,

				"updated_at": 1670226391412

			}

		},

		"tags": null,

		"type": "zigbee",

		"enable_log": true,

		"enable_debug_log": false,

		"online": true,

		"state_updated_at": 1670226391412

	},

	{

		"serial_number": "acc74832-44b6-4e3a-8031-a3c6e42bfa6e",

		"name": "四开关",

		"manufacturer": "manufacturer namess",

		"model": "model namess",

		"firmware_version": "firmware version11",

		"display_category": "switch",

		"link_layer_type": "",

		"capabilities": [

			{

				"capability": "power",

				"permission": "readWrite"

			},

			{

				"capability": "rssi",

				"permission": "readWrite"

			},

			{

				"capability": "toggle",

				"permission": "readWrite",

				"name": "1"

			},

			{

				"capability": "toggle",

				"permission": "readWrite",

				"name": "2"

			},

			{

				"capability": "toggle",

				"permission": "readWrite",

				"name": "3"

			},

			{

				"capability": "toggle",

				"permission": "readWrite",

				"name": "4"

			}

		],

		"rid": null,

		"gid_list": [],

		"idx_in_room": null,

		"idx_in_home": -6,

		"state": {

			"power": {

				"toggle": {

					"1": {

						"toggleState": "on"

					},

					"2": {

						"toggleState": "on"

					},

					"3": {

						"toggleState": "on"

					},

					"4": {

						"toggleState": "on"

					}

				}

			},

			"toggle": {

				"1": {

					"toggleState": "off",

					"updated_at": 1670226428104

				},

				"2": {

					"toggleState": "off",

					"updated_at": 1670226429376

				},

				"3": {

					"toggleState": "off",

					"updated_at": 1670226431140

				},

				"4": {

					"toggleState": "off",

					"updated_at": 1670226432383

				},

				"toggle": {

					"1": {

						"toggleState": "off"

					},

					"2": {

						"toggleState": "off"

					},

					"3": {

						"toggleState": "off"

					},

					"4": {

						"toggleState": "off"

					},

					"updated_at": 1670226163825

				}

			}

		},

		"tags": {

			"key": "value"

		},

		"type": "thirdparty",

		"enable_log": true,

		"enable_debug_log": false,

		"online": true,

		"state_updated_at": 1670226432383

	},

	{

		"serial_number": "077efeb7-47aa-472d-8ca7-bc1f99674623",

		"name": "waterLeakDetector",

		"manufacturer": "lece",

		"model": "model names",

		"firmware_version": "firmware version1",

		"display_category": "waterLeakDetector",

		"link_layer_type": "unknow",

		"mac_address": null,

		"hostname": "192.168.31.53",

		"subnet": true,

		"capabilities": [

			{

				"capability": "camera-stream",

				"permission": "readWrite",

				"configuration": {

					"streamUrl": "rtsp://192.168.31.53:554/md0_0",

					"videoCodec": "H.265 / HEVC (High Efficiency Video Coding)",

					"resolution": {

						"width": 2304,

						"height": 1296

					},

					"keyFrameInterval": -1,

					"audioCodec": "PCM A-law / G.711 A-law",

					"samplingRate": "8000",

					"dataRate": 8

				}

			}

		],

		"rid": null,

		"gid_list": [],

		"idx_in_room": null,

		"idx_in_home": -3,

		"tags": null,

		"state": null,

		"type": "camera-rtsp",

		"enable_log": false,

		"enable_debug_log": false,

		"create_at": 1670222064770,

		"online": true,

		"state_updated_at": 1670222064864

	},

	{

		"serial_number": "7e8c4a1e-3e8c-49e7-a1ba-3dbe73f7bff4",

		"name": "curtain",

		"manufacturer": "lece",

		"model": "model names",

		"firmware_version": "firmware version1",

		"display_category": "button",

		"link_layer_type": "unknow",

		"mac_address": null,

		"hostname": "192.168.31.215",

		"subnet": true,

		"capabilities": [

			{

				"capability": "camera-stream",

				"permission": "readWrite",

				"configuration": {

					"streamUrl": "http://192.168.31.215:81",

					"videoCodec": "",

					"resolution": {

						"width": -1,

						"height": -1

					},

					"keyFrameInterval": -1,

					"audioCodec": "",

					"samplingRate": -1,

					"dataRate": -1

				}

			}

		],

		"rid": null,

		"gid_list": [],

		"idx_in_room": null,

		"idx_in_home": -4,

		"tags": null,

		"state": null,

		"type": "camera-esp32-cam",

		"enable_log": false,

		"enable_debug_log": false,

		"create_at": 1670222689738,

		"online": true,

		"state_updated_at": 1670225114797

	}

]

export default devices