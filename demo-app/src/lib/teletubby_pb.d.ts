// package: teletubby.v1
// file: teletubby.proto

import * as jspb from "google-protobuf";

export class TelemetryMessage extends jspb.Message {
  getSource(): string;
  setSource(value: string): void;

  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): void;

  getCallsign(): string;
  setCallsign(value: string): void;

  getCreated(): number;
  setCreated(value: number): void;

  getSeq(): number;
  setSeq(value: number): void;

  getMetaMap(): jspb.Map<string, string>;
  clearMetaMap(): void;
  getUid(): string;
  setUid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TelemetryMessage.AsObject;
  static toObject(includeInstance: boolean, msg: TelemetryMessage): TelemetryMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TelemetryMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TelemetryMessage;
  static deserializeBinaryFromReader(message: TelemetryMessage, reader: jspb.BinaryReader): TelemetryMessage;
}

export namespace TelemetryMessage {
  export type AsObject = {
    source: string,
    payload: Uint8Array | string,
    callsign: string,
    created: number,
    seq: number,
    metaMap: Array<[string, string]>,
    uid: string,
  }
}

export class ReceiverStreamMessage extends jspb.Message {
  hasHeartbeat(): boolean;
  clearHeartbeat(): void;
  getHeartbeat(): Heartbeat | undefined;
  setHeartbeat(value?: Heartbeat): void;

  hasAck(): boolean;
  clearAck(): void;
  getAck(): TelemetryMessageAck | undefined;
  setAck(value?: TelemetryMessageAck): void;

  getContentCase(): ReceiverStreamMessage.ContentCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiverStreamMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiverStreamMessage): ReceiverStreamMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReceiverStreamMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiverStreamMessage;
  static deserializeBinaryFromReader(message: ReceiverStreamMessage, reader: jspb.BinaryReader): ReceiverStreamMessage;
}

export namespace ReceiverStreamMessage {
  export type AsObject = {
    heartbeat?: Heartbeat.AsObject,
    ack?: TelemetryMessageAck.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    HEARTBEAT = 1,
    ACK = 2,
  }
}

export class TelemetryStreamMessage extends jspb.Message {
  hasHeartbeat(): boolean;
  clearHeartbeat(): void;
  getHeartbeat(): Heartbeat | undefined;
  setHeartbeat(value?: Heartbeat): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): TelemetryMessage | undefined;
  setMessage(value?: TelemetryMessage): void;

  getIsackable(): boolean;
  setIsackable(value: boolean): void;

  getContentCase(): TelemetryStreamMessage.ContentCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TelemetryStreamMessage.AsObject;
  static toObject(includeInstance: boolean, msg: TelemetryStreamMessage): TelemetryStreamMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TelemetryStreamMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TelemetryStreamMessage;
  static deserializeBinaryFromReader(message: TelemetryStreamMessage, reader: jspb.BinaryReader): TelemetryStreamMessage;
}

export namespace TelemetryStreamMessage {
  export type AsObject = {
    heartbeat?: Heartbeat.AsObject,
    message?: TelemetryMessage.AsObject,
    isackable: boolean,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    HEARTBEAT = 1,
    MESSAGE = 2,
  }
}

export class TelemetryMessageAck extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  getStatus(): TelemetryAckStatusMap[keyof TelemetryAckStatusMap];
  setStatus(value: TelemetryAckStatusMap[keyof TelemetryAckStatusMap]): void;

  getNoretry(): boolean;
  setNoretry(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TelemetryMessageAck.AsObject;
  static toObject(includeInstance: boolean, msg: TelemetryMessageAck): TelemetryMessageAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TelemetryMessageAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TelemetryMessageAck;
  static deserializeBinaryFromReader(message: TelemetryMessageAck, reader: jspb.BinaryReader): TelemetryMessageAck;
}

export namespace TelemetryMessageAck {
  export type AsObject = {
    uid: string,
    status: TelemetryAckStatusMap[keyof TelemetryAckStatusMap],
    noretry: boolean,
  }
}

export class TelemetryStreamAck extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TelemetryStreamAck.AsObject;
  static toObject(includeInstance: boolean, msg: TelemetryStreamAck): TelemetryStreamAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TelemetryStreamAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TelemetryStreamAck;
  static deserializeBinaryFromReader(message: TelemetryStreamAck, reader: jspb.BinaryReader): TelemetryStreamAck;
}

export namespace TelemetryStreamAck {
  export type AsObject = {
  }
}

