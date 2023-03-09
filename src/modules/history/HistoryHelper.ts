import {IHistory} from './HistoryTypes';

export class HistoryHelper {
  static getHistory = (history: IHistory[]): IHistory[] => {
    return history.sort((a, b) => Number(b.active) - Number(a.active));
  };
}
