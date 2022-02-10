// package: teletubby.v1
// file: teletubby.proto

var teletubby_pb = require("./teletubby_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var TelemetryReceiver = (function () {
  function TelemetryReceiver() {}
  TelemetryReceiver.serviceName = "teletubby.v1.TelemetryReceiver";
  return TelemetryReceiver;
}());

TelemetryReceiver.RegisterStreamReceiver = {
  methodName: "RegisterStreamReceiver",
  service: TelemetryReceiver,
  requestStream: true,
  responseStream: true,
  requestType: teletubby_pb.ReceiverStreamMessage,
  responseType: teletubby_pb.TelemetryStreamMessage
};

TelemetryReceiver.RequestTelemetry = {
  methodName: "RequestTelemetry",
  service: TelemetryReceiver,
  requestStream: false,
  responseStream: false,
  requestType: teletubby_pb.TelemetryRequest,
  responseType: teletubby_pb.TelemetryRequestAck
};

TelemetryReceiver.RequestTelemetryQuery = {
  methodName: "RequestTelemetryQuery",
  service: TelemetryReceiver,
  requestStream: false,
  responseStream: false,
  requestType: teletubby_pb.TelemetryQueryRequest,
  responseType: teletubby_pb.TelemetryRequestAck
};

exports.TelemetryReceiver = TelemetryReceiver;

function TelemetryReceiverClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TelemetryReceiverClient.prototype.registerStreamReceiver = function registerStreamReceiver(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(TelemetryReceiver.RegisterStreamReceiver, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

TelemetryReceiverClient.prototype.requestTelemetry = function requestTelemetry(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TelemetryReceiver.RequestTelemetry, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TelemetryReceiverClient.prototype.requestTelemetryQuery = function requestTelemetryQuery(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TelemetryReceiver.RequestTelemetryQuery, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.TelemetryReceiverClient = TelemetryReceiverClient;

var TelemetryGateway = (function () {
  function TelemetryGateway() {}
  TelemetryGateway.serviceName = "teletubby.v1.TelemetryGateway";
  return TelemetryGateway;
}());

TelemetryGateway.RegisterSender = {
  methodName: "RegisterSender",
  service: TelemetryGateway,
  requestStream: false,
  responseStream: true,
  requestType: teletubby_pb.RegistrationMessage,
  responseType: teletubby_pb.ConfigMessage
};

TelemetryGateway.RegisterReceiver = {
  methodName: "RegisterReceiver",
  service: TelemetryGateway,
  requestStream: false,
  responseStream: true,
  requestType: teletubby_pb.RegistrationMessage,
  responseType: teletubby_pb.TelemetryMessage
};

TelemetryGateway.SendTelemetry = {
  methodName: "SendTelemetry",
  service: TelemetryGateway,
  requestStream: true,
  responseStream: false,
  requestType: teletubby_pb.TelemetryMessage,
  responseType: teletubby_pb.TelemetryStreamAck
};

TelemetryGateway.SendTelemetryMessage = {
  methodName: "SendTelemetryMessage",
  service: TelemetryGateway,
  requestStream: false,
  responseStream: false,
  requestType: teletubby_pb.TelemetryMessage,
  responseType: teletubby_pb.TelemetryMessageAck
};

TelemetryGateway.RequestTelemetry = {
  methodName: "RequestTelemetry",
  service: TelemetryGateway,
  requestStream: false,
  responseStream: false,
  requestType: teletubby_pb.TelemetryRequest,
  responseType: teletubby_pb.TelemetryRequestAck
};

TelemetryGateway.RequestTelemetryQuery = {
  methodName: "RequestTelemetryQuery",
  service: TelemetryGateway,
  requestStream: false,
  responseStream: false,
  requestType: teletubby_pb.TelemetryQueryRequest,
  responseType: teletubby_pb.TelemetryRequestAck
};

exports.TelemetryGateway = TelemetryGateway;

function TelemetryGatewayClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TelemetryGatewayClient.prototype.registerSender = function registerSender(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(TelemetryGateway.RegisterSender, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

TelemetryGatewayClient.prototype.registerReceiver = function registerReceiver(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(TelemetryGateway.RegisterReceiver, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

TelemetryGatewayClient.prototype.sendTelemetry = function sendTelemetry(metadata) {
  var listeners = {
    end: [],
    status: []
  };
  var client = grpc.client(TelemetryGateway.SendTelemetry, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      if (!client.started) {
        client.start(metadata);
      }
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

TelemetryGatewayClient.prototype.sendTelemetryMessage = function sendTelemetryMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TelemetryGateway.SendTelemetryMessage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TelemetryGatewayClient.prototype.requestTelemetry = function requestTelemetry(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TelemetryGateway.RequestTelemetry, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TelemetryGatewayClient.prototype.requestTelemetryQuery = function requestTelemetryQuery(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TelemetryGateway.RequestTelemetryQuery, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.TelemetryGatewayClient = TelemetryGatewayClient;