export class ConfigMessage extends jspb.Message {
  clearRequestedactionsList(): void;
  getRequestedactionsList(): Array<ConfigAction>;
  setRequestedactionsList(value: Array<ConfigAction>): void;
  addRequestedactions(value?: ConfigAction, index?: number): ConfigAction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigMessage): ConfigMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigMessage;
  static deserializeBinaryFromReader(message: ConfigMessage, reader: jspb.BinaryReader): ConfigMessage;
}

export namespace ConfigMessage {
  export type AsObject = {
    requestedactionsList: Array<ConfigAction.AsObject>,
  }
}

export class ConfigAction extends jspb.Message {
  getOperation(): string;
  setOperation(value: string): void;

  clearSourcesList(): void;
  getSourcesList(): Array<string>;
  setSourcesList(value: Array<string>): void;
  addSources(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigAction.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigAction): ConfigAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigAction;
  static deserializeBinaryFromReader(message: ConfigAction, reader: jspb.BinaryReader): ConfigAction;
}

export namespace ConfigAction {
  export type AsObject = {
    operation: string,
    sourcesList: Array<string>,
  }
}

export class TelemetryRequest extends jspb.Message {
  getSubscriberid(): string;
  setSubscriberid(value: string): void;

  clearRequestedactionsList(): void;
  getRequestedactionsList(): Array<TelemetryAction>;
  setRequestedactionsList(value: Array<TelemetryAction>): void;
  addRequestedactions(value?: TelemetryAction, index?: number): TelemetryAction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TelemetryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TelemetryRequest): TelemetryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TelemetryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TelemetryRequest;
  static deserializeBinaryFromReader(message: TelemetryRequest, reader: jspb.BinaryReader): TelemetryRequest;
}

export namespace TelemetryRequest {
  export type AsObject = {
    subscriberid: string,
    requestedactionsList: Array<TelemetryAction.AsObject>,
  }
}

export class TelemetryQueryRequest extends jspb.Message {
  getSubscriberid(): string;
  setSubscriberid(value: string): void;

  getOperation(): string;
  setOperation(value: string): void;

  hasCallsignquery(): boolean;
  clearCallsignquery(): void;
  getCallsignquery(): Query | undefined;
  setCallsignquery(value?: Query): void;

  clearSourcesList(): void;
  getSourcesList(): Array<string>;
  setSourcesList(value: Array<string>): void;
  addSources(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TelemetryQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TelemetryQueryRequest): TelemetryQueryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TelemetryQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TelemetryQueryRequest;
  static deserializeBinaryFromReader(message: TelemetryQueryRequest, reader: jspb.BinaryReader): TelemetryQueryRequest;
}

export namespace TelemetryQueryRequest {
  export type AsObject = {
    subscriberid: string,
    operation: string,
    callsignquery?: Query.AsObject,
    sourcesList: Array<string>,
  }
}

export class TelemetryAction extends jspb.Message {
  getOperation(): string;
  setOperation(value: string): void;

  clearCallsignsList(): void;
  getCallsignsList(): Array<string>;
  setCallsignsList(value: Array<string>): void;
  addCallsigns(value: string, index?: number): string;

  clearSourcesList(): void;
  getSourcesList(): Array<string>;
  setSourcesList(value: Array<string>): void;
  addSources(value: string, index?: number): string;

  hasSubscribeoperation(): boolean;
  clearSubscribeoperation(): void;
  getSubscribeoperation(): SubscribeOperation | undefined;
  setSubscribeoperation(value?: SubscribeOperation): void;

  hasUnsubscribeoperation(): boolean;
  clearUnsubscribeoperation(): void;
  getUnsubscribeoperation(): UnsubscribeOperation | undefined;
  setUnsubscribeoperation(value?: UnsubscribeOperation): void;

  getContentCase(): TelemetryAction.ContentCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TelemetryAction.AsObject;
  static toObject(includeInstance: boolean, msg: TelemetryAction): TelemetryAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TelemetryAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TelemetryAction;
  static deserializeBinaryFromReader(message: TelemetryAction, reader: jspb.BinaryReader): TelemetryAction;
}

export namespace TelemetryAction {
  export type AsObject = {
    operation: string,
    callsignsList: Array<string>,
    sourcesList: Array<string>,
    subscribeoperation?: SubscribeOperation.AsObject,
    unsubscribeoperation?: UnsubscribeOperation.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    SUBSCRIBEOPERATION = 4,
    UNSUBSCRIBEOPERATION = 5,
  }
}

