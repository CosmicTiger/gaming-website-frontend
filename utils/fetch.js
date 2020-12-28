import { getToken, hasExpiredToken } from "../api/token";

export async function authFetch(url, params, logout) {
    const token = getToken();

    if (!token) {
        // User has not logged in
        logout();
    } else {
        if (hasExpiredToken(token)) {
            // Token has expired
            logout();
        } else {
            const paramsTemp = {
                ...params,
                headers: {
                    ...params?.headers,
                    Authorization: `Bearer ${token}`,
                },
            };

            try {
                const response = await fetch(url, paramsTemp);
                const result = await response.json();
            } catch (error) {
                return error;
            }
        }
    }
}
