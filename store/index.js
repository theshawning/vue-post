export const state = () => {
  return {
    posts: [
      {
        title: "My First Post",
        subtitle: "My First Subtitle",
        _id: 1,
        createdOn: new Date(),
        isRead: false
      },
      {
        title: "My Second Post",
        subtitle: "My Second Subtitle",
        _id: 2,
        createdOn: new Date(),
        isRead: true
      }
    ]
  }
}