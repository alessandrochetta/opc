"use strict";
require("requirish")._(module);
var factories = require("lib/misc/factories");

var MessageSecurityMode =  require("./MessageSecurityMode_enum").MessageSecurityMode;
var SecurityTokenRequestType = require("./SecurityTokenRequestType_enum").SecurityTokenRequestType;

// see OPCUA.Part4. page 22
var OpenSecureChannelRequest_Schema_as_per_SPEC_Part4 = {
    name: "OpenSecureChannelRequest",
    fields: [
        { name: "requestHeader", fieldType: "RequestHeader"                  },
        { name: "clientCertificate", fieldType: "ApplicationInstanceCertificate" },
        { name: "requestType", fieldType: "SecurityTokenRequestType"       },
        { name: "secureChannelId", fieldType: "ByteString"                     },
        { name: "securityMode", fieldType: "MessageSecurityMode"        },
        { name: "securityPolicyUri", fieldType: "String"                         },
        { name: "clientNonce", fieldType: "ByteString"                     },
        { name: "requestedLifetime", fieldType: "Duration"                       }
    ]
};
// or  OPCUA.Part6. Release 1.0  6.4.4 Establishing a ClientSecureChannelLayer page 39
var OpenSecureChannelRequest_Schema_as_per_XMLSCHEMA = {
    name: "OpenSecureChannelRequest",
    fields: [
        { name: "requestHeader", fieldType: "RequestHeader"                  },
        {
            name: "clientProtocolVersion",
            fieldType: "UInt32",
            documentation: "The version of protocol used by the client"
        },
        {
            name: "requestType",
            fieldType: "SecurityTokenRequestType",
            documentation: "Whether the channel is being created or renewed"
        },
        {
            name: "securityMode",
            fieldType: "MessageSecurityMode",
            documentation: "The security mode to use with the channel."
        },
        {name: "clientNonce", fieldType: "ByteString", documentation: "A random number generated by the client."},
        {name: "requestedLifetime", fieldType: "UInt32", documentation: "The channel lifetime in milliseconds."}
    ]
};

exports.OpenSecureChannelRequest_Schema =OpenSecureChannelRequest_Schema_as_per_XMLSCHEMA;