import * as React from 'react';
import AuthStore from '../modules/auth/AuthStore';

class RootStore {
  authStore: AuthStore;

  constructor() {
    this.authStore = new AuthStore();
  }

  sync = async () => {
    await Promise.all(
      Object.values(this).map(store => {
        return store?.sync ? store?.sync() : Promise.resolve();
      }),
    );
  };
}

const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
