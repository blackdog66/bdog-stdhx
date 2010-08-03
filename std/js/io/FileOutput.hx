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

/**
	Use [neko.io.File.write] to create a [FileOutput]
**/
class FileOutput extends haxe.io.Output {

	private var __f : Int;
  private var bufOne:Buffer;
  private var pos:Int;

	public function new(f) {
		__f = untyped f;
    bufOne = Node.newBuffer(1);
    pos = 0;
	}

	public override function writeByte( c : Int ) {
    try{
      bufOne[0] = c;
      pos += Node.fs.writeSync(__f,bufOne,0,1,pos);
    } catch( e : Dynamic ) throw haxe.io.Error.Custom(e);
	}

	public override function writeBytes( s : haxe.io.Bytes, p : Int, l : Int ) : Int {
    return try {
      pos += Node.fs.writeSync(__f,s.getData().slice(p,p+l),0,l,pos);
    } catch( e : Dynamic ) throw haxe.io.Error.Custom(e);
	}

	public override function flush() {
      //file_flush(__f);
    trace("calling flush");
	}

	public override function close() {
		Node.fs.closeSync(__f);
	}

	public function seek( p : Int, at : FileSeek ) {
    if (at != SeekBegin) throw "I only do SeekBegin";
    pos = p;
  }

	public function tell() : Int {
    return pos;
	}

}
