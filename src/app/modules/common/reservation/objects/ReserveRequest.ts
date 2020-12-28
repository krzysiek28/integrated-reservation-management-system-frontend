import {PersonalDataModel} from '../../../../objects/models/PersonalDataModel';

export class ReserveRequest {
  userId: number;
  personalDataModel: PersonalDataModel;
  comment: string;
}
