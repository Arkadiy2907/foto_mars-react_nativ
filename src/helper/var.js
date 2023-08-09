export const varCam = [
  { label: 'Front Hazard Avoidance Camera', value: 'FHAZ', id: 0 },
  { label: 'Rear Hazard Avoidance Camera', value: 'RHAZ', id: 1 },
  { label: 'Mast Camera', value: 'MAST', id: 2 },
  { label: 'Chemistry and Camera Complex', value: 'CHEMCAM', id: 3 },
  { label: 'Mars Hand Lens Imager', value: 'MAHLI', id: 4 },
  { label: 'Mars Descent Imager', value: 'MARDI', id: 5 },
  { label: 'Navigation Camera', value: 'NAVCAM', id: 6 },
  { label: 'Panoramic Camera', value: 'PANCAM', id: 7 },
  { label: 'Miniature Thermal Emission Spectrometer (Mini-TES)', value: 'MINITES', id: 8 },
]

export const getLabel = v => varCam.find(el => el.value === v).label;

const key = '3hG9LrKvhAqlZDQ6lO8L1RamMiyMdmg0rySFlVFJ';//временный ключ
const demoKey = 'DEMO_KEY';//подставить если временный ключ перестал работать
export const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${key}`


const getUrlFormatDate = d => {
  let day = d.getDate()
  let month = d.getMonth() + 1
  let year = d.getFullYear()
  return `${year}-${month}-${day}`
}

const getCorrectDate = d => {
  const currentDate = new Date();
  const minData = new Date(1976, 0, 1)
  const userDate = new Date(d.split('.').reverse().join("-"));

  if ((minData.getTime() <= userDate.getTime())
    && (userDate.getTime() <= currentDate.getTime())) return getUrlFormatDate(userDate);

  if (minData.getTime() >= userDate.getTime()) return getUrlFormatDate(minData);
  if ((userDate.getTime() >= currentDate.getTime())) return getUrlFormatDate(currentDate);
}

export const getUrl = (d, c) => `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${getCorrectDate(d)}&camera=${c.toLowerCase()}&api_key=${key}`


export const formaScreentDate = (d) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const [day, monthNum, year] = d.split('.');
  const month = months[parseInt(monthNum) - 1];

  return `${day} ${month}, ${year}`;
}