import React,{useState} from 'react'
export interface Wallet {
    id: number;
    coin: string;
    holding: string;
    value: number;
    price: number;
    coinImg: string;
  }

import HandlePopup from "@/components/handlePopup"
import {ArrowDownLeftIcon} from '@heroicons/react/24/outline'
import {ArrowUpRightIcon} from '@heroicons/react/24/outline'
import Dropdown from './Dropdown';

const WalletList: React.FC = (  ) =>{
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleDropdownChange = (value: string) => {
    setSelectedValue(value);
  };
  const toggleDropdown = (isOpen: boolean) => {
    setIsOpen(!isOpen);
  };
  const closePopup = () => {
    console.log('clicked')
  };
  const wallets: Wallet[] = [
      {
        id: 1,
        coin: "BTC",
        holding: "BTC 0.00256",
        value: 12345,
        price: 10000,
        coinImg: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=013",
      },
      {
        id: 2,
        coin: "ETH",
        holding: "ETH 0.0025600",
        value: 12345,
        price: 1000,
        coinImg: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=013",
      },
      {
        id: 3,
        coin: "LTC",
        holding: "BNB 0.0025600",
        value: 12345,
        price: 100,
        coinImg: "https://cryptologos.cc/logos/litecoin-ltc-logo.svg?v=013",
      },
      {
        id: 4,
        coin: "BTC",
        holding: "BTC 0.00256",
        value: 12345,
        price: 10000,
        coinImg: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=013",
      },
      {
        id: 5,
        coin: "BTC",
        holding: "BTC 0.00256",
        value: 12345,
        price: 10000,
        coinImg: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=013",
      },
      {
        id: 6, 
        coin: "ETH",
        holding: "ETH 0.0025600",
        value: 12345,
        price: 1000,
        coinImg: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=013",
      },
      {
        id: 7,
        coin: "LTC",
        holding: "BNB 0.0025600",
        value: 12345,
        price: 100,
        coinImg: "https://cryptologos.cc/logos/litecoin-ltc-logo.svg?v=013",
      },
  ];
  const dropdownItems = [
    { label: 'Amount - High to Low', value: 'amountHighToLow' },
    { label: 'Amount - Low to High', value: 'amountLowToHigh' },
    { label: 'Price - High to Low', value: 'priceHighToLow' },
    { label: 'Price - Low to High', value: 'priceLowToHigh' },
  ];
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleReceiveClick = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };
    return (
        <>
          <div className="flex p-2 rounded-sm mr-20 items-center my-2 mx-4">
            <div className="">
                <div className="text-lightorange text-2xl font-bold">
                    <h3>Wallet 1</h3>
                </div>
            </div>
            <div className="flex ml-[68.5rem] text-base">
              <div className="pt-3 pl-6 pr-6 pb-3 border-1.5 border-darkgray rounded-sm shadow bg-lightblack text-lightorange">
                    + Add Coin
                </div>
            </div>
          </div>

          <div className="flex border border-offblack p-2 rounded-sm bg-lightblack mr-20 items-center m-2 font-bold">
            <div className="pl-4">
                <div className="text-lightgray text-xl">
                    <h3>Total Coins:</h3>
                </div>
            </div>
            <div className="flex ml-[58rem]">
              <Dropdown label="Sort By" items={dropdownItems} onChange={handleDropdownChange} isOpen={isOpen} onToggle={toggleDropdown} />
            </div>
          </div>
        
          <div className="shadow overflow-hidden rounded-lg text-lightgray p-2 mr-20 font-bold text-lg">
            {wallets.map((wallet) => (
              <div key={wallet.id} className="my-2.5 w-full py-3 border-2 border-offblack">
                <div className="flex justify-center p-2 gap-28">
                 
                  <div className="flex flex-row gap-6">
                    {/* <div className="flex-shrink-0 h-10 w-10"> */}
                      <img className="h-10 w-10 rounded-full" src={wallet.coinImg} alt={wallet.coin} />
                    {/* </div> */}
                    <div className="mt-2">{wallet.coin}</div>
                  </div>
                  <div className="mt-2">
                    <div className="">{(wallet.value)}</div>
                  </div>
                  <div className="mt-2">
                    <div className=" ">{wallet.holding}</div>
                  </div>
                  <div className="mt-2">
                    <div className="">{(wallet.price)}</div>
                  </div>
                  <div className="mt-2">
                    <button className="flex items-center text-blue" onClick={handleReceiveClick}>
                        <div className="flex-shrink-0">
                          <ArrowDownLeftIcon className='h-6 w-6'/>
                        </div>
                        <div className="ml-4">
                          <div className="">RECIEVE</div>
                        </div>
                    </button>
                    {isPopupOpen && <HandlePopup onClose={handlePopupClose} />}
                  </div>
                  <div className="mt-2">
                    <div className="flex items-center text-darkorange">
                          <div className="flex-shrink-0">
                          <ArrowUpRightIcon className='h-6 w-6'/>
                          </div>
                          <div className="ml-4">
                            <div className="text-lg">SEND</div>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
            ))}
          </div> 
        </>
    )
}
export default WalletList
