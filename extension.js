function random (max){return Math.floor (Math.random () * (max)) + 1}

class ClonningObjects {
    getInfo(){ {
      return {
        id: 'ClonningObjects', // change this if you make an actual extension!
        name: 'ClonningObjects',
        blocks: [
          {
            opcode: 'ClonningObjects',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'random: max[ONE]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Max'
              },
              }
            
            }
        ]
          }
        
      };
    }
    ClonningObjects(args) {
      return random(args.ONE);
    }
  }
  Scratch.extensions.register(new StrictEqualityExtension());
