import { Button, Card, Segmented, Space, Switch, Typography } from "antd";
import { useEffect, useRef, useState } from "react";

const { Title, Paragraph, Text } = Typography;

const TILE = 20;
const ROWS = 21;
const COLS = 21;
const RADIUS = TILE / 2 - 2;
const cloneLevel = (lvl) => lvl.map((row) => [...row]);

// 0 = empty, 1 = wall, 2 = pellet
const LEVEL = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1],
  [1, 2, 1, 0, 1, 2, 1, 0, 2, 2, 2, 2, 2, 0, 1, 2, 1, 0, 1, 2, 1],
  [1, 2, 1, 0, 1, 2, 1, 0, 1, 1, 0, 1, 1, 0, 1, 2, 1, 0, 1, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 0, 1, 2, 1, 0, 2, 1, 0, 1, 2, 0, 1, 2, 1, 0, 1, 2, 1],
  [1, 2, 1, 0, 1, 2, 1, 0, 2, 2, 2, 2, 2, 0, 1, 2, 1, 0, 1, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 0, 1, 2, 1, 0, 2, 2, 0, 2, 2, 0, 1, 2, 1, 0, 1, 2, 1],
  [1, 2, 1, 0, 1, 2, 1, 0, 1, 1, 0, 1, 1, 0, 1, 2, 1, 0, 1, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 0, 1, 2, 1, 0, 2, 2, 2, 2, 2, 0, 1, 2, 1, 0, 1, 2, 1],
  [1, 2, 1, 0, 1, 2, 1, 0, 2, 1, 0, 1, 2, 0, 1, 2, 1, 0, 1, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const START = { col: 1, row: 1 };

const Pacman = () => {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const levelRef = useRef(cloneLevel(LEVEL));
  const pacRef = useRef({
    x: (START.col + 0.5) * TILE,
    y: (START.row + 0.5) * TILE,
    dir: { x: 1, y: 0 },
    nextDir: { x: 1, y: 0 },
  });
  const [score, setScore] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [brush, setBrush] = useState("wall");
  const [designLevel, setDesignLevel] = useState(() => cloneLevel(LEVEL));
  const [startPos, setStartPos] = useState(START);

  const reset = () => {
    levelRef.current = cloneLevel(designLevel);
    pacRef.current = {
      x: (startPos.col + 0.5) * TILE,
      y: (startPos.row + 0.5) * TILE,
      dir: { x: 1, y: 0 },
      nextDir: { x: 1, y: 0 },
    };
    setScore(0);
  };

  const canMove = (x, y, dir) => {
    const speed = 2;
    const nextX = x + dir.x * speed;
    const nextY = y + dir.y * speed;
    const checkpoints = [
      { cx: nextX + RADIUS, cy: nextY },
      { cx: nextX - RADIUS, cy: nextY },
      { cx: nextX, cy: nextY + RADIUS },
      { cx: nextX, cy: nextY - RADIUS },
    ];
    return checkpoints.every(({ cx, cy }) => {
      const col = Math.floor(cx / TILE);
      const row = Math.floor(cy / TILE);
      return levelRef.current[row]?.[col] !== 1;
    });
  };

  const draw = (ctx) => {
    ctx.clearRect(0, 0, COLS * TILE, ROWS * TILE);
    // background
    ctx.fillStyle = "#05070f";
    ctx.fillRect(0, 0, COLS * TILE, ROWS * TILE);

    // level
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const cell = levelRef.current[r][c];
        if (cell === 1) {
          ctx.fillStyle = "#17305c";
          ctx.fillRect(c * TILE, r * TILE, TILE, TILE);
        } else if (cell === 2) {
          ctx.fillStyle = "#ffe28a";
          ctx.beginPath();
          ctx.arc(c * TILE + TILE / 2, r * TILE + TILE / 2, 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // pacman
    const { x, y, dir } = pacRef.current;
    ctx.fillStyle = "#ffcd00";
    ctx.beginPath();
    const angle = Math.atan2(dir.y, dir.x);
    const mouth = 0.35;
    ctx.moveTo(x, y);
    ctx.arc(x, y, RADIUS, angle + mouth, angle - mouth + Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
  };

  const step = () => {
    const { x, y, dir, nextDir } = pacRef.current;
    const speed = 2;
    if (isEditing) {
      const ctx = canvasRef.current?.getContext("2d");
      if (ctx) draw(ctx);
      animRef.current = requestAnimationFrame(step);
      return;
    }
    if (canMove(x, y, nextDir)) {
      pacRef.current.dir = nextDir;
    }
    const newX = x + pacRef.current.dir.x * speed;
    const newY = y + pacRef.current.dir.y * speed;
    if (canMove(x, y, pacRef.current.dir)) {
      pacRef.current.x = newX;
      pacRef.current.y = newY;
    } else {
      // If blocked, stay centered on the current tile to avoid half-sticking
      const currentCol = Math.floor(x / TILE);
      const currentRow = Math.floor(y / TILE);
      if (pacRef.current.dir.x !== 0) {
        pacRef.current.y = (currentRow + 0.5) * TILE;
      }
      if (pacRef.current.dir.y !== 0) {
        pacRef.current.x = (currentCol + 0.5) * TILE;
      }
    }

    // Pellet consumption
    const col = Math.floor(pacRef.current.x / TILE);
    const row = Math.floor(pacRef.current.y / TILE);
    if (levelRef.current[row]?.[col] === 2) {
      levelRef.current[row][col] = 0;
      setScore((s) => s + 10);
    }

    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) draw(ctx);
    animRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    const handleKey = (e) => {
      const key = e.key.toLowerCase();
      const map = {
        arrowup: { x: 0, y: -1 },
        w: { x: 0, y: -1 },
        arrowdown: { x: 0, y: 1 },
        s: { x: 0, y: 1 },
        arrowleft: { x: -1, y: 0 },
        a: { x: -1, y: 0 },
        arrowright: { x: 1, y: 0 },
        d: { x: 1, y: 0 },
      };
      const next = map[key];
      if (next) {
        pacRef.current.nextDir = next;
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handleKey);
    animRef.current = requestAnimationFrame(step);
    return () => {
      window.removeEventListener("keydown", handleKey);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    levelRef.current = cloneLevel(designLevel);
  }, [designLevel]);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) draw(ctx);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCanvasClick = (e) => {
    if (!isEditing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const col = Math.floor(((e.clientX - rect.left) * scaleX) / TILE);
    const row = Math.floor(((e.clientY - rect.top) * scaleY) / TILE);
    if (row < 0 || row >= ROWS || col < 0 || col >= COLS) return;

    setDesignLevel((prev) => {
      const next = prev.map((r) => [...r]);
      if (brush === "start") {
        setStartPos({ col, row });
        pacRef.current = {
          x: (col + 0.5) * TILE,
          y: (row + 0.5) * TILE,
          dir: { x: 1, y: 0 },
          nextDir: { x: 1, y: 0 },
        };
      } else {
        const value = brush === "wall" ? 1 : brush === "pellet" ? 2 : 0;
        next[row][col] = value;
      }
      levelRef.current = cloneLevel(next);
      return next;
    });
  };

  const restoreTemplate = () => {
    const template = cloneLevel(LEVEL);
    setDesignLevel(template);
    setStartPos(START);
    levelRef.current = cloneLevel(template);
    pacRef.current = {
      x: (START.col + 0.5) * TILE,
      y: (START.row + 0.5) * TILE,
      dir: { x: 1, y: 0 },
      nextDir: { x: 1, y: 0 },
    };
    setScore(0);
  };

  const pelletsLeft = levelRef.current.flat().filter((c) => c === 2).length;

  return (
    <section className="section">
      <div className="section-header">
        <div>
          <div className="eyebrow">Playable prototype</div>
          <Title level={2}>Pac-Man (WIP)</Title>
        </div>
        <Paragraph className="section-copy">
          Arrow keys / WASD to move. Eat pellets to increase your score. This
          stub is the foundation for ghosts, power-ups, and levels.
        </Paragraph>
      </div>

      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Card className="card" bordered style={{ width: "100%" }}>
          <canvas
            ref={canvasRef}
            width={COLS * TILE}
            height={ROWS * TILE}
            style={{
              border: "1px solid var(--border)",
              borderRadius: 12,
              background: "#05070f",
              width: "100%",
              height: "auto",
              maxWidth: 900,
              display: "block",
              margin: "0 auto",
            }}
            onClick={handleCanvasClick}
          />
          <Space size="large" style={{ marginTop: 12 }} wrap>
            <Text strong>Score: {score}</Text>
            <Text>Pellets left: {pelletsLeft}</Text>
            <Space align="center">
              <Text>Edit mode</Text>
              <Switch checked={isEditing} onChange={setIsEditing} />
            </Space>
          </Space>
        </Card>

        <Card className="card" bordered style={{ width: "100%" }}>
          <Title level={3}>Map builder</Title>
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <Space wrap>
              <Text>Brush:</Text>
              <Segmented
                options={[
                  { label: "Wall", value: "wall" },
                  { label: "Pellet", value: "pellet" },
                  { label: "Empty", value: "empty" },
                  { label: "Start", value: "start" },
                ]}
                value={brush}
                onChange={(val) => setBrush(val)}
              />
              <Button onClick={reset} type="primary">
                Reset game
              </Button>
              <Button onClick={restoreTemplate}>Template map</Button>
            </Space>
            <Paragraph className="card-body">
              Toggle Edit mode, choose a brush, then click the canvas to paint
              tiles. Wall blocks movement, Pellet adds a dot, Empty clears,
              Start sets spawn. Reset game reapplies your current map and
              restores pellets.
            </Paragraph>
          </Space>
        </Card>
      </Space>
    </section>
  );
};

export default Pacman;
