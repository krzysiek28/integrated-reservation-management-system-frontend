import {PersonalDataModel} from './PersonalDataModel';

export class UserModel {
   id: number;
   login: string;
   personalData: PersonalDataModel;
   role: string;
   enabled: Boolean;
   email: string;
}
