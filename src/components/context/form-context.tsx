import React, { createContext, useContext, useState } from "react";

interface FormData {
    name: string;
    email: string;
    phoneNumber: string;
    eventName: string;
    startDate: string;
    endDate: string;
    eventVenue: string;
    city: string;
    state: string;
}

interface FormContextProps {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    resetFormData: () => void;
    updateFormData: (id: string, value: string) => void;
    validateField: (id: string, value: string) => string;
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
}

const ListYourEventFormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [step , setStep] = useState<number>(1);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phoneNumber: '',
        eventName: '',
        startDate: '',
        endDate: '',
        eventVenue: '',
        city: '',
        state: '',
    });

    const resetFormData = () => {
        setFormData({
            name: '',
            email: '',
            phoneNumber: '',
            eventName: '',
            startDate: '',
            endDate: '',
            eventVenue: '',
            city: '',
            state: '',
        });
    };

    const updateFormData = (id: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [id]: value.trimStart(), 
        }));
    };

    const validateField = (id: string, value: string) => {
        if (id === "email") {
            return value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Invalid email address" : "";
        }
        if (id === "phoneNumber") {
            return value && !/^\d{10}$/.test(value) ? "Invalid phone number" : "";
        }
        return "";
    };

    return (
        <ListYourEventFormContext.Provider value={{ formData, setFormData, resetFormData, step , setStep , updateFormData, validateField }}>
            {children}
        </ListYourEventFormContext.Provider>
    );
};

export const useFormContext = () => {
    const context = useContext(ListYourEventFormContext);
    if (!context) {
        throw new Error("useFormContext must be used within a FormProvider");
    }
    return context;
};
