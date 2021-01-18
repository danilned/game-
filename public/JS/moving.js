let tile = document.querySelectorAll('.grids button');
tile = [...tile];
let fGrid = document.querySelectorAll('.grid_line1 button');
let sGrid = document.querySelectorAll('.grid_line2 button');
let tGrid = document.querySelectorAll('.grid_line3 button');
let ffGrid = document.querySelectorAll('.grid_line4 button');
let ftGrid = document.querySelectorAll('.grid_line5 button');
fGrid = [...fGrid];
sGrid = [...sGrid];
tGrid = [...tGrid];
ffGrid = [...ffGrid];
ftGrid = [...ftGrid]
const startIndBlue = [31];
const startIndRed = [35];
const startInd = [startIndBlue, startIndRed];
let index = 0;
let Player = 'user';
let RedHouse = 100;
let BlueHouse = 100;
let houseIndex;

let warehouse = [fGrid, sGrid, tGrid, ffGrid, ftGrid]

const tavernHealthpoint = document.getElementById('tavernHP');
const menuIMG = document.querySelector('.menu img');

console.log(warehouse)

const socket = io();

console.log(fGrid )
console.log(sGrid )
console.log(tGrid )
console.log(ffGrid )
console.log(ftGrid )

socket.on('PlayerIndex', (num) => {
  if (num == 0) {
    socket.emit('location-href', location.pathname);
    Player = 'blue';
    houseIndex = 0;
    console.log(Player);
  }
  if (num == 1) {
    Player = 'red';
    menuIMG.setAttribute('src', 'img/rbarb.png')
    houseIndex = 1;
    console.log(Player);
  }
});

socket.on('locationFor2', (num) => {
  console.log('Ссылка получена');
  console.log(num);
  location.pathname = num;
});

const turnsBlue = [1];
const turnsRed = [1];

const inputs = document.querySelectorAll('.menu input');
const bottomMenu = document.getElementById('bottomMenu');
const houseMenu = document.getElementById('houseMenu');
const botTurn = document.getElementById('botTurn');
const mainHouse = document.getElementById('mainHouse');
let Arround;

