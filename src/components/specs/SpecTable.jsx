import React from "react";
import {Accordion,AccordionContent,AccordionItem,AccordionTrigger} from "@/components/ui/accordion"
import Details from "./Details";
  
function SpecTable({ HUDetail }) {
  return (
    <div className="shadow-lg rounded-xl p-10 border">
        <h2 className="text-3xl font-bold mb-10">Specifications</h2>
        <Accordion collapsible="true" type="multiple">

            <AccordionItem value="general">
                <AccordionTrigger title={"General"}/>
                <AccordionContent>
                    <Details category={"General"} HUDetail={HUDetail}/>   
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tuner">
                <AccordionTrigger title={"Tuner"} />
                    <AccordionContent>
                        <Details category={"Tuner"} HUDetail={HUDetail}/>
                    </AccordionContent>
            </AccordionItem>

            <AccordionItem value="usb-playback">
                <AccordionTrigger title={"USB Media Playback"} />
                    <AccordionContent>
                        <Details category={"USBMediaPlayback"} HUDetail={HUDetail}/>
                    </AccordionContent>
            </AccordionItem>

            <AccordionItem value="bluetooth">
                <AccordionTrigger title={"Bluetooth"} />
                    <AccordionContent>
                        <h2 className="font-medium text-md my-6 underline">Bluetooth Handsfree</h2>
                            <Details category={"Bluetooth_Handsfree"} HUDetail={HUDetail}/>

                        <h2 className="font-medium text-md my-6 underline">Bluetooth Media</h2>
                            <Details category={"Bluetooth_Media"} HUDetail={HUDetail}/>

                        <h2 className="font-medium text-md my-6 underline">Bluetooth Technology</h2>
                            <Details category={"Bluetooth_Technology"} HUDetail={HUDetail}/>
                    </AccordionContent>
            </AccordionItem>

            <AccordionItem value="camera">
                <AccordionTrigger title={"Camera"} />
                    <AccordionContent>
                        <Details category={"Camera"} HUDetail={HUDetail}/>
                    </AccordionContent>
            </AccordionItem>

            <AccordionItem value="voice-recognition">
                <AccordionTrigger title={"Voice Recognition"} />
                    <AccordionContent>
                        <Details category={"VoiceRecognition"} HUDetail={HUDetail}/>
                    </AccordionContent>
            </AccordionItem>

            <AccordionItem value="apple-carplay">
                <AccordionTrigger title={"Carplay"} />
                    <AccordionContent>
                        <Details category={"Carplay"} HUDetail={HUDetail}/>
                    </AccordionContent>
            </AccordionItem>

            <AccordionItem value="android-auto">
                <AccordionTrigger title={"Android Auto"} />
                    <AccordionContent>
                        <Details category={"AndroidAuto"} HUDetail={HUDetail}/>
                    </AccordionContent>
            </AccordionItem>

            <AccordionItem value="weblink">
                <AccordionTrigger title={"Weblink"} />
                    <AccordionContent>
                        <Details category={"Weblink"} HUDetail={HUDetail}/>
                    </AccordionContent>
            </AccordionItem>

            <AccordionItem value="other-connections">
                <AccordionTrigger title={"Other Connections"} />
                    <AccordionContent>
                        <Details category={"OtherConnections"} HUDetail={HUDetail}/>
                    </AccordionContent>
            </AccordionItem>

            <AccordionItem value="general-settings">
                <AccordionTrigger title={"General Setting"} />
                    <AccordionContent>
                        <Details category={"GeneralSetting"} HUDetail={HUDetail}/>
                    </AccordionContent>
            </AccordionItem>

            <AccordionItem value="display-settings">
                <AccordionTrigger title={"Display Setting"} />
                    <AccordionContent>
                        <Details category={"DisplaySetting"} HUDetail={HUDetail}/>
                    </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sound-settings">
                <AccordionTrigger title={"Sound Setting"} />
                    <AccordionContent>
                        <Details category={"SoundSetting"} HUDetail={HUDetail}/>
                    </AccordionContent>
            </AccordionItem>

            <AccordionItem value="other-functions">
                <AccordionTrigger title={"Other Functions"} />
                    <AccordionContent>
                        <Details category={"OtherFunctions"} HUDetail={HUDetail}/>
                    </AccordionContent>
            </AccordionItem>

            <AccordionItem value="highlight-functions">
                <AccordionTrigger title={"Highlight Function"} />
                    <AccordionContent>
                        <Details category={"HighlightFunction"} HUDetail={HUDetail}/>
                    </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
  );
}

export default SpecTable;
