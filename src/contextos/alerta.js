import { createContext, useState, useContext } from "react";

export const AlertaContext = createContext();
AlertaContext.displayName = "Alerta";

export default function AlertaProvider({ children }) {
    const [alerta, setAlerta] = useState(false);

    return (
        <AlertaContext.Provider
        value={{alerta, setAlerta }}>
            {children}
        </AlertaContext.Provider>
    )
}

export function useAlertaContext(){
    const { alerta, setAlerta } = useContext(AlertaContext);
    
    function exibirAlerta(valorBooleano) {
        setAlerta(valorBooleano);
    }
    return {
        alerta,
        exibirAlerta
    }
}