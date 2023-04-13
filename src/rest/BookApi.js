//const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';
const HOUSES_ENDPOINT = 'https://640d4b41b07afc3b0daaeb4e.mockapi.io/books';

class BookApi {

    get = async () => {

        try {
            const resp = await fetch(HOUSES_ENDPOINT);
            const data = await resp.json();
            return data;

        } catch(e) {
            console.log('Opps, looks like fetch Houses had an issue', e);
        }

    }

    put = async (shelf) => {

        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${shelf.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(shelf)

            });
            return await resp.json();

        } catch(e) {
            console.log('Opps, looks like updating our Houses had an issue', e);
        }
    }
}

export const bookApi = new BookApi();