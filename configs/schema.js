import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const General=pgTable('General',{
    id:serial('id').primaryKey(),
    model:varchar('model').notNull(),
    manufacturer:varchar('manufacturer'),
    year:varchar('year'),
    displaySize:varchar('displaySize'),
    displayType:varchar('displayType'),
    soc:varchar('soc'),
    os:varchar('os'),
    ram:varchar('ram'),
    rom:varchar('rom'),
    dmips:varchar('dmips'),
    displayFrameRate:varchar('displayFrameRate'),
    resolution:varchar('resolution'),
    aspectRatio:varchar('aspectRatio'),
    carSegment:varchar('carSegment')
})

export const Tuner = pgTable('Tuner', {
    id: serial('id').primaryKey(),
    fm: varchar('fm'),
    am: varchar('am'),
    playPause: varchar('playPause'),
    volume: varchar('volume'),
    stepUpStepDown: varchar('stepUpStepDown'),
    seekUpSeekDown: varchar('seekUpSeekDown'),
    nextPrevious: varchar('nextPrevious'),
    preset: varchar('preset'),
    scan: varchar('scan'),
    favorite: varchar('favorite'),
    autoPreset: varchar('autoPreset'),
    slideBar: varchar('slideBar'),
    rds: varchar('rds'),
    dab: varchar('dab')
});

export const USBMediaPlayback = pgTable('USBMediaPlayback', {
    id: serial('id').primaryKey(),
    usbTypeA: varchar('usbTypeA'),
    usbTypeC: varchar('usbTypeC'),
    audioFileFormatSupport: varchar('audioFileFormatSupport'),
    videoFileFormatSupport: varchar('videoFileFormatSupport'),
    documentFileFormatSupport: varchar('documentFileFormatSupport'),
    photoFileFormatSupport: varchar('photoFileFormatSupport'),
    folderName: varchar('folderName'),
    trackName: varchar('trackName'),
    artistName: varchar('artistName'),
    albumName: varchar('albumName'),
    trackNumber: varchar('trackNumber'),
    playbackTime: varchar('playbackTime'),
    sourceName: varchar('sourceName'),
    folderFileList: varchar('folderFileList'),
    playPause: varchar('playPause'),
    nextPrevious: varchar('nextPrevious'),
    fastForwardRewind: varchar('fastForwardRewind'),
    slideBar: varchar('slideBar'),
    repeat: varchar('repeat'),
    folderRepeat: varchar('folderRepeat'),
    random: varchar('random'),
    folderRandom: varchar('folderRandom'),
    wideScreen: varchar('wideScreen'),
    fullScreen: varchar('fullScreen')
});

export const Bluetooth_Handsfree = pgTable('Bluetooth_Handsfree', {
    id: serial('id').primaryKey(),
    synchronization: varchar('synchronization'),
    steeringAcceptCall: varchar('steeringAcceptCall'),
    steeringCallOut: varchar('steeringCallOut'),
    recentCall: varchar('recentCall'),
    history: varchar('history'),
    contact: varchar('contact'),
    updateContact: varchar('updateContact')
});

export const Bluetooth_Media = pgTable('Bluetooth_Media', {
    id: serial('id').primaryKey(),
    playPause: varchar('playPause'),
    nextPrevious: varchar('nextPrevious'),
    slideBar: varchar('slideBar'),
    changeSource: varchar('changeSource'),
    library: varchar('library'),
    spotify: varchar('spotify'),
    youtube: varchar('youtube'),
    appleMusic: varchar('appleMusic'),
    buildInMusicApplication: varchar('buildInMusicApplication')
});

export const Bluetooth_Technology = pgTable('Bluetooth_Technology', {
    id: serial('id').primaryKey(),
    version: varchar('version'),
    profile: varchar('profile')
});

export const Camera = pgTable('Camera', {
    id: serial('id').primaryKey(),
    rearCamera: varchar('rearCamera'),
    pvmCamera: varchar('pvmCamera'),
    pvm2D: varchar('pvm2D'),
    pvm3D: varchar('pvm3D'),
    pvmIcon: varchar('pvmIcon'),
    pvmSetting: varchar('pvmSetting'),
    dynamicGuideline: varchar('dynamicGuideline'),
    staticGuideline: varchar('staticGuideline'),
    dynamicStaticGuideline: varchar('dynamicStaticGuideline'),
    bsd: varchar('bsd'),
    rcta: varchar('rcta'),
    backSensor: varchar('backSensor'),
    laneWatchCamera: varchar('laneWatchCamera')
});

