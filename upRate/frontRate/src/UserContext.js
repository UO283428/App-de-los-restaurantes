import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const initialBulkData = {
  id: "",
  generalRating: 0,
  questions: [],
  finalText: "",
  lastPage: "",
};

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [bulkData, setBulkData] = useState(() => {
    try {
      const savedData = localStorage.getItem('bulkData');
      return savedData ? JSON.parse(savedData) : initialBulkData;
    } catch (error) {
      console.error("Failed to parse stored data", error);
      return initialBulkData;
    }
  });

  /**
  useEffect(() => {
    const { id } = useParams();
    setBulkData({ ...prevData, id: id });
  }, []);
  */
 
  useEffect(() => {
    localStorage.setItem('bulkData', JSON.stringify(bulkData));
  }, [bulkData]);

  const value = {
    bulkData,
    setBulkData,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;