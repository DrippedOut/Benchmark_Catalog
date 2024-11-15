const FormatResult=(resp)=>{
    let result=[];
    let finalResult =[];
    
    resp.forEach((item)=>{
    const Id=item.General?.id;
    if(!result[Id]){
        result[Id]={
            General: item.General,
            Tuner: item.Tuner,
            USBMediaPlayback: item.USBMediaPlayback,
            Bluetooth_Handsfree: item.Bluetooth_Handsfree,
            Bluetooth_Media: item.Bluetooth_Media,
            Bluetooth_Technology: item.Bluetooth_Technology,
            Camera: item.Camera,
            VoiceRecognition: item.VoiceRecognition,
            Carplay: item.Carplay,
            AndroidAuto: item.AndroidAuto,
            Weblink: item.Weblink,
            OtherConnections: item.OtherConnections,
            GeneralSetting: item.GeneralSetting,
            DisplaySetting: item.DisplaySetting,
            SoundSetting: item.SoundSetting,
            OtherFunctions: item.OtherFunctions,
            HighlightFunction: item.HighlightFunction,            
            images:[]
        }
    }

    if(item.Media){
        result[Id].images.push(item.Media)
    }
    })

    result.forEach((item)=>{
        finalResult.push({
            ...item.General,
            ...item.Tuner,
            ...item.USBMediaPlayback,
            ...item.Bluetooth_Handsfree,
            ...item.Bluetooth_Media,
            ...item.Bluetooth_Technology,
            ...item.Camera,
            ...item.VoiceRecognition,
            ...item.Carplay,
            ...item.AndroidAuto,
            ...item.Weblink,
            ...item.OtherConnections,
            ...item.GeneralSetting,
            ...item.DisplaySetting,
            ...item.SoundSetting,
            ...item.OtherFunctions,
            ...item.HighlightFunction,
            images:item.images
        })
    })

    // return finalResult   // All fields mixed

    const filteredArray = result.filter(Boolean); // Remove empty elements
    return filteredArray       // Structured by category as obj 
}

export default{ FormatResult }