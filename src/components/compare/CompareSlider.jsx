import * as React from "react"
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious } from "@/components/ui/carousel"
import SlideShow from "./../specs/SlideShow";

function CompareSlider( {list}) {
    return (
        <div className="w-[90%] mt-10">
        <Carousel opts={{align: "start",}} className="w-full max-w">
        <CarouselContent>
            {list.map((item, index) => (
            <CarouselItem key={index} className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3">
                <Card className='bg-white border shadow-lg'>
                    <CardContent className="p-4 group">
                        <div className="relative group w-full h-[250px] rounded-xl bg-white p-1">
                            <SlideShow img={item?.images}/>
                        </div>
                    </CardContent>
                    <CardHeader className='p-2'>
                        <CardTitle className='text-black text-center bg-white mb-8'><h2 className="font-light text-3xl">{item?.General?.manufacturer} {item?.General?.model}</h2></CardTitle>
                    </CardHeader>
                </Card>
            </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
        </div>
      )
}

export default CompareSlider