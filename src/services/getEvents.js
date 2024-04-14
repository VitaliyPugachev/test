const baseUrl = 'http://5.35.88.152:6000/';

export const getEvents = async (id) => {
    const response = await fetch(baseUrl + id);

    if (!response.ok) {
        throw Error('Data fetching error!');
    }

    return await response.json();
}
