import { createContext, useContext, useState } from "react";

// import { EVENTS_DATA } from "../constants";

interface EventFilters {
    searchQuery: string;
    city: string;
    category: string;
    startTime: string;
    endTime: string;
}

interface EventFilterContextType {
    filters: EventFilters;
    setFilters: (updates: Partial<EventFilters>) => void;
    // filteredEvents: typeof EVENTS_DATA;
}

const EventFilterContext = createContext<EventFilterContextType | undefined>(undefined);

export const EventFilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [filters, setFiltersState] = useState<EventFilters>({
        searchQuery: "",
        city: "",
        category: "",
        startTime: "",
        endTime: "",
    });

    const setFilters = (updates: Partial<EventFilters>) => {
        setFiltersState(prev => ({ ...prev, ...updates }));
    };

    // const filteredEvents = useMemo(() => {
    //     return EVENTS_DATA.filter(event => {
    //         return (
    //             (!filters.category || event.category === filters.category) &&
    //             (!filters.isoDate || event.isoDate === filters.isoDate) &&
    //             (!filters.location || event.location.includes(filters.location)) &&
    //             (!filters.searchQuery || event.title.toLowerCase().includes(filters.searchQuery.toLowerCase()))
    //         );
    //     });
    // }, [filters]);

    return (
        <EventFilterContext.Provider value={{ filters, setFilters }}>
            {children}
        </EventFilterContext.Provider>
    );
};

export const useEventFilter = () => {
    const context = useContext(EventFilterContext);
    if (!context) {
        throw new Error("useEventFilter must be used within an EventFilterProvider");
    }
    return context;
};
