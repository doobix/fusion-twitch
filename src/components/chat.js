// @flow
import React from 'react';
import {styled} from 'fusion-plugin-styletron-react';

type Props = {
  channelLogin: string
}

const ChatWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '340px',
});

const Header = styled('div', {
  flexGrow: 0,
  flexShrink: 1,
  color: 'white',
  backgroundColor: '#99CCFF',
  padding: '5px',
});

const IframeWrapper = styled('div', {
  flexGrow: 1,
  flexShrink: 0,
});

const Chat = (props: Props) => {
  if (!props.channelLogin) {
    return null;
  }

  return (
    <ChatWrapper>
      <Header>
        {props.channelLogin}
      </Header>
      <IframeWrapper>
        <iframe
          frameBorder="0"
          id={props.channelLogin}
          src={`https://www.twitch.tv/embed/${props.channelLogin}/chat`}
          height="100%"
          width="340">
        </iframe>
      </IframeWrapper>
    </ChatWrapper>
  );
};

export default Chat;
