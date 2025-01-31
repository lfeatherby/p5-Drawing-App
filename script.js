function divideArray(arr) {
  var result = [];
  var len = arr.length;
  var i = 0;
  while (i < len) {
    result.push(arr.slice(i, i += 2));
  }
  return result;
}
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let a1 = divideArray(a);
//console.log(a);
//console.log(a1);

let colorlist = ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'];
let data = {
  "colours": [
    {
      "name": "allColours",
      "shades": ["#fca5a5", "#f87171", "#ef4444", "#dc2626", "#fdba74", "#fb923c", "#f97316", "#ea580c", "#fcd34d", "#fbbf24", "#f59e0b", "#d97706", "#fde047", "#facc15", "#eab308", "#ca8a04", "#bef264", "#a3e635", "#84cc16", "#65a30d", "#86efac", "#4ade80", "#22c55e", "#16a34a", "#6ee7b7", "#34d399", "#10b981", "#059669", "#5eead4", "#2dd4bf", "#14b8a6", "#0d9488", "#67e8f9", "#22d3ee", "#06b6d4", "#0891b2", "#7dd3fc", "#38bdf8", "#0ea5e9", "#0284c7", "#93c5fd", "#60a5fa", "#3b82f6", "#2563eb", "#a5b4fc", "#818cf8", "#6366f1", "#4f46e5", "#c4b5fd", "#a78bfa", "#8b5cf6", "#7c3aed", "#d8b4fe", "#c084fc", "#a855f7", "#9333ea", "#f0abfc", "#e879f9", "#d946ef", "#c026d3", "#f9a8d4", "#f472b6", "#ec4899", "#db2777", "#fda4af", "#fb7185", "#f43f5e", "#e11d48"],
      "variants": [
        {
          "light": ["#fca5a5", "#f87171", "#fdba74", "#fb923c", "#fcd34d", "#fbbf24", "#fde047", "#facc15", "#bef264", "#a3e635", "#86efac", "#4ade80", "#6ee7b7", "#34d399", "#5eead4", "#2dd4bf", "#67e8f9", "#22d3ee", "#7dd3fc", "#38bdf8", "#93c5fd", "#60a5fa", "#a5b4fc", "#818cf8", "#c4b5fd", "#a78bfa", "#d8b4fe", "#c084fc", "#f0abfc", "#e879f9", "#f9a8d4", "#f472b6", "#fda4af", "#fb7185"
          ],

          "dark": ["#ef4444", "#dc2626", "#f97316", "#ea580c", "#f59e0b", "#d97706", "#eab308", "#ca8a04", "#84cc16", "#65a30d", "#22c55e", "#16a34a", "#10b981", "#059669", "#14b8a6", "#0d9488", "#06b6d4", "#0891b2", "#0ea5e9", "#0284c7", "#3b82f6", "#2563eb", "#6366f1", "#4f46e5", "#8b5cf6", "#7c3aed", "#a855f7", "#9333ea", "#d946ef", "#c026d3", "#ec4899", "#db2777", "#f43f5e", "#e11d48"],
          "extremes": ["#bef264", "#65a30d"]
        }
      ]
    },
    {
      "name": "warmColours",
      "contents": ["red", "orange", "amber", "yellow", "fuchsia", "pink", "rose"],
      "shades": ["#fca5a5", "#f87171", "#ef4444", "#dc2626", "#fdba74", "#fb923c", "#f97316", "#ea580c", "#fcd34d", "#fbbf24", "#f59e0b", "#d97706", "#fde047", "#facc15", "#eab308", "#ca8a04", "#f0abfc", "#e879f9", "#d946ef", "#c026d3", "#f9a8d4", "#f472b6", "#ec4899", "#db2777", "#fda4af", "#fb7185", "#f43f5e", "#e11d48"],
      "variants": [
        {
          "light": ["#fca5a5", "#f87171", "#fdba74", "#fb923c", "#fcd34d", "#fbbf24", "#fde047", "#facc15", "#f0abfc", "#e879f9", "#f9a8d4", "#f472b6", "#fda4af", "#fb7185"],
          "dark": ["#ef4444", "#dc2626", "#f97316", "#ea580c", "#f59e0b", "#d97706", "#eab308", "#ca8a04", "#d946ef", "#c026d3", "#ec4899", "#db2777", "#f43f5e", "#e11d48"],
          "extremes": ["#fca5a5", "#dc2626"]
        }
      ]
    },
    {
      "name": "coldColours",
      "contents": ["lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple"],
      "shades": ["#bef264", "#a3e635", "#84cc16", "#65a30d", "#86efac", "#4ade80", "#22c55e", "#16a34a", "#6ee7b7", "#34d399", "#10b981", "#059669", "#5eead4", "#2dd4bf", "#14b8a6", "#0d9488", "#67e8f9", "#22d3ee", "#06b6d4", "#0891b2", "#7dd3fc", "#38bdf8", "#0ea5e9", "#0284c7", "#93c5fd", "#60a5fa", "#3b82f6", "#2563eb", "#a5b4fc", "#818cf8", "#6366f1", "#4f46e5"],
      "variants": [
        {
          "light": ["#bef264", "#a3e635", "#86efac", "#4ade80", "#6ee7b7", "#34d399", "#5eead4", "#2dd4bf", "#67e8f9", "#22d3ee", "#7dd3fc", "#38bdf8", "#93c5fd", "#60a5fa", "#a5b4fc", "#818cf8"],
          "dark": ["#84cc16", "#65a30d", "#22c55e", "#16a34a", "#10b981", "#059669", "#14b8a6", "#0d9488", "#06b6d4", "#0891b2", "#0ea5e9", "#0284c7", "#3b82f6", "#2563eb", "#6366f1", "#4f46e5"],
          "extremes": ["#bef264", "#65a30d"]
        }
      ]
    },
    {
      "name": "red",
      "shades": ["#fca5a5", "#f87171", "#ef4444", "#dc2626"],
      "initial": {
        "value": "#dc2626",
        "clean": "dc2626"
      },
      "variants": [
        {
          "light": ["#fca5a5", "#f87171"],
          "dark": ["#ef4444", "#dc2626"],
          "extremes": ["#fca5a5", "#dc2626"]
        }
      ]
    },
    {
      "name": "orange",
      "shades": ["#fdba74", "#fb923c", "#f97316", "#ea580c"],
      "initial": {
        "value": "#ea580c",
        "clean": "ea580c"
      },
      "variants": [
        {
          "light": ["#fdba74", "#fb923c"],
          "dark": ["#f97316", "#ea580c"],
          "extremes": ["#fdba74", "#ea580c"]
        }
      ]
    },
    {
      "name": "amber",
      "shades": ["#fcd34d", "#fbbf24", "#f59e0b", "#d97706"],
      "initial": {
        "value": "#d97706",
        "clean": "d97706"
      },
      "variants": [
        {
          "light": ["#fcd34d", "#fbbf24"],
          "dark": ["#f59e0b", "#d97706"],
          "extremes": ["#fcd34d", "#d97706"]
        }
      ]
    },
    {
      "name": "yellow",
      "shades": ["#fde047", "#facc15", "#eab308", "#ca8a04"],
      "initial": {
        "value": "#ca8a04",
        "clean": "ca8a04"
      },
      "variants": [
        {
          "light": ["#fde047", "#facc15"],
          "dark": ["#eab308", "#ca8a04"],
          "extremes": ["#fde047", "#ca8a04"]
        }
      ]
    },
    {
      "name": "lime",
      "shades": ["#bef264", "#a3e635", "#84cc16", "#65a30d"],
      "initial": {
        "value": "#65a30d",
        "clean": "65a30d"
      },
      "variants": [
        {
          "light": ["#bef264", "#a3e635"],
          "dark": ["#84cc16", "#65a30d"],
          "extremes": ["#bef264", "#65a30d"]
        }
      ]
    },
    {
      "name": "green",
      "shades": ["#86efac", "#4ade80", "#22c55e", "#16a34a"],
      "initial": {
        "value": "#16a34a",
        "clean": "16a34a"
      },
      "variants": [
        {
          "light": ["#86efac", "#4ade80"],
          "dark": ["#22c55e", "#16a34a"],
          "extremes": ["#86efac", "#16a34a"]
        }
      ]
    },
    {
      "name": "emerald",
      "shades": ["#6ee7b7", "#34d399", "#10b981", "#059669"],
      "initial": {
        "value": "#059669",
        "clean": "059669"
      },
      "variants": [
        {
          "light": ["#6ee7b7", "#34d399"],
          "dark": ["#10b981", "#059669"],
          "extremes": ["#6ee7b7", "#059669"]
        }
      ]
    },
    {
      "name": "teal",
      "shades": ["#5eead4", "#2dd4bf", "#14b8a6", "#0d9488"],
      "initial": {
        "value": "#0d9488",
        "clean": "0d9488"
      },
      "variants": [
        {
          "light": ["#5eead4", "#2dd4bf"],
          "dark": ["#14b8a6", "#0d9488"],
          "extremes": ["#5eead4", "#0d9488"]
        }
      ]
    },
    {
      "name": "cyan",
      "shades": ["#67e8f9", "#22d3ee", "#06b6d4", "#0891b2"],
      "initial": {
        "value": "#0891b2",
        "clean": "0891b2"
      },
      "variants": [
        {
          "light": ["#67e8f9", "#22d3ee"],
          "dark": ["#06b6d4", "#0891b2"],
          "extremes": ["#67e8f9", "#0891b2"]
        }
      ]
    },
    {
      "name": "sky",
      "shades": ["#7dd3fc", "#38bdf8", "#0ea5e9", "#0284c7"],
      "initial": {
        "value": "#0284c7",
        "clean": "0284c7"
      },
      "variants": [
        {
          "light": ["#7dd3fc", "#38bdf8"],
          "dark": ["#0ea5e9", "#0284c7"],
          "extremes": ["#7dd3fc", "#0284c7"]
        }
      ]
    },
    {
      "name": "blue",
      "shades": ["#93c5fd", "#60a5fa", "#3b82f6", "#2563eb"],
      "initial": {
        "value": "#2563eb",
        "clean": "2563eb"
      },
      "variants": [
        {
          "light": ["#93c5fd", "#60a5fa"],
          "dark": ["#3b82f6", "#2563eb"],
          "extremes": ["#93c5fd", "#2563eb"]
        }
      ]
    },
    {
      "name": "indigo",
      "shades": ["#a5b4fc", "#818cf8", "#6366f1", "#4f46e5"],
      "initial": {
        "value": "#4f46e5",
        "clean": "4f46e5"
      },
      "variants": [
        {
          "light": ["#a5b4fc", "#818cf8"],
          "dark": ["#6366f1", "#4f46e5"],
          "extremes": ["#a5b4fc", "#4f46e5"]
        }
      ]
    },
    {
      "name": "violet",
      "shades": ["#c4b5fd", "#a78bfa", "#8b5cf6", "#7c3aed"],
      "initial": {
        "value": "#7c3aed",
        "clean": "7c3aed"
      },
      "variants": [
        {
          "light": ["#c4b5fd", "#a78bfa"],
          "dark": ["#8b5cf6", "#7c3aed"],
          "extremes": ["#c4b5fd", "#7c3aed"]
        }
      ]
    },
    {
      "name": "purple",
      "shades": ["#d8b4fe", "#c084fc", "#a855f7", "#9333ea"],
      "initial": {
        "value": "#9333ea",
        "clean": "9333ea"
      },
      "variants": [
        {
          "light": ["#d8b4fe", "#c084fc"],
          "dark": ["#a855f7", "#9333ea"],
          "extremes": ["#d8b4f3", "#9333ea"]
        }
      ]
    },
    {
      "name": "fuchsia",
      "shades": ["#f0abfc", "#e879f9", "#d946ef", "#c026d3"],
      "initial": {
        "value": "#c026d3",
        "clean": "c026d3"
      },
      "variants": [
        {
          "light": ["#f0abfc", "#e879f9"],
          "dark": ["#d946ef", "#c026d3"],
          "extremes": ["#f0abfc", "#c026d3"]
        }
      ]
    },
    {
      "name": "pink",
      "shades": ["#f9a8d4", "#f472b6", "#ec4899", "#db2777"],
      "initial": {
        "value": "#db2777",
        "clean": "db2777"
      },
      "variants": [
        {
          "light": ["#f9a8d4", "#f472b6"],
          "dark": ["#ec4899", "#db2777"],
          "extremes": ["#f9a8d4", "#db2777"]
        }
      ]
    },
    {
      "name": "rose",
      "shades": ["#fda4af", "#fb7185", "#f43f5e", "#e11d48"],
      "initial": {
        "value": "#e11d48",
        "clean": "e11d48"
      },
      "variants": [
        {
          "light": ["#fda4af", "#fb7185"],
          "dark": ["#f43f5e", "#e11d48"],
          "extremes": ["#fda4af", "#e11d48"]
        }
      ]
    },
    {
      "name": "reds/pinks",
      "contents": ["red", "pink", "rose"],
      "shades": ["#fca5a5", "#f87171", "#ef4444", "#dc2626", "#f9a8d4", "#f472b6", "#ec4899", "#db2777", "#fda4af", "#fb7185", "#f43f5e", "#e11d48"],
      "variants": [
        {
          "light": ["#fca5a5", "#f87171", "#f9a8d4", "#f472b6", "#fda4af", "#fb7185"],
          "dark": ["#ef4444", "#dc2626", "#ec4899", "#db2777", "#f43f5e", "#e11d48"],
          "extremes": ["#bef264", "#65a30d"]
        }
      ]
    },
    {
      "name": "oranges/yellows",
      "contents": ["orange", "amber", "yellow"],
      "shades": ["#fdba74", "#fb923c", "#f97316", "#ea580c", "#fcd34d", "#fbbf24", "#f59e0b", "#d97706", "#fde047", "#facc15", "#eab308", "#ca8a04"],
      "variants": [
        {
          "light": ["#fdba74", "#fb923c", "#fcd34d", "#fbbf24", "#fde047", "#facc15"],
          "dark": ["#f97316", "#ea580c", "#f59e0b", "#d97706", "#eab308", "#ca8a04"],
          "extremes": ["#bef264", "#65a30d"]
        }
      ]
    },
    {
      "name": "greens",
      "contents": ["lime", "green", "emerald", "teal"],
      "shades": ["#bef264", "#a3e635", "#84cc16", "#65a30d", "#86efac", "#4ade80", "#22c55e", "#16a34a", "#6ee7b7", "#34d399", "#10b981", "#059669", "#5eead4", "#2dd4bf", "#14b8a6", "#0d9488"],
      "variants": [
        {
          "light": ["#bef264", "#a3e635", "#86efac", "#4ade80", "#6ee7b7", "#34d399", "#5eead4", "#2dd4bf"],
          "dark": ["#84cc16", "#65a30d", "#22c55e", "#16a34a", "#10b981", "#059669", "#14b8a6", "#0d9488"],
          "extremes": ["#bef264", "#65a30d"]
        }
      ]
    },
    {
      "name": "blues",
      "contents": ["cyan", "sky", "blue", "indigo"],
      "shades": ["#67e8f9", "#22d3ee", "#06b6d4", "#0891b2", "#7dd3fc", "#38bdf8", "#0ea5e9", "#0284c7", "#93c5fd", "#60a5fa", "#3b82f6", "#2563eb", "#a5b4fc", "#818cf8", "#6366f1", "#4f46e5"],
      "variants": [
        {
          "light": ["#67e8f9", "#22d3ee", "#7dd3fc", "#38bdf8", "#93c5fd", "#60a5fa", "#a5b4fc", "#818cf8"],
          "dark": ["#06b6d4", "#0891b2", "#0ea5e9", "#0284c7", "#3b82f6", "#2563eb", "#6366f1", "#4f46e5"],
          "extremes": ["#bef264", "#65a30d"]
        }
      ]
    },
    {
      "name": "purples",
      "contents": ["violet", "purple", "fuchsia"],
      "shades": ["#c4b5fd", "#a78bfa", "#8b5cf6", "#7c3aed", "#d8b4fe", "#c084fc", "#a855f7", "#9333ea", "#f0abfc", "#e879f9", "#d946ef", "#c026d3"],
      "variants": [
        {
          "light": ["#c4b5fd", "#a78bfa", "#d8b4fe", "#c084fc", "#f0abfc", "#e879f9"],
          "dark": ["#8b5cf6", "#7c3aed", "#a855f7", "#9333ea", "#d946ef", "#c026d3"],
          "extremes": ["#bef264", "#65a30d"]
        }
      ]
    }
  ]
};
//colour list has all, warm, cold, shades 300-600 of each, 

