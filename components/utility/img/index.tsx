"use client"

import type { ImageProps } from "next/image"
import NextImage from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

const Img = (props: ImageProps) => {
  const {
    alt,
    className,
    height,
    loading = "eager",
    priority = false,
    src,
    quality = 100,
    width,
    placeholder,
    blurDataURL,
  } = props
  const [loaded, setLoaded] = useState(false)

  return (
    <NextImage
      alt={alt}
      className={cn("h-full w-full block transition duration-300", loaded ? "opacity-100" : "opacity-0", className)}
      loading={loading}
      onLoad={() => setLoaded(true)}
      priority={priority}
      src={src}
      quality={quality}
      {...(blurDataURL && { blurDataURL })}
      {...(placeholder && { placeholder })}
      {...(height && { height })}
      {...(width && { width })}
    />
  )
}

export { Img }
