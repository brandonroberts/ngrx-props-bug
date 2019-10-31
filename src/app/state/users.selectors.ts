import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsers from './users.reducer';


export const selectUsersState = createFeatureSelector<fromUsers.State>('users');
export const selectActiveUser = createSelector(
  selectUsersState,
  state => state.selectedUserId
);

export const selectUserEntities = createSelector(
  selectUsersState,
  fromUsers.selectEntities
);

export const selectUserWithoutProps = createSelector(
  selectUserEntities,
  selectActiveUser,
  (entities, id) => entities[id]
);

export const selectUserWithProps = createSelector(
  selectUserEntities,
  (entities, { id }) => entities[id]
);