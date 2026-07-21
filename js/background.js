/* =====================================================================
   BACKGROUND SCENE (Phaser 3)

   Keeps the spirit of the original rehmanilyas.github.io background:
   a particle emitter that lags behind the cursor to create a wave-like
   trail, plus a second emitter that follows the pointer directly.

   Added on top:
   - A second, cooler-toned trail emitter for more color depth.
   - A field of floating low-poly shapes that drift on their own,
     bounce off the screen edges, and get pushed away when the
     cursor touches them (via an invisible physics body on the pointer).

   Everything is generated procedurally (no external image assets needed),
   so this file has no dependency on an images/ folder to run.
===================================================================== */

(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const config = {
    type: Phaser.AUTO,
    parent: 'bg-canvas-wrap',
    width: window.innerWidth,
    height: window.innerHeight,
    transparent: true,
    physics: {
      default: 'arcade',
      arcade: { debug: false, gravity: { x: 0, y: 0 } }
    },
    scale: {
      mode: Phaser.Scale.RESIZE,
      autoCenter: Phaser.Scale.NO_CENTER
    },
    scene: { preload, create, update }
  };

  const game = new Phaser.Game(config);

  let emitterWarm, emitterCool, cursorBody, shapes;
  
  let targetX, targetY;
  let targetX2, targetY2;

    // Global pointer position, independent of Phaser's canvas/input system
    let globalPointerX = window.innerWidth / 2;
    let globalPointerY = window.innerHeight / 2;

    // Track pointer anywhere on the page, even over other DOM elements
    window.addEventListener('pointermove', (event) => {
    globalPointerX = event.clientX;
    globalPointerY = event.clientY;
    }, { passive: true });

  /* ===================================================================
     PRELOAD — procedurally generate a soft glow particle texture and a
     handful of outlined shape textures, so no external images are needed.
  =================================================================== */
  function preload() {
    // soft radial glow used by both particle emitters

    this.load.image('fire', './images/fire.png');
    this.load.image('cursor', './images/particle.png');

    
    generateShapeTextures(this);
  }

  function generateShapeTextures(scene) {
    const size = 56;
    const defs = {
      shapeTri: (g) => {
        g.beginPath();
        g.moveTo(size / 2, 4);
        g.lineTo(size - 6, size - 8);
        g.lineTo(6, size - 8);
        g.closePath();
        g.strokePath();
      },
      shapeHex: (g) => {
        const cx = size / 2, cy = size / 2, r = size / 2 - 4;
        g.beginPath();
        for (let i = 0; i < 6; i++) {
          const a = (Math.PI / 3) * i - Math.PI / 2;
          const x = cx + r * Math.cos(a);
          const y = cy + r * Math.sin(a);
          i === 0 ? g.moveTo(x, y) : g.lineTo(x, y);
        }
        g.closePath();
        g.strokePath();
      },
      shapeDiamond: (g) => {
        g.beginPath();
        g.moveTo(size / 2, 2);
        g.lineTo(size - 2, size / 2);
        g.lineTo(size / 2, size - 2);
        g.lineTo(2, size / 2);
        g.closePath();
        g.strokePath();
      },
      shapeRing: (g) => {
        g.strokeCircle(size / 2, size / 2, size / 2 - 5);
      }
    };

    Object.keys(defs).forEach((key) => {
      const g = scene.make.graphics({ x: 0, y: 0, add: false });
      g.lineStyle(2.5, 0xffffff, 1);
      defs[key](g);
      g.generateTexture(key, size, size);
      g.destroy();
    });
  }

  /* ===================================================================
     CREATE
  =================================================================== */
  function create() {
    const scene = this;
    targetX = scene.scale.width / 2;
    targetY = scene.scale.height / 2;

    targetX2 = targetX;
    targetY2 = targetY;

    scene.physics.world.setBounds(0, 0, scene.scale.width, scene.scale.height);

    /* --- trail emitter #1: lags behind the cursor, wave-like motion,
       same easing approach as the original site --- */
    const particlesWarm = scene.add.particles('fire');
    emitterWarm = particlesWarm.createEmitter({
      quantity: 1,
      scale: { start: 0.1, end: 1.5 },
      blendMode: 'SCREEN',
      tint: [0xFF3300, 0X550000],
      lifespan: { min: 400, max: 900 },
      alpha: { start: 1, end: 0 }
    });
    emitterWarm.setPosition(targetX, targetY);
    emitterWarm.setGravity(0, -400);

    /* --- trail emitter #2: follows the pointer directly, cooler tones --- */
    const particlesCool = scene.add.particles('fire');
    emitterCool = particlesCool.createEmitter({
      quantity: 1,
      scale: { start: 0.1, end: 1.5 },
      blendMode: 'SCREEN',
      tint: [0xFF00CC, 0X0088FF],
      lifespan: { min: 400, max: 900 },
      alpha: { start: 1, end: 0 },
      //speed: { min: 10, max: 60 }
    });
    //emitterCool.startFollow(scene.input.activePointer);
    emitterCool.setPosition(targetX2, targetY2);
    emitterCool.setGravity(0, 400);

    /* --- floating shapes: drift, bounce off screen edges, get pushed
       away by the cursor --- */
    shapes = scene.physics.add.group();
    const shapeKeys = ['shapeTri', 'shapeHex', 'shapeDiamond', 'shapeRing'];
    const colors = [0x00e5ff, 0xff2fd0, 0xc6ff3c];
    const SHAPE_COUNT = 16;

    for (let i = 0; i < SHAPE_COUNT; i++) {
      const key = Phaser.Utils.Array.GetRandom(shapeKeys);
      const x = Phaser.Math.Between(60, scene.scale.width - 60);
      const y = Phaser.Math.Between(60, scene.scale.height - 60);
      const s = shapes.create(x, y, key);

      s.setTint(Phaser.Utils.Array.GetRandom(colors));
      s.setAlpha(0.55);
      const scale = Phaser.Math.FloatBetween(0.45, 1.15);
      s.setScale(scale);
      s.setCollideWorldBounds(true);
      s.setBounce(1, 1);
      s.body.allowGravity = false;
      s.body.setCircle(s.width * 0.42);

      const speed = reduceMotion ? 0 : Phaser.Math.Between(30, 70);
      const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
      s.body.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);

      s.rotSpeed = reduceMotion ? 0 : Phaser.Math.FloatBetween(-0.015, 0.015);
    }

    /* --- invisible physics body that tracks the pointer, so shapes can
       "collide" with the cursor and change direction --- */
    cursorBody = scene.physics.add.image(targetX, targetY, 'cursor').setVisible(false);
    cursorBody.setAlpha(0); // keep a tiny visible footprint so the body renders/updates reliably
    cursorBody.body.allowGravity = false;
    cursorBody.body.immovable = true;
    cursorBody.body.setCircle(42);

    scene.physics.add.collider(shapes, cursorBody);

    // scene.physics.add.overlap(shapes, cursorBody, (shape) => {
    //   const angle = Phaser.Math.Angle.Between(cursorBody.x, cursorBody.y, shape.x, shape.y);
    //   const speed = Math.max(shape.body.velocity.length(), 60);
    //   shape.body.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
    // });

    /* --- keep the play field matched to the window on resize --- */
    scene.scale.on('resize', (gameSize) => {
      scene.physics.world.setBounds(0, 0, gameSize.width, gameSize.height);
    });
  }

  /* ===================================================================
     UPDATE
  =================================================================== */
  function update() {
    const scene = this;
    //const pointer = scene.input.activePointer;

    const pointerX = globalPointerX;
    const pointerY = globalPointerY;

    // wave-lag trail: emitter #1 eases toward the pointer rather than
    // snapping to it, which is what produces the trailing "wave" feel
    // const xMove = (targetX - pointer.x) / 10;
    // const yMove = (targetY - pointer.y) / 10;

    const xMove = (targetX - pointerX) / 10;
    const yMove = (targetY - pointerY) / 10;

    const xMove2 = (targetX2-pointerX)/15;
    const yMove2 = (targetY2-pointerY)/15;

    
    targetX -= xMove;
    targetY -= yMove;

    targetX2 -= xMove2;
    targetY2 -= yMove2;

    emitterWarm.setPosition(targetX, targetY);
    emitterCool.setPosition(targetX2, targetY2);

    const absX = Math.abs(xMove);
    const absY = Math.abs(yMove);
    let qty = (absX > absY ? absX : absY) / 10;
    if (qty < 0.01) qty = 0;

    emitterWarm.setQuantity(reduceMotion ? 0 : qty);
    emitterWarm.setAngle(Phaser.Math.Between(0, 90));
    emitterWarm.setSpeedX(Phaser.Math.Between(0, 100));
    emitterWarm.setSpeedY(-10 - Phaser.Math.Between(0, 100));

    const absX2 = Math.abs(xMove2);
    const absY2 = Math.abs(yMove2);
    let qty2 = (absX2 > absY2 ? absX2 : absY2) / 10;
    if (qty2 < 0.01) qty2 = 0;

    emitterCool.setQuantity(reduceMotion ? 0 : (qty2 > 0 ? 1 : 0));
    emitterCool.setAngle(Phaser.Math.Between(0, 90));
    emitterCool.setSpeedX(Phaser.Math.Between(0, 100));
    emitterCool.setSpeedY(-10 - Phaser.Math.Between(0, 100));

    if (cursorBody) 
    {
      cursorBody.setPosition(pointerX, pointerY);
      cursorBody.body.reset(pointerX, pointerY);
    }

    if (shapes) {
      shapes.children.iterate((s) => {
        if (s) s.rotation += s.rotSpeed;
      });
    }
  }

  // keep the Phaser canvas sized to the window
  window.addEventListener('resize', () => {
    game.scale.resize(window.innerWidth, window.innerHeight);
  });
})();