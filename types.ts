interface Image {
  height: number;
  width: number;
  url: string;
}

export interface InstagramUserData {
  full_name: string;
  id: string;
  is_private: boolean;
  is_verified: boolean;
  profile_pic_url: string;
  profile_pic_url_hd: string | null;
  username: string;
}

export interface PostData {
  thumbnail_url:string;
  caption: {
    text: string
  }
}

interface Links {
  href: string;
  label: string;
}

export interface Footer {
  Cards: string[];
  Links: Links[];
}