export const VoiceRecognition = pgTable('VoiceRecognition', {
    id: serial('id').primaryKey(),
    steeringWheelVrButton: varchar('steeringWheelVrButton'),
    daVrButton: varchar('daVrButton'),
    wakeUpWord: varchar('wakeUpWord'),
    defaultLanguage: varchar('defaultLanguage'),
    changeVoiceInputLanguage: varchar('changeVoiceInputLanguage'),
    changeVoiceOutputSound: varchar('changeVoiceOutputSound')
});

export const Carplay = pgTable('Carplay', {
    id: serial('id').primaryKey(),
    wire: varchar('wire'),
    wireless: varchar('wireless'),
    dayNightMode: varchar('dayNightMode'),
    separateVolumeControl: varchar('separateVolumeControl'),
    touchLevel: varchar('touchLevel'),
    entryPoint: varchar('entryPoint'),
    enhanceSiri: varchar('enhanceSiri')
});

export const AndroidAuto = pgTable('AndroidAuto', {
    id: serial('id').primaryKey(),
    wire: varchar('wire'),
    wireless: varchar('wireless'),
    dayNightMode: varchar('dayNightMode'),
    videoConfig60fps: varchar('videoConfig60fps'),
    additionalDepth: varchar('additionalDepth'),
    separateVolumeControl: varchar('separateVolumeControl'),
    uiLayout: varchar('uiLayout'),
    other: varchar('other')
});

export const Weblink = pgTable('Weblink', {
    id: serial('id').primaryKey(),
    wire: varchar('wire'),
    wireless: varchar('wireless'),
    application: varchar('application'),
    separateVolumeControl: varchar('separateVolumeControl')
});

export const OtherConnections = pgTable('OtherConnections', {
    id: serial('id').primaryKey(),
    wifiConnect: varchar('wifiConnect'),
    wifiSupported: varchar('wifiSupported'),
    wifiSecurity: varchar('wifiSecurity'),
    miracast: varchar('miracast'),
    browser: varchar('browser'),
    nfc: varchar('nfc'),
    balanceChecking: varchar('balanceChecking')
});

export const GeneralSetting = pgTable('GeneralSetting', {
    id: serial('id').primaryKey(),
    profile: varchar('profile'),
    language: varchar('language'),
    personalCenter: varchar('personalCenter'),
    nativeNavigation: varchar('nativeNavigation'),
    autoClock: varchar('autoClock')
});

export const DisplaySetting = pgTable('DisplaySetting', {
    id: serial('id').primaryKey(),
    onOffOpeningAnimation: varchar('onOffOpeningAnimation'),
    lcdContrastBrightnessControl: varchar('lcdContrastBrightnessControl'),
    displayOnOff: varchar('displayOnOff'),
    wallpaper: varchar('wallpaper'),
    theme: varchar('theme'),
    autoDimmer: varchar('autoDimmer'),
    changeableWidget: varchar('changeableWidget'),
    moveableWidget: varchar('moveableWidget'),
    splitScreen: varchar('splitScreen')
});

export const SoundSetting = pgTable('SoundSetting', {
    id: serial('id').primaryKey(),
    surroundSound: varchar('surroundSound'),
    baseEnhancer: varchar('baseEnhancer'),
    equalizer: varchar('equalizer'),
    balanceSound: varchar('balanceSound'),
    automaticSoundLevelControl: varchar('automaticSoundLevelControl'),
    separateVolumeControl: varchar('separateVolumeControl')
});

export const OtherFunctions = pgTable('OtherFunctions', {
    id: serial('id').primaryKey(),
    vehicleAnimation: varchar('vehicleAnimation'),
    vehicleInfo: varchar('vehicleInfo'),
    vehicleSetting: varchar('vehicleSetting'),
    adas: varchar('adas'),
    altimeter: varchar('altimeter'),
    batteryLevel: varchar('batteryLevel'),
    specialDay: varchar('specialDay'),
    hud: varchar('hud'),
    relaxMode: varchar('relaxMode'),
    ota: varchar('ota')
});

export const HighlightFunction = pgTable('HighlightFunction', {
    id: serial('id').primaryKey(),
    highlightFunction: varchar('highlightFunction')
});

export const Media = pgTable('Media', {
    id: serial('id').primaryKey(),
    imageURL: varchar('imageURL').notNull(),
    HUListingId: integer('HUListingId').notNull().references(()=>General.id)
})