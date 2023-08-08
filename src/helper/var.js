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

const key = '3hG9LrKvhAqlZDQ6lO8L1RamMiyMdmg0rySFlVFJ';
const demoKey = 'DEMO_KEY';
export const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${key}`
