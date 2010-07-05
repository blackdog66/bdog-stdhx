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
	Use [neko.io.File.read] to create a [FileInput]
**/
class FileInput extends haxe.io.Input {

	private var __f : FileHandle;
  private var buf:Buffer;

	public function new(f) {
		__f = f;
    buf = Node.newBuffer(512);
	}

	public override function readByte() : Int {
		return try {
			//Node.fs.readSync(__f,buf,0,1,null);
      //return buf[0];
      0;
		} catch( e : Dynamic ) {
			if( untyped __dollar__typeof(e) == __dollar__tarray )
				throw new haxe.io.Eof();
			else
				throw haxe.io.Error.Custom(e);
		}
	}

	public override function readBytes( s : haxe.io.Bytes, p : Int, l : Int ) : Int {
		return try {
      //  Node.fs.readSync(__f,buf,0,
                       //file_read(__f,s.getData(),p,l);
       0;
		} catch( e : Dynamic ) {
			if( untyped __dollar__typeof(e) == __dollar__tarray )
				throw new haxe.io.Eof();
			else
				throw haxe.io.Error.Custom(e);
		}
	}

	public override function close() {
		//Node.fs.close(__f);
		//file_close(__f);
	}

	public function seek( p : Int, pos : FileSeek ) {
		//file_seek(__f,p,switch( pos ) { case SeekBegin: 0; case SeekCur: 1; case SeekEnd: 2; });
	}

	public function tell() : Int {
		//return file_tell(__f);
    return 0;
	}


	public function eof() : Bool {
		//return file_eof(__f);
    return false;
	}

}
