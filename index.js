import { AppRegistry,YellowBox  } from 'react-native';
import App from './App';
import SocketDemo from './src/Socket/Main'
import AppMain from './src/App'
import User from './src/TabNavigator/User'
import Notification from './src/TabNavigator/Nofication'
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: componentWillUpdate is deprecated',
  'Warning: isMounted(...) is deprecated'
]);
AppRegistry.registerComponent('LiveStreamingByTeamVT', () => AppMain);
