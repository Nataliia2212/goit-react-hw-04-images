import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function serchImages(configParams) {
    const { data } = await axios.get('', {
		params: {
			key: '35439381-dc6c31f5e4218074de9a0ab23',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: '12',
    	...configParams,
		},
    })
	  return data

}