let GlobalIndex = 0;
let HealthPointRead = 0;
console.log(tile)
function moves(a) {
  let bluePicCounter = document.querySelectorAll('#unit1');
  let redPicCounter = document.querySelectorAll('#unit2');
  let arrbluePicSort = [];
  let arrredPicSort = [];

  const LastNumA = ind[a] % 10;
  const FisrtNumA = ind[a] - LastNumA;
  const LastNumStartInd = startInd[index][GlobalIndex] % 10;
  const FisrtNumStartInd = startInd[index][GlobalIndex] - LastNumStartInd;

  function movings(a) {
    if (houseIndex == 0 && Player == 'blue') {
      if (circle == turnCounter || circle == turnCounter + 1) {
        Animate.classList.remove('cssload-loader')
        Animate.lastElementChild.classList.remove('cssload-loader-inner')
        TopIMG.removeAttribute('src')
        if (Production == 0) {
        var newIMG = document.createElement('img');
        newIMG.setAttribute('src', 'img/bbarb.png');
        newIMG.setAttribute('id', 'unit1');
        newIMG.classList.add('unit');
        tile[5].appendChild(newIMG);
        newIMG.setAttribute('datablue-sort', bluePicCounter.length);
        startIndBlue.push(31);
        newIMG.onclick = function() {
          GlobalIndex = this.getAttribute('datablue-sort'); menuIMG.setAttribute('src', 'img/bbarb.png'); inputs[0].value = `HealthPoint: ${ HealthPoint[GlobalIndex]}`; houseMenu.style.display = 'none'; bottomMenu.style.display = 'block'; if (turnsBlue[GlobalIndex] > 0 && index == 0) {
            botTurn.value = 'Turns: 1/1';
          } else {
            botTurn.value = 'Turns: 0/1';
          }
        };
        if (bluePicCounter.length == 0) {
          turnsBlue.push(1);
        } else {
          turnsBlue.push(0);
        }
        HealthPoint.push(20);
        Atack.push(10);
        Defense.push(2);
        turnCounter = 0;
        socket.emit('HeroCreated', 'BlueUnit')
      } else if (Production == 1) {
        var newIMG = document.createElement('img');
        newIMG.setAttribute('src', 'img/barrow.png');
        newIMG.setAttribute('id', 'unit1');
        tile[5].appendChild(newIMG);
        newIMG.classList.add('archer');
        newIMG.setAttribute('datablue-sort', bluePicCounter.length);
        startIndBlue.push(31);
        newIMG.onclick = function() {
          GlobalIndex = this.getAttribute('datablue-sort'); menuIMG.setAttribute('src', 'img/barrow.png'); inputs[0].value = `HealthPoint: ${ HealthPoint[GlobalIndex]}`; houseMenu.style.display = 'none'; bottomMenu.style.display = 'block'; if (turnsBlue[GlobalIndex] > 0 && index == 1) {
            botTurn.value = 'Turns: 1/1';
          } else {
            botTurn.value = 'Turns: 0/1';
          }
        };
        if (bluePicCounter.length == 0) {
          turnsBlue.push(1);
        } else {
          turnsBlue.push(0);
        }
        HealthPoint.push(20);
        Atack.push(10);
        Defense.push(2);
        turnCounter = 0;
        socket.emit('HeroCreated', 'BlueArcher')
      } else if (Production == 2) {
        var newIMG = document.createElement('img');
        newIMG.setAttribute('src', 'img/blueHorse.png');
        newIMG.setAttribute('id', 'unit1');
        newIMG.classList.add('horse');
        tile[5].appendChild(newIMG);
        newIMG.setAttribute('datablue-sort', bluePicCounter.length);
        startIndBlue.push(31);
        newIMG.onclick = function() {
          GlobalIndex = this.getAttribute('datablue-sort'); menuIMG.setAttribute('src', 'img/blueHorse.png'); inputs[0].value = `HealthPoint: ${ HealthPoint[GlobalIndex]}`; houseMenu.style.display = 'none'; bottomMenu.style.display = 'block'; if (turnsBlue[GlobalIndex] > 0 && index == 1) {
            botTurn.value = 'Turns: 1/1';
          } else {
            botTurn.value = 'Turns: 0/1';
          }
        };
        if (bluePicCounter.length == 0) {
          turnsBlue.push(2);
        } else {
          turnsBlue.push(0);
        }
        HealthPoint.push(20);
        Atack.push(10);
        Defense.push(2);
        turnCounter = 0;
        socket.emit('HeroCreated', 'BlueHorse')
      }
     }
    } else if (houseIndex == 1 && Player == 'red') {
      if (circle == turnCounter || circle == turnCounter + 1) {
        Animate.classList.remove('cssload-loader')
        Animate.lastElementChild.classList.remove('cssload-loader-inner')
        TopIMG.removeAttribute('src')
        if (Production == 0) {
          var newIMG = document.createElement('img');
          newIMG.setAttribute('src', 'img/rbarb.png');
          newIMG.setAttribute('id', 'unit2');
          newIMG.classList.add('unit')
          tile[10].appendChild(newIMG);
          newIMG.setAttribute('datared-sort', redPicCounter.length);
          startIndRed.push(35);
          newIMG.onclick = function() {
            GlobalIndex = this.getAttribute('datared-sort'); menuIMG.setAttribute('src', 'img/rbarb.png'); inputs[0].value = `HealthPoint: ${ HealthPointRed[GlobalIndex]}`; houseMenu.style.display = 'none'; bottomMenu.style.display = 'block'; if (turnsRed[GlobalIndex] > 0 && index == 1) {
              botTurn.value = 'Turns: 1/1';
            } else {
              botTurn.value = 'Turns: 0/1';
            }
          };
          if (redPicCounter.length == 0) {
            turnsRed.push(1);
          } else {
            turnsRed.push(0);
          }
          HealthPointRed.push(20);
          AtackRed.push(10);
          DefenseRed.push(2);
          turnCounter = 0;
          socket.emit('HeroCreated', 'RedUnit')
      } else if (Production == 1) {
        var newIMG = document.createElement('img');
        newIMG.setAttribute('src', 'img/rarrow.png');
        newIMG.setAttribute('id', 'unit2');
        newIMG.classList.add('archer');
        tile[10].appendChild(newIMG);
        newIMG.setAttribute('datared-sort', redPicCounter.length);
        startIndRed.push(35);
        newIMG.onclick = function() {
          GlobalIndex = this.getAttribute('datared-sort'); menuIMG.setAttribute('src', 'img/rarrow.png'); inputs[0].value = `HealthPoint: ${ HealthPointRed[GlobalIndex]}`; houseMenu.style.display = 'none'; bottomMenu.style.display = 'block'; if (turnsRed[GlobalIndex] > 0 && index == 1) {
            botTurn.value = 'Turns: 1/1';
          } else {
            botTurn.value = 'Turns: 0/1';
          }
        };
        if (redPicCounter.length == 0) {
          turnsRed.push(1);
        } else {
          turnsRed.push(0);
        }
        HealthPointRed.push(20);
        AtackRed.push(10);
        DefenseRed.push(2);
        turnCounter = 0;
        socket.emit('HeroCreated', 'RedArcher')
      } else if (Production == 2) {
        var newIMG = document.createElement('img');
        newIMG.setAttribute('src', 'img/redHorse.png');
        newIMG.setAttribute('id', 'unit2');
        newIMG.classList.add('horse');
        tile[10].appendChild(newIMG);
        newIMG.setAttribute('datared-sort', redPicCounter.length);
        startIndRed.push(36);
        newIMG.onclick = function() {
          GlobalIndex = this.getAttribute('datared-sort'); menuIMG.setAttribute('src', 'img/redHorse.png'); inputs[0].value = `HealthPoint: ${ HealthPointRed[GlobalIndex]}`; houseMenu.style.display = 'none'; bottomMenu.style.display = 'block'; if (turnsRed[GlobalIndex] > 0 && index == 1) {
            botTurn.value = 'Turns: 1/1';
          } else {
            botTurn.value = 'Turns: 0/1';
          }
        };
        if (redPicCounter.length == 0) {
          turnsRed.push(2);
        } else {
          turnsRed.push(0);
        }
        HealthPointRed.push(20);
        AtackRed.push(10);
        DefenseRed.push(2);
        turnCounter = 0;
        socket.emit('HeroCreated', 'RedHorse')
      }
    }
  }

    if (myFuncCalls % 2 == 0 && turnsBlue[GlobalIndex] > 0 && Player == 'blue' && menuIMG.getAttribute('src') == 'img/bbarb.png' || menuIMG.getAttribute('src') == 'img/barrow.png' || menuIMG.getAttribute('src') == 'img/blueHorse.png') {
      bluePicCounter = document.querySelectorAll('#unit1');
      arrbluePicSort = [].slice.call(bluePicCounter);
      arrbluePicSort.sort((a, b) => {
        return a.getAttribute('datablue-sort') - b.getAttribute('datablue-sort');
      });
      bluePicCounter = arrbluePicSort;
      arrbluePicSort = [];
      console.log(bluePicCounter[GlobalIndex].classList[0])
      socket.emit('Indexa', `${a }${GlobalIndex}` + `${HealthPointRead}` + `${bluePicCounter[GlobalIndex].classList[0]}`);
      bottomMenu.classList.add('animBright')
      bottomMenu.addEventListener('animationend', () => {bottomMenu.classList.remove('animBright'); bottomMenu.style.display = 'none'}) 
// Ближний бой Синего
        if (tile[a].lastElementChild.getAttribute('src') == 'img/rbarb.png' || tile[a].lastElementChild.getAttribute('src') == 'img/rarrow.png') {
          bottomMenu.classList.remove('animBright')
          if (tile[a].children[0].hasAttribute('datablue-sort')) {
            return;
          } else {
            HealthPointRed[HealthPointRead] = HealthPointRed[HealthPointRead] - Atack[GlobalIndex] / DefenseRed[HealthPointRead];
            inputs[0].value = `HealthPoint: ${ HealthPointRed[HealthPointRead]}`;
            if (HealthPointRed[HealthPointRead] <= 0) {
              redPicCounter = document.querySelectorAll('#unit2');
              arrredPicSort = [].slice.call(redPicCounter);
              arrredPicSort.sort((a, b) => {
              return a.getAttribute('datared-sort') - b.getAttribute('datared-sort');
              });
              redPicCounter = arrredPicSort;
              arrredPicSort = [];
              redPicCounter[HealthPointRead].classList.add('animLow');
              redPicCounter[HealthPointRead].addEventListener('animationend', () => {
                redPicCounter[HealthPointRead].remove();
              });
              const RedMem = HealthPointRead;
              startIndRed.splice(RedMem, 1);
              HealthPointRed.splice(RedMem, 1);
              AtackRed.splice(RedMem, 1);
              DefenseRed.splice(RedMem, 1);
              turnsRed.splice(RedMem, 1);
              for (let i = parseInt(RedMem) + 1; redPicCounter.length > i; i++) {
                redPicCounter[i].setAttribute('datared-sort', redPicCounter[i].getAttribute('datared-sort') - 1);
                redPicCounter[i].onclick = function() {
                  GlobalIndex = this.getAttribute('datared-sort'); menuIMG.setAttribute('src', 'img/bbarb.png'); inputs[0].value = `HealthPoint: ${ HealthPoint[GlobalIndex]}`; houseMenu.style.display = 'none'; bottomMenu.style.display = 'block'; if (turnsBlue[GlobalIndex] > 0 && index == 0) {
                    botTurn.value = 'Turns: 1/1';
                  } else {
                    botTurn.value = 'Turns: 0/1';
                  }; neighTurn();
                };
                redPicCounter[i].onmouseover = function() {
                  HealthPointRead = this.getAttribute('datared-sort');
                };
              }
            }
            if (tile[a].lastElementChild.getAttribute('src') == 'img/rbarb.png') {
              menuIMG.setAttribute('src', 'img/rbarb.png');
            } else if (tile[a].lastElementChild.getAttribute('src') == 'img/rarrow.png') {
              menuIMG.setAttribute('src', 'img/rarrow.png');
            }
            turnsBlue[GlobalIndex] -= 1;
          }
        }
// Атака Крансого дома
         if (tile[a].lastElementChild.getAttribute('src') == 'img/houseRed.png') {
          RedHouse = RedHouse - Atack[GlobalIndex];
          if (BlueHouse <= 0) {
            alert(`Синий игрок победил`)
            return Player = 'user';
          }
          tavernHealthpoint.value = `HealthPoint: ${ RedHouse}`;
          bottomMenu.classList.add('animBright')
          bottomMenu.addEventListener('animationend', () => {bottomMenu.classList.remove('animBright'); bottomMenu.style.display = 'none'})
          houseMenu.style.display = 'block';
          turnsBlue[GlobalIndex] -= 1;
          menuIMG.setAttribute('src', null)
        }
// Ход синего варвара
    if (menuIMG.getAttribute('src') == 'img/bbarb.png') {
        var tileRem = [];
        for (let i = 0; i < tile[a].childElementCount; i++) {
          tileRem.push(tile[a].children);
        }
        tile[a].innerHTML = '<img src = \'img/bbarb.png\' class = \'unit\' id = \'unit1\'>';
        for (let i = 0; tileRem.length > i; i++) {
          tile[a].insertAdjacentHTML('afterbegin', '<img src = "img/anvil.png" class = "Anvil">');
        }
        startInd[index][GlobalIndex] = [ind[a]];
        const remBlue = bluePicCounter[GlobalIndex].getAttribute('datablue-sort');
        turnsBlue[GlobalIndex] -= 1;
        bluePicCounter[GlobalIndex].remove();
        bluePicCounter = document.querySelectorAll('#unit1');
        for (let i = 0; bluePicCounter.length > i; i++) {
          if (bluePicCounter[i].getAttribute('datablue-sort') == null) {
            bluePicCounter[i].setAttribute('datablue-sort', remBlue);
            bluePicCounter[i].onclick = function() {
                GlobalIndex = this.getAttribute('datablue-sort'); menuIMG.setAttribute('src', 'img/bbarb.png'); inputs[0].value = `HealthPoint: ${ HealthPoint[GlobalIndex]}`; houseMenu.style.display = 'none'; bottomMenu.style.display = 'block'; if (turnsBlue[GlobalIndex] > 0 && index == 0) {
                botTurn.value = 'Turns: 1/1';
                } else {
                botTurn.value = 'Turns: 0/1';
                }; neighTurn();
            };
            bluePicCounter[i].onmouseover = function() {
                HealthPointRead = this.getAttribute('datablue-sort');
              };
          }
        }
        arrbluePicSort = [].slice.call(bluePicCounter);
        arrbluePicSort.sort((a, b) => {
          return a.getAttribute('datablue-sort') - b.getAttribute('datablue-sort');
        });
        bluePicCounter = arrbluePicSort;
        bluePicCounter[GlobalIndex].classList.add('animHigh');
        bluePicCounter[GlobalIndex].parentElement.classList.remove('red-draw');
      }
// Ход синего лучника
      else if (menuIMG.getAttribute('src') == 'img/barrow.png') {
        var tileRem = [];
        for (let i = 0; i < tile[a].childElementCount; i++) {
          tileRem.push(tile[a].children);
        }
        tile[a].innerHTML = '<img src = \'img/barrow.png\' class = \'archer\' id = \'unit1\'>';
        for (let i = 0; tileRem.length > i; i++) {
          tile[a].insertAdjacentHTML('afterbegin', '<img src = "img/anvil.png" class = "Anvil">');
        }
        startInd[index][GlobalIndex] = [ind[a]];
        const remBlue = bluePicCounter[GlobalIndex].getAttribute('datablue-sort');
        turnsBlue[GlobalIndex] -= 1;
        bluePicCounter[GlobalIndex].remove();
        bluePicCounter = document.querySelectorAll('#unit1');
        for (let i = 0; bluePicCounter.length > i; i++) {
          if (bluePicCounter[i].getAttribute('datablue-sort') == null) {
            bluePicCounter[i].setAttribute('datablue-sort', remBlue);
            bluePicCounter[i].onclick = function() {
                GlobalIndex = this.getAttribute('datablue-sort'); menuIMG.setAttribute('src', 'img/barrow.png'); inputs[0].value = `HealthPoint: ${ HealthPoint[GlobalIndex]}`; houseMenu.style.display = 'none'; bottomMenu.style.display = 'block'; if (turnsBlue[GlobalIndex] > 0 && index == 0) {
                botTurn.value = 'Turns: 1/1';
                } else {
                botTurn.value = 'Turns: 0/1';
                }; neighTurn();
            };
            bluePicCounter[i].onmouseover = function() {
                HealthPointRead = this.getAttribute('datablue-sort');
              };
          }
        }
        arrbluePicSort = [].slice.call(bluePicCounter);
        arrbluePicSort.sort((a, b) => {
          return a.getAttribute('datablue-sort') - b.getAttribute('datablue-sort');
        });
        bluePicCounter = arrbluePicSort;
        bluePicCounter[GlobalIndex].classList.add('animHigh');
      }
// Ход синего коня
      else if (menuIMG.getAttribute('src') == 'img/blueHorse.png') {
        var tileRem = [];
        for (let i = 0; i < tile[a].childElementCount; i++) {
          tileRem.push(tile[a].children);
        }
        tile[a].innerHTML = '<img src = \'img/blueHorse.png\' class = \'horse\' id = \'unit1\'>';
        for (let i = 0; tileRem.length > i; i++) {
          tile[a].insertAdjacentHTML('afterbegin', '<img src = "img/anvil.png" class = "Anvil">');
        }
        startInd[index][GlobalIndex] = [ind[a]];
        const remBlue = bluePicCounter[GlobalIndex].getAttribute('datablue-sort');
        turnsBlue[GlobalIndex] -= 1;
        bluePicCounter[GlobalIndex].remove();
        bluePicCounter = document.querySelectorAll('#unit1');
        for (let i = 0; bluePicCounter.length > i; i++) {
          if (bluePicCounter[i].getAttribute('datablue-sort') == null) {
            bluePicCounter[i].setAttribute('datablue-sort', remBlue);
            bluePicCounter[i].onclick = function() {
                GlobalIndex = this.getAttribute('datablue-sort'); menuIMG.setAttribute('src', 'img/blueHorse.png'); inputs[0].value = `HealthPoint: ${ HealthPoint[GlobalIndex]}`; houseMenu.style.display = 'none'; bottomMenu.style.display = 'block'; if (turnsBlue[GlobalIndex] > 0 && index == 0) {
                botTurn.value = 'Turns: 1/1';
                } else {
                botTurn.value = 'Turns: 0/1';
                }; neighTurn();
            };
            bluePicCounter[i].onmouseover = function() {
                HealthPointRead = this.getAttribute('datablue-sort');
              };
          }
        }
        arrbluePicSort = [].slice.call(bluePicCounter);
        arrbluePicSort.sort((a, b) => {
          return a.getAttribute('datablue-sort') - b.getAttribute('datablue-sort');
        });
        bluePicCounter = arrbluePicSort;
        bluePicCounter[GlobalIndex].classList.add('animHigh');
      }
// Конец синего хода
      if (turnsBlue.every((elem) => elem == 0)) {
        turnsBlue.forEach((currentValue, index) => {
          if (bluePicCounter[index].classList[0] == 'horse') {
            if (turnsBlue[index] == 0) {
              turnsBlue[index] = 2
            }
          } else {
            turnsBlue[index] = 1;
          }
        });
        if (turnsRed.length == 0) {
          move.value = `${myFuncCalls + 1 }: Turn Blue`;
          index = 0;
          socket.emit('EachPerson', 'blue1');
          return myFuncCalls += 2, circle += 2;
        }
        socket.emit('EachPerson', 'blue0');
        index = 1;
        move.value = `${myFuncCalls + 1 }: Turn Red`;
        return myFuncCalls++, circle++;
      };
    } else if (myFuncCalls % 2 !== 0 && Player == 'red' && turnsRed[GlobalIndex] > 0  && menuIMG.getAttribute('src') == 'img/rbarb.png' || menuIMG.getAttribute('src') == 'img/rarrow.png' || menuIMG.getAttribute('src') == 'img/redHorse.png') {
          redPicCounter = document.querySelectorAll('#unit2');
          arrredPicSort = [].slice.call(redPicCounter);
          arrredPicSort.sort((a, b) => {
            return a.getAttribute('datared-sort') - b.getAttribute('datared-sort');
          });
          redPicCounter = arrredPicSort;
          arrredPicSort = [];
          socket.emit('Indexa', `${a }${GlobalIndex}` + `${HealthPointRead}` + `${redPicCounter[GlobalIndex].classList[0]}`);
          bottomMenu.classList.add('animBright')
          bottomMenu.addEventListener('animationend', () => {bottomMenu.classList.remove('animBright'); bottomMenu.style.display = 'none'})
// Ближний бой Крансого
          if (tile[a].lastElementChild.getAttribute('src') == 'img/bbarb.png' || tile[a].lastElementChild.getAttribute('src') == 'img/barrow.png') {
            bottomMenu.classList.remove('animBright')
            if (tile[a].children[0].hasAttribute('datared-sort')) {
              return;
            }else {
                HealthPoint[HealthPointRead] = HealthPoint[HealthPointRead] - AtackRed[GlobalIndex] / Defense[HealthPointRead];
                inputs[0].value = `HealthPoint: ${ HealthPoint[HealthPointRead]}`;
                if (HealthPoint[HealthPointRead] <= 0) {
                bluePicCounter = document.querySelectorAll('#unit1');
                arrbluePicSort = [].slice.call(bluePicCounter);
                arrbluePicSort.sort((a, b) => {
                    return a.getAttribute('datablue-sort') - b.getAttribute('datablue-sort');
                });
                bluePicCounter = arrbluePicSort;
                arrbluePicSort = [];
                bluePicCounter[HealthPointRead].classList.add('animLow');
                bluePicCounter[HealthPointRead].addEventListener('animationend', () => {
                    bluePicCounter[HealthPointRead].remove();
                });
                const blueRem = HealthPointRead;
                bluePicCounter[blueRem].remove();
                startIndBlue.splice(blueRem, 1);
                HealthPoint.splice(blueRem, 1);
                Atack.splice(blueRem, 1);
                Defense.splice(blueRem, 1);
                turnsBlue.splice(blueRem, 1);
                for (let i = parseInt(blueRem) + 1; bluePicCounter.length > i; i++) {
                    bluePicCounter[i].setAttribute('datablue-sort', bluePicCounter[i].getAttribute('datablue-sort') - 1);
                    bluePicCounter[i].onclick = function() {
                    GlobalIndex = this.getAttribute('datablue-sort'); menuIMG.setAttribute('src', 'img/bbarb.png'); inputs[0].value = `HealthPoint: ${ HealthPoint[GlobalIndex]}`; houseMenu.style.display = 'none'; bottomMenu.style.display = 'block'; if (turnsBlue[GlobalIndex] > 0 && index == 0) {
                        botTurn.value = 'Turns: 1/1';
                    } else {
                        botTurn.value = 'Turns: 0/1';
                    }; neighTurn();
                    };
                    bluePicCounter[i].onmouseover = function() {
                    HealthPointRead = this.getAttribute('datablue-sort');
                    };
                }
              }
              if (tile[a].lastElementChild.getAttribute('src') == 'img/bbarb.png') {
                menuIMG.setAttribute('src', 'img/bbarb.png');
              } else {
                menuIMG.setAttribute('src', 'img/barrow.png');
              }
                turnsRed[GlobalIndex] -= 1;
            }
// Атака Синего дома
          } else if (tile[a].lastElementChild.getAttribute('src') == 'img/houseBlue.png') {
            BlueHouse = BlueHouse - AtackRed[GlobalIndex];
            if (BlueHouse <= 0) {
              alert(`Синий игрок победил`)
              return Player = 'user';
            }
            tavernHealthpoint.value = `HealthPoint: ${ BlueHouse}`;
            bottomMenu.classList.add('animBright')
            bottomMenu.addEventListener('animationend', () => {bottomMenu.classList.remove('animBright'); bottomMenu.style.display = 'none'})
            houseMenu.style.display = 'block';
            turnsRed[GlobalIndex] -= 1;
            menuIMG.setAttribute('src', null)
          }
// Ход красного варвара
          if (menuIMG.getAttribute('src') == 'img/rbarb.png') {
            var tileRem = [];
            for (let i = 0; i < tile[a].childElementCount; i++) {
                tileRem.push(tile[a].children);
            }
            tile[a].innerHTML = '<img src = \'img/rbarb.png\' class = \'unit\' id = \'unit2\'>';
            for (let i = 0; tileRem.length > i; i++) {
                tile[a].insertAdjacentHTML('afterbegin', '<img src = "img/anvil.png" class = "Anvil">');
            }
            startInd[index][GlobalIndex] = [ind[a]];
            const remRed = redPicCounter[GlobalIndex].getAttribute('datared-sort');
            turnsRed[GlobalIndex] -= 1;
            redPicCounter[GlobalIndex].parentElement.classList.remove('tile-color');
            redPicCounter[GlobalIndex].remove();
            redPicCounter = document.querySelectorAll('#unit2');
            for (let i = 0; redPicCounter.length > i; i++) {
                if (redPicCounter[i].getAttribute('datared-sort') == null) {
                redPicCounter[i].setAttribute('datared-sort', remRed);
                redPicCounter[i].onclick = function() {
                    GlobalIndex = this.getAttribute('datared-sort'); menuIMG.setAttribute('src', 'img/rbarb.png'); inputs[0].value = `HealthPoint: ${ HealthPointRed[GlobalIndex]}`; houseMenu.style.display = 'none'; bottomMenu.style.display = 'block'; if (turnsRed[GlobalIndex] > 0 && index == 1) {
                        botTurn.value = 'Turns: 1/1';
                    } else {
                        botTurn.value = 'Turns: 0/1';
                    }; neighTurn();
                    };
                    redPicCounter[i].onmouseover = function() {
                        HealthPointRead = this.getAttribute('datared-sort');
                    };
                }
            }
            arrredPicSort = [].slice.call(redPicCounter);
            arrredPicSort.sort((a, b) => {
                return a.getAttribute('datared-sort') - b.getAttribute('datared-sort');
            });
            redPicCounter = arrredPicSort;
            redPicCounter[GlobalIndex].classList.add('animHigh');
          }
// Ход красного лучника
          else if (menuIMG.getAttribute('src') == 'img/rarrow.png') {
            var tileRem = [];
            for (let i = 0; i < tile[a].childElementCount; i++) {
                tileRem.push(tile[a].children);
            }
            tile[a].innerHTML = '<img src = \'img/rarcher.png\' class = \'archer\' id = \'unit2\'>';
            for (let i = 0; tileRem.length > i; i++) {
                tile[a].insertAdjacentHTML('afterbegin', '<img src = "img/anvil.png" class = "Anvil">');
            }
            startInd[index][GlobalIndex] = [ind[a]];
            const remRed = redPicCounter[GlobalIndex].getAttribute('datared-sort');
            turnsRed[GlobalIndex] -= 1;
            redPicCounter[GlobalIndex].parentElement.classList.remove('tile-color');
            redPicCounter[GlobalIndex].remove();
            redPicCounter = document.querySelectorAll('#unit2');
            for (let i = 0; redPicCounter.length > i; i++) {
                if (redPicCounter[i].getAttribute('datared-sort') == null) {
                    redPicCounter[i].setAttribute('datared-sort', remRed);
                    redPicCounter[i].onclick = function() {
                    GlobalIndex = this.getAttribute('datared-sort'); menuIMG.setAttribute('src', 'img/rarcher.png'); inputs[0].value = `HealthPoint: ${ HealthPointRed[GlobalIndex]}`; houseMenu.style.display = 'none'; bottomMenu.style.display = 'block'; if (turnsRed[GlobalIndex] > 0 && index == 1) {
                        botTurn.value = 'Turns: 1/1';
                    } else {
                        botTurn.value = 'Turns: 0/1';
                    }; neighTurn();
                    };
                    redPicCounter[i].onmouseover = function() {
                        HealthPointRead = this.getAttribute('datared-sort');
                    };
                }
            }
            arrredPicSort = [].slice.call(redPicCounter);
            arrredPicSort.sort((a, b) => {
                return a.getAttribute('datared-sort') - b.getAttribute('datared-sort');
            });
            redPicCounter = arrredPicSort;
            redPicCounter[GlobalIndex].classList.add('animHigh');
          }
// Ход красного коня
          else if (menuIMG.getAttribute('src') == 'img/redHorse.png') {
            var tileRem = [];
            for (let i = 0; i < tile[a].childElementCount; i++) {
                tileRem.push(tile[a].children);
            }
            tile[a].innerHTML = '<img src = \'img/redHorse.png\' class = \'horse\' id = \'unit2\'>';
            for (let i = 0; tileRem.length > i; i++) {
                tile[a].insertAdjacentHTML('afterbegin', '<img src = "img/anvil.png" class = "Anvil">');
            }
            startInd[index][GlobalIndex] = [ind[a]];
            const remRed = redPicCounter[GlobalIndex].getAttribute('datared-sort');
            turnsRed[GlobalIndex] -= 1;
            redPicCounter[GlobalIndex].remove();
            redPicCounter = document.querySelectorAll('#unit2');
            for (let i = 0; redPicCounter.length > i; i++) {
                if (redPicCounter[i].getAttribute('datared-sort') == null) {
                    redPicCounter[i].setAttribute('datared-sort', remRed);
                    redPicCounter[i].onclick = function() {
                    GlobalIndex = this.getAttribute('datared-sort'); menuIMG.setAttribute('src', 'img/redHorse.png'); inputs[0].value = `HealthPoint: ${ HealthPointRed[GlobalIndex]}`; houseMenu.style.display = 'none'; bottomMenu.style.display = 'block'; if (turnsRed[GlobalIndex] > 0 && index == 1) {
                        botTurn.value = 'Turns: 1/1';
                    } else {
                        botTurn.value = 'Turns: 0/1';
                    }; neighTurn();
                    };
                    redPicCounter[i].onmouseover = function() {
                        HealthPointRead = this.getAttribute('datared-sort');
                    };
                }
            }
            arrredPicSort = [].slice.call(redPicCounter);
            arrredPicSort.sort((a, b) => {
                return a.getAttribute('datared-sort') - b.getAttribute('datared-sort');
            });
            redPicCounter = arrredPicSort;
            redPicCounter[GlobalIndex].classList.add('animHigh');
          }
            if (turnsRed.every((elem) => elem == 0)) {
              index = 0;
              turnsRed.forEach((currentValue, index) => {
                if (redPicCounter[index].classList[0] == 'horse') {
                  if (turnsRed[index] == 0) {
                    turnsRed[index] = 2
                  }
                } else {
                  turnsRed[index] = 1;
                }
              });
              if (turnsBlue.length == 0) {
                move.value = `${myFuncCalls + 1 }: Turn Red`;
                index = 1;
                socket.emit('EachPerson', 'red1');
                return myFuncCalls += 2, circle += 2;
              }
              socket.emit('EachPerson', 'red0');
              index = 0; 
              move.value = `${myFuncCalls + 1 }: Turn Blue`;
              return myFuncCalls++, circle++;
            
            }
      }
    return;
}

  if (parseInt(startInd[index][GlobalIndex]) + 1 == ind[a] || parseInt(startInd[index][GlobalIndex]) - 1 == ind[a]) {
    movings(a);
    return;
  }
  if (FisrtNumStartInd == FisrtNumA + 10) {
    if (LastNumStartInd == LastNumA) {
      movings(a);
      return;
    } if (LastNumStartInd - 1 == LastNumA) {
      movings(a);
      return;
    } if (LastNumStartInd + 1 == LastNumA) {
      movings(a);
      return;
    }
  }

  if (FisrtNumStartInd == FisrtNumA - 10) {
    if (LastNumStartInd == LastNumA) {
      movings(a);
      return;
    } if (LastNumStartInd - 1 == LastNumA) {
      movings(a);
      return;
    } if (LastNumStartInd + 1 == LastNumA) {
      movings(a);
      return;
    }
  }

  // Стрельба лучника

  if (menuIMG.getAttribute('src') == 'img/barrow.png' || menuIMG.getAttribute('src') == 'img/rarrow.png' || menuIMG.getAttribute('src') == 'img/redHorse.png' || menuIMG.getAttribute('src') == 'img/blueHorse.png') {
    if (FisrtNumStartInd == FisrtNumA - 20) {
      if (LastNumStartInd + 1 == LastNumA) {
        archer(a);
        return;
      } if (LastNumStartInd == LastNumA) {
        archer(a);
        return;
      } if (LastNumStartInd - 1 == LastNumA) {
        archer(a);
        return;
      }
    }

  if (FisrtNumStartInd == FisrtNumA + 20) {
    if (LastNumStartInd - 1 == LastNumA) {
      archer(a);
      return;
    } if (LastNumStartInd == LastNumA) {
      archer(a);
      return;
    } if (LastNumStartInd + 1 == LastNumA) {
      archer(a);
      return;
    }
  }

  if (parseInt(startInd[index][GlobalIndex]) + 2 == ind[a] || parseInt(startInd[index][GlobalIndex]) - 2 == ind[a]) {
    archer(a);
    return;
  }

  if (FisrtNumStartInd == FisrtNumA + 10) {
    if (LastNumStartInd + 1 == LastNumA || LastNumStartInd - 1 == LastNumA) {
      archer(a);
      return;
    } 
  }

  if (FisrtNumStartInd == FisrtNumA - 10) {
    if (LastNumStartInd - 1 == LastNumA || LastNumStartInd + 1 == LastNumA) {
      archer(a);
      return;
    }
  }
}

  function archer(a) {
    console.log(a)
    if (myFuncCalls % 2 == 0 && Player == 'blue' && turnsBlue[GlobalIndex] > 0) {
      bluePicCounter = document.querySelectorAll('#unit1');
      arrbluePicSort = [].slice.call(bluePicCounter);
      arrbluePicSort.sort((a, b) => {
        return a.getAttribute('datablue-sort') - b.getAttribute('datablue-sort');
      });
      bluePicCounter = arrbluePicSort;
      arrbluePicSort = [];
      socket.emit('Indexa', `${a }${GlobalIndex}` + `${HealthPointRead}` + `${bluePicCounter[GlobalIndex].classList[0]}`);
      if (menuIMG.getAttribute('src') == 'img/blueHorse.png' && turnsBlue[GlobalIndex] == 2) {
        var tileRem = [];
        for (let i = 0; i < tile[a].childElementCount; i++) {
          tileRem.push(tile[a].children);
        }
        tile[a].innerHTML = '<img src = \'img/blueHorse.png\' class = \'horse\' id = \'unit1\'>';
        for (let i = 0; tileRem.length > i; i++) {
          tile[a].insertAdjacentHTML('afterbegin', '<img src = "img/anvil.png" class = "Anvil">');
        }
        startInd[index][GlobalIndex] = [ind[a]];
        const remBlue = bluePicCounter[GlobalIndex].getAttribute('datablue-sort');
        turnsBlue[GlobalIndex] -= 2;
        bluePicCounter[GlobalIndex].remove();
        bluePicCounter = document.querySelectorAll('#unit1');
        for (let i = 0; bluePicCounter.length > i; i++) {
          if (bluePicCounter[i].getAttribute('datablue-sort') == null) {
            bluePicCounter[i].setAttribute('datablue-sort', remBlue);
            bluePicCounter[i].onclick = function() {
                GlobalIndex = this.getAttribute('datablue-sort'); menuIMG.setAttribute('src', 'img/blueHorse.png'); inputs[0].value = `HealthPoint: ${ HealthPoint[GlobalIndex]}`; houseMenu.style.display = 'none'; bottomMenu.style.display = 'block'; if (turnsBlue[GlobalIndex] > 0 && index == 0) {
                botTurn.value = 'Turns: 1/1';
                } else {
                botTurn.value = 'Turns: 0/1';
                }; neighTurn();
            };
            bluePicCounter[i].onmouseover = function() {
                HealthPointRead = this.getAttribute('datablue-sort');
              };
          }
        }
        arrbluePicSort = [].slice.call(bluePicCounter);
        arrbluePicSort.sort((a, b) => {
          return a.getAttribute('datablue-sort') - b.getAttribute('datablue-sort');
        });
        bluePicCounter = arrbluePicSort;
        bluePicCounter[GlobalIndex].classList.add('animHigh');
      } else {
        HealthPointRed[HealthPointRead] = HealthPointRed[HealthPointRead] - Atack[GlobalIndex] / DefenseRed[HealthPointRead];
        socket.emit('ArcherTurned', `${HealthPointRed[HealthPointRead]}` + `${HealthPointRead}`)
        inputs[0].value = `HealthPoint: ${ HealthPointRed[HealthPointRead]}`;
        if (HealthPointRed[HealthPointRead] <= 0) {
          redPicCounter = document.querySelectorAll('#unit2');
          arrredPicSort = [].slice.call(redPicCounter);
          arrredPicSort.sort((a, b) => {
          return a.getAttribute('datared-sort') - b.getAttribute('datared-sort');
          });
          redPicCounter = arrredPicSort;
          arrredPicSort = [];
          redPicCounter[HealthPointRead].classList.add('animLow');
          redPicCounter[HealthPointRead].addEventListener('animationend', () => {
            redPicCounter[HealthPointRead].remove();
          });
          const RedMem = HealthPointRead;
          startIndRed.splice(RedMem, 1);
          HealthPointRed.splice(RedMem, 1);
          AtackRed.splice(RedMem, 1);
          DefenseRed.splice(RedMem, 1);
          turnsRed.splice(RedMem, 1);
          for (let i = parseInt(RedMem) + 1; redPicCounter.length > i; i++) {
            redPicCounter[i].setAttribute('datared-sort', redPicCounter[i].getAttribute('datared-sort') - 1);
            redPicCounter[i].onclick = function() {
              GlobalIndex = this.getAttribute('datared-sort'); menuIMG.setAttribute('src', 'img/bbarb.png'); inputs[0].value = `HealthPoint: ${ HealthPoint[GlobalIndex]}`; houseMenu.style.display = 'none'; bottomMenu.style.display = 'block'; if (turnsBlue[GlobalIndex] > 0 && index == 0) {
                botTurn.value = 'Turns: 1/1';
              } else {
                botTurn.value = 'Turns: 0/1';
              }; neighTurn();
            };
            redPicCounter[i].onmouseover = function() {
              HealthPointRead = this.getAttribute('datared-sort');
            };
          }
        }
      menuIMG.setAttribute('src', 'img/rbarb.png');
      turnsBlue[GlobalIndex] -= 1;
      }
    if (turnsBlue.every((elem) => elem == 0)) {
      turnsBlue.forEach((currentValue, index) => {
        if (bluePicCounter[index].classList[0] == 'horse') {
          if (turnsBlue[index] == 0) {
            turnsBlue[index] = 2
          }
        } else {
          turnsBlue[index] = 1;
        }
      });
      if (turnsRed.length == 0) {
        move.value = `${myFuncCalls + 1 }: Turn Blue`;
        index = 0;
        socket.emit('EachPerson', 'blue1');
        return myFuncCalls += 2, circle += 2;
      }
      socket.emit('EachPerson', 'blue0');
      index = 1;
      move.value = `${myFuncCalls + 1 }: Turn Red`;
      return myFuncCalls++, circle++;
    };
    } else if (myFuncCalls % 2 !== 0 && Player == 'red' && turnsRed[GlobalIndex] > 0) {
        redPicCounter = document.querySelectorAll('#unit2');
        arrredPicSort = [].slice.call(redPicCounter);
        arrredPicSort.sort((a, b) => {
          return a.getAttribute('datared-sort') - b.getAttribute('datared-sort');
        });
        redPicCounter = arrredPicSort;
        arrredPicSort = [];
        socket.emit('Indexa', `${a }${GlobalIndex}` + `${HealthPointRead}` + `${redPicCounter[GlobalIndex].classList[0]}`);
      if (menuIMG.getAttribute('src') == 'img/redHorse.png' && turnsRed[GlobalIndex] == 2) {
        var tileRem = [];
        for (let i = 0; i < tile[a].childElementCount; i++) {
            tileRem.push(tile[a].children);
        }
        tile[a].innerHTML = '<img src = \'img/redHorse.png\' class = \'horse\' id = \'unit2\'>';
        for (let i = 0; tileRem.length > i; i++) {
            tile[a].insertAdjacentHTML('afterbegin', '<img src = "img/anvil.png" class = "Anvil">');
        }
        startInd[index][GlobalIndex] = [ind[a]];
        const remRed = redPicCounter[GlobalIndex].getAttribute('datared-sort');
        turnsRed[GlobalIndex] -= 2;
        redPicCounter[GlobalIndex].remove();
        redPicCounter = document.querySelectorAll('#unit2');
        for (let i = 0; redPicCounter.length > i; i++) {
          if (redPicCounter[i].getAttribute('datared-sort') == null) {
            redPicCounter[i].setAttribute('datared-sort', remRed);
            redPicCounter[i].onclick = function() {
            GlobalIndex = this.getAttribute('datared-sort'); menuIMG.setAttribute('src', 'img/redHorse.png'); inputs[0].value = `HealthPoint: ${ HealthPointRed[GlobalIndex]}`; houseMenu.style.display = 'none'; bottomMenu.style.display = 'block'; if (turnsRed[GlobalIndex] > 0 && index == 1) {
                botTurn.value = 'Turns: 1/1';
            } else {
                botTurn.value = 'Turns: 0/1';
            }; neighTurn();
            };
            redPicCounter[i].onmouseover = function() {
                HealthPointRead = this.getAttribute('datared-sort');
            };
          }
        }
        arrredPicSort = [].slice.call(redPicCounter);
        arrredPicSort.sort((a, b) => {
            return a.getAttribute('datared-sort') - b.getAttribute('datared-sort');
        });
        redPicCounter = arrredPicSort;
        redPicCounter[GlobalIndex].classList.add('animHigh');
      } else {
        HealthPoint[HealthPointRead] = HealthPoint[HealthPointRead] - AtackRed[GlobalIndex] / Defense[HealthPointRead];
        socket.emit('ArcherTurned', `${HealthPoint[HealthPointRead]}` + `${HealthPointRead}`)
        inputs[0].value = `HealthPoint: ${ HealthPoint[HealthPointRead]}`;
        if (HealthPoint[HealthPointRead] <= 0) {
          bluePicCounter = document.querySelectorAll('#unit1');
          arrbluePicSort = [].slice.call(bluePicCounter);
          arrbluePicSort.sort((a, b) => {
              return a.getAttribute('datablue-sort') - b.getAttribute('datablue-sort');
          });
          bluePicCounter = arrbluePicSort;
          arrbluePicSort = [];
          bluePicCounter[GlobalIndex].classList.add('animLow');
          bluePicCounter[GlobalIndex].addEventListener('animationend', () => {
              bluePicCounter[HealthPointRead].remove();
          });
          const blueRem = HealthPointRead;
          bluePicCounter[blueRem].remove();
          startIndBlue.splice(blueRem, 1);
          HealthPoint.splice(blueRem, 1);
          Atack.splice(blueRem, 1);
          Defense.splice(blueRem, 1);
          turnsBlue.splice(blueRem, 1);
          for (let i = parseInt(blueRem) + 1; bluePicCounter.length > i; i++) {
            bluePicCounter[i].setAttribute('datablue-sort', bluePicCounter[i].getAttribute('datablue-sort') - 1);
            bluePicCounter[i].onclick = function() {
            GlobalIndex = this.getAttribute('datablue-sort'); menuIMG.setAttribute('src', 'img/bbarb.png'); inputs[0].value = `HealthPoint: ${ HealthPoint[GlobalIndex]}`; houseMenu.style.display = 'none'; bottomMenu.style.display = 'block'; if (turnsBlue[GlobalIndex] > 0 && index == 0) {
                botTurn.value = 'Turns: 1/1';
            } else {
                botTurn.value = 'Turns: 0/1';
            }; neighTurn();
            };
            bluePicCounter[i].onmouseover = function() {
            HealthPointRead = this.getAttribute('datablue-sort');
            };
          }
        }
        menuIMG.setAttribute('src', 'img/bbarb.png');
        turnsRed[GlobalIndex] -= 1;
      }
    }
    if (turnsRed.every((elem) => elem == 0)) {
      index = 0;
      turnsRed.forEach((currentValue, index) => {
        if (redPicCounter[index].classList[0] == 'horse') {
          if (turnsRed[index] == 0) {
            turnsRed[index] = 2
          }
        } else {
          turnsRed[index] = 1;
        }
      });
      if (turnsBlue.length == 0) {
        move.value = `${myFuncCalls + 1 }: Turn Red`;
        index = 1;
        socket.emit('EachPerson', 'red1');
        return myFuncCalls += 2, circle += 2;
      }
      socket.emit('EachPerson', 'red0');
      index = 0; 
      move.value = `${myFuncCalls + 1 }: Turn Blue`;
      return myFuncCalls++, circle++;
    
    }
  }

  tile[a].style.backgroundColor = 'red';
    setTimeout(() => tile[a].style.backgroundColor = '#ff7700', 1000);
}