let b;
let t;
let from;
let to;
let sel, selShape, selMode, selInterp;
let px1 = -30;
let px2 = 450;
let py1 = 50;
let py2 = 150;
let roo = 35 * Math.sqrt(3);

let points = 5;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  let clearButton = createButton('Clear');
  clearButton.position(10, 100);
  clearButton.mousePressed(clear);
  let saveButton = createButton('Save');
  saveButton.position(435, 100);
  saveButton.mousePressed(saveImage);
  sel = createSelect();
  sel.position(60, 100);

  // Add color options.
  sel.option('default');
  sel.option('warm');
  sel.option('cold');
  sel.option('red');
  sel.option('orange');
  sel.option('amber');
  sel.option('yellow');
  sel.option('lime');
  sel.option('green');
  sel.option('emerald');
  sel.option('teal');
  sel.option('cyan');
  sel.option('sky');
  sel.option('blue');
  sel.option('indigo');
  sel.option('violet');
  sel.option('purple');
  sel.option('fuchsia');
  sel.option('pink');
  sel.option('rose');
  sel.option('reds/pinks');
  sel.option('oranges/yellows');
  sel.option('greens');
  sel.option('blues');
  sel.option('purples');

  // Set the selected option to "red".
  sel.selected('default');
  frameRate(10);

  selShape = createSelect();
  selShape.position(181, 100);
  selShape.option('flower');
  selShape.option('star');
  selShape.option('heart');
  selShape.option('circle');
  selShape.option('square');
  selShape.option('triangle');
  selShape.option('cloud');
  selShape.option('wonky cloud');
  selShape.option('bubble');
  selShape.selected('flower');

  selMode = createSelect();
  selMode.position(280, 100);
  selMode.option('default');
  selMode.option('light');
  selMode.option('dark');
  selMode.selected('default');

  selInterp = createSelect();
  selInterp.position(346, 100);
  selInterp.option('default');
  selInterp.option('interpolate');
  selInterp.selected('default');

}

