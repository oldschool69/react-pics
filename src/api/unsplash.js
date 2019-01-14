import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID eb4ba1c63778a9d1140d96cfa38075f7ba02dbfc208d048e89c49f9919ce4493'
	}
});
