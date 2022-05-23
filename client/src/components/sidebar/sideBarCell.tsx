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
  return (
    <SideBarCells onClick={() => props.setSelected()}>
        <IconContainer>
            <props.icon />
        </IconContainer>
        {props.text}
    </SideBarCells>
  )
}

export default SideBarCell