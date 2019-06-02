// @flow
import React from 'react';
import { styled } from 'fusion-plugin-styletron-react';
import Chat from './../components/chat';

const Center = styled('div', {
  fontFamily: 'HelveticaNeue-Light, Arial',
  display: 'flex',
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
});

const FullHeightDiv = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

const Header = styled('div', {
  color: 'white',
  backgroundColor: '#336699',
  padding: '10px',
});

const Nav = styled('div', {
  backgroundColor: '#6699CC',
  padding: '10px',
});

const Chats = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flexGrow: '1',
  overflow: 'auto',
});

type State = {
  channels: Array<string>,
  channelInput: string
}

class Home extends React.Component<{}, State> {
  state = {
    channels: ['doobix'],
    channelInput: '',
  };

  render() {
    return (
      <FullHeightDiv>
        <style>
          {`
            html,body,#root{height:100%;}
            html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}
            body{margin:0;}
            button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}
            input::-webkit-inner-spin-button,input::-webkit-outer-spin-button,input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}
            `}
        </style>
        <Header>
          <Center>
            Fusion Twitch
          </Center>
        </Header>
        <Nav>
          <Center>
            <input
              onChange={this.onChangeChannelInput}
              onKeyDown={this.onKeyDown}
              placeholder="Twitch channel name"
              value={this.state.channelInput}
            />
            <button onClick={this.addChannel}>Add!</button>
          </Center>
        </Nav>
        <Chats>
          {this.state.channels.map((channel) => (
            <Chat channelLogin={channel} key={channel} />
          ))}
        </Chats>
      </FullHeightDiv>
    );
  }

  onChangeChannelInput = (event) => {
    this.setState({
      channelInput: event.target.value,
    });
  }

  onKeyDown = (event) => {
    if (event.keyCode === 13) {
      this.addChannel();
    }
  }

  addChannel = () => {
    if (!this.state.channelInput) {
      return;
    }

    const channels = [...this.state.channels]
    channels.push(this.state.channelInput);
    this.setState({
      channels,
      channelInput: "",
    });
  }
}

export default Home;
