// List
// {
// id: string,
// title: string,
// cards: Card[],
// listPriority: number
// }

// Card
// {
//   id: string,
//   listItemId: string(foreign key),
//   title: string,
//   commnets: string[],
//   status: string, (like TODO, In progress, done, in testing),
//   priority: string, (like low, medium, high),
//   assignedTo: User[], (to whom it assigned list of ids)
//   reporter: User[],(who reported list of ids),
//   cardPriority: number
// }

// User

// {
//   id: string,
//   name: string,
//   email: string
// }
