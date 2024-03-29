let initialState = {
  messageData: {
    messageMe: [
      {
        id: 1,
        text: "hi",
      },
    ],
    messageFriend: [
      {
        id: 1,
        text: "hi",
        img: "https://img.championat.com/s/735x490/news/big/c/g/foto-rajan-gosling-v-obraze-kena-dlya-filma-barbi_16553112791320986632.jpg",
      },
      {
        id: 2,
        text: "hi, whats up?",
        img: "https://img.championat.com/s/735x490/news/big/c/g/foto-rajan-gosling-v-obraze-kena-dlya-filma-barbi_16553112791320986632.jpg",
      },
      {
        id: 3,
        text: "fine, u?",
        img: "https://img.championat.com/s/735x490/news/big/c/g/foto-rajan-gosling-v-obraze-kena-dlya-filma-barbi_16553112791320986632.jpg",
      },
      {
        id: 4,
        text: "me too",
        img: "https://img.championat.com/s/735x490/news/big/c/g/foto-rajan-gosling-v-obraze-kena-dlya-filma-barbi_16553112791320986632.jpg",
      },
    ],
  },
  dialogData: [
    {
      id: 1,
      name: "Andrew",
      img: "https://img.championat.com/s/735x490/news/big/c/g/foto-rajan-gosling-v-obraze-kena-dlya-filma-barbi_16553112791320986632.jpg",
    },
    {
      id: 2,
      name: "Dmitry",
      img: "https://www.film.ru/sites/default/files/images/Blade%20Runner%202049(5).jpg",
    },
    {
      id: 3,
      name: "Sveta",
      img: "https://avatars.dzeninfra.ru/get-zen_doc/1711766/pub_5db8204935c8d800b142bbe9_5db8a30c9c944600ada3be65/scale_1200",
    },
    {
      id: 4,
      name: "Valera",
      img: "https://umagazine.ru/upload/resize_cache/iblock/376/650_1200_1/376f81f15ab28a5c14cb85b862a710c8.jpg",
    },
    {
      id: 5,
      name: "Natasha",
      img: "https://img02.rl0.ru/afisha/e904x508p378x0f1407x804q85i/s5.afisha.ru/mediastorage/ba/15/03baed9171884f73b32189d115ba.jpg",
    },
    {
      id: 6,
      name: "Vika",
      img: "https://kinotv.ru/upload/delight.webpconverter/upload/setka-editor/e0e/crsurf5wnto9y8rfnrrw058aoog63fdy.jpg.webp?1657792254106012",
    },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEND_MESSAGE": {
      let body = action.body;
      return {
        ...state,
        messageData: {
          ...state.messageData,
          messageMe: [...state.messageData.messageMe, { id: 7, text: body }],
        },
      };
    }
    default:
      return state;
  }
};

export const addMessage = (body) => ({ type: "SEND_MESSAGE", body });

export default dialogsReducer;
