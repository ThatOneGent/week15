
const BOOKURL = 'https://640d4b41b07afc3b0daaeb4e.mockapi.io/books';

class BookApi {

    get = async () => {

        try {
            const resp = await fetch(BOOKURL);
            const data = await resp.json();
            return data;

        } catch(e) {
            console.log('Opps, looks like fetching bookshelf', e);
        }

    }

    post = async (shelf) => {
        try {
            const resp = await fetch(`${BOOKURL}`,{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(shelf)
            });
            return await resp.json();
        } catch(e) {
            console.log('oops the add bookshelf didnt work.')
        }
        //return $.post(this.url, plant);
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
            console.log('Opps, looks like updating bookshelf had an issue', e);
        }
    }

    delete = async (shelf) => {
        try {
            const resp = await fetch(`${BOOKURL}/${shelf.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(shelf)

            });
            return await resp.json();

        } catch(e) {
            console.log('Opps, looks like deleting shelf had an issue', e);
        }

    }
}

export const bookApi = new BookApi();