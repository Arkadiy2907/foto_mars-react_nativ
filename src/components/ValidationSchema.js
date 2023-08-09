import * as Yup from 'yup';
import moment from 'moment';

const dateRegex = /^([0-2]{1}[0-9]{1}|3[0-1]{1})\.([0]{1}[0-9]{1}|1{1}[0-2]{1})\.([0-9]{4})$/;

const validationSchema = Yup.object().shape({
  date: Yup.string()
    .matches(dateRegex, 'Дата должна быть в формате dd.mm.yyyy')
    .test('is-valid-date', 'Дата должна быть корректной', value =>
      moment(value, 'DD.MM.YYYY').isValid()
    )
    .required('Дата фото обязательна для заполнения'),
});

export default validationSchema;