for (let i = 0; i <= 4;) {
  fGrid[i++].index = 10 + i;
}
for (let i = 0; i <= 5;) {
  sGrid[i++].index = 20 + i;
}
for (let i = 0; i <= 4;) {
  tGrid[i++].index = 30 + i;
}
for (let i = 0; i <= 5;) {
  ffGrid[i++].index = 40 + i;
}
for (let i = 0; i <= 4;) {
  ftGrid[i++].index = 50 + i;
}

const ind = [];
let i = 0;
while (i <= 26) {
  ind.push(tile[i++].index);
}

console.log(ind)

var HealthPoint = [20];
var Atack = [10];
var Defense = [2];

var HealthPointRed = [20];
var AtackRed = [10];
var DefenseRed = [2];

var myFuncCalls = 0;

var move = document.querySelector('.FuncCalls');
var turnCounter;
var circle = 0;
let Production;

var TopIMG = document.getElementById('IMGTop')
var Animate = document.getElementById('Production')

function createUnit(unit) {
  if (mainHouse.getAttribute('src') == 'img/houseBlue.png') {
    turnCounter = Math.floor(unit / AnvilCounterBlue);
  } else {
    turnCounter = Math.floor(unit / AnvilCounterRed);
  }
  Animate.classList.add('cssload-loader')
  Animate.lastElementChild.classList.add('cssload-loader-inner')
  if (Production == 0) {
    if (Player == 'red') {
      TopIMG.setAttribute('src', 'img/bbarb.png')
    } else {
      TopIMG.setAttribute('src', 'img/bbarb.png')
    }
  } else if (Production == 1) {
    if (Player == 'red') {
      TopIMG.setAttribute('src', 'img/rarrow.png')
    } else {
      TopIMG.setAttribute('src', 'img/barrow.png')
    }
  } else if (Production == 2) {
    if (Player == 'red') {
      TopIMG.setAttribute('src', 'img/redHorse.png')
    } else {
      TopIMG.setAttribute('src', 'img/blueHorse.png')
    }
  }
  circle = 0;
  return (turnCounter, circle);
}

