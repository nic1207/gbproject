const WebSocket = require('ws');
const port = 3333;
const server = new WebSocket.Server({ port: port }, function(){
  console.log('websocket server start listening on port', port)
});

server.on('open', function open() {
  console.log('connected');
});

server.on('close', function close() {
  console.log('disconnected');
});

server.on('connection', function connection(ws, req) {
  const ip = req.connection.remoteAddress;
  const port = req.connection.remotePort;
  const clientName = ip + port;

  // console.log('connection %s is connected', clientName)
  // console.log('ws=', ws)
  // console.log('req=', req)
  // 发送欢迎信息给客户端
  // ws.send("Welcome " + clientName);

  ws.on('message', function incoming(message) {
    console.log('received: %s from %s', message, clientName);
    processMsg(message, ws);
    // ws.send(message);
    // 广播消息给所有客户端
    // server.clients.forEach(function each(client) {
    // if (client.readyState === WebSocket.OPEN) {
    //   client.send( clientName + " -> " + message);
    // }
    // });

  });

});
function processMsg (msg, ws) {
  console.log('processMsg(', msg, ')');
  const cmder = JSON.parse(msg);
  switch (cmder.CommandHeader.CommandID) {
    case 101: // sign_in
      process_101(cmder, ws)
      break;
    case 102: //recheck_token
      process_102(cmder, ws)
      break;
    case 199:// sign_out
      process_199(cmder, ws)
      break;
    case 10001://join game
      process_10001(cmder, ws)
      break;
    case 10011://BET
      process_10011(cmder, ws)
      break;
    case 10099://leave game
      process_10099(cmder, ws)
      break;
    default:
      console.error('no process or cmder', cmder.CommandHeader.CommandID)
      break;
  }
}

// sign_in
function process_101 (cmder, ws) {
  const tt = 1500;
  setTimeout(function () {
    send_201(cmder, ws);// response sign_in
    setTimeout(function () {
      send_203(cmder, ws);// refresh member info
      setTimeout(function () {
        send_204(cmder, ws);// refresh game lobby info
        setTimeout(function () {
          send_205(cmder, ws);// refresh game table status
        }, tt);
      }, tt);
    }, tt);
  }, tt);
}

// recheck_token
function process_102 (cmder, ws) {
  const tt = 1500;
  setTimeout(function () {
    send_202(cmder, ws);// response recheck_token
  }, tt);
}

// sign_out
function process_199 (cmder, ws) {
  const tt = 1500;
  setTimeout(function () {
    send_299(cmder, ws);// response sign_out
  }, tt);
}

// join game
function process_10001 (cmder, ws) {
  const tt = 1500;
  setTimeout(function () {
    send_20001(cmder, ws);// response join game
  }, tt);
}

// bet
function process_10011 (cmder, ws) {
  const tt = 1500;
  setTimeout(function () {
    send_20011(cmder, ws);// response bet
  }, tt);
}

// leave game
function process_10099 (cmder, ws) {
  const tt = 1500;
  setTimeout(function () {
    send_20099(cmder, ws);// response leave game
  }, tt);
}

// response sign_in
function send_201(cmder, ws) {
  const cmdHeader = {
    SN: 1,
    CommandID: 201,
    Encode: 'ASCII',
    Timestamp: 'xxxx',
    StatusCode: 1000,
    Message: 'SUCCESS',
    HasBody: true
  }
  const cmdBody = {
    Token: 'NkcJY2HbMkqyQSz9zLbUbA',
    AgentCode: 'TEST_AGENT',
    AccountName:'TEST_PLAYER',
    LanguageTypeCode: 'en'
  }
  const respcmd = {
    CommandHeader: cmdHeader,
    CommandBody: cmdBody
  }
  const strrespcmd = JSON.stringify(respcmd)
  console.log('send_201(strrespcmd=', strrespcmd, ')')
  ws.send(strrespcmd)
}

