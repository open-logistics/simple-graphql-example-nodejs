import { getInventoryItem } from '../../../store';

export default async (unused, args) => getInventoryItem(args);