tile[5].style.backgroundColor = 'blue';
tile[6].style.backgroundColor = 'blue';
tile[12].style.backgroundColor = 'blue';
tile[16].style.backgroundColor = 'blue';
tile[17].style.backgroundColor = 'blue';
tile[9].style.backgroundColor = 'red';
tile[10].style.backgroundColor = 'red';
tile[14].style.backgroundColor = 'red';
tile[20].style.backgroundColor = 'red';
tile[21].style.backgroundColor = 'red';

var AnvilCounterBlue = 0;
var AnvilCounterRed = 0;
const JSONReq = '';

const MKBarb = document.getElementById('MKBarb');
const MKArcher = document.getElementById('MKArr');
const MKHorse = document.getElementById('MKHorse')

let ResponseURL = location.pathname.slice(1);
let IndexCounter = -1;
for (let i = 0; ResponseURL.length + 2 >= i; i++) {
  if (i !== 11 && i !== 15) {
    IndexCounter++;
    AnvilCountHref = ResponseURL[IndexCounter];
    for (let index = 0; AnvilCountHref > index; index++) {
      tile[i].insertAdjacentHTML('afterbegin', '<img src = "img/anvil.png" class = "Anvil">');
      if (tile[i].style.backgroundColor == 'blue') {
        AnvilCounterBlue += 1;
      } else if (tile[i].style.backgroundColor == 'red') {
        AnvilCounterRed += 1;
      }
    }
  } else {
    console.log('Клетка 11 и 15 не сработала!')
  }
}

