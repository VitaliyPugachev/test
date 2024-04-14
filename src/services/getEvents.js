const baseUrl = 'http://localhost:5500/';

export const getEvents = async (id) => {
    const response = await fetch(baseUrl + id);

    if (!response.ok) {
        throw Error('Data fetching error!');
    }

    return await response.json();
}
