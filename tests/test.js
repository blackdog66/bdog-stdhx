$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof js=='undefined') js = {} ; ;
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
TestFile = function() { }
TestFile.__name__ = ["TestFile"];
TestFile.main = function() {
	var fi = js.io.File.read("test.txt",false);
	{
		var _g = 0;
		while(_g < 10) {
			var i = _g++;
			var b = fi.readByte();
			haxe.Log.trace(String.fromCharCode(b),{ fileName : "TestFile.hx", lineNumber : 15, className : "TestFile", methodName : "main"});
		}
	}
	haxe.Log.trace(fi.tell(),{ fileName : "TestFile.hx", lineNumber : 18, className : "TestFile", methodName : "main"});
	fi.seek(4,js.io.FileSeek.SeekBegin);
	var buf = haxe.io.Bytes.alloc(5);
	fi.readBytes(buf,0,5);
	haxe.Log.trace(buf.toString(),{ fileName : "TestFile.hx", lineNumber : 23, className : "TestFile", methodName : "main"});
	haxe.Log.trace(fi.tell(),{ fileName : "TestFile.hx", lineNumber : 24, className : "TestFile", methodName : "main"});
	haxe.Log.trace("final",{ fileName : "TestFile.hx", lineNumber : 27, className : "TestFile", methodName : "main"});
	haxe.Log.trace("--------------",{ fileName : "TestFile.hx", lineNumber : 28, className : "TestFile", methodName : "main"});
	fi.seek(0,js.io.FileSeek.SeekBegin);
	var count = 0;
	while(!fi.eof()) {
		var b = fi.readByte();
		haxe.Log.trace(String.fromCharCode(b),{ fileName : "TestFile.hx", lineNumber : 33, className : "TestFile", methodName : "main"});
		count++;
	}
	haxe.Log.trace((("count = " + count) + ", tell = ") + fi.tell(),{ fileName : "TestFile.hx", lineNumber : 37, className : "TestFile", methodName : "main"});
	fi.close();
	js.io.File.copy("test.txt","copied.txt");
	var fo = js.io.File.append("copied.txt",true);
	fo.writeString(" wooty woot");
}
TestFile.prototype.__class__ = TestFile;
if(typeof haxe=='undefined') haxe = {} ; ;
if(!haxe.io) haxe.io = {}
haxe.io.Input = function() { }
haxe.io.Input.__name__ = ["haxe","io","Input"];
haxe.io.Input.prototype.bigEndian = null;
haxe.io.Input.prototype.close = function() {
	null;
}
haxe.io.Input.prototype.read = function(nbytes) {
	var s = haxe.io.Bytes.alloc(nbytes);
	var p = 0;
	while(nbytes > 0) {
		var k = this.readBytes(s,p,nbytes);
		if(k == 0) throw haxe.io.Error.Blocked;
		p += k;
		nbytes -= k;
	}
	return s;
}
haxe.io.Input.prototype.readAll = function(bufsize) {
	if(bufsize == null) bufsize = 16384;
	var buf = haxe.io.Bytes.alloc(bufsize);
	var total = new haxe.io.BytesBuffer();
	try {
		while(true) {
			var len = this.readBytes(buf,0,bufsize);
			if(len == 0) throw haxe.io.Error.Blocked;
			total.addBytes(buf,0,len);
		}
	}
	catch( $e2 ) {
		if( js.Boot.__instanceof($e2,haxe.io.Eof) ) {
			var e = $e2;
			null;
		} else throw($e2);
	}
	return total.getBytes();
}
haxe.io.Input.prototype.readByte = function() {
	return (function($this) {
		var $r;
		throw "Not implemented";
		return $r;
	}(this));
}
haxe.io.Input.prototype.readBytes = function(s,pos,len) {
	var k = len;
	var b = s.b;
	if(pos < 0 || len < 0 || pos + len > s.length) throw haxe.io.Error.OutsideBounds;
	while(k > 0) {
		b[pos] = this.readByte();
		pos++;
		k--;
	}
	return len;
}
haxe.io.Input.prototype.readDouble = function() {
	throw "Not implemented";
	return 0;
}
haxe.io.Input.prototype.readFloat = function() {
	throw "Not implemented";
	return 0;
}
haxe.io.Input.prototype.readFullBytes = function(s,pos,len) {
	while(len > 0) {
		var k = this.readBytes(s,pos,len);
		pos += k;
		len -= k;
	}
}
haxe.io.Input.prototype.readInt16 = function() {
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var n = (this.bigEndian?ch2 | (ch1 << 8):ch1 | (ch2 << 8));
	if((n & 32768) != 0) return n - 65536;
	return n;
}
haxe.io.Input.prototype.readInt24 = function() {
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var ch3 = this.readByte();
	var n = (this.bigEndian?(ch3 | (ch2 << 8)) | (ch1 << 16):(ch1 | (ch2 << 8)) | (ch3 << 16));
	if((n & 8388608) != 0) return n - 16777216;
	return n;
}
haxe.io.Input.prototype.readInt31 = function() {
	var ch1, ch2, ch3, ch4;
	if(this.bigEndian) {
		ch4 = this.readByte();
		ch3 = this.readByte();
		ch2 = this.readByte();
		ch1 = this.readByte();
	}
	else {
		ch1 = this.readByte();
		ch2 = this.readByte();
		ch3 = this.readByte();
		ch4 = this.readByte();
	}
	if(((ch4 & 128) == 0) != ((ch4 & 64) == 0)) throw haxe.io.Error.Overflow;
	return ((ch1 | (ch2 << 8)) | (ch3 << 16)) | (ch4 << 24);
}
haxe.io.Input.prototype.readInt32 = function() {
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var ch3 = this.readByte();
	var ch4 = this.readByte();
	return (this.bigEndian?(((ch1 << 8) | ch2) << 16) | ((ch3 << 8) | ch4):(((ch4 << 8) | ch3) << 16) | ((ch2 << 8) | ch1));
}
haxe.io.Input.prototype.readInt8 = function() {
	var n = this.readByte();
	if(n >= 128) return n - 256;
	return n;
}
haxe.io.Input.prototype.readLine = function() {
	var buf = new StringBuf();
	var last;
	var s;
	try {
		while((last = this.readByte()) != 10) buf.b[buf.b.length] = String.fromCharCode(last);
		s = buf.b.join("");
		if(s.charCodeAt(s.length - 1) == 13) s = s.substr(0,-1);
	}
	catch( $e3 ) {
		if( js.Boot.__instanceof($e3,haxe.io.Eof) ) {
			var e = $e3;
			{
				s = buf.b.join("");
				if(s.length == 0) throw (e);
			}
		} else throw($e3);
	}
	return s;
}
haxe.io.Input.prototype.readString = function(len) {
	var b = haxe.io.Bytes.alloc(len);
	this.readFullBytes(b,0,len);
	return b.toString();
}
haxe.io.Input.prototype.readUInt16 = function() {
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	return (this.bigEndian?ch2 | (ch1 << 8):ch1 | (ch2 << 8));
}
haxe.io.Input.prototype.readUInt24 = function() {
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var ch3 = this.readByte();
	return (this.bigEndian?(ch3 | (ch2 << 8)) | (ch1 << 16):(ch1 | (ch2 << 8)) | (ch3 << 16));
}
haxe.io.Input.prototype.readUInt30 = function() {
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var ch3 = this.readByte();
	var ch4 = this.readByte();
	if(((this.bigEndian?ch1:ch4)) >= 64) throw haxe.io.Error.Overflow;
	return (this.bigEndian?((ch4 | (ch3 << 8)) | (ch2 << 16)) | (ch1 << 24):((ch1 | (ch2 << 8)) | (ch3 << 16)) | (ch4 << 24));
}
haxe.io.Input.prototype.readUntil = function(end) {
	var buf = new StringBuf();
	var last;
	while((last = this.readByte()) != end) buf.b[buf.b.length] = String.fromCharCode(last);
	return buf.b.join("");
}
haxe.io.Input.prototype.setEndian = function(b) {
	this.bigEndian = b;
	return b;
}
haxe.io.Input.prototype.__class__ = haxe.io.Input;
if(!js.io) js.io = {}
js.io.FileInput = function(f) { if( f === $_ ) return; {
	this.__f = f;
	this.bufOne = js.Node.newBuffer(1);
	this.pos = 0;
	this.size = js.Node.fs.fstatSync(this.__f).size;
	haxe.Log.trace("Size is " + this.size,{ fileName : "FileInput.hx", lineNumber : 45, className : "js.io.FileInput", methodName : "new"});
}}
js.io.FileInput.__name__ = ["js","io","FileInput"];
js.io.FileInput.__super__ = haxe.io.Input;
for(var k in haxe.io.Input.prototype ) js.io.FileInput.prototype[k] = haxe.io.Input.prototype[k];
js.io.FileInput.prototype.__f = null;
js.io.FileInput.prototype.bufOne = null;
js.io.FileInput.prototype.close = function() {
	js.Node.fs.closeSync(this.__f);
}
js.io.FileInput.prototype.eof = function() {
	return this.pos >= this.size;
}
js.io.FileInput.prototype.pos = null;
js.io.FileInput.prototype.readByte = function() {
	return (function($this) {
		var $r;
		try {
			$r = (function($this) {
				var $r;
				$this.pos += js.Node.fs.readSync($this.__f,$this.bufOne,0,1,$this.pos);
				$r = $this.bufOne[0];
				return $r;
			}($this));
		}
		catch( $e4 ) {
			{
				var e = $e4;
				$r = (__dollar__typeof(e) == __dollar__tarray?(function($this) {
					var $r;
					throw new haxe.io.Eof();
					return $r;
				}($this)):(function($this) {
					var $r;
					throw haxe.io.Error.Custom(e);
					return $r;
				}($this)));
			}
		}
		return $r;
	}(this));
}
js.io.FileInput.prototype.readBytes = function(s,p,l) {
	return (function($this) {
		var $r;
		try {
			$r = (function($this) {
				var $r;
				var bb = js.Node.newBuffer(l), bytesRead = js.Node.fs.readSync($this.__f,bb,0,l,$this.pos);
				$this.pos += bytesRead;
				s.blit(p,haxe.io.Bytes.ofData(bb),0,bb.length);
				$r = bytesRead;
				return $r;
			}($this));
		}
		catch( $e5 ) {
			{
				var e = $e5;
				$r = (__dollar__typeof(e) == __dollar__tarray?(function($this) {
					var $r;
					throw new haxe.io.Eof();
					return $r;
				}($this)):(function($this) {
					var $r;
					throw haxe.io.Error.Custom(e);
					return $r;
				}($this)));
			}
		}
		return $r;
	}(this));
}
js.io.FileInput.prototype.seek = function(p,at) {
	if(at != js.io.FileSeek.SeekBegin) throw "I only do SeekBegin";
	this.pos = p;
}
js.io.FileInput.prototype.size = null;
js.io.FileInput.prototype.tell = function() {
	return this.pos;
}
js.io.FileInput.prototype.__class__ = js.io.FileInput;
haxe.io.Bytes = function(length,b) { if( length === $_ ) return; {
	this.length = length;
	this.b = b;
}}
haxe.io.Bytes.__name__ = ["haxe","io","Bytes"];
haxe.io.Bytes.alloc = function(length) {
	return new haxe.io.Bytes(length,js.Node.newBuffer(length));
}
haxe.io.Bytes.ofString = function(s) {
	var nb = js.Node.newBuffer(s,"utf8");
	haxe.Log.trace("yes here",{ fileName : "Bytes.hx", lineNumber : 273, className : "haxe.io.Bytes", methodName : "ofString"});
	return new haxe.io.Bytes(nb.length,nb);
}
haxe.io.Bytes.ofData = function(b) {
	return new haxe.io.Bytes(b.length,b);
}
haxe.io.Bytes.prototype.b = null;
haxe.io.Bytes.prototype.blit = function(pos,src,srcpos,len) {
	if(pos < 0 || srcpos < 0 || len < 0 || pos + len > this.length || srcpos + len > src.length) throw haxe.io.Error.OutsideBounds;
	src.b.copy(this.b,pos,srcpos,srcpos + len);
}
haxe.io.Bytes.prototype.compare = function(other) {
	var b1 = this.b;
	var b2 = other.b;
	var len = ((this.length < other.length)?this.length:other.length);
	{
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			if(b1[i] != b2[i]) return b1[i] - b2[i];
		}
	}
	return this.length - other.length;
}
haxe.io.Bytes.prototype.get = function(pos) {
	return this.b[pos];
}
haxe.io.Bytes.prototype.getData = function() {
	return this.b;
}
haxe.io.Bytes.prototype.length = null;
haxe.io.Bytes.prototype.readString = function(pos,len) {
	if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
	var s = "";
	var b = this.b;
	var fcc = $closure(String,"fromCharCode");
	var i = pos;
	var max = pos + len;
	while(i < max) {
		var c = b[i++];
		if(c < 128) {
			if(c == 0) break;
			s += fcc(c);
		}
		else if(c < 224) s += fcc(((c & 63) << 6) | (b[i++] & 127));
		else if(c < 240) {
			var c2 = b[i++];
			s += fcc((((c & 31) << 12) | ((c2 & 127) << 6)) | (b[i++] & 127));
		}
		else {
			var c2 = b[i++];
			var c3 = b[i++];
			s += fcc(((((c & 15) << 18) | ((c2 & 127) << 12)) | ((c3 << 6) & 127)) | (b[i++] & 127));
		}
	}
	return s;
}
haxe.io.Bytes.prototype.set = function(pos,v) {
	this.b[pos] = v;
}
haxe.io.Bytes.prototype.sub = function(pos,len) {
	if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
	var nb = js.Node.newBuffer(len), slice = this.b.slice(pos,pos + len);
	slice.copy(nb,0,0,len);
	return new haxe.io.Bytes(len,nb);
}
haxe.io.Bytes.prototype.toString = function() {
	return this.readString(0,this.length);
}
haxe.io.Bytes.prototype.__class__ = haxe.io.Bytes;
haxe.Int32 = function() { }
haxe.Int32.__name__ = ["haxe","Int32"];
haxe.Int32.make = function(a,b) {
	return (a << 16) | b;
}
haxe.Int32.ofInt = function(x) {
	return x;
}
haxe.Int32.toInt = function(x) {
	if((((x) >> 30) & 1) != ((x) >>> 31)) throw "Overflow " + x;
	return (x) & -1;
}
haxe.Int32.toNativeInt = function(x) {
	return x;
}
haxe.Int32.add = function(a,b) {
	return (a) + (b);
}
haxe.Int32.sub = function(a,b) {
	return (a) - (b);
}
haxe.Int32.mul = function(a,b) {
	return (a) * (b);
}
haxe.Int32.div = function(a,b) {
	return Std["int"]((a) / (b));
}
haxe.Int32.mod = function(a,b) {
	return (a) % (b);
}
haxe.Int32.shl = function(a,b) {
	return (a) << b;
}
haxe.Int32.shr = function(a,b) {
	return (a) >> b;
}
haxe.Int32.ushr = function(a,b) {
	return (a) >>> b;
}
haxe.Int32.and = function(a,b) {
	return (a) & (b);
}
haxe.Int32.or = function(a,b) {
	return (a) | (b);
}
haxe.Int32.xor = function(a,b) {
	return (a) ^ (b);
}
haxe.Int32.neg = function(a) {
	return -(a);
}
haxe.Int32.complement = function(a) {
	return ~(a);
}
haxe.Int32.compare = function(a,b) {
	return a - b;
}
haxe.Int32.prototype.__class__ = haxe.Int32;
haxe.io.Output = function() { }
haxe.io.Output.__name__ = ["haxe","io","Output"];
haxe.io.Output.prototype.bigEndian = null;
haxe.io.Output.prototype.close = function() {
	null;
}
haxe.io.Output.prototype.flush = function() {
	null;
}
haxe.io.Output.prototype.prepare = function(nbytes) {
	null;
}
haxe.io.Output.prototype.setEndian = function(b) {
	this.bigEndian = b;
	return b;
}
haxe.io.Output.prototype.write = function(s) {
	var l = s.length;
	var p = 0;
	while(l > 0) {
		var k = this.writeBytes(s,p,l);
		if(k == 0) throw haxe.io.Error.Blocked;
		p += k;
		l -= k;
	}
}
haxe.io.Output.prototype.writeByte = function(c) {
	throw "Not implemented";
}
haxe.io.Output.prototype.writeBytes = function(s,pos,len) {
	var k = len;
	var b = s.b;
	if(pos < 0 || len < 0 || pos + len > s.length) throw haxe.io.Error.OutsideBounds;
	while(k > 0) {
		this.writeByte(b[pos]);
		pos++;
		k--;
	}
	return len;
}
haxe.io.Output.prototype.writeDouble = function(x) {
	throw "Not implemented";
}
haxe.io.Output.prototype.writeFloat = function(x) {
	throw "Not implemented";
}
haxe.io.Output.prototype.writeFullBytes = function(s,pos,len) {
	while(len > 0) {
		var k = this.writeBytes(s,pos,len);
		pos += k;
		len -= k;
	}
}
haxe.io.Output.prototype.writeInput = function(i,bufsize) {
	if(bufsize == null) bufsize = 4096;
	var buf = haxe.io.Bytes.alloc(bufsize);
	try {
		while(true) {
			var len = i.readBytes(buf,0,bufsize);
			if(len == 0) throw haxe.io.Error.Blocked;
			var p = 0;
			while(len > 0) {
				var k = this.writeBytes(buf,p,len);
				if(k == 0) throw haxe.io.Error.Blocked;
				p += k;
				len -= k;
			}
		}
	}
	catch( $e6 ) {
		if( js.Boot.__instanceof($e6,haxe.io.Eof) ) {
			var e = $e6;
			null;
		} else throw($e6);
	}
}
haxe.io.Output.prototype.writeInt16 = function(x) {
	if(x < -32768 || x >= 32768) throw haxe.io.Error.Overflow;
	this.writeUInt16(x & 65535);
}
haxe.io.Output.prototype.writeInt24 = function(x) {
	if(x < -8388608 || x >= 8388608) throw haxe.io.Error.Overflow;
	this.writeUInt24(x & 16777215);
}
haxe.io.Output.prototype.writeInt31 = function(x) {
	if(x < -1073741824 || x >= 1073741824) throw haxe.io.Error.Overflow;
	if(this.bigEndian) {
		this.writeByte(x >>> 24);
		this.writeByte((x >> 16) & 255);
		this.writeByte((x >> 8) & 255);
		this.writeByte(x & 255);
	}
	else {
		this.writeByte(x & 255);
		this.writeByte((x >> 8) & 255);
		this.writeByte((x >> 16) & 255);
		this.writeByte(x >>> 24);
	}
}
haxe.io.Output.prototype.writeInt32 = function(x) {
	if(this.bigEndian) {
		this.writeByte(haxe.Int32.toInt((x) >>> 24));
		this.writeByte(haxe.Int32.toInt((x) >>> 16) & 255);
		this.writeByte(haxe.Int32.toInt((x) >>> 8) & 255);
		this.writeByte(haxe.Int32.toInt((x) & (255)));
	}
	else {
		this.writeByte(haxe.Int32.toInt((x) & (255)));
		this.writeByte(haxe.Int32.toInt((x) >>> 8) & 255);
		this.writeByte(haxe.Int32.toInt((x) >>> 16) & 255);
		this.writeByte(haxe.Int32.toInt((x) >>> 24));
	}
}
haxe.io.Output.prototype.writeInt8 = function(x) {
	if(x < -128 || x >= 128) throw haxe.io.Error.Overflow;
	this.writeByte(x & 255);
}
haxe.io.Output.prototype.writeString = function(s) {
	var b = haxe.io.Bytes.ofString(s);
	this.writeFullBytes(b,0,b.length);
}
haxe.io.Output.prototype.writeUInt16 = function(x) {
	if(x < 0 || x >= 65536) throw haxe.io.Error.Overflow;
	if(this.bigEndian) {
		this.writeByte(x >> 8);
		this.writeByte(x & 255);
	}
	else {
		this.writeByte(x & 255);
		this.writeByte(x >> 8);
	}
}
haxe.io.Output.prototype.writeUInt24 = function(x) {
	if(x < 0 || x >= 16777216) throw haxe.io.Error.Overflow;
	if(this.bigEndian) {
		this.writeByte(x >> 16);
		this.writeByte((x >> 8) & 255);
		this.writeByte(x & 255);
	}
	else {
		this.writeByte(x & 255);
		this.writeByte((x >> 8) & 255);
		this.writeByte(x >> 16);
	}
}
haxe.io.Output.prototype.writeUInt30 = function(x) {
	if(x < 0 || x >= 1073741824) throw haxe.io.Error.Overflow;
	if(this.bigEndian) {
		this.writeByte(x >>> 24);
		this.writeByte((x >> 16) & 255);
		this.writeByte((x >> 8) & 255);
		this.writeByte(x & 255);
	}
	else {
		this.writeByte(x & 255);
		this.writeByte((x >> 8) & 255);
		this.writeByte((x >> 16) & 255);
		this.writeByte(x >>> 24);
	}
}
haxe.io.Output.prototype.__class__ = haxe.io.Output;
js.io.FileOutput = function(f) { if( f === $_ ) return; {
	this.__f = f;
	this.bufOne = js.Node.newBuffer(1);
	this.pos = 0;
}}
js.io.FileOutput.__name__ = ["js","io","FileOutput"];
js.io.FileOutput.__super__ = haxe.io.Output;
for(var k in haxe.io.Output.prototype ) js.io.FileOutput.prototype[k] = haxe.io.Output.prototype[k];
js.io.FileOutput.prototype.__f = null;
js.io.FileOutput.prototype.bufOne = null;
js.io.FileOutput.prototype.close = function() {
	js.Node.fs.closeSync(this.__f);
}
js.io.FileOutput.prototype.flush = function() {
	haxe.Log.trace("calling flush",{ fileName : "FileOutput.hx", lineNumber : 61, className : "js.io.FileOutput", methodName : "flush"});
}
js.io.FileOutput.prototype.pos = null;
js.io.FileOutput.prototype.seek = function(p,at) {
	if(at != js.io.FileSeek.SeekBegin) throw "I only do SeekBegin";
	this.pos = p;
}
js.io.FileOutput.prototype.tell = function() {
	return this.pos;
}
js.io.FileOutput.prototype.writeByte = function(c) {
	haxe.Log.trace("doing writeByte with " + String.fromCharCode(c),{ fileName : "FileOutput.hx", lineNumber : 45, className : "js.io.FileOutput", methodName : "writeByte"});
	try {
		this.bufOne[0] = c;
		this.pos += js.Node.fs.writeSync(this.__f,this.bufOne,0,1,this.pos);
	}
	catch( $e7 ) {
		{
			var e = $e7;
			throw haxe.io.Error.Custom(e);
		}
	}
}
js.io.FileOutput.prototype.writeBytes = function(s,p,l) {
	haxe.Log.trace("doing writeBytes with " + s.toString(),{ fileName : "FileOutput.hx", lineNumber : 53, className : "js.io.FileOutput", methodName : "writeBytes"});
	return (function($this) {
		var $r;
		try {
			$r = $this.pos += js.Node.fs.writeSync($this.__f,s.b.slice(p,p + l),0,l,$this.pos);
		}
		catch( $e8 ) {
			{
				var e = $e8;
				$r = (function($this) {
					var $r;
					throw haxe.io.Error.Custom(e);
					return $r;
				}($this));
			}
		}
		return $r;
	}(this));
}
js.io.FileOutput.prototype.__class__ = js.io.FileOutput;
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
js.io.FileSeek = { __ename__ : ["js","io","FileSeek"], __constructs__ : ["SeekBegin","SeekCur","SeekEnd"] }
js.io.FileSeek.SeekBegin = ["SeekBegin",0];
js.io.FileSeek.SeekBegin.toString = $estr;
js.io.FileSeek.SeekBegin.__enum__ = js.io.FileSeek;
js.io.FileSeek.SeekCur = ["SeekCur",1];
js.io.FileSeek.SeekCur.toString = $estr;
js.io.FileSeek.SeekCur.__enum__ = js.io.FileSeek;
js.io.FileSeek.SeekEnd = ["SeekEnd",2];
js.io.FileSeek.SeekEnd.toString = $estr;
js.io.FileSeek.SeekEnd.__enum__ = js.io.FileSeek;
js.io.File = function() { }
js.io.File.__name__ = ["js","io","File"];
js.io.File.getContent = function(path) {
	return js.Node.fs.readFileSync(path,"utf8");
}
js.io.File.getBytes = function(path) {
	var buf = js.Node.fs.readFileSync(path);
	return haxe.io.Bytes.ofData(buf);
}
js.io.File.read = function(path,binary) {
	var fd = js.Node.fs.openSync(path,"r+");
	return new js.io.FileInput(fd);
}
js.io.File.write = function(path,binary) {
	var fd = js.Node.fs.openSync(path,"w");
	return new js.io.FileOutput(fd);
}
js.io.File.append = function(path,binary) {
	var fd = js.Node.fs.openSync(path,"a");
	return new js.io.FileOutput(fd);
}
js.io.File.copy = function(src,dst) {
	js.Node.fs.writeFileSync(dst,js.io.File.getContent(src));
}
js.io.File.getChar = function(echo) {
	return -1;
}
js.io.File.stdinAsync = function(cb) {
	var s = js.Node.process.openStdin();
	s.addListener("fd",function(fd) {
		cb(new js.io.FileInput(fd));
	});
}
js.io.File.prototype.__class__ = js.io.File;
haxe.io.Error = { __ename__ : ["haxe","io","Error"], __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] }
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; $x.toString = $estr; return $x; }
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.io.BytesBuffer = function(p) { if( p === $_ ) return; {
	this.b = new Array();
}}
haxe.io.BytesBuffer.__name__ = ["haxe","io","BytesBuffer"];
haxe.io.BytesBuffer.prototype.add = function(src) {
	var b1 = this.b;
	var b2 = src.b;
	{
		var _g1 = 0, _g = src.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.b.push(b2[i]);
		}
	}
}
haxe.io.BytesBuffer.prototype.addByte = function($byte) {
	this.b.push($byte);
}
haxe.io.BytesBuffer.prototype.addBytes = function(src,pos,len) {
	if(pos < 0 || len < 0 || pos + len > src.length) throw haxe.io.Error.OutsideBounds;
	var b1 = this.b;
	var b2 = src.b;
	{
		var _g1 = pos, _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			this.b.push(b2[i]);
		}
	}
}
haxe.io.BytesBuffer.prototype.b = null;
haxe.io.BytesBuffer.prototype.getBytes = function() {
	var nb = js.Node.newBuffer(this.b);
	bytes = new haxe.io.Bytes(nb.length,nb);
	this.b = null;
	return bytes;
}
haxe.io.BytesBuffer.prototype.__class__ = haxe.io.BytesBuffer;
haxe.io.Eof = function(p) { if( p === $_ ) return; {
	null;
}}
haxe.io.Eof.__name__ = ["haxe","io","Eof"];
haxe.io.Eof.prototype.toString = function() {
	return "Eof";
}
haxe.io.Eof.prototype.__class__ = haxe.io.Eof;
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
js.Node.require = null;
js.Node.paths = null;
js.Node.setTimeout = null;
js.Node.clearTimeout = null;
js.Node.setInterval = null;
js.Node.clearInterval = null;
js.Node.global = null;
js.Node.process = null;
js.Node.sys = null;
js.Node.fs = null;
js.Node.net = null;
js.Node.http = null;
js.Node.__filename = null;
js.Node.__dirname = null;
js.Node.module = null;
js.Node.stringify = null;
js.Node.parse = null;
js.Node.path = null;
js.Node.url = null;
js.Node.queryString = null;
js.Node.console = null;
js.Node.spawn = function(cmd,prms,env) {
	var cp = js.Node.require("child_process");
	return cp.spawn(cmd,prms,env);
}
js.Node.exec = function(cmd,options,fn) {
	var cp = js.Node.require("child_process");
	if(options != null) cp.exec(cmd,options,fn);
	else cp.exec(cmd,fn);
}
js.Node.newBuffer = function(d,enc) {
	var b = js.Node.require("buffer");
	if(enc != null) return new b.Buffer(d,enc);
	else return new b.Buffer(d);
}
js.Node.newScript = function(code,fileName) {
	var b = js.Node.process.binding("evals");
	return new b.Script(code,fileName);
}
js.Node.crypto = function() {
	return js.Node.require("crypto");
}
js.Node.dns = function() {
	return js.Node.require("dns");
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
{
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
	js.Node.console = console;
}
js.Node.UTF8 = "utf8";
js.Node.ASCII = "ascii";
js.Node.BINARY = "binary";
js.Node.EVENT_EVENTEMITTER_NEWLISTENER = "newListener";
js.Node.EVENT_EVENTEMITTER_ERROR = "error";
js.Node.EVENT_STREAM_DATA = "data";
js.Node.EVENT_STREAM_END = "end";
js.Node.EVENT_STREAM_ERROR = "error";
js.Node.EVENT_STREAM_CLOSE = "close";
js.Node.EVENT_STREAM_DRAIN = "drain";
js.Node.EVENT_STREAM_CONNECT = "connect";
js.Node.EVENT_STREAM_SECURE = "secure";
js.Node.EVENT_STREAM_TIMEOUT = "timeout";
js.Node.EVENT_PROCESS_EXIT = "exit";
js.Node.EVENT_PROCESS_UNCAUGHTEXCEPTION = "uncaughtException";
js.Node.EVENT_PROCESS_SIGINT = "SIGINT";
js.Node.EVENT_PROCESS_SIGUSR1 = "SIGUSR1";
js.Node.EVENT_CHILDPROCESS_EXIT = "exit";
js.Node.EVENT_HTTPSERVER_REQUEST = "request";
js.Node.EVENT_HTTPSERVER_CONNECTION = "connection";
js.Node.EVENT_HTTPSERVER_CLOSE = "close";
js.Node.EVENT_HTTPSERVER_UPGRADE = "upgrade";
js.Node.EVENT_HTTPSERVER_CLIENTERROR = "clientError";
js.Node.EVENT_HTTPSERVERREQUEST_DATA = "data";
js.Node.EVENT_HTTPSERVERREQUEST_END = "end";
js.Node.EVENT_CLIENTREQUEST_RESPONSE = "response";
js.Node.EVENT_CLIENTRESPONSE_DATA = "data";
js.Node.EVENT_CLIENTRESPONSE_END = "end";
js.Node.EVENT_NETSERVER_CONNECTION = "connection";
js.Node.EVENT_NETSERVER_CLOSE = "close";
$Main.init = TestFile.main();
