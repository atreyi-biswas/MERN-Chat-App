const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "Rimi",
        email: "rimi@example.com",
      },
      {
        name: "Sriti",
        email: "sriti@example.com",
      },
    ],
    _id: "617a077e18c25468bc7c4dd4",
    chatName: "Rimi",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Guest User",
        email: "guest@example.com",
      },
      {
        name: "Sriti",
        email: "sriti@example.com",
      },
    ],
    _id: "617a077e18c25468b27c4dd4",
    chatName: "Guest User",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Atreyi",
        email: "atreyi@example.com",
      },
      {
        name: "Sriti",
        email: "sriti@example.com",
      },
    ],
    _id: "617a077e18c2d468bc7c4dd4",
    chatName: "Atreyi",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Rimi",
        email: "rimi@example.com",
      },
      {
        name: "Sriti",
        email: "sriti@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "617a518c4081150716472c78",
    chatName: "Friends",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Rimi",
        email: "rimi@example.com",
      },
      {
        name: "Sriti",
        email: "sriti@example.com",
      },
    ],
    _id: "617a077e18c25468bc7cfdd4",
    chatName: "Rimi",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Rimi",
        email: "rimi@example.com",
      },
      {
        name: "Sriti",
        email: "sriti@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "617a518c4081150016472c78",
    chatName: "Chill Zone",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
];

module.exports = chats;