// RESPONSE_RECHECK_TOKEN_RESULT
function send_202 (cmder, ws) {
  const cmdHeader = {
    SN: 1,
    CommandID: 202,
    Encode: 'ASCII',
    Timestamp: 'xxxx',
    StatusCode: 1000,
    Message: 'SUCCESS',
    HasBody: true
  }
  const cmdBody = {
    Token: 'NkcJY2HbMkqyQSz9zLbUbA',
    AgentCode: 'TEST_AGENT',
    AccountName: 'TEST_PLAYER',
    LanguageTypeCode: 'en'
  }
  const respcmd = {
    CommandHeader: cmdHeader,
    CommandBody: cmdBody
  }
  const strrespcmd = JSON.stringify(respcmd)
  console.log('send_202(strrespcmd=', strrespcmd, ')')
  ws.send(strrespcmd)
}

// REFLASH_MEMBER_INFO
function send_203 (cmder, ws) {
  const cmdHeader = {
    SN: 1,
    CommandID: 203,
    Encode: 'ASCII',
    Timestamp: 'xxxx',
    StatusCode: 1000,
    Message: 'SUCCESS',
    HasBody: true
  }
  const cmdBody = {
    AgentCode: 'TEST_AGENT',
    AccountName: 'TEST_PLAYER',
    CreditTypeCode: 'USD',
    Point: '10000000'
  }
  const respcmd = {
    CommandHeader: cmdHeader,
    CommandBody: cmdBody
  }
  const strrespcmd = JSON.stringify(respcmd)
  console.log('send_203(strrespcmd=', strrespcmd, ')')
  ws.send(strrespcmd)
}

// REFLASH_GAME_LOBBY_INFO
function send_204 (cmder, ws) {
  const cmdHeader = {
    SN: 1,
    CommandID: 204,
    Encode: 'ASCII',
    Timestamp: 'xxxx',
    StatusCode: 1000,
    Message: 'SUCCESS',
    HasBody: true
  }
  const games = [{
    GameCode:'SGBACCARAT'
  }]
  const tables = [{
    TableID: 1,
    TableName:'BACCARAT_01',
    TableSetting:{}
  }]
  const cmdBody = {
    Games: games,
    GameTables: tables
  }
  
  const respcmd = {
    CommandHeader: cmdHeader,
    CommandBody: cmdBody
  }
  const strrespcmd = JSON.stringify(respcmd)
  console.log('send_204(strrespcmd=', strrespcmd, ')')
  ws.send(strrespcmd)
}

// REFLASH_GAME_TABLE_STATUS
function send_205 (cmder, ws) {
  const cmdHeader = {
    SN: 1,
    CommandID: 205,
    Encode: 'ASCII',
    Timestamp: 'xxxx',
    StatusCode: 1000,
    Message: 'SUCCESS',
    HasBody: true
  }
  const tables = [{
    GameID: 10001,
    TableID: 1,
    Status:{
      PlayerCount: 101,
      State: 11,
      CountDown: 0,
      Result: 1,
      History: [1,1,1,1,1,1,1,1]
    }
  }]
  const cmdBody = {
    TableStatus: tables
  }
  
  const respcmd = {
    CommandHeader: cmdHeader,
    CommandBody: cmdBody
  }
  const strrespcmd = JSON.stringify(respcmd)
  console.log('send_205(strrespcmd=', strrespcmd, ')')
  ws.send(strrespcmd)
}

// response sign_out
function send_299(cmder, ws) {
  const cmdHeader = {
    SN: 1,
    CommandID: 299,
    Encode: 'ASCII',
    Timestamp: 'xxxx',
    StatusCode: 1000,
    Message: 'SUCCESS',
    HasBody: true
  }
  const cmdBody = {}
  const respcmd = {
    CommandHeader: cmdHeader,
    CommandBody: cmdBody
  }
  const strrespcmd = JSON.stringify(respcmd)
  console.log('send_201(strrespcmd=', strrespcmd, ')')
  ws.send(strrespcmd)
}

// response join game
function send_20001(cmder, ws) {
  const cmdHeader = {
    SN: 1,
    CommandID: 20001,
    Encode: 'ASCII',
    Timestamp: 'xxxx',
    StatusCode: 1000,
    Message: 'SUCCESS',
    HasBody: false
  }
  const cmdBody = {}
  const respcmd = {
    CommandHeader: cmdHeader
  }
  const strrespcmd = JSON.stringify(respcmd)
  console.log('send_20001(strrespcmd=', strrespcmd, ')')
  ws.send(strrespcmd)
}

