import { AppRegistry } from 'react-native';
import 'intl';
import 'intl/locale-data/jsonp/en';
import App from './src/app';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
