//const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';
const HOUSES_ENDPOINT = 'https://640d4b41b07afc3b0daaeb4e.mockapi.io/Houses';

class HousesApi {

    get = async () => {

        try {
            const resp = await fetch(HOUSES_ENDPOINT);
            const data = await resp.json();
            return data;

        } catch(e) {
            console.log('Opps, looks like fetch Houses had an issue', e);
        }

    }

    put = async (house) => {

        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)

            });
            return await resp.json();

        } catch(e) {
            console.log('Opps, looks like updating our Houses had an issue', e);
        }
    }
}

export const houseApi = new HousesApi();