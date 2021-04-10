import {
  CHANGE_CURRENT_STORY,
  CLOSE_OVERLAY,
  SHOW_ALL_STORIES,
  SHOW_SINGLE_POST
} from './action'

export interface IUser {
  firstName: string
  lastName: string
  profileImage: string
  status: 'ONLINE' | 'OFFLINE'
}
export interface IPost {
  user: IUser
  date: string
  description: string
  ImageList: string[]
}
export interface IStory {
  user: IUser
  imageList: string[]
}
export interface IState {
  friends: IUser[]
  suggestions: IUser[]
  stories: IStory[]
  posts: IPost[]
  showOverlay: boolean
  currentPost: IPost
  currentStory: IStory
  OverlayType: string // 'POST' | 'STORY'
}
export interface IPayload {
  post?: IPost
  story?: IStory
}
export interface IAction {
  type: string
  payload: IPayload
}

export default function reducer(state = initialState, action: IAction) {
  switch (action.type) {
    case SHOW_ALL_STORIES:
      return {
        ...state,
        showOverlay: true,
        OverlayType: 'STORY',
        currentStory: action.payload.story!
      }
    case SHOW_SINGLE_POST:
      return {
        ...state,
        showOverlay: true,
        OverlayType: 'POST',
        currentPost: action.payload.post!
      }
    case CLOSE_OVERLAY:
      return {
        ...state,
        showOverlay: false
      }
    case CHANGE_CURRENT_STORY:
      return {
        ...state,
        currentStory: action.payload.story!
      }
    default:
      return state
  }
}
const Diane: IUser = {
  firstName: 'Diana',
  lastName: 'LeCou',
  status: 'ONLINE',
  profileImage: './img/users/user_1.png'
}

const Roland: IUser = {
  firstName: 'Roland',
  lastName: 'Kab',
  status: 'OFFLINE',
  profileImage: './img/users/user_2.png'
}

const Stephane: IUser = {
  firstName: 'Stéphane',
  lastName: 'Bergoli',
  status: 'OFFLINE',
  profileImage: './img/users/user_3.png'
}

const Ana: IUser = {
  firstName: 'Ana',
  lastName: 'Gouchi',
  status: 'ONLINE',
  profileImage: './img/users/user_4.png'
}

const Yelwin: IUser = {
  firstName: 'Yelwin',
  lastName: 'Na',
  status: 'ONLINE',
  profileImage: './img/users/user_5.png'
}
const Jhon: IUser = {
  firstName: 'Jhon',
  lastName: 'Dipapa',
  status: 'OFFLINE',
  profileImage: './img/users/user_6.png'
}
const Jazz: IUser = {
  firstName: 'Jazz',
  lastName: 'Collection',
  status: 'ONLINE',
  profileImage: './img/users/user_7.png'
}
const Dog: IUser = {
  firstName: 'Dog',
  lastName: 'Mania',
  status: 'OFFLINE',
  profileImage: './img/users/user_8.png'
}
const Flower: IUser = {
  firstName: 'Flower',
  lastName: 'Mia',
  status: 'ONLINE',
  profileImage: './img/users/user_9.png'
}
const initialState: IState = {
  friends: [Jazz, Dog, Yelwin, Jhon],
  suggestions: [Ana, Stephane, Roland],
  showOverlay: false,
  currentPost: {
    date: '12/20',
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    user: Diane,
    ImageList: []
  },
  currentStory: {
    user: Diane,
    imageList: [
      './img/stories/user_1_1.png',
      './img/stories/user_1_2.png',
      './img/stories/user_1_3.png'
    ]
  },
  OverlayType: 'STORY',
  stories: [
    {
      user: Diane,
      imageList: [
        './img/stories/user_1_1.png',
        './img/stories/user_1_2.png',
        './img/stories/user_1_3.png'
      ]
    },
    {
      user: Roland,
      imageList: ['./img/stories/user_2_1.png', './img/stories/user_2_2.jpg']
    },
    {
      user: Stephane,
      imageList: ['./img/stories/user_3_1.png']
    },
    {
      user: Ana,
      imageList: ['./img/stories/user_4_1.png', './img/stories/user_4_2.png']
    },
    {
      user: Yelwin,
      imageList: [
        './img/stories/user_5_1.png',
        './img/stories/user_5_2.png',
        './img/stories/user_5_3.png'
      ]
    },
    {
      user: Flower,
      imageList: [
        './img/stories/user_9_1.png',
        './img/stories/user_9_2.png',
        './img/stories/user_9_3.png',
        './img/stories/user_9_4.png'
      ]
    },
    {
      user: Jhon,
      imageList: ['./img/stories/user_6_1.png', './img/stories/user_6_2.png']
    },
    {
      user: Jazz,
      imageList: [
        './img/stories/user_7_1.png',
        './img/stories/user_7_2.png',
        './img/stories/user_7_3.png'
      ]
    },
    {
      user: Dog,
      imageList: [
        './img/stories/user_8_1.png',
        './img/stories/user_8_2.png',
        './img/stories/user_8_3.png'
      ]
    }
  ],
  posts: [
    {
      date: '12/20',
      description:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
      user: Diane,
      ImageList: []
    },
    {
      date: '12/20',
      description:
        'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte.',
      user: Diane,
      ImageList: ['./img/stories/user_1_1.png']
    },
    {
      date: '12/20',
      description:
        'Le lorem ipsum est, en imprimerie, une suite de mots sans signification.',
      user: Diane,
      ImageList: [
        './img/stories/user_1_1.png',
        './img/stories/user_2_1.png',
        './img/stories/user_3_1.png',
        './img/stories/user_4_1.png',
        './img/stories/user_5_1.png',
        './img/stories/user_6_1.png',
        './img/stories/user_7_1.png'
      ]
    },
    {
      date: '12/20',
      description:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
      user: Diane,
      ImageList: ['./img/stories/user_1_2.png', './img/stories/user_4_2.png']
    }
  ]
}