let bluePicCounter = document.querySelectorAll('#unit1');
let redPicCounter = document.querySelectorAll('#unit2');

socket.on('CollectIndex', (num) => {
  var BigInt,
      HeroClass = '1';
      for (let i = 0; i < num.length; i++) {
        if (parseInt(num[i]) >= 0) {
        } else {
          HeroClass += num[i]
        }
      }
      if (parseInt(num) >= 999) {
        BigInt = num[0] + num[1]
        num = num.substr(2)
      } else {
        BigInt = num[0]
        num = num.substr(1)
      }
    HeroClass = HeroClass.substr(1);
  const tileRem = [];
  var IMGMenu;
  console.log(HeroClass)
  if (Player == 'blue') {  
    redPicCounter = document.querySelectorAll('#unit2');
    arrredPicSort = [].slice.call(redPicCounter);
    arrredPicSort.sort((a, b) => a.getAttribute('datared-sort') - b.getAttribute('datared-sort'));
    redPicCounter = arrredPicSort;
    if (tile[BigInt].lastElementChild.getAttribute('src') == 'img/bbarb.png' || tile[BigInt].lastElementChild.getAttribute('src') == 'img/barrow.png' || tile[BigInt].lastElementChild.getAttribute('src') == 'img/blueHorse.png') {
      menuIMG.setAttribute('src', bluePicCounter[num[1]].attributes.src.value)
      bottomMenu.style.display = 'block'
      HealthPoint[num[1]] = HealthPoint[num[1]] - AtackRed[num[0]] / Defense[num[1]];
      if (HealthPoint[num[1]] <= 0) {
        menuIMG.setAttribute('src', redPicCounter[num[0]].attributes.src.value)
        bluePicCounter = document.querySelectorAll('#unit1');
        arrbluePicSort = [].slice.call(bluePicCounter);
        arrbluePicSort.sort((a, b) => a.getAttribute('datablue-sort') - b.getAttribute('datablue-sort'));
        bluePicCounter = arrbluePicSort;
        // MKBarb.innerHTML = 'Make barbarian: '  + Math.floor(10 / AnvilCounterBlue) + ' turns';
        tavernHealthpoint.value = `${'HealthPoint: ' + BlueHouse}`;
        houseMenu.style.display = 'block'; 
        bottomMenu.style.display = 'none'; 
        mainHouse.setAttribute('src', 'img/houseBlue.png');
        bluePicCounter[num[1]].remove()
        HealthPoint.slice(num[1], 1)
        Atack.slice(num[1], 1)
        Defense.slice(num[1], 1)
      }
      inputs[0].value = `HealthPoint: ${HealthPoint[num[1]]}`;
    } else if (tile[BigInt].lastElementChild.getAttribute('src') === 'img/houseBlue.png') {
      BlueHouse -= AtackRed[num[0]];
      if (BlueHouse <= 0) {
        alert(`Синий игрок победил!`)
      }
      tavernHealthpoint.value = `HealthPoint: ${BlueHouse}`;
      houseMenu.style.display = 'block'; bottomMenu.style.display = 'none';
      mainHouse.setAttribute('src', 'img/houseBlue.png');
    } else {
      for (let i = 0; i < tile[BigInt].childElementCount; i++) {
        tileRem.push(tile[BigInt].children);
      }
      redPicCounter[num[0]].remove();
      if (HeroClass == 'unit') {
        tile[BigInt].innerHTML = '<img src = img/rbarb.png class = unit id = unit2>';
        IMGMenu = 'img/rbarb.png'
      } else if (HeroClass == 'archer') {
        tile[BigInt].innerHTML = '<img src = \'img/rarrow.png\' class = \'archer\' id = \'unit2\'>';
        IMGMenu = 'img/rarrow.png'
      } else if (HeroClass == 'horse') {
        tile[BigInt].innerHTML = '<img src = \'img/redHorse.png\' class = \'horse\' id = \'unit2\'>';
        IMGMenu = 'img/redHorse.png'
      }
      for (let i = 0; tileRem.length > i; i++) {
        tile[BigInt].insertAdjacentHTML('afterbegin', '<img src = "img/anvil.png" class = "Anvil">');
      }
      const remRed = redPicCounter[num[0]].getAttribute('datared-sort');
      redPicCounter = document.querySelectorAll('#unit2');
      for (let i = 0; redPicCounter.length > i; i++) {
        if (redPicCounter[i].getAttribute('datared-sort') == null) {
          redPicCounter[i].setAttribute('datared-sort', remRed);
          redPicCounter[i].onclick = function() {
          GlobalIndex = this.getAttribute('datared-sort'); menuIMG.setAttribute('src', `${IMGMenu}`); inputs[0].value = `HealthPoint: ${ HealthPointRed[GlobalIndex]}`; houseMenu.style.display = 'none'; bottomMenu.style.display = 'block'; if (turnsRed[GlobalIndex] > 0) {
              botTurn.value = 'Turns: 1/1';
          } else {
              botTurn.value = 'Turns: 0/1';
          };
          };
          redPicCounter[i].onmouseover = function() {
              HealthPointRead = this.getAttribute('datared-sort');
          };
        }
      }
      arrredPicSort = [].slice.call(redPicCounter);
      arrredPicSort.sort((a, b) => {if (a.getAttribute('datared-sort') == null || b.getAttribute('datared-sort') == null) {a || b == num[0]} a.getAttribute('datared-sort') - b.getAttribute('datared-sort')});
      redPicCounter = arrredPicSort;
    }
  } else if (Player == 'red') {
    bluePicCounter = document.querySelectorAll('#unit1');
    arrbluePicSort = [].slice.call(bluePicCounter);
    arrbluePicSort.sort((a, b) => a.getAttribute('datablue-sort') - b.getAttribute('datablue-sort'));
    bluePicCounter = arrbluePicSort;
    if (tile[BigInt].lastElementChild.getAttribute('src') == 'img/rbarb.png' || tile[BigInt].lastElementChild.getAttribute('src') == 'img/rarrow.png' || tile[BigInt].lastElementChild.getAttribute('src') == 'img/redHorse.png') {
      menuIMG.setAttribute('src', redPicCounter[num[1]].attributes.src.value)
      bottomMenu.style.display = 'block'
      HealthPointRed[num[1]] = HealthPointRed[num[1]] - Atack[num[0]] / DefenseRed[num[1]];
      if (HealthPointRed[num[1]] <= 0) {
        menuIMG.setAttribute('src', bluePicCounter[num[0]].attributes.src.value)
        redPicCounter = document.querySelectorAll('#unit2');
        arrredPicSort = [].slice.call(redPicCounter);
        arrredPicSort.sort((a, b) => a.getAttribute('datared-sort') - b.getAttribute('datared-sort'));
        redPicCounter = arrredPicSort;
        // MKBarb.innerHTML = 'Make barbarian: '  + Math.floor(10 / AnvilCounterRed) + ' turns';
        tavernHealthpoint.value = `${'HealthPoint: ' + RedHouse}`;
        houseMenu.style.display = 'block'; 
        bottomMenu.style.display = 'none'; 
        mainHouse.setAttribute('src', 'img/houseRed.png');
        redPicCounter[num[1]].remove()
        HealthPointRed.splice(num[1], 1)
        AtackRed.splice(num[1], 1)
        DefenseRed.splice(num[1], 1)
      }
      inputs[0].value = `HealthPoint: ${HealthPointRed[num[1]]}`;
    } else if (tile[BigInt].lastElementChild.getAttribute('src') === 'img/houseRed.png') {
      RedHouse -= Atack[num[0]];
      if (BlueHouse <= 0) {
        alert(`Красный игрок победил!`)
      }
      tavernHealthpoint.value = `HealthPoint: ${RedHouse}`;
      houseMenu.style.display = 'block';
      bottomMenu.style.display = 'none';
      mainHouse.setAttribute('src', 'img/houseRed.png');
    } else {
      for (let i = 0; i < tile[BigInt].childElementCount; i++) {
        tileRem.push(tile[BigInt].children);
      }
      bluePicCounter[num[0]].remove();
      if (HeroClass == 'unit') {
        tile[BigInt].innerHTML = '<img src = img/bbarb.png class = unit id = unit1>';
        IMGMenu = 'img/bbarb.png'
      } else if (HeroClass == 'archer') {
        tile[BigInt].innerHTML = '<img src = \'img/barrow.png\' class = \'archer\' id = \'unit1\'>';
        IMGMenu = 'img/barrow.png'
      } else if (HeroClass == 'horse') {
        tile[BigInt].innerHTML = '<img src = \'img/blueHorse.png\' class = \'horse\' id = \'unit1\'>';
        IMGMenu = 'img/BlueHorse.png'
      } 
      for (let i = 0; tileRem.length > i; i++) {
        tile[BigInt].insertAdjacentHTML('afterbegin', '<img src = "img/anvil.png" class = "Anvil">');
      }
      const remBlue = bluePicCounter[num[0]].getAttribute('datablue-sort');
      bluePicCounter = document.querySelectorAll('#unit1');
      for (let i = 0; bluePicCounter.length > i; i++) {
        if (bluePicCounter[i].getAttribute('datablue-sort') == null) {
          bluePicCounter[i].setAttribute('datablue-sort', remBlue);
          bluePicCounter[i].onclick = function() {
          GlobalIndex = this.getAttribute('datablue-sort'); menuIMG.setAttribute('src', `${IMGMenu}`); inputs[0].value = `HealthPoint: ${ HealthPoint[GlobalIndex]}`; houseMenu.style.display = 'none'; bottomMenu.style.display = 'block'; if (turnsBlue[GlobalIndex] > 0) {
              botTurn.value = 'Turns: 1/1';
          } else {
              botTurn.value = 'Turns: 0/1';
          };
          };
          bluePicCounter[i].onmouseover = function() {
              HealthPointRead = this.getAttribute('datablue-sort');
          };
        }
      }
      arrbluePicSort = [].slice.call(bluePicCounter);
      arrbluePicSort.sort((a, b) => a.getAttribute('datablue-sort') - b.getAttribute('datablue-sort'));
      bluePicCounter = arrbluePicSort;
    }
  }
});