function draw() {
  //console.log(mouseX)
  let s = sel.selected();
  let s1 = selShape.selected();
  let s2 = selMode.selected();
  let s3 = selInterp.selected();
  noStroke();
  switch (s) {
    case 'warm':
      t = data.colours[1];
      b = t.shades;
      break;
    case 'cold':
      t = data.colours[2];
      b = t.shades;
      break;
    case 'red':
      t = data.colours[3];
      b = t.shades;
      break;
    case 'orange':
      t = data.colours[4];
      b = t.shades;
      break;
    case 'amber':
      t = data.colours[5];
      b = t.shades;
      break;
    case 'yellow':
      t = data.colours[6];
      b = t.shades;
      break;
    case 'lime':
      t = data.colours[7];
      b = t.shades;
      break;
    case 'green':
      t = data.colours[8];
      b = t.shades;
      break;
    case 'emerald':
      t = data.colours[9];
      b = t.shades;
      break;
    case 'teal':
      t = data.colours[10];
      b = t.shades;
      break;
    case 'cyan':
      t = data.colours[11];
      b = t.shades;
      break;
    case 'sky':
      t = data.colours[12];
      b = t.shades;
      break;
    case 'blue':
      t = data.colours[13];
      b = t.shades;
      break;
    case 'indigo':
      t = data.colours[14];
      b = t.shades;
      break;
    case 'violet':
      t = data.colours[15];
      b = t.shades;
      break;
    case 'purple':
      t = data.colours[16];
      b = t.shades;
      break;
    case 'fuchsia':
      t = data.colours[17];
      b = t.shades;
      break;
    case 'pink':
      t = data.colours[18];
      b = t.shades;
      break;
    case 'rose':
      t = data.colours[19];
      b = t.shades;
      break;
    case 'reds/pinks':
      t = data.colours[20];
      b = t.shades;
      break;
    case 'oranges/yellows':
      t = data.colours[21];
      b = t.shades;
      break;
    case 'greens':
      t = data.colours[22];
      b = t.shades;
      break;
    case 'blues':
      t = data.colours[23];
      b = t.shades;
      break;
    case 'purples':
      t = data.colours[24];
      b = t.shades;
      break;
    default:
      t = data.colours[0];
      b = t.shades;
  }

  switch (s2) {
    case 'light':
      b = t.variants[0].light;
      break;
    case 'dark':
      b = t.variants[0].dark;
      break;
    default:
      b = t.shades;
  }
  switch (s3) {
    case 'interpolate':
      b = t.variants[0].extremes;


      if (s2 === 'light') {
        from = t.variants[0].light[0];
        to = t.variants[0].light[1];
      } else if (s2 === 'dark') {
        from = t.variants[0].dark[0];
        to = t.variants[0].dark[1];
      } else {
        from = t.variants[0].extremes[0];
        to = t.variants[0].extremes[1];
      }
      fill(lerpColor(color(from), color(to), mouseX / width));
      break;
    default:

      fill(random(b));
  }

  //fill(random(b));

  if (mouseIsPressed) {
    if ((mouseX < px1 || mouseX > px2) || (mouseY < py1 || mouseY > py2)) {
      switch (s1) {
        case 'star':
          star(mouseX, mouseY, 15, 35, points);
          break;
        case 'heart':
          heart(mouseX, mouseY);
          break;
        case 'circle':
          ellipse(mouseX, mouseY, 70);
          break;
        case 'square':
          rectMode(CENTER);
          square(mouseX, mouseY, 70);
          break;
        case 'triangle':
          triangle(mouseX - (roo / 2), mouseY + (35 / 2), mouseX, mouseY - 35, mouseX + (roo / 2), mouseY + (35 / 2));
          break;
        case 'wonky cloud':
          drawWonkyCloud(mouseX, mouseY, points, 30, 20);
          break;
        case 'cloud':
          drawCloud(mouseX, mouseY, 30);
          break;
        case 'bubble':
          drawBubble(mouseX, mouseY, 70);
          break;
        default:
          drawFlower(mouseX, mouseY, points, 30, 20);
      }

    }
  }

}
function drawWonkyCloud(centerX, centerY, numPetals, petalSize, r) {
  push();
  let xr, yr;
  //rotate(1);
  for (let i = 0; i < numPetals; i++) {
    let angle = i * (TWO_PI / numPetals);
    let x = r * cos(angle);
    let y = r * sin(angle);
    let xA = [x, x / 2];
    let yA = [y, y / 2];
    xr = random(xA);
    yr = random(yA);
    ellipse(xr + centerX, yr + centerY, petalSize);
  }
  ellipse(centerX, centerY, petalSize);
  pop();
}
function drawCloud(centerX, centerY, petalSize) {
  push();
  ellipse(centerX - 10, centerY - 10, petalSize);
  ellipse(centerX + 10, centerY - 10, petalSize);
  ellipse(centerX - 20, centerY + 10, petalSize);
  ellipse(centerX, centerY + 10, petalSize);
  ellipse(centerX + 20, centerY + 10, petalSize);
  pop();
}
function drawFlower(centerX, centerY, numPetals, petalSize, r) {
  push();
  //let xr, yr;
  //rotate(1);
  for (let i = 0; i < numPetals; i++) {
    let angle = i * (TWO_PI / numPetals);
    let x = r * cos(angle);
    let y = r * sin(angle);
    //let xA = [x, x/2];
    //let yA = [y, y/2];
    //xr = random(xA);
    //yr = random(yA);
    ellipse(x + centerX, y + centerY, petalSize);
  }
  fill('gold');
  ellipse(centerX, centerY, petalSize);
  pop();
}
function getColours(clist) {
  let x = Math.floor(Math.random() * clist.length);
  return clist[x];
}
function changeColour() {
  b = getColours(colourList);
}

function star(x, y, radius1, radius2, npoints) {
  push();
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
  pop();
}
function heart(x, y) {
  push();
  beginShape();
  //noStroke();
  arc((x - (35 / 2)), (y - (30 / 2)), 40, 40, PI - (QUARTER_PI / 2), TWO_PI);
  arc((x + (35 / 2)), (y - (30 / 2)), 40, 40, PI, TWO_PI + (QUARTER_PI / 2));
  vertex((x + (72 / 2)), (y - (15 / 2)));
  vertex(x, (y + (70 / 2)));
  vertex((x - (72 / 2)), (y - (15 / 2)));
  vertex(x, (y - (50 / 2)));
  //line(85, 150, 160, 50);
  //line(85, 150, 10, 50);
  endShape();
  pop();
}

function drawBubble(centerX, centerY, bubbleSize) {
  ellipse(centerX, centerY, bubbleSize);
  push();
  fill('white');
  ellipse(centerX, centerY, bubbleSize - 25);
  pop();
  ellipse(centerX - 5, centerY + 5, bubbleSize - 20);
}

function saveImage() {
  save("myimage.png");
}