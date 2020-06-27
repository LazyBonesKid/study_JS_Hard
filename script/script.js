'use strict';

function DomElement (selector, height, width, bg, frontSize) {
    this.selector  = selector;
    this.height    = height;
    this.width     = width;
    this.bg        = bg;
    this.frontSize = frontSize;
    
}

DomElement.prototype.domCreate = function () {
    let style = document.createElement('style');
    style.type = 'text/css';

    style.innerHTML =`${this.selector} { 
    height: ${this.height};
    width:  ${this.width};
    background: ${this.bg};
    font-size: ${this.frontSize};
    position: absolute;
    `;

    document.getElementsByTagName('head')[0].appendChild(style);
    
    let 
    selectorDop = this.selector.slice(1),
    docEl;

    if (this.selector.indexOf('.') !== -1) {
        docEl = document.createElement('div');
        docEl.className = selectorDop;
    }else if (this.selector.indexOf('#') !== -1){
        docEl = document.createElement('p');
        docEl.setAttribute('id', selectorDop);
    }

    docEl.textContent =  prompt('text');
    document.body.append(docEl);

    docEl.style.top = '0px';
    docEl.style.right = '0px';
    document.addEventListener('keydown', function(event) {
        if (event.code == 'KeyW' || event.code == 'ArrowUp') {
            dTop -= 10;
            docEl.style.top = dTop + 'px';
        }
        if (event.code == 'KeyS' || event.code == 'ArrowDown') {
            dTop += 10;
            docEl.style.top = dTop + 'px';
        }
        if (event.code == 'KeyD' || event.code == 'ArrowRight') {
            dRight -= 10;
            docEl.style.right = dRight + 'px';
        }
        if (event.code == 'KeyA' || event.code == 'ArrowLeft') {
            dRight += 10;
            docEl.style.right = dRight + 'px';
        }
        if (event.code == 'KeyQ') {
            dRight += 10;
            dTop   -= 10;
            docEl.style.top = dTop + 'px';
            docEl.style.right = dRight + 'px';
        }
        if (event.code == 'KeyE') {
            dRight -= 10;
            dTop   -= 10;
            docEl.style.top = dTop + 'px';
            docEl.style.right = dRight + 'px';
        }
        if (event.code == 'KeyC') {
            dRight -= 10;
            dTop   += 10;
            docEl.style.top = dTop + 'px';
            docEl.style.right = dRight + 'px';
        }
        if (event.code == 'KeyZ') {
            dRight += 10;
            dTop   += 10;
            docEl.style.top = dTop + 'px';
            docEl.style.right = dRight + 'px';
        }
    });
};

let domEl = new DomElement('#black','100px','100px','#00FA9A', '50px');

domEl.domCreate();

let 
dTop = 0,
dRight = 0;
