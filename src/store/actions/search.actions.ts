import { Action } from '@ngrx/store';

export enum SearchActionTypes {
  LoadHotKeyWord = '[Search] Load LoadHotKeyWord',
  LoadResultList = '[Search] Load LoadResultList',
  ChangeValue = '[Search] ChangeValue'
}

export class LoadSearchHotKeyWord implements Action {
  readonly type = SearchActionTypes.LoadHotKeyWord;
}

export class LoadSearchResultList implements Action {
  readonly type = SearchActionTypes.LoadResultList;
  constructor(public payload: { key: string; value: any }) { };
}

export class ChangeSearchValue implements Action {
  readonly type = SearchActionTypes.ChangeValue;
  constructor(public payload: { key: string; value: any }) { };
}



// export type SearchActions = LoadHotKeyWord;
