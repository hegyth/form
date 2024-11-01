
import { Dayjs } from 'dayjs';

export interface FormDataType {
  lastName?: string;
  firstName?: string;
  middleName?: string;
  sex?: string;
  birthDate?: Dayjs;
  phoneNumber?: string;
  email?: string;
  address?: string;
  employer?: string;
}

export interface FormDataErrorMessagesType {
  lastName?: string;
  firstName?: string;
  phoneNumber?: string;
  email?: string;
}
