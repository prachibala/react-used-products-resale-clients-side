import { useEffect, useState } from "react";

const useToken = (email) => {
	const [token, setToken] = useState(undefined);

	useEffect(() => {
		if (email) {
			fetch(`${process.env.REACT_APP_server_url}/jwt?email=${email}`)
				.then((res) => res.json())
				.then((data) => {
					if (data.accessToken) {
						localStorage.setItem("accessToken", data.accessToken);
						setToken(data.accessToken);
					}
				})
				.catch((err) => console.log(err));
		}
	}, [email]);

	return [token];
};

export default useToken;