export class SubscribeOperation extends jspb.Message {
  clearOptionsList(): void;
  getOptionsList(): Array<SubscribeOption>;
  setOptionsList(value: Array<SubscribeOption>): void;
  addOptions(value?: SubscribeOption, index?: number): SubscribeOption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeOperation.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeOperation): SubscribeOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeOperation;
  static deserializeBinaryFromReader(message: SubscribeOperation, reader: jspb.BinaryReader): SubscribeOperation;
}

export namespace SubscribeOperation {
  export type AsObject = {
    optionsList: Array<SubscribeOption.AsObject>,
  }
}

export class UnsubscribeOperation extends jspb.Message {
  clearOptionsList(): void;
  getOptionsList(): Array<UnsubscribeOption>;
  setOptionsList(value: Array<UnsubscribeOption>): void;
  addOptions(value?: UnsubscribeOption, index?: number): UnsubscribeOption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsubscribeOperation.AsObject;
  static toObject(includeInstance: boolean, msg: UnsubscribeOperation): UnsubscribeOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnsubscribeOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsubscribeOperation;
  static deserializeBinaryFromReader(message: UnsubscribeOperation, reader: jspb.BinaryReader): UnsubscribeOperation;
}

export namespace UnsubscribeOperation {
  export type AsObject = {
    optionsList: Array<UnsubscribeOption.AsObject>,
  }
}

export class SubscribeOption extends jspb.Message {
  hasReceivergroupsubscribeoption(): boolean;
  clearReceivergroupsubscribeoption(): void;
  getReceivergroupsubscribeoption(): ReceiverGroupSubscribeOption | undefined;
  setReceivergroupsubscribeoption(value?: ReceiverGroupSubscribeOption): void;

  getContentCase(): SubscribeOption.ContentCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeOption.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeOption): SubscribeOption.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeOption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeOption;
  static deserializeBinaryFromReader(message: SubscribeOption, reader: jspb.BinaryReader): SubscribeOption;
}

export namespace SubscribeOption {
  export type AsObject = {
    receivergroupsubscribeoption?: ReceiverGroupSubscribeOption.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    RECEIVERGROUPSUBSCRIBEOPTION = 1,
  }
}

export class UnsubscribeOption extends jspb.Message {
  hasReceivergroupunsubscribeoption(): boolean;
  clearReceivergroupunsubscribeoption(): void;
  getReceivergroupunsubscribeoption(): ReceiverGroupUnsubscribeOption | undefined;
  setReceivergroupunsubscribeoption(value?: ReceiverGroupUnsubscribeOption): void;

  getContentCase(): UnsubscribeOption.ContentCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsubscribeOption.AsObject;
  static toObject(includeInstance: boolean, msg: UnsubscribeOption): UnsubscribeOption.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnsubscribeOption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsubscribeOption;
  static deserializeBinaryFromReader(message: UnsubscribeOption, reader: jspb.BinaryReader): UnsubscribeOption;
}

export namespace UnsubscribeOption {
  export type AsObject = {
    receivergroupunsubscribeoption?: ReceiverGroupUnsubscribeOption.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    RECEIVERGROUPUNSUBSCRIBEOPTION = 1,
  }
}

export class ReceiverGroupSubscribeOption extends jspb.Message {
  getStartposition(): number;
  setStartposition(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiverGroupSubscribeOption.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiverGroupSubscribeOption): ReceiverGroupSubscribeOption.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReceiverGroupSubscribeOption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiverGroupSubscribeOption;
  static deserializeBinaryFromReader(message: ReceiverGroupSubscribeOption, reader: jspb.BinaryReader): ReceiverGroupSubscribeOption;
}

export namespace ReceiverGroupSubscribeOption {
  export type AsObject = {
    startposition: number,
  }
}

export class ReceiverGroupUnsubscribeOption extends jspb.Message {
  getTerminate(): boolean;
  setTerminate(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiverGroupUnsubscribeOption.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiverGroupUnsubscribeOption): ReceiverGroupUnsubscribeOption.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReceiverGroupUnsubscribeOption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiverGroupUnsubscribeOption;
  static deserializeBinaryFromReader(message: ReceiverGroupUnsubscribeOption, reader: jspb.BinaryReader): ReceiverGroupUnsubscribeOption;
}

export namespace ReceiverGroupUnsubscribeOption {
  export type AsObject = {
    terminate: boolean,
  }
}

