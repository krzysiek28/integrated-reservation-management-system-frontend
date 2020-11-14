import {PersonalDataModel} from './PersonalDataModel';

export class UserModel {
   id: number;
   login: String;
   password: String;
   personalData: PersonalDataModel;
   role: String;
   enabled: Boolean;
}
