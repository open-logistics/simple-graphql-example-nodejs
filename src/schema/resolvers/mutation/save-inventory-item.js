import { saveInventoryItem } from '../../../store';

export default async (unused, args) => saveInventoryItem(args.data);
