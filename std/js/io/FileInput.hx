/*
 * Copyright (c) 2005, The haXe Project Contributors
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *   - Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *   - Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE HAXE PROJECT CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE HAXE PROJECT CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 * OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
 * DAMAGE.
 */
package js.io;

import js.io.File;
import js.Node;
import haxe.io.Bytes;
/**
	Use [neko.io.File.read] to create a [FileInput]
**/
class FileInput extends haxe.io.Input {

	private var __f : Int;
  private var bufOne:Buffer;
  private var pos:Int;
  private var size:Int;
  
	public function new(f) {
		untyped __f = f;
    bufOne = Node.newBuffer(1);
    pos = 0;
    size = Node.fs.fstatSync(__f).size;
	}

	public override function readByte() : Int {
		return try {
			pos += Node.fs.readSync(__f,bufOne,0,1,pos);
      bufOne[0];
		} catch( e : Dynamic ) {
			if( untyped __dollar__typeof(e) == __dollar__tarray )
				throw new haxe.io.Eof();
			else
				throw haxe.io.Error.Custom(e);
		}
	}

	public override function readBytes( s : haxe.io.Bytes, p : Int, l : Int ) : Int {
		return try {
      var bb = Node.newBuffer(l),
        bytesRead = Node.fs.readSync(__f,bb,0,l,pos);
      pos += bytesRead;
      s.blit(p,Bytes.ofData(bb),0,bb.length);
      bytesRead;
		} catch( e : Dynamic ) {
			if( untyped __dollar__typeof(e) == __dollar__tarray )
				throw new haxe.io.Eof();
			else
				throw haxe.io.Error.Custom(e);
		}
	}

	public override function close() {
		Node.fs.closeSync(untyped __f);
	}

	public function seek( p : Int, at : FileSeek ) {
    if (at != SeekBegin) throw "I only do SeekBegin";
    pos = p;
	}

	public function tell() : Int {
    return pos ;
	}

	public function eof() : Bool {
    return pos >= size;
	}

}
