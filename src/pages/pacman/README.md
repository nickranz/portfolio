# Pac-Man Page (React + Canvas)

This page lives at `src/pages/pacman/Pacman.js`. It renders a canvas-based Pac-Man prototype and includes a simple map editor.

## Key pieces
- **Constants:** `TILE`, `ROWS`, `COLS`, and `RADIUS` define grid size and Pac-Man’s collision radius. `LEVEL` is the starter map. `cloneLevel` copies 2D arrays.
- **Refs:**
  - `levelRef` holds the mutable grid (0 empty, 1 wall, 2 pellet).
  - `pacRef` stores Pac-Man’s position (centered in pixels), current and queued directions.
  - `animRef` stores the rAF id; `canvasRef` targets the `<canvas>` element.
- **State:** score, edit-mode toggle, current brush (wall/pellet/empty/start), a design-level copy, and the spawn location.

## Game loop & movement
- `step()` runs via `requestAnimationFrame` when not editing.
- Movement tries the queued direction first (`nextDir`), then advances at a fixed speed.
- `canMove` checks four points around the sprite’s radius against walls to prevent clipping.
- If blocked, the sprite recenters on the current tile along the blocked axis to avoid half-sticking.
- Pellet collision: on each step, the current tile is checked; pellets add 10 points and are cleared.

## Rendering
- `draw` clears the canvas, paints walls/pellets, then draws Pac-Man as an arc whose mouth opens toward the velocity vector.
- The canvas size is fixed to the grid, but CSS scales it responsively.

## Input
- `keydown` handler maps Arrow keys + WASD to direction vectors and prevents default scrolling.

## Map editing
- Edit mode pauses movement and lets you paint the grid by clicking the canvas.
- Brushes: **Wall** (1), **Pellet** (2), **Empty** (0), **Start** (spawn position).
- `designLevel` is the editable source; clicking updates it and mirrors into `levelRef`. Setting Start updates `pacRef` and `startPos`.
- Controls: toggle edit mode, choose a brush, Reset Game (reloads your map and pellets), and Template Map (restores the default layout + spawn).

## Reset/template
- `reset()` reapplies your current designed map and resets score/spawn.
- `restoreTemplate()` restores the original LEVEL, spawn, and clears score.

## How to extend
- Add ghosts/power pellets by introducing new entity refs and expanding the `LEVEL` encoding.
- Add win/lose conditions (all pellets eaten, lives counter) in `step()`.
- Add sounds/animations by hooking into pellet/ghost events and the render loop.
