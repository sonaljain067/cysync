import React from 'react'
import { LockClosedIcon } from '@heroicons/react/24/outline'
import {CheckCircleIcon} from '@heroicons/react/24/outline'
import {ArrowsUpDownIcon} from '@heroicons/react/24/outline'
type Props = {}

const Header = (props: Props) => {
  return (
    <>
        <div className="flex justify-end mr-20">
            <div className="flex items-center gap-3 text-base px-16">
                <CheckCircleIcon className="h-6 w-6 text-blue"/>
                <span className="text-lightorange text-xl">Synchronized</span>
            </div>
            
            <div className="mx-2 border-1.5 border-darkgray rounded-sm shadow p-1 bg-lightblack">
                <CheckCircleIcon className='h-6 w-6 text-blue'/> 
            </div>
            <div className="px-2 mx-3 border-1.5 border-darkgray rounded-sm shadow p-1 bg-lightblack">
                <LockClosedIcon className='h-6 w-6 text-lightorange'/>
            </div>
            
        </div>
        
    </>
  )
}

export default Header