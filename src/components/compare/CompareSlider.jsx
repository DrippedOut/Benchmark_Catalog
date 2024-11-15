import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious } from "@/components/ui/carousel"

function CompareSlider( {list}) {
    return (
        <div className="w-[70%] my-10">
            <Carousel opts={{align: "start",}} className="w-full max-w">
            <CarouselContent>
                {list.map((item, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                    <div className="p-1">
                        <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                <span className="text-3xl font-semibold">{item?.General?.model}</span>
                            </CardContent>
                        </Card>
                    </div>
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