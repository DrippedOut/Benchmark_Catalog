import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Accordion,AccordionItem,AccordionTrigger,AccordionContent} from "@/components/ui/accordion";
import CompareSlider from "./components/compare/CompareSlider";

function Compare() {
	return (
		<div>
			<Header />
			<div className="px-10 md:px-20 my-10">
				<div className="flex justify-between items-center mb-10">
				<h2 className="text-4xl font-bold">Compare Head-unit Specs</h2>
				</div>

				<div className="flex justify-center">
					<CompareSlider />
				</div>

				<Accordion className="shadow-lg rounded-xl" collapsible="true" type="multiple">
					
					<AccordionItem value="general">
						<AccordionTrigger title={"General"}/>
						<AccordionContent>

						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="tuner">
						<AccordionTrigger title={"Tuner"} />
							<AccordionContent>

							</AccordionContent>
					</AccordionItem>

					<AccordionItem value="usb-playback">
						<AccordionTrigger title={"USB Media Playback"} />
							<AccordionContent>

							</AccordionContent>
					</AccordionItem>

					<AccordionItem value="bluetooth">
						<AccordionTrigger title={"Bluetooth"} />
							<AccordionContent>

							</AccordionContent>
					</AccordionItem>

					<AccordionItem value="camera">
						<AccordionTrigger title={"Camera"} />
							<AccordionContent>

							</AccordionContent>
					</AccordionItem>

					<AccordionItem value="voice-recognition">
						<AccordionTrigger title={"Voice Recognition"} />
							<AccordionContent>

							</AccordionContent>
					</AccordionItem>

					<AccordionItem value="apple-carplay">
						<AccordionTrigger title={"Carplay"} />
							<AccordionContent>

							</AccordionContent>
					</AccordionItem>

					<AccordionItem value="android-auto">
						<AccordionTrigger title={"Android Auto"} />
							<AccordionContent>

							</AccordionContent>
					</AccordionItem>

					<AccordionItem value="weblink">
						<AccordionTrigger title={"Weblink"} />
							<AccordionContent>

							</AccordionContent>
					</AccordionItem>

					<AccordionItem value="other-connections">
						<AccordionTrigger title={"Other Connections"} />
							<AccordionContent>

							</AccordionContent>
					</AccordionItem>

					<AccordionItem value="general-settings">
						<AccordionTrigger title={"General Setting"} />
							<AccordionContent>

							</AccordionContent>
					</AccordionItem>

					<AccordionItem value="display-settings">
						<AccordionTrigger title={"Display Setting"} />
							<AccordionContent>

							</AccordionContent>
					</AccordionItem>

					<AccordionItem value="sound-settings">
						<AccordionTrigger title={"Sound Setting"} />
							<AccordionContent>

							</AccordionContent>
					</AccordionItem>

					<AccordionItem value="other-functions">
						<AccordionTrigger title={"Other Functions"} />
							<AccordionContent>

							</AccordionContent>
					</AccordionItem>

					<AccordionItem value="highlight-functions">
						<AccordionTrigger title={"Highlight Function"} />
							<AccordionContent>

							</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
			<Footer />
		</div>
	);
}

export default Compare;
