import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Users } from './users.model';

export enum UsersActionTypes {
  LoadUserss = '[Users] Load Userss',
  AddUsers = '[Users] Add Users',
  UpsertUsers = '[Users] Upsert Users',
  AddUserss = '[Users] Add Userss',
  UpsertUserss = '[Users] Upsert Userss',
  UpdateUsers = '[Users] Update Users',
  UpdateUserss = '[Users] Update Userss',
  DeleteUsers = '[Users] Delete Users',
  DeleteUserss = '[Users] Delete Userss',
  ClearUserss = '[Users] Clear Userss'
}

export class LoadUserss implements Action {
  readonly type = UsersActionTypes.LoadUserss;

  constructor(public payload: { userss: Users[] }) {}
}

export class AddUsers implements Action {
  readonly type = UsersActionTypes.AddUsers;

  constructor(public payload: { users: Users }) {}
}

export class UpsertUsers implements Action {
  readonly type = UsersActionTypes.UpsertUsers;

  constructor(public payload: { users: Users }) {}
}

export class AddUserss implements Action {
  readonly type = UsersActionTypes.AddUserss;

  constructor(public payload: { userss: Users[] }) {}
}

export class UpsertUserss implements Action {
  readonly type = UsersActionTypes.UpsertUserss;

  constructor(public payload: { userss: Users[] }) {}
}

export class UpdateUsers implements Action {
  readonly type = UsersActionTypes.UpdateUsers;

  constructor(public payload: { users: Update<Users> }) {}
}

export class UpdateUserss implements Action {
  readonly type = UsersActionTypes.UpdateUserss;

  constructor(public payload: { userss: Update<Users>[] }) {}
}

export class DeleteUsers implements Action {
  readonly type = UsersActionTypes.DeleteUsers;

  constructor(public payload: { id: string }) {}
}

export class DeleteUserss implements Action {
  readonly type = UsersActionTypes.DeleteUserss;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearUserss implements Action {
  readonly type = UsersActionTypes.ClearUserss;
}

export type UsersActions =
 LoadUserss
 | AddUsers
 | UpsertUsers
 | AddUserss
 | UpsertUserss
 | UpdateUsers
 | UpdateUserss
 | DeleteUsers
 | DeleteUserss
 | ClearUserss;
