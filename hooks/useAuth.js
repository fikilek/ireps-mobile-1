import React, {useContext} from "react";

import {AuthContext} from "../context/authContext";

const useAuth = () => {
	const value = useContext(AuthContext);

	if (!value) {
		throw new Error("useAuth must be wrapped inside AuthContext ");
	}

	return value;
}

export default useAuth;
