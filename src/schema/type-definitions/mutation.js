export default `
type Mutation {
	saveInventoryItem(data: InventoryItemInput!): InventoryItem!
	incrementInventoryItem(data: InventoryItemInput!): InventoryItem!
	deleteInventoryItem(key: String!, location: String!): InventoryItem
}
`;
