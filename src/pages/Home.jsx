import React from 'react'
import Card_block from '../UI_Components/Card_block'
import Filtr_panel from '../UI_Components/Filtr_panel'
import WLine from '../UI_Components/Items/WLine'
export default function Home() {
    return (
        <div className=' max-w-[1200px] mx-auto p-4'>
            <Filtr_panel />
            <WLine />
            <Card_block/>
        </div>
    )
}
