import * as React from "react"
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious } from "@/components/ui/carousel"

function CompareSlider( {list}) {
    return (
        <div className="w-[90%] mt-10">
            <Carousel opts={{align: "start",}} className="w-full max-w">
            <CarouselContent>
            {list.map((item, index) => (
                <CarouselItem key={index} className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                    {/* <Card className='bg-[#01A981]'> */}
                    <Card className='bg-[#01A981]'>
                        <CardHeader>
                            <CardTitle className='text-white text-center bg-[#01A970] rounded-full p-2'><span>{item?.General?.manufacturer} {item?.General?.model}</span></CardTitle>
                        </CardHeader>
                        <CardContent className="aspect-square group">
                            {/* Image */}
			                {/* <img src={item?.images[0]?.imageURL} width={'100%'} className=" h-full object-cover rounded-xl duration-300 ease-in-out transition-all group-hover:scale-110"/> */}
			                <img src={item?.images[0]?.imageURL} width={'100%'} className=" h-full object-cover rounded-xl duration-300 ease-in-out transition-all"/>
                        </CardContent>
                        <CardFooter>
                            <CardTitle></CardTitle>
                        </CardFooter>
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