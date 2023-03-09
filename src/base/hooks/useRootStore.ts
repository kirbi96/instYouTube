import * as React from 'react';
import {storesContext} from '../RootStore';

export const useRootStore = () => React.useContext(storesContext);
