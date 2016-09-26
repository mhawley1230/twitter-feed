import React from 'react';


// When clicking on the reply icon, an alert box should pop up with the text "reply".
// When clicking on the retweet icon, an alert box should pop up with the text "retweet".
// When clicking on the like icon, an alert box should pop up with the text "like".
// When clicking on the more icon, an alert box should pop up with the text "favorite".

const Tweet = props => {
  let reply_icon = <i className="fa fa-reply" aria-hidden="true"></i>;
  let more_icon = <i className="fa fa-ellipsis-h" aria-hidden="true"></i>;
  let retweet_icon;
  let favorite_icon;
  let time = new Date(props.timestamp_ms);
  let date = time.toDateString();

  if (props.favorited) {
    favorite_icon = <i className="fa fa-heart liked" aria-hidden="true"></i>;
  } else {
    favorite_icon = <i className="fa fa-heart" aria-hidden="true"></i>;
  };

  if (props.retweeted) {
    retweet_icon = <i className="fa fa-retweet retweeted" aria-hidden="true"></i>;
  } else {
    retweet_icon = <i className="fa fa-retweet" aria-hidden="true"></i>;
  };

  return (
    <div className="row callout twit">
      <img src={props.profile_image_url}/>
      <li>{props.name}</li>
      <li>{props.screen_name}</li>
      <li>{props.text}</li>
      <li>{date}</li>
      <img src={props.media_url}/>
      <img src={props.display_url}/>
      <div className="">
        {favorite_icon}<br></br>
        {props.favorite_count}<br></br>
        {retweet_icon}<br></br>
        {props.retweet_count}
      </div>
    </div>
  );

}

export default Tweet;
