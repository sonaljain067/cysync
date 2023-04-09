import React from 'react'
import {ArrowTrendingUpIcon} from '@heroicons/react/24/outline'
import {WalletIcon} from '@heroicons/react/24/outline'
import {ArrowsRightLeftIcon} from '@heroicons/react/24/outline'
import {WrenchIcon} from '@heroicons/react/24/outline'
import {VideoCameraIcon} from '@heroicons/react/24/outline'
type Props = {}

const Sidebar = (props: Props) => {
  return (
    <>
        <div className="flex h-[47rem] w-[20rem] bg-lightblack rounded-xl m-6 ml-0">
            <div className="pt-5 text-xl">
                <div className="flex items-center pt-12 pl-14 gap-6">
                    <ArrowTrendingUpIcon className="h-6 w-6"/>
                    Portfolio
                </div>
                <div className="pt-12 pl-14 gap-6">
                    <div className="flex items-center gap-6 text-lightorange">
                        <WalletIcon className="h-6 w-6"/>
                        Wallets
                    </div>
                    <div className="flex items-center pt-5 pl-14 gap-6 text-darkorange">
                        Wallet 1
                    </div>
                    <div className="flex items-center gap-6 pl-9 text-xs">
                        <div className="p-1.5 m-2 text-lightgray rounded-full border-2 border-lightgray border-dashed">
                        + add wallet
                    </div></div>
                </div>
                <div className="flex items-center pt-16 pl-14 gap-6">
                    <ArrowsRightLeftIcon className="h-6 w-6"/>
                    Last Transaction
                </div>
                <div className="flex items-center pt-16 pl-14 gap-6">
                    <VideoCameraIcon className="h-6 w-6"/>
                    Tutorial
                </div>
                <div className="flex items-center pt-16 pl-14 gap-6">
                    <WrenchIcon className="h-6 w-6"/>
                    Settings 
                </div>
                <div className="pt-28 pl-20">
                    <div className="flex items-center justify-center bg-brown rounded w-[10rem] p-2">
                        <span>Support</span>
                    </div>
                </div>
            </div>
        </div>
    </>

  )
}

export default Sidebar