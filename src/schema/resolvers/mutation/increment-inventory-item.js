import { incrementInventoryItem } from '../../../store';

export default async (unused, args) => incrementInventoryItem(args.data);
