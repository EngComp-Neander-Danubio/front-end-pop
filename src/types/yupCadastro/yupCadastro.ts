import * as yup from 'yup';
export const cadastroSchema = yup.object().shape({
  "title": yup.string().required('Campo obrigatório'),
  "description": yup.string().required('Campo obrigatório'),
  "reference": yup.string().required('Campo obrigatório'),
  "system": yup.string().required('Campo obrigatório'),
  "assunto": yup.string().required('Campo obrigatório'),
  "descriptionAdd": yup.string().optional(),
});

