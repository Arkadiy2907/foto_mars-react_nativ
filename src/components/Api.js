import axios from 'axios';
import { getUrl } from '../helper/var';

const pressHandler = (v, linkToSelect, setIsLoading) => {
  setIsLoading(true);
  let images = [];

  axios.get(getUrl(v.date, v.camera))
    .then(response => {
      for (const { id, img_src: imgSrc } of response?.data?.photos) {
        images.push({ id, imgSrc });
      }
      linkToSelect([[v], images]);
    })
    .catch(error => {
      console.log('error=', error);
    })
    .finally(() => {
      setIsLoading(false);
    });
};

export default pressHandler;