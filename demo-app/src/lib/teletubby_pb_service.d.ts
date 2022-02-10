// package: teletubby.v1
// file: teletubby.proto

import * as teletubby_pb from "./teletubby_pb";
import {grpc} from "@improbable-eng/grpc-web";

type TelemetryReceiverRegisterStreamReceiver = {
  readonly methodName: string;
  readonly service: typeof TelemetryReceiver;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof teletubby_pb.ReceiverStreamMessage;
  readonly responseType: typeof teletubby_pb.TelemetryStreamMessage;
};

type TelemetryReceiverRequestTelemetry = {
  readonly methodName: string;
  readonly service: typeof TelemetryReceiver;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof teletubby_pb.TelemetryRequest;
  readonly responseType: typeof teletubby_pb.TelemetryRequestAck;
};

type TelemetryReceiverRequestTelemetryQuery = {
  readonly methodName: string;
  readonly service: typeof TelemetryReceiver;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof teletubby_pb.TelemetryQueryRequest;
  readonly responseType: typeof teletubby_pb.TelemetryRequestAck;
};

export class TelemetryReceiver {
  static readonly serviceName: string;
  static readonly RegisterStreamReceiver: TelemetryReceiverRegisterStreamReceiver;
  static readonly RequestTelemetry: TelemetryReceiverRequestTelemetry;
  static readonly RequestTelemetryQuery: TelemetryReceiverRequestTelemetryQuery;
}

type TelemetryGatewayRegisterSender = {
  readonly methodName: string;
  readonly service: typeof TelemetryGateway;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof teletubby_pb.RegistrationMessage;
  readonly responseType: typeof teletubby_pb.ConfigMessage;
};

type TelemetryGatewayRegisterReceiver = {
  readonly methodName: string;
  readonly service: typeof TelemetryGateway;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof teletubby_pb.RegistrationMessage;
  readonly responseType: typeof teletubby_pb.TelemetryMessage;
};

type TelemetryGatewaySendTelemetry = {
  readonly methodName: string;
  readonly service: typeof TelemetryGateway;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof teletubby_pb.TelemetryMessage;
  readonly responseType: typeof teletubby_pb.TelemetryStreamAck;
};

type TelemetryGatewaySendTelemetryMessage = {
  readonly methodName: string;
  readonly service: typeof TelemetryGateway;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof teletubby_pb.TelemetryMessage;
  readonly responseType: typeof teletubby_pb.TelemetryMessageAck;
};

type TelemetryGatewayRequestTelemetry = {
  readonly methodName: string;
  readonly service: typeof TelemetryGateway;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof teletubby_pb.TelemetryRequest;
  readonly responseType: typeof teletubby_pb.TelemetryRequestAck;
};

type TelemetryGatewayRequestTelemetryQuery = {
  readonly methodName: string;
  readonly service: typeof TelemetryGateway;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof teletubby_pb.TelemetryQueryRequest;
  readonly responseType: typeof teletubby_pb.TelemetryRequestAck;
};

export class TelemetryGateway {
  static readonly serviceName: string;
  static readonly RegisterSender: TelemetryGatewayRegisterSender;
  static readonly RegisterReceiver: TelemetryGatewayRegisterReceiver;
  static readonly SendTelemetry: TelemetryGatewaySendTelemetry;
  static readonly SendTelemetryMessage: TelemetryGatewaySendTelemetryMessage;
  static readonly RequestTelemetry: TelemetryGatewayRequestTelemetry;
  static readonly RequestTelemetryQuery: TelemetryGatewayRequestTelemetryQuery;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class TelemetryReceiverClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  registerStreamReceiver(metadata?: grpc.Metadata): BidirectionalStream<teletubby_pb.ReceiverStreamMessage, teletubby_pb.TelemetryStreamMessage>;
  requestTelemetry(
    requestMessage: teletubby_pb.TelemetryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: teletubby_pb.TelemetryRequestAck|null) => void
  ): UnaryResponse;
  requestTelemetry(
    requestMessage: teletubby_pb.TelemetryRequest,
    callback: (error: ServiceError|null, responseMessage: teletubby_pb.TelemetryRequestAck|null) => void
  ): UnaryResponse;
  requestTelemetryQuery(
    requestMessage: teletubby_pb.TelemetryQueryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: teletubby_pb.TelemetryRequestAck|null) => void
  ): UnaryResponse;
  requestTelemetryQuery(
    requestMessage: teletubby_pb.TelemetryQueryRequest,
    callback: (error: ServiceError|null, responseMessage: teletubby_pb.TelemetryRequestAck|null) => void
  ): UnaryResponse;
}

export class TelemetryGatewayClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  registerSender(requestMessage: teletubby_pb.RegistrationMessage, metadata?: grpc.Metadata): ResponseStream<teletubby_pb.ConfigMessage>;
  registerReceiver(requestMessage: teletubby_pb.RegistrationMessage, metadata?: grpc.Metadata): ResponseStream<teletubby_pb.TelemetryMessage>;
  sendTelemetry(metadata?: grpc.Metadata): RequestStream<teletubby_pb.TelemetryMessage>;
  sendTelemetryMessage(
    requestMessage: teletubby_pb.TelemetryMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: teletubby_pb.TelemetryMessageAck|null) => void
  ): UnaryResponse;
  sendTelemetryMessage(
    requestMessage: teletubby_pb.TelemetryMessage,
    callback: (error: ServiceError|null, responseMessage: teletubby_pb.TelemetryMessageAck|null) => void
  ): UnaryResponse;
  requestTelemetry(
    requestMessage: teletubby_pb.TelemetryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: teletubby_pb.TelemetryRequestAck|null) => void
  ): UnaryResponse;
  requestTelemetry(
    requestMessage: teletubby_pb.TelemetryRequest,
    callback: (error: ServiceError|null, responseMessage: teletubby_pb.TelemetryRequestAck|null) => void
  ): UnaryResponse;
  requestTelemetryQuery(
    requestMessage: teletubby_pb.TelemetryQueryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: teletubby_pb.TelemetryRequestAck|null) => void
  ): UnaryResponse;
  requestTelemetryQuery(
    requestMessage: teletubby_pb.TelemetryQueryRequest,
    callback: (error: ServiceError|null, responseMessage: teletubby_pb.TelemetryRequestAck|null) => void
  ): UnaryResponse;
}

