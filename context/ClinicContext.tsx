import React, {createContext, useContext, useEffect, useState} from "react";
import {ClinicContextType} from "../models/context/ClinicContextType";
import {Clinic} from "../models/Clinic";
import {ClinicApi} from "../api/ClinicApi";
import {CLINIC_ID, CLINIC_NAME, CLINIC_PHONE, NOS} from "../constants/constants";
import {UserContext} from "./UserContext";
import {toast} from "react-toastify";





const defaultSettings: ClinicContextType = {
    currentClinic: null,
    clinicModifier: (clinic: Clinic | null) => {},
};

export const ClinicContext = createContext<ClinicContextType>(defaultSettings);

export const ClinicContextProvider = ({ children }: React.PropsWithChildren) => {
    const [currentClinic, setCurrentClinic] = useState<Clinic | null>(null);
    const {currentUser} = useContext(UserContext);
    const clinicModifier = (clinic: Clinic  | null) => {
        setCurrentClinic(clinic);
    };

    useEffect(() => {
        try {
            if (!currentClinic && currentUser) {
                ClinicApi.getMyClinic().then(r => {
                    if(!r.data){
                        clinicModifier({
                            id: Number(localStorage.getItem(CLINIC_ID)),
                            name: localStorage.getItem(CLINIC_NAME) as "",
                            phoneNumber:localStorage.getItem(CLINIC_PHONE) as "",
                            numberOfSeats:Number(localStorage.getItem(NOS))
                        });
                    }else{
                        clinicModifier(r.data);
                    }
                });

            }
        }catch (error){
            toast.error("Bład serwera")
        }

    }, [currentClinic,currentUser]);

    return (
        <ClinicContext.Provider value={{ currentClinic, clinicModifier}}>
            {children}
        </ClinicContext.Provider>
    );
};


