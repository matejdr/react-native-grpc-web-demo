import React, {useState} from 'react';

import {Button, Text, View} from 'react-native';

import {TelemetryGatewayClient} from './lib/teletubby_pb_service';
import {
  RegistrationMessage,
  TelemetryAction,
  TelemetryRequest,
} from './lib/teletubby_pb';

const GRPC_SOURCE_SUBSCRIBED = '/rocos/agent/telemetry/subscribed';
// const GRPC_SOURCE_SOURCES = '/rocos/agent/telemetry/sources';
// const GRPC_SOURCE_NOOP = '/rocos/agent/telemetry/noop';
const GRPC_SOURCE_HEARTBEAT = '/rocos/agent/telemetry/heartbeat';
// const GRPC_SOURCE_VIDEO = '/video/camera';

export default () => {
  const [response, setResponse] = useState<string[]>([]);

  let subscriberId = '';
  async function sendRequestTelemetry() {
    console.log('running again');
    try {
      setResponse([]);

      const url = 'http://api2.rocos.io';
      const token =
        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjU2NTE4ZjJmLWY5ODQtNGY1Ni05MmNjLTEyZjRjNTcwZjU0OSJ9.eyJodHRwczovL3JvY29zLmlvL3RlbmFudCI6eyJhY2NvdW50cyI6W3sibmFtZSI6IlJvY29zIiwicHJvamVjdHMiOlt7Im5hbWUiOiJ0ZWxldHViYnktdGVzdCIsImRlc2NyaXB0aW9uIjoiIiwiaWQiOiJ0ZWxldHViYnktdGVzdCJ9XSwiY3JlYXRlZEF0IjoiMjAxOS0xMC0xNlQyMTowNDozNC4wMDVaIiwiYXV0aGVudGljYXRpb24iOnsic3RyYXRlZ2llcyI6W3sibmFtZSI6Imdvb2dsZS1vYXV0aDIifV19LCJpZCI6InJvY29zLTk1NDAzOCJ9XSwiZW1haWxWZXJpZmllZCI6ZmFsc2V9LCJpYXQiOjE2NDQ1MTk0NzQsImV4cCI6MTY3NTYyMzQ3NCwiYXVkIjoiaHR0cHM6Ly9yb2Nvcy5hdXRoMC5jb20vYXBpL3YyLyIsImlzcyI6Imh0dHBzOi8vcm9jb3MuYXV0aDAuY29tLyIsInN1YiI6ImFwcHwyYjNlNGVkMC0yYjA0LTExZWMtODBhYS1mNzkxMWQ1OTJmMTAifQ.TiavOIm8of-0fFxUdbHw07Qjm_oX3TmUunXoRoHGJWJrabsz-v5V2zeEFQPu5C4dS-7HhewxhV4UDI3EQjhwu0Hs4PrRDAgHIXSIIzvrz7rs0ErvSlle-6kzcK3bdpVbHnQFY8nd4uf3XWj0U01xKYVeFBqoCw1n9PLJ0pV5vr7tozMEf52Bj7GWMGsnX7UtUFleTK56pvVPO09WPlofO-opQhIx99FRHvcP_0ERikGwlZl_RuaGwIUFIt2x7uUDu5VXsUFSoPf0w_Tu24D5A28ttJqgJuGrZdcQknZaETzYxWmR1PUjp08_VJyoZvM2urEm5x-0nDVaMre2nnpTFA';
      const projectId = 'teletubby-test';
      const actionSources = [GRPC_SOURCE_HEARTBEAT];
      const actionCallsigns = ['test-2'];
      console.log('url', url);
      const service = new TelemetryGatewayClient(url);
      const metadata = {
        authorization: token,
        'r-p': projectId,
      } as any;
      const bidirectionalStream = service.registerReceiver(
        new RegistrationMessage(),
        metadata,
      );
      bidirectionalStream.on('data', message => {
        console.log('message', message);
        console.log('source', message.getSource());
        console.log('messagePayload', message.getPayload());
        if (message.getSource() === GRPC_SOURCE_SUBSCRIBED) {
          try {
            const payload = JSON.parse(
              Buffer.from(message.getPayload().toString(), 'base64').toString(),
            );
            console.log('payload', payload);
            subscriberId = payload.subscriberId;
          } catch (e) {
            console.log('e', e);
          }
        }
        setResponse(arr => [
          ...arr,
          message && message.toObject() && JSON.stringify(message.toObject()),
        ]);
      });
      bidirectionalStream.on('end', status => {
        console.log('on end', status);
        setResponse(arr => [
          ...arr,
          `on end: ${status && JSON.stringify(status)}`,
        ]);
      });
      bidirectionalStream.on('status', status => {
        console.log('on status', status);
        setResponse(arr => [
          ...arr,
          `on end: ${status && JSON.stringify(status)}`,
        ]);
      });

      const req = new TelemetryRequest();
      const actions: TelemetryAction[] = [];

      const action = new TelemetryAction();
      action.setOperation('subscribe');
      action.setCallsignsList(actionCallsigns);
      action.setSourcesList(actionSources);
      actions.push(action);

      req.setRequestedactionsList(actions);
      req.setSubscriberid(subscriberId);

      service.requestTelemetry(req, metadata, (err, ack) => {
        console.log('subscribeSources with callsigns callback', err, ack);
      });
    } catch (e) {
      console.error('error', e);
    }
  }

  return (
    <View>
      <Text style={{textAlign: 'center', marginTop: 20}}>
        Send requestTelemetry to rocos server
      </Text>
      <Button
        onPress={() => sendRequestTelemetry()}
        title="Send requestTelemetry!"
        color="#841584"
        accessibilityLabel="Lets hit that grpc server"
      />
      <View style={{justifyContent: 'center'}}>
        {response.map((r, i) => (
          <View key={i}>
            <Text style={{textAlign: 'center', paddingBottom: 5}}>{r}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
