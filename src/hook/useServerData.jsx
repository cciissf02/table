import { useState, useEffect } from "react";
import { fetchUserData } from '../services/users';

const useServerData = () => {
  const [contactData, setContactData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const dataFromServer = await fetchUserData();
      setContactData(dataFromServer);
      setIsLoading(false);
    }

    fetchData();
  }, []);
  return { contactData, isLoading, setContactData, setIsLoading };
};

export default useServerData;