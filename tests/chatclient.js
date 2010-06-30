$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof js=='undefined') js = {}
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = (i != null?((i.fileName + ":") + i.lineNumber) + ": ":"");
	msg += js.Boot.__string_rec(v,"");
	js.Node.sys.puts(msg);
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
	else null;
}
js.Boot.__closure = function(o,f) {
	var m = o[f];
	if(m == null) return null;
	var f1 = function() {
		return m.apply(o,arguments);
	}
	f1.scope = o;
	f1.method = m;
	return f1;
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":{
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				{
					var _g1 = 2, _g = o.length;
					while(_g1 < _g) {
						var i = _g1++;
						if(i != 2) str += "," + js.Boot.__string_rec(o[i],s);
						else str += js.Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			{
				var _g = 0;
				while(_g < l) {
					var i1 = _g++;
					str += ((i1 > 0?",":"")) + js.Boot.__string_rec(o[i1],s);
				}
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					return "???";
				}
			}
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = (o.hasOwnProperty != null);
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) continue;
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") continue;
		if(str.length != 2) str += ", \n";
		str += ((s + k) + " : ") + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += ("\n" + s) + "}";
		return str;
	}break;
	case "function":{
		return "<function>";
	}break;
	case "string":{
		return o;
	}break;
	default:{
		return String(o);
	}break;
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return (o.__enum__ == null);
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	}
	catch( $e1 ) {
		{
			var e = $e1;
			{
				if(cl == null) return false;
			}
		}
	}
	switch(cl) {
	case Int:{
		return Math.ceil(o%2147483648.0) === o;
	}break;
	case Float:{
		return typeof(o) == "number";
	}break;
	case Bool:{
		return o === true || o === false;
	}break;
	case String:{
		return typeof(o) == "string";
	}break;
	case Dynamic:{
		return true;
	}break;
	default:{
		if(o == null) return false;
		return o.__enum__ == cl || (cl == Class && o.__name__ != null) || (cl == Enum && o.__ename__ != null);
	}break;
	}
}
js.Boot.__init = function() {
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		this.splice(i,0,x);
	}
	Array.prototype.remove = (Array.prototype.indexOf?function(obj) {
		var idx = this.indexOf(obj);
		if(idx == -1) return false;
		this.splice(idx,1);
		return true;
	}:function(obj) {
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				return true;
			}
			i++;
		}
		return false;
	});
	Array.prototype.iterator = function() {
		return { cur : 0, arr : this, hasNext : function() {
			return this.cur < this.arr.length;
		}, next : function() {
			return this.arr[this.cur++];
		}}
	}
	var cca = String.prototype.charCodeAt;
	String.prototype.cca = cca;
	String.prototype.charCodeAt = function(i) {
		var x = cca.call(this,i);
		if(isNaN(x)) return null;
		return x;
	}
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		if(pos != null && pos != 0 && len != null && len < 0) return "";
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		}
		else if(len < 0) {
			len = (this.length + len) - pos;
		}
		return oldsub.apply(this,[pos,len]);
	}
	$closure = js.Boot.__closure;
}
js.Boot.prototype.__class__ = js.Boot;
if(typeof bdog=='undefined') bdog = {}
bdog.Event = function(p) { if( p === $_ ) return; {
	this.handlers = [];
}}
bdog.Event.__name__ = ["bdog","Event"];
bdog.Event.prototype.addHandler = function(fn) {
	this.handlers.push(fn);
}
bdog.Event.prototype.handlers = null;
bdog.Event.prototype.raise = function(p) {
	var _g = 0, _g1 = this.handlers;
	while(_g < _g1.length) {
		var h = _g1[_g];
		++_g;
		try {
			h(p);
		}
		catch( $e2 ) {
			{
				var e = $e2;
				{
					haxe.Log.trace("error raising event " + e,{ fileName : "Event.hx", lineNumber : 28, className : "bdog.Event", methodName : "raise"});
				}
			}
		}
	}
}
bdog.Event.prototype.__class__ = bdog.Event;
bdog.Event0 = function(p) { if( p === $_ ) return; {
	this.handlers = [];
}}
bdog.Event0.__name__ = ["bdog","Event0"];
bdog.Event0.prototype.addHandler = function(fn) {
	this.handlers.push(fn);
}
bdog.Event0.prototype.handlers = null;
bdog.Event0.prototype.raise = function() {
	var _g = 0, _g1 = this.handlers;
	while(_g < _g1.length) {
		var h = _g1[_g];
		++_g;
		try {
			h();
		}
		catch( $e3 ) {
			{
				var e = $e3;
				{
					haxe.Log.trace("error raising event " + e,{ fileName : "Event.hx", lineNumber : 50, className : "bdog.Event0", methodName : "raise"});
				}
			}
		}
	}
}
bdog.Event0.prototype.__class__ = bdog.Event0;
if(!bdog.nodejs) bdog.nodejs = {}
bdog.nodejs.HttpClient = function(h,p) { if( h === $_ ) return; {
	this.host = h;
	this.port = p;
}}
bdog.nodejs.HttpClient.__name__ = ["bdog","nodejs","HttpClient"];
bdog.nodejs.HttpClient.objToString = function(prms) {
	var sb = new StringBuf();
	if(prms != null) {
		sb.b[sb.b.length] = "?";
		{
			var _g = 0, _g1 = Reflect.fields(prms);
			while(_g < _g1.length) {
				var p = _g1[_g];
				++_g;
				sb.b[sb.b.length] = p;
				sb.b[sb.b.length] = "=";
				sb.b[sb.b.length] = Std.string(Reflect.field(prms,p));
				sb.b[sb.b.length] = "&";
			}
		}
	}
	return sb.b.join("").substr(0,-1);
}
bdog.nodejs.HttpClient.prototype.get = function(path,prms) {
	this.method = "GET";
	this.url = path + (((prms != null)?bdog.nodejs.HttpClient.objToString(prms):""));
	return this;
}
bdog.nodejs.HttpClient.prototype.host = null;
bdog.nodejs.HttpClient.prototype.method = null;
bdog.nodejs.HttpClient.prototype.port = null;
bdog.nodejs.HttpClient.prototype.request = null;
bdog.nodejs.HttpClient.prototype.then = function(fn) {
	var http = js.Node.require("http"), client = http.createClient(this.port,this.host), request = client.request(this.method,this.url,{ host : this.host});
	haxe.Log.trace("getting :" + this.url,{ fileName : "HttpClient.hx", lineNumber : 60, className : "bdog.nodejs.HttpClient", methodName : "then"});
	request.addListener("response",function(response) {
		response.setBodyEncoding("ascii");
		response.addListener("data",function(chunk) {
			fn(chunk);
		});
	});
	request.end();
}
bdog.nodejs.HttpClient.prototype.url = null;
bdog.nodejs.HttpClient.prototype.__class__ = bdog.nodejs.HttpClient;
if(typeof haxe=='undefined') haxe = {}
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
}
haxe.Log.prototype.__class__ = haxe.Log;
Std = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	if(x < 0) return Math.ceil(x);
	return Math.floor(x);
}
Std.parseInt = function(x) {
	var v = parseInt(x);
	if(Math.isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
Std.prototype.__class__ = Std;
bdog.ChatClient = function(host,port) { if( host === $_ ) return; {
	this.path = ((("http://" + host) + ":") + port) + "/chat/";
	this.lastMessageTime = 1;
	this.events = { join : new bdog.Event(), who : new bdog.Event(), msg : new bdog.Event(), part : new bdog.Event()}
}}
bdog.ChatClient.__name__ = ["bdog","ChatClient"];
bdog.ChatClient.prototype.channel = null;
bdog.ChatClient.prototype.client = function(command,params,fn) {
	var me = this;
	bdog.Http.get(this.path + command,params,function(json) {
		var o = bdog.JSON.decode(json);
		if(fn != null && me.error(o) != null) fn(o);
	});
}
bdog.ChatClient.prototype.error = function(o) {
	var err = Reflect.field(o,"error");
	if(err != null) {
		haxe.Log.trace("ERROR:" + err,{ fileName : "ChatClient.hx", lineNumber : 40, className : "bdog.ChatClient", methodName : "error"});
		return null;
	}
	return o;
}
bdog.ChatClient.prototype.events = null;
bdog.ChatClient.prototype.handlePoll = function(data) {
	this.pollingErrors = 0;
	var messages = data.messages;
	{
		var _g = 0;
		while(_g < messages.length) {
			var m = messages[_g];
			++_g;
			this.lastMessageTime = Math.max(this.lastMessageTime,m.timestamp);
			switch(m.type) {
			case "join":{
				this.events.join.raise(m);
			}break;
			case "msg":{
				this.events.msg.raise(m);
			}break;
			}
		}
	}
	this.poll();
}
bdog.ChatClient.prototype.join = function(chan,nick,fn) {
	var me = this;
	this.channel = chan;
	this.client("join",this.params({ nick : nick}),function(o) {
		me.sessionID = Reflect.field(o,"id");
		fn(o);
	});
}
bdog.ChatClient.prototype.lastMessageTime = null;
bdog.ChatClient.prototype.params = function(p) {
	if(p == null) p = { }
	p["channel"] = this.channel;
	if(this.sessionID != null) {
		p["id"] = this.sessionID;
	}
	return p;
}
bdog.ChatClient.prototype.path = null;
bdog.ChatClient.prototype.poll = function() {
	var me = this;
	this.recv({ since : this.lastMessageTime},function(data) {
		if(data != null) {
			me.handlePoll(data);
		}
	});
}
bdog.ChatClient.prototype.pollingErrors = null;
bdog.ChatClient.prototype.recv = function(prms,fn) {
	this.client("recv",this.params(prms),fn);
}
bdog.ChatClient.prototype.send = function(text) {
	this.client("send",this.params({ text : text}),null);
}
bdog.ChatClient.prototype.sessionID = null;
bdog.ChatClient.prototype.who = function(fn) {
	this.client("who",this.params(),fn);
}
bdog.ChatClient.prototype.__class__ = bdog.ChatClient;
bdog.Http = function() { }
bdog.Http.__name__ = ["bdog","Http"];
bdog.Http.parseUrl = function(url) {
	if(StringTools.startsWith(url,"http://")) url = url.substr(7);
	var colonAt = url.indexOf(":"), pathStarts = url.indexOf("/");
	return { host : url.substr(0,pathStarts), port : ((colonAt == -1)?80:Std.parseInt(url.substr(colonAt,pathStarts))), path : url.substr(pathStarts)}
}
bdog.Http.get = function(path,params,fn) {
	var u = js.Node.url.parse(path);
	new bdog.nodejs.HttpClient(u.hostname,Std.parseInt(u.port)).get(u.pathname,params).then(fn);
}
bdog.Http.filePost = function(filePath,dstUrl,binary,params,fn) {
	null;
}
bdog.Http.prototype.__class__ = bdog.Http;
StringTools = function() { }
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.htmlEscape = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
StringTools.htmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
}
StringTools.startsWith = function(s,start) {
	return (s.length >= start.length && s.substr(0,start.length) == start);
}
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return (slen >= elen && s.substr(slen - elen,elen) == end);
}
StringTools.isSpace = function(s,pos) {
	var c = s.charCodeAt(pos);
	return (c >= 9 && c <= 13) || c == 32;
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) {
		r++;
	}
	if(r > 0) return s.substr(r,l - r);
	else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,(l - r) - 1)) {
		r++;
	}
	if(r > 0) {
		return s.substr(0,l - r);
	}
	else {
		return s;
	}
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.rpad = function(s,c,l) {
	var sl = s.length;
	var cl = c.length;
	while(sl < l) {
		if(l - sl < cl) {
			s += c.substr(0,l - sl);
			sl = l;
		}
		else {
			s += c;
			sl += cl;
		}
	}
	return s;
}
StringTools.lpad = function(s,c,l) {
	var ns = "";
	var sl = s.length;
	if(sl >= l) return s;
	var cl = c.length;
	while(sl < l) {
		if(l - sl < cl) {
			ns += c.substr(0,l - sl);
			sl = l;
		}
		else {
			ns += c;
			sl += cl;
		}
	}
	return ns + s;
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.hex = function(n,digits) {
	var neg = false;
	if(n < 0) {
		neg = true;
		n = -n;
	}
	var s = n.toString(16);
	s = s.toUpperCase();
	if(digits != null) while(s.length < digits) s = "0" + s;
	if(neg) s = "-" + s;
	return s;
}
StringTools.prototype.__class__ = StringTools;
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	if(o.hasOwnProperty != null) return o.hasOwnProperty(field);
	var arr = Reflect.fields(o);
	{ var $it4 = arr.iterator();
	while( $it4.hasNext() ) { var t = $it4.next();
	if(t == field) return true;
	}}
	return false;
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	}
	catch( $e5 ) {
		{
			var e = $e5;
			null;
		}
	}
	return v;
}
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	if(o == null) return new Array();
	var a = new Array();
	if(o.hasOwnProperty) {
		
					for(var i in o)
						if( o.hasOwnProperty(i) )
							a.push(i);
				;
	}
	else {
		var t;
		try {
			t = o.__proto__;
		}
		catch( $e6 ) {
			{
				var e = $e6;
				{
					t = null;
				}
			}
		}
		if(t != null) o.__proto__ = null;
		
					for(var i in o)
						if( i != "__proto__" )
							a.push(i);
				;
		if(t != null) o.__proto__ = t;
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && f.__name__ == null;
}
Reflect.compare = function(a,b) {
	return ((a == b)?0:((((a) > (b))?1:-1)));
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return (t == "string" || (t == "object" && !v.__enum__) || (t == "function" && v.__name__ != null));
}
Reflect.deleteField = function(o,f) {
	if(!Reflect.hasField(o,f)) return false;
	delete(o[f]);
	return true;
}
Reflect.copy = function(o) {
	var o2 = { }
	{
		var _g = 0, _g1 = Reflect.fields(o);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			o2[f] = Reflect.field(o,f);
		}
	}
	return o2;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = new Array();
		{
			var _g1 = 0, _g = arguments.length;
			while(_g1 < _g) {
				var i = _g1++;
				a.push(arguments[i]);
			}
		}
		return f(a);
	}
}
Reflect.prototype.__class__ = Reflect;
bdog.JSON = function() { }
bdog.JSON.__name__ = ["bdog","JSON"];
bdog.JSON.encode = function(o) {
	return js.Node.stringify(o);
}
bdog.JSON.decode = function(s) {
	return js.Node.parse(s);
}
bdog.JSON.prototype.__class__ = bdog.JSON;
StringBuf = function(p) { if( p === $_ ) return; {
	this.b = new Array();
}}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	this.b[this.b.length] = x;
}
StringBuf.prototype.addChar = function(c) {
	this.b[this.b.length] = String.fromCharCode(c);
}
StringBuf.prototype.addSub = function(s,pos,len) {
	this.b[this.b.length] = s.substr(pos,len);
}
StringBuf.prototype.b = null;
StringBuf.prototype.toString = function() {
	return this.b.join("");
}
StringBuf.prototype.__class__ = StringBuf;
js.Node = function() { }
js.Node.__name__ = ["js","Node"];
js.Node.spawn = function(cmd,prms,env) {
	var cp = js.Node.require("child_process");
	return cp.spawn(cmd,prms,env);
}
js.Node.exec = function(cmd,options,fn) {
	var cp = js.Node.require("child_process");
	haxe.Log.trace("cp is " + cp,{ fileName : "Node.hx", lineNumber : 349, className : "js.Node", methodName : "exec"});
	if(options != null) cp.exec(cmd,options,fn);
	else cp.exec(cmd,fn);
}
js.Node.newBuffer = function(size) {
	var b = js.Node.require("buffer");
	return new b.Buffer(size);
}
js.Node.newScript = function(code,fileName) {
	var b = js.Node.process.binding("evals");
	return new b.Script(code,fileName);
}
js.Node.prototype.__class__ = js.Node;
if(typeof tests=='undefined') tests = {}
tests.ChatController = function() { }
tests.ChatController.__name__ = ["tests","ChatController"];
tests.ChatController.main = function() {
	var c = new bdog.ChatClient("localhost",9000);
	c.events.msg.addHandler(function(m) {
		haxe.Log.trace(m.text,{ fileName : "ChatController.hx", lineNumber : 11, className : "tests.ChatController", methodName : "main"});
	});
	c.join("outhouse","ritchie",function(o) {
		haxe.Log.trace("joined :" + o,{ fileName : "ChatController.hx", lineNumber : 15, className : "tests.ChatController", methodName : "main"});
		c.who(function(o1) {
			haxe.Log.trace(o1,{ fileName : "ChatController.hx", lineNumber : 16, className : "tests.ChatController", methodName : "main"});
		});
		{
			var _g = 0;
			while(_g < 10) {
				var i = _g++;
				c.send("msg" + i);
			}
		}
	});
	haxe.Log.trace("polling",{ fileName : "ChatController.hx", lineNumber : 22, className : "tests.ChatController", methodName : "main"});
	c.poll();
}
tests.ChatController.prototype.__class__ = tests.ChatController;
IntIter = function(min,max) { if( min === $_ ) return; {
	this.min = min;
	this.max = max;
}}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.hasNext = function() {
	return this.min < this.max;
}
IntIter.prototype.max = null;
IntIter.prototype.min = null;
IntIter.prototype.next = function() {
	return this.min++;
}
IntIter.prototype.__class__ = IntIter;
$Main = function() { }
$Main.__name__ = ["@Main"];
$Main.prototype.__class__ = $Main;
$_ = {}
js.Boot.__res = {}
js.Boot.__init();
{
	String.prototype.__class__ = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = Array;
	Array.__name__ = ["Array"];
	Int = { __name__ : ["Int"]}
	Dynamic = { __name__ : ["Dynamic"]}
	Float = Number;
	Float.__name__ = ["Float"];
	Bool = { __ename__ : ["Bool"]}
	Class = { __name__ : ["Class"]}
	Enum = { }
	Void = { __ename__ : ["Void"]}
}
{
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		return isFinite(i);
	}
	Math.isNaN = function(i) {
		return isNaN(i);
	}
	Math.__name__ = ["Math"];
}
js.Node.UTF8 = "utf8";
js.Node.ASCII = "ascii";
js.Node.BINARY = "binary";
js.Node.UNCAUGHT_EXC = "uncaughtException";
js.Node.SIGINT = "SIGINT";
js.Node.SIGUSR1 = "SIGUSR1";
js.Node.require = require;
js.Node.paths = require.paths;
js.Node.setTimeout = setTimeout;
js.Node.clearTimeout = clearTimeout;
js.Node.setInterval = setInterval;
js.Node.clearInterval = clearInterval;
js.Node.global = global;
js.Node.process = process;
js.Node.sys = js.Node.require("sys");
js.Node.fs = js.Node.require("fs");
js.Node.net = js.Node.require("net");
js.Node.http = js.Node.require("http");
js.Node.__filename = __filename;
js.Node.__dirname = __dirname;
js.Node.module = module;
js.Node.stringify = JSON.stringify;
js.Node.parse = JSON.parse;
js.Node.path = js.Node.require("path");
js.Node.url = js.Node.require("url");
js.Node.queryString = js.Node.require("querystring");
$Main.init = tests.ChatController.main();
