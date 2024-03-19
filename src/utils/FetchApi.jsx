const { VITE_APP_BASE_URL, VITE_APP_API_KEY, VITE_APP_SEARCH_ENGINE } = import.meta.env;

export const fetchData = async (term, startIndex) => {
    try {
        const res = await fetch(`${VITE_APP_BASE_URL}?key=${VITE_APP_API_KEY}&cx=${VITE_APP_SEARCH_ENGINE}&q=${term}&start=${startIndex}`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}