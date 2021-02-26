import {axiosWithAuth} from '../helpers/axiosWithAuth';

const getColorData = () => {
  return axiosWithAuth()
    .get('/colors')
    .then(res => {
      return (res.data);
    })
    .catch(err => {
      console.log(err);
    })
}

export default getColorData;