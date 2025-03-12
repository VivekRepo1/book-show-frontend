import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

import useDebounce from "../../../hooks/useDebounce";
import Dropdown from "../../../common/dropdown/dropdown";
import {
    Container,
    DropdownWrapper,
    FilterContainer,
    SearchContainer,
    SearchIconWrapper,
    SearchInput,
    SubContainer,
    ClearFiltersButton,
    DropdownWrapper1
} from "./styles";
import { useEventFilter } from "../../../context/event-filter-context";

export const LOCATIONS = ['Hisar', 'Delhi', 'Gurugram', 'Mumbai'];
export const EVENT_CATEGORIES = ['Music', 'Theater', 'Festival', 'Comedy'];
export const DATES = ['Today', 'Tomorrow', 'This Weekend'];

const SearchAndFilter = () => {
    const { filters, setFilters } = useEventFilter();
    const [searchQuery, setSearchQuery] = useState(filters.searchQuery);

    const debouncedSearchQuery = useDebounce(searchQuery, 1000);

    const isFilterApplied = filters.searchQuery || filters.category || filters.city;

    const clearFilters = () => {
        setFilters({
            searchQuery: "",
            category: "",
            city: "",
            startTime: "",
            endTime: "",
        });
    };

    useEffect(() => {
        if (debouncedSearchQuery !== filters.searchQuery) {
            setFilters({ searchQuery: debouncedSearchQuery });
        }
    }, [debouncedSearchQuery, filters, setFilters]);

    return (
        <Container>
            <SubContainer>
                <SearchContainer>
                    <SearchIconWrapper>
                        <CiSearch size={16} color="#666" />
                    </SearchIconWrapper>
                    <SearchInput
                        type="text"
                        placeholder="Search for events"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </SearchContainer>

                <FilterContainer>
                    <DropdownWrapper1 value={filters.startTime}>
                        <input
                            type="date"
                            value={filters.startTime}
                            onChange={(e) => setFilters({ startTime: e.target.value, endTime: e.target.value })}
                        />
                        {!filters.startTime && <span className="placeholder">Select Date</span>}
                    </DropdownWrapper1>

                    <DropdownWrapper>
                        <Dropdown
                            label="Category"
                            options={EVENT_CATEGORIES}
                            selectedValue={filters.category}
                            onSelect={(value) => setFilters({ category: value })}
                        />
                    </DropdownWrapper>

                    <DropdownWrapper>
                        <Dropdown
                            label="Location"
                            options={LOCATIONS}
                            selectedValue={filters.city}
                            onSelect={(value) => setFilters({ city: value })}
                        />
                    </DropdownWrapper>

                    <ClearFiltersButton
                        onClick={clearFilters}
                        disabled={!isFilterApplied}
                    >
                        Clear All Filters
                    </ClearFiltersButton>
                </FilterContainer>
            </SubContainer>
        </Container>
    );
};

export default SearchAndFilter;




// import { CiSearch } from "react-icons/ci";
// import Dropdown from "../../../common/dropdown/dropdown";
// import {
//     Container,
//     DropdownWrapper,
//     FilterContainer,
//     SearchContainer,
//     SearchIconWrapper,
//     SearchInput,
//     SubContainer,
//     ClearFiltersButton,
//     DropdownWrapper1
// } from "./styles";
// import { useEventFilter } from "../../../context/event-filter-context";
// import { useState, useEffect } from "react";

// export const LOCATIONS = ['Hisar', 'Delhi', 'Gurugram', 'Mumbai'];
// export const EVENT_CATEGORIES = ['Music', 'Theater', 'Festival', 'Comedy'];
// export const DATES = ['Today', 'Tomorrow', 'This Weekend'];

// const SearchAndFilter = () => {
//     const { filters, setFilters } = useEventFilter();
//     const [searchQuery, setSearchQuery] = useState(filters.searchQuery);  // Local state for input

//     const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);  // State for managing timeout

//     // Check if any filter is applied
//     const isFilterApplied = filters.searchQuery || filters.category || filters.city;

//     // Function to clear all filters
//     const clearFilters = () => {
//         setFilters({
//             searchQuery: "",
//             category: "",
//             city: ""
//         });
//     };

//     const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const value = e.target.value;
//         setSearchQuery(value);

//         if (timer) {
//             clearTimeout(timer);
//         }

//         const newTimer = setTimeout(() => {
//             setFilters({ searchQuery: value });
//         }, 2000);

//         setTimer(newTimer);
//     };

//     useEffect(() => {
//         return () => {
//             if (timer) {
//                 clearTimeout(timer);
//             }
//         };
//     }, [timer]);

//     return (
//         <Container>
//             <SubContainer>
//                 <SearchContainer>
//                     <SearchIconWrapper>
//                         <CiSearch size={16} color="#666" />
//                     </SearchIconWrapper>
//                     <SearchInput
//                         type="text"
//                         placeholder="Search for events"
//                         value={searchQuery} // Use the local state for input
//                         onChange={handleSearchChange} // Update local state with delay
//                     />
//                 </SearchContainer>

//                 <FilterContainer>
//                     <DropdownWrapper1 value={filters.startTime}>
//                         <input
//                             type="date"
//                             value={filters.startTime}
//                             onChange={(e) => setFilters({ startTime: e.target.value })}
//                         />
//                         {!filters.startTime && <span className="placeholder">Select Date</span>}
//                     </DropdownWrapper1>

//                     <DropdownWrapper>
//                         <Dropdown
//                             label="Category"
//                             options={EVENT_CATEGORIES}
//                             selectedValue={filters.category}
//                             onSelect={(value) => setFilters({ category: value })}
//                         />
//                     </DropdownWrapper>

//                     <DropdownWrapper>
//                         <Dropdown
//                             label="Location"
//                             options={LOCATIONS}
//                             selectedValue={filters.city}
//                             onSelect={(value) => setFilters({ city: value })}
//                         />
//                     </DropdownWrapper>

//                     <ClearFiltersButton
//                         onClick={clearFilters}
//                         disabled={!isFilterApplied}
//                     >
//                         Clear All Filters
//                     </ClearFiltersButton>
//                 </FilterContainer>
//             </SubContainer>
//         </Container>
//     );
// };

// export default SearchAndFilter;
