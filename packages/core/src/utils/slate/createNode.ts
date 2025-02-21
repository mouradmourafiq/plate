import { TElement } from '../../slate/element/TElement';

export const createNode = (type = 'p', text = ''): TElement => ({
  type,
  children: [{ text }],
});
