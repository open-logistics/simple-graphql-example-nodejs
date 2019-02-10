export default `
type Query {
	getInventoryItem(key: String!, location: String!): InventoryItem
	listInventoryItems(location: String): [InventoryItem!]!
}
`;
