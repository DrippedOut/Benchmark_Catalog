const categories = {
        "General": [
        {
            "label": "Model",
            "name": "model",
            "description": "Car model name",
            "icon": "FaCarSide"
        },
        {
            "label": "Manufacturer",
            "name": "manufacturer",
            "description": "Name of the car maker",
            "icon": "FaBuilding"
        },
        {
            "label": "Year",
            "name": "year",
            "description": "Year that the vehicle is recorded",
            "icon": "FaCalendar"
        },
        {
            "label": "Display Size",
            "name": "displaySize",
            "description": "Display size",
            "icon": "FaDesktop"
        },
        {
            "label": "Display Type",
            "name": "displayType",
            "description": "Display Type",
            "icon": "FaTv"
        },
        {
            "label": "SoC",
            "name": "soc",
            "description": "SoC platform",
            "icon": "FaMicrochip"
        },
        {
            "label": "Operating System",
            "name": "os",
            "description": "Operating System",
            "icon": "FaWindows"
        },
        {
            "label": "RAM",
            "name": "ram",
            "description": "RAM size",
            "icon": "FaMemory"
        },
        {
            "label": "ROM",
            "name": "rom",
            "description": "ROM size",
            "icon": "FaHdd"
        },
        {
            "label": "DMIPS",
            "name": "dmips",
            "description": "Total DMIPS",
            "icon": "FaCogs"
        },
        {
            "label": "Display Frame Rate",
            "name": "displayFrameRate",
            "description": "Display frame rate",
            "icon": "FaVideo"
        },
        {
            "label": "Resolution",
            "name": "resolution",
            "description": "Resolution of display",
            "icon": "FaExpand"
        },
        {
            "label": "Aspect Ratio",
            "name": "aspectRatio",
            "description": "Aspect ratio",
            "icon": "FaArrowsAltH"
        },
        {
            "label": "Car Segment",
            "name": "carSegment",
            "description": "Car classification",
            "icon": "FaCarSide"
        },
        {
            "label": "Other",
            "name": "other",
            "description": "Additional information (General)",
            "icon": "FaEllipsisH"
        }
    ],
    "Tuner":[
        {
            "label": "FM",
            "name": "fm",
            "description": "FM frequency range",
            "icon": "FaBroadcastTower"
        },
        {
            "label": "AM",
            "name": "am",
            "description": "AM frequency range",
            "icon": "FaBroadcastTower"
        },
        {
            "label": "Play/Pause",
            "name": "playPause",
            "description": "Play/Pause button",
            "icon": "FaPlay"
        },
        {
            "label": "Volume",
            "name": "volume",
            "description": "Change volume +/- button to change sound",
            "icon": "FaVolumeUp"
        },
        {
            "label": "Step Up / Step Down",
            "name": "stepUpStepDown",
            "description": "Increase / decrease frequency one step",
            "icon": "FaArrowsAltV"
        },
        {
            "label": "Seek Up / Seek Down",
            "name": "seekUpSeekDown",
            "description": "Short press to increase / decrease frequency",
            "icon": "FaArrowsAltV"
        },
        {
            "label": "Next / Previous",
            "name": "nextPrevious",
            "description": "Change to next / previous preset",
            "icon": "FaArrowsAltH"
        },
        {
            "label": "Preset",
            "name": "preset",
            "description": "User can preset frequency to channel bar",
            "icon": "FaListUl"
        },
        {
            "label": "Scan",
            "name": "scan",
            "description": "Search all broadcasting by auto seek up",
            "icon": "FaSearch"
        },
        {
            "label": "Favorite",
            "name": "favorite",
            "description": "Add station to favorite list",
            "icon": "FaStar"
        },
        {
            "label": "Auto Preset",
            "name": "autoPreset",
            "description": "FM will auto preset frequency when scanning",
            "icon": "FaCog"
        },
        {
            "label": "Slide Bar",
            "name": "slideBar",
            "description": "Slide to side list",
            "icon": "FaArrowsAltH"
        },
        {
            "label": "RDS",
            "name": "rds",
            "description": "Radio data system consisting of AF, radio text, and traffic information",
            "icon": "FaBroadcastTower"
        },
        {
            "label": "DAB",
            "name": "dab",
            "description": "Digital audio broadcasting to improve radio signal and reduce noise",
            "icon": "FaSignal"
        },
        {
            "label": "Other",
            "name": "other",
            "description": "Additional information (Tuner)",
            "icon": "FaEllipsisH"
        }
    ],
    "USBMediaPlayback":[
        {
            "label": "USB Type A",
            "name": "usbTypeA",
            "description": "USB Type A connection",
            "icon": "FaUsb"
        },
        {
            "label": "USB Type C",
            "name": "usbTypeC",
            "description": "USB Type C connection",
            "icon": "FaUsb"
        },
        {
            "label": "Audio File Format Support",
            "name": "audioFileFormatSupport",
            "description": "DA can open or preview these file formats",
            "icon": "FaMusic"
        },
        {
            "label": "Video File Format Support",
            "name": "videoFileFormatSupport",
            "description": "DA can open or preview these file formats",
            "icon": "FaVideo"
        },
        {
            "label": "Document File Format Support",
            "name": "documentFileFormatSupport",
            "description": "DA can open or preview these file formats",
            "icon": "FaFileAlt"
        },
        {
            "label": "Photo File Format Support",
            "name": "photoFileFormatSupport",
            "description": "DA can open or preview these file formats",
            "icon": "FaFileImage"
        },
        {
            "label": "Folder Name",
            "name": "folderName",
            "description": "Display the folder name of the currently playing file",
            "icon": "FaFolder"
        },
        {
            "label": "Track Name",
            "name": "trackName",
            "description": "Display the song name of the currently playing file",
            "icon": "FaMusic"
        },
        {
            "label": "Artist Name",
            "name": "artistName",
            "description": "Display the artist name of the currently playing file",
            "icon": "FaUserCircle"
        },
        {
            "label": "Album Name",
            "name": "albumName",
            "description": "Display the album name of the currently playing file",
            "icon": "FaCompactDisc"
        },
        {
            "label": "Track Number",
            "name": "trackNumber",
            "description": "Display the number of files and folders being played",
            "icon": "FaHashtag"
        },
        {
            "label": "Playback Time",
            "name": "playbackTime",
            "description": "Actual playback time of the currently playing file",
            "icon": "FaClock"
        },
        {
            "label": "Source Name",
            "name": "sourceName",
            "description": "Display the source title name",
            "icon": "FaTag"
        },
        {
            "label": "Folder and File List",
            "name": "folderFileList",
            "description": "View content in the list of folders and files",
            "icon": "FaFileAlt"
        },
        {
            "label": "Play / Pause",
            "name": "playPause",
            "description": "Play and pause current content",
            "icon": "FaPlay"
        },
        {
            "label": "Next / Previous",
            "name": "nextPrevious",
            "description": "Play next / previous content",
            "icon": "FaStepForward"
        },
        {
            "label": "Fast Forward / Rewind",
            "name": "fastForwardRewind",
            "description": "Long press for fast forward / rewind",
            "icon": "FaFastForward"
        },
        {
            "label": "Slide Bar",
            "name": "slideBar",
            "description": "Drag and slide to time search or jump to specific point",
            "icon": "FaArrowsAltH"
        },
        {
            "label": "Repeat",
            "name": "repeat",
            "description": "Repeat 1 content or all content",
            "icon": "FaArrowsRotate"
        },
        {
            "label": "Folder Repeat",
            "name": "folderRepeat",
            "description": "Repeat all content in selected folder",
            "icon": "FaFolderOpen"
        },
        {
            "label": "Random",
            "name": "random",
            "description": "Random content",
            "icon": "FaRandom"
        },
        {
            "label": "Folder Random",
            "name": "folderRandom",
            "description": "Random content in selected folder",
            "icon": "FaFolderOpen"
        },
        {
            "label": "Wide Screen",
            "name": "wideScreen",
            "description": "Switch to wide screen mode on video content",
            "icon": "FaTv"
        },
        {
            "label": "Full Screen",
            "name": "fullScreen",
            "description": "Switch to full screen mode on video content",
            "icon": "FaExpand"
        },
        {
            "label": "Other",
            "name": "other",
            "description": "Additional information (USB Media Playback)",
            "icon": "FaEllipsisH"
        }
    ],
    "Bluetooth_Handsfree":[
        {
            "label": "Synchronization",
            "name": "synchronization",
            "description": "Sync contact of phone book",
            "icon": "FaSync"
        },
        {
            "label": "Steering Accept Call",
            "name": "steeringAcceptCall",
            "description": "Accept call by steering wheel",
            "icon": "FaPhone"
        },
        {
            "label": "Steering Call Out",
            "name": "steeringCallOut",
            "description": "Call out by steering wheel",
            "icon": "FaPhoneAlt"
        },
        {
            "label": "Recent Call",
            "name": "recentCall",
            "description": "Show recent call screen",
            "icon": "FaClock"
        },
        {
            "label": "History",
            "name": "history",
            "description": "Show history call screen",
            "icon": "FaHistory"
        },
        {
            "label": "Contact",
            "name": "contact",
            "description": "Show contact screen",
            "icon": "FaAddressBook"
        },
        {
            "label": "Update Contact",
            "name": "updateContact",
            "description": "Have setting to update contact from smartphone",
            "icon": "FaSyncAlt"
        }
    ],
    "Bluetooth_Media":[
        {
            "label": "Play / Pause",
            "name": "playPause",
            "description": "Play / pause current music",
            "icon": "FaPause"
        },
        {
            "label": "Next / Previous",
            "name": "nextPrevious",
            "description": "Play next / previous music",
            "icon": "FaStepForward"
        },
        {
            "label": "Slide Bar",
            "name": "slideBar",
            "description": "Drag and slide to time search or jump to specific time",
            "icon": "FaArrowsAltH"
        },
        {
            "label": "Change Source",
            "name": "changeSource",
            "description": "Change source of media",
            "icon": "FaExchangeAlt"
        },
        {
            "label": "Library",
            "name": "library",
            "description": "Play media on Library",
            "icon": "FaBook"
        },
        {
            "label": "Spotify",
            "name": "spotify",
            "description": "Play media on Spotify",
            "icon": "FaSpotify"
        },
        {
            "label": "YouTube",
            "name": "youtube",
            "description": "Play media on YouTube",
            "icon": "FaYoutube"
        },
        {
            "label": "Apple Music",
            "name": "appleMusic",
            "description": "Play media on Apple Music",
            "icon": "FaApple"
        },
        {
            "label": "Build In Music Application",
            "name": "buildInMusicApplication",
            "description": "Built-in music application",
            "icon": "FaMusic"
        }
    ],
    "Bluetooth_Technology":[
        {
            "label": "Version",
            "name": "version",
            "description": "Bluetooth technology version",
            "icon": "FaBluetooth"
        },
        {
            "label": "Profile",
            "name": "profile",
            "description": "Bluetooth profile",
            "icon": "FaIdBadge"
        },
        {
            "label": "Other",
            "name": "other",
            "description": "Additional information (Bluetooth)",
            "icon": "FaEllipsisH"
        }
    ],
    "Camera":[
        {
            "label": "Rear Camera",
            "name": "rearCamera",
            "description": "Normal rear camera",
            "icon": "FaCamera"
        },
        {
            "label": "PVM Camera",
            "name": "pvmCamera",
            "description": "Panoramic view mode with 4+ cameras",
            "icon": "FaCubes"
        },
        {
            "label": "PVM 2D",
            "name": "pvm2D",
            "description": "Display real-time video from different angles in 2D",
            "icon": "FaVideo"
        },
        {
            "label": "PVM 3D",
            "name": "pvm3D",
            "description": "Display real-time video from different angles in 3D",
            "icon": "FaVideo"
        },
        {
            "label": "PVM Icon",
            "name": "pvmIcon",
            "description": "Display front view camera PVM 360 button",
            "icon": "FaCameraRetro"
        },
        {
            "label": "PVM Setting",
            "name": "pvmSetting",
            "description": "Set the turning assistant display and assistance lines",
            "icon": "FaCogs"
        },
        {
            "label": "Dynamic Guideline",
            "name": "dynamicGuideline",
            "description": "Displays dynamic guideline in real-time as the view of the car, with lines that depend on the wheel's direction",
            "icon": "FaArrowsAltH"
        },
        {
            "label": "Static Guideline",
            "name": "staticGuideline",
            "description": "Displays static guideline in real-time as the view of the car, with lines that depend on the straight direction",
            "icon": "FaArrowsAltV"
        },
        {
            "label": "Dynamic + Static Guideline",
            "name": "dynamicStaticGuideline",
            "description": "Displays both dynamic and static guidelines in real-time, one depending on the wheel's direction and another for the straight direction",
            "icon": "IoAppsOutline"
        },
        {
            "label": "BSD (Blind Spot Detection)",
            "name": "bsd",
            "description": "Sensor attached to the right corner and left behind the car area under the bumper to detect blind spots during driving",
            "icon": "FaEye"
        },
        {
            "label": "RCTA (Rear Cross Traffic Alert)",
            "name": "rcta",
            "description": "Radar system that warns when cars pass in the blind spot while reversing",
            "icon": "FaCarCrash"
        },
        {
            "label": "Back Sensor",
            "name": "backSensor",
            "description": "Radar system that warns when the car is close to an object",
            "icon": "FaBroadcastTower"
        },
        {
            "label": "Lane Watch Camera",
            "name": "laneWatchCamera",
            "description": "Lane watch camera for monitoring the lane when changing lanes",
            "icon": "FaRoad"
        },
        {
            "label": "Other",
            "name": "other",
            "description": "Additional information (Camera)",
            "icon": "FaEllipsisH"
        }
    ],
    "VoiceRecognition":[
        {
            "label": "Steering Wheel VR Button",
            "name": "steeringWheelVrButton",
            "description": "Can connect with the voice button on the steering wheel",
            "icon": "FaMicrophoneAlt"
        },
        {
            "label": "DA VR Button",
            "name": "daVrButton",
            "description": "Voice recognition button on DA",
            "icon": "FaMicrophone"
        },
        {
            "label": "Wake Up Word",
            "name": "wakeUpWord",
            "description": "Wake up word available on DA",
            "icon": "FaBullhorn"
        },
        {
            "label": "Default Language",
            "name": "defaultLanguage",
            "description": "Default language of VR",
            "icon": "FaLanguage"
        },
        {
            "label": "Change Voice Input Language",
            "name": "changeVoiceInputLanguage",
            "description": "Change voice input language",
            "icon": "FaExchangeAlt"
        },
        {
            "label": "Change Voice Output Sound",
            "name": "changeVoiceOutputSound",
            "description": "Change voice output sound",
            "icon": "FaVolumeUp"
        },
        {
            "label": "Other",
            "name": "other",
            "description": "Additional information (Voice Recognition)",
            "icon": "FaEllipsisH"
        }
    ],
    "Carplay":[
        {
            "label": "Wire",
            "name": "wire",
            "description": "Connect Carplay via cable",
            "icon": "FaUsb"
        },
        {
            "label": "Wireless",
            "name": "wireless",
            "description": "Connect Carplay via Wi-Fi",
            "icon": "FaWifi"
        },
        {
            "label": "Day / Night Mode",
            "name": "dayNightMode",
            "description": "Day / night mode support type",
            "icon": "FaAdjust"
        },
        {
            "label": "Separate Volume Control",
            "name": "separateVolumeControl",
            "description": "Control volume separately for each mode (Call / Voice / Media)",
            "icon": "FaVolumeUp"
        },
        {
            "label": "Touch Level",
            "name": "touchLevel",
            "description": "High fidelity or Low fidelity touch response",
            "icon": "FaHandPointer"
        },
        {
            "label": "Entry Point",
            "name": "entryPoint",
            "description": "Entry point for Carplay",
            "icon": "FaSignInAlt"
        },
        {
            "label": "Enhance Siri",
            "name": "enhanceSiri",
            "description": "Support enhanced Siri features",
            "icon": "FaMicrophoneAlt"
        },
        {
            "label": "Other",
            "name": "other",
            "description": "Additional information (Carplay)",
            "icon": "FaEllipsisH"
        }
    ],
    "AndroidAuto":[
        {
            "label": "Wire",
            "name": "wire",
            "description": "Connect Android Auto via cable",
            "icon": "FaUsb"
        },
        {
            "label": "Wireless",
            "name": "wireless",
            "description": "Connect Android Auto via Wi-Fi",
            "icon": "FaWifi"
        },
        {
            "label": "Day / Night Mode",
            "name": "dayNightMode",
            "description": "Day / night mode support type",
            "icon": "FaAdjust"
        },
        {
            "label": "Video Config 60FPS",
            "name": "videoConfig60fps",
            "description": "Use PCTS V59",
            "icon": "FaVideo"
        },
        {
            "label": "Additional Depth",
            "name": "additionalDepth",
            "description": "Use PCTS V59 decoder_additional_depth must be <=1",
            "icon": "FaLayerGroup"
        },
        {
            "label": "Separate Volume Control",
            "name": "separateVolumeControl",
            "description": "Control volume separately for each mode (Call / VR/ Guidance)",
            "icon": "FaVolumeUp"
        },
        {
            "label": "UI Layout",
            "name": "uiLayout",
            "description": "Full Screen / Blended UI / Resizable",
            "icon": "FaDesktop"
        },
        {
            "label": "Other",
            "name": "other",
            "description": "Additional features or options for Android Auto",
            "icon": "FaEllipsisH"
        },
        {
            "label": "Other",
            "name": "other",
            "description": "Additional information (Android Auto)",
            "icon": "FaEllipsisH"
        }
    ],
    "Weblink":[
        {
            "label": "Wire",
            "name": "wire",
            "description": "Connect Weblink via cable",
            "icon": "FaUsb"
        },
        {
            "label": "Wireless",
            "name": "wireless",
            "description": "Connect Weblink via Wi-Fi",
            "icon": "FaWifi"
        },
        {
            "label": "Application",
            "name": "application",
            "description": "Applications available in Weblink (YouTube, browser, etc.)",
            "icon": "FaAppStoreIos"
        },
        {
            "label": "Separate Volume Control",
            "name": "separateVolumeControl",
            "description": "Control volume separately for each mode (Call / VR/ Guidance)",
            "icon": "FaVolumeUp"
        },
        {
            "label": "Other",
            "name": "other",
            "description": "Additional information (Weblink)",
            "icon": "FaEllipsisH"
        }
    ],
    "OtherConnections":[
        {
            "label": "Wi-Fi Connect",
            "name": "wifiConnect",
            "description": "Can connect Wi-Fi",
            "icon": "FaWifi"
        },
        {
            "label": "Wi-Fi Supported",
            "name": "wifiSupported",
            "description": "Wi-Fi supported standards",
            "icon": "FaSignal"
        },
        {
            "label": "Wi-Fi Security",
            "name": "wifiSecurity",
            "description": "Wi-Fi security protocols",
            "icon": "FaLock"
        },
        {
            "label": "Miracast",
            "name": "miracast",
            "description": "Miracast functions enable Android smartphones to stream content (Video, Music, Etc.)",
            "icon": "FaMobileAlt"
        },
        {
            "label": "Browser",
            "name": "browser",
            "description": "Can use the web browser on this product",
            "icon": "FaGlobe"
        },
        {
            "label": "NFC",
            "name": "nfc",
            "description": "Can connect with Bluetooth and Wi-Fi automatically. Just tap the phone you want to connect to the NFC screen.",
            "icon": "FaMobile"
        },
        {
            "label": "Balance Checking",
            "name": "balanceChecking",
            "description": "E-money card balance check can only be used for Indonesian models.",
            "icon": "FaMoneyBillWave"
        },
        {
            "label": "Other",
            "name": "other",
            "description": "Additional information (Other Connections)",
            "icon": "FaEllipsisH"
        }
    ],
    "GeneralSetting":[
        {
            "label": "Profile",
            "name": "profile",
            "description": "Support multiple profile feature",
            "icon": "FaUserCircle"
        },
        {
            "label": "Language",
            "name": "language",
            "description": "Display language supported",
            "icon": "FaLanguage"
        },
        {
            "label": "Personal Center",
            "name": "personalCenter",
            "description": "Application connect to car",
            "icon": "FaUser"
        },
        {
            "label": "Native Navigation",
            "name": "nativeNavigation",
            "description": "Built-in navigation in DA",
            "icon": "FaMapMarkedAlt"
        },
        {
            "label": "Auto Clock",
            "name": "autoClock",
            "description": "Support automatic time zone",
            "icon": "FaClock"
        },
        {
            "label": "Other",
            "name": "other",
            "description": "Additional information (General Settings)",
            "icon": "FaEllipsisH"
        }
    ],
    "DisplaySetting":[
        {
            "label": "ON/OFF Opening Animation",
            "name": "onOffOpeningAnimation",
            "description": "Can turn ON/OFF opening animation",
            "icon": "FaPlayCircle"
        },
        {
            "label": "LCD Contrast & Brightness Control",
            "name": "lcdContrastBrightnessControl",
            "description": "LCD Contrast & Brightness control",
            "icon": "FaAdjust"
        },
        {
            "label": "Display ON/OFF",
            "name": "displayOnOff",
            "description": "Display ON/OFF",
            "icon": "FaPowerOff"
        },
        {
            "label": "Wallpaper",
            "name": "wallpaper",
            "description": "Change background wallpaper",
            "icon": "FaImage"
        },
        {
            "label": "Theme",
            "name": "theme",
            "description": "Change theme on DA",
            "icon": "FaPalette"
        },
        {
            "label": "Auto Dimmer",
            "name": "autoDimmer",
            "description": "Auto dimmer",
            "icon": "FaLightbulb"
        },
        {
            "label": "Changeable Widget",
            "name": "changeableWidget",
            "description": "Have changeable widget",
            "icon": "FaExchangeAlt"
        },
        {
            "label": "Moveable Widget",
            "name": "moveableWidget",
            "description": "Have moveable widget",
            "icon": "FaArrowsAlt"
        },
        {
            "label": "Split Screen",
            "name": "splitScreen",
            "description": "Users can customize function display to view two functions simultaneously on a split screen",
            "icon": "FaColumns"
        },
        {
            "label": "Other",
            "name": "other",
            "description": "Additional information (Display Settings)",
            "icon": "FaEllipsisH"
        }
    ],
    "SoundSetting":[
        {
            "label": "Surround Sound",
            "name": "surroundSound",
            "description": "Support and adjustable surround sound",
            "icon": "FaVolumeUp"
        },
        {
            "label": "Base Enhancer",
            "name": "baseEnhancer",
            "description": "Can adjust bass to be more powerful and extended",
            "icon": "FaMusic"
        },
        {
            "label": "Equalizer",
            "name": "equalizer",
            "description": "Support equalizer adjustment",
            "icon": "FaSlidersH"
        },
        {
            "label": "Balance Sound",
            "name": "balanceSound",
            "description": "Can adjust the balance settings to achieve an ideal listening environment in all occupied seats",
            "icon": "FaBalanceScale"
        },
        {
            "label": "Automatic Sound Level Control",
            "name": "automaticSoundLevelControl",
            "description": "While driving, noise in the car changes according to the driving speed automatically",
            "icon": "FaCar"
        },
        {
            "label": "Separate Volume Control",
            "name": "separateVolumeControl",
            "description": "Support separate volume setting",
            "icon": "FaVolumeUp"
        },
        {
            "label": "Other",
            "name": "other",
            "description": "Additional information (Sound Settings)",
            "icon": "FaEllipsisH"
        }
    ],
    "OtherFunctions":[
        {
            "label": "Vehicle Animation",
            "name": "vehicleAnimation",
            "description": "Can choose the vehicle animation to be shown",
            "icon": "FaCar"
        },
        {
            "label": "Vehicle Info",
            "name": "vehicleInfo",
            "description": "Show vehicle information",
            "icon": "FaInfoCircle"
        },
        {
            "label": "Vehicle Setting",
            "name": "vehicleSetting",
            "description": "Can set vehicle settings directly with DA (AC, Lamp, etc.)",
            "icon": "FaCogs"
        },
        {
            "label": "ADAS",
            "name": "adas",
            "description": "Can set ADAS on/off notifications",
            "icon": "FaBell"
        },
        {
            "label": "Altimeter",
            "name": "altimeter",
            "description": "Can show Pitch, Roll, Sea level or compass",
            "icon": "FaMountain"
        },
        {
            "label": "Battery Level",
            "name": "batteryLevel",
            "description": "Can show battery level (xx.xV)",
            "icon": "FaBatteryThreeQuarters"
        },
        {
            "label": "Special Day",
            "name": "specialDay",
            "description": "Can set a special day",
            "icon": "FaCalendarDay"
        },
        {
            "label": "HUD",
            "name": "hud",
            "description": "Can show the HUD",
            "icon": "FaTachometerAlt"
        },
        {
            "label": "Relax Mode",
            "name": "relaxMode",
            "description": "Can set a Relax Mode",
            "icon": "FaBed"
        },
        {
            "label": "OTA",
            "name": "ota",
            "description": "Over the air software update",
            "icon": "FaCloudDownloadAlt"
        },
        {
            "label": "Other",
            "name": "other",
            "description": "Additional information (Other Functions)",
            "icon": "FaEllipsisH"
        }
    ],
    "HighlightFunction":[
        {
            "label": "Highlight Function",
            "name": "highlightFunction",
            "description": "Highlight function of each model",
            "icon": "FaHighlighter"
        }
    ]
};

export default categories;