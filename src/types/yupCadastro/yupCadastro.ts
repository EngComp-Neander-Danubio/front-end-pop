import * as yup from 'yup';
export const cadastroSchema = yup.object().shape({
  "title": yup.string().required('Campo obrigatório'),
  "description": yup.string().required('Campo obrigatório'),
  "reference": yup.string().optional(),
  "system": yup.string().optional(),
  "assunto": yup.string().optional(),
  "descriptionAdd": yup.string().optional(),
});

