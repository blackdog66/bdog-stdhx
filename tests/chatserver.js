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
if(typeof tests=='undefined') tests = {}
tests.Chat = function() { }
tests.Chat.__name__ = ["tests","Chat"];
tests.Chat.main = function() {
	var cs = new bdog.nodejs.ChatServer("localhost",9000);
}
tests.Chat.prototype.__class__ = tests.Chat;
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
Lambda = function() { }
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	var a = new Array();
	{ var $it2 = it.iterator();
	while( $it2.hasNext() ) { var i = $it2.next();
	a.push(i);
	}}
	return a;
}
Lambda.list = function(it) {
	var l = new List();
	{ var $it3 = it.iterator();
	while( $it3.hasNext() ) { var i = $it3.next();
	l.add(i);
	}}
	return l;
}
Lambda.map = function(it,f) {
	var l = new List();
	{ var $it4 = it.iterator();
	while( $it4.hasNext() ) { var x = $it4.next();
	l.add(f(x));
	}}
	return l;
}
Lambda.mapi = function(it,f) {
	var l = new List();
	var i = 0;
	{ var $it5 = it.iterator();
	while( $it5.hasNext() ) { var x = $it5.next();
	l.add(f(i++,x));
	}}
	return l;
}
Lambda.has = function(it,elt,cmp) {
	if(cmp == null) {
		{ var $it6 = it.iterator();
		while( $it6.hasNext() ) { var x = $it6.next();
		if(x == elt) return true;
		}}
	}
	else {
		{ var $it7 = it.iterator();
		while( $it7.hasNext() ) { var x = $it7.next();
		if(cmp(x,elt)) return true;
		}}
	}
	return false;
}
Lambda.exists = function(it,f) {
	{ var $it8 = it.iterator();
	while( $it8.hasNext() ) { var x = $it8.next();
	if(f(x)) return true;
	}}
	return false;
}
Lambda.foreach = function(it,f) {
	{ var $it9 = it.iterator();
	while( $it9.hasNext() ) { var x = $it9.next();
	if(!f(x)) return false;
	}}
	return true;
}
Lambda.iter = function(it,f) {
	{ var $it10 = it.iterator();
	while( $it10.hasNext() ) { var x = $it10.next();
	f(x);
	}}
}
Lambda.filter = function(it,f) {
	var l = new List();
	{ var $it11 = it.iterator();
	while( $it11.hasNext() ) { var x = $it11.next();
	if(f(x)) l.add(x);
	}}
	return l;
}
Lambda.fold = function(it,f,first) {
	{ var $it12 = it.iterator();
	while( $it12.hasNext() ) { var x = $it12.next();
	first = f(x,first);
	}}
	return first;
}
Lambda.count = function(it) {
	var n = 0;
	{ var $it13 = it.iterator();
	while( $it13.hasNext() ) { var _ = $it13.next();
	++n;
	}}
	return n;
}
Lambda.empty = function(it) {
	return !it.iterator().hasNext();
}
Lambda.prototype.__class__ = Lambda;
Hash = function(p) { if( p === $_ ) return; {
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
}}
Hash.__name__ = ["Hash"];
Hash.prototype.exists = function(key) {
	try {
		key = "$" + key;
		return this.hasOwnProperty.call(this.h,key);
	}
	catch( $e14 ) {
		{
			var e = $e14;
			{
				
				for(var i in this.h)
					if( i == key ) return true;
			;
				return false;
			}
		}
	}
}
Hash.prototype.get = function(key) {
	return this.h["$" + key];
}
Hash.prototype.h = null;
Hash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref["$" + i];
	}}
}
Hash.prototype.keys = function() {
	var a = new Array();
	
			for(var i in this.h)
				a.push(i.substr(1));
		;
	return a.iterator();
}
Hash.prototype.remove = function(key) {
	if(!this.exists(key)) return false;
	delete(this.h["$" + key]);
	return true;
}
Hash.prototype.set = function(key,value) {
	this.h["$" + key] = value;
}
Hash.prototype.toString = function() {
	var s = new StringBuf();
	s.b[s.b.length] = "{";
	var it = this.keys();
	{ var $it15 = it;
	while( $it15.hasNext() ) { var i = $it15.next();
	{
		s.b[s.b.length] = i;
		s.b[s.b.length] = " => ";
		s.b[s.b.length] = Std.string(this.get(i));
		if(it.hasNext()) s.b[s.b.length] = ", ";
	}
	}}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
Hash.prototype.__class__ = Hash;
if(typeof bdog=='undefined') bdog = {}
if(!bdog.nodejs) bdog.nodejs = {}
bdog.nodejs.Session = function(n) { if( n === $_ ) return; {
	this.nick = n;
	this.id = Std.string(Math.floor(Math.random() * 1e10));
	this.timestamp = Date.now().getTime();
}}
bdog.nodejs.Session.__name__ = ["bdog","nodejs","Session"];
bdog.nodejs.Session.prototype.id = null;
bdog.nodejs.Session.prototype.nick = null;
bdog.nodejs.Session.prototype.poke = function() {
	this.timestamp = Date.now().getTime();
}
bdog.nodejs.Session.prototype.timestamp = null;
bdog.nodejs.Session.prototype.__class__ = bdog.nodejs.Session;
bdog.nodejs.Channel = function(id) { if( id === $_ ) return; {
	this.sessions = new Hash();
	this.nicks = new Hash();
	this.messages = new Array();
	this.callbacks = new Array();
	this.messageBacklog = 20;
	this.sessionTimeout = 60000;
	var me = this;
	js.Node.setInterval(function() {
		me.flushCallbacks();
		me.expireOldSessions();
	},1000,[]);
}}
bdog.nodejs.Channel.__name__ = ["bdog","nodejs","Channel"];
bdog.nodejs.Channel.prototype.appendMessage = function(nick,type,text) {
	var message = { nick : nick, type : type, text : text, timestamp : Date.now().getTime()}
	this.messages.push(message);
	while(this.callbacks.length > 0) this.callbacks.shift().fn([message]);
	while(this.messages.length > this.messageBacklog) this.messages.shift();
}
bdog.nodejs.Channel.prototype.callbacks = null;
bdog.nodejs.Channel.prototype.createSession = function(n) {
	var nick = n.toLowerCase();
	if(nick.length > 50) return null;
	if(new EReg("[^\\w_\\-^!]","").match(nick)) return null;
	if(this.nicks.exists(nick)) return null;
	this.nicks.set(nick,nick);
	var sess = new bdog.nodejs.Session(nick);
	this.sessions.set(sess.id,sess);
	haxe.Log.trace("created session for " + nick,{ fileName : "ChatServer.hx", lineNumber : 63, className : "bdog.nodejs.Channel", methodName : "createSession"});
	return sess;
}
bdog.nodejs.Channel.prototype.destroySession = function(id) {
	if(this.sessions.exists(id)) {
		var n = this.sessions.get(id).nick;
		this.sessions.remove(id);
		this.nicks.remove(n);
	}
}
bdog.nodejs.Channel.prototype.expireOldSessions = function() {
	var now = Date.now().getTime();
	{ var $it16 = this.sessions.iterator();
	while( $it16.hasNext() ) { var s = $it16.next();
	{
		if(now - s.timestamp > this.sessionTimeout) {
			this.destroySession(s.id);
		}
	}
	}}
}
bdog.nodejs.Channel.prototype.flushCallbacks = function() {
	var now = Date.now().getTime();
	while(this.callbacks.length > 0 && now - this.callbacks[0].timestamp > this.sessionTimeout * 0.75) {
		this.callbacks.shift().fn([]);
	}
}
bdog.nodejs.Channel.prototype.messageBacklog = null;
bdog.nodejs.Channel.prototype.messages = null;
bdog.nodejs.Channel.prototype.nicks = null;
bdog.nodejs.Channel.prototype.query = function(since,fn) {
	var matching = null, length = this.messages.length;
	{
		var _g = 0;
		while(_g < length) {
			var i = _g++;
			if(this.messages[i].timestamp > since) {
				matching = this.messages.slice(i);
				break;
			}
		}
	}
	if(matching != null) {
		fn(matching);
	}
	else {
		this.callbacks.push({ timestamp : Date.now().getTime(), fn : fn});
	}
}
bdog.nodejs.Channel.prototype.sessionTimeout = null;
bdog.nodejs.Channel.prototype.sessions = null;
bdog.nodejs.Channel.prototype.__class__ = bdog.nodejs.Channel;
bdog.nodejs.ChatServer = function(hostname,port) { if( hostname === $_ ) return; {
	this.channels = new Hash();
	var me = this;
	js.Node.http.createServer(function(req,res) {
		var reqPrms = js.Node.url.parse(req.url,true), givenChannel = reqPrms.query.channel, channel = me.channels.get(givenChannel);
		if(channel == null && givenChannel != null) {
			channel = me.addChannel(givenChannel);
		}
		if(channel != null) {
			switch(reqPrms.pathname) {
			case "/chat/join":{
				me.join(channel,req,res);
			}break;
			case "/chat/who":{
				me.who(channel,req,res);
			}break;
			case "/chat/send":{
				me.send(channel,req,res);
			}break;
			case "/chat/recv":{
				me.recv(channel,req,res);
			}break;
			case "/chat/part":{
				me.part(channel,req,res);
			}break;
			default:{
				haxe.Log.trace("need a command!",{ fileName : "ChatServer.hx", lineNumber : 169, className : "bdog.nodejs.ChatServer", methodName : "new"});
			}break;
			}
		}
	}).listen(port,hostname);
}}
bdog.nodejs.ChatServer.__name__ = ["bdog","nodejs","ChatServer"];
bdog.nodejs.ChatServer.prototype.addChannel = function(name) {
	var channel = new bdog.nodejs.Channel(name);
	this.channels.set(name,channel);
	return channel;
}
bdog.nodejs.ChatServer.prototype.channels = null;
bdog.nodejs.ChatServer.prototype.join = function(channel,req,res) {
	var query = js.Node.url.parse(req.url).query;
	var nick = js.Node.queryString.parse(query).nick;
	if(nick == null) {
		this.write(res,400,{ error : "bad nick"});
		return;
	}
	var session = channel.createSession(nick);
	if(session == null) {
		this.write(res,400,{ error : "nick in use"});
		return;
	}
	channel.appendMessage(nick,"join");
	this.write(res,200,{ id : session.id, nick : nick});
}
bdog.nodejs.ChatServer.prototype.part = function(channel,req,res) {
	var query = js.Node.url.parse(req.url).query, qs = js.Node.queryString.parse(query), id = qs.id;
	channel.destroySession(id);
	this.write(res,200,{ });
}
bdog.nodejs.ChatServer.prototype.recv = function(channel,req,res) {
	var me = this, query = js.Node.url.parse(req.url).query, qs = js.Node.queryString.parse(query), qs_since = qs.since, id = qs.id, session;
	if(qs_since == null) {
		this.write(res,400,{ error : "must supply a since parameter"});
		return;
	}
	var since = Std.parseInt(qs_since);
	session = channel.sessions.get(id);
	if(session != null) session.poke();
	channel.query(since,function(messages) {
		if(session != null) session.poke();
		me.write(res,200,{ messages : messages});
	});
}
bdog.nodejs.ChatServer.prototype.send = function(channel,req,res) {
	var me = this, query = js.Node.url.parse(req.url,true).query, since = query.since, id = query.id, text = query.text;
	var session = channel.sessions.get(id);
	if(session == null || text == null) {
		this.write(res,400,{ error : "no such session"});
		return;
	}
	session.poke();
	haxe.Log.trace("appending msg:" + text,{ fileName : "ChatServer.hx", lineNumber : 216, className : "bdog.nodejs.ChatServer", methodName : "send"});
	channel.appendMessage(session.nick,"msg",text);
	this.write(res,200,{ });
}
bdog.nodejs.ChatServer.prototype.who = function(channel,req,res) {
	this.write(res,200,{ nicks : Lambda.array(channel.nicks)});
}
bdog.nodejs.ChatServer.prototype.write = function(res,errno,o) {
	var s = js.Node.stringify(o);
	var hdrs = { }
	hdrs["Content-Length"] = s.length;
	hdrs["Content-Type"] = "text/json";
	res.writeHead(errno,null,hdrs);
	res.write(s);
	res.end();
}
bdog.nodejs.ChatServer.prototype.__class__ = bdog.nodejs.ChatServer;
List = function(p) { if( p === $_ ) return; {
	this.length = 0;
}}
List.__name__ = ["List"];
List.prototype.add = function(item) {
	var x = [item];
	if(this.h == null) this.h = x;
	else this.q[1] = x;
	this.q = x;
	this.length++;
}
List.prototype.clear = function() {
	this.h = null;
	this.q = null;
	this.length = 0;
}
List.prototype.filter = function(f) {
	var l2 = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		if(f(v)) l2.add(v);
	}
	return l2;
}
List.prototype.first = function() {
	return (this.h == null?null:this.h[0]);
}
List.prototype.h = null;
List.prototype.isEmpty = function() {
	return (this.h == null);
}
List.prototype.iterator = function() {
	return { h : this.h, hasNext : function() {
		return (this.h != null);
	}, next : function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		return x;
	}}
}
List.prototype.join = function(sep) {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	while(l != null) {
		if(first) first = false;
		else s.b[s.b.length] = sep;
		s.b[s.b.length] = l[0];
		l = l[1];
	}
	return s.b.join("");
}
List.prototype.last = function() {
	return (this.q == null?null:this.q[0]);
}
List.prototype.length = null;
List.prototype.map = function(f) {
	var b = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		b.add(f(v));
	}
	return b;
}
List.prototype.pop = function() {
	if(this.h == null) return null;
	var x = this.h[0];
	this.h = this.h[1];
	if(this.h == null) this.q = null;
	this.length--;
	return x;
}
List.prototype.push = function(item) {
	var x = [item,this.h];
	this.h = x;
	if(this.q == null) this.q = x;
	this.length++;
}
List.prototype.q = null;
List.prototype.remove = function(v) {
	var prev = null;
	var l = this.h;
	while(l != null) {
		if(l[0] == v) {
			if(prev == null) this.h = l[1];
			else prev[1] = l[1];
			if(this.q == l) this.q = prev;
			this.length--;
			return true;
		}
		prev = l;
		l = l[1];
	}
	return false;
}
List.prototype.toString = function() {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	s.b[s.b.length] = "{";
	while(l != null) {
		if(first) first = false;
		else s.b[s.b.length] = ", ";
		s.b[s.b.length] = Std.string(l[0]);
		l = l[1];
	}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
List.prototype.__class__ = List;
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	if(o.hasOwnProperty != null) return o.hasOwnProperty(field);
	var arr = Reflect.fields(o);
	{ var $it17 = arr.iterator();
	while( $it17.hasNext() ) { var t = $it17.next();
	if(t == field) return true;
	}}
	return false;
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	}
	catch( $e18 ) {
		{
			var e = $e18;
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
		catch( $e19 ) {
			{
				var e = $e19;
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
EReg = function(r,opt) { if( r === $_ ) return; {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
}}
EReg.__name__ = ["EReg"];
EReg.prototype.customReplace = function(s,f) {
	var buf = new StringBuf();
	while(true) {
		if(!this.match(s)) break;
		buf.b[buf.b.length] = this.matchedLeft();
		buf.b[buf.b.length] = f(this);
		s = this.matchedRight();
	}
	buf.b[buf.b.length] = s;
	return buf.b.join("");
}
EReg.prototype.match = function(s) {
	this.r.m = this.r.exec(s);
	this.r.s = s;
	this.r.l = RegExp.leftContext;
	this.r.r = RegExp.rightContext;
	return (this.r.m != null);
}
EReg.prototype.matched = function(n) {
	return (this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
		var $r;
		throw "EReg::matched";
		return $r;
	}(this)));
}
EReg.prototype.matchedLeft = function() {
	if(this.r.m == null) throw "No string matched";
	if(this.r.l == null) return this.r.s.substr(0,this.r.m.index);
	return this.r.l;
}
EReg.prototype.matchedPos = function() {
	if(this.r.m == null) throw "No string matched";
	return { pos : this.r.m.index, len : this.r.m[0].length}
}
EReg.prototype.matchedRight = function() {
	if(this.r.m == null) throw "No string matched";
	if(this.r.r == null) {
		var sz = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(sz,this.r.s.length - sz);
	}
	return this.r.r;
}
EReg.prototype.r = null;
EReg.prototype.replace = function(s,by) {
	return s.replace(this.r,by);
}
EReg.prototype.split = function(s) {
	var d = "#__delim__#";
	return s.replace(this.r,d).split(d);
}
EReg.prototype.__class__ = EReg;
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
	Date.now = function() {
		return new Date();
	}
	Date.fromTime = function(t) {
		var d = new Date();
		d["setTime"](t);
		return d;
	}
	Date.fromString = function(s) {
		switch(s.length) {
		case 8:{
			var k = s.split(":");
			var d = new Date();
			d["setTime"](0);
			d["setUTCHours"](k[0]);
			d["setUTCMinutes"](k[1]);
			d["setUTCSeconds"](k[2]);
			return d;
		}break;
		case 10:{
			var k = s.split("-");
			return new Date(k[0],k[1] - 1,k[2],0,0,0);
		}break;
		case 19:{
			var k = s.split(" ");
			var y = k[0].split("-");
			var t = k[1].split(":");
			return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
		}break;
		default:{
			throw (("Invalid date format : " + s) + ", len is ") + s.length;
		}break;
		}
	}
	Date.prototype["toString"] = function() {
		var date = this;
		var m = date.getMonth() + 1;
		var d = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		var s = date.getSeconds();
		return (((((((((date.getFullYear() + "-") + ((m < 10?"0" + m:"" + m))) + "-") + ((d < 10?"0" + d:"" + d))) + " ") + ((h < 10?"0" + h:"" + h))) + ":") + ((mi < 10?"0" + mi:"" + mi))) + ":") + ((s < 10?"0" + s:"" + s));
	}
	Date.prototype.__class__ = Date;
	Date.__name__ = ["Date"];
}
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
$Main.init = tests.Chat.main();
