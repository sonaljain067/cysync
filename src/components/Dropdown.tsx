import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import {ArrowsUpDownIcon} from '@heroicons/react/24/outline';
interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownProps {
  label: string;
  items: DropdownItem[];
  isOpen: boolean;
  onChange: (value: string) => void;
  onToggle: (value: boolean) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ isOpen, label, items, onChange, onToggle}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [isOpened, setIsOpened] = useState(isOpen);

  const handleItemClick = (item: DropdownItem) => {
    setSelectedItem(item);
    onChange(item.value);
    setIsOpened(!isOpened);
  };
  const handleToggleClick = () => {
    setIsOpened(!isOpened);
  };
  
  return (
    <div className="relative inline-block text-left font-medium">
      <div>
      
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex justify-center w-full px-4 py-2 text-base text-lightgray border-gray-300  focus:outline-none"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={handleToggleClick}
          >
            <ArrowsUpDownIcon className='h-8 w-8 text-darkorange pr-2 pb-2'/> 
            {selectedItem.label}
            <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1 text-darkorange" aria-hidden="true" />
          </button>
        </span>
      </div>

    {isOpened && <div className="absolute right-0 z-10 -mt-1 w-52 rounded-md shadow-lg bg-bgblack text-darkblack border border-offblack pl-4">
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
          {items.map((item) => (
            <button
              key={item.value}
              onClick={() => handleItemClick(item)}
              className={`${
                selectedItem.value === item.value ? 'text-lightorange font-bold' : 'text-lightgray'
              } block px-4 py-2 text-sm`}
              role="menuitem"
              tabIndex={-1}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>}
    </div>
  );
};

export default Dropdown;
