import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

// import { useEventFilter } from './event-filter-context';
import { EventService } from '../../service/event-service';

interface EventContextType {
    events: any;
    isFetching: boolean;
    setEvents: (events: any) => void;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

interface EventProviderProps {
    children: ReactNode;
}

export const EventProvider = ({ children }: EventProviderProps) => {
    const [events, setEvents] = useState<any>(null);

    const eventService = new EventService();

    const { data, isFetching } = useQuery<Event[], Error>({
        queryKey: ["get-events"],
        queryFn: () => eventService.getAll(),
    });

    useEffect(() => {
        setEvents(data);
    }, [data]);

    return (
        <EventContext.Provider value={{ events, isFetching, setEvents }}>
            {children}
        </EventContext.Provider>
    );
};

export const useEventContext = (): EventContextType => {
    const context = useContext(EventContext);
    if (!context) {
        throw new Error('useEventContext must be used within an EventProvider');
    }
    return context;
};