socket.on('EachPersonRecieved', (num) => {
  circle++
  if (num.slice(0, -1) == 'blue') {
    myFuncCalls++;
    if (num[num.length - 1] == '1') {
    move.value = `${myFuncCalls}: Turn Blue`;
    myFuncCalls++
    index = 0;
    } else {
    move.value = `${myFuncCalls}: Turn Red`;
    index = 1;
    }
  } else if (num.slice(0, -1) == 'red') {
    myFuncCalls++;
    if (num[num.length - 1] == '1') {
    move.value = `${myFuncCalls}: Turn Red`;
    myFuncCalls++
    index = 1;
    } else {
    move.value = `${myFuncCalls}: Turn Blue`;
    index = 0;
    }
  }
});

socket.on('HeroSendt', num => {
    var newIMG = document.createElement('img');
    if (num == 'BlueUnit') {
        newIMG.setAttribute('src', 'img/bbarb.png');
        newIMG.setAttribute('id', 'unit1');
        tile[5].appendChild(newIMG);
        newIMG.classList.add('unit');
        HealthPoint.push(20);
        Atack.push(10);
        Defense.push(2);
        turnsBlue.push(0)
        newIMG.setAttribute('datablue-sort', bluePicCounter.length);
    } else if (num == 'BlueArcher') {
        newIMG.setAttribute('src', 'img/barrow.png');
        newIMG.setAttribute('id', 'unit1');
        tile[5].appendChild(newIMG);
        newIMG.classList.add('archer');
        HealthPoint.push(20);
        Atack.push(10);
        Defense.push(2);
        turnsBlue.push(0)
        newIMG.setAttribute('datablue-sort', bluePicCounter.length);
    } else if (num == 'RedUnit') {
        newIMG.setAttribute('src', 'img/rbarb.png');
        newIMG.setAttribute('id', 'unit2');
        tile[10].appendChild(newIMG);
        newIMG.classList.add('unit');
        HealthPointRed.push(20);
        AtackRed.push(10);
        DefenseRed.push(2);
        turnsRed.push(0)
        newIMG.setAttribute('datared-sort', redPicCounter.length);
    } else if (num == 'RedArcher') {
        newIMG.setAttribute('src', 'img/rarcher.png');
        newIMG.setAttribute('id', 'unit2');
        tile[10].appendChild(newIMG);
        newIMG.classList.add('archer');
        HealthPointRed.push(20);
        AtackRed.push(10);
        DefenseRed.push(2);
        turnsRed.push(0)
        newIMG.setAttribute('datared-sort', redPicCounter.length);
    } else if (num == 'RedHorse') {
        newIMG.setAttribute('src', 'img/redHorse.png');
        newIMG.setAttribute('id', 'unit2');
        tile[10].appendChild(newIMG);
        newIMG.classList.add('horse');
        HealthPointRed.push(20);
        AtackRed.push(10);
        DefenseRed.push(2);
        turnsRed.push(0)
        newIMG.setAttribute('datared-sort', redPicCounter.length);
    } else if (num == 'BlueHorse') {
      newIMG.setAttribute('src', 'img/blueHorse.png');
      newIMG.setAttribute('id', 'unit1');
      tile[5].appendChild(newIMG);
      newIMG.classList.add('horse');
      HealthPoint.push(20);
      Atack.push(10);
      Defense.push(2);
      turnsBlue.push(0)
      newIMG.setAttribute('datablue-sort', bluePicCounter.length);
  }
})

