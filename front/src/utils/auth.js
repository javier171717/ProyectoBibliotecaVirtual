export async function loginUser(dataUser) {
    try {
        const response = await fetch('http://localhost:3001/users/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataUser)
        });

        if (response.ok) {
            const userData = await response.json();
            return userData;
        } else {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Error en el inicio de sesión');
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error;
    }
}
