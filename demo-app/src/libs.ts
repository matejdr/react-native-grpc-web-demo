import {grpc} from '@improbable-eng/grpc-web';
// import {ReactNativeTransport} from '@improbable-eng/grpc-web-react-native-transport';
import {ReactNativeTransport} from './ReactNativeTransport';
grpc.setDefaultTransport(ReactNativeTransport({withCredentials: true}));
