
import js.Node;

class Test {
   public static function main() {
      trace(Node.process.memoryUsage());
      trace(Node.process.memoryUsage().heapTotal);
   }

}

//haxe -D nodejs -cp ../ -js test.js -main Test
