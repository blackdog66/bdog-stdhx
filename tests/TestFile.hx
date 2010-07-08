
import js.io.File;
import js.io.FileInput;
import haxe.io.Bytes;

class TestFile {

  public static function
  main() {

    var fi = File.read("test.txt",false);

    for (i in 0...10) {
      var b = fi.readByte();
      trace(String.fromCharCode(b));
    }

    trace(fi.tell());

    fi.seek(4,SeekBegin);
    var buf = Bytes.alloc(5);
    fi.readBytes(buf,0,5);
    trace(buf.toString());
    trace(fi.tell());
    

    trace("final");
    trace("--------------");
    fi.seek(0,SeekBegin);
    var count = 0;
    while(!fi.eof()) {
      var b = fi.readByte();
      trace(String.fromCharCode(b));
      count++;
    }

    trace("count = "+count +", tell = "+fi.tell());

    fi.close();

    File.copy("test.txt","copied.txt");
    var fo = File.append("copied.txt",true);
    fo.writeString(" wooty woot");

    
  }
  
}