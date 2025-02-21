import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { IAvatarGroupProps } from "../types/AvatarGroupdProps"

const ViewImage = ({ row }: IAvatarGroupProps) => {
    const [open, setOpen] = useState(false)

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div
                    className="flex -space-x-4 cursor-pointer transition-all duration-200"
                    onClick={() => setOpen(true)}
                >
                    {row?.img.map((img, index) => (
                        <Avatar
                            key={index}
                            className="size-8 antialiased border-2 border-background transition-transform hover:scale-110"
                            style={{
                                zIndex: row.img.length - index,
                                transform: `translateX(${index * 4}px)`,
                            }}
                        >
                            <AvatarImage src={img} alt={`${row.name} ${index + 1}`} className="object-cover" />
                            <AvatarFallback className="text-sm bg-primary/10">{row.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                    ))}
                </div>
            </DialogTrigger>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>{row.name}</DialogTitle>
                        <DialogDescription>Identification images of {row.name}</DialogDescription>
                    </DialogHeader>
                    <div className="p-12 flex items-center justify-center">

                        <Carousel className="w-full max-w-xs">
                            <CarouselContent>
                                {row?.img.map((img, index) => (
                                    <CarouselItem key={index}>
                                        <div className="p-1">
                                            <div className="flex aspect-square items-center justify-center p-2">
                                                <LazyLoadImage
                                                    src={img || "/placeholder.svg"}
                                                    alt={`${row.name} ${index + 1}`}
                                                    className="rounded-lg object-cover w-full h-full"
                                                />
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </DialogContent>
            </Dialog>
        </Dialog>
    )
}

export default ViewImage
