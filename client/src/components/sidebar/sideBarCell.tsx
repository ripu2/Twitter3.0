import { useRouter } from 'next/router'
import React, { MouseEventHandler } from 'react'
import { IconContainer, SideBarCells } from './styles'

interface SiceBarCellProps{
    text: string,
    icon: any,
    isActive?: boolean,
    redirect?: string,
    setSelected: MouseEventHandler<HTMLDivElement>
}

function SideBarCell(props: SiceBarCellProps) {
  const router = useRouter()
  
  return (
    <SideBarCells onClick={(e: any) =>{
      props.setSelected(e)
      router.push(props.redirect as string)
    }}>
        <IconContainer>
            <props.icon />
        </IconContainer>
        {props.text}
    </SideBarCells>
  )
}

export default SideBarCell