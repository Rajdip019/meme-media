export interface MemeRedditMain {
    meme : {
        kind: string,
        data: {
          children : MemeRedditChildern[] 
        }
      }
}

export interface MemeRedditChildern {
    data : {
        id: string,
        title: string,
        post_hint: string,
        created: number,
        url_overridden_by_dest: string,
        author: string,
        subreddit_name_prefixed: string,
        ups: number
    }
}