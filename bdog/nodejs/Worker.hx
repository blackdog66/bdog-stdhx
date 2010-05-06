
package bdog.nodejs;

import js.Node;

using StringTools;

typedef Payload = Dynamic;

typedef ClientPkt = {
  var cmd:String;
  var payload:Dynamic;
}

typedef WorkerPkt = { > ClientPkt,
  var id:Int;
}

class Worker {

  public static var EOL = "\r\n";
  var stdin:Dynamic;
  var log:Int;
  
  public function new() {
    //    trace("opening stdin");
    stdin = Node.process.openStdin();
    var me = this;
  }

  public function
  writePkt(d) {
    Node.process.stdout.write(Node.stringify(d));
  }
  
  public function
  run(d:WorkerPkt,fn:Payload->Void) {}

  public function start() {
    var
      me = this;

    stdin.addListener("data", function (data:Dynamic) {  
        try {
          var inPkt = Node.parse(Std.string(data));
          try {
            me.run(inPkt,function(payload:Payload) {
                me.writePkt({
                	id:inPkt.id,
                	cmd:inPkt.cmd,
                	payload:payload
                });
              });         
          } catch(exc:Dynamic) {
            me.writePkt({
          		id:-inPkt.id,
           		cmd:"error",
          		payload:Std.string(exc)
            });
          }
        } catch(jsonExc:Dynamic) {
          me.writePkt({
            id:-1,
          	cmd:"jsonerror",
          	payload:jsonExc
          });          
        }        
      });
    
    writePkt({
    	id:-1,
    	cmd:"handshake",
    	payload:null
    });
    
  }
}

class WorkerClient {  
  var child:ChildProcess ;
  var handlers:IntHash<Payload->Void>;
  
  public function new() {
    handlers = new IntHash<Dynamic->Void>();
  }

  public function linkChild(onHandshake:Void->Void) {
    var
      me = this,
      cardCode = "sys/CardWorker.js";

    trace("Spawning:");
    child = Node.spawn("node", [cardCode]);
    
    child.stdout.addListener('data', function (data:Dynamic) {
        if (data == null) {
          //Node.sys.debug("child closed conneciton");
        } else {
          try {
            trace(Std.string(data));
            var dd:Dynamic = Node.parse(Std.string(data));
            if (Reflect.field(dd,"id") != null) {
              var j:WorkerPkt = dd;
            if (j.id > 0) {
              var cb = me.handlers.get(j.id) ;
              if (cb != null){
                me.handlers.remove(j.id);              
                try {
                  cb(j.payload);
                } catch(exc:Dynamic) {
                  trace(Node.sys.inspect(exc));
                }
              }
            } else {
              if (j.cmd == "handshake")  {
                trace("ok in handshake about to start");
                onHandshake();
              } else {
                if (j.cmd == "error") {
                  trace("error:"+Std.string(j));
                }
              }
            }
            }
          } catch(exc:Dynamic) {
            trace("Worker Client:"+exc);
            trace("DATA is "+Std.string(data));
          }
        }
      });
    
    child.stderr.addListener("data", function(data){ 
        trace("error on child stderr:"+data);
      });
    
    child.addListener("exit", function (code) {
        trace("child exiting:"+code);
      });
  }
 
  function
  setCallback(fn:Dynamic->Void) {
    var id = 1 + Std.random(1000000);
    handlers.set(id,fn);
    return id;
  }

  public function
  send(s:ClientPkt,fn:Payload->Void) {
    var toSend = Node.stringify({
      id:setCallback(fn),
      cmd:s.cmd,
      payload:s.payload
    });

    trace("SENT:"+toSend);
    child.stdin.write(toSend);
    
    //    child.write(Worker.EOL,Node.UTF8);
  }

}