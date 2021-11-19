const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: "https://source.unsplash.com/400x271/?shopping,caps",
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: "https://source.unsplash.com/421x261/?shopping,jackets",
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: "https://source.unsplash.com/421x261/?shopping,sneakers",
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: "https://source.unsplash.com/800x490/?womens,jackets",
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: "https://source.unsplash.com/800x490/?shopping,mens",
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
