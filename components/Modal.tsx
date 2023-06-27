"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useCallback, useRef } from "react"

type Props = {
    children: React.ReactNode
}

const Modal = ({children}: Props) => {

  const overlay = useRef<HTMLDivElement>(null)
  const wrapper = useRef<HTMLDivElement>(null)

  const router = useRouter()

  const onDismiss = useCallback(() => {
    router.push("/")
  },[router])

  const handleClick = useCallback((e: React.MouseEvent) =>{

    if(e.target === overlay.current && onDismiss){
      onDismiss()
    }
  },[onDismiss, overlay])
  return (
    <div className="modal" ref={overlay} onClick={handleClick}>
      <button type="button" onClick={onDismiss} className="absolute top-4 right-8">
        <Image width={17} height={17} alt="close" src={"/close.svg"}/>
      </button>
        <div ref={wrapper} className="model_wrapper">
            {children}
        </div>
    </div>
  )
}

export default Modal