export class TelemetryRequestAck extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TelemetryRequestAck.AsObject;
  static toObject(includeInstance: boolean, msg: TelemetryRequestAck): TelemetryRequestAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TelemetryRequestAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TelemetryRequestAck;
  static deserializeBinaryFromReader(message: TelemetryRequestAck, reader: jspb.BinaryReader): TelemetryRequestAck;
}

export namespace TelemetryRequestAck {
  export type AsObject = {
  }
}

export class RegistrationMessage extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegistrationMessage.AsObject;
  static toObject(includeInstance: boolean, msg: RegistrationMessage): RegistrationMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegistrationMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegistrationMessage;
  static deserializeBinaryFromReader(message: RegistrationMessage, reader: jspb.BinaryReader): RegistrationMessage;
}

export namespace RegistrationMessage {
  export type AsObject = {
  }
}

export class ServiceStatusRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceStatusRequest): ServiceStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceStatusRequest;
  static deserializeBinaryFromReader(message: ServiceStatusRequest, reader: jspb.BinaryReader): ServiceStatusRequest;
}

export namespace ServiceStatusRequest {
  export type AsObject = {
  }
}

export class Query extends jspb.Message {
  getOperation(): LogicalOperationMap[keyof LogicalOperationMap];
  setOperation(value: LogicalOperationMap[keyof LogicalOperationMap]): void;

  clearQueryorpredicatesList(): void;
  getQueryorpredicatesList(): Array<QueryOrPredicate>;
  setQueryorpredicatesList(value: Array<QueryOrPredicate>): void;
  addQueryorpredicates(value?: QueryOrPredicate, index?: number): QueryOrPredicate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Query.AsObject;
  static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Query;
  static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
}

export namespace Query {
  export type AsObject = {
    operation: LogicalOperationMap[keyof LogicalOperationMap],
    queryorpredicatesList: Array<QueryOrPredicate.AsObject>,
  }
}

export class QueryOrPredicate extends jspb.Message {
  hasQuery(): boolean;
  clearQuery(): void;
  getQuery(): Query | undefined;
  setQuery(value?: Query): void;

  hasPredicate(): boolean;
  clearPredicate(): void;
  getPredicate(): Predicate | undefined;
  setPredicate(value?: Predicate): void;

  getContentCase(): QueryOrPredicate.ContentCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryOrPredicate.AsObject;
  static toObject(includeInstance: boolean, msg: QueryOrPredicate): QueryOrPredicate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryOrPredicate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryOrPredicate;
  static deserializeBinaryFromReader(message: QueryOrPredicate, reader: jspb.BinaryReader): QueryOrPredicate;
}

export namespace QueryOrPredicate {
  export type AsObject = {
    query?: Query.AsObject,
    predicate?: Predicate.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    QUERY = 1,
    PREDICATE = 2,
  }
}

export class Predicate extends jspb.Message {
  getAttribute(): PredicateAttributeMap[keyof PredicateAttributeMap];
  setAttribute(value: PredicateAttributeMap[keyof PredicateAttributeMap]): void;

  getOperation(): ComparisonOperationMap[keyof ComparisonOperationMap];
  setOperation(value: ComparisonOperationMap[keyof ComparisonOperationMap]): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Predicate.AsObject;
  static toObject(includeInstance: boolean, msg: Predicate): Predicate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Predicate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Predicate;
  static deserializeBinaryFromReader(message: Predicate, reader: jspb.BinaryReader): Predicate;
}

export namespace Predicate {
  export type AsObject = {
    attribute: PredicateAttributeMap[keyof PredicateAttributeMap],
    operation: ComparisonOperationMap[keyof ComparisonOperationMap],
    value: string,
  }
}

export class Heartbeat extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Heartbeat.AsObject;
  static toObject(includeInstance: boolean, msg: Heartbeat): Heartbeat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Heartbeat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Heartbeat;
  static deserializeBinaryFromReader(message: Heartbeat, reader: jspb.BinaryReader): Heartbeat;
}

export namespace Heartbeat {
  export type AsObject = {
  }
}

export interface TelemetryAckStatusMap {
  OK: 0;
  REJECT: 1;
}

export const TelemetryAckStatus: TelemetryAckStatusMap;

export interface LogicalOperationMap {
  OR: 0;
}

export const LogicalOperation: LogicalOperationMap;

export interface ComparisonOperationMap {
  EQUAL: 0;
}

export const ComparisonOperation: ComparisonOperationMap;

export interface PredicateAttributeMap {
  TAG: 0;
}

export const PredicateAttribute: PredicateAttributeMap;

