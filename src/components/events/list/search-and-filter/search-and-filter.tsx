import { CiSearch } from "react-icons/ci";

import Dropdown from "../../../common/dropdown/dropdown";
import {
    Container,
    DropdownWrapper,
    FilterContainer,
    SearchContainer,
    SearchIconWrapper,
    SearchInput,
    SubContainer
} from "./styles";
import { useEventFilter } from "../../../context/event-filter-context";

export const LOCATIONS = ['Bengaluru', 'Delhi', 'Gurugram', 'Mumbai'];
export const EVENT_CATEGORIES = ['Music', 'Theater', 'Workshop'];
export const DATES = ['Today', 'Tomorrow', 'This Weekend'];

const SearchAndFilter = () => {
    const { filters, setFilters } = useEventFilter();

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
                        value={filters.searchQuery}
                        onChange={(e) => setFilters({ searchQuery: e.target.value })}
                    />
                </SearchContainer>

                <FilterContainer>
                    <DropdownWrapper>
                        <Dropdown
                            label="Date"
                            options={DATES}
                            selectedValue={filters.date}
                            onSelect={(value) => setFilters({ date: value })}
                        />
                    </DropdownWrapper>

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
                            selectedValue={filters.location}
                            onSelect={(value) => setFilters({ location: value })}
                        />
                    </DropdownWrapper>
                </FilterContainer>
            </SubContainer>
        </Container>
    );
}

export default SearchAndFilter;
