
import js.Node;
import haxe.io.Bytes;
import haxe.io.BytesBuffer;

class TestBytes {
  public static function
  main() {

    var bytes = Bytes.ofString("ritchie turner");

    trace(bytes.toString());

    for (b in 0 ...bytes.length)
      trace(bytes.get(b));

    trace(bytes.sub(8,2));

    trace(bytes.readString(8,6));

    var surname = Bytes.alloc(6);

    surname.blit(0,bytes,8,6);
    trace(surname);

    trace(surname.compare(bytes));
    trace(surname.compare(bytes.sub(8,6)));

    var newFirst = "elena";
    for (i in 0 ... newFirst.length) {
      bytes.set(i,newFirst.charCodeAt(i));
    }

    trace(bytes.toString());
    trace(surname);

    var bb = new BytesBuffer();
    bb.add(bytes);
    bb.addByte(32);
    bb.add(surname);

    trace(bb.getBytes().toString());
    
  }
  
  
}