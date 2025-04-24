import { useState } from 'react';
import './SearchBar.css';
import { HiOutlineMagnifyingGlass, HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";


const SearchBar = () => {

    // const [showFilterOptions, setShowFilterOptions] = useState(false);

    // const handleFilterClick = () => {
    //     setShowFilterOptions((visible) => !visible);
    // }

    return (
        <div className="search-bar-container relative w-90">
            <HiOutlineMagnifyingGlass className="search-icon text-lg absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
            <input type="text" className="search-input w-full pl-7 pr-15 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            {/* <div className="filter-icon absolute right-2 top-1/2 -translate-y-1/2">
                <HiOutlineAdjustmentsHorizontal className="text-lg text-gray-500 cursor-pointer hover:text-gray-700" onClick={handleFilterClick} />
            </div> */}

            {/* Show filter option based on click */}
            {/* {showFilterOptions && <SeachOptions />} */}
        </div>
    );
};

// export const SeachOptions = () => {
//     return (
//         <div className='absolute top-[100%] bg-white w-full p-3 rounded-md'>
//             <ul>
//                 <li>Option 1</li>
//                 <li>Option 2</li>
//                 <li>Option 3</li>
//                 <li>Option 4</li>
//                 <li>Option 5</li>
//             </ul>
//         </div>
//     )
// }

export default SearchBar;
