
const BOOKURL = 'https://640d4b41b07afc3b0daaeb4e.mockapi.io/books';

class BookApi {

    get = async () => {

        try {
            const resp = await fetch(BOOKURL);
            const data = await resp.json();
            return data;

        } catch(e) {
            console.log('Opps, looks like fetch Houses had an issue', e);
        }

    }

    put = async (shelf) => {

        try {
            const resp = await fetch(`${BOOKURL}/${shelf.id}`, {
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