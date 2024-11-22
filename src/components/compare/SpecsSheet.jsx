import React from 'react'
import {Accordion,AccordionItem,AccordionTrigger,AccordionContent} from "@/components/ui/accordion";
import SpecsContent from './SpecsContent';

function SpecsSheet( { list } ) {
  return (
    <div className="shadow-lg rounded-xl p-10 border mt-10">
        <h2 className="text-3xl font-bold mb-10">Specifications</h2>
        <Accordion className="shadow-lg rounded-xl" collapsible="true" type="multiple">
            
            <AccordionItem value="general">
            <AccordionTrigger title={"General"}/>
            <AccordionContent>
                <SpecsContent category={"General"} list={list} />
            </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tuner">
            <AccordionTrigger title={"Tuner"} />
            <AccordionContent>
                <SpecsContent category={"Tuner"} list={list}/>
            </AccordionContent>
            </AccordionItem>

            <AccordionItem value="usb-playback">
            <AccordionTrigger title={"USB Media Playback"} />
            <AccordionContent>
                <SpecsContent category={"USBMediaPlayback"} list={list}/>
            </AccordionContent>
            </AccordionItem>

            <AccordionItem value="bluetooth">
            <AccordionTrigger title={"Bluetooth"} />
            <AccordionContent>
                <h2 className="font-medium text-md my-6 underline">Bluetooth Handsfree</h2>
                <SpecsContent category={"Bluetooth_Handsfree"} list={list}/>
                <h2 className="font-medium text-md my-6 underline">Bluetooth Media</h2>
                <SpecsContent category={"Bluetooth_Media"} list={list}/>
                <h2 className="font-medium text-md my-6 underline">Bluetooth Technology</h2>
                <SpecsContent category={"Bluetooth_Technology"} list={list}/>
            </AccordionContent>
            </AccordionItem>

            <AccordionItem value="camera">
            <AccordionTrigger title={"Camera"} />
            <AccordionContent>
                <SpecsContent category={"Camera"}  list={list}/>
            </AccordionContent>
            </AccordionItem>

            <AccordionItem value="voice-recognition">
            <AccordionTrigger title={"Voice Recognition"} />
            <AccordionContent>
                <SpecsContent category={"VoiceRecognition"}  list={list}/>
            </AccordionContent>
            </AccordionItem>

            <AccordionItem value="apple-carplay">
            <AccordionTrigger title={"Carplay"} />
            <AccordionContent>
                <SpecsContent category={"Carplay"}  list={list}/>
            </AccordionContent>
            </AccordionItem>

            <AccordionItem value="android-auto">
            <AccordionTrigger title={"Android Auto"} />
            <AccordionContent>
                <SpecsContent category={"AndroidAuto"}  list={list}/>
            </AccordionContent>
            </AccordionItem>

            <AccordionItem value="weblink">
            <AccordionTrigger title={"Weblink"} />
            <AccordionContent>
                <SpecsContent category={"Weblink"}  list={list}/>
            </AccordionContent>
            </AccordionItem>

            <AccordionItem value="other-connections">
            <AccordionTrigger title={"Other Connections"} />
            <AccordionContent>
                <SpecsContent category={"OtherConnections"}  list={list}/>
            </AccordionContent>
            </AccordionItem>

            <AccordionItem value="general-settings">
            <AccordionTrigger title={"General Setting"} />
            <AccordionContent>
                <SpecsContent category={"GeneralSetting"}  list={list}/>
            </AccordionContent>
            </AccordionItem>

            <AccordionItem value="display-settings">
            <AccordionTrigger title={"Display Setting"} />
            <AccordionContent>
                <SpecsContent category={"DisplaySetting"}  list={list}/>
            </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sound-settings">
            <AccordionTrigger title={"Sound Setting"} />
            <AccordionContent>
                <SpecsContent category={"SoundSetting"}  list={list}/>
            </AccordionContent>
            </AccordionItem>

            <AccordionItem value="other-functions">
            <AccordionTrigger title={"Other Functions"} />
            <AccordionContent>
                <SpecsContent category={"OtherFunctions"}  list={list}/>
            </AccordionContent>
            </AccordionItem>

            <AccordionItem value="highlight-functions">
            <AccordionTrigger title={"Highlight Function"} />
            <AccordionContent>
                <SpecsContent category={"HighlightFunction"}  list={list}/>
            </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
  )
}

export default SpecsSheet
