export const fetchUserData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();
      return data.users;
    } catch (error) {
      console.error("Error:", error);
      return [];
    }
};