socket.on('ArcherTurnedArr', num => {
  if (myFuncCalls % 2 == 0) {
    redPicCounter = document.querySelectorAll('#unit2');
    arrredPicSort = [].slice.call(redPicCounter);
    arrredPicSort.sort((a, b) => a.getAttribute('datared-sort') - b.getAttribute('datared-sort'));
    redPicCounter = arrredPicSort;
    console.log('Синий лучник атаковал: ' + num)
    if (num[0] <= 0) {
      redPicCounter[num[1]].remove()
      HealthPointRed.splice(num[1], 1)
      AtackRed.splice(num[1], 1)
      DefenseRed.splice(num[1], 1)
    } else {
    console.log(num % 10)
    console.log(num.slice(0, -1))
    HealthPointRed[num % 10] = parseInt(num.slice(0, -1))
    } 
  } else {
    bluePicCounter = document.querySelectorAll('#unit1');
    arrbluePicSort = [].slice.call(bluePicCounter);
    arrbluePicSort.sort((a, b) => a.getAttribute('datablue-sort') - b.getAttribute('datablue-sort'));
    bluePicCounter = arrbluePicSort;
    console.log('Красный лучник атаковал: ' + num)
    if (num[0] <= 0) {
      bluePicCounter[num[1]].remove()
      HealthPoint.splice(num[1], 1)
      Atack.splice(num[1], 1)
      Defense.splice(num[1], 1)
    } else {
      console.log(num % 10)
      console.log(num.slice(0, -1))
    HealthPoint[num % 10] = parseInt(num.slice(0, -1))
    }
  }
})