// REFLASH_TALBE_STATUS
function send_20002(cmder, ws) {
  const cmdHeader = {
    SN: 1,
    CommandID: 20002,
    Encode: 'ASCII',
    Timestamp: 'xxxx',
    StatusCode: 1000,
    Message: 'SUCCESS',
    HasBody: true
  }
  const cmdBody = {
    GameID: 10001,
    TableID: 1,
    RoundID: '1234567890',
    RoundName: 'B01-01-01',
    PlayerCount: 101,
    State: 11,
    CountDown: 0,
    Result: 1
  }
  const respcmd = {
    CommandHeader: cmdHeader,
    CommandBody: cmdBody
  }
  const strrespcmd = JSON.stringify(respcmd)
  console.log('send_20002(strrespcmd=', strrespcmd, ')')
  ws.send(strrespcmd)
}

// REFLASH_BET_INFOS
function send_20003(cmder, ws) {
  const cmdHeader = {
    SN: 1,
    CommandID: 20003,
    Encode: 'ASCII',
    Timestamp: 'xxxx',
    StatusCode: 1000,
    Message: 'SUCCESS',
    HasBody: true
  }
  const cmdBody = {
    GameID: 10001,
    TableID: 1,
    RoundID: '1234567890',
    BetInfos: {
      Self: [0,0,0,0,0,0],
      Other: [0,0,0,0,0,0]
    }
  }
  const respcmd = {
    CommandHeader: cmdHeader,
    CommandBody: cmdBody
  }
  const strrespcmd = JSON.stringify(respcmd)
  console.log('send_20003(strrespcmd=', strrespcmd, ')')
  ws.send(strrespcmd)
}

// REFLASH_GAME_HISTORY
function send_20004(cmder, ws) {
  const cmdHeader = {
    SN: 1,
    CommandID: 20004,
    Encode: 'ASCII',
    Timestamp: 'xxxx',
    StatusCode: 1000,
    Message: 'SUCCESS',
    HasBody: true
  }
  const cmdBody = {
    GameID: 10001,
    TableID: 1,
    RoundID: '1234567890',
    History: [1,1,1,1,1,1,1]
  }
  const respcmd = {
    CommandHeader: cmdHeader,
    CommandBody: cmdBody
  }
  const strrespcmd = JSON.stringify(respcmd)
  console.log('send_20004(strrespcmd=', strrespcmd, ')')
  ws.send(strrespcmd)
}

// RESPONSE_BET_RESULT
function send_20011(cmder, ws) {
  const cmdHeader = {
    SN: 1,
    CommandID: 20011,
    Encode: 'ASCII',
    Timestamp: 'xxxx',
    StatusCode: 1000,
    Message: 'SUCCESS',
    HasBody: true
  }
  const cmdBody = {
    GameID: 10001,
    TableID: 1,
    RoundID: '1234567890',
    AccessCode: 'IEiX-U7ZC0OOJCdQQUR2_Q',
    BetInfos: {
      Self: [0,0,0,0,0,0],
      Other: [0,0,0,0,0,0]
    }
  }
  const respcmd = {
    CommandHeader: cmdHeader,
    CommandBody: cmdBody
  }
  const strrespcmd = JSON.stringify(respcmd)
  console.log('send_20011(strrespcmd=', strrespcmd, ')')
  ws.send(strrespcmd)
}

// RESPONSE_LEAVE_GAME_RESULT
function send_20099(cmder, ws) {
  const cmdHeader = {
    SN: 1,
    CommandID: 20099,
    Encode: 'ASCII',
    Timestamp: 'xxxx',
    StatusCode: 1000,
    Message: 'SUCCESS',
    HasBody: false
  }
  const respcmd = {
    CommandHeader: cmdHeader
  }
  const strrespcmd = JSON.stringify(respcmd)
  console.log('send_20099(strrespcmd=', strrespcmd, ')')
  ws.send(strrespcmd)
}
