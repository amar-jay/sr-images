"use client"
import { useState } from 'react'
import Image from 'next/image'
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function QualitySliderCard() {
  const [sliderValue, setSliderValue] = useState(50)

  return (
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Compare Image Quality</CardTitle>
          <CardDescription>Slide to see the difference between low and high quality</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative h-[400px] overflow-hidden">
            <Image
              src="/favicon.ico"
              alt="High quality image"
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0"
            />
            <div 
              className="absolute top-0 left-0 w-full h-full"
              style={{ 
                clipPath: `inset(0 ${100 - sliderValue}% 0 0)`,
              }}
            >
              <Image
                src="/favicon.ico"
                alt="Low quality image"
                layout="fill"
                objectFit="cover"
                className="filter blur-sm"
              />
            </div>
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white z-30 cursor-ew-resize"
              style={{ left: `${sliderValue}%` }}
            />
          </div>
          <Slider
            value={[sliderValue]}
            onValueChange={(value) => setSliderValue(value[0])}
            max={100}
            step={1}
            className="mt-4"
          />
          <p className="text-sm text-muted-foreground mt-2 text-center">
            Slide to compare: {sliderValue}% Low Quality / {100 - sliderValue}% High Quality
          </p>
        </CardContent>
      </Card>
  )
}