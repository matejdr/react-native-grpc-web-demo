import React, {useState} from 'react';

import {Button, Text, View} from 'react-native';

import {EchoClient, ServiceError} from './lib/echo_pb_service';
import {EchoRequest, EchoResponse} from './lib/echo_pb';

export default () => {
  const [response, setResponse] = useState<string[]>([]);

  const setIntervalX = (
    callback: (x: number) => void,
    closeCallback: (x: number) => void,
    delay: number,
    repetitions: number,
  ): void => {
    let x = 0;
    const intervalID = setInterval(function () {
      callback(x);

      if (++x === repetitions) {
        clearInterval(intervalID);
        closeCallback(x);
      }
    }, delay);
  };

  async function sendUnaryEcho() {
    try {
      setResponse([]);

      const url = 'http://192.168.0.165:9000';
      console.log('url', url);
      const service = new EchoClient(url);

      const request = new EchoRequest();
      request.setMessage('This is my Unary message.');
      const metadata = {
        // 'custom-header-1': 'value1',
      } as any;
      service.unaryEcho(
        request,
        metadata,
        (err: ServiceError | null, res: EchoResponse | null) => {
          console.log('response', err, res);
          setResponse(arr => [
            ...arr,
            (res && res.getMessage()) || (err && err.message) || '',
          ]);
        },
      );
    } catch (e) {
      console.error('error', e);
    }
  }

  async function sendServerStreamingEcho() {
    try {
      setResponse([]);

      const url = 'http://192.168.0.165:9000';
      console.log('url', url);
      const service = new EchoClient(url);

      const request = new EchoRequest();
      request.setMessage('This is my ServerStreaming message.');
      const metadata = {
        // 'custom-header-1': 'value1',
      } as any;
      const serverStream = service.serverStreamingEcho(request, metadata);
      serverStream.on('data', message => {
        console.log('message', message);
        console.log('message1', message.getMessage());
        setResponse(arr => [...arr, message && message.getMessage()]);
      });
      serverStream.on('end', status => {
        console.log('on end', status);
        setResponse(arr => [
          ...arr,
          `on end: ${status && JSON.stringify(status)}`,
        ]);
      });
      serverStream.on('status', status => {
        console.log('on status', status);
        setResponse(arr => [
          ...arr,
          `on end: ${status && JSON.stringify(status)}`,
        ]);
      });
    } catch (e) {
      console.error('error', e);
    }
  }

  async function sendBidirectionalStreamingEcho() {
    console.log('running again');
    try {
      setResponse([]);

      const url = 'http://192.168.0.165:9000';
      console.log('url', url);
      const service = new EchoClient(url);

      const metadata = {
        // 'custom-header-1': 'value1',
      } as any;
      const bidirectionalStream = service.bidirectionalStreamingEcho(metadata);
      bidirectionalStream.on('data', message => {
        console.log('message', message);
        console.log('message1', message.getMessage());
        setResponse(arr => [...arr, message && message.getMessage()]);
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

      let counter = 1;
      const request = new EchoRequest();
      request.setMessage(
        `This is BidirectionalStreaming message number: ${counter}.`,
      );
      bidirectionalStream.write(request);
      counter++;
      request.setMessage(
        `This is BidirectionalStreaming message number: ${counter}.`,
      );
      bidirectionalStream.write(request);
      counter++;
      request.setMessage(
        `This is BidirectionalStreaming message number: ${counter}.`,
      );
      bidirectionalStream.write(request);
      counter++;

      const delay = 3000;
      setIntervalX(
        x => {
          const delayString = Math.floor((delay * (x + 1)) / 1000) + 's';
          request.setMessage(
            `This is BidirectionalStreaming message number: ${counter} with delay of ${delayString}.`,
          );
          bidirectionalStream.write(request);
          counter++;
        },
        x => {
          console.log('closing connection after repeats: ', x);
          bidirectionalStream.end();
        },
        delay,
        2,
      );
    } catch (e) {
      console.error('error', e);
    }
  }

  return (
    <View>
      <Text style={{textAlign: 'center', marginTop: 20}}>
        Send Echo to gRPC
      </Text>
      <Button
        onPress={() => sendUnaryEcho()}
        title="Send unaryEcho!"
        color="#841584"
        accessibilityLabel="Lets hit that grpc server"
      />
      <Button
        onPress={() => sendServerStreamingEcho()}
        title="Send serverStreamingEcho!"
        color="#841584"
        accessibilityLabel="Lets hit that grpc server"
      />
      <Button
        onPress={() => sendBidirectionalStreamingEcho()}
        title="Send bidirectionalStreamingEcho!"
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
