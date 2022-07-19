// import { createContext, useContext, useState } from "react";

// const LoadContext = createContext();

// const initialLoadDataState = ["React Context API"]

// const DataProvider = ({children}) => {
//     const [loaddata, setLoadData] = useState(initialLoadDataState);

//     const contextValue = {
//         loadData,
//     }

//     return <LoadContext.Provider value={contextValue}>{children}</LoadContext.Provider>
// }

// export const useDataContext = () => useContext(DataContext);

// export default DataProvider;