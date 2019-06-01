// @flow
import React from 'react';
import { styled } from 'fusion-plugin-styletron-react';
import Chat from './../components/chat';

const Center = styled('div', {
  fontFamily: 'HelveticaNeue-Light, Arial',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
});

const FullHeightDiv = styled('div', {
  height: '100%',
  backgroundColor: '#FFFFFF',
});

const Header = styled('div', {
  color: 'white',
  height: '50px',
  backgroundColor: '#336699',
});

const Nav = styled('div', {
  height: '50px',
  backgroundColor: '#6699CC',
});

type State = {
  channels: Array<string>,
  channelInput: string
}

class Home extends React.Component<{}, State> {
  state = {
    channels: [],
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
            <input onChange={this.onChangeChannelInput} placeholder="Twitch channel name" value={this.state.channelInput} />
            <button onClick={this.addChannel}>Add!</button>
          </Center>
        </Nav>
        <Center>
          {this.state.channels.map((channel) => (
            <Chat channelLogin={channel} key={channel} />
          ))}
        </Center>
      </FullHeightDiv>
    );
  }

  onChangeChannelInput = (event) => {
    this.setState({
      channelInput: event.target.value,
    });
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