function neighTurn() {
  var startingInd = startInd[index][GlobalIndex]
  if (myFuncCalls % 2 == 0) {
    var tileClass = bluePicCounter[GlobalIndex].classList[0]
  } else {
    var tileClass = redPicCounter[GlobalIndex].classList[0]
  }

  for (var i = 0; i < tile.length; i++) {
    if (tile[i].index == startingInd) {
      var ArrIndex = [];
      if (startingInd == 41) {
        ArrIndex.push(i + 1, i + 6)
      } else if (startingInd == 46) {
        ArrIndex.push(i - 1, i + 5)
      } else if (startingInd == 21) {
        ArrIndex.push(i + 1, i - 5)
      } else if (startingInd == 26) {
        ArrIndex.push(i - 1, i - 6)
      } else if (startingInd == 15) {
        ArrIndex.push(3, 9 ,10)
      } else if (startingInd == 51) {
        ArrIndex.push(16, 17, 23)
      }
        else {
        ArrIndex.push(i + 1, i - 1, i + 5, i + 6, i - 5, i - 6);
      }
      var ArrIndexPos = ArrIndex.filter(function(num) {
        if (num < 27) {
          return num > -1;
        }
      })
      for (let i = 0; i < ArrIndexPos.length; i++) {
        tile[ArrIndexPos[i]].classList.add('arround-tiles')
        setTimeout(() => {
          tile[ArrIndexPos[i]].classList.remove('arround-tiles')
        }, 2000);
      }
    } 
  }
  if (tileClass == 'unit') {
    var LastNum = parseInt(startingInd.toString().slice(1))
    var FirstNum = parseInt(startingInd.toString().slice(0, -1))
    var ArrIndex = [[]]
    var IterationCounter = 0;

    for (let i = LastNum - 3; LastNum + 2 !== i; i++) {
      if (i < 0) {
        continue;
      } else if (warehouse[FirstNum - 1].length > i) {
      ArrIndex[0].push(i)
      }
    }
    if (startingInd < 20 || startingInd > 50) {
      ArrIndex[1] = []
      ArrIndex[2] = []
      for (let i = LastNum - 2; LastNum + 2 !== i; i++) {
        if (i < 0) {
          continue;
        } else {
          if (startingInd < 20 && warehouse[FirstNum].length >= i) {
            IterationCounter++
            ArrIndex[1].push(i)
          } else if (warehouse[FirstNum - 1].length >= i){
            IterationCounter++
            ArrIndex[1].push(i)
          }
        }
      }
      for (let i = LastNum - 2; LastNum + 1 !== i;  i++) {
        if (i < 0) {
          continue;
        } else if (warehouse[FirstNum - 1].length > i) {
          ArrIndex[2].push(i)
        }
      }
      console.log(ArrIndex)
    }else if (startingInd > 30 && startingInd < 40) {
      for (let i = 1; i < 5; i++) {
        ArrIndex[i] = new Array();
      }
      for (let i = LastNum - 2; LastNum + 2 !== i; i++) {
        IterationCounter++
        if (i < 0) {
          continue;
        } else if (warehouse[FirstNum - 2].length > i) {
          ArrIndex[1].push(i)
          if (IterationCounter == 4) {
            if (ArrIndex.length / 2 % 2 !== 0) {
              var ArrCountInd = ArrIndex.length / 2 + 0.5
            } else {
              var ArrCountInd = ArrIndex.length / 2
            }
            for (let i = 0; i < ArrIndex[1].length; i++) {
              ArrIndex[2].push(ArrIndex[1][i])
            }
          }
        }
      }
      IterationCounter = 0
      for (var i = LastNum - 2; LastNum + 1 !== i; i++) {
        IterationCounter++
        if (i < 0) {
          continue;
        } else if (warehouse[FirstNum - 2].length > i) {
          ArrIndex[3].push(i)
          if (IterationCounter == 3) {
            for (let Index = LastNum - 2; Index < 3 + LastNum - 2; Index++) {
              ArrIndex[4].push(Index)
            }
          }
        }
      }
    } else if (startingInd < 30 || startingInd > 40) {
      for (let i = 1; i < 4; i++) {
        ArrIndex[i] = new Array()
      }
      for (let i = LastNum - 3; LastNum + 1 !== i; i++) {
        if (i < 0) {
          continue;
        } else if (warehouse[FirstNum].length > i) {
          IterationCounter++
          ArrIndex[1].push(i)
        }
        if (LastNum == i) {
          if (ArrIndex.length / 2 % 2 !== 0) {
            var ArrCountInd = ArrIndex.length / 2 + 0.5
          } else {
            var ArrCountInd = ArrIndex.length / 2
          }
          for (let i = 0; ArrIndex[1].length > i; i++) {
            ArrIndex[2].push(ArrIndex[1][i])
          }
        }
      }
      for (let i = LastNum - 2; LastNum + 1 !== i;  i++) {
        if (i < 0) {
          continue;
        } else if (warehouse[FirstNum - 1].length > i) {
          ArrIndex[3].push(i)
        }
      }
    }
    for (let i = 0; i < ArrIndex[0].length; i++) {
      warehouse[FirstNum - 1][ArrIndex[0][i]].classList.add('arround-tiles')
      setTimeout(() => {warehouse[FirstNum - 1][ArrIndex[0][i]].classList.remove('arround-tiles')}, 2000)
    }
    for (let i = 0; i < ArrIndex[1].length; i++) {
      if (ArrIndex.length == 3) {
        if (startingInd < 20) {
          warehouse[FirstNum][ArrIndex[1][i]].classList.add('arround-tiles')
          setTimeout(() => {warehouse[FirstNum][ArrIndex[1][i]].classList.remove('arround-tiles')}, 2000)
          if (ArrIndex[1].length == i + 1) {
            for (let i = 0; i < ArrIndex[2].length; i++) {
              warehouse[FirstNum + 1][ArrIndex[2][i]].classList.add('arround-tiles')
              setTimeout(() => {warehouse[FirstNum + 1][ArrIndex[2][i]].classList.remove('arround-tiles')}, 2000)
            }
          }
        } else if (startingInd > 50) {
          warehouse[FirstNum - 2][ArrIndex[1][i]].classList.add('arround-tiles')
          setTimeout(() => {warehouse[FirstNum - 2][ArrIndex[1][i]].classList.remove('arround-tiles')}, 2000)
          if (ArrIndex[1].length == i + 1) {
            for (let i = 0; i < ArrIndex[2].length; i++) {
              warehouse[FirstNum - 3][ArrIndex[2][i]].classList.add('arround-tiles')
              setTimeout(() => {warehouse[FirstNum - 3][ArrIndex[2][i]].classList.remove('arround-tiles')}, 2000)
            }
          }
        }
      }
      if (ArrIndex.length > 3){
        warehouse[FirstNum][ArrIndex[2][i]].classList.add('arround-tiles')
        warehouse[FirstNum - 2][ArrIndex[1][i]].classList.add('arround-tiles')
        setTimeout(() => {warehouse[FirstNum][ArrIndex[2][i]].classList.remove('arround-tiles')}, 2000)
        setTimeout(() => {warehouse[FirstNum - 2][ArrIndex[1][i]].classList.remove('arround-tiles')}, 2000)
        console.log(ArrIndex[3].length !== i)
        if (FirstNum == 2 || FirstNum == 3) {
          if (ArrIndex[3].length !== i) {
            warehouse[FirstNum + 1][ArrIndex[3][i]].classList.add('arround-tiles')
            setTimeout(() => {warehouse[FirstNum + 1][ArrIndex[3][i]].classList.remove('arround-tiles')}, 2000)
          }
        }
        if (FirstNum == 4 || FirstNum == 3) {
          if (ArrIndex[3].length !== i) {
            warehouse[FirstNum - 3][ArrIndex[3][i]].classList.add('arround-tiles')
            setTimeout(() => {warehouse[FirstNum - 3][ArrIndex[3][i]].classList.remove('arround-tiles')}, 2000)
          }
        }
      }
    }

  }
  console.log(ArrIndex)
}