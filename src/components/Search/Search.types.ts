import { Dispatch, SetStateAction } from 'react';

export interface ISearchProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
