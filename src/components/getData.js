import {axiosWithAuth} from '../helpers/axiosWithAuth';

const getColorData = () => {
  return axiosWithAuth()
    .get('/colors')
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    })
}

export default getColorData;