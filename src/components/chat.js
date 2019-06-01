// @flow
import React from 'react';
import {styled} from 'fusion-plugin-styletron-react';

type Props = {
  channelLogin: string
}

const Chat = (props: Props) => {
  if (!props.channelLogin) {
    return null;
  }

  return (
    <iframe
      // frameborder="<frameborder width>"
      // scrolling="<scrolling>"
      id={props.channelLogin}
      src={`https://www.twitch.tv/embed/${props.channelLogin}/chat`}
      height="100%"
      width="340">
    </iframe>
  );
};

export default